import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: "Premium Web Development Company in Noida | Southern Edge Marketing",
  description: "Bespoke web development services in Noida. We engineer high-performance, scalable corporate websites, B2B portals, and D2C e-commerce platforms for Noida's enterprises.",
};

const tableOfContents = [
    {
      "id": "driving-digital-transformation-in-noida",
      "title": "Driving Digital Transformation in Noida's IT Hub"
    },
    {
      "id": "enterprise-grade-web-architectures",
      "title": "Enterprise-Grade Web Architectures"
    },
    {
      "id": "modernizing-manufacturing-and-b2b",
      "title": "Modernizing Manufacturing & B2B Portals"
    },
    {
      "id": "high-performance-ecommerce",
      "title": "High-Performance E-commerce for D2C Brands"
    },
    {
      "id": "advanced-tech-stack-and-cloud",
      "title": "Advanced Tech Stack & Cloud Solutions"
    },
    {
      "id": "local-nuances-speed-scale-security",
      "title": "Local Nuances: Speed, Scale, and Security"
    },
    {
      "id": "the-southern-edge-advantage",
      "title": "The Southern Edge Advantage in UP West"
    },
    {
      "id": "conversion-focused-ux-ui",
      "title": "Conversion-Focused UX/UI Design"
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

export default function NoidaWebdevelopmentPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title={"Next-Gen Web Development in Noida"}
        tagline={"Engineering scalable digital platforms for the fastest-growing enterprises along the Noida Expressway and beyond."}
        breadcrumbTitle={"Web Development in Noida"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            <h3 id="driving-digital-transformation-in-noida" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Driving Digital Transformation in Noida's IT Hub
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Noida has rapidly evolved</strong> from an industrial township into one of India's most formidable technology and electronics manufacturing hubs. From the sprawling corporate parks of Sector 62 to the hyper-modern campuses along the Yamuna Expressway, the business landscape here demands digital infrastructure that matches its physical scale. At Southern Edge Marketing, our web development in Noida is tailored for companies operating in this high-growth environment. We recognize that a standard brochure website is entirely insufficient for businesses competing in global supply chains or launching cutting-edge tech products. Instead, we engineer highly robust, digital-first storefronts and corporate platforms that establish immediate market authority, streamline complex operations, and facilitate massive scale.
            </p>

            <h3 id="enterprise-grade-web-architectures" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Enterprise-Grade Web Architectures
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">For large-scale corporations and IT services firms</strong> headquartered in Noida, your website serves as the primary touchpoint for international clients and high-value talent acquisition. Our web development company in Noida specializes in designing enterprise-grade architectures that are built to handle vast amounts of data and intense traffic surges. We don't rely on bloated legacy systems; instead, we deploy modern, decoupled infrastructures (Headless CMS) that allow your marketing teams to update content in real-time while maintaining airtight security protocols. Every platform we build ensures lightning-fast global content delivery, establishing an uncompromising professional image for international stakeholders evaluating your business.
            </p>

            <h3 id="modernizing-manufacturing-and-b2b" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Modernizing Manufacturing & B2B Portals
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Noida is home to massive electronics</strong> and apparel manufacturing sectors. Historically, these industries relied heavily on offline relationships, but the modern procurement landscape is entirely digital. Our bespoke web development in Noida focuses heavily on B2B modernization. We build secure, custom vendor portals, automated wholesale ordering systems, and interactive digital product catalogs that integrate directly with your existing ERPs (like SAP or Oracle). By digitalizing your supply chain interfaces, we help Noida-based manufacturers drastically reduce operational friction, lower administrative overhead, and capture new domestic and international wholesale markets that expect a seamless digital procurement experience.
            </p>

            <h3 id="high-performance-ecommerce" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              High-Performance E-commerce for D2C Brands
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">The direct-to-consumer (D2C) revolution</strong> is flourishing across Delhi NCR, and Noida is an epicenter for emerging consumer brands. Our e-commerce web development Noida services are engineered to drive aggressive revenue growth. We bypass rigid templates to build custom, high-converting digital storefronts using platforms like <a href="https://www.shopify.com/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Shopify</a> Plus, custom React setups, and <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Next.js</a>. Our approach focuses on frictionless checkout experiences, intelligent product recommendations powered by user data, and seamless integrations with local logistics heavyweights operating out of the region. The result is an online store that not only reflects your brand's unique aesthetics but systematically converts casual browsers into loyal, repeat buyers.
            </p>

            <h3 id="advanced-tech-stack-and-cloud" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Advanced Tech Stack & Cloud Solutions
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Future-proofing your business</strong> requires investing in the right technology stack today. Our Noida web developers are deeply proficient in modern JavaScript ecosystems, including React, Vue, Node.js, and serverless cloud architectures (AWS, Google Cloud). This technological foundation allows us to build Single Page Applications (SPAs) and Progressive Web Apps (PWAs) that load instantly and function effortlessly, even on variable network connections. By leveraging cloud-native deployment strategies, we ensure your web platform can automatically scale computing resources during high-traffic events—such as a product launch or festive sale—without any degradation in user experience.
            </p>

            <h3 id="local-nuances-speed-scale-security" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Local Nuances: Speed, Scale, and Security
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Operating in India's digital economy</strong> comes with unique challenges, particularly regarding mobile network speeds and data privacy. Our custom website development Noida team prioritizes extreme performance optimization. We ruthlessly compress assets, implement aggressive caching strategies, and utilize global CDNs to ensure your site is blazing fast across all of Uttar Pradesh and beyond. Concurrently, data security is non-negotiable. We implement advanced threat protection, secure API endpoints, and ensure strict compliance with India's evolving digital privacy frameworks, safeguarding your business from both cyber threats and regulatory penalties.
            </p>

            <h3 id="the-southern-edge-advantage" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              The Southern Edge Advantage in UP West
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Choosing the right technical partner</strong> determines whether your website becomes a liability or a primary growth engine. We do not operate as a standard web development company in Noida that outsources code and misses deadlines. We operate as your dedicated technical arm. Our process is rooted in deep discovery—understanding your specific operational bottlenecks and commercial objectives before writing a single line of code. We pride ourselves on transparent communication, rigorous QA testing protocols, and post-launch strategic support that ensures your platform continues to evolve alongside your business.
            </p>

            <h3 id="conversion-focused-ux-ui" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Conversion-Focused UX/UI Design
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Stunning visuals are meaningless</strong> if they do not drive action. Our UI/UX philosophy for web development in Noida is entirely centered on conversion architecture. We utilize behavioral psychology, heatmapping, and meticulous wireframing to guide users intuitively toward your primary business goals—whether that is booking a corporate consultation, downloading a B2B whitepaper, or completing an e-commerce transaction. By continuously analyzing user interactions, we refine the digital journey, eliminating friction and maximizing the ROI of every visitor that lands on your platform. To drive high-intent traffic to this optimized experience, consider our specialized SEO services.
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
                    "We needed a highly secure, high-performance portal to manage our international electronics distributors. Southern Edge built an architecture that has flawlessly handled our scaling traffic and completely streamlined our wholesale operations in Noida."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="Vikram Sethi" className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Vikram Sethi</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Nexus Core Technologies</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    "The shift from traditional retail to D2C was daunting, but their web development team engineered a Shopify Plus setup that is ridiculously fast. Our mobile conversion rates out of the NCR region tripled in the first quarter."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Meera Rajput" className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Meera Rajput</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Aura Organics India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full clear-both pt-8 mt-8 border-t border-black/10">
              <FaqAccordion faqs={[
                {
                  "question": "Can you build custom B2B portals for manufacturing companies in Noida?",
                  "answer": "Absolutely. A significant portion of our web development in Noida focuses on industrial and B2B clients. We build custom vendor management portals, digital product catalogs, and secure ordering systems that integrate with legacy ERPs like SAP."
                },
                {
                  "question": "Do you offer Headless e-commerce solutions for D2C brands?",
                  "answer": "Yes, for scaling e-commerce brands in the NCR, we highly recommend decoupled (Headless) architectures using Next.js and Shopify Plus or Commerce Layer. This provides ultimate frontend flexibility and lightning-fast page loads critical for mobile conversions."
                },
                {
                  "question": "How do you ensure the website is fast on Indian mobile networks?",
                  "answer": "Performance is engineered from day one. Our Noida web developers utilize modern frameworks (like React), ruthless image compression (WebP), aggressive caching, and local Content Delivery Networks (CDNs) to ensure near-instant load times across all network conditions."
                },
                {
                  "question": "Will we own the intellectual property (IP) and source code?",
                  "answer": "Yes, 100%. Unlike some agencies that lock you into proprietary platforms, upon final payment, you retain full ownership of the custom source code and all digital assets we develop for your business."
                },
                {
                  "question": "What is the typical timeframe for an enterprise web project?",
                  "answer": "While a standard corporate site may take 6 to 8 weeks, complex enterprise platforms or custom web applications typically require 12 to 16 weeks to accommodate extensive discovery, custom backend engineering, and rigorous QA testing."
                },
                {
                  "question": "Do you provide hosting and post-launch maintenance?",
                  "answer": "Yes, we offer enterprise-grade cloud hosting solutions (AWS/Google Cloud) and comprehensive Service Level Agreements (SLAs). Our web development company in Noida provides continuous security patching, uptime monitoring, and proactive feature enhancements."
                },
                {
                  "question": "Is the website optimized for Google Search out of the box?",
                  "answer": "Yes. Technical SEO is foundational to our process. We ensure semantic HTML structure, optimized Core Web Vitals, dynamic XML sitemaps, and clean URL routing so that your new platform is fully prepared to rank highly in competitive local and national search results."
                }
              ]} />
            </div>

      </ServiceLayout>
    </div>
  );
}
