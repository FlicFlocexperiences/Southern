import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: "Premium SEO Company in Kolkata | Southern Edge Marketing",
  description: "Scale your organic traffic with the leading SEO company in Kolkata. We build high-performance search strategies for Sector V tech firms and legacy trade houses."
};

const tableOfContents = [
  { id: "burrabazar-wholesale-search-visibility", title: "Digital Lead Acquisition and Search Visibility for Burrabazar Wholesalers" },
  { id: "sector-v-tech-seo", title: "Search Dominance for Sector V and New Town Software Exporters" },
  { id: "howrah-industrial-seo", title: "Industrial B2B Search Optimization for Howrah and Hooghly Manufacturing" },
  { id: "local-map-dominance", title: "Dominating Local Map Packs Across Gariahat and Park Street Commercial Hubs" },
  { id: "bilingual-search-behavior", title: "Capturing Regional Search Preferences and Bengali-English Intent" },
  { id: "technical-seo-nextjs", title: "High-Performance Next.js Engineering and Crawl Budget Optimization" },
  { id: "eeat-authority-content", title: "Building E-E-A-T and Topical Authority for Kolkata Real Estate and Tea Brands" },
  { id: "closed-loop-crm-roi", title: "Closed-Loop CRM Analytics and Organic Search ROI Tracking in West Bengal" },
  { id: "reviews", title: "Reviews" },
  { id: "faq", title: "FAQ" }
];

export default function KolkataSeoPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title="Premium SEO Services in Kolkata"
        tagline="Empowering heritage trade groups, Sector V technology leaders, and regional manufacturers with elite technical search engine optimization."
        breadcrumbTitle="SEO in Kolkata"
      />
      
      <ServiceLayout sections={tableOfContents}>
        <h3 id="burrabazar-wholesale-search-visibility" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Digital Lead Acquisition and Search Visibility for Burrabazar Wholesalers
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">The historic trading hubs</strong> of Kolkata, particularly around Burrabazar and BBD Bagh, have long served as the commercial heartbeat of Eastern India. Traditional merchant families and legacy trading companies are now facing the critical need to transition from offline wholesale networks to digital B2B portals. To capture high-value corporate interest in this shifting market, enterprises require search strategies that target national procurement departments. We build customized search engine optimization frameworks that align with these regional trading shifts and secure top search engine rankings. By establishing deep topical authority, we enable traditional businesses to expand their reach across national logistics corridors. Partnering with a premium <strong className="font-semibold text-[#de5e18] tracking-tight">SEO company in Kolkata</strong> turns your digital channels into active sources of qualified lead acquisition. This structured approach helps heritage trade houses establish long-term market dominance and reduce their reliance on traditional networks.
        </p>

        <h3 id="sector-v-tech-seo" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Search Dominance for Sector V and New Town Software Exporters
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Salt Lake Sector V</strong> and Rajarhat New Town have emerged as prominent technological hubs, housing global IT consultancies and high-growth software startups. For these technology leaders, competing on the global stage requires an organic search presence that matches international client search patterns. We build comprehensive content architectures and detailed topical clusters that address complex enterprise tech problems. This strategy targets early-stage research queries as well as late-stage transactional searches, driving highly qualified traffic to your website. By building organic authority, your startup can scale its customer base while significantly lowering customer acquisition costs. We optimize your product documentation, comparison pages, and technical blogs to establish your brand as a trusted industry authority. Organizations like <a href="https://nasscom.in/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">NASSCOM</a> often highlight the region's growing digital contribution, proving the need for high visibility. Integrating this search strategy with high-performance <Link href="/services/web-development/kolkata" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">web development in Kolkata</Link> ensures a seamless conversion path for your foreign visitors.
        </p>

        <h3 id="howrah-industrial-seo" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Industrial B2B Search Optimization for Howrah and Hooghly Manufacturing
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">The manufacturing belts</strong> of Howrah, the heavy engineering clusters of Hooghly, and the chemical zones of Haldia are the primary drivers of West Bengal's industrial output. Many established B2B manufacturers in these regions operate with older websites, which limits their visibility to modern procurement officers who use search engines to evaluate suppliers. We optimize your online product sheets, material specifications, and logistics details to match complex industrial search queries. Our technical layout ensures that your engineering documentation is easily crawled and indexed for high-value commercial keywords. We focus on building authoritative backlink profiles from trusted engineering journals and trade directories to raise your domain authority. This search prominence helps manufacturers in the regional industrial corridors secure larger contracts and scale their distributor networks. By optimizing for supply chain search terms, we connect your factory operations directly with major corporate buyers. Our data-driven search strategy enables local <strong className="font-semibold text-[#de5e18] tracking-tight">industrial brands</strong> to expand their footprint across the national market.
        </p>

        <h3 id="local-map-dominance" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Dominating Local Map Packs Across Gariahat and Park Street Commercial Hubs
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Kolkata's retail ecosystem</strong> spans from the traditional markets of Gariahat and Hatibagan to the upscale commercial streets of Park Street and Camac Street. Businesses operating in these areas must capture local consumer intent at the precise moment they search for immediate options. We design hyper-local search strategies that optimize Google Business Profiles and local directories to ensure consistent visibility across regional search maps. Our team creates specific location pages that address the distinct shopping behaviors of different Kolkata neighborhoods. This targeted optimization helps brick-and-mortar stores, premium clinics, and local professional services rank for high-intent geographical searches. By securing top placements in local map packs, we drive physical foot traffic and direct telephone inquiries to your local offices. We also coordinate these local search efforts with our structured <Link href="/services/social-media-management/kolkata" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">social media management in Kolkata</Link> to build a unified digital presence. This comprehensive approach ensures that your business remains the preferred choice in your immediate commercial neighborhood.
        </p>

        <h3 id="bilingual-search-behavior" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Capturing Regional Search Preferences and Bengali-English Intent
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">The consumer market</strong> in West Bengal exhibits unique search behaviors, where users frequently combine English and Bengali terms when searching for services. To capture this regional demand, local businesses must optimize their websites for these specific bilingual search patterns. We conduct extensive keyword research that maps out both formal English terms and colloquial Bengali-influenced queries. This includes managing specific transliterated keywords that regional buyers use when looking for quick services. We construct a flexible website architecture that accommodates localized content without causing search index conflicts or duplicate page issues. This multilingual optimization ensures your brand remains visible to both corporate partners and retail consumers. By matching the linguistic preferences of the local market, we build brand trust and drive higher engagement rates. Our custom localized optimization strategies expand your digital reach and establish a stronger brand presence across the region.
        </p>

        <h3 id="technical-seo-nextjs" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          High-Performance Next.js Engineering and Crawl Budget Optimization
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Modern search algorithms</strong> place immense value on loading speed and technical site performance, making optimized code a key ranking factor. In Kolkata's competitive corporate landscape, slow loading times lead to high bounce rates and immediate drops in search visibility. We optimize Next.js frameworks, clean up javascript executions, and implement media asset optimization to satisfy Core Web Vitals requirements. Our technical audits address cumulative layout shifts, server response latency, and mobile rendering paths. We implement structured JSON-LD schema layouts to help search engines index your corporate services accurately. This technical precision improves crawl efficiency, allowing search crawlers to index new pages faster and maintain ranking stability. For a complete digital transformation, we recommend pairing these optimizations with our premium <Link href="/services/app-development/kolkata" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">app development in Kolkata</Link>. A fast and modern code framework is crucial for keeping users engaged and improving overall organic performance.
        </p>

        <h3 id="eeat-authority-content" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Building E-E-A-T and Topical Authority for Kolkata Real Estate and Tea Brands
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Search engines evaluate</strong> website content based on real experience, deep expertise, authority, and trust. We write comprehensive, highly researched technical articles and guides that speak directly to industry experts and corporate executives. Our copywriters avoid generic text, focusing instead on detailed industry insights, market reports from organizations like <a href="https://www.bengalchamber.com/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">The Bengal Chamber of Commerce and Industry</a>, and practical case studies. We structure this content to answer complex procurement and trading questions, keeping visitors engaged on your website longer. This strategy signals to search algorithms that your website is a reliable source of professional industry knowledge. By establishing clear topical relevance, we help your brand build trust with B2B decision-makers. This authoritative presence converts standard search traffic into qualified business leads for your sales pipeline. We ensure that every piece of published content meets the highest standards of professional copy.
        </p>

        <h3 id="closed-loop-crm-roi" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Closed-Loop CRM Analytics and Organic Search ROI Tracking in West Bengal
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">We prioritize measurable</strong> business outcomes over simple search impressions, focusing on qualified leads and sales pipeline growth. Our analytics setups connect search performance data with your CRM systems to track how traffic translates into business revenue. We monitor key performance indicators such as keyword ranking speed, click-through rates, and organic lead acquisition. This data-driven approach allows us to refine campaigns and focus on keywords that deliver the highest commercial value. We provide detailed monthly reports that present these findings clearly, helping you assess your digital marketing investments. Our setups also comply with local data protection regulations, keeping user information secure and reducing business liabilities. By combining technical optimization with clear business intelligence, we ensure your organic campaigns drive sustainable growth. We work alongside your internal sales teams to align our search strategy with your quarterly revenue goals.
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
                "Operating our legacy tea exporting firm out of Dalhousie required a complete shift in our client acquisition model. The traditional trade networks were yielding fewer results, so we partnered with Southern Edge Marketing to build our organic search presence. They designed a technical SEO strategy that targeted international tea distributors and bulk packaging buyers. Within eight months, our website ranked in top positions for high-intent B2B agricultural export keywords, driving a 150% rise in organic contract inquiries. Their understanding of the local Kolkata trading ecosystem and legacy brand positioning made them a key partner in modernizing our sales channels."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Amitava Sen" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Amitava Sen</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Sen-Bose Tea Exporters Group</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                "As a software engineering firm in Salt Lake Sector V, winning enterprise contracts abroad requires ranking for highly competitive global technical keywords. Southern Edge Marketing optimized our website using Next.js performance improvements and built a high-authority content architecture. Within six months, our website recorded a 170% increase in organic traffic, directly translating into high-value B2B inquiries from Europe and the United States. Their technical expertise and understanding of Sector V's IT landscape helped us establish real digital authority on the global stage."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Tanusree Banerjee" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Tanusree Banerjee</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Nabadiganta Technologies Pvt. Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FaqAccordion Component with 7 custom FAQs */}
        <FaqAccordion faqs={[
          {
            "question": "How does your SEO strategy help legacy trading companies in Burrabazar transition to digital markets?",
            "answer": "We specialize in migrating traditional trading businesses into modern B2B websites. We analyze how distributors search online, structure your product catalog for search indexation, and write search-optimized technical content. This ensures your legacy brand captures high-volume commercial searches and reaches bulk buyers nationwide."
          },
          {
            "question": "How do you optimize search visibility for technology consultancies in Salt Lake Sector V targeting international buyers?",
            "answer": "Winning international software development contracts requires strong domain authority and targeted technical content. We build specialized content clusters that address complex enterprise tech problems. By combining high-authority backlink outreach with optimized website engineering, we position your Sector V firm at the top of competitive search results globally."
          },
          {
            "question": "Can you help our manufacturing unit in the Howrah industrial belt rank for bulk B2B supply queries?",
            "answer": "Yes, we build search campaigns tailored for manufacturing businesses in Howrah, Hooghly, and Bantala. We optimize your technical product sheets, catalog specifications, and shipping details to match queries from procurement officers. This visibility connects your factory directly with corporate buyers, bypassing intermediate trade brokers."
          },
          {
            "question": "How does Next.js technical optimization and page speed impact search rankings for Kolkata enterprises?",
            "answer": "Search engines prioritize websites that load quickly and offer a great page experience. In Kolkata's competitive corporate landscape, a slow site leads to lost visitors and lower search positions. We optimize Core Web Vitals, clean up javascript executions, and implement media optimization to ensure your Next.js website loads instantly on all networks."
          },
          {
            "question": "How do you optimize for regional search preferences including bilingual Bengali and English search queries?",
            "answer": "West Bengal consumers often blend English and Bengali terms when looking for local services. We research these bilingual query patterns and build semantic maps to cover both official corporate terms and local transliterated phrases. Our technical setup ensures search engines index these pages correctly without creating content conflicts."
          },
          {
            "question": "What is the typical timeline to see measurable organic lead growth for a new website in Kolkata?",
            "answer": "Initial search engine updates and local map profile optimizations can show positive signals within 60 days. However, ranking for competitive national or international B2B keywords usually requires 6 to 8 months. This period allows search crawlers to establish your website's topical authority and build a strong backlink profile."
          },
          {
            "question": "How do you connect our organic search results with our CRM platforms like HubSpot or Zoho?",
            "answer": "We connect website analytics tools directly to your CRM platforms, such as Zoho or HubSpot, to track lead attribution accurately. We track key business metrics like lead quality and customer acquisition costs rather than just basic traffic charts. This gives you complete visibility into the financial return of your organic search campaign."
          }
        ]} />
      </ServiceLayout>
    </div>
  );
}
