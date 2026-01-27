import nodemailer from 'nodemailer';

function json(res: any, status: number, body: any) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

function getEnv(name: string, fallback?: string) {
  const v = process.env[name];
  return (v && String(v).trim()) || fallback;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function readBody(req: any): Promise<any> {
  // Vercel parses JSON automatically sometimes, but we handle both cases.
  if (req.body && typeof req.body === 'object') return req.body;

  const chunks: Uint8Array[] = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf-8');
  if (!raw) return {};

  const contentType = String(req.headers?.['content-type'] || '').toLowerCase();
  if (contentType.includes('application/json')) {
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }

  // Basic form-urlencoded support
  if (contentType.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams(raw);
    return Object.fromEntries(params.entries());
  }

  return {};
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { ok: false, error: 'Method not allowed' });
  }

  try {
    const data = await readBody(req);

    // Honeypot (spam)
    const honeypot = String(data.company || data.website || '').trim();
    if (honeypot) return json(res, 200, { ok: true });

    const name = String(data.name || data.nombre || '').trim();
    const email = String(data.email || '').trim();
    const phone = String(data.phone || data.telefono || '').trim();
    const service = String(data.service || data.servicio || data.subject || '').trim();
    const message = String(data.message || data.mensaje || '').trim();

    if (!name || name.length < 2) return json(res, 400, { ok: false, error: 'Invalid name' });
    if (!email || !isValidEmail(email)) return json(res, 400, { ok: false, error: 'Invalid email' });
    if (!message || message.length < 10) return json(res, 400, { ok: false, error: 'Invalid message' });

    const smtpHost = getEnv('SMTP_HOST');
    const smtpPort = Number(getEnv('SMTP_PORT', '465'));
    const smtpUser = getEnv('SMTP_USER');
    const smtpPass = getEnv('SMTP_PASS');

    const mailTo = getEnv('MAIL_TO', smtpUser);
    const mailFrom = getEnv('MAIL_FROM', smtpUser);

    if (!smtpUser || !smtpPass) {
      return json(res, 500, {
        ok: false,
        error: 'Missing SMTP_USER/SMTP_PASS env vars',
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost || 'smtp.gmail.com',
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subjectParts = ['Nuevo contacto web'];
    if (service) subjectParts.push(service);
    subjectParts.push(name);

    const subjectLine = `[Hmmcode] ${subjectParts.join(' - ')}`;

    const lines = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      phone ? `Teléfono: ${phone}` : null,
      service ? `Servicio/Asunto: ${service}` : null,
      '',
      'Mensaje:',
      message,
    ].filter(Boolean);

    const text = lines.join('\n');

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>Nuevo contacto web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>` : ''}
        ${service ? `<p><strong>Servicio/Asunto:</strong> ${escapeHtml(service)}</p>` : ''}
        <hr />
        <p><strong>Mensaje:</strong></p>
        <pre style="white-space: pre-wrap;">${escapeHtml(message)}</pre>
      </div>
    `;

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: subjectLine,
      text,
      html,
    });

    return json(res, 200, { ok: true });
  } catch (err: any) {
    return json(res, 500, { ok: false, error: err?.message || 'Internal error' });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
