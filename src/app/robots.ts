import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/authority/'],
    },
    sitemap: 'https://southernedgemarketing.com/sitemap.xml',
  };
}
