import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileFooter } from "@/components/mobile-footer";
import { Cta } from "@/components/cta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  alternates: {
    canonical: "/authors/ameet-nangia",
  },
  title: "Ameet Nangia - Founder & Lead Digital Strategist | Southern Edge Marketing",
  description:
    "Learn about Ameet Nangia, Founder and Lead Digital Strategist at Southern Edge Marketing. Specialist in SEO, Digital Strategy, Google Adwords, and Enterprise Lead Generation.",
  openGraph: {
    title: "Ameet Nangia - Founder & Lead Digital Strategist | Southern Edge Marketing",
    description:
      "Learn about Ameet Nangia, Founder and Lead Digital Strategist at Southern Edge Marketing. Specialist in SEO, Digital Strategy, Google Adwords, and Enterprise Lead Generation.",
    url: "https://southernedgemarketing.com/authors/ameet-nangia",
    siteName: "Southern Edge Marketing",
    images: [
      {
        url: "https://southernedgemarketing.com/assets/team/ameet.png",
        width: 800,
        height: 800,
        alt: "Ameet Nangia - Southern Edge Marketing",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ameet Nangia - Founder & Lead Digital Strategist | Southern Edge Marketing",
    description:
      "Learn about Ameet Nangia, Founder and Lead Digital Strategist at Southern Edge Marketing. Specialist in SEO, Digital Strategy, Google Adwords, and Enterprise Lead Generation.",
    images: ["https://southernedgemarketing.com/assets/team/ameet.png"],
  },
};

export default function AmeetNangiaAuthorPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ameet Nangia",
    "jobTitle": "Founder & Lead Digital Strategist",
    "worksFor": {
      "@type": "Organization",
      "name": "Southern Edge Marketing",
      "url": "https://southernedgemarketing.com"
    },
    "url": "https://southernedgemarketing.com/authors/ameet-nangia",
    "image": "https://southernedgemarketing.com/assets/team/ameet.png",
    "sameAs": [
      "https://www.linkedin.com/in/ameet-nangia-b231b864/"
    ],
    "description": "A Digital Marketer with hands-on Business Development Management with a demonstrated history of working in the construction industry. Skilled in Digital Strategy, Search Engine Optimization (SEO), Communication, Influencer Marketing, and Lead Generation."
  };

  const expertiseAreas = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Architecting data-driven technical audits, authoritative link graphs, and Generative Engine Optimization (GEO) strategies that capture high-intent enterprise search traffic.",
      tag: "Organic Growth"
    },
    {
      title: "Google AdWords & PPC Performance",
      description: "Managing high-efficiency paid acquisition campaigns with advanced bid strategy modeling, conversion tracking, and multi-market funnel optimization.",
      tag: "Paid Acquisition"
    },
    {
      title: "Digital Strategy & Business Development",
      description: "Bridging creative branding with quantifiable commercial pipelines to scale enterprise revenue and maximize customer lifetime value.",
      tag: "Growth Strategy"
    },
    {
      title: "Influencer Marketing & Brand Authority",
      description: "Building influential brand narratives and strategic partnerships that cultivate authentic market resonance and industry leadership.",
      tag: "Brand Resonance"
    },
    {
      title: "B2B Lead Generation",
      description: "Engineering predictable client acquisition engines, automated CRM pipelines, and conversion-optimized digital funnels.",
      tag: "Revenue Operations"
    },
    {
      title: "Industry & Enterprise Marketing",
      description: "Demonstrated history of driving commercial growth and business development across complex industrial, construction, and corporate sectors.",
      tag: "Sector Expertise"
    }
  ];

  return (
    <div className="w-full bg-[#f2decc] min-h-screen flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Navigation Headers */}
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>

      <main className="flex-grow pt-28 lg:pt-36 pb-20">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Breadcrumbs */}
          <div className="text-[13px] text-black/50 font-medium mb-8">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/about" className="hover:text-black transition-colors">Team</Link>
            <span className="mx-2">/</span>
            <span className="text-[#de5e18] font-semibold">Ameet Nangia</span>
          </div>

          {/* Author Profile Hero Card */}
          <div className="bg-white border border-black/10 rounded-[28px] p-6 sm:p-8 lg:p-12 shadow-sm relative overflow-hidden mb-12">
            <div className="absolute top-[-10%] right-[-5%] w-[40%] aspect-square rounded-full bg-[#de5e18]/10 blur-[50px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-center">
              
              {/* Profile Image Column */}
              <div className="flex flex-col items-center text-center">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-[24px] overflow-hidden bg-gradient-to-b from-white via-white to-[#ffd1b8] border-2 border-[#de5e18]/30 shadow-lg relative group">
                  <img
                    src="/assets/team/ameet.png"
                    alt="Ameet Nangia"
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#ffd1b8] to-transparent pointer-events-none" />
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/ameet-nangia-b231b864/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0a66c2]/10 hover:bg-[#0a66c2] text-[#0a66c2] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                    aria-label="Ameet Nangia LinkedIn Profile"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-[17px]" />
                  </a>
                  <a
                    href="tel:+918700901769"
                    className="text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] transition-colors flex items-center gap-1.5 bg-black/5 px-3.5 py-2 rounded-full"
                  >
                    <svg className="w-3.5 h-3.5 text-[#de5e18]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span>Direct Contact</span>
                  </a>
                </div>
              </div>

              {/* Profile Details Column */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-[#de5e18] bg-[#de5e18]/10 px-3 py-1 rounded-full">
                    Executive Leadership
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Verified Author</span>
                  </div>
                </div>

                <h1 className="text-[32px] sm:text-[44px] lg:text-[48px] font-extrabold text-[#0f0f0f] tracking-tight leading-[1.1] mb-2">
                  Ameet Nangia
                </h1>

                <p className="text-[16px] sm:text-[18px] font-semibold text-[#de5e18] mb-6">
                  Founder &amp; Lead Digital Strategist &bull; Digital Marketer | SEO | AdWords
                </p>

                <div className="w-full h-[1px] bg-black/10 mb-6" />

                <h2 className="text-[16px] font-bold uppercase tracking-wider text-[#432d1c] mb-2">
                  About
                </h2>
                <p className="text-[16px] sm:text-[17px] text-[#432d1c]/90 leading-[1.7] font-normal mb-8 max-w-[760px]">
                  A Digital Marketer with hands-on Business Development Management with a demonstrated history of working in the construction industry. Skilled in Digital Strategy, Search Engine Optimization (SEO), Communication, Influencer Marketing, and Lead Generation.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/contact">
                    <button
                      className="relative h-[56px] w-[210px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] overflow-hidden shadow-[0px_6px_16px_rgba(222,94,24,0.35)] hover:shadow-[0px_8px_20px_rgba(222,94,24,0.5)] transition-shadow group cursor-pointer"
                      aria-label="Schedule Consultation with Ameet Nangia"
                    >
                      <div className="absolute left-0 top-0 w-[calc(100%-45px)] h-full rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2 transform group-hover:translate-x-[3px] transition-transform duration-300 z-10 px-3">
                        <div className="w-[7px] h-[7px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                        <span className="font-semibold text-[14px] text-white tracking-tight whitespace-nowrap">
                          Consult with Ameet
                        </span>
                      </div>
                      <div className="absolute right-[16px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
                        <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </div>
                    </button>
                  </Link>

                  <a
                    href="https://www.linkedin.com/in/ameet-nangia-b231b864/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 h-[56px] rounded-full bg-white border border-black/15 hover:border-[#de5e18] text-[#0f0f0f] hover:text-[#de5e18] font-bold text-[14px] transition-all duration-300 shadow-sm"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-[#0a66c2] text-[16px]" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* Strategic Background & Areas of Expertise */}
          <div className="mb-14 text-left">
            <div className="flex flex-col items-start mb-8">
              <p className="font-medium text-[20px] text-black uppercase tracking-tight">
                <span className="text-[#de5e18]">[</span>
                <span className="mx-3 tracking-[-0.48px]">Core Capabilities</span>
                <span className="text-[#de5e18]">]</span>
              </p>
              <h2 className="text-[32px] sm:text-[40px] font-bold text-[#432d1c] mt-2">
                Areas of Strategic Specialization
              </h2>
              <p className="text-[16px] text-black/70 max-w-[720px] mt-2">
                Leveraging data intelligence, search engine architecture, and hands-on business growth methodologies to scale category-defining brands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-black/10 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#de5e18] bg-[#ffd1b8]/40 px-2.5 py-1 rounded-md">
                        {area.tag}
                      </span>
                      <span className="text-black/30 font-bold text-xs font-mono">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-[19px] font-bold text-[#0f0f0f] mb-3 group-hover:text-[#de5e18] transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-[14.5px] text-black/75 leading-relaxed font-normal">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Leadership & Agency Mission */}
          <div className="bg-white border border-black/10 rounded-[24px] p-8 sm:p-10 shadow-sm text-left mb-12">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-[#432d1c] mb-4">
              Strategic Vision &amp; Editorial Leadership
            </h2>
            <p className="text-[16px] sm:text-[17px] text-[#432d1c]/90 leading-[1.8] font-normal mb-6">
              As the Founder of Southern Edge Marketing, Ameet Nangia directs the agency&apos;s technical marketing methodologies, search intelligence, and conversion engineering frameworks. With substantial background spanning high-stakes industrial business development, construction sector expansion, and international direct-to-consumer funnels, his strategic framework is built on deterministic ROI rather than superficial metrics.
            </p>
            <p className="text-[16px] sm:text-[17px] text-[#432d1c]/90 leading-[1.8] font-normal mb-8">
              Under his guidance, Southern Edge Marketing crafts enterprise web applications, headless architectures, and Generative Engine Optimization (GEO) blueprints that equip companies across India, Dubai, the United States, and the United Kingdom with durable competitive advantages.
            </p>

            <div className="border-t border-black/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-black/70">
              <div>
                <strong>Author Profile:</strong> Ameet Nangia &bull; Southern Edge Marketing
              </div>
              <Link href="/services/seo" className="text-[#de5e18] font-bold hover:underline">
                Explore Our SEO Practice &rarr;
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* CTA and Footers */}
      <div className="md:[zoom:0.8]">
        <Cta />
      </div>

      <div className="hidden md:block" style={{ zoom: 0.8 }}>
        <DesktopFooter />
      </div>
      <div className="md:hidden">
        <MobileFooter />
      </div>
    </div>
  );
}
