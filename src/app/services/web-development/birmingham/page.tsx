import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/web-development/birmingham',
  },
  title: "Web Development Company in Birmingham | Southern Edge Marketing",
  description: "Partner with the premier web development company in Birmingham. We engineer secure, ultra-low-latency Next.js platforms tailored to West Midlands enterprises.",
};

const tableOfContents = [
  {
    "id": "birmingham-digital-economy-and-enterprise-web-engineering",
    "title": "The Birmingham Commercial Landscape and Enterprise Web Engineering"
  },
  {
    "id": "headless-nextjs-architecture-and-high-velocity-engineering",
    "title": "Enterprise Next.js and Headless Architectures for West Midlands Tech Scale-Ups"
  },
  {
    "id": "b2b-extranets-and-midlands-supply-chain-modernization",
    "title": "B2B Extranets and Supply Chain Modernization Across the Midlands Golden Triangle"
  },
  {
    "id": "fca-compliance-uk-gdpr-and-colmore-financial-security",
    "title": "FinTech-Grade Security, FCA Compliance, and Data Governance in Colmore Row"
  },
  {
    "id": "open-banking-jewellery-quarter-luxury-and-hmrc-vat",
    "title": "Bespoke E-Commerce, Open Banking Integrations, and Jewellery Quarter Retail"
  },
  {
    "id": "life-sciences-and-edgbaston-medical-portal-engineering",
    "title": "Clinical-Grade Portals and NHS Integration for Edgbaston Life Sciences"
  },
  {
    "id": "equality-act-and-wcag-accessible-web-standards",
    "title": "Statutory Equality Act 2010 and WCAG 2.2 Accessible Web Architecture"
  },
  {
    "id": "ix-birmingham-edge-peering-and-low-latency-cloud-hosting",
    "title": "IX-Birmingham Edge Peering and Ultra-Low-Latency Regional Infrastructure"
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

export default function BirminghamWebDevelopmentPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title={"Enterprise Web Development in Birmingham"}
        tagline={"Engineering high-velocity, resilient, and compliant digital platforms for Birmingham's advanced manufacturers, Colmore financial institutions, and tech scale-ups."}
        breadcrumbTitle={"Web Development in Birmingham"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            <h3 id="birmingham-digital-economy-and-enterprise-web-engineering" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              The Birmingham Commercial Landscape and Enterprise Web Engineering
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Birmingham stands as the undisputed economic engine of the West Midlands and the United Kingdom&apos;s second city</strong>, generating more than thirty-two billion pounds in annual gross value added. From the prestigious corporate finance towers lining the Colmore Business District and Paradise Birmingham to the creative technology hub of Digbeth and the advanced industrial corridors flanking the M6 motorway, the city commands a dynamic and multi-sector commercial footprint. In this fiercely competitive regional and national economy, sluggish legacy content management systems and off-the-shelf templates introduce critical operational bottlenecks that stifle growth and erode client trust. As an elite <strong className="font-semibold text-[#de5e18] tracking-tight">web development company in Birmingham</strong>, Southern Edge Marketing engineers bespoke web platforms, decoupled frontend architectures, and high-throughput cloud applications tailored to the exacting requirements of Midlands enterprise leaders. We architect secure digital infrastructure designed to accelerate institutional client acquisition, streamline complex B2B transaction pipelines, and establish permanent technical dominance across domestic and international markets. Whether your organization manages multi-site precision engineering facilities across Minworth or orchestrates complex corporate legal services in the city center, our engineering practice guarantees unmatched technical rigor and reliability. <strong className="font-semibold text-[#de5e18] tracking-tight">Partnering with our engineering team</strong> equips your enterprise with the modern digital capabilities necessary to capture high-value market share and establish definitive digital authority.
            </p>

            <h3 id="headless-nextjs-architecture-and-high-velocity-engineering" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Enterprise Next.js and Headless Architectures for West Midlands Tech Scale-Ups
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Modern technology scale-ups across the Digbeth Silicon Canal and the Bruntwood SciTech Innovation Birmingham Campus require decoupled web platforms that guarantee near-instantaneous interaction speeds and zero downtime. We construct high-velocity web interfaces powered by React and <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Next.js</a>, leveraging React Server Components, server-side rendering, and incremental static regeneration to eliminate client-side rendering bottlenecks. By detaching the user-facing presentation layer from monolithic backend databases and legacy content management software, our engineers drastically minimize client-side JavaScript payloads and reduce attack vulnerability vectors. This composable architecture empowers marketing teams to publish rich, multi-channel editorial campaigns through headless content management systems like Sanity and Contentful without creating technical debt or code instability. <strong className="font-semibold text-[#de5e18] tracking-tight">Our precision frontend engineering</strong> eliminates extraneous render-blocking scripts, optimizes critical rendering paths, and consistently achieves flawless Core Web Vitals scores across all modern mobile and desktop displays. In addition, our modular architecture enables engineering teams to deploy rapid feature iterations and API updates without disrupting live transactional user journeys. To explore our core software development methodology and high-performance engineering standards, review our <Link href="/about" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">about us</Link> page.
            </p>

            <h3 id="b2b-extranets-and-midlands-supply-chain-modernization" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              B2B Extranets and Supply Chain Modernization Across the Midlands Golden Triangle
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              At the core of the United Kingdom&apos;s manufacturing heartland and the national logistics Golden Triangle, industrial enterprises throughout Minworth, Fort Dunlop, and Tyseley require sophisticated digital platforms to orchestrate high-volume B2B operations. We design and build bespoke client extranets, vendor supplier portals, and automated procurement systems that integrate seamlessly with enterprise resource planning environments including SAP, Microsoft Dynamics 365, Sage Business Cloud, and Syspro. These custom web applications automate complex multi-tiered contract pricing agreements, bulk purchase order approvals, credit limit verifications, and multi-depot inventory tracking. <strong className="font-semibold text-[#de5e18] tracking-tight">By replacing error-prone manual spreadsheets</strong> and legacy telephone ordering with high-speed digital ordering portals, our engineering practice eliminates administrative friction and shortens fulfillment turnaround times. Our engineers build intuitive operational dashboards that deliver real-time stock visibility across distributed regional warehouses along the M6 and M42 transport corridors. We also incorporate direct API connections to major British courier networks, including DPD UK at its nearby West Midlands superhub, to provide instant address verification and automated consignment tracking. For industrial enterprises seeking dedicated mobile applications for warehouse teams and field technicians, examine our specialized <Link href="/services/app-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">app development services</Link>.
            </p>

            <h3 id="fca-compliance-uk-gdpr-and-colmore-financial-security" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              FinTech-Grade Security, FCA Compliance, and Data Governance in Colmore Row
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Operating within the Colmore Business District and the expanding Birmingham banking hub requires institutional-grade cybersecurity standards and comprehensive regulatory compliance across every digital touchpoint. Our engineering lifecycle integrates end-to-end alignment with the Data Protection Act 2018 and UK GDPR, adhering strictly to statutory data governance guidelines enforced by the <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Information Commissioner&apos;s Office (ICO)</a>. For wealth management firms, private equity groups, and regulated financial institutions, we engineer zero-trust role-based access architectures, automated cryptographic tokenization, and end-to-end TLS 1.3 encryption protocols aligned with <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Financial Conduct Authority (FCA)</a> operational resilience standards. To satisfy strict domestic data residency requirements, all database clusters, user records, and audit logs are provisioned strictly within sovereign UK cloud regions, including AWS Europe London (eu-west-2) and Microsoft Azure UK South. <strong className="font-semibold text-[#de5e18] tracking-tight">Defensive software architecture</strong> ensures that your sensitive client records and proprietary transaction pipelines remain completely protected against unauthorized interception and cyber vulnerabilities. We also integrate continuous automated vulnerability scanning pipelines, dependency linters, and tamper-evident audit logging to detect and neutralize potential threat vectors prior to deployment. This unwavering commitment to digital security builds lasting confidence among institutional investors, corporate partners, and regulatory authorities.
            </p>

            <h3 id="open-banking-jewellery-quarter-luxury-and-hmrc-vat" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Bespoke E-Commerce, Open Banking Integrations, and Jewellery Quarter Retail
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Birmingham&apos;s historic Jewellery Quarter and luxury retail corridors demand digital storefronts that reflect exceptional craftsmanship while delivering frictionless transactional performance. We develop custom e-commerce platforms and high-conversion checkout flows integrated directly with modern UK payment infrastructure, including <a href="https://www.openbanking.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Open Banking</a> payment APIs (Pay by Bank), Faster Payments Service (FPS), Bacs Direct Debit, Stripe UK, Checkout.com, and Apple Pay. Our transactional architectures feature automated taxation calculation engines that accurately compute standard twenty percent VAT, reduced rates, and international duty rules in full compliance with HMRC Making Tax Digital mandates. For high-ticket luxury jewellers and bespoke manufacturers managing global clientele, we engineer real-time multi-currency settlement systems supporting effortless conversion between Pound Sterling, Euros, and US Dollars. We also implement direct API synchronization with Royal Mail Special Delivery and secure courier networks to provide real-time postal code validation and high-value insured consignment tracking. <strong className="font-semibold text-[#de5e18] tracking-tight">Streamlining transactional workflows and checkout performance</strong> significantly reduces cart abandonment rates while maximizing average order values for Birmingham merchants. To elevate your commercial identity and establish commanding visual resonance across competitive sectors, explore our bespoke <Link href="/services/branding" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">branding services</Link>.
            </p>

            <h3 id="life-sciences-and-edgbaston-medical-portal-engineering" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Clinical-Grade Portals and NHS Integration for Edgbaston Life Sciences
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              The Edgbaston Medical Quarter and the Birmingham Health Innovation Campus represent one of Europe&apos;s premier healthcare and life sciences clusters, demanding clinical-grade web platforms with uncompromising data governance. We architect custom patient intake portals, clinical trial recruitment systems, and healthcare provider dashboards built to satisfy the stringent criteria of the NHS Data Security and Protection Toolkit (DSPT). Our healthcare web applications feature granular role-based permissions, end-to-end data encryption for sensitive patient health information, and secure API integrations with electronic health record (EHR) systems. By implementing intuitive user interface designs, we reduce administrative friction for clinical staff while ensuring patients can securely schedule consultations and access diagnostic reports. <strong className="font-semibold text-[#de5e18] tracking-tight">Automated compliance safeguards and immutable audit trails</strong> ensure that all clinical data processing remains fully compliant with UK GDPR and Department of Health and Social Care guidelines. Our engineers conduct rigorous stress testing to guarantee 99.99% uptime for mission-critical health portals serving thousands of patients and medical practitioners daily. This specialized technical foundation accelerates operational efficiency and establishes profound digital trust across the West Midlands healthcare community.
            </p>

            <h3 id="equality-act-and-wcag-accessible-web-standards" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Statutory Equality Act 2010 and WCAG 2.2 Accessible Web Architecture
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              In the United Kingdom, digital accessibility represents both a statutory obligation under the <a href="https://www.legislation.gov.uk/ukpga/2010/15/contents" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Equality Act 2010</a> and a foundational component of high-converting, inclusive user experience design. Commercial enterprises, higher education institutions including the University of Birmingham, and public sector organizations across the West Midlands are legally required to maintain digital platforms compliant with <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">WCAG 2.2 Level AA</a> accessibility criteria to ensure equal access for all users. Our software engineering methodology incorporates accessibility standards into every phase of our development lifecycle, from initial design wireframes to final production rollout. We construct clean semantic HTML5 page hierarchies, programmatic ARIA landmark roles, logical keyboard tab sequences, and complete screen-reader compatibility for individuals relying on assistive technology. <strong className="font-semibold text-[#de5e18] tracking-tight">Investing in accessible web engineering</strong> broadens your reachable market across the United Kingdom while shielding your organization from costly regulatory penalties and civil discrimination claims. Furthermore, our continuous deployment pipelines integrate automated accessibility testing linters that catch visual and structural regressions before any code reaches production servers. We also conduct manual user testing with screen readers and keyboard-only navigation to ensure authentic, friction-free usability across diverse demographic groups.
            </p>

            <h3 id="ix-birmingham-edge-peering-and-low-latency-cloud-hosting" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              IX-Birmingham Edge Peering and Ultra-Low-Latency Regional Infrastructure
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Delivering instantaneous digital performance across Birmingham and the wider West Midlands requires edge caching architectures tuned specifically to regional telecommunications backbones. We deploy distributed content delivery networks featuring direct edge peering through <a href="https://www.linx.net/locations/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">IX-Birmingham (LINX Midlands)</a> and regional data centers, guaranteeing that cached assets and serverless computing routines execute within single-digit milliseconds of local users. Our infrastructure connects directly with primary UK internet service providers and business connectivity networks, including Openreach, Virgin Media Business, CityFibre, and Glide. Primary application servers and secure database clusters are hosted in sovereign UK cloud regions to eliminate cross-border routing latency and maximize transfer throughput for British users. <strong className="font-semibold text-[#de5e18] tracking-tight">Our deep performance optimization protocols</strong> compress images into next-generation AVIF and WebP formats, eliminate render-blocking CSS, and leverage intelligent edge caching rules. This relentless focus on speed directly enhances your organic search visibility through our comprehensive <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO services</Link>, driving top organic placements on UK Google search results. By minimizing Time to First Byte and Cumulative Layout Shift, our engineering ensures that your web application maintains peak responsiveness during critical commercial campaigns. <strong className="font-semibold text-[#de5e18] tracking-tight">When you are ready to construct an industry-defining digital asset in Birmingham</strong>, <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">contact our web development team</Link> to schedule a technical discovery consultation.
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
                    &quot;Southern Edge Marketing engineered a bespoke B2B procurement extranet integrated directly with our SAP ERP for our advanced manufacturing operations in Minworth. The platform automated complex multi-tiered contract pricing, bulk purchase order approvals, and real-time inventory tracking across three West Midlands distribution centers, cutting our order processing overhead by 54% within the first six months.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Alistair Vance" className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Alistair Vance</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Midlands Precision Engineering (Minworth Industrial Park, Birmingham)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    &quot;We partnered with Southern Edge Marketing to build a high-velocity, headless Next.js institutional portal for our private wealth advisory firm in Colmore Row. Their rigorous implementation of FCA-compliant security, zero-trust data architecture, and seamless Open Banking payment rails drove a 48% increase in qualified institutional client onboarding while maintaining flawless sub-second page performance.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Eleanor Davenport" className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Eleanor Davenport</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Davenport &amp; Cole Wealth Management (Colmore Business District, Birmingham)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FaqAccordion faqs={[
              {
                "question": "How do your Birmingham web development services ensure full compliance with UK GDPR and FCA regulations?",
                "answer": "We architect web platforms following strict privacy-by-design standards under the Data Protection Act 2018 and UK GDPR, in full alignment with Information Commissioner's Office (ICO) guidelines. For financial and professional services firms in the Colmore Business District, we implement zero-trust role-based access architectures, TLS 1.3 encryption, and FCA-compliant operational resilience safeguards. Furthermore, all primary databases and user records are provisioned within sovereign UK cloud regions (such as AWS eu-west-2 London or Azure UK South) to guarantee complete data residency."
              },
              {
                "question": "Can you build custom B2B extranets and ordering portals integrated with enterprise ERP systems like SAP, Sage, or Microsoft Dynamics?",
                "answer": "Yes. For manufacturing, logistics, and wholesale enterprises across the West Midlands, we build secure bidirectional RESTful and GraphQL API pipelines connecting custom web platforms directly with enterprise resource planning systems such as SAP, Microsoft Dynamics 365, Sage Business Cloud, and Syspro. This automates multi-tiered wholesale pricing, real-time inventory synchronization, custom invoicing, credit limit validation, and purchase order approvals."
              },
              {
                "question": "How do you optimize web platforms for direct integration with West Midlands logistics hubs and UK parcel carriers like DPD and Royal Mail?",
                "answer": "Our e-commerce and commercial systems connect directly to leading UK carrier APIs, including DPD UK (headquartered in the West Midlands), Royal Mail Tracked, DHL Parcel, and Evri. This integration provides instant postcode address validation, automated consignment label generation, weight-based freight rate calculations, and real-time dispatch tracking notifications for domestic and international shipments."
              },
              {
                "question": "Can you engineer headless Next.js platforms for luxury retailers and high-ticket merchants in Birmingham's Jewellery Quarter?",
                "answer": "Absolutely. We build decoupled, headless Next.js digital storefronts tailored to luxury jewellery brands and specialized retailers. By pairing Next.js frontends with headless commerce backends like Shopify Plus or custom microservices, we achieve sub-second page load times, handle sudden traffic surges without performance degradation, and support secure high-value checkout flows with Open Banking, 3D Secure 2 authentication, and dynamic multi-currency conversion."
              },
              {
                "question": "How does your web architecture satisfy the UK Equality Act 2010 and WCAG 2.2 Level AA accessibility standards?",
                "answer": "Every digital solution we engineer is constructed to meet WCAG 2.2 Level AA accessibility standards, ensuring full statutory compliance with the Equality Act 2010 and Public Sector Bodies Accessibility Regulations. We implement clean semantic HTML5 hierarchies, comprehensive ARIA attributes, keyboard-only navigability, high-contrast color palettes, and automated CI/CD accessibility testing validated by manual screen reader audits."
              },
              {
                "question": "What infrastructure and edge caching strategies do you deploy to achieve ultra-low latency across the West Midlands?",
                "answer": "We deploy global edge content delivery networks featuring direct edge caching and peering through IX-Birmingham and regional UK data centers. Combined with Next.js server-side rendering, automated AVIF and WebP image optimization, and localized UK cloud hosting, our platforms deliver sub-second response times across Openreach, Virgin Media Business, CityFibre, and Glide regional networks."
              },
              {
                "question": "What ongoing maintenance and enterprise SLA support do you provide for Birmingham organizations?",
                "answer": "We provide comprehensive enterprise service level agreements (SLAs) that include 24/7 automated uptime monitoring, proactive security vulnerability patching, automated daily cloud backups, and continuous Core Web Vitals optimization. Our senior engineering support desk operates during standard UK business hours (GMT/BST), ensuring rapid incident resolution and continuous feature iteration for West Midlands enterprises."
              }
            ]} />

      </ServiceLayout>
    </div>
  );
}
