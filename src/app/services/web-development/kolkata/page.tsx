import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/web-development/kolkata',
  },
  title: "Web Development Company in Kolkata",
  description: "Elevate your brand with premier web development in Kolkata. We build custom, high-converting digital platforms for education, retail, and IT sectors.",
};

const tableOfContents = [
    {
      "id": "digital-transformation-in-the-city-of-joy",
      "title": "Digital Transformation in the City of Joy"
    },
    {
      "id": "comprehensive-web-engineering-services",
      "title": "Comprehensive Web Engineering Services"
    },
    {
      "id": "modern-technologies-and-api-integration",
      "title": "Modern Technologies and API Integration"
    },
    {
      "id": "why-partner-with-our-kolkata-web-developers",
      "title": "Why Partner With Our Kolkata Web Developers"
    },
    {
      "id": "uncompromising-security-and-local-compliance",
      "title": "Uncompromising Security and Local Compliance"
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

export default function KolkataWebdevelopmentPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title={"Custom Web Development for Kolkata's Growing Businesses"}
        tagline={"Strategic digital solutions for Eastern India's commercial hub."}
        breadcrumbTitle={"Web Development in Kolkata"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            <h3 id="digital-transformation-in-the-city-of-joy" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Digital Transformation in the City of Joy
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Kolkata's business ecosystem is uniquely diverse,</strong> blending rich cultural heritage with a rapidly expanding IT sector and a massive educational industry. To truly succeed here, your digital presence must respect this tradition while offering a flawlessly modern user experience. Our specialized web development in Kolkata is designed to navigate this specific market dynamic. We understand the distinct needs of a traditional retail brand operating out of Burrabazar versus a burgeoning tech startup based in the Salt Lake Sector V IT hub. <strong className="font-semibold text-[#de5e18] tracking-tight">By partnering with our specialized agency</strong>, you are ensuring that your business receives a custom-engineered digital asset, not a generic template. We focus on building scalable, highly secure architectures that perform exceptionally well under heavy traffic. Our dedicated team of Kolkata web developers is committed to creating digital platforms that not only look visually stunning but are fundamentally designed to generate high-quality leads and drive measurable commercial growth across Eastern India.
            </p>

            <h3 id="comprehensive-web-engineering-services" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Comprehensive Web Engineering Services
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">A successful digital strategy</strong> requires a holistic approach to engineering and design. We provide a full spectrum of services for web development in Kolkata, handling every technical requirement from the initial wireframe to final deployment. <strong className="font-semibold text-[#de5e18] tracking-tight">Custom corporate website development</strong> is a core focus, allowing us to build highly authoritative digital storefronts for established enterprises and educational institutions. We design meticulous user journeys that guide visitors seamlessly toward conversion. <strong className="font-semibold text-[#de5e18] tracking-tight">Ecommerce web development Kolkata</strong> is another critical service offering, specifically tailored for the city's vibrant retail and textile sectors. We build robust online stores featuring secure integrations with local payment gateways (like Razorpay and CCAvenue) and complex inventory management systems. Furthermore, our web development company in Kolkata prioritizes mobile-first design, ensuring your platform operates flawlessly on smartphones, which represent the vast majority of digital traffic in the region. If you need to refine your brand identity before building the site, we highly recommend our branding and strategy experts.
            </p>

            <h3 id="modern-technologies-and-api-integration" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Modern Technologies and API Integration
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">The technology powering your website</strong> directly dictates its speed, security, and long-term viability. Our Kolkata web developers leverage the most advanced, enterprise-grade technology stacks available globally. We build dynamic, server-side rendered applications using frameworks like React and <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Next.js</a>, guaranteeing exceptional page load speeds and superior technical SEO performance. <strong className="font-semibold text-[#de5e18] tracking-tight">Complex API integration</strong> is handled expertly by our backend engineering team. Whether you require connectivity with bespoke CRM software, complex academic management systems, or advanced marketing automation tools, we ensure your website integrates perfectly into your existing operational ecosystem. <strong className="font-semibold text-[#de5e18] tracking-tight">By prioritizing lean architectures</strong> and highly optimized database queries, our web development in Kolkata ensures your users enjoy a frictionless browsing experience, significantly reducing bounce rates and directly increasing your overall conversion metrics.
            </p>

            <h3 id="why-partner-with-our-kolkata-web-developers" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Why Partner With Our Kolkata Web Developers
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Finding a reliable technical partner</strong> is critical to the long-term success of your digital initiatives. Our web development company in Kolkata stands out by offering a unique combination of technical excellence and deep local market understanding. <strong className="font-semibold text-[#de5e18] tracking-tight">We completely avoid generic solutions.</strong> Every single project we undertake is custom-engineered to solve the specific business challenges faced by our clients. <strong className="font-semibold text-[#de5e18] tracking-tight">Transparent communication and rigorous project management</strong> ensure that you are fully informed throughout the entire development lifecycle. We work collaboratively with your internal teams, providing regular milestone updates and strategic guidance. Our expansive portfolio boasts successful deployments for a wide range of industries across the city, from rapid-growth startups in Rajarhat to established legacy brands in Central Kolkata. We measure our success entirely by the measurable growth and digital dominance our clients achieve post-launch.
            </p>

            <h3 id="uncompromising-security-and-local-compliance" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Uncompromising Security and Local Compliance
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">In an era of increasing digital threats</strong>, safeguarding your business data is absolutely paramount. Our web development in Kolkata incorporates robust, military-grade security protocols into every layer of your website's architecture. We implement advanced SSL encryption, automated threat detection systems, and comprehensive DDoS protection to defend against malicious attacks. <strong className="font-semibold text-[#de5e18] tracking-tight">Regulatory compliance</strong> is also a top priority for our engineering team. Our Kolkata web developers ensure that your new digital platform strictly adheres to all Indian data privacy regulations, including the latest IT Act mandates. <strong className="font-semibold text-[#de5e18] tracking-tight">Secure data handling</strong> and transparent cookie management systems are built directly into the user interface, protecting both your business liability and the privacy of your valuable customers. When you choose our custom website development Kolkata services, you are investing heavily in a secure, compliant, and highly resilient digital infrastructure.
            </p>

            <h3 id="technical-seo-and-organic-visibility" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Technical SEO and Organic Visibility
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">A beautiful website is useless</strong> if it cannot be found by your target audience. Our web development in Kolkata includes comprehensive technical SEO right from the initial wireframing phase. We architect your site structure, URL hierarchies, and metadata to be perfectly aligned with Google's latest algorithm updates. <strong className="font-semibold text-[#de5e18] tracking-tight">Strategic content architecture</strong> is also a primary focus for our team. We organize your digital assets so that both users and search engine crawlers can navigate your complex information effortlessly, maximizing your organic reach across Kolkata and the broader Eastern Indian market. For a comprehensive strategy to drive highly qualified traffic to your new site, explore our advanced SEO solutions.
            </p>

            <h3 id="web-accessibility-and-inclusive-design" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Web Accessibility and Inclusive Design
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Digital inclusivity</strong> is a core component of modern web engineering. We ensure that our custom website development Kolkata services adhere strictly to the Web Content Accessibility Guidelines (WCAG). This means designing digital platforms that are fully accessible to users with visual, auditory, or cognitive disabilities. <strong className="font-semibold text-[#de5e18] tracking-tight">Implementing features</strong> such as screen reader compatibility, high-contrast visual modes, and keyboard-only navigation not only broadens your potential audience but also clearly demonstrates your brand's commitment to social responsibility and global inclusivity standards.
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
                    "Southern Edge Marketing transformed our digital presence completely. The custom web platform reduced client onboarding time by 40% and significantly elevated our brand authority."
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
                "question": "How long does custom web development in Kolkata take?",
                "answer": "The timeline depends on technical complexity. A standard corporate website typically takes 4 to 8 weeks, while complex ecommerce web development Kolkata projects can take 12 weeks or more to ensure rigorous testing."
              },
              {
                "question": "Do you build websites for educational institutions?",
                "answer": "Yes, this is a major sector in Kolkata. We build highly secure, scalable portals for schools, colleges, and universities, complete with student management and fee payment integrations."
              },
              {
                "question": "Can you integrate local payment gateways like Razorpay?",
                "answer": "Absolutely. Our ecommerce web development Kolkata services include seamless integration with trusted local gateways like Razorpay, PayU, and CCAvenue, ensuring smooth and secure transactions."
              },
              {
                "question": "Will my new website be mobile-friendly?",
                "answer": "Yes, mobile-first design is a strict standard for our web development company in Kolkata. Your website will be fully responsive, ensuring flawless performance across all smartphones and tablets."
              },
              {
                "question": "Do you provide post-launch maintenance?",
                "answer": "Yes. Launching the site is just the beginning. Our web development in Kolkata includes comprehensive post-launch support, regular security updates, and performance monitoring to ensure optimal uptime."
              },
              {
                "question": "Is technical SEO included in the development process?",
                "answer": "Yes, technical SEO is baked into our development architecture. We ensure fast load times, semantic code structures, and proper metadata optimization to give you a strong foundation for organic search rankings."
              },
              {
                "question": "Can you redesign our existing, outdated website?",
                "answer": "Certainly. We specialize in digital modernization. Our custom website development Kolkata team will audit your current site, migrate your data securely, and deploy a vastly superior, modern platform."
              }
            ]} />

      </ServiceLayout>
    </div>
  );
}
