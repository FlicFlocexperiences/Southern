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
        // Search/answer engines: OpenAI, Anthropic, Perplexity, Google Gemini, Apple Intelligence, Amazon, Meta AI, Bing Copilot
        userAgent: [
          'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
          'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
          'PerplexityBot', 'Perplexity-User',
          'Google-Extended', 'GoogleOther',
          'Applebot', 'Applebot-Extended',
          'Amazonbot',
          'FacebookBot', 'meta-externalagent',
          'bingbot', 'DuckAssistBot', 'MistralAI-User',
        ],
        allow: '/',
      }
    ],
    sitemap: 'https://www.southernedgemarketing.com/sitemap.xml',
  };
}
