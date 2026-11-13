import React from "react";
import Link from "next/link";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceLayout } from "@/components/ServiceLayout";
import { FaqAccordion } from "@/components/FaqAccordion";
import { type SeoPage } from "@/data/seo-pages";
import { getServiceBySlug } from "@/data/services";
import { ConsultButton, ArrowCircle } from "@/components/consult-button";
import { SeoHubLinks } from "@/components/seo-hub";

const BASE = "https://www.southernedgemarketing.com";

const SERVICE_META: Record<SeoPage["service"], { name: string; href: string }> = {
  "meta-ads": { name: "Meta Ads", href: "/services/meta-ads" },
  "web-development": { name: "Website Development", href: "/services/web-development" },
};

// Hero badges. Meta Ads reuses the main service page's badges; web development
// uses claims that hold for every industry page.
const WEB_DEV_BADGES = [
  { title: "Shopify Plus", subtitle: "& Hydrogen Certified" },
  { title: "Custom Builds", subtitle: "Next.js, Shopify & Headless" },
  { title: "SEO-Ready", subtitle: "Schema, Speed & Clean URLs" },
  { title: "India & UAE", subtitle: "Delhi and Dubai Team" },
];

const linkClass = "text-[#de5e18] hover:underline font-semibold transition-colors duration-200";
const strongClass = "font-semibold text-[#de5e18] tracking-tight";

// Renders **bold** and [text](/href) inside copy strings.
function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1]) {
      nodes.push(<strong key={`${keyPrefix}-b${i}`} className={strongClass}>{m[1]}</strong>);
    } else {
      nodes.push(<Link key={`${keyPrefix}-l${i}`} href={m[3]} className={linkClass}>{m[2]}</Link>);
    }
    last = m.index + m[0].length;
    i++;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function PageSchema({ page }: { page: SeoPage }) {
  const service = SERVICE_META[page.service];
  const url = `${BASE}${service.href}/${page.slug}`;
  const serviceNode: Record<string, unknown> = {
    "@type": "Service",
    name: page.h1,
    serviceType: service.name,
    url,
    description: page.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Southern Edge Marketing",
      url: BASE,
      logo: `${BASE}/LOGO_Final.svg`,
    },
  };
  if (page.kind === "city" && page.areaServed) {
    serviceNode.areaServed = { "@type": "City", name: page.areaServed };
  } else {
    serviceNode.areaServed = [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United Arab Emirates" },
    ];
  }
  if (page.audience) {
    serviceNode.audience = { "@type": "BusinessAudience", name: page.audience };
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      serviceNode,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
          { "@type": "ListItem", position: 3, name: service.name, item: `${BASE}${service.href}` },
          { "@type": "ListItem", position: 4, name: page.label, item: url },
        ],
      },
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

export function SeoLandingPage({ page }: { page: SeoPage }) {
  const service = SERVICE_META[page.service];
  const badges =
    page.service === "meta-ads" ? getServiceBySlug("meta-ads")?.trustBadges ?? [] : WEB_DEV_BADGES;
  const where = page.kind === "city" ? `in ${page.label}` : `for ${page.label}`;

  const toc = [
    ...page.sections.map((s) => ({ id: s.id, title: s.h2 })),
    { id: "related", title: "Related Reading" },
    { id: "faq", title: "FAQ" },
  ];

  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <PageSchema page={page} />
      <ServiceHero
        title={page.h1}
        tagline={page.tagline}
        breadcrumbTitle={page.label}
        parent={{ href: service.href, label: service.name }}
        skipSchema
        trustBadges={badges}
      />

      <ServiceLayout sections={toc}>
        {page.sections.map((section, idx) => (
          <section key={section.id}>
            <h2 id={section.id} className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              {section.h2}
            </h2>
            {section.paragraphs?.map((para, i) => (
              <p key={i} className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
                {renderInline(para, `${section.id}-p${i}`)}
              </p>
            ))}
            {section.bullets && (
              <ul className="list-disc pl-6 mb-6 text-[#432d1c]/80 space-y-2 text-[16px] md:text-[18px] font-normal font-sans">
                {section.bullets.map((b, i) => (
                  <li key={i}>{renderInline(b, `${section.id}-li${i}`)}</li>
                ))}
              </ul>
            )}

            {idx === 1 && (
              <div className="not-prose my-10 w-full rounded-2xl bg-[#432d1c] px-6 py-8 md:px-10 text-center flex flex-col items-center">
                <div className="text-[11px] sm:text-[12px] tracking-[0.2em] font-bold text-[#de5e18] uppercase mb-2">[ FREE AUDIT ]</div>
                <p className="text-[20px] md:text-[24px] font-bold text-white leading-snug mb-2 max-w-[520px]">
                  {page.service === "meta-ads"
                    ? `Want better Meta Ads results ${where}?`
                    : `Planning a website ${where}?`}
                </p>
                <p className="text-[14px] md:text-[15px] text-white/70 font-light mb-6 max-w-[480px]">
                  {page.service === "meta-ads"
                    ? "Share your ad account and goals. We'll show you what's wasting budget and what to test first."
                    : "Tell us what you need. We'll suggest the right platform, features and a fixed quote."}
                </p>
                <ConsultButton />
              </div>
            )}
          </section>
        ))}

        <section className="not-prose w-full mt-10 mb-6">
          <h2 id="related" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mb-4 scroll-mt-28">
            Related Reading
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {page.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex items-center justify-between bg-[#fbf8f5] hover:bg-white transition-all duration-300 rounded-xl p-4 border border-black/5 hover:border-[#e6d0bb] hover:-translate-y-0.5 no-underline"
              >
                <span className="text-[15px] font-bold text-[#3b2b23] leading-snug">{r.label}</span>
                <ArrowCircle />
              </Link>
            ))}
          </div>
        </section>

        <FaqAccordion faqs={page.faqs} />
      </ServiceLayout>

      <SeoHubLinks
        service={page.service}
        excludeSlug={page.slug}
        title={page.kind === "city" ? `${service.name} Across Our Markets` : `More ${service.name} Solutions`}
        intro={`Looking beyond ${page.label}? Explore how we run ${service.name.toLowerCase()} for other cities and industries.`}
      />
    </div>
  );
}
