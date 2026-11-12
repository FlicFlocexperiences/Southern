import React from "react";
import Link from "next/link";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceLayout } from "@/components/ServiceLayout";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getSeoPagesFor, type SeoPage } from "@/data/seo-pages";

const BASE = "https://www.southernedgemarketing.com";

const SERVICE_META: Record<SeoPage["service"], { name: string; href: string }> = {
  "meta-ads": { name: "Meta Ads", href: "/services/meta-ads" },
  "web-development": { name: "Website Development", href: "/services/web-development" },
};

const linkClass = "text-[#de5e18] font-semibold underline underline-offset-2 hover:text-[#432d1c]";
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
  const siblings = getSeoPagesFor(page.service, page.kind).filter((p) => p.slug !== page.slug);

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
      />

      <ServiceLayout sections={toc}>
        {page.sections.map((section) => (
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
              <ul className="list-disc pl-6 my-5 space-y-2 text-[17px] md:text-[18px] leading-[1.7] text-[#432d1c]/90 font-sans">
                {section.bullets.map((b, i) => (
                  <li key={i}>{renderInline(b, `${section.id}-li${i}`)}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="w-full bg-white border border-black/10 rounded-2xl p-6 md:p-8 shadow-sm mt-10 mb-6">
          <h2 id="related" className="text-[20px] md:text-[22px] font-bold text-[#432d1c] mb-4 scroll-mt-28">
            Related Reading
          </h2>
          <ul className="space-y-2">
            {page.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className={linkClass}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <FaqAccordion faqs={page.faqs} />

        <section className="mt-12">
          <h2 className="text-[20px] md:text-[22px] font-bold text-[#432d1c] mb-4">
            {page.kind === "city" ? `${service.name} in Other Cities` : `${service.name} for Other Industries`}
          </h2>
          <div className="flex flex-wrap gap-2">
            {siblings.map((s) => (
              <Link
                key={s.slug}
                href={`${service.href}/${s.slug}`}
                className="px-4 py-2 rounded-full bg-[#fbf8f5] border border-[#e6d0bb] text-[14px] text-[#432d1c] hover:border-[#de5e18] hover:text-[#de5e18] transition-colors"
              >
                {s.kind === "city" ? `${service.name} in ${s.label}` : `${service.name} for ${s.label}`}
              </Link>
            ))}
            <Link
              href={service.href}
              className="px-4 py-2 rounded-full bg-[#432d1c] text-white text-[14px] hover:bg-[#de5e18] transition-colors"
            >
              All {service.name} Services
            </Link>
          </div>
        </section>
      </ServiceLayout>
    </div>
  );
}

// Hub block for the parent service pages: links to every city/industry page.
export function SeoHubLinks({ service }: { service: SeoPage["service"] }) {
  const meta = SERVICE_META[service];
  const cities = getSeoPagesFor(service, "city");
  const industries = getSeoPagesFor(service, "industry");
  const group = (title: string, items: SeoPage[], prefix: string) =>
    items.length > 0 && (
      <div className="mb-8">
        <h3 className="text-[18px] md:text-[20px] font-bold text-[#3b2b23] mb-4">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((p) => (
            <Link
              key={p.slug}
              href={`${meta.href}/${p.slug}`}
              className="block rounded-xl bg-[#fbf8f5] border border-[#e6d0bb]/70 px-5 py-4 text-[#432d1c] hover:border-[#de5e18] hover:text-[#de5e18] transition-colors"
            >
              <span className="font-semibold">{prefix} {p.label}</span>
            </Link>
          ))}
        </div>
      </div>
    );

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-16 border-t border-[#e6d0bb]/50">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3b2b23] mb-3">
          {meta.name} by {cities.length > 0 ? "City and Industry" : "Industry"}
        </h2>
        <p className="text-lg text-[#554238] max-w-3xl mx-auto">
          Every market and industry needs a different approach. Find the page that fits your business.
        </p>
      </div>
      {group(`${meta.name} by City`, cities, `${meta.name} in`)}
      {group(`${meta.name} by Industry`, industries, `${meta.name} for`)}
    </section>
  );
}
