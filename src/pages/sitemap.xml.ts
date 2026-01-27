import type { APIRoute } from 'astro';

const SITE_URL = 'https://hmmcode.cl';

const pages = [
  {
    url: '/',
    lastmod: new Date().toISOString().split('T')[0],
    priority: '1.0',
    changefreq: 'daily',
  },
  {
    url: '/servicio-formateo',
    lastmod: new Date().toISOString().split('T')[0],
    priority: '0.95',
    changefreq: 'weekly',
  },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${SITE_URL}${page.url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en${page.url}" />
  </url>`
  )
  .join('\n')}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
};
