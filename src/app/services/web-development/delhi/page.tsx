import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: "Web Development Company in Delhi | Southern Edge Marketing",
  description: "Elevate your digital presence with top-tier web development in Delhi. We build fast, scalable, and high-converting custom websites for businesses across the NCR.",
};

const tableOfContents = [
    {
      "id": "dominating-the-digital-landscape-in-delhi-ncr",
      "title": "Dominating the Digital Landscape in Delhi NCR"
    },
    {
      "id": "full-spectrum-web-development-solutions",
      "title": "Full-Spectrum Web Development Solutions"
    },
    {
      "id": "modern-technologies-and-api-integrations",
      "title": "Modern Technologies and API Integrations"
    },
    {
      "id": "why-partner-with-our-delhi-web-developers",
      "title": "Why Partner With Our Delhi Web Developers"
    },
    {
      "id": "uncompromising-security-and-local-compliance",
      "title": "Uncompromising Security and Local Compliance"
    },
    {
      "id": "technical-seo-and-content-architecture",
      "title": "Technical SEO and Content Architecture"
    },
    {
      "id": "web-accessibility-and-inclusivity-standards",
      "title": "Web Accessibility and Inclusivity Standards"
    },
    {
      "id": "conversion-rate-optimization-strategies",
      "title": "Conversion Rate Optimization Strategies"
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

export default function DelhiWebdevelopmentPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title={"Premium Custom Web Development in Delhi NCR"}
        tagline={"High-performance digital platforms for Delhi's fastest-growing enterprises."}
        breadcrumbTitle={"Web Development in Delhi"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            <h3 id="dominating-the-digital-landscape-in-delhi-ncr" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Dominating the Digital Landscape in Delhi NCR
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">The National Capital Region</strong> is the pulsing heart of India's business ecosystem. With thousands of startups and legacy enterprises vying for consumer attention, having a standard website is no longer sufficient. Our specialized web development in Delhi equips your business with a world-class digital platform designed specifically to cut through the noise. We understand the local market dynamics intricately, from the fast-paced corporate culture of Gurugram to the traditional business sectors of Central Delhi. <strong className="font-semibold text-[#de5e18] tracking-tight">By choosing our agency</strong>, you are not just getting a website; you are securing a highly optimized digital storefront engineered for maximum conversion. We focus relentlessly on building scalable architectures that load instantly and provide an exceptional user experience on both desktop and mobile devices. Our dedicated team of Delhi web developers is committed to delivering solutions that elevate your brand authority and drive measurable commercial success.
            </p>

            <h3 id="full-spectrum-web-development-solutions" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Full-Spectrum Web Development Solutions
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">A successful digital strategy</strong> demands a comprehensive approach to software engineering. We offer an extensive suite of services for web development in Delhi, ensuring every technical and visual requirement is expertly handled under one roof. <strong className="font-semibold text-[#de5e18] tracking-tight">Custom corporate website development</strong> forms the backbone of our offerings, allowing us to design highly branded, bespoke platforms for B2B and B2C enterprises. We meticulously craft user journeys that guide visitors seamlessly from landing page to final conversion. <strong className="font-semibold text-[#de5e18] tracking-tight">Ecommerce web development Delhi</strong> is another critical area of our expertise, tailored specifically for the booming Indian retail sector. We build robust, highly secure online stores integrated perfectly with local payment gateways like Razorpay and PayU. Furthermore, our web development company in Delhi prioritizes mobile-first design methodologies, recognizing that the vast majority of Indian consumers access the internet exclusively through their smartphones. For businesses looking to enhance their overarching corporate identity, we highly recommend exploring our branding and strategy solutions.
            </p>

            <h3 id="modern-technologies-and-api-integrations" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Modern Technologies and API Integrations
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">The technology powering your website</strong> directly dictates its speed, security, and long-term scalability. Our Delhi web developers leverage the most advanced, enterprise-grade technology stacks available in the global market today. We build dynamic, server-side rendered applications using React and <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Next.js</a>, guaranteeing lightning-fast page loads and exceptional technical SEO performance. <strong className="font-semibold text-[#de5e18] tracking-tight">API integrations</strong> are handled seamlessly by our backend engineering team. Whether you require connectivity with local CRM software, logistics and shipping platforms like Delhivery, or advanced marketing automation tools, we ensure your website integrates flawlessly into your existing business operations. <strong className="font-semibold text-[#de5e18] tracking-tight">Performance and speed optimization</strong> are not mere afterthoughts; they are baked into our development lifecycle from the very first line of code. By prioritizing lean architectures and optimized asset delivery networks, our web development in Delhi ensures your users enjoy a frictionless browsing experience, which directly translates to significantly lower bounce rates and exponentially higher conversions.
            </p>

            <h3 id="why-partner-with-our-delhi-web-developers" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Why Partner With Our Delhi Web Developers
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Finding a reliable technical partner</strong> is critical to the long-term success of your digital initiatives. Our web development company in Delhi stands out by offering a unique combination of technical excellence and deep local market understanding. <strong className="font-semibold text-[#de5e18] tracking-tight">We completely avoid generic templates.</strong> Every single project we undertake is custom-engineered to solve the specific business challenges of our clients. <strong className="font-semibold text-[#de5e18] tracking-tight">Transparent communication and rigorous project management</strong> ensure that you are never left in the dark. We work collaboratively with your internal teams, providing regular milestone updates and strategic guidance throughout the entire development process. Our expansive portfolio boasts successful deployments for a wide range of industries across the NCR, from rapid-growth startups in Noida to established financial institutions in South Delhi. We measure our success entirely by the measurable growth and digital dominance our clients achieve post-launch.
            </p>

            <h3 id="uncompromising-security-and-local-compliance" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Uncompromising Security and Local Compliance
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">In an era of increasing digital threats</strong>, safeguarding your business data is absolutely paramount. Our web development in Delhi incorporates robust, military-grade security protocols into every layer of your website's architecture. We implement advanced SSL encryption, automated threat detection systems, and comprehensive DDoS protection to defend against malicious attacks. <strong className="font-semibold text-[#de5e18] tracking-tight">Regulatory compliance</strong> is also a top priority for our engineering team. Our Delhi web developers ensure that your new digital platform strictly adheres to Indian data privacy regulations, including the latest IT Act mandates. <strong className="font-semibold text-[#de5e18] tracking-tight">Secure data handling</strong> and transparent cookie management systems are built directly into the user interface, protecting both your business liability and the privacy of your invaluable customers. When you choose our custom website development Delhi services, you are investing heavily in a secure, compliant, and highly resilient digital infrastructure.
            </p>

            <h3 id="technical-seo-and-content-architecture" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Technical SEO and Content Architecture
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Visibility is just as important</strong> as exceptional design. A beautiful website that cannot be found by search engines is a wasted investment in the crowded Indian market. Our web development in Delhi includes comprehensive technical SEO right from the initial wireframing phase. We architect your site structure, URL hierarchies, and metadata to be perfectly aligned with Google's latest algorithm updates. <strong className="font-semibold text-[#de5e18] tracking-tight">Strategic content architecture</strong> is also a primary focus for our team. We organize your digital assets so that both users and search engine crawlers can navigate your complex information effortlessly, maximizing your organic reach across the entire NCR region.
            </p>

            <h3 id="web-accessibility-and-inclusivity-standards" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Web Accessibility and Inclusivity Standards
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Digital inclusivity</strong> is a core component of modern web engineering. We ensure that our custom website development Delhi services adhere to strict Web Content Accessibility Guidelines (WCAG). This means designing digital platforms that are fully accessible to users with visual, auditory, or cognitive disabilities. <strong className="font-semibold text-[#de5e18] tracking-tight">Implementing features</strong> such as screen reader compatibility, high-contrast visual modes, and keyboard-only navigation not only broadens your potential audience in India but also clearly demonstrates your brand's commitment to social responsibility and global inclusivity standards.
            </p>

            <h3 id="conversion-rate-optimization-strategies" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Conversion Rate Optimization Strategies
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Driving traffic is only half the battle;</strong> converting that traffic is where true business value is generated. Our web development company in Delhi integrates advanced Conversion Rate Optimization (CRO) strategies into every design decision we make. We utilize sophisticated heat mapping, rigorous A/B testing protocols, and detailed user session recording to analyze exactly how visitors interact with your platform. <strong className="font-semibold text-[#de5e18] tracking-tight">By continuously iterating</strong> on call-to-action placement, form design, and ecommerce checkout flows, we systematically eliminate friction points, ensuring that your website acts as a highly efficient, 24/7 sales engine for your enterprise. If you need a comprehensive plan to drive qualified traffic to this optimized platform, check out our SEO solutions.
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
                "question": "How long does custom web development in Delhi take?",
                "answer": "The timeline depends on the complexity of the project. A standard corporate website typically takes 4 to 8 weeks, while complex ecommerce web development in Delhi can take 12 weeks or more to ensure rigorous testing and security."
              },
              {
                "question": "Do you integrate local Indian payment gateways?",
                "answer": "Absolutely. Our ecommerce web development Delhi services include seamless integration with trusted local gateways like Razorpay, PayU, and CCAvenue, ensuring smooth and secure transactions for your customers."
              },
              {
                "question": "Will my new website be mobile-friendly?",
                "answer": "Yes, mobile-first design is standard practice for our web development company in Delhi. Your website will be fully responsive, ensuring flawless performance across all smartphones, tablets, and desktop devices."
              },
              {
                "question": "What Content Management Systems (CMS) do you use?",
                "answer": "Our Delhi web developers are experts in headless CMS platforms like Sanity and Contentful for enterprise clients, as well as highly customized WordPress solutions for businesses seeking an easy-to-use administrative interface."
              },
              {
                "question": "Do you provide ongoing maintenance after launch?",
                "answer": "Yes. Launching the site is just the beginning. Our web development in Delhi includes comprehensive post-launch support, regular security updates, and performance monitoring to ensure your platform remains optimal."
              },
              {
                "question": "Is technical SEO included in the development process?",
                "answer": "Yes, technical SEO is baked into our development architecture. We ensure fast load times, clean code structures, and proper metadata optimization to give you a strong foundation for organic search rankings in the NCR."
              },
              {
                "question": "Can you redesign our existing outdated website?",
                "answer": "Certainly. We specialize in digital modernization. Our custom website development Delhi team will audit your current site, migrate your valuable data securely, and deploy a vastly superior, high-converting modern platform."
              }
            ]} />

      </ServiceLayout>
    </div>
  );
}
