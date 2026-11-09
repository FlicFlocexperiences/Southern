"use client";

import { usePathname } from "next/navigation";

const BASE = "https://www.southernedgemarketing.com";

const SERVICE_NAMES: Record<string, string> = {
  "web-development": "Website Development",
  "app-development": "Mobile App Development",
  "social-media-management": "Social Media Management",
  branding: "Branding & Creative Strategy",
  seo: "SEO Services",
  "meta-ads": "Meta Ads Management",
};

const titleCase = (slug: string) =>
  slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

// Adds Service + BreadcrumbList structured data to city service pages
// (/services/<service>/<city>). Top-level service pages already ship their own.
export function CityServiceSchema({ title }: { title: string }) {
  const pathname = usePathname() || "";
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length !== 3 || parts[0] !== "services") return null;

  const [, serviceSlug, citySlug] = parts;
  const serviceName = SERVICE_NAMES[serviceSlug] || titleCase(serviceSlug);
  const cityName = citySlug === "delhi" ? "New Delhi" : titleCase(citySlug);
  const url = `${BASE}${pathname}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: title,
        serviceType: serviceName,
        url,
        areaServed: { "@type": "City", name: cityName },
        provider: {
          "@type": "Organization",
          name: "Southern Edge Marketing",
          url: BASE,
          logo: `${BASE}/LOGO_Final.svg`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
          { "@type": "ListItem", position: 3, name: serviceName, item: `${BASE}/services/${serviceSlug}` },
          { "@type": "ListItem", position: 4, name: cityName, item: url },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
