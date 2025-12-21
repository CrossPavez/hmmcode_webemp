# 🔐 ESTRATEGIA DE SEGURIDAD EMPRESARIAL - HMMCODE

## 📋 CONTEXTO DEL NEGOCIO
**Nicho**: Mantenimiento y reparación técnica de computadoras, laptops y consolas (B2C)
**Mercado**: Chile (RM especialmente)
**Riesgos**: Spam, competencia, phishing, robo de leads, abuso de APIs

---

## 🚨 ACTIVOS CRÍTICOS A PROTEGER

### 1. FORMULARIO DE CONTACTO (ALTO RIESGO)
**Por qué**: Es tu principal canal de leads
**Riesgos**:
- Spam masivo (robots, competencia)
- Abuso de Formspree
- Inyección SQL
- DoS (Denial of Service)

**Protección**:
```
✅ Formspree ID en variable de entorno
✅ Rate limiting (1 envío por 5 segundos)
✅ CAPTCHA (opcional)
✅ Validación de email
✅ Honeypot field (trampa para bots)
```

### 2. CONTACTO DIRECTO (BAJO-MEDIO RIESGO)
**Email & Teléfono**: hmmcodecl@gmail.com / +56948645816
**Riesgo**: Scraping por bots para spam/llamadas
**Protección**:
```
✅ Email: Mostrar en sitio (es de negocio)
✅ Teléfono: Mostrar en sitio (es de negocio)
✅ Ofuscación en HTML (opcional: prevenir scraping automático)
```

### 3. INTELIGENCIA DE NEGOCIO (ALTO RIESGO)
**Qué proteger**:
- Lista de clientes (si la tenías)
- Precios/tarifas exactas
- Testimonios con datos personales
- Proceso/metodología técnica

**Protección**:
```
✅ No guardar datos de clientes en Git
✅ Precios públicos OK (competencia puede verlos)
✅ Testimonios: Iniciales solo (ej: "Juan M." en lugar de "Juan Martínez")
✅ Procesos: Generalizar sin revelar secretos técnicos
```

### 4. CREDENCIALES & APIs (CRÍTICO)
**Qué proteger**:
- Google API Keys
- Formspree form ID
- Google Analytics ID (no es crítico, pero es específico de tu account)
- Contraseñas

**Protección**:
```
✅ Formspree ID → .env.local
✅ GA ID → .env (es pública, pero centralizamos)
✅ Email → .env (para cambios rápidos)
✅ Nunca commitear .env, .env.local, .env.production
```

---

## 🛡️ IMPLEMENTACIÓN PROFESIONAL

### PASO 1: Variables de Entorno Seguras

**archivo: `.env.example` (PÚBLICO en Git)**
```env
# 🔓 VARIABLES PÚBLICAS - Seguro en Git
PUBLIC_BUSINESS_NAME=Hmmcode
PUBLIC_BUSINESS_PHONE=+56948645816
PUBLIC_BUSINESS_EMAIL=hmmcodecl@gmail.com
PUBLIC_BUSINESS_REGION=RM
PUBLIC_SITE_URL=https://hmmcode.vercel.app
PUBLIC_GA_ID=G-XXXXX

# 📧 SENSIBLES - Solo en .env.local (NO en Git)
PUBLIC_FORMSPREE_ID=mgvgqdap
FORMSPREE_ENDPOINT=https://formspree.io/f/

# 🔐 PRIVADAS - Backend solo (NO en frontend)
GOOGLE_API_KEY=xxx_keep_secret
DB_PASSWORD=xxx_keep_secret
```

**archivo: `.env.local` (PRIVADO - gitignore)**
```env
PUBLIC_FORMSPREE_ID=mgvgqdap
FORMSPREE_ENDPOINT=https://formspree.io/f/
```

### PASO 2: Usar Variables en Código

**Contact.astro - ANTES:**
```astro
<form action="https://formspree.io/f/mgvgqdap" method="POST">
```

**Contact.astro - DESPUÉS:**
```astro
---
const FORMSPREE_ID = import.meta.env.PUBLIC_FORMSPREE_ID || 'mgvgqdap';
const formAction = `${import.meta.env.PUBLIC_FORMSPREE_ENDPOINT}${FORMSPREE_ID}`;
---

<form action={formAction} method="POST">
```

### PASO 3: Proteger Contacto en HTML

**Ofuscación simple de email (previene scraping básico):**
```html
<!-- ❌ NO HACER: Fácil de scrapear -->
<a href="mailto:hmmcodecl@gmail.com">hmmcodecl@gmail.com</a>

<!-- ✅ HACER: Difícil para bots simples -->
<a href="mailto:hmm[NOSPAM]codecl@gmail.com" 
   data-email="hmmcodecl@gmail.com"
   onclick="this.href='mailto:'+this.dataset.email">
  Contactar por Email
</a>
```

### PASO 4: Rate Limiting (Prevenir Spam)

**Agregar en Contact.astro:**
```javascript
// Rate limiting: 1 formulario por 5 segundos
let lastFormSubmit = 0;
const RATE_LIMIT = 5000; // ms

document.getElementById('contactFormSimple')?.addEventListener('submit', (e) => {
  const now = Date.now();
  if (now - lastFormSubmit < RATE_LIMIT) {
    e.preventDefault();
    alert('Por favor espera unos segundos antes de enviar otro formulario');
    return;
  }
  lastFormSubmit = now;
});
```

### PASO 5: Validación Fuerte

**Email + Honeypot + Rate Limit:**
```html
<!-- Honeypot: campo oculto para bots -->
<input 
  type="text" 
  name="company" 
  style="display: none;"
  tabindex="-1"
  autocomplete="off"
/>

<!-- Validación HTML5 -->
<input 
  type="email" 
  required 
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
/>
```

---

## 📊 CONFIGURACIÓN POR ENTORNO

### DESARROLLO (local)
```
.env.local → tus valores de test
```

### STAGING (pruebas)
```
Variables de Vercel → settings
```

### PRODUCCIÓN (live)
```
Variables de Vercel → settings (ENCRIPTADAS)
NO se vuelcan en Git
```

**En Vercel:**
1. Proyecto → Settings → Environment Variables
2. Agregar `PUBLIC_FORMSPREE_ID=mgvgqdap`
3. Marcar como "Production"
4. Clickear "Encrypt" (Vercel lo hace automático)

---

## 🎯 PROTECCIONES ESPECÍFICAS POR NICHO

### Para Negocio de Mantenimiento Técnico:

**1. Testimonios Seguros**
```
❌ "Juan Carlos Martínez" - Cerrillos
✅ "Juan M." - Cliente verificado
```

**2. Proceso Técnico Confidencial**
```
❌ "Usamos herramienta X, limpiamos partición Y"
✅ "Diagnóstico profesional + limpieza + optimización"
```

**3. Precios Competitivos**
```
✅ Mostrar precios (son públicos en tu web)
✅ Mostrar rango: $25K-$50K
❌ Guardar análisis de competencia en Git
```

**4. Base de Datos de Clientes**
```
✅ Guardar en: Drive privado, Notion privado, CRM
❌ NUNCA en Git
```

---

## 🔍 AUDITORÍA: QUÉ HAY EN TU GIT AHORA

```
✅ SEGURO:
- Nombre: Hmmcode
- Email: hmmcodecl@gmail.com
- Teléfono: +56948645816
- Servicios/Precios públicos

⚠️ REVISAR:
- Formspree ID hardcodeado (mgvgqdap)
- Schema.org con email (OK si es de negocio)

✅ PROTEGIDO:
- .env en .gitignore
- No hay contraseñas
- No hay tokens privados
```

---

## 📋 CHECKLIST IMPLEMENTACIÓN

### PRIORIDAD 1 (HOY)
- [ ] Crear `.env.local` localmente
- [ ] Mover `FORMSPREE_ID` a `.env`
- [ ] Actualizar Contact.astro a usar variables
- [ ] Agregar rate limiting al formulario
- [ ] Agregar honeypot field

### PRIORIDAD 2 (ESTA SEMANA)
- [ ] Ofuscación de email en HTML
- [ ] Validación más fuerte de email
- [ ] Configurar variables en Vercel
- [ ] Test con Formspree

### PRIORIDAD 3 (PRÓXIMAS SEMANAS)
- [ ] Agregar Google reCAPTCHA (si spam persiste)
- [ ] Analytics con eventos de form submit
- [ ] Monitorear abusos en Formspree
- [ ] Revisar logs de Google Search Console

---

## 🚨 RESPUESTA A EMERGENCIAS

**Si tu Formspree ID se filtra/abusa:**
1. Crear nuevo form en Formspree
2. Actualizar `PUBLIC_FORMSPREE_ID` en Vercel
3. Hacer redeploy automático
4. Cambiar .env.local localmente

**Si se filtra email:**
1. Cambiar email en Vercel variables
2. Redeploy
3. Crear alias en Gmail si es necesario

**Si alguien accede a tu GitHub:**
1. Ir a Settings → Security → Alerts
2. Revisar qué fue visto
3. Regenerar todos los tokens/keys

---

## 🔗 ESTÁNDARES DE INDUSTRIA

Para negocio técnico B2C en Chile:

✅ **OWASP Top 10**
- A01: Inyección (validación)
- A02: Autenticación (no aplica, sitio público)
- A03: Inyección (prevención)
- A07: Validación (honeypot + rate limit)

✅ **GDPR/PRIVACIDAD (si usas email)**
- Política de privacidad clara
- No guardar datos sin consentimiento
- Derecho al olvido

✅ **NCSC/NIS (Estándares Chile)**
- Usar HTTPS (Vercel: automático)
- Encriptación de variables (Vercel: automático)
- Logs de acceso

