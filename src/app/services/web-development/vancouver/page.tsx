import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/web-development/vancouver',
  },
  title: "Web Development Company in Vancouver | Southern Edge Marketing",
  description: "Partner with the premier web development company in Vancouver. We engineer secure, high-speed Next.js platforms built for BC enterprises and PIPA compliance.",
};

const tableOfContents = [
  {
    "id": "vancouver-tech-ecosystem-and-enterprise-web-engineering",
    "title": "The Vancouver Innovation Corridor and Enterprise Web Engineering"
  },
  {
    "id": "nextjs-headless-architecture-for-cascadia-scale-platforms",
    "title": "Next.js and Headless Web Architectures for High-Growth SaaS and Tech Brands"
  },
  {
    "id": "bc-pipa-privacy-and-canadian-data-residency",
    "title": "BC PIPA Compliance, Canadian Data Residency, and Enterprise Security"
  },
  {
    "id": "bc-accessibility-act-and-wcag-digital-standards",
    "title": "The Accessible British Columbia Act and WCAG 2.2 Digital Accessibility"
  },
  {
    "id": "pacific-northwest-ecommerce-interac-and-bc-pst-tax-engines",
    "title": "Cascadian E-Commerce, Interac Debit Rails, and BC PST/GST Tax Automation"
  },
  {
    "id": "port-of-vancouver-and-industrial-b2b-supply-chain-portals",
    "title": "B2B Supply Chain Portals and Port of Vancouver Logistics Integration"
  },
  {
    "id": "vanix-edge-peering-and-pacific-rim-low-latency-delivery",
    "title": "VANIX Edge Peering and Ultra-Low-Latency Pacific Rim Delivery"
  },
  {
    "id": "pacific-time-agile-delivery-and-enterprise-support-slas",
    "title": "Pacific Time Agile Engineering and Dedicated Enterprise Support SLAs"
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

export default function VancouverWebDevelopmentPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title={"Enterprise Web Development in Vancouver"}
        tagline={"Engineering high-performance, compliant, and scalable digital platforms for Vancouver's SaaS pioneers, clean tech innovators, and Pacific Rim enterprise leaders."}
        breadcrumbTitle={"Web Development in Vancouver"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            <h3 id="vancouver-tech-ecosystem-and-enterprise-web-engineering" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              The Vancouver Innovation Corridor and Enterprise Web Engineering
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Vancouver stands as the technological powerhouse of Western Canada and the northern anchor of the Cascadia Innovation Corridor.</strong> From the dense venture-backed software clusters in Mount Pleasant and Yaletown to the corporate headquarters along Burrard Street and Hastings Street, the Lower Mainland commands an energetic commercial ecosystem. In this competitive landscape, off-the-shelf templates and slow monolithic websites restrict enterprise growth and weaken market credibility. As a premier <strong className="font-semibold text-[#de5e18] tracking-tight">web development company in Vancouver</strong>, Southern Edge Marketing engineers custom web applications and scalable digital platforms built specifically for British Columbia's enterprise leaders. We deliver resilient digital infrastructure that accelerates user acquisition, safeguards sensitive data streams, and establishes commanding digital authority across North America. Whether your firm scales clean technology in False Creek Flats or manages global maritime operations from Coal Harbour, our development practice provides unmatched technical precision. <strong className="font-semibold text-[#de5e18] tracking-tight">Partnering with our engineering team</strong> gives your organization the technical foundation required to capture significant market share across the Pacific Northwest and international markets.
            </p>

            <h3 id="nextjs-headless-architecture-for-cascadia-scale-platforms" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Next.js and Headless Web Architectures for High-Growth SaaS and Tech Brands
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Ambitious tech companies throughout Metro Vancouver demand decoupled, composable web architectures that deliver immediate page responses and uninterrupted stability during high-volume traffic surges. We build high-velocity frontend interfaces powered by React and <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Next.js</a>, utilizing server-side rendering, static site generation, and incremental static regeneration to eliminate rendering delays. By separating the user-facing presentation layer from complex backend databases and content repositories, we reduce client-side bundle payloads and enhance system security. This modern architectural approach enables marketing and product teams to publish dynamic campaigns through headless content management systems like Sanity and Contentful without risking code regressions. <strong className="font-semibold text-[#de5e18] tracking-tight">Our precision frontend engineering</strong> eliminates unnecessary script overhead, achieves flawless Core Web Vitals scores, and drives conversion rates across desktop and mobile devices. To learn more about our development standards and software philosophy, explore our <Link href="/about" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">about us</Link> page.
            </p>

            <h3 id="bc-pipa-privacy-and-canadian-data-residency" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              BC PIPA Compliance, Canadian Data Residency, and Enterprise Security
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Organizations operating in British Columbia must navigate strict personal privacy regulations overseen by the <a href="https://www.oipc.bc.ca/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Office of the Information and Privacy Commissioner for British Columbia (OIPC)</a> under the Personal Information Protection Act (BC PIPA), alongside federal <a href="https://www.priv.gc.ca/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">PIPEDA</a> guidelines. For biotechnology innovators, health tech platforms, and financial institutions, adhering to statutory data protection standards is vital for maintaining stakeholder trust. Our engineering protocols embed zero-trust role-based access architectures, automated database tokenization, and end-to-end TLS 1.3 cryptographic encryption directly into every application layer. To satisfy strict Canadian data residency mandates, we deploy isolated cloud server environments within domestic availability zones, including AWS Canada West in Calgary and AWS Canada Central. <strong className="font-semibold text-[#de5e18] tracking-tight">Defensive software engineering</strong> ensures that your user records, analytical pipelines, and corporate data assets remain secure against unauthorized access and fully compliant with provincial regulations. This uncompromising commitment to privacy and data protection establishes lasting credibility with institutional investors and enterprise clients throughout British Columbia.
            </p>

            <h3 id="bc-accessibility-act-and-wcag-digital-standards" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              The Accessible British Columbia Act and WCAG 2.2 Digital Accessibility
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Digital accessibility is a crucial priority in British Columbia under the <a href="https://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/accessibility" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Accessible British Columbia Act</a>, requiring public and private entities to eliminate barriers in digital services. Meeting the internationally recognized <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">WCAG 2.2 Level AA</a> standards ensures that digital experiences are accessible to all community members, including individuals using screen readers or alternative navigation tools. Our development team incorporates comprehensive accessibility principles from the initial wireframe phase through final deployment. We build semantic HTML5 structures, programmatic ARIA landmark roles, logical keyboard navigation flows, and optimal color contrast ratios into every component. <strong className="font-semibold text-[#de5e18] tracking-tight">Prioritizing inclusive web architecture</strong> expands your audience reach across British Columbia while protecting your organization from regulatory non-compliance risks. In addition, our automated continuous integration pipelines run accessibility testing linters to prevent regressions before new code reaches live production environments.
            </p>

            <h3 id="pacific-northwest-ecommerce-interac-and-bc-pst-tax-engines" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Cascadian E-Commerce, Interac Debit Rails, and BC PST/GST Tax Automation
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Vancouver is a globally celebrated center for outdoor lifestyle brands, direct-to-consumer innovators, and sustainable retail enterprises that demand sophisticated e-commerce engineering. We build high-converting transactional storefronts and headless Shopify Plus solutions integrated directly with Canadian payment channels, including <a href="https://www.interac.ca/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Interac</a> e-Transfer, Interac Online, Apple Pay, and Stripe Canada. Our platforms incorporate dynamic tax calculation logic that automatically computes British Columbia's 7% Provincial Sales Tax (PST) alongside the 5% federal GST, while dynamically adjusting tax rates for cross-provincial shipments across Canada. We also implement real-time shipping carrier integrations with Canada Post Developer APIs, Purolator, FedEx Canada, and regional Pacific Northwest courier services for transparent order tracking. <strong className="font-semibold text-[#de5e18] tracking-tight">Streamlining transactional workflows and mobile checkout speed</strong> significantly reduces cart abandonment and maximizes average order value. To complement your online platform with an authoritative visual identity that stands out in competitive markets, review our comprehensive <Link href="/services/branding" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">branding services</Link>.
            </p>

            <h3 id="port-of-vancouver-and-industrial-b2b-supply-chain-portals" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              B2B Supply Chain Portals and Port of Vancouver Logistics Integration
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              As Canada's largest port and primary maritime gateway to Asia-Pacific trade, the <a href="https://www.portvancouver.com/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Port of Vancouver</a> drives extensive industrial and logistics activity across Richmond, Delta, Burnaby, and Surrey. Industrial manufacturers, freight forwarders, and natural resource enterprises rely on custom web portals to coordinate complex supplier networks, wholesale transactions, and fleet scheduling. We design and build enterprise extranets, vendor portals, and B2B ordering systems that connect directly with enterprise resource planning systems such as SAP, Oracle NetSuite, and Microsoft Dynamics 365. These custom web applications automate wholesale pricing tiers, purchase order workflows, digital customs documentation, and multi-warehouse inventory updates in real time. <strong className="font-semibold text-[#de5e18] tracking-tight">Replacing manual communication channels with unified web portals</strong> eliminates administrative delays and speeds up fulfillment across Pacific trade routes. For organizations seeking custom mobile tools for warehouse staff and field logistics operators, explore our dedicated <Link href="/services/app-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">app development services</Link>.
            </p>

            <h3 id="vanix-edge-peering-and-pacific-rim-low-latency-delivery" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              VANIX Edge Peering and Ultra-Low-Latency Pacific Rim Delivery
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Delivering exceptional web performance across British Columbia and the broader Pacific Northwest requires edge routing optimized for regional telecommunications backbones, including Telus, Rogers, and Bell networks. We deploy distributed content delivery networks configured with edge caching points of presence peering directly at the <a href="https://vanix.ca/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Vancouver Internet Exchange (VANIX)</a>. This configuration guarantees that static assets and serverless computational functions execute within single-digit milliseconds of local users while maintaining efficient trans-Pacific routing to Asian commercial hubs. Our engineering pipeline automates modern image compression into AVIF and WebP formats, removes render-blocking stylesheets, and optimizes critical rendering paths. <strong className="font-semibold text-[#de5e18] tracking-tight">Rigorous web performance optimization</strong> directly boosts your search engine rankings through our targeted <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO services</Link>, ensuring dominant visibility on Canadian and global search engines.
            </p>

            <h3 id="pacific-time-agile-delivery-and-enterprise-support-slas" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Pacific Time Agile Engineering and Dedicated Enterprise Support SLAs
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Delivering mission-critical web applications requires structured agile methodologies, clear milestones, and transparent technical collaboration throughout every project cycle. Our engineering teams operate on bi-weekly sprint cadences aligned with Pacific Time (PST/PDT), ensuring smooth communication with executive teams and technical stakeholders in Vancouver and across the Pacific Northwest. We provide live staging environments, automated test coverage, and comprehensive documentation to ensure seamless platform handoffs. After launch, we protect your digital investment with dedicated service level agreements (SLAs) that include 24/7 uptime monitoring, proactive security updates, daily database backups, and scheduled performance audits. <strong className="font-semibold text-[#de5e18] tracking-tight">When your organization is ready to build an industry-leading web platform in Vancouver</strong>, <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">contact our web development team</Link> to schedule an initial architectural consultation.
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
                    "Southern Edge Marketing engineered a headless Next.js digital platform for our clean technology enterprise in Mount Pleasant. Their mastery of BC PIPA compliance, Canadian data residency, and sub-second asset delivery helped us present our real-time emissions monitoring platform to international ESG investors, resulting in a 52% increase in qualified enterprise leads."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Julian Vance" className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Julian Vance</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Cascadia CleanTech Dynamics (Mount Pleasant, Vancouver)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    "We partnered with Southern Edge Marketing to build a comprehensive B2B supply chain extranet connecting our logistics operations across the Port of Vancouver, Richmond, and Surrey. The platform integrates seamlessly with our SAP ERP and automated freight APIs, reducing manual order coordination overhead by 44% within the first six months."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Sharon Lin" className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Sharon Lin</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Pacific Rim Maritime Solutions (Coal Harbour, Vancouver)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FaqAccordion faqs={[
              {
                "question": "How do your web development solutions comply with British Columbia's PIPA privacy regulations?",
                "answer": "We engineer privacy-by-design architectures that strictly adhere to the Personal Information Protection Act (BC PIPA) and OIPC standards. We implement granular user consent modules, role-based database access, TLS 1.3 encryption, and data residency in secure Canadian cloud regions such as AWS Canada West in Calgary and AWS Canada Central."
              },
              {
                "question": "How do you ensure websites meet the Accessible British Columbia Act and WCAG 2.2 standards?",
                "answer": "All our web applications are developed to meet the Accessible British Columbia Act and WCAG 2.2 Level AA guidelines. We structure clean semantic HTML5 markup, programmatic ARIA attributes, complete keyboard navigation, high color contrast, and automated CI/CD accessibility linters to guarantee barrier-free digital access."
              },
              {
                "question": "Can your e-commerce platforms automate British Columbia PST and federal GST calculations?",
                "answer": "Yes, our custom e-commerce systems incorporate dynamic tax calculation logic that automatically computes BC's 7% PST and 5% GST at checkout. The system also dynamically adjusts tax rates for cross-provincial orders across Canada, generating compliant electronic invoices for seamless bookkeeping."
              },
              {
                "question": "How does VANIX edge peering improve page load speeds for users across Greater Vancouver?",
                "answer": "We deploy global content delivery networks configured to peer directly at the Vancouver Internet Exchange (VANIX). This allows cached web assets and serverless edge functions to execute within single-digit milliseconds for visitors on Telus, Rogers, and Bell networks across British Columbia."
              },
              {
                "question": "Can you build custom B2B portals integrated with enterprise ERP systems for Vancouver industrial firms?",
                "answer": "Absolutely. We engineer custom B2B extranets and client ordering portals that integrate directly with ERP platforms such as SAP, Oracle NetSuite, and Microsoft Dynamics 365. This automates wholesale pricing tiers, bulk purchase orders, real-time inventory updates, and logistics tracking for supply chain operators across the Lower Mainland."
              },
              {
                "question": "How do you optimize web platforms for cross-border trade between Vancouver and the Cascadia corridor?",
                "answer": "We build multi-currency, localized web platforms that support both Canadian and US payment rails, dynamic exchange rate conversions, and cross-border shipping integrations. This provides a frictionless user experience for customers and enterprise partners across Vancouver, Seattle, and international Pacific Rim markets."
              },
              {
                "question": "What ongoing SLA guarantees and maintenance support do you offer for Vancouver enterprises?",
                "answer": "We provide comprehensive service level agreements (SLAs) including 24/7 uptime monitoring, automated security patching, daily cloud backups, and proactive performance optimization. Our senior engineering team operates within Pacific Time (PST/PDT) business hours for fast technical response and continuous platform enhancements."
              }
            ]} />

      </ServiceLayout>
    </div>
  );
}
