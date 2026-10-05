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
              <strong className="font-semibold text-[#de5e18] tracking-tight">More than 76% of local searches in Abu Dhabi</strong> lead to a phone call, store visit, or website inquiry. Clients search daily for firms in Abu Dhabi Global Market (ADGM) on Al Maryah Island, clinics in Al Bateen, or venues on Saadiyat and Yas Island. Ranking in the Google Local 3-Pack is one of the best ways to gain new clients in the capital.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              As a trusted <strong className="font-semibold text-[#de5e18] tracking-tight">SEO agency in Abu Dhabi</strong>, Southern Edge Marketing optimizes your Google Business Profile. We keep your business name, address, and phone number (NAP) consistent across UAE directories. We also build local district pages and review systems to move your business to the top of Google Maps.
            </p>

            <h3 id="bilingual-search-strategy" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Bilingual Arabic &amp; English Organic Search Strategy
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Winning search traffic across the UAE capital</strong> requires a strong bilingual search plan. Abu Dhabi includes both native Arabic speakers and English-speaking professionals. Auto-translated content often fails to rank because it misses how local buyers search.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our Arabic and English SEO specialists build structured content for both languages. We use proper language tags, clear URL paths, and regional keywords. This two-language search setup helps your site rank at the top of Google for English searches and native Arabic terms across the Emirates.
            </p>

            <h3 id="enterprise-technical-seo" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Enterprise Technical SEO &amp; Core Web Vitals Audits
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Google rewards websites that load fast</strong> and work smoothly. UAE users browse on fast 5G networks from e&amp; and du. If a page is slow to load, visitors leave quickly, and search rankings drop. Our technical team audits your website to remove code bloat and fix index issues.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We specialize in modern web platforms like Next.js and React. We optimize your Core Web Vitals scores so pages load and respond quickly. We also add structured schema markup (Organization, Service, LocalBusiness) to help your site earn rich snippets in Google search results. For complete website builds, explore our <Link href="/services/web-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">custom web development services</Link>.
            </p>

            <h3 id="high-authority-uae-backlinks" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              High-Authority UAE Backlinks &amp; Regional Digital PR
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Building search authority in the UAE</strong> requires quality links from trusted regional sources. Generic overseas links do not carry the local weight needed for competitive Abu Dhabi search terms. Our PR team earns editorial mentions on respected UAE news outlets and regional industry websites.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We follow Google quality rules and use clean outreach methods. We create useful industry data, reports, and expert articles that earn natural links. These local links help raise your domain rating and protect your rankings over time. If you are also growing in Dubai, explore our <Link href="/services/shopify-agency-dubai" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Shopify agency in Dubai</Link>.
            </p>

            <h3 id="data-backed-keyword-mapping" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Data-Backed Keyword Mapping for Abu Dhabi Industries
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Abu Dhabi is home to major commercial sectors,</strong> including finance, energy, tourism, and industry in KEZAD. Each sector needs a keyword plan that targets real buyers rather than casual searchers.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We research competitor search gaps to find high-value terms with clear commercial intent. We assign these terms to service pages, case studies, and clear landing pages. Whether you run a B2B supply firm or a private wealth advisory, our keyword strategy helps you rank for terms that drive business leads. For multi-channel growth, pair this with our <Link href="/services/social-media-management" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">social media management services</Link>.
            </p>

            <h3 id="transparent-seo-reporting" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Transparent SEO Reporting &amp; Real Lead Attribution
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">We focus on clear, revenue-driven reporting.</strong> Ranking gains and traffic growth only matter if they bring in calls, booked meetings, and new clients. Southern Edge Marketing provides live reporting dashboards using Google Search Console and GA4.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our monthly reports show your ranking gains, traffic growth by district, and verified lead counts. All technical work aligns with Abu Dhabi Digital Authority (ADDA) and UAE data standards. Work with our senior search team to build steady organic traffic. <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Contact our Abu Dhabi SEO team</Link> today for a site audit.
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
                    &quot;The organic search growth we achieved with Southern Edge Marketing beat all expectations. Our firm in Abu Dhabi Global Market saw a 145% increase in inbound leads, which helped us sign new clients across the GCC.&quot;
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
                    &quot;Southern Edge Marketing transformed our B2B lead generation. Our logistics portal in KEZAD gained multiple #1 rankings in Abu Dhabi, bringing in steady inquiries and regional distribution contracts.&quot;
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
                Grow your digital presence with search, web development, and marketing:
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
                  "answer": "More than 76% of local searches in Abu Dhabi lead to a phone call, store visit, or inquiry via Google Maps."
                },
                {
                  "question": "Do you provide Arabic SEO services in Abu Dhabi?",
                  "answer": "Yes. We optimize for local Arabic search terms, buyer intent, and native Arabic phrasing across the UAE."
                },
                {
                  "question": "How long does it take to see rankings increase in Abu Dhabi?",
                  "answer": "Local terms often show progress in 30 to 60 days. Highly competitive enterprise terms usually take 3 to 6 months."
                },
                {
                  "question": "How do you report SEO progress and business outcomes?",
                  "answer": "You receive live dashboards that track keyword rankings, organic traffic from Google Search Console, and form lead counts."
                },
                {
                  "question": "Are your search engine optimization strategies compliant with the Abu Dhabi Digital Authority (ADDA) policies?",
                  "answer": "Yes. All our technical work and site improvements follow the digital security and accessibility rules set by the Abu Dhabi Digital Authority."
                },
                {
                  "question": "How do you optimize for financial districts like ADGM compared to industrial zones like KEZAD?",
                  "answer": "For business hubs like ADGM, we target enterprise terms and corporate investors. For industrial areas like KEZAD or Mussafah, we target supply chain terms, B2B schemas, and local business listings."
                }
              ]} />
            </div>

      </ServiceLayout>
    </div>
  );
}
