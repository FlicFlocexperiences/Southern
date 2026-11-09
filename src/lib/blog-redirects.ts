// Blog posts merged into a stronger page on the same topic (SEO consolidation).
// Used by next.config.ts (301 redirects) and app/sitemap.ts (excluded from sitemap).
export const BLOG_REDIRECTS: { from: string; to: string }[] = [
  // Duplicate topics (Nov 2026)
  { from: "on-page-seo-vs-off-page-seo", to: "/blogs/on-page-seo-vs-off-page-seo-guide" },
  { from: "top-social-media-marketing-agency-delhi", to: "/blogs/social-media-marketing-agency-delhi" },
  // Shopify UAE / Dubai agency
  { from: "top-shopify-development-united-arab-emirates", to: "/blogs/best-shopify-agencies-uae" },
  { from: "shopify-web-development-agency-dubai-plus-partner", to: "/services/shopify-agency-dubai" },
  // Shopify Delhi / Gurgaon agency
  { from: "shopify-development-company-in-delhi", to: "/blogs/best-shopify-website-agency-delhi-gurugram" },
  { from: "shopify-agency-in-delhi", to: "/blogs/best-shopify-website-agency-delhi-gurugram" },
  { from: "best-shopify-developer-in-delhi", to: "/blogs/best-shopify-website-agency-delhi-gurugram" },
  // Shopify agency (general)
  { from: "shopify-development-growing-brands-startups", to: "/blogs/shopify-web-development-agency-guide" },
  // How to build a Shopify store
  { from: "how-to-make-website-on-shopify", to: "/blogs/how-to-build-a-shopify-website" },
  { from: "best-shopify-website-builder-guide", to: "/blogs/how-to-build-a-shopify-website" },
  // Why Shopify
  { from: "popular-platform-shopify-for-ecommerce", to: "/explore-more/why-shopify-good-for-ecommerce" },
];

export const REDIRECTED_BLOG_SLUGS = new Set(BLOG_REDIRECTS.map((r) => r.from));
