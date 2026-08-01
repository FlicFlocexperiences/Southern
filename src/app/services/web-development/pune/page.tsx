import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: "Web Development Company in Pune | Southern Edge Marketing",
  description: "Partner with Pune's premier web development company. We engineer highly secure, scalable digital platforms for IT, manufacturing, and educational sectors.",
};

const tableOfContents = [
    {
      "id": "digital-engineering-for-punes-expanding-economy",
      "title": "Digital Engineering for Pune's Expanding Economy"
    },
    {
      "id": "comprehensive-enterprise-web-solutions",
      "title": "Comprehensive Enterprise Web Solutions"
    },
    {
      "id": "advanced-architecture-and-api-integration",
      "title": "Advanced Architecture and API Integration"
    },
    {
      "id": "why-choose-our-pune-web-developers",
      "title": "Why Choose Our Pune Web Developers"
    },
    {
      "id": "uncompromising-security-and-data-compliance",
      "title": "Uncompromising Security and Data Compliance"
    },
    {
      "id": "technical-seo-and-organic-visibility",
      "title": "Technical SEO and Organic Visibility"
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

export default function PuneWebdevelopmentPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title={"High-Performance Web Development in Pune"}
        tagline={"Scalable web architectures for the Oxford of the East."}
        breadcrumbTitle={"Web Development in Pune"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            <h3 id="digital-engineering-for-punes-expanding-economy" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Digital Engineering for Pune's Expanding Economy
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Pune represents a unique intersection</strong> of high-tech IT services, massive automotive manufacturing, and world-class educational institutions. A one-size-fits-all digital strategy will fail in this nuanced market. Our specialized web development in Pune is engineered specifically to meet these diverse, high-standards requirements. We understand the vast differences between building a highly secure B2B portal for a manufacturing firm in Pimpri-Chinchwad and crafting a high-conversion SaaS platform for a burgeoning tech startup in Hinjewadi or Magarpatta City. <strong className="font-semibold text-[#de5e18] tracking-tight">By partnering with our elite engineering team</strong>, you secure a digital asset that perfectly aligns with your specific industry vertical. We completely reject basic templates, focusing instead on custom-coded, highly scalable architectures that provide a powerful, 24/7 digital storefront for your operations. Our dedicated team of Pune web developers is obsessed with creating platforms that exude authority, perform flawlessly under heavy traffic, and ultimately drive measurable revenue.
            </p>

            <h3 id="comprehensive-enterprise-web-solutions" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Comprehensive Enterprise Web Solutions
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">A cohesive digital strategy</strong> is absolutely vital in a rapidly scaling market like Pune. We offer a full spectrum of services for web development in Pune, handling everything from complex corporate sites to massive educational portals. <strong className="font-semibold text-[#de5e18] tracking-tight">Enterprise B2B website development</strong> is a core strength. We design intricate platforms capable of showcasing complex manufacturing capabilities, managing extensive product catalogs, and generating high-quality corporate leads. <strong className="font-semibold text-[#de5e18] tracking-tight">Custom educational portals</strong> are another massive focus, serving the city's vast academic sector. We build highly secure platforms with integrated student management and fee payment systems. Furthermore, our web development company in Pune prioritizes mobile-first design, ensuring your corporate platform looks impeccable and functions flawlessly on smartphones. If your brand needs a strategic overhaul before moving into development, we highly recommend our <Link href="/services/branding" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">branding and strategy</Link> services.
            </p>

            <h3 id="advanced-architecture-and-api-integration" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Advanced Architecture and API Integration
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">The underlying technology of your website</strong> determines its longevity and scalability. Our Pune web developers utilize the most sophisticated, globally recognized technology stacks. We build dynamic, server-side rendered applications using React, Next.js, and Node.js, guaranteeing exceptional page load speeds and superior technical SEO performance. <strong className="font-semibold text-[#de5e18] tracking-tight">Complex API integration</strong> is a critical requirement for most businesses in this industrial and IT hub. We seamlessly connect your new website with your existing corporate ecosystem, integrating complex ERP systems, supply chain management software, and proprietary CRM tools to ensure flawless data synchronization across your entire operation. <strong className="font-semibold text-[#de5e18] tracking-tight">By prioritizing clean code</strong> and optimized database structures, our web development company in Pune guarantees a frictionless browsing experience, significantly reducing bounce rates and ensuring that potential clients can easily access critical information.
            </p>

            <h3 id="why-choose-our-pune-web-developers" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Why Choose Our Pune Web Developers
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Trust and proven technical capability</strong> are paramount when selecting an engineering partner. Our web development company in Pune has built a sterling reputation by consistently delivering complex, high-ROI digital assets for demanding corporate clients across the region. <strong className="font-semibold text-[#de5e18] tracking-tight">We do not outsource our engineering.</strong> Every project is handled entirely by our in-house team of senior developers and UX/UI specialists. <strong className="font-semibold text-[#de5e18] tracking-tight">Strategic alignment</strong> is central to our process; we begin every engagement with a deep dive into your specific business model, target audience, and local competitive landscape in Pune. This ensures that every technical decision we make is directly tied to a specific commercial outcome. We pride ourselves on transparent communication, rigorous agile project management, and a steadfast commitment to delivering your custom website development Pune project exactly to specification, on time, and within budget.
            </p>

            <h3 id="uncompromising-security-and-data-compliance" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Uncompromising Security and Data Compliance
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">For enterprises operating in Pune's IT and manufacturing sectors</strong>, data security is not optional; it is a strict regulatory requirement. Our web development in Pune is built upon a foundation of uncompromising security protocols. We implement enterprise-grade SSL encryption, robust web application firewalls (WAF), and automated vulnerability scanning to protect your digital assets from sophisticated cyber threats. <strong className="font-semibold text-[#de5e18] tracking-tight">Data privacy and compliance</strong> are equally critical. Our Pune web developers ensure that your platform adheres strictly to all relevant Indian IT regulations and international data protection standards. <strong className="font-semibold text-[#de5e18] tracking-tight">We build highly secure, encrypted environments</strong> for user authentication and sensitive data storage, providing absolute peace of mind for both your corporate stakeholders and your B2B clients. Choosing our custom website development Pune services means investing in a highly resilient digital infrastructure that actively protects your corporate reputation.
            </p>

            <h3 id="technical-seo-and-organic-visibility" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Technical SEO and Organic Visibility
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">A powerful corporate website</strong> must be easily discoverable by procurement officers, students, and decision-makers. Our web development in Pune includes comprehensive technical SEO integrated directly into the initial architecture. We meticulously structure your site hierarchy, URL pathways, and metadata to ensure maximum visibility on search engines. <strong className="font-semibold text-[#de5e18] tracking-tight">Strategic content architecture</strong> is a massive focus for our team. We organize complex industrial information, academic curriculums, and corporate capabilities into highly navigable structures, ensuring that both users and Google's crawlers can understand your offerings perfectly. This dedication to technical SEO ensures your business dominates local and national search results. For aggressive post-launch traffic scaling, explore our data-driven <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO solutions</Link>.
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
                    "Southern Edge Marketing transformed our digital presence completely. The custom web platform reduced patient onboarding time by 40% and significantly elevated our brand authority."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Anand M. Sharma" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Anand M. Sharma</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">AMA Legal Solutions</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    "Our Shopify storefront conversion rates increased by 42% within weeks of launch. Their team understands both high-end design aesthetics and conversion science."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Rohan Kapoor" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Rohan Kapoor</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">The Fat Cookie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FaqAccordion faqs={[
              {
                "question": "How long does enterprise web development in Pune take?",
                "answer": "A standard corporate website generally requires 4 to 8 weeks. However, highly complex enterprise platforms or educational portals engineered by our Pune web developers can take 12 weeks or more."
              },
              {
                "question": "Do you build websites for manufacturing companies?",
                "answer": "Yes, this is a core expertise. Our web development company in Pune has extensive experience building robust, technical corporate sites for the manufacturing and automotive sectors prevalent in PCMC."
              },
              {
                "question": "Can you integrate our existing ERP or CRM software?",
                "answer": "Absolutely. Our web development in Pune includes seamless API integrations. We connect your new digital platform directly to your existing internal software to ensure completely synchronized data flow."
              },
              {
                "question": "Will my website be fast and mobile-friendly?",
                "answer": "Yes. Performance optimization and mobile-first design are foundational to our process. Our Pune web developers utilize advanced caching and lean code architecture to ensure lightning-fast load times on all devices."
              },
              {
                "question": "Do you offer ongoing website maintenance?",
                "answer": "Yes, we provide comprehensive post-launch support contracts. We handle crucial security patches, server maintenance, performance monitoring, and content updates to keep your platform running at peak efficiency."
              },
              {
                "question": "Is technical SEO included in the development phase?",
                "answer": "Yes, technical SEO is baked into the very architecture of the site. We ensure clean code structures, fast load times, and optimized metadata to give you a massive advantage in search engine rankings."
              },
              {
                "question": "Who owns the website and the source code?",
                "answer": "You do. Once the project is completed and final payment is made, our web development company in Pune transfers 100% ownership of the website, source code, and all related intellectual property directly to your enterprise."
              }
            ]} />

      </ServiceLayout>
    </div>
  );
}
