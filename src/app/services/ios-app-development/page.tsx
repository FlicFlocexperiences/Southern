import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/ios-app-development',
  },
  title: "Custom iOS App Development Company",
  description: "Leading iOS mobile app development company. We build native Swift & SwiftUI applications engineered for fluid 60fps performance and enterprise security.",
  openGraph: {
    title: "Custom iOS App Development Company | Southern Edge",
    description: "Leading iOS mobile app development company. We build native Swift & SwiftUI applications engineered for fluid 60fps performance and enterprise security.",
    url: "https://www.southernedgemarketing.com/services/ios-app-development",
    siteName: "Southern Edge Marketing",
  },
};

const tableOfContents = [
  {
    "id": "native-swift-swiftui-architecture",
    "title": "Native Swift & SwiftUI iOS App Architecture"
  },
  {
    "id": "apple-silicon-ios-18-frameworks",
    "title": "Apple Silicon & iOS 18 Framework Integration"
  },
  {
    "id": "biometric-security-cloud-backends",
    "title": "Biometric Security & Enterprise Cloud Backends"
  },
  {
    "id": "app-store-optimization-launch",
    "title": "App Store Optimization & Global Launch Strategy"
  },
  {
    "id": "ios-app-design-quality-assurance",
    "title": "End-to-End iOS App Design & Quality Assurance"
  },
  {
    "id": "ios-maintenance-updates-sla",
    "title": "Ongoing iOS Version Updates & Maintenance SLA"
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

export default function IosAppDevelopmentPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom iOS Mobile App Development",
    "serviceType": "Native iOS Mobile App Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Southern Edge Marketing",
      "url": "https://www.southernedgemarketing.com"
    },
    "description": "Leading iOS mobile app development company. We build native Swift & SwiftUI applications engineered for fluid 60fps performance and enterprise security.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    }
  };

  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceHero 
        title={"Native iOS Mobile App Development Company"}
        tagline={"Fluid 60fps native iOS experiences engineered in Swift."}
        breadcrumbTitle={"iOS App Development"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            {/* Quick Metrics & Trust Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">60 FPS</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Fluid Native</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Apple Ecosystem Performance</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">100%</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Approval Rate</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">App Store Review Compliance</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">iOS 18 Ready</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Frameworks</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">CoreML, ARKit &amp; Widgets</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">Airtight</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Security</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">FaceID &amp; Secure Enclave</p>
              </div>
            </div>

            <h2 id="native-swift-swiftui-architecture" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Native Swift &amp; SwiftUI iOS App Architecture
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Building mission-critical mobile applications for the Apple ecosystem</strong> demands an architectural standard that cross-platform hybrid frameworks simply cannot replicate. Affluent iPhone and iPad users expect instantaneous touch response, zero stutter, seamless haptic feedback, and fluid 60fps to 120fps ProMotion animations. As a premier <strong className="font-semibold text-[#de5e18] tracking-tight">iOS mobile app development company</strong>, Southern Edge Marketing engineers pure native applications using modern Swift and declarative SwiftUI architectures that extract the full computing potential of Apple hardware.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We utilize modern Swift 6 strict concurrency models, actors, and structured concurrency (`async/await`) to eliminate data races and prevent memory bottlenecks before they ever reach production. Our software engineers build scalable Clean Architecture, MVVM-C (Model-View-ViewModel-Coordinator), and TCA (The Composable Architecture) design patterns. By breaking complex business logic into decoupled, testable Swift Packages (SPM), we ensure your codebase remains maintainable, modular, and ready for rapid enterprise feature expansion.
            </p>

            <h3 id="apple-silicon-ios-18-frameworks" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Apple Silicon &amp; iOS 18 Framework Integration
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">The release of iOS 18 and Apple Silicon Bionic chips</strong> has unlocked unprecedented capabilities in on-device artificial intelligence, spatial computing, and contextual operating system integrations. We leverage CoreML and Apple Intelligence frameworks to execute complex machine learning models directly on the 16-core Apple Neural Engine. This enables sub-millisecond on-device computer vision, real-time natural language processing, and personalized user experiences without transmitting private user data to third-party servers.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our iOS development engineers build rich ecosystem experiences that extend your app beyond the home screen. We build interactive Dynamic Island alerts, lock screen Live Activities via ActivityKit, and multi-size Home Screen widgets using WidgetKit. Furthermore, we harness ARKit and RealityKit for augmented reality applications, CoreBluetooth for low-latency IoT and medical wearable synchronization, and AVFoundation for high-bitrate audio/video processing. For multi-platform mobile architectures, explore our broader <Link href="/services/app-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">mobile app development services</Link>.
            </p>

            <h3 id="biometric-security-cloud-backends" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Biometric Security &amp; Enterprise Cloud Backends
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Enterprise compliance, financial security, and user data privacy</strong> form the bedrock of every iOS application we ship. We integrate hardware-level protection utilizing the Apple Secure Enclave and iOS Keychain Services. Using the LocalAuthentication framework, we implement frictionless Face ID and Touch ID biometric authentication, cryptographic key generation, and secure session management for enterprise FinTech, healthcare, and high-security SaaS platforms.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We configure frictionless 1-tap Apple Pay checkouts, in-app subscriptions via StoreKit 2, and Apple Wallet pass provisioning. On the networking layer, we implement TLS 1.3 certificate pinning, end-to-end payload encryption, and automated offline data persistence using SwiftData and Core Data. Our mobile engineers connect your iOS frontends to high-throughput cloud backends engineered with GraphQL, gRPC, and RESTful microservices, ensuring near-zero latency and 99.99% uptime. If you are comparing web vs native application capabilities, read our breakdown on <Link href="/explore-more/benefits-of-pwa-for-mobile-users" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">the benefits of PWAs for mobile users</Link>.
            </p>

            <h3 id="app-store-optimization-launch" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              App Store Optimization &amp; Global Launch Strategy
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Engineering a world-class iOS application is only half the battle;</strong> achieving top App Store visibility and driving organic downloads is what creates compounding market dominance. Our comprehensive App Store Optimization (ASO) and launch strategy begins during the architecture phase. We conduct rigorous keyword research to optimize your App Title, Subtitle, and App Store Keyword fields, positioning your application to capture high-intent organic search volume across global markets.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We design high-converting visual assets, including Custom Product Pages (CPPs), localized in-app event banners, and cinema-grade App Preview videos that maximize conversion rates on the App Store product page. Our release engineers manage TestFlight beta cohorts, prepare Apple Privacy Manifest declarations, ensure full compliance with App Tracking Transparency (ATT), and guide your build through Apple's strict App Review Guidelines (Section 2.1 to 5.6) with a 100% first-pass approval record. To supercharge your digital acquisition funnel, integrate our targeted <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO services</Link>.
            </p>

            <h3 id="ios-app-design-quality-assurance" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              End-to-End iOS App Design &amp; Quality Assurance
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Exceptional iOS experiences feel intuitive, tactile, and natural.</strong> Our product designers adhere strictly to Apple’s Human Interface Guidelines (HIG), crafting pixel-perfect interfaces that integrate SF Pro typography, SF Symbols, custom haptic feedback patterns via CoreHaptics, and adaptive Dark Mode / Light Mode theming. We ensure full accessibility compliance (WCAG 2.1 AAA and ADA) through VoiceOver support, Dynamic Type text scaling, and high-contrast UI modes.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Quality assurance is woven directly into our continuous integration pipeline. We implement comprehensive automated test suites using XCTest for unit tests and XCUITest for end-to-end user journey validation. Our QA engineers utilize Xcode Instruments—including Leaks, Allocations, Time Profiler, and Energy Diagnostics—to verify zero memory leaks, minimal battery drain, and thermal stability across the full device spectrum, from iPhone SE to the latest flagship iPhone 16 Pro Max and iPad Pro models. For complete corporate web platforms, explore our <Link href="/services/web-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">custom web development services</Link>.
            </p>

            <h3 id="ios-maintenance-updates-sla" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Ongoing iOS Version Updates &amp; Maintenance SLA
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Apple continuously iterates its operating system,</strong> releasing major annual iOS versions and regular point releases that introduce new APIs, security requirements, and hardware form factors. Operating without an active iOS maintenance and modernization strategy risks sudden crashes, SDK deprecations, and degraded App Store ratings. Southern Edge Marketing provides enterprise-grade iOS Maintenance Service Level Agreements (SLAs) that safeguard your application's long-term health.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our engineering team conducts proactive beta testing during Apple’s WWDC summer developer cycle, ensuring your app supports the newest iOS version on day one of its public release. We implement 24/7 crash monitoring with Sentry and Apple MetricKit, rapid-response bug fix deployments, third-party API deprecation refactoring, and monthly performance tuning. Partner with our native iOS specialists to build a future-proof mobile asset. <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Contact our iOS development team</Link> today for a comprehensive technical consultation.
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
                    &quot;Southern Edge built our fintech iOS app using pure Swift and SwiftUI. The 60fps buttery smooth performance, FaceID biometric security, and instant Apple Pay checkout gave our users a tier-1 banking experience. Our App Store rating jumped to 4.9 stars and user retention increased by 65%.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="Marcus Sterling" width={100} height={100} className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Marcus Sterling</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">VP of Product, Apex Financial Technologies</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    &quot;As a digital healthcare startup, zero-latency Bluetooth synchronization with medical wearables and HIPAA-compliant Keychain encryption were critical. Southern Edge delivered a flawless native iOS app that passed Apple review on the very first submission.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Dr. Sarah Thornton" width={100} height={100} className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Dr. Sarah Thornton</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Chief Innovation Officer, BioPulse Health</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Digital Services Cluster */}
            <div className="w-full bg-[#ede0d4]/80 border border-black/10 rounded-2xl p-6 my-8">
              <h3 className="text-[18px] font-bold text-[#432d1c] mb-3">Explore Related Digital Solutions</h3>
              <p className="text-[15px] text-[#432d1c]/80 leading-relaxed mb-4">
                Scale your digital ecosystem across mobile, web, and search channels:
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Link href="/services/app-development" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Mobile App Development &rarr;
                </Link>
                <Link href="/services/web-development" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Web Development Services &rarr;
                </Link>
                <Link href="/services/seo" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  App Store &amp; Search SEO &rarr;
                </Link>
                <Link href="/services/branding" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  UI/UX &amp; Brand Strategy &rarr;
                </Link>
                <Link href="/services/social-media-management" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Social Media Marketing &rarr;
                </Link>
              </div>
            </div>

            <div className="w-full clear-both pt-8 mt-8 border-t border-black/10">
              <FaqAccordion headingTag="h3" faqs={[
                {
                  "question": "Why should we choose native iOS development over cross-platform?",
                  "answer": "Native iOS development in Swift and SwiftUI provides superior 60fps rendering, lowest battery consumption, instant hardware access, and immediate adoption of new iOS features."
                },
                {
                  "question": "Do you assist with Apple App Store submission and guidelines?",
                  "answer": "Yes, we handle metadata preparation, test flight distributions, privacy manifest compliance, and end-to-end App Store approval management."
                },
                {
                  "question": "Can our iOS app integrate with Apple Watch, iPads, and Widgets?",
                  "answer": "Absolutely. We build unified Apple ecosystem experiences supporting watchOS, iPadOS, lock screen widgets, and Live Activities."
                },
                {
                  "question": "How do you guarantee the security of sensitive user data on iOS?",
                  "answer": "We leverage Apple Secure Enclave, iOS Keychain Services, biometric authentication (FaceID/TouchID), and encrypted network transports."
                },
                {
                  "question": "What is the typical development timeline for a custom iOS application?",
                  "answer": "A custom iOS MVP or focused enterprise application typically takes 8 to 12 weeks, while complex platforms featuring AI/CoreML, ARKit, or multi-tier enterprise integrations range from 12 to 20 weeks."
                },
                {
                  "question": "How do you ensure compliance with Apple's Privacy Manifests and iOS 18 guidelines?",
                  "answer": "We conduct comprehensive privacy audits, map third-party SDK dependencies to Apple-approved privacy declarations, and adhere strictly to App Tracking Transparency (ATT) rules."
                }
              ]} />
            </div>

      </ServiceLayout>
    </div>
  );
}
