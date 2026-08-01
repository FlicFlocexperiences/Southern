import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: "Web Development Company in Mumbai | Southern Edge Marketing",
  description: "Drive digital growth with elite web development in Mumbai. We engineer highly secure, conversion-optimized websites for financial, retail, and corporate sectors.",
};

const tableOfContents = [
    {
      "id": "strategic-web-engineering-in-the-financial-capital",
      "title": "Strategic Web Engineering in the Financial Capital"
    },
    {
      "id": "comprehensive-web-development-services",
      "title": "Comprehensive Web Development Services"
    },
    {
      "id": "advanced-architecture-and-api-integration",
      "title": "Advanced Architecture and API Integration"
    },
    {
      "id": "why-choose-our-mumbai-web-developers",
      "title": "Why Choose Our Mumbai Web Developers"
    },
    {
      "id": "enterprise-grade-security-and-compliance",
      "title": "Enterprise-Grade Security and Compliance"
    },
    {
      "id": "high-performance-web-hosting-and-infrastructure",
      "title": "High-Performance Web Hosting and Infrastructure"
    },
    {
      "id": "advanced-content-management-systems-cms",
      "title": "Advanced Content Management Systems (CMS)"
    },
    {
      "id": "strategic-ab-testing-and-iteration",
      "title": "Strategic A/B Testing and Iteration"
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

export default function MumbaiWebdevelopmentPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title={"Corporate Web Development in Mumbai's Financial Hub"}
        tagline={"Scalable web architectures for Mumbai's fast-moving enterprises."}
        breadcrumbTitle={"Web Development in Mumbai"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            <h3 id="strategic-web-engineering-in-the-financial-capital" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Strategic Web Engineering in the Financial Capital
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Mumbai is the undisputed commercial heart</strong> of India. The business environment here demands nothing less than absolute digital excellence. Our premium web development in Mumbai is specifically tailored to meet the rigorous demands of this high-stakes market. We understand that for businesses operating in areas like the Bandra Kurla Complex (BKC) or Nariman Point, a website is far more than a digital brochure; it is a critical, revenue-generating asset that must exude trust and corporate authority. <strong className="font-semibold text-[#de5e18] tracking-tight">By partnering with our specialized team</strong>, you guarantee that your digital footprint is engineered for performance, security, and exceptional user engagement. We move beyond basic templates, delivering custom-coded architectures that perfectly align with your complex business objectives. Our dedicated team of Mumbai web developers is obsessed with crafting platforms that not only look stunning but also perform flawlessly under high traffic conditions, ensuring your business never misses an opportunity to convert.
            </p>

            <h3 id="comprehensive-web-development-services" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Comprehensive Web Development Services
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">A fragmented digital strategy</strong> inevitably leads to fragmented results. We offer a holistic suite of services for web development in Mumbai, ensuring seamless integration across all digital touchpoints. <strong className="font-semibold text-[#de5e18] tracking-tight">Enterprise website development</strong> is our core specialty. We design intricate, scalable platforms capable of handling massive amounts of data and complex user hierarchies, perfect for the financial and corporate sectors dominating Mumbai. <strong className="font-semibold text-[#de5e18] tracking-tight">Ecommerce web development Mumbai</strong> is another cornerstone of our practice. We empower local retailers and B2B distributors to scale their operations nationally by building robust online storefronts with advanced inventory management and local payment gateway integrations. Our web development company in Mumbai also places a massive emphasis on responsive, mobile-first design, recognizing that mobile commerce is rapidly becoming the dominant force in the Indian market. For businesses looking to establish a dominant brand presence alongside their new website, we highly recommend our comprehensive <Link href="/services/branding" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">branding and strategy</Link> services.
            </p>

            <h3 id="advanced-architecture-and-api-integration" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Advanced Architecture and API Integration
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">The technical foundation of your website</strong> determines its longevity and scalability. Our Mumbai web developers utilize the most sophisticated, modern technology stacks to ensure your platform remains agile and future-proof. We specialize in headless architectures and server-side rendering, which drastically improves load times and provides a superior, app-like user experience. <strong className="font-semibold text-[#de5e18] tracking-tight">Seamless API integrations</strong> are a crucial component of our web development in Mumbai. We frequently integrate complex third-party software, including proprietary CRM systems, financial data feeds, and advanced marketing automation suites, ensuring your new website operates in perfect harmony with your existing corporate infrastructure. <strong className="font-semibold text-[#de5e18] tracking-tight">By prioritizing clean code</strong> and optimized database queries, our web development company in Mumbai guarantees a frictionless browsing experience that keeps users engaged and dramatically increases your overall conversion rates.
            </p>

            <h3 id="why-choose-our-mumbai-web-developers" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Why Choose Our Mumbai Web Developers
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Trust and technical capability</strong> are the two most important factors when selecting a digital partner. Our web development company in Mumbai has built a sterling reputation by consistently delivering high-ROI digital assets for some of the city's most demanding enterprises. <strong className="font-semibold text-[#de5e18] tracking-tight">We do not outsource our engineering.</strong> Every project is handled entirely by our in-house team of senior developers and UX/UI specialists. <strong className="font-semibold text-[#de5e18] tracking-tight">Strategic alignment</strong> is central to our process; we begin every engagement with a deep dive into your business model, target audience, and competitive landscape in Mumbai. This ensures that every technical decision we make is directly tied to a specific commercial outcome. We pride ourselves on transparent communication, rigorous quality assurance testing, and a steadfast commitment to delivering your custom website development Mumbai project on time and within budget.
            </p>

            <h3 id="enterprise-grade-security-and-compliance" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Enterprise-Grade Security and Compliance
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">For businesses operating in Mumbai's financial and corporate sectors</strong>, data security is non-negotiable. Our web development in Mumbai is built upon a foundation of uncompromising security protocols. We implement enterprise-grade SSL certificates, robust web application firewalls (WAF), and automated vulnerability scanning to protect your digital assets from sophisticated cyber threats. <strong className="font-semibold text-[#de5e18] tracking-tight">Data privacy and compliance</strong> are equally critical. Our Mumbai web developers ensure that your platform adheres strictly to all relevant Indian IT regulations and international data protection standards. <strong className="font-semibold text-[#de5e18] tracking-tight">We build secure, encrypted environments</strong> for user authentication and data storage, providing absolute peace of mind for both your business and your clients. Choosing our custom website development Mumbai services means investing in a resilient digital infrastructure that actively protects your corporate reputation.
            </p>

            <h3 id="high-performance-web-hosting-and-infrastructure" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              High-Performance Web Hosting and Infrastructure
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">A world-class website</strong> requires world-class infrastructure to support it. Our web development in Mumbai extends beyond just writing code; we provide comprehensive cloud architecture and high-performance hosting solutions. We deploy our platforms on leading cloud providers like AWS and Google Cloud, utilizing advanced Content Delivery Networks (CDNs) to ensure your website loads instantly, regardless of where your users are located in India. <strong className="font-semibold text-[#de5e18] tracking-tight">Scalable server architectures</strong> mean your website will never crash during peak traffic spikes, a critical feature for Mumbai's fast-paced ecommerce and retail sectors. We handle all server maintenance, automated backups, and uptime monitoring, allowing your internal teams to focus on core business operations rather than IT management.
            </p>

            <h3 id="advanced-content-management-systems-cms" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Advanced Content Management Systems (CMS)
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Empowering your internal teams</strong> to manage digital content efficiently is a key goal of our web development in Mumbai. We integrate highly customized, user-friendly Content Management Systems (CMS) into every platform we build. Whether your enterprise requires a robust, headless CMS like Sanity for multi-channel content distribution, or a highly tailored WordPress environment for your marketing team, our Mumbai web developers have the expertise to deliver. <strong className="font-semibold text-[#de5e18] tracking-tight">We provide comprehensive training</strong> and detailed documentation, ensuring your staff can easily update text, manage media assets, and publish new pages without requiring ongoing technical support, drastically reducing your long-term operational costs.
            </p>

            <h3 id="strategic-ab-testing-and-iteration" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Strategic A/B Testing and Iteration
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Digital excellence is a continuous process,</strong> not a one-time event. Our web development company in Mumbai strongly advocates for data-driven iteration post-launch. We implement advanced analytics tracking and utilize rigorous A/B testing methodologies to constantly refine your user experience. <strong className="font-semibold text-[#de5e18] tracking-tight">By systematically testing</strong> different headline variations, call-to-action button placements, and landing page layouts, we continuously optimize your website to squeeze maximum value out of every single visitor. This iterative approach to custom website development Mumbai guarantees that your digital platform evolves alongside your business, consistently driving higher conversion rates and maximizing your overall return on investment. If you are looking to drive targeted, high-intent traffic to this newly optimized platform, explore our data-driven <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO services</Link>.
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
                "question": "How long does custom web development in Mumbai take?",
                "answer": "A standard corporate website generally requires 4 to 8 weeks of development time. Highly complex ecommerce web development Mumbai projects, especially those requiring custom integrations, can take 12 weeks or more."
              },
              {
                "question": "Do you build websites for the financial sector?",
                "answer": "Yes, our web development company in Mumbai has extensive experience building highly secure, compliant, and robust digital platforms specifically tailored for financial institutions and corporate enterprises in the city."
              },
              {
                "question": "Will my website be optimized for speed?",
                "answer": "Absolutely. Performance optimization is a core focus of our Mumbai web developers. We utilize server-side rendering, image compression, and advanced caching techniques to ensure your site loads instantly."
              },
              {
                "question": "Can you integrate our existing CRM software?",
                "answer": "Yes, our web development in Mumbai includes seamless API integrations with major CRM platforms like Salesforce, HubSpot, and Zoho, ensuring your website data flows perfectly into your existing corporate systems."
              },
              {
                "question": "Do you offer post-launch support in Mumbai?",
                "answer": "Yes, we provide comprehensive, ongoing support. This includes regular security patches, performance monitoring, server maintenance, and iterative design updates to keep your platform running at peak efficiency."
              },
              {
                "question": "Is your web development process secure?",
                "answer": "Security is paramount. Our custom website development Mumbai team implements enterprise-grade encryption, secure authentication protocols, and regular vulnerability assessments to protect your critical business data."
              },
              {
                "question": "Will I be able to update the website myself?",
                "answer": "Yes. Our web development company in Mumbai integrates easy-to-use Content Management Systems (CMS) and provides full training, empowering your team to manage content updates without needing ongoing developer assistance."
              }
            ]} />

      </ServiceLayout>
    </div>
  );
}
