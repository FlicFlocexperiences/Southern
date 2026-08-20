import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/app-development/manchester',
  },
  title: "App Development Company in Manchester | Southern Edge Marketing",
  description: "Partner with the premier app development company in Manchester. We engineer high-performance iOS, Android, and cross-platform mobile apps for UK enterprises.",
};

const tableOfContents = [
  {
    "id": "manchester-digital-economy-and-mobile-engineering",
    "title": "Greater Manchester's Fast-Growing Digital Economy and Enterprise Mobile Strategy"
  },
  {
    "id": "mediacityuk-video-streaming-and-creative-digital-apps",
    "title": "High-Throughput Media Streaming and Creative Tech Architecture for MediaCityUK"
  },
  {
    "id": "trafford-park-industrial-iot-and-logistics-mobility",
    "title": "Industrial IoT, Warehouse Telematics, and Supply Chain Mobility for Trafford Park"
  },
  {
    "id": "d2c-retail-and-high-concurrency-mobile-commerce",
    "title": "High-Concurrency Mobile E-Commerce and D2C Retail Platforms in the Northern Quarter"
  },
  {
    "id": "fintech-security-open-banking-and-ico-governance",
    "title": "Bank-Grade FinTech Security, Open Banking, and Wilmslow ICO Data Governance"
  },
  {
    "id": "oxford-road-corridor-healthtech-and-nhs-dtac-standards",
    "title": "DTAC-Compliant HealthTech and Clinical Research Portals for the Oxford Road Corridor"
  },
  {
    "id": "native-swift-kotlin-and-react-native-engineering",
    "title": "Native Swift, Kotlin, and React Native Cross-Platform Engineering Frameworks"
  },
  {
    "id": "bee-network-transit-ux-ix-manchester-and-statutory-accessibility",
    "title": "Bee Network Transit Resilience, IX-Manchester Low Latency, and WCAG Accessibility"
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

export default function ManchesterAppDevelopmentPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title={"Enterprise Mobile App Development in Manchester"}
        tagline={"Engineering resilient, high-velocity iOS and Android applications for Manchester's media tech pioneers, e-commerce scale-ups, and industrial leaders."}
        breadcrumbTitle={"App Development in Manchester"}
      />
      
      <ServiceLayout sections={tableOfContents}>

        <h3 id="manchester-digital-economy-and-mobile-engineering" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Greater Manchester&apos;s Fast-Growing Digital Economy and Enterprise Mobile Strategy
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Greater Manchester stands as the commercial powerhouse and technology capital of the Northern Powerhouse</strong>, generating over seventy-four billion pounds in gross value added across the regional economy. From the dense media production studios at MediaCityUK to the life sciences labs lining the Oxford Road Corridor and the financial boardrooms of Spinningfields, local enterprises operate in an exceptionally demanding commercial landscape. Modern British consumers and corporate stakeholders expect instant, intuitive digital interactions, positioning dedicated mobile applications as the central channel for customer retention and operational efficiency. As a premier <strong className="font-semibold text-[#de5e18] tracking-tight">app development company in Manchester</strong>, Southern Edge Marketing architects bespoke iOS and Android applications engineered to conquer the complexities of the North West market. We reject fragile template solutions in favor of robust, cloud-native mobile architectures that deliver determinable business growth, impenetrable data protection, and flawless uptime. By unifying user-centered interface design with horizontally scalable backends, we supply your enterprise with the technical capability needed to outperform regional and global competitors. Whether your team is launching an innovative media platform or managing freight operations across Greater Manchester, our engineering practice guarantees uncompromising execution. To learn how our complete digital ecosystem accelerates multi-channel business expansion, explore our enterprise <Link href="/services/web-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">web development</Link> capabilities.
        </p>

        <h3 id="mediacityuk-video-streaming-and-creative-digital-apps" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          High-Throughput Media Streaming and Creative Tech Architecture for MediaCityUK
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Anchored by the BBC, ITV, and dock10 at Salford Quays</strong>, MediaCityUK represents one of Europe&apos;s most advanced creative and media technology clusters. Engineering mobile applications for broadcast networks, production houses, and digital content creators demands ultra-low-latency media pipelines and resilient streaming protocols. Our specialized <strong className="font-semibold text-[#de5e18] tracking-tight">Manchester app developers</strong> construct custom media streaming engines leveraging HTTP Live Streaming (HLS) and Dynamic Adaptive Streaming over HTTP (DASH) alongside low-latency WebRTC conduits for live broadcasts and interactive second-screen viewer engagement. We optimize native video decoders using Apple AVFoundation on iOS and Google ExoPlayer on Android to ensure bufferless playback across fluctuating network bandwidths. In addition, our mobile architectures support offline media DRM caching, on-device video transcoding, and real-time social metadata synchronization during live events. These creative digital capabilities enable broadcasters and independent creators to distribute high-definition content directly to millions of engaged mobile viewers across the United Kingdom. To refine your brand voice and build compelling visual authority across all consumer touchpoints, review our dedicated <Link href="/services/branding" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">branding services</Link>.
        </p>

        <h3 id="trafford-park-industrial-iot-and-logistics-mobility" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Industrial IoT, Warehouse Telematics, and Supply Chain Mobility for Trafford Park
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Spanning over nine million square feet as Europe&apos;s largest dedicated industrial estate</strong>, Trafford Park and the adjacent Manchester Ship Canal logistics corridor require mission-critical mobile software to orchestrate physical supply chains. We engineer ruggedized enterprise mobile tools for freight handlers, distribution centers, and field technicians navigating the high-density M60 and M62 transport corridors. Our <strong className="font-semibold text-[#de5e18] tracking-tight">custom app development in Manchester</strong> features high-speed camera barcode scanning, RFID telemetry, and Bluetooth Low Energy (BLE) sensor integration for automated asset tracking across sprawling warehouse facilities. We develop direct API pipelines into core enterprise resource planning platforms including SAP, Microsoft Dynamics 365, Sage Business Cloud, and Oracle NetSuite to facilitate instant stock reconciliations and digital proof-of-delivery sign-offs. Our logistics platforms also integrate directly with national carrier networks such as <a href="https://www.royalmail.com/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Royal Mail</a>, DPD UK, and DHL Parcel UK for automated consignment dispatch. This industrial-grade mobile engineering eradicates paper documentation, minimizes sorting errors, and provides operations executives with live supply chain intelligence.
        </p>

        <h3 id="d2c-retail-and-high-concurrency-mobile-commerce" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          High-Concurrency Mobile E-Commerce and D2C Retail Platforms in the Northern Quarter
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Manchester is globally recognized as the United Kingdom&apos;s capital for direct-to-consumer retail and fast fashion</strong>, driven by agile fashion brands founded throughout the Northern Quarter, Ancoats, and central Manchester. Building mobile shopping applications for this hyper-competitive sector requires systems engineered to withstand sudden traffic surges during flash sales and viral product launches. We develop native iOS and Android retail applications equipped with sub-second catalog navigation, predictive algorithmic product search, and frictionless one-tap checkouts supporting Apple Pay, Google Pay, Klarna, and Clearpay. Our engineering team integrates headless commerce APIs and real-time push notification engines via Firebase Cloud Messaging and Apple Push Notification service to trigger targeted customer re-engagement campaigns. We also incorporate on-device Augmented Reality (AR) try-on capabilities using Apple ARKit and Google ARCore, empowering shoppers to visualize apparel and home furnishings in real time. This frictionless shopping experience dramatically reduces cart abandonment rates while driving sustained customer lifetime value for North West retail brands. To amplify app install velocity and drive organic engagement across social channels, explore our specialized <Link href="/services/social-media-management" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">social media management</Link> campaigns.
        </p>

        <h3 id="fintech-security-open-banking-and-ico-governance" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Bank-Grade FinTech Security, Open Banking, and Wilmslow ICO Data Governance
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">With Spinningfields serving as the financial core of the North West</strong>, Manchester financial institutions and fintech innovators demand the highest tiers of software cryptography and compliance. Our application architecture is constructed to satisfy the Data Protection Act 2018 and UK GDPR, aligning directly with regulatory mandates issued by the <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Information Commissioner&apos;s Office (ICO)</a>, located locally in Wilmslow. We implement zero-trust security parameters, hardware-backed cryptographic key storage in Apple Secure Enclave and Android KeyStore, and multi-factor biometric authentication via Face ID and Android BiometricPrompt. For transactional applications, our engineers build secure integrations with <a href="https://www.openbanking.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Open Banking UK</a> APIs, enabling instant Faster Payments Service (FPS) execution and account verification in compliance with <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Financial Conduct Authority (FCA)</a> operational resilience standards. All data processing routines, database records, and audit logs are hosted within sovereign UK cloud regions such as <a href="https://aws.amazon.com/about-aws/global-infrastructure/regions_az/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">AWS Europe (London) eu-west-2</a> to guarantee strict domestic data residency. This institutional software rigor safeguards sensitive financial assets while establishing unbreakable credibility with institutional investors and risk management committees. To maximize organic visibility for your newly launched platform across targeted financial search queries, discover our strategic <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO services</Link>.
        </p>

        <h3 id="oxford-road-corridor-healthtech-and-nhs-dtac-standards" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          DTAC-Compliant HealthTech and Clinical Research Portals for the Oxford Road Corridor
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">The Oxford Road Corridor and Manchester Science Park form a world-class life sciences and clinical research innovation district</strong>, anchored by the University of Manchester and Manchester University NHS Foundation Trust, the largest NHS trust in the United Kingdom. Creating mobile software for healthcare providers, clinical trial investigators, and patients requires absolute conformity with statutory medical safety frameworks. As a trusted <strong className="font-semibold text-[#de5e18] tracking-tight">app development company in Manchester</strong>, we construct digital health applications adhering strictly to NHS Digital Technology Assessment Criteria (DTAC) and DCB0129 clinical safety risk management guidelines. We develop secure telemedicine portals, remote patient monitoring platforms, and clinical study data collection tools with bidirectional HL7 and FHIR electronic health record (EHR) connectors. Our mobile software integrates seamlessly with medical-grade Bluetooth diagnostic hardware, capturing accurate patient vitals with local cryptographic caching and role-based clinician authorization. This clinical engineering discipline ensures your digital health platform achieves swift adoption across NHS trusts, clinical research networks, and private healthcare providers while safeguarding patient confidentiality at every touchpoint.
        </p>

        <h3 id="native-swift-kotlin-and-react-native-engineering" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Native Swift, Kotlin, and React Native Cross-Platform Engineering Frameworks
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Choosing the right engineering framework</strong> is foundational to the commercial longevity and technical scalability of your mobile product. Our senior software architects conduct thorough technical assessments to determine whether pure native programming or a unified cross-platform architecture best fits your product roadmap and maintenance budget. For mobile applications requiring extensive hardware sensor polling, low-level Bluetooth communication, or custom graphic rendering pipelines, we build pure native software using <a href="https://developer.apple.com/swift/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Swift</a> for iOS and <a href="https://kotlinlang.org/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Kotlin</a> for Android. For fast-growing Manchester startups and enterprises targeting simultaneous multi-platform release cycles, we engineer production-ready applications with <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">React Native</a>. This unified codebase strategy produces fluid 60fps native interface components while reducing initial development cycles and ongoing codebase maintenance overhead by up to forty percent. Whichever stack is selected, our <strong className="font-semibold text-[#de5e18] tracking-tight">Manchester app developers</strong> enforce automated CI/CD deployment pipelines, unit testing suites, and static code security audits before publishing to the <a href="https://developer.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Apple App Store</a> and Google Play Store. To learn more about our architectural standards and software philosophy, read our <Link href="/about" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">about us</Link> profile.
        </p>

        <h3 id="bee-network-transit-ux-ix-manchester-and-statutory-accessibility" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Bee Network Transit Resilience, IX-Manchester Low Latency, and WCAG Accessibility
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Every application deployed for the British commercial market</strong> must fulfill strict legal accessibility standards under the statutory provisions of the Equality Act 2010. We build every digital product to comply fully with <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">WCAG 2.2 Level AA</a> requirements, integrating comprehensive screen reader accessibility trees for Apple VoiceOver and Android TalkBack, dynamic font scaling, tactile haptics, and high-contrast color palettes. In addition to statutory compliance, designing mobile software for Greater Manchester demands deep accommodation for the regional urban transit environment. Commuters using the <a href="https://tfgm.com/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Bee Network</a> integrated tram and bus system regularly encounter intermittent signal connectivity across underground stops and outer suburban corridors. Our <strong className="font-semibold text-[#de5e18] tracking-tight">enterprise app development in Manchester</strong> integrates encrypted local SQLite and Realm caching layers paired with background synchronization queues that persist user actions during offline states and synchronize seamlessly when reconnection occurs. Furthermore, we route backend API traffic through regional edge nodes with direct peering at <a href="https://www.linx.net/locations/ix-manchester/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">IX-Manchester</a> across Equinix data centers, ensuring single-digit millisecond response times for local users. When your business is ready to create a high-performance mobile asset in the North West, <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">contact our Manchester app development team</Link> to arrange a technical discovery consultation.
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
                &quot;Southern Edge Marketing engineered a high-throughput mobile streaming and audience engagement platform for our MediaCityUK production network that surpassed every technical benchmark. Their optimization of low-latency HLS video pipelines and native iOS and Android audio decoders allowed us to handle over 120,000 concurrent viewers during live events with zero buffering or stream degradation.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Declan Gallagher" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Declan Gallagher</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Aether Media Technologies (MediaCityUK, Salford Quays)</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                &quot;We commissioned Southern Edge Marketing to build a ruggedized supply chain mobile application for our freight distribution hubs across Trafford Park. The application&apos;s offline caching, BLE barcode scanning, and direct synchronization with our Sage ERP eliminated paper manifests completely and reduced our driver dispatch turnaround times by 46%.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Fiona MacIntyre" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Fiona MacIntyre</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Apex Freight &amp; Logistics Systems (Trafford Park, Manchester)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FaqAccordion faqs={[
          {
            "question": "What is the typical investment and timeline required for custom mobile app development in Manchester?",
            "answer": "Project investment depends on functional complexity, integrations, and regulatory standards. A focused cross-platform MVP for a Manchester startup or retailer generally ranges between £20,000 and £45,000, while complex enterprise mobility platforms, industrial IoT systems, or regulated FinTech and HealthTech applications requiring NHS DTAC or FCA compliance typically range from £50,000 to £120,000+. Delivery timelines typically span 3 to 6 months from initial discovery to App Store and Google Play deployment."
          },
          {
            "question": "How do your mobile applications handle offline connectivity during transit on Greater Manchester's Bee Network and Metrolink?",
            "answer": "We architect offline-first data persistence using local encrypted SQLite or Realm databases paired with background reconciliation queues. When users travel across Metrolink tram lines or through low-signal areas, user inputs, cached media, and transaction intents are safely queued on-device, automatically synchronizing with the central cloud backend the moment 4G, 5G, or Wi-Fi connectivity is restored."
          },
          {
            "question": "How do you ensure compliance with UK GDPR, Information Commissioner's Office (ICO) mandates, and FCA financial standards?",
            "answer": "We integrate privacy-by-design principles adhering strictly to the Data Protection Act 2018 and UK GDPR, directly aligned with ICO guidance. For FinTech applications in Spinningfields, we implement zero-trust role-based authorization, hardware-backed encryption via Apple Secure Enclave and Android KeyStore, and host all databases exclusively within domestic UK cloud regions like AWS eu-west-2 London or Azure UK South for guaranteed data sovereignty."
          },
          {
            "question": "Should our Manchester business choose native iOS and Android development or a cross-platform framework like React Native?",
            "answer": "The decision hinges on your product requirements and go-to-market priorities. Native development using Swift (iOS) and Kotlin (Android) is recommended for apps requiring low-level hardware sensor integration, intensive background telematics, or custom 120Hz graphic rendering. For startups and commercial enterprises seeking rapid multi-platform release cycles, React Native provides smooth 60fps performance and shared business logic, reducing initial development and ongoing maintenance overhead by up to 40%."
          },
          {
            "question": "Can you engineer DTAC-compliant digital health applications that integrate with Manchester University NHS Foundation Trust systems?",
            "answer": "Yes. We have specialized experience architecting digital health software in compliance with NHS Digital Technology Assessment Criteria (DTAC) and DCB0129 clinical safety frameworks. We build secure RESTful, HL7, and FHIR API connectors linking mobile platforms to NHS electronic medical record systems, remote patient monitoring devices, and Bluetooth Low Energy diagnostic peripherals with full cryptographic audit logging."
          },
          {
            "question": "How do you architect high-concurrency mobile commerce apps for Manchester direct-to-consumer fashion brands?",
            "answer": "We develop decoupled mobile shopping applications backed by scalable cloud microservices, Redis caching, and edge routing via IX-Manchester. This architecture handles sudden concurrency spikes during flash sales and influencer campaigns without latency degradation, featuring instant one-tap checkouts with Apple Pay, Google Pay, Klarna, and Clearpay, as well as real-time push notifications."
          },
          {
            "question": "Will our company retain complete ownership of the mobile application source code and intellectual property?",
            "answer": "Yes. Upon project completion and the settlement of project milestones, Southern Edge Marketing transfers complete, unencumbered ownership of all custom source code, design files, backend scripts, and related intellectual property rights directly to your organization."
          }
        ]} />

      </ServiceLayout>
    </div>
  );
}
