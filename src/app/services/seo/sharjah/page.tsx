import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: "SEO Company in Sharjah | Premium Search Optimization | Southern Edge Marketing",
  description: "Accelerate your search visibility with the leading SEO company in Sharjah. We deliver bilingual search engine optimization for manufacturing hubs & free zones."
};

const tableOfContents = [
  { id: "sharjah-search-landscape", title: "Sharjah's Organic Search Landscape" },
  { id: "b2b-industrial-seo", title: "B2B SEO for Sharjah's Manufacturing Sectors" },
  { id: "free-zone-ecommerce-seo", title: "E-Commerce SEO for SAIF Zone & Hamriyah Enterprises" },
  { id: "srtip-startup-optimization", title: "Search Positioning for SRTIP Tech Startups" },
  { id: "bilingual-seo-architecture", title: "Bilingual Search Architecture for the UAE Market" },
  { id: "technical-seo-infrastructure", title: "High-Performance Technical SEO & Core Web Vitals" },
  { id: "local-seo-map-pack", title: "Local SEO & Google Maps Dominance in Sharjah" },
  { id: "data-driven-seo-roi", title: "Enterprise Search Analytics & Sustainable ROI" },
  { id: "reviews", title: "Reviews" },
  { id: "faq", title: "FAQ" }
];

export default function SharjahSeoPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title="Premium SEO Services in Sharjah"
        tagline="Empowering local enterprises with high-authority, technical search engine optimization to capture high-intent regional traffic."
        breadcrumbTitle="SEO in Sharjah"
      />
      
      <ServiceLayout sections={tableOfContents}>
        <h3 id="sharjah-search-landscape" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Sharjah's Organic Search Landscape
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">The business ecosystem</strong> in Sharjah is undergoing a rapid transition, driven by modern infrastructure upgrades and government initiatives to attract international investors. For local businesses, this digital transition means that classic trade show presence and offline relationships are no longer sufficient to secure long-term market share. Establishing high organic visibility is critical to capture local business buyers, corporate procurement officers, and retail customers who search online before finalizing vendor agreements. By partnering with an elite <strong className="font-semibold text-[#de5e18] tracking-tight">SEO company in Sharjah</strong>, your organization can build a sustainable digital pipeline that consistently attracts high-quality leads without relying on high-cost paid ads. Our technical optimization strategies are customized to match the unique economics of the Northern Emirates, positioning your brand ahead of competitors in search engine result pages. We build custom optimization frameworks that respect local consumer behavior, ensuring your business stays relevant and highly visible in an increasingly crowded marketplace.
        </p>

        <h3 id="b2b-industrial-seo" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          B2B SEO for Sharjah's Manufacturing Sectors
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Sharjah represents</strong> one of the largest industrial hubs in the UAE, with massive manufacturing zones like the Sajaa Industrial Area and Sharjah Industrial Areas 1 to 18 contributing heavily to the nation's GDP. For industrial enterprises operating in these sectors, digital visibility is crucial to connect with modern procurement managers who utilize search engines to source suppliers and manufacturing partners. We design advanced B2B SEO strategies that optimize complex product catalogs, technical spec sheets, and logistics pages to rank for competitive commercial queries. Our optimization focuses on high-intent terms used by procurement agents, national developers, and global supply chain managers seeking industrial services. By aligning your website content with these specific technical searches, we help your brand secure high-value contracts and build lasting corporate partnerships across the Gulf. To complement these technical frameworks, we recommend integrating your platform with our specialized <Link href="/services/web-development/sharjah" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">web development in Sharjah</Link> to ensure high-performance user journeys.
        </p>

        <h3 id="free-zone-ecommerce-seo" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          E-Commerce SEO for SAIF Zone & Hamriyah Enterprises
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Free zones like</strong> the <a href="https://www.saif-zone.com/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Sharjah International Airport Free Zone (SAIF Zone)</a> and Hamriyah Free Zone host thousands of international trading and import-export businesses. Transitioning these high-volume commercial operations into high-performing digital storefronts requires a dedicated approach to technical e-commerce optimization. We optimize massive product inventories, category page structures, and metadata configurations to ensure your products rank at the top of relevant search queries. Our team handles complex URL structures, dynamic filters, and facets to prevent duplicate content issues and streamline crawler access. By improving organic crawlability, we ensure that new arrivals, wholesale offers, and product updates are indexed and displayed in search results within hours. This targeted search exposure helps your e-commerce platform capture trade buyers and retail consumers throughout the Middle East and North Africa.
        </p>

        <h3 id="srtip-startup-optimization" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Search Positioning for SRTIP Tech Startups
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">The innovation corridors</strong> of the <a href="https://srtip.ae/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Sharjah Research Technology and Innovation Park (SRTIP)</a> serve as a prominent launchpad for technology startups, research firms, and scientific ventures in the region. In this highly competitive innovation hub, tech companies require sophisticated search strategies to stand out, attract venture capital, and acquire early adopters. We build deep topical authority for specialized software and SaaS platforms, allowing startups to rank for industry-defining terms. Our content campaigns are designed to position your founders and developers as authoritative figures by targeting complex technical and informational search queries. Securing early organic rankings ensures that your startup gains high-profile exposure among international tech buyers and local investors. This digital authority can be further amplified by combining search optimizations with our strategic <Link href="/services/social-media-management/sharjah" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">social media management in Sharjah</Link> to drive comprehensive online engagement.
        </p>

        <h3 id="bilingual-seo-architecture" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Bilingual Search Architecture for the UAE Market
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">The demographic profile</strong> of the Northern Emirates demands a search strategy that engages both local Arabic-speaking residents and the massive English-speaking expatriate community. We implement robust bilingual search configurations using clean hreflang tagging and separate language directories to prevent indexation errors. Our native Arabic copywriters perform exhaustive keyword research to capture local dialect queries that automated translation software fails to understand. We ensure that page metadata, image alt tags, and internal link structures are fully optimized in both languages to maintain maximum context. This dual-language capability ensures your site ranks consistently for both Arabic and English queries, doubling your potential search reach. By catering to the specific language preferences of your target customers, we build brand credibility and drive higher conversion rates.
        </p>

        <h3 id="technical-seo-infrastructure" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          High-Performance Technical SEO & Core Web Vitals
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Search engine algorithms</strong> place significant importance on technical quality, making page loading speed and visual stability critical factors for keyword rankings. With local customers accessing the web via high-speed mobile networks, your website must load instantly to retain visitor engagement. We specialize in optimizing modern web architectures, leveraging server-side rendering and static page generation via <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Next.js</a> to minimize load latency. Our technical audits resolve code bloat, optimize image formats, and refine server response times to ensure your site passes Core Web Vitals benchmarks. We also generate clean structured data and JSON-LD schema markups to help search engines present rich search snippets for your services. This technical foundation prevents crawl budget waste, allowing search engine bots to catalog your content efficiently and rank it higher.
        </p>

        <h3 id="local-seo-map-pack" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Local SEO & Google Maps Dominance in Sharjah
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Capitalizing on local</strong> transaction intent requires a prominent presence in regional search results and map pack queries. We optimize your Google Business Profile to dominate the local map pack for searches originating near Al Majaz, Muwaileh, and the University City of Sharjah. Our team builds consistent local citations across directories, aligning your business name, physical address, and telephone coordinates perfectly. We design dedicated geographic landing pages to capture regional search traffic from specific commercial and residential districts. In addition, we implement structured review collection systems that encourage satisfied customers to submit positive reviews, boosting local authority. This hyper-local approach ensures your company captures nearby prospects at the exact moment they are ready to make a purchase decision.
        </p>

        <h3 id="data-driven-seo-roi" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Enterprise Search Analytics & Sustainable ROI
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">We prioritize transparent</strong>, data-driven reporting that focuses on tangible business growth rather than simple vanity search metrics. Our team integrates advanced tracking configurations to measure how organic keyword positions convert into active leads, phone calls, and revenue. We monitor search trends, click-through rates, and ranking movements to adapt your strategy dynamically as search behaviors change. Our monthly reporting packages translate complex search metrics into actionable insights, helping you evaluate your marketing return on investment. We constantly refine your keyword targets to focus on high-conversion terms that drive actual profit to your bottom line. This commitment to data analysis ensures your organic search campaign remains a highly profitable client acquisition channel for years to come.
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
                "Partnering with Southern Edge Marketing transformed our B2B client acquisition. Our industrial portal saw a 160% increase in organic traffic, allowing us to connect directly with regional contractors and streamline our procurement inquiries."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Tariq Al Shamsi" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Tariq Al Shamsi</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Sajaa Steel & Heavy Industries</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                "Southern Edge Marketing delivered exceptional results for our SaaS platform launch. Their specialized bilingual search strategies helped us rank for high-intent queries, securing key client accounts across the GCC."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Sarah Al Mheiri" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Sarah Al Mheiri</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">SRTIP Technology Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FaqAccordion Component with 7 custom FAQs */}
        <FaqAccordion faqs={[
          {
            "question": "How does bilingual SEO address both Arabic and English search intent in Sharjah?",
            "answer": "We manage bilingual SEO by building separate URL structures and implementing precise hreflang tags for Arabic and English pages. This ensures that search engines serve the appropriate language version to local Emirati citizens and expatriates, maximizing search visibility and avoiding indexation conflicts."
          },
          {
            "question": "Why is local SEO critical for businesses located in Sharjah's industrial zones like Sajaa or Hamriyah?",
            "answer": "Industrial zones require localized visibility because regional procurement officers and logistics managers search for nearby suppliers, manufacturers, and steel fabricators. By optimizing your Google Business Profile and local directories, we ensure your business appears in map pack searches and geo-targeted B2B queries."
          },
          {
            "question": "How long does it take for a Sharjah enterprise to see organic ranking improvements?",
            "answer": "SEO is a long-term investment. While technical corrections and local profile optimizations can show initial ranking improvements within 45 to 60 days, highly competitive commercial keywords in the UAE market typically require 4 to 6 months of consistent content creation and link-building to achieve stable first-page rankings."
          },
          {
            "question": "Does your search engine optimization comply with UAE digital regulations?",
            "answer": "Yes, our technical implementations are fully compliant with the security, data privacy, and accessibility standards set by the UAE telecommunications regulations. We ensure your website features secure hosting, cookie compliance, and proper SSL/TLS encryption, protecting your brand from potential liability."
          },
          {
            "question": "How does page speed affect keyword rankings in the Northern Emirates?",
            "answer": "Page speed is a major ranking factor. UAE users expect instant loading times on high-speed mobile networks. By utilizing Next.js server-side rendering and local CDN caching, we optimize your site's Core Web Vitals, which lowers bounce rates and signals search engines to rank your pages higher."
          },
          {
            "question": "Can you help optimize search traffic for startups in the Sharjah Research Technology and Innovation Park (SRTIP)?",
            "answer": "Yes, we specialize in high-growth SEO strategies for tech startups in SRTIP. We focus on building deep topical authority for innovative software, SaaS products, and advanced services, positioning your brand for searches by global investors and early adopters."
          },
          {
            "question": "How do you track and report the return on investment (ROI) of our SEO campaign?",
            "answer": "We track organic performance using advanced analytics tools like Google Analytics and Search Console, mapping keyword clicks to active conversions such as contact form submissions, phone calls, and demo bookings. This allows us to provide clear, monthly reports showing exactly how organic traffic translates into business revenue."
          }
        ]} />
      </ServiceLayout>
    </div>
  );
}
