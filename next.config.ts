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
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://www.facebook.com https://business.facebook.com https://*.facebook.com;",
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
    ];
  },
};

export default nextConfig;
