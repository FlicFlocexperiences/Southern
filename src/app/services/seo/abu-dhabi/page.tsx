import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/seo/abu-dhabi',
  },
  title: "Top SEO Services Agency Abu Dhabi",
  description: "Dominate search rankings in Abu Dhabi & UAE. We deliver technical SEO, local Maps optimization, and digital PR for compounding organic leads.",
  openGraph: {
    title: "Top SEO Services Agency Abu Dhabi | Southern Edge",
    description: "Dominate search rankings in Abu Dhabi & UAE. We deliver technical SEO, local Maps optimization, and digital PR for compounding organic leads.",
    url: "https://www.southernedgemarketing.com/services/seo/abu-dhabi",
    siteName: "Southern Edge Marketing",
  },
};

const tableOfContents = [
  {
    "id": "local-3-pack-dominance",
    "title": "Local 3-Pack & Google Maps Dominance in Abu Dhabi"
  },
  {
    "id": "bilingual-search-strategy",
    "title": "Bilingual Arabic & English Organic Search Strategy"
  },
  {
    "id": "enterprise-technical-seo",
    "title": "Enterprise Technical SEO & Core Web Vitals Audits"
  },
  {
    "id": "high-authority-uae-backlinks",
    "title": "High-Authority UAE Backlinks & Regional Digital PR"
  },
  {
    "id": "data-backed-keyword-mapping",
    "title": "Data-Backed Keyword Mapping for Abu Dhabi Industries"
  },
  {
    "id": "transparent-seo-reporting",
    "title": "Transparent SEO Reporting & Real Lead Attribution"
  },
  {
    "id": "reviews",
    "title": "Reviews"
  },
  {
    "id": "faq",
    "title": "FAQ"
  }
];

export default function AbuDhabiSeoPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Search Engine Optimization (SEO) Services in Abu Dhabi",
    "serviceType": "Search Engine Optimization & Local SEO Agency",
    "provider": {
      "@type": "Organization",
      "name": "Southern Edge Marketing",
      "url": "https://www.southernedgemarketing.com"
    },
    "areaServed": [
      { "@type": "City", "name": "Abu Dhabi" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "AdministrativeArea", "name": "GCC" }
    ],
    "description": "Dominate search rankings in Abu Dhabi & UAE. We deliver technical SEO, local Maps optimization, and digital PR for compounding organic leads.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "118"
    }
  };

  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceHero 
        title={"Search Engine Optimization (SEO) Services in Abu Dhabi"}
        tagline={"Dominate Google search results across the UAE Capital."}
        breadcrumbTitle={"SEO Abu Dhabi"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            {/* Quick Metrics & Trust Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">#1 Rank</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Abu Dhabi 3-Pack</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Google Maps Local Dominance</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">Bilingual</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Arabic &amp; English</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Dialect &amp; Intent Optimization</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">&lt;50ms</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Core Web Vitals</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Sub-Second Load Time Audits</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">Tier-1 GCC</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Authority Backlinks</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Regional Authority Building</p>
              </div>
            </div>

            <h2 id="local-3-pack-dominance" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Local 3-Pack &amp; Google Maps Dominance in Abu Dhabi
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Over 76% of high-intent commercial searches in Abu Dhabi</strong> result in an immediate physical visit, phone inquiry, or direct lead submission via Google Maps and localized search engine results. Whether your prospective clients are searching for wealth management firms in Abu Dhabi Global Market (ADGM) on Al Maryah Island, luxury medical clinics in Al Bateen, or high-end retail venues on Saadiyat and Yas Island, appearing in the coveted Google Local 3-Pack is the cornerstone of regional customer acquisition.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              As the premier <strong className="font-semibold text-[#de5e18] tracking-tight">SEO agency in Abu Dhabi</strong>, Southern Edge Marketing executes forensic Google Business Profile (GBP) optimization and hyper-local citation structuring. We calibrate your Name, Address, and Phone Number (NAP) consistency across verified UAE business directories, embed geo-coordinates schema, build localized district landing pages, and implement structured review generation frameworks that propel your physical locations to the top of Google Maps search results.
            </p>

            <h3 id="bilingual-search-strategy" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Bilingual Arabic &amp; English Organic Search Strategy
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Capturing total market share across the UAE capital demands</strong> a nuanced bilingual organic search engine strategy. The Abu Dhabi consumer and B2B demographic is uniquely split between native Emirati citizens searching in colloquial Khaleeji and Modern Standard Arabic (MSA), and international corporate executives and expatriates searching in English. Relying on automated machine translations creates keyword cannibalization, broken search intent, and low organic conversions.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our native Arabic SEO linguists and technical search engineers craft dedicated, mirrored content architectures. We implement precise `hreflang` multi-language tags, configure independent URL silos (`/ar/` and `/en/`), and map keyword variations that reflect local search morphology. This dual-language search framework ensures that your brand ranks organically at the summit of Google for both high-intent English queries and native Arabic search terms across the Emirates.
            </p>

            <h3 id="enterprise-technical-seo" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Enterprise Technical SEO &amp; Core Web Vitals Audits
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Search algorithms aggressively favor web platforms that deliver flawless technical performance.</strong> In the UAE, where mobile users browse on ultra-high-speed 5G networks provided by e&amp; and du, a delay of even 500 milliseconds elevates bounce rates and suppresses organic search visibility. Our technical SEO architects perform exhaustive site architecture audits to eliminate crawl waste, indexation bottlenecks, and code bloat.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We specialize in modern JavaScript frameworks (Next.js, React), implementing Server-Side Rendering (SSR), Static Site Generation (SSG), and edge CDN caching with local Middle East endpoints. We rigorously optimize Core Web Vitals—Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS)—and deploy advanced JSON-LD structured schema markup (Organization, Service, LocalBusiness, FAQPage) that wins rich snippets on Google SERPs. For complete web architecture builds, explore our <Link href="/services/web-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">custom web development services</Link>.
            </p>

            <h3 id="high-authority-uae-backlinks" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              High-Authority UAE Backlinks &amp; Regional Digital PR
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Domain authority in the Arabian Gulf is forged through high-trust regional link acquisition.</strong> Generic international backlinks carry minimal geographic relevance when competing for localized Abu Dhabi commercial terms. Our dedicated digital PR and outreach team secures high-authority editorial placements on prestigious UAE, GCC, and Middle Eastern publications, regional news outlets, and recognized industry journals.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We adhere strictly to Google&apos;s E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) quality rater guidelines and 100% white-hat acquisition practices. By producing data-driven industry reports, executive thought leadership articles, and original market analyses, we earn organic, contextual editorial backlinks that elevate your domain rating and protect your rankings against core algorithm updates. If you are also expanding into the Dubai market, explore our specialized <Link href="/services/shopify-agency-dubai" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Shopify agency in Dubai</Link>.
            </p>

            <h3 id="data-backed-keyword-mapping" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Data-Backed Keyword Mapping for Abu Dhabi Industries
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Abu Dhabi&apos;s corporate landscape encompasses diverse, high-value commercial sectors</strong>—from sovereign finance, energy, and government infrastructure to industrial manufacturing in Khalifa Economic Zones Abu Dhabi (KEZAD) and hospitality on Yas Island. Each sector requires a tailored search intent map that targets transactional buyers rather than casual researchers.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We conduct forensic competitor keyword gap analyses to identify high-value long-tail search terms with strong commercial intent. We map these terms to dedicated service pillar pages, technical case studies, and conversion-optimized landing pages. Whether optimizing a B2B supply chain portal for industrial procurement officers or positioning a private wealth advisory for high-net-worth investors, our keyword strategy ensures you dominate the exact search terms that generate revenue. For omni-channel acquisition, pair this with our <Link href="/services/social-media-management" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">social media management services</Link>.
            </p>

            <h3 id="transparent-seo-reporting" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Transparent SEO Reporting &amp; Real Lead Attribution
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">We reject vague vanity metrics in favor of transparent, revenue-backed reporting.</strong> Organic search impressions and keyword rank movements only matter if they drive qualified inbound inquiries, booked consultations, and closed contracts. Southern Edge Marketing equips your leadership team with live, custom Google Search Console (GSC) and Google Analytics 4 (GA4) business intelligence dashboards.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our monthly executive reports provide complete clarity on keyword ranking velocity, regional organic traffic growth across Abu Dhabi districts, click-through rate (CTR) optimization, and verified form conversion attribution. Furthermore, all our technical deployments adhere strictly to the digital governance standards established by the Abu Dhabi Digital Authority (ADDA) and UAE Federal data regulations. Partner with our senior search consultants to build a compounding organic moat around your business. <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Contact our Abu Dhabi SEO team</Link> today for an initial technical audit.
            </p>

            {/* Client Reviews Section */}
            <div className="w-full bg-white border border-black/10 rounded-2xl p-8 shadow-sm text-left mt-10 mb-6">
              <h3 id="reviews" className="text-[22px] font-bold text-black mb-6 uppercase tracking-wide flex items-center gap-2 scroll-mt-28">
                <svg className="w-6 h-6 text-[#de5e18]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Client Reviews
              </h3>
              <div className="flex flex-col gap-8">
                <div className="border-b border-black/5 pb-6">
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    &quot;The organic growth we achieved with Southern Edge Marketing exceeded all expectations. Our advisory firm in the Abu Dhabi Global Market saw a 145% increase in high-intent lead generation, which directly boosted our client onboarding across the GCC.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Tariq Al Mansouri" width={100} height={100} className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Tariq Al Mansouri</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Managing Director, Al Maryah Capital Partners</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    &quot;Southern Edge Marketing transformed our B2B lead generation. Our industrial logistics and supply portal in KEZAD secured multiple #1 rankings in Abu Dhabi, resulting in a consistent influx of regional distribution contracts.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Yasmin Al Hashimi" width={100} height={100} className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Yasmin Al Hashimi</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Director of Operations, KEZAD Logistics Group</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Digital Services Cluster */}
            <div className="w-full bg-[#ede0d4]/80 border border-black/10 rounded-2xl p-6 my-8">
              <h3 className="text-[18px] font-bold text-[#432d1c] mb-3">Explore Related Digital Solutions</h3>
              <p className="text-[15px] text-[#432d1c]/80 leading-relaxed mb-4">
                Scale your digital dominance across search, bespoke web development, and digital marketing:
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Link href="/services/seo" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  All SEO Services &rarr;
                </Link>
                <Link href="/services/web-development" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Web Development &rarr;
                </Link>
                <Link href="/services/shopify-agency-dubai" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Shopify Agency Dubai &rarr;
                </Link>
                <Link href="/services/social-media-management" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Social Media Marketing &rarr;
                </Link>
                <Link href="/services/influencer-marketing" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Influencer Marketing Agency &rarr;
                </Link>
              </div>
            </div>

            <div className="w-full clear-both pt-8 mt-8 border-t border-black/10">
              <FaqAccordion headingTag="h3" faqs={[
                {
                  "question": "Why is local SEO crucial for businesses in Abu Dhabi?",
                  "answer": "Over 76% of high-intent searches in Abu Dhabi result in a physical visit or direct inquiry via Google Maps and local search results."
                },
                {
                  "question": "Do you provide Arabic SEO services in Abu Dhabi?",
                  "answer": "Yes, we optimize for both colloquial and Modern Standard Arabic keywords, local search intent, and native Arabic search queries."
                },
                {
                  "question": "How long does it take to see rankings increase in Abu Dhabi?",
                  "answer": "Low-to-medium competition local queries often see significant movement in 30 to 60 days, while highly competitive enterprise sectors typically take 3 to 6 months."
                },
                {
                  "question": "How do you report SEO progress and business outcomes?",
                  "answer": "You receive live dashboards showing keyword ranking trajectory, organic impression growth from GSC, and verified conversion attribution."
                },
                {
                  "question": "Are your search engine optimization strategies compliant with the Abu Dhabi Digital Authority (ADDA) policies?",
                  "answer": "Yes, we build all our technical architectures and optimization campaigns in strict compliance with the digital security and accessibility guidelines established by the Abu Dhabi Digital Authority."
                },
                {
                  "question": "How do you optimize for financial districts like ADGM compared to industrial zones like KEZAD?",
                  "answer": "For corporate hubs like Al Maryah Island (ADGM), we target high-value enterprise queries and global B2B investors. For industrial sectors like KEZAD or Mussafah, we optimize supply chain keywords, B2B procurement schemas, and local directory listings."
                }
              ]} />
            </div>

      </ServiceLayout>
    </div>
  );
}
