---
/**
 * SEO Configuration for Astro
 * Proporciona funciones reutilizables para SEO en todas las páginas
 */

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedDate?: string;
  robots?: string;
}

export function generateSeoTags(props: SeoProps): string {
  const {
    title,
    description,
    image = 'https://hmmcode.vercel.app/og-image.png',
    url = 'https://hmmcode.vercel.app',
    type = 'website',
    author = 'Hmmcode',
    robots = 'index, follow',
  } = props;

  return `
    <!-- Esenciales -->
    <meta name="description" content="${description}" />
    <meta name="robots" content="${robots}" />
    <meta name="author" content="${author}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5.0" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${type}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:site_name" content="Hmmcode" />
    <meta property="og:locale" content="es_CL" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${url}" />
    <meta property="twitter:title" content="${title}" />
    <meta property="twitter:description" content="${description}" />
    <meta property="twitter:image" content="${image}" />
    
    <!-- Adicionales -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="theme-color" content="#667eea" />
    <link rel="canonical" href="${url}" />
  `;
}

export function generateLocalBusinessSchema(data: {
  name: string;
  description: string;
  image: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  url: string;
}): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': data.url,
    name: data.name,
    image: data.image,
    description: data.description,
    telephone: data.phone,
    email: data.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address,
      addressLocality: data.city,
      addressRegion: data.region,
      postalCode: data.postalCode,
      addressCountry: 'CL',
    },
    url: data.url,
    sameAs: [
      'https://www.facebook.com/hmmcode',
      'https://www.instagram.com/hmmcode',
    ],
  });
}

export function generateOrganizationSchema(data: {
  name: string;
  url: string;
  logo: string;
  contact: string;
}): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    logo: data.logo,
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: data.contact,
    },
  });
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  });
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });
}
