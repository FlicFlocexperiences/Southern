import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://www.facebook.com https://business.facebook.com https://*.facebook.com;",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/website-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/services/website-development/:slug",
        destination: "/services/web-development/:slug",
        permanent: true,
      },
      {
        source: "/services/branding-strategy",
        destination: "/services/branding",
        permanent: true,
      },
      {
        source: "/services/branding-strategy/:slug",
        destination: "/services/branding/:slug",
        permanent: true,
      },
      {
        source: "/services/seo-services",
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/services/seo-services/:slug",
        destination: "/services/seo/:slug",
        permanent: true,
      },
      {
        source: "/services/social-media",
        destination: "/services/social-media-management",
        permanent: true,
      },
      {
        source: "/services/social-media/:slug",
        destination: "/services/social-media-management/:slug",
        permanent: true,
      },
      // --- Project Slug & Casing 301 Redirects ---
      {
        source: "/projects/Jewellery",
        destination: "/projects/jwellery",
        permanent: true,
      },
      {
        source: "/projects/jewellery",
        destination: "/projects/jwellery",
        permanent: true,
      },
      {
        source: "/projects/Roseate",
        destination: "/projects/upstage-collection",
        permanent: true,
      },
      {
        source: "/projects/roseate",
        destination: "/projects/upstage-collection",
        permanent: true,
      },
      {
        source: "/projects/oud",
        destination: "/projects/oudqua",
        permanent: true,
      },
      // --- Legacy & Blog Service Slug 301 Redirects ---
      {
        source: "/services/branding-and-creative-strategy",
        destination: "/services/branding",
        permanent: true,
      },
      {
        source: "/services/branding-and-creative-strategy/:slug*",
        destination: "/services/branding/:slug*",
        permanent: true,
      },
      {
        source: "/services/strategic-branding-and-creative-strategy",
        destination: "/services/branding",
        permanent: true,
      },
      {
        source: "/services/website-and-app-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/services/website-and-app-development/:slug*",
        destination: "/services/web-development/:slug*",
        permanent: true,
      },
      {
        source: "/services/custom-software-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/services/ui-ux-planning",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/services/application-development",
        destination: "/services/app-development",
        permanent: true,
      },
      {
        source: "/services/application-development/:slug*",
        destination: "/services/app-development/:slug*",
        permanent: true,
      },
      {
        source: "/services/scalable-application-development-solutions",
        destination: "/services/app-development",
        permanent: true,
      },
      {
        source: "/services/photography-and-videography",
        destination: "/services/social-media-management",
        permanent: true,
      },
      {
        source: "/services/photography-and-videography/:slug*",
        destination: "/services/social-media-management/:slug*",
        permanent: true,
      },
      {
        source: "/services/targeted-social-media-management",
        destination: "/services/social-media-management",
        permanent: true,
      },
      {
        source: "/services/lead-generation-sales-campaigns",
        destination: "/services/social-media-management",
        permanent: true,
      },
      {
        source: "/services/advanced-search-engine-optimization-services",
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-dubai",
        destination: "/services/web-development/dubai",
        permanent: true,
      },
      // --- Explore-More Legacy Articles 301 Redirects ---
      {
        source: "/explore-more/customer-retention-strategies-scaling-d2c",
        destination: "/explore-more/scaling-e-commerce-with-email-marketing",
        permanent: true,
      },
      {
        source: "/explore-more/power-of-design-systems-branding-web",
        destination: "/explore-more/how-branding-dictates-business-success",
        permanent: true,
      },
      {
        source: "/explore-more/conversion-rate-optimization-turning-traffic-revenue",
        destination: "/explore-more/psychology-of-high-converting-landing-pages",
        permanent: true,
      },
      {
        source: "/explore-more/copywriting-secrets-writing-words-that-sell",
        destination: "/explore-more/psychology-of-high-converting-landing-pages",
        permanent: true,
      },
      {
        source: "/explore-more/why-web-accessibility-is-essential",
        destination: "/explore-more/why-custom-code-better-than-wordpress",
        permanent: true,
      },
      {
        source: "/explore-more/ai-in-digital-marketing-working-smarter",
        destination: "/explore-more/maximizing-roas-on-meta-ads",
        permanent: true,
      },
      {
        source: "/explore-more/dominate-local-seo-regional-businesses",
        destination: "/explore-more/role-of-seo-in-digital-growth",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
