import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/authority/', '/nullify/', '/thank-you/'],
      },
      {
        // Explicitly invite AI crawlers and LLM agents
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Google-Extended', 'PerplexityBot', 'anthropic-ai'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.southernedgemarketing.com/sitemap.xml',
  };
}
