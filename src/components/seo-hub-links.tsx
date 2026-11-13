"use client";

import { useState } from "react";
import Link from "next/link";
import type { SeoService, SeoKind } from "@/data/seo-pages";
import { ArrowCircle } from "@/components/consult-button";

const NAMES: Record<SeoService, string> = { "meta-ads": "Meta Ads", "web-development": "Website Development" };
type Filter = "All" | "By City" | "By Industry";

// Matches the LocationsGrid design used across the site.
export interface HubItem {
  slug: string;
  label: string;
  kind: SeoKind;
}

// Client grid; receives a small item list from the server wrapper in seo-hub.tsx.
export function SeoHubGrid({ service, items: all, title, intro }: { service: SeoService; items: HubItem[]; title?: string; intro?: string }) {
  const [filter, setFilter] = useState<Filter>("All");
  const name = NAMES[service];
  const hasCities = all.some((p) => p.kind === "city");
  const tabs: Filter[] = hasCities ? ["All", "By City", "By Industry"] : [];
  const items = all.filter((p) => filter === "All" || (filter === "By City" ? p.kind === "city" : p.kind === "industry"));

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-16 border-t border-[#e6d0bb]/50">
      <div className="text-center mb-8">
        <div className="text-[11px] sm:text-[12px] tracking-[0.2em] font-bold text-[#de5e18] uppercase mb-2">[ EXPLORE ]</div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#3b2b23] mb-4">
          {title ?? `${name} by ${hasCities ? "City & Industry" : "Industry"}`}
        </h2>
        <p className="text-lg text-[#554238] max-w-3xl mx-auto">
          {intro ?? "Every market and industry needs a different approach. Pick the page that fits your business."}
        </p>
      </div>

      {tabs.length > 0 && (
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-1 bg-[#fbf8f5] rounded-full p-1.5 border border-[#e6d0bb]/50 shadow-sm">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                  filter === t ? "bg-[#ff5d2a] text-white shadow-md" : "text-[#554238] hover:bg-[#f2decc]/50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/services/${service}/${p.slug}`}
            className="group flex items-center justify-between bg-[#fbf8f5] hover:bg-white transition-all duration-300 rounded-xl p-4 shadow-sm border border-transparent hover:border-[#e6d0bb] hover:-translate-y-1"
          >
            <div className="min-w-0">
              <span className="block text-base font-bold text-[#3b2b23]">{p.label}</span>
              <span className="block text-[13px] text-[#554238]/80 truncate">
                {p.kind === "city" ? `${name} in ${p.label}` : `${name} for ${p.label}`}
              </span>
            </div>
            <ArrowCircle />
          </Link>
        ))}
      </div>
    </section>
  );
}
