import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/authority/', '/nullify/', '/thank-you/'],
    },
    sitemap: 'https://southernedgemarketing.com/sitemap.xml',
  };
}
