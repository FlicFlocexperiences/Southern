import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: "Web Development Company in Chennai | Southern Edge Marketing",
  description: "Empower your business with elite web development in Chennai. We engineer highly secure, scalable websites for manufacturing, IT, and enterprise sectors.",
};

const tableOfContents = [
    {
      "id": "digital-engineering-for-the-detroit-of-asia",
      "title": "Digital Engineering for the Detroit of Asia"
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
      "id": "why-choose-our-chennai-web-developers",
      "title": "Why Choose Our Chennai Web Developers"
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
      "id": "web-accessibility-and-inclusive-design",
      "title": "Web Accessibility and Inclusive Design"
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

export default function ChennaiWebdevelopmentPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title={"Robust Web Development in Chennai's Industrial & Tech Hub"}
        tagline={"Scalable digital architecture for Chennai's growing enterprises."}
        breadcrumbTitle={"Web Development in Chennai"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            <h3 id="digital-engineering-for-the-detroit-of-asia" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Digital Engineering for the Detroit of Asia
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Chennai is a powerhouse of industry and technology.</strong> Known for its massive automotive manufacturing sector and booming IT corridor, the business landscape here demands digital solutions that are as robust and reliable as the industries they serve. Our specialized web development in Chennai is engineered to meet these exacting standards. We understand the vast differences between building a B2B lead-generation platform for a logistics firm near the port and crafting a highly technical SaaS website for a startup in Taramani. <strong className="font-semibold text-[#de5e18] tracking-tight">By partnering with our specialized team</strong>, you are securing a digital partner who understands the local economic fabric. We completely reject flimsy, template-based websites, focusing instead on custom-coded, enterprise-grade architectures that provide a powerful, 24/7 digital storefront for your operations. Our dedicated team of Chennai web developers is obsessed with creating platforms that exude corporate authority, perform flawlessly under heavy traffic, and ultimately drive measurable, bottom-line revenue for your enterprise.
            </p>

            <h3 id="comprehensive-enterprise-web-solutions" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Comprehensive Enterprise Web Solutions
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">A cohesive digital strategy</strong> is absolutely vital in a market as diverse as Chennai. We offer a full spectrum of services for web development in Chennai, handling everything from complex corporate sites to massive e-commerce portals. <strong className="font-semibold text-[#de5e18] tracking-tight">Enterprise B2B website development</strong> is a core strength. We design intricate platforms capable of showcasing complex manufacturing capabilities, managing extensive product catalogs, and generating high-quality corporate leads. <strong className="font-semibold text-[#de5e18] tracking-tight">Ecommerce web development Chennai</strong> is another massive focus, particularly for the region's vast textile and retail sectors. We build highly secure online stores with advanced inventory synchronization and seamless integrations with local Indian payment gateways. Furthermore, our web development company in Chennai prioritizes mobile-first design, ensuring your corporate platform looks impeccable and functions flawlessly on the smartphones that the vast majority of your workforce and client base use daily. If your brand needs a strategic overhaul before moving into development, we highly recommend our branding and strategy services.
            </p>

            <h3 id="advanced-architecture-and-api-integration" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Advanced Architecture and API Integration
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">The underlying technology of your website</strong> determines its longevity and scalability. Our Chennai web developers utilize the most sophisticated, globally recognized technology stacks. We build dynamic, server-side rendered applications using React and <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Next.js</a>, guaranteeing exceptional page load speeds and superior technical SEO performance. <strong className="font-semibold text-[#de5e18] tracking-tight">Complex API integration</strong> is a critical requirement for most businesses in this industrial hub. We seamlessly connect your new website with your existing corporate ecosystem, integrating complex ERP systems, supply chain management software, and proprietary CRM tools to ensure flawless data synchronization across your entire operation. <strong className="font-semibold text-[#de5e18] tracking-tight">By prioritizing clean code</strong> and optimized database structures, our web development company in Chennai guarantees a frictionless browsing experience, significantly reducing bounce rates and ensuring that potential clients can easily access the critical corporate information they require.
            </p>

            <h3 id="why-choose-our-chennai-web-developers" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Why Choose Our Chennai Web Developers
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Trust and proven technical capability</strong> are paramount when selecting an engineering partner. Our web development company in Chennai has built a sterling reputation by consistently delivering complex, high-ROI digital assets for demanding corporate clients across the region. <strong className="font-semibold text-[#de5e18] tracking-tight">We do not outsource our engineering.</strong> Every project is handled entirely by our in-house team of senior developers and UX/UI specialists. <strong className="font-semibold text-[#de5e18] tracking-tight">Strategic alignment</strong> is central to our process; we begin every engagement with a deep dive into your specific business model, target audience, and local competitive landscape in Chennai. This ensures that every technical decision we make is directly tied to a specific commercial outcome. We pride ourselves on transparent communication, rigorous quality assurance testing, and a steadfast commitment to delivering your custom website development Chennai project exactly to specification, on time, and within budget.
            </p>

            <h3 id="uncompromising-security-and-data-compliance" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Uncompromising Security and Data Compliance
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">For enterprises operating in Chennai's industrial and IT sectors</strong>, data security is not optional; it is a critical operational requirement. Our web development in Chennai is built upon a foundation of uncompromising security protocols. We implement enterprise-grade SSL encryption, robust web application firewalls (WAF), and automated vulnerability scanning to protect your digital assets from sophisticated cyber threats. <strong className="font-semibold text-[#de5e18] tracking-tight">Data privacy and compliance</strong> are equally critical. Our Chennai web developers ensure that your platform adheres strictly to all relevant Indian IT regulations and international data protection standards. <strong className="font-semibold text-[#de5e18] tracking-tight">We build highly secure, encrypted environments</strong> for user authentication and sensitive data storage, providing absolute peace of mind for both your corporate stakeholders and your B2B clients. Choosing our custom website development Chennai services means investing in a highly resilient digital infrastructure that actively protects your corporate reputation.
            </p>

            <h3 id="technical-seo-and-organic-visibility" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Technical SEO and Organic Visibility
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">A powerful corporate website</strong> must be easily discoverable by procurement officers and decision-makers. Our web development in Chennai includes comprehensive technical SEO integrated directly into the initial architecture. We meticulously structure your site hierarchy, URL pathways, and metadata to ensure maximum visibility on search engines. <strong className="font-semibold text-[#de5e18] tracking-tight">Strategic content architecture</strong> is a massive focus for our team. We organize complex industrial information, spec sheets, and corporate capabilities into highly navigable structures, ensuring that both users and Google's crawlers can understand your offerings perfectly. This dedication to technical SEO ensures your business dominates local and national search results. For aggressive post-launch traffic scaling, explore our data-driven SEO solutions.
            </p>

            <h3 id="web-accessibility-and-inclusive-design" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Web Accessibility and Inclusive Design
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Digital inclusivity is a global standard</strong> that major enterprises must adhere to. We ensure that our custom website development Chennai services strictly follow the Web Content Accessibility Guidelines (WCAG). We design digital platforms that are fully accessible to users with visual, auditory, or cognitive disabilities. <strong className="font-semibold text-[#de5e18] tracking-tight">Implementing features</strong> like screen reader compatibility, high-contrast UI modes, and seamless keyboard navigation not only broadens your potential audience but also clearly demonstrates your enterprise's commitment to social responsibility and global inclusivity standards.
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
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Anand M. Sharma" className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Anand M. Sharma</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">AMA Legal Solutions</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    "Our <a href="https://www.shopify.com/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Shopify</a> storefront conversion rates increased by 42% within weeks of launch. Their team understands both high-end design aesthetics and conversion science."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Rohan Kapoor" className="w-full h-full object-cover object-center grayscale" />
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
                "question": "How long does enterprise web development in Chennai take?",
                "answer": "A standard corporate website generally requires 4 to 8 weeks. However, highly complex enterprise platforms or massive ecommerce portals engineered by our Chennai web developers can take 12 weeks or more."
              },
              {
                "question": "Do you build websites for manufacturing companies?",
                "answer": "Yes, this is a core expertise. Our web development company in Chennai has extensive experience building robust, technical corporate sites for the manufacturing, automotive, and logistics sectors prevalent in the region."
              },
              {
                "question": "Can you integrate our existing ERP or CRM software?",
                "answer": "Absolutely. Our web development in Chennai includes seamless API integrations. We connect your new digital platform directly to your existing internal software to ensure completely synchronized data flow."
              },
              {
                "question": "Will my website be fast and mobile-friendly?",
                "answer": "Yes. Performance optimization and mobile-first design are foundational to our process. Our Chennai web developers utilize advanced caching and lean code architecture to ensure lightning-fast load times on all devices."
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
                "answer": "You do. Once the project is completed and final payment is made, our web development company in Chennai transfers 100% ownership of the website, source code, and all related intellectual property directly to your enterprise."
              }
            ]} />

      </ServiceLayout>
    </div>
  );
}
