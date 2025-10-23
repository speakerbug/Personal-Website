import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/calendar', '/calendar/'],
      },
    ],
    sitemap: 'https://henrysaniuk.com/sitemap.xml',
  };
}
