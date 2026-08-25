import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/seo/los-angeles',
  },
  title: "SEO Company in Los Angeles | Southern Edge Marketing",
  description: "Partner with Los Angeles's premier SEO company. We engineer data-driven organic search architectures, technical Next.js SEO, and high-authority link acquisition for Silicon Beach and Hollywood leaders.",
  openGraph: {
    title: "SEO Company in Los Angeles | Southern Edge Marketing",
    description: "Partner with Los Angeles's premier SEO company. We engineer data-driven organic search architectures, technical Next.js SEO, and high-authority link acquisition for Silicon Beach and Hollywood leaders.",
    url: "https://southernedgemarketing.com/services/seo/los-angeles",
    siteName: "Southern Edge Marketing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company in Los Angeles | Southern Edge Marketing",
    description: "Partner with Los Angeles's premier SEO company. We engineer data-driven organic search architectures, technical Next.js SEO, and high-authority link acquisition for Silicon Beach and Hollywood leaders.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const tableOfContents = [
  { id: "los-angeles-search-landscape-and-enterprise-seo-strategy", title: "1. The Los Angeles Search Landscape and Enterprise SEO Strategy" },
  { id: "technical-nextjs-seo-core-web-vitals-and-mobile-first-indexing", title: "2. Technical Next.js SEO, Core Web Vitals, and Mobile-First Indexing" },
  { id: "silicon-beach-saas-b2b-and-topical-authority-clusters", title: "3. Silicon Beach SaaS, B2B Tech, and Topical Authority Clusters" },
  { id: "entertainment-media-video-seo-and-schema-architecture", title: "4. Hollywood Entertainment, Video SEO, and Rich Schema Markup" },
  { id: "dtc-luxury-ecommerce-seo-for-beverly-hills-and-dtla", title: "5. High-Intent DTC E-Commerce SEO for Luxury Apparel and Clean Beauty" },
  { id: "local-seo-and-hyper-targeted-los-angeles-geo-clusters", title: "6. Hyper-Targeted Local SEO across Westside, DTLA, and the Valley" },
  { id: "digital-pr-and-high-tier-california-editorial-backlinks", title: "7. Digital PR and High-Tier California Editorial Backlink Acquisition" },
  { id: "ai-search-optimization-chatgpt-perplexity-and-google-gemini", title: "8. Generative AI Search Optimization (LLMO/GEO) for Gemini & Perplexity" },
  { id: "reviews", title: "Reviews" },
  { id: "faq", title: "FAQ" },
];

export default function LosAngelesSeoPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://southernedgemarketing.com/services/seo/los-angeles#organization",
        "name": "Southern Edge Marketing - SEO Los Angeles",
        "url": "https://southernedgemarketing.com/services/seo/los-angeles",
        "logo": "https://southernedgemarketing.com/LOGO_Final.svg",
        "telephone": "+1-800-555-0199",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ocean Park Blvd, Silicon Beach",
          "addressLocality": "Santa Monica",
          "addressRegion": "CA",
          "postalCode": "90405",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.0195",
          "longitude": "-118.4912"
        }
      },
      {
        "@type": "Service",
        "@id": "https://southernedgemarketing.com/services/seo/los-angeles#service",
        "name": "Enterprise SEO Services in Los Angeles",
        "provider": {
          "@id": "https://southernedgemarketing.com/services/seo/los-angeles#organization"
        },
        "serviceType": "Technical SEO, Enterprise Organic Strategy, Programmatic SEO, Generative Engine Optimization",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Greater Los Angeles Metropolitan Area"
        },
        "description": "Custom enterprise search engine optimization, Next.js technical audits, topical authority content clusters, and generative AI search optimization for Los Angeles enterprises."
      }
    ]
  };

  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ServiceHero 
        title="Enterprise SEO Company in Los Angeles"
        tagline="Engineering revenue-generating organic search architectures, deep Next.js technical SEO, and AI search visibility for Silicon Beach tech disruptors, Hollywood media platforms, and luxury DTC brands."
        breadcrumbTitle="SEO in Los Angeles"
      />
      
      <ServiceLayout sections={tableOfContents}>

        <h3 id="los-angeles-search-landscape-and-enterprise-seo-strategy" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          The Los Angeles Search Landscape and Enterprise SEO Strategy
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">The Greater Los Angeles digital economy represents one of the most fiercely contested search arenas in North America</strong>. With thousands of venture-backed startups across Silicon Beach (Santa Monica, Culver City, Venice, Playa Vista), iconic entertainment studios in Hollywood and Burbank, and global luxury retailers in Beverly Hills, relying on generic keyword tactics or superficial blog posts is no longer effective. Achieving durable rankings in this hyper-competitive market requires technical precision, topical authority architecture, and generative search optimization. As a premier <strong className="font-semibold text-[#de5e18] tracking-tight">SEO company in Los Angeles</strong>, Southern Edge Marketing crafts enterprise SEO campaigns designed to capture high-intent commercial search traffic. We construct holistic search architectures that turn organic search into your most predictable, cost-effective customer acquisition channel. To learn how we integrate high-performance web architecture with search visibility, explore our enterprise <Link href="/services/web-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">web development</Link> capabilities.
        </p>

        <h3 id="technical-nextjs-seo-core-web-vitals-and-mobile-first-indexing" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Technical Next.js SEO, Core Web Vitals, and Mobile-First Indexing
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          Google evaluates web platforms through a strict mobile-first indexing lens that penalizes slow JavaScript rendering, layout shifts, and delayed server responses. Our technical SEO practice specializes in optimizing modern JavaScript frameworks including Next.js, React, and headless CMS stacks. We resolve crawl budget waste, configure optimal server-side rendering (SSR) and incremental static regeneration (ISR), eliminate render-blocking CSS/JS, and ensure Largest Contentful Paint (LCP) and Interaction to Next Paint (INP) scores rank in Google&apos;s green 95+ percentile. By structuring clean semantic HTML5, self-referential canonical tags, dynamic XML sitemaps, and robots.txt rules, we guarantee search engine spiders crawl and index your revenue pages with zero friction.
        </p>

        <h3 id="silicon-beach-saas-b2b-and-topical-authority-clusters" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Silicon Beach SaaS, B2B Tech, and Topical Authority Clusters
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          To dominate high-intent B2B search terms across Silicon Beach and national enterprise sectors, brands must establish undeniable topical authority. We engineer comprehensive pillar-and-cluster content architectures that answer every stage of the buyer journey—from top-of-funnel educational queries to bottom-of-funnel comparative software searches (e.g., alternative to competitors, pricing breakdowns, implementation guides). Our strategists map entity relationships, semantic keyword clusters, and internal link equity distribution to signal clear domain mastery to Google&apos;s Hummingbird and Helpful Content ranking algorithms. To elevate your market positioning and brand narrative, explore our specialized <Link href="/services/branding" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">branding services</Link>.
        </p>

        <h3 id="entertainment-media-video-seo-and-schema-architecture" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Hollywood Entertainment, Video SEO, and Rich Schema Markup
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          For entertainment studios, streaming platforms, and talent agencies in Hollywood and Burbank, media visibility requires sophisticated structured data and Video SEO. We implement comprehensive Schema.org JSON-LD markup—including Movie, VideoObject, BroadcastEvent, Person, and Organization schemas—enabling your media assets to trigger Google Video carousels, rich snippets, and Knowledge Graph panels. We optimize video transcripts, timestamps, thumbnail schemas, and open-graph metadata to capture massive search volume across Google Search, Google Discover, and YouTube.
        </p>

        <h3 id="dtc-luxury-ecommerce-seo-for-beverly-hills-and-dtla" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          High-Intent DTC E-Commerce SEO for Luxury Apparel and Clean Beauty
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          From Beverly Hills luxury storefronts to DTLA direct-to-consumer lifestyle and apparel labels, our e-commerce SEO frameworks drive qualified buyers directly to product pages. We optimize faceted navigation to prevent duplicate content traps, structure canonical hierarchies, and enrich Product, AggregateRating, and Offer schemas for Google Shopping and organic merchant listings. By optimizing image alt tags, responsive WebP asset sizing, and category-level commercial intent, we capture high-margin transactional traffic that lowers reliance on paid ad spend. For multi-channel paid social campaigns, explore our <Link href="/services/social-media-management" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">social media management</Link> services.
        </p>

        <h3 id="local-seo-and-hyper-targeted-los-angeles-geo-clusters" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Hyper-Targeted Local SEO across Westside, DTLA, and the Valley
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          The sprawling geography of Greater Los Angeles requires hyper-localized search strategies tailored to specific commercial submarkets. We optimize Google Business Profiles (GBP), configure localized Schema markup, build geographic landing pages, and establish NAP (Name, Address, Phone) consistency across major data aggregators. Whether capturing high-net-worth clients in Santa Monica and Beverly Hills or targeting commercial contractors in Pasadena and the San Fernando Valley, our local SEO campaigns ensure top-3 Google Map Pack prominence.
        </p>

        <h3 id="digital-pr-and-high-tier-california-editorial-backlinks" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Digital PR and High-Tier California Editorial Backlink Acquisition
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          Domain authority compounds through high-tier editorial backlinks earned from authoritative publications. Our digital PR practice develops proprietary industry studies, data visualizations, and executive thought leadership that earn organic coverage from leading media outlets such as the Los Angeles Times, Dot.LA, TechCrunch, Variety, The Hollywood Reporter, and California business journals. We strictly adhere to white-hat link acquisition standards, rejecting toxic PBNs in favor of genuine editorial citations that build lasting search equity.
        </p>

        <h3 id="ai-search-optimization-chatgpt-perplexity-and-google-gemini" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Generative AI Search Optimization (LLMO/GEO) for Gemini &amp; Perplexity
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          Search is rapidly expanding beyond traditional ten blue links into AI Overviews, ChatGPT Search, Perplexity AI, and Google Gemini citations. We optimize your digital presence for Generative Engine Optimization (GEO) and Large Language Model Optimization (LLMO). By structuring clear factual claims, authoritative schema relationships, and cited research statistics, we ensure your brand is cited as the primary recommendation when AI search engines generate answers for high-value commercial queries. When your enterprise is ready to dominate organic and AI search in Los Angeles, <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">contact our Los Angeles SEO team</Link> to schedule an initial technical audit.
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
                &quot;Southern Edge Marketing overhauled our Next.js technical SEO architecture and executed a topical cluster strategy for our Silicon Beach B2B SaaS platform. In 6 months, organic demo sign-ups grew by 185% and we claimed #1 rankings for our primary competitive search terms.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80" alt="Devon Scott" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Devon Scott</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Nexus Analytics (Playa Vista, CA)</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                &quot;Our Beverly Hills luxury e-commerce store was heavily dependent on expensive Meta ads. Southern Edge restructured our product schema, resolved our faceted navigation bloat, and earned high-tier California fashion PR links that increased our organic revenue by $1.4M in one year.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="Isabella Vance" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Isabella Vance</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Maison Vivienne (Beverly Hills, CA)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FaqAccordion faqs={[
          {
            "question": "How quickly can we expect measurable organic search results in Los Angeles?",
            "answer": "While SEO is an ongoing compounding strategy, technical fixes and schema improvements often yield crawl and indexing improvements within 3 to 6 weeks. Significant organic keyword rank growth and qualified inbound lead velocity typically materialize within 3 to 6 months of strategic execution."
          },
          {
            "question": "How do you optimize JavaScript and Next.js websites for Googlebot?",
            "answer": "We ensure full server-side rendering (SSR) and incremental static regeneration (ISR) so search crawlers receive fully rendered HTML on first fetch. We eliminate hydration lag, optimize Core Web Vitals, and configure dynamic server-side XML sitemaps."
          },
          {
            "question": "What is Generative Engine Optimization (GEO) and why is it important in 2026?",
            "answer": "GEO optimizes your website to be cited and recommended by AI engines such as Google Gemini, ChatGPT Search, and Perplexity. By structuring authoritative factual statements, clear entity definitions, and rich Schema markup, we ensure your business is surfaced in AI-generated answers."
          },
          {
            "question": "How do you build high-authority backlinks for Los Angeles businesses?",
            "answer": "We execute white-hat digital PR campaigns, publishing original data reports, industry research, and executive commentary that earn natural editorial citations from major California news organizations, tech publications, and industry journals."
          }
        ]} />

      </ServiceLayout>
    </div>
  );
}
