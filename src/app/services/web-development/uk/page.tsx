import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/web-development/uk',
  },
  title: "Web Development Company in the UK | Southern Edge Marketing",
  description: "Partner with the leading web development company in the UK. We engineer secure, high-performance Next.js platforms tailored to British enterprises.",
};

const tableOfContents = [
  {
    "id": "uk-digital-economy-and-enterprise-web-engineering",
    "title": "The UK Digital Economy and Enterprise Web Engineering"
  },
  {
    "id": "enterprise-nextjs-and-composable-headless-architectures",
    "title": "Enterprise Next.js and Composable Headless Architectures"
  },
  {
    "id": "uk-gdpr-ico-compliance-and-fintech-security",
    "title": "UK GDPR, ICO Compliance, and Enterprise Security"
  },
  {
    "id": "british-ecommerce-open-banking-and-hmrc-vat-systems",
    "title": "British E-Commerce, Open Banking, and HMRC VAT Integration"
  },
  {
    "id": "b2b-portals-and-industrial-supply-chain-modernization",
    "title": "B2B Portals and Northern Powerhouse Supply Chain Modernization"
  },
  {
    "id": "equality-act-and-wcag-accessible-web-design",
    "title": "Equality Act 2010 and WCAG 2.2 Accessible Web Engineering"
  },
  {
    "id": "uk-wide-edge-infrastructure-and-london-cloud-hosting",
    "title": "UK-Wide Edge Infrastructure and AWS London Cloud Performance"
  },
  {
    "id": "agile-engineering-lifecycle-and-enterprise-support-slas",
    "title": "Agile Engineering Lifecycle and UK Enterprise Support SLAs"
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

export default function UKWebDevelopmentPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title={"Enterprise Web Development in the UK"}
        tagline={"Engineering resilient, lightning-fast digital architectures for the United Kingdom's leading enterprises and high-growth disruptors."}
        breadcrumbTitle={"Web Development in UK"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            <h3 id="uk-digital-economy-and-enterprise-web-engineering" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              The UK Digital Economy and Enterprise Web Engineering
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">The United Kingdom stands as Europe's premier technology powerhouse</strong>, anchored by global financial institutions in the City of London and Canary Wharf, thriving deep-tech clusters in Cambridge's Silicon Fen, and vibrant digital hubs across Manchester's MediaCityUK and Edinburgh. In such an intensely competitive and mature commercial environment, legacy websites and bloated monolithic content management systems represent severe operational bottlenecks. As an elite <strong className="font-semibold text-[#de5e18] tracking-tight">web development company in the UK</strong>, Southern Edge Marketing engineers bespoke web platforms and cloud-native applications tailored to British enterprise demands. We build resilient digital infrastructure that accelerates user acquisition, secures sensitive transaction pipelines, and unlocks scalable commercial velocity. Whether your organization operates from the King's Cross Knowledge Quarter or manages supply networks across the West Midlands, our software engineering practice delivers dependable commercial performance. <strong className="font-semibold text-[#de5e18] tracking-tight">Partnering with our engineering team</strong> provides your brand with the technical precision required to dominate domestic search rankings and international markets.
            </p>

            <h3 id="enterprise-nextjs-and-composable-headless-architectures" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Enterprise Next.js and Composable Headless Architectures
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Modern British enterprises require decoupled, composable web architectures that ensure sub-second interaction speeds and fault-tolerant scalability during peak commercial traffic. We engineer high-performance frontend interfaces utilizing React and <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Next.js</a>, leveraging server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR) to render complex pages in milliseconds. By separating the user presentation layer from backend content repositories and enterprise resource planning systems, we eliminate performance bottlenecks and substantially diminish attack surfaces. This composable architecture empowers marketing teams to iterate rapidly via modern headless CMS solutions like Sanity and Contentful while software architects maintain total governance over API orchestration. <strong className="font-semibold text-[#de5e18] tracking-tight">Our precision frontend engineering</strong> eliminates extraneous JavaScript payloads, maximizes Core Web Vitals scores, and drives conversion rates across all device viewports. You can review our core development philosophy and engineering culture by visiting our <Link href="/about" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">about us</Link> page.
            </p>

            <h3 id="uk-gdpr-ico-compliance-and-fintech-security" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              UK GDPR, ICO Compliance, and Enterprise Security
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Digital operations in the United Kingdom demand uncompromising adherence to statutory privacy frameworks and stringent institutional security protocols. Our engineering lifecycle implements rigorous compliance with the Data Protection Act 2018 and UK GDPR, aligning directly with enforcement guidelines set by the <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Information Commissioner's Office (ICO)</a> and Privacy and Electronic Communications Regulations (PECR). For financial services, legal practices, and regulated fintech innovators, we architect zero-trust authentication workflows, automated cryptographic tokenization, and end-to-end data encryption adhering to <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Financial Conduct Authority (FCA)</a> operational resilience standards. All data processing routines, cookie consent frameworks, and customer databases are configured to maintain absolute data residency within sovereign UK cloud regions. <strong className="font-semibold text-[#de5e18] tracking-tight">Prioritizing defensive software architecture</strong> protects your business from costly regulatory penalties, mitigates cyber liabilities, and cements institutional trust with British consumers and enterprise partners alike.
            </p>

            <h3 id="british-ecommerce-open-banking-and-hmrc-vat-systems" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              British E-Commerce, Open Banking, and HMRC VAT Integration
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              The UK consumer and B2B commerce landscape represents one of the most advanced transactional markets globally, characterized by widespread adoption of frictionless digital payment rails. We engineer custom digital storefronts and transactional portals integrated with modern <a href="https://www.openbanking.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Open Banking</a> payment APIs (Pay by Bank), Faster Payments Service (FPS), Bacs Direct Debit, Stripe UK, Checkout.com, and Klarna. Our systems feature dynamic tax computation engines that automatically handle standard, reduced, and zero-rated VAT calculations in full compliance with HMRC Making Tax Digital mandates. Furthermore, we establish direct API synchronization with major British logistics carriers, including Royal Mail Tracked, DPD UK, Evri, and DHL Parcel UK, providing real-time postcode verification and automated consignment tracking. <strong className="font-semibold text-[#de5e18] tracking-tight">Streamlining transactional workflows and checkout performance</strong> directly minimizes cart drop-off and maximizes average order value across the British Isles. To elevate your commercial identity and visual market impact, discover our bespoke <Link href="/services/branding" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">branding services</Link>.
            </p>

            <h3 id="b2b-portals-and-industrial-supply-chain-modernization" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              B2B Portals and Northern Powerhouse Supply Chain Modernization
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Across the industrial corridors of the West Midlands, the Northern Powerhouse manufacturing belt in Leeds and Sheffield, and distribution networks within the logistics Golden Triangle, B2B enterprises require advanced digital infrastructure to streamline operations. We build bespoke client extranets, vendor management platforms, and self-service purchasing portals that integrate seamlessly with enterprise ERP systems such as SAP, Microsoft Dynamics 365, and Sage. These custom web applications automate complex tiered pricing structures, bulk purchase orders, contract approvals, and localized dispatch workflows. <strong className="font-semibold text-[#de5e18] tracking-tight">By replacing manual spreadsheets and legacy telephone ordering</strong> with intuitive, high-speed digital self-service tools, our clients dramatically reduce administrative overhead and accelerate fulfillment cycles. Our engineering team designs intuitive dashboards that provide real-time inventory visibility and procurement analytics for multi-facility operations. If your organization also seeks dedicated native application capabilities, explore our enterprise <Link href="/services/app-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">app development services</Link>.
            </p>

            <h3 id="equality-act-and-wcag-accessible-web-design" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Equality Act 2010 and WCAG 2.2 Accessible Web Engineering
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Digital accessibility is both a statutory requirement under the Equality Act 2010 and a fundamental component of high-converting web engineering. Our development methodology embeds <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">WCAG 2.2 Level AA and AAA</a> criteria into every interface component from the wireframing phase through production rollout. We author clean semantic HTML5 markup, complete ARIA landmark roles, logical keyboard navigation flows, and rigorous screen-reader compatibility for users with visual or motor impairments. <strong className="font-semibold text-[#de5e18] tracking-tight">Inclusive design practices</strong> expand your addressable audience across the entire United Kingdom while shielding your organization from civil discrimination claims and accessibility non-compliance penalties. In addition to manual keyboard and voice-control audits, our engineers deploy automated CI/CD accessibility linters that prevent regressions during continuous software releases.
            </p>

            <h3 id="uk-wide-edge-infrastructure-and-london-cloud-hosting" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              UK-Wide Edge Infrastructure and AWS London Cloud Performance
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Achieving exceptional web speeds across the United Kingdom requires purpose-built edge caching architectures optimized for domestic telecommunications infrastructure, including BT, Openreach, Virgin Media O2, and CityFibre networks. We deploy distributed content delivery networks featuring point-of-presence (PoP) edge nodes across London (Telehouse, Slough) and Manchester, ensuring cached assets and serverless compute executions occur within milliseconds of the end user. Primary databases and backend services are provisioned in secure UK cloud zones, including AWS Europe London (eu-west-2) and Microsoft Azure UK South. <strong className="font-semibold text-[#de5e18] tracking-tight">Our performance optimization protocols</strong> compress media into modern AVIF and WebP formats, eliminate render-blocking CSS, and utilize fine-grained edge caching strategies. This deep technical focus on latency reduction directly reinforces your organic search presence through our comprehensive <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO services</Link>, ensuring dominant visibility on British Google search results.
            </p>

            <h3 id="agile-engineering-lifecycle-and-enterprise-support-slas" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Agile Engineering Lifecycle and UK Enterprise Support SLAs
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our engineering partnership follows a transparent, sprint-based agile delivery framework built to provide British executives with clear progress milestones, code reviews, and deterministic delivery dates. From initial architectural discovery and interactive prototyping to continuous automated testing and zero-downtime deployment pipelines, our team ensures continuous visibility throughout the project lifecycle. Following production launch, we back our web applications with rigorous enterprise service level agreements (SLAs) offering 24/7 uptime monitoring, automated cloud backup retention, and rapid incident response protocols. Our dedicated engineers operate during standard UK business hours (GMT/BST), providing immediate technical support, proactive dependency updates, and continuous conversion rate optimization. <strong className="font-semibold text-[#de5e18] tracking-tight">When you are ready to engineer an industry-defining digital asset</strong>, <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">contact our UK web development team</Link> to schedule an initial technical consultation.
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
                    "Southern Edge Marketing engineered a decoupled Next.js institutional wealth portal for our City of London financial advisory practice. The platform's sub-second latency, flawless UK GDPR consent architecture, and seamless Open Banking payment flows delivered a 44% uplift in high-net-worth onboarding completions within five months of deployment."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Alistair Finch" className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Alistair Finch</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Meridian Wealth Systems (London, EC2)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    "We commissioned Southern Edge Marketing to completely rebuild our industrial distribution B2B portal connecting manufacturing hubs across Manchester, Leeds, and the West Midlands. Their integration with our Sage enterprise ERP and automated Royal Mail and DPD dispatch pipelines cut manual order processing times by over 60%."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Eleanor Vance" className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Eleanor Vance</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Vanguard Precision Logistics (Manchester, UK)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FaqAccordion faqs={[
              {
                "question": "How do your web applications maintain compliance with UK GDPR and ICO regulations?",
                "answer": "We architect web platforms following strict data privacy by design principles under the Data Protection Act 2018 and UK GDPR. This includes granular PECR-compliant cookie consent frameworks, zero-trust user authentication mechanisms, end-to-end data encryption, and sovereign database provisioning within UK cloud data centers to guarantee total data residency."
              },
              {
                "question": "Can you integrate UK payment methods like Open Banking, Faster Payments, and Bacs?",
                "answer": "Yes, we build direct API integrations with leading UK payment gateways and Open Banking providers, enabling instant Pay by Bank transactions, Faster Payments Service (FPS) processing, Bacs Direct Debit automation, Apple Pay, Google Pay, and Stripe UK with 3D Secure 2 compliance."
              },
              {
                "question": "How do your websites meet Equality Act 2010 and WCAG accessibility standards?",
                "answer": "Every digital solution we engineer adheres strictly to WCAG 2.2 Level AA guidelines, ensuring full compliance with the Equality Act 2010 and UK Public Sector accessibility mandates. We implement clean semantic HTML5, complete ARIA landmark attributes, high-contrast color ratios, and full screen-reader and keyboard navigability."
              },
              {
                "question": "How do you handle automated HMRC VAT calculations and UK courier integrations?",
                "answer": "Our e-commerce architectures include dynamic tax logic that calculates 20% standard VAT, reduced rates, or zero-rated goods in real time, aligned with Making Tax Digital requirements. We also integrate automated carrier APIs for Royal Mail Tracked, DPD UK, and DHL Parcel UK for instant address validation, postage generation, and tracking."
              },
              {
                "question": "Where will our website and customer databases be hosted in the UK?",
                "answer": "We deploy production systems to sovereign UK cloud zones, primarily AWS Europe London (eu-west-2) or Microsoft Azure UK South in London. Local UK hosting guarantees minimum network latency for domestic users and complies with institutional data residency requirements."
              },
              {
                "question": "How do you optimize website speeds across UK telecom networks like BT and Virgin Media?",
                "answer": "We configure global edge content delivery networks (CDNs) with localized points of presence (PoPs) in London and Manchester. Combined with Next.js server-side rendering, automated image compression (AVIF/WebP), and optimized asset caching, we ensure sub-second page loads across BT, Openreach, and Virgin Media O2 networks."
              },
              {
                "question": "What ongoing maintenance and SLA support do you provide for UK businesses?",
                "answer": "We provide dedicated enterprise service level agreements (SLAs) that encompass 24/7 uptime monitoring, critical security patching, automated daily cloud backups, and proactive Core Web Vitals optimization. Our support engineering desk operates during UK business hours (GMT/BST) for rapid response and ongoing feature iteration."
              }
            ]} />

      </ServiceLayout>
    </div>
  );
}
