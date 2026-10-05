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
              <strong className="font-semibold text-[#de5e18] tracking-tight">Top-tier mobile apps for Apple devices</strong> need clean code and high performance. iPhone and iPad users expect fast screen response, smooth haptics, and fluid 60fps animations. As an experienced <strong className="font-semibold text-[#de5e18] tracking-tight">iOS mobile app development company</strong>, Southern Edge Marketing builds native apps using Swift and SwiftUI. Our apps are built to get the best performance from Apple hardware.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We use modern Swift features to make apps fast, stable, and secure. Our team uses clean patterns like MVVM and modular Swift Packages. This keeps your code organized, easy to test, and ready for future feature updates.
            </p>

            <h3 id="apple-silicon-ios-18-frameworks" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Apple Silicon &amp; iOS 18 Framework Integration
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">New iOS updates and Apple Silicon chips</strong> bring powerful tools for on-device AI and smart features. We use Apple CoreML and AI frameworks to run machine learning models directly on the device. This delivers instant image recognition and fast voice tools while keeping user data private and secure.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our iOS engineers build features that connect with the full Apple ecosystem. We create Dynamic Island alerts, Lock Screen Live Activities, and Home Screen widgets. We also use ARKit for augmented reality, CoreBluetooth for connected devices, and AVFoundation for smooth video playback. For cross-platform projects, explore our <Link href="/services/app-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">mobile app development services</Link>.
            </p>

            <h3 id="biometric-security-cloud-backends" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Biometric Security &amp; Enterprise Cloud Backends
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Data privacy and security</strong> are core parts of every app we build. We use hardware protection with the Apple Secure Enclave and iOS Keychain. We set up fast Face ID and Touch ID logins, secure user sessions, and data protection for finance, health, and enterprise apps.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We also set up 1-tap Apple Pay checkouts, in-app subscriptions with StoreKit, and Apple Wallet passes. On the data side, we use strong encryption and offline storage with SwiftData. We connect your app to reliable cloud servers using GraphQL and REST APIs for fast response times. To compare native apps with web apps, read our guide on <Link href="/explore-more/benefits-of-pwa-for-mobile-users" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">the benefits of PWAs for mobile users</Link>.
            </p>

            <h3 id="app-store-optimization-launch" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              App Store Optimization &amp; Global Launch Strategy
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Building a great iOS app is only the first step.</strong> Getting downloads on the App Store is what drives real business growth. Our App Store Optimization (ASO) starts during early planning. We research target search terms to optimize your title, subtitle, and keyword fields so users can find your app easily.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We also create clear screenshots, feature banners, and app preview videos that turn page views into installs. Our team manages TestFlight beta testing and prepares privacy manifests to meet Apple review rules. We ensure your app passes Apple review on schedule. To grow your web presence alongside your app, explore our <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO services</Link>.
            </p>

            <h3 id="ios-app-design-quality-assurance" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              End-to-End iOS App Design &amp; Quality Assurance
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Great iOS apps feel natural and easy to use.</strong> Our designers follow Apple Human Interface Guidelines to create clean screens. We use Apple SF fonts, SF Symbols, haptic feedback, and smooth Dark Mode support. We also include accessibility features like VoiceOver and dynamic text sizing so all users can navigate easily.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Quality testing runs throughout our entire development cycle. We run automated tests to check app logic and user flows. Our QA team tests on real devices, from the iPhone SE to the latest iPhone 16 Pro Max and iPad Pro models. We check battery usage, memory health, and speed. For full web platforms, explore our <Link href="/services/web-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">custom web development services</Link>.
            </p>

            <h3 id="ios-maintenance-updates-sla" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Ongoing iOS Version Updates &amp; Maintenance SLA
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Apple updates iOS every year with new tools</strong> and security rules. Without regular updates, apps can crash or fall behind on newer devices. Southern Edge Marketing offers ongoing iOS maintenance and support to keep your app running smoothly.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our team tests early Apple beta releases so your app is ready for every new iOS update on day one. We set up crash tracking, fix bugs quickly, and tune performance each month. Partner with our native iOS team to keep your app fast and secure. <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Contact our iOS development team</Link> today to discuss your project.
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
                    &quot;Southern Edge built our fintech iOS app using Swift and SwiftUI. The smooth screen flow, Face ID security, and 1-tap Apple Pay gave our users a great banking experience. Our App Store rating reached 4.9 stars, and user retention rose by 65%.&quot;
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
                    &quot;For our digital health startup, fast Bluetooth sync with wearables and secure data storage were essential. Southern Edge built a reliable native iOS app that passed Apple review on the first try.&quot;
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
                Expand your digital presence across mobile apps, websites, and search:
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
                  "answer": "Native iOS apps built in Swift offer faster performance, lower battery use, direct access to device hardware, and quick support for new iOS features."
                },
                {
                  "question": "Do you assist with Apple App Store submission and guidelines?",
                  "answer": "Yes. We manage TestFlight testing, prepare metadata, verify privacy compliance, and guide your app through Apple review."
                },
                {
                  "question": "Can our iOS app integrate with Apple Watch, iPads, and Widgets?",
                  "answer": "Yes. We can extend your app to Apple Watch, iPad, Lock Screen widgets, and Live Activities."
                },
                {
                  "question": "How do you guarantee the security of sensitive user data on iOS?",
                  "answer": "We use the Apple Secure Enclave, iOS Keychain, Face ID and Touch ID logins, and encrypted network connections to keep data safe."
                },
                {
                  "question": "What is the typical development timeline for a custom iOS application?",
                  "answer": "A standard iOS MVP or focused app usually takes 8 to 12 weeks. Larger apps with custom AI models or deep enterprise links take 12 to 20 weeks."
                },
                {
                  "question": "How do you ensure compliance with Apple's Privacy Manifests and iOS 18 guidelines?",
                  "answer": "We review all SDKs, document privacy declarations, and follow Apple App Tracking Transparency rules to ensure full compliance."
                }
              ]} />
            </div>

      </ServiceLayout>
    </div>
  );
}
