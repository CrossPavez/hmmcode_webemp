import type { APIRoute } from 'astro';

const pages = [
  {
    url: '/',
    lastmod: new Date().toISOString().split('T')[0],
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    url: '/servicio-formateo',
    lastmod: new Date().toISOString().split('T')[0],
    priority: '0.9',
    changefreq: 'weekly',
  },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>https://hmmcode.vercel.app${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
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
