import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://secret-santa-generator.net';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // API routes
          '/event/',         // Dynamic event pages (user-specific)
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
