import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/shopify-agency-dubai',
  },
  title: "Shopify Agency Dubai & UAE (2026)",
  description: "Premier Shopify Plus agency in Dubai & UAE. We engineer high-converting custom Shopify storefronts, bespoke apps, and ERP integrations for ambitious brands.",
  openGraph: {
    title: "Shopify Agency Dubai & UAE (2026) | Southern Edge",
    description: "Premier Shopify Plus agency in Dubai & UAE. We engineer high-converting custom Shopify storefronts, bespoke apps, and ERP integrations for ambitious brands.",
    url: "https://www.southernedgemarketing.com/services/shopify-agency-dubai",
    siteName: "Southern Edge Marketing",
  },
};

const tableOfContents = [
  {
    "id": "enterprise-shopify-development",
    "title": "Enterprise Shopify & Shopify Plus Store Development"
  },
  {
    "id": "arabic-rtl-localization",
    "title": "Arabic RTL Localization & GCC Shopper Experience"
  },
  {
    "id": "gcc-payments-erp-integrations",
    "title": "Seamless GCC Payment Gateways & ERP Integrations"
  },
  {
    "id": "headless-shopify-hydrogen",
    "title": "Headless Shopify Architecture & Next.js Hydrogen"
  },
  {
    "id": "ecommerce-cro-growth",
    "title": "E-Commerce Conversion Rate Optimization & Growth"
  },
  {
    "id": "shopify-plus-migration",
    "title": "End-to-End Migration to Shopify Plus Platform"
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

export default function ShopifyAgencyDubaiPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shopify Web Development Agency in Dubai & UAE",
    "serviceType": "Shopify & Shopify Plus E-Commerce Development",
    "provider": {
      "@type": "Organization",
      "name": "Southern Edge Marketing",
      "url": "https://www.southernedgemarketing.com"
    },
    "areaServed": [
      { "@type": "City", "name": "Dubai" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "AdministrativeArea", "name": "GCC" }
    ],
    "description": "Premier Shopify Plus agency in Dubai & UAE. We engineer high-converting custom Shopify storefronts, bespoke apps, and ERP integrations for ambitious brands.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    }
  };

  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceHero 
        title={"Shopify Web Development Agency in Dubai & UAE"}
        tagline={"High-converting storefronts engineered for the Middle East."}
        breadcrumbTitle={"Shopify Agency Dubai"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            {/* Quick Metrics & Trust Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">100+</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Stores Built</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Enterprise & Brands</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">Official</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Shopify Plus</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Hydrogen Certified</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">&lt; 1.0s</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Checkout Speed</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">GCC Mobile Tuned</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">4.2x</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">AOV Multiplier</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Tamara & Tabby</p>
              </div>
            </div>

            <h2 id="enterprise-shopify-development" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Enterprise Shopify & Shopify Plus Store Development
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">The United Arab Emirates is the premier e-commerce capital</strong> of the Middle East, propelled by the Dubai Economic Agenda D33 and dedicated logistics hubs like Dubai CommerCity and Dubai Internet City. In a market where high-net-worth consumers in Downtown Dubai, Business Bay, and Dubai Marina demand effortless digital shopping experiences, standard off-the-shelf templates simply do not suffice. As a leading <strong className="font-semibold text-[#de5e18] tracking-tight">Shopify agency in Dubai</strong>, Southern Edge Marketing engineers custom Shopify and Shopify Plus storefronts tailored specifically for high-growth direct-to-consumer (D2C) and omnichannel enterprise brands. We build bespoke Liquid themes and modular architectures from the ground up, ensuring your digital storefront reflects the luxury, sophistication, and speed that GCC consumers expect.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our engineering team unlocks the full power of the Shopify Plus ecosystem. We configure <strong className="font-semibold text-[#de5e18] tracking-tight">Shopify Flow</strong> to automate complex business logic, such as instant VIP customer tiering, automated fraud risk tagging, and inventory re-order alerts. Using <strong className="font-semibold text-[#de5e18] tracking-tight">Shopify Launchpad</strong>, we enable seamless scheduling for high-velocity flash sales during major regional shopping events like White Friday, the Dubai Shopping Festival, and Ramadan. Furthermore, with modern Checkout Extensibility, we integrate custom delivery time slot selectors, emirate-specific address fields, and personalized post-purchase upsells directly within a secure, high-converting checkout pipeline.
            </p>

            <h2 id="arabic-rtl-localization" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Arabic RTL Localization & GCC Shopper Experience
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">True localization goes far beyond direct translation.</strong> In the UAE, Saudi Arabia, and across the broader GCC, digital shoppers expect an intuitive, culturally authentic Right-to-Left (RTL) browsing experience. Many global themes suffer from broken layouts, mirrored icons that lose their contextual meaning, and clumsy Arabic typography when translated automatically. Our developers craft true bilingual Shopify storefronts where every visual element, navigation drawer, carousel slider, and checkout field is meticulously mirrored for native Arabic speakers using modern typography stacks like Cairo, Readex Pro, and Tajawal.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We implement comprehensive multi-currency switching across AED, SAR, QAR, KWD, BHD, and OMR with automated Geo-IP detection, dynamic rounding rules, and full compliance with UAE Federal Tax Authority (FTA) 5% VAT invoice regulations. With more than 85% of regional e-commerce transactions originating on mobile devices, our <strong className="font-semibold text-[#de5e18] tracking-tight">mobile-first UX architecture</strong> places key navigation elements and instant WhatsApp checkout assistance directly within thumb reach, turning local traffic into loyal repeat buyers. To complement your regional online store, explore our specialized <Link href="/services/web-development/dubai" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">web development company in Dubai</Link> services for multi-platform digital solutions.
            </p>

            <h2 id="gcc-payments-erp-integrations" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Seamless GCC Payment Gateways & ERP Integrations
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Payment preferences in the Middle East</strong> require specialized regional integrations to eliminate checkout friction and maximize average order value (AOV). We integrate leading regional Buy Now, Pay Later (BNPL) providers including <strong className="font-semibold text-[#de5e18] tracking-tight">Tabby and Tamara</strong>, which have been proven to lift conversion rates by up to 35% and increase cart sizes across the GCC. Additionally, we connect your Shopify store to trusted payment gateways such as Network International (N-Genius), Checkout.com, Telr, PayTabs, and Amazon Payment Services (APS), alongside frictionless native 1-click Apple Pay and Google Pay checkouts.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              For brands managing high volumes of orders, backend automation is essential. We build custom private Shopify apps and enterprise API middleware connecting your store directly with regional ERPs and warehouse management systems such as <strong className="font-semibold text-[#de5e18] tracking-tight">Microsoft Dynamics 365, SAP, Oracle NetSuite, and Odoo</strong>. We also automate 3PL logistics and last-mile courier fulfillment with providers like Aramex, Shipa, Fetchr, and DHL Express UAE. This eliminates manual data entry, prevents inventory stockouts, and delivers automated real-time SMS and WhatsApp tracking notifications directly to your customers.
            </p>

            <h2 id="headless-shopify-hydrogen" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Headless Shopify Architecture & Next.js Hydrogen
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">For forward-thinking brands that demand sub-second load speeds</strong> and complete design freedom, headless commerce represents the ultimate technological advantage. By decoupling the frontend user interface from the Shopify backend engine using <a href="https://shopify.dev/docs/custom-storefronts/hydrogen" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Shopify Hydrogen</a> and <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Next.js</a>, we eliminate the performance bottlenecks associated with legacy theme architectures and excess third-party JavaScript apps.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our headless Shopify architectures communicate with the Shopify Storefront GraphQL API to deliver instant page transitions, custom 3D/AR interactive product viewers, immersive video commerce lookbooks, and personalized subscription portals. Deployed on global edge cloud networks with endpoints across the Middle East, our headless builds guarantee Time to First Byte (TTFB) under 50ms and perfect 100/100 Google Core Web Vitals scores. For businesses interested in native app-like mobile browsing, read our comprehensive guide on <Link href="/explore-more/benefits-of-pwa-for-mobile-users" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">the benefits of Progressive Web Apps (PWAs)</Link>.
            </p>

            <h2 id="ecommerce-cro-growth" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              E-Commerce Conversion Rate Optimization & Growth
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Driving qualified traffic to your store is only half the battle;</strong> converting high-intent visitors into repeat buyers is where sustained profitability is forged. Our e-commerce growth team implements continuous, data-driven Conversion Rate Optimization (CRO) frameworks engineered specifically for Middle Eastern consumer psychology. Through rigorous qualitative user heatmapping, session replay analysis, and continuous multivariate A/B testing, we identify and dismantle checkout friction points.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We implement high-impact conversion mechanics including sticky smart add-to-cart bars, tiered bundle volume discounts, dynamic free shipping progress bars customized for all seven UAE emirates, and automated abandoned cart recovery sequences via SMS and email. Furthermore, to fuel your customer acquisition pipeline with high-ranking organic traffic, our team integrates advanced <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO services</Link> that position your product collections at the very top of Google search results for competitive commercial keywords across Dubai and the GCC.
            </p>

            <h2 id="shopify-plus-migration" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              End-to-End Migration to Shopify Plus Platform
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Outgrowing legacy e-commerce platforms</strong> like Magento (Adobe Commerce), WooCommerce, Salesforce Commerce Cloud, or custom PHP monoliths is a natural milestone for scaling enterprises. However, executing a platform migration without losing organic search rankings, historic customer records, or active revenue streams requires surgical engineering precision. Southern Edge Marketing provides zero-downtime migration protocols that safeguard your entire digital business throughout the transition.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We execute comprehensive data ETL (Extract, Transform, Load) pipelines to safely migrate product catalogs, high-resolution media assets, complex variant structures, historic order histories, customer accounts, and custom discount rules. Crucially, our SEO engineers create automated 1-to-1 301 URL redirect maps and schema parity audits, preserving 100% of your hard-earned organic domain equity and search rankings. Ready to modernize your online retail store? <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Contact our Shopify developers today</Link> to schedule your discovery session.
            </p>

            {/* Client Reviews Section */}
            <div className="w-full bg-white border border-black/10 rounded-2xl p-8 shadow-sm text-left mt-10 mb-6">
              <h2 id="reviews" className="text-[22px] font-bold text-black mb-6 uppercase tracking-wide flex items-center gap-2 scroll-mt-28">
                <svg className="w-6 h-6 text-[#de5e18]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Client Reviews
              </h2>
              <div className="flex flex-col gap-8">
                <div className="border-b border-black/5 pb-6">
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    "Southern Edge transformed our luxury fragrance business in Dubai Mall. They built a bilingual Arabic and English Shopify Plus storefront integrated seamlessly with Tabby, Tamara, and our SAP ERP in JAFZA. Our mobile conversion rate jumped by 58% within 60 days of launch, and the RTL Arabic typography is flawless."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="Tariq Al-Mansoor" width={100} height={100} className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Tariq Al-Mansoor</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Velvet &amp; Oud Parfumerie, Downtown Dubai</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    "Migrating from a legacy Magento 2 setup to Shopify Plus seemed daunting with over 40,000 SKUs and customer records. The Southern Edge team executed the entire migration with zero downtime, flawless 301 redirects that preserved all our Google rankings, and an automated Aramex shipping integration that saves our warehouse team hours every day."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Kareem El-Masri" width={100} height={100} className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Kareem El-Masri</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Noor &amp; Co. Luxury Apparel, Dubai Design District</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Digital Services Cluster */}
            <div className="w-full bg-[#ede0d4]/80 border border-black/10 rounded-2xl p-6 my-8">
              <h3 className="text-[18px] font-bold text-[#432d1c] mb-3">Explore Related Digital Solutions</h3>
              <p className="text-[15px] text-[#432d1c]/80 leading-relaxed mb-4">
                Scale your brand across the Middle East with our unified growth services:
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Link href="/services/luxury-shopify-agency-uae" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Luxury Shopify UAE &rarr;
                </Link>
                <Link href="/services/web-development" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Custom Web Development &rarr;
                </Link>
                <Link href="/services/web-development/dubai" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Web Development Dubai &rarr;
                </Link>
                <Link href="/services/seo" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  E-Commerce SEO Services &rarr;
                </Link>
                <Link href="/services/app-development" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Mobile App Development &rarr;
                </Link>
              </div>
            </div>

            <div className="w-full clear-both pt-8 mt-8 border-t border-black/10">
              <FaqAccordion faqs={[
                {
                  "question": "Why should we choose a specialized Dubai Shopify agency?",
                  "answer": "Operating in the UAE requires bilingual Arabic (RTL) capabilities, deep integration with regional payment gateways like Tabby and Tamara, and optimization for high-AOV GCC mobile shoppers."
                },
                {
                  "question": "Can you migrate our existing WooCommerce or Magento store to Shopify?",
                  "answer": "Yes, we handle complete, zero-downtime migrations including customer accounts, order history, product catalogs, and 301 SEO redirects to preserve your organic rankings."
                },
                {
                  "question": "Do you support Arabic and English bilingual Shopify setups?",
                  "answer": "Absolutely. We build true multi-language storefronts with proper hreflang tags, seamless RTL switching, and localized currency options."
                },
                {
                  "question": "What is the average timeline for launching a custom Shopify Plus store?",
                  "answer": "Bespoke theme builds typically take 4 to 8 weeks, while complex headless platforms with custom ERP integrations take 8 to 12 weeks."
                },
                {
                  "question": "Do you provide post-launch Shopify maintenance and CRO support?",
                  "answer": "Yes, we provide continuous A/B testing, speed optimizations, app updates, and monthly conversion enhancements."
                }
              ]} />
            </div>

      </ServiceLayout>
    </div>
  );
}
