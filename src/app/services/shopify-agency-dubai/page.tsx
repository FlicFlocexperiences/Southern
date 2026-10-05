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
  description: "Premier Shopify Plus agency in Dubai & UAE. We build high-converting custom Shopify stores, apps, and ERP integrations for top brands.",
  openGraph: {
    title: "Shopify Agency Dubai & UAE (2026) | Southern Edge",
    description: "Premier Shopify Plus agency in Dubai & UAE. We build high-converting custom Shopify stores, apps, and ERP integrations for top brands.",
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
    "description": "Premier Shopify Plus agency in Dubai & UAE. We build custom high-converting Shopify stores, bespoke apps, and ERP integrations for top brands.",
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
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Enterprise &amp; Brands</p>
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
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Tamara &amp; Tabby</p>
              </div>
            </div>

            <h2 id="enterprise-shopify-development" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Enterprise Shopify &amp; Shopify Plus Store Development
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">The UAE is the top online shopping hub</strong> in the Middle East. Growth is backed by the Dubai Economic Agenda D33. Key logistics hubs like Dubai CommerCity and Dubai Internet City speed up shipping. Shoppers in Downtown Dubai, Business Bay, and Dubai Marina expect fast, smooth online stores. Basic templates cannot deliver this level of quality. As a leading <strong className="font-semibold text-[#de5e18] tracking-tight">Shopify agency in Dubai</strong>, Southern Edge Marketing builds custom Shopify and Shopify Plus stores. We help growing direct-to-consumer (D2C) and retail brands scale online. We build custom Liquid themes from scratch. Every store delivers the speed, style, and reliability that GCC shoppers expect.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our team helps you get the most from Shopify Plus. We use <strong className="font-semibold text-[#de5e18] tracking-tight">Shopify Flow</strong> to automate daily tasks. This includes VIP customer tiers, fraud checks, and low-stock alerts. During big sales like White Friday, the Dubai Shopping Festival, and Ramadan, store traffic surges. We set up <strong className="font-semibold text-[#de5e18] tracking-tight">Shopify Launchpad</strong> to schedule flash sales and product drops with ease. We also use Checkout Extensibility to upgrade your checkout. You can offer custom delivery slots, UAE emirate address fields, and upsells that boost cart value.
            </p>

            <h3 id="arabic-rtl-localization" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Arabic RTL Localization &amp; GCC Shopper Experience
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">True localization goes beyond simple word translation.</strong> Online shoppers in the UAE, Saudi Arabia, and the wider GCC expect a smooth Right-to-Left (RTL) layout. Standard themes often break when translated into Arabic. Icons can flip the wrong way, and layouts often look messy. Our team builds true bilingual Shopify stores. We mirror every layout part, menu, slider, and checkout field for native Arabic users. We also use clean Arabic fonts like Cairo, Readex Pro, and Tajawal for easy reading.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We set up multi-currency pricing for AED, SAR, QAR, KWD, BHD, and OMR. The store detects visitor location, applies local rounding, and follows UAE FTA 5% VAT tax rules. Over 85% of regional purchases happen on phones. Our <strong className="font-semibold text-[#de5e18] tracking-tight">mobile-first UX design</strong> keeps menus, buttons, and WhatsApp chat support within easy thumb reach. This helps turn local visitors into regular buyers. For wider digital needs, explore our <Link href="/services/web-development/dubai" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">web development company in Dubai</Link> services.
            </p>

            <h3 id="gcc-payments-erp-integrations" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Seamless GCC Payment Gateways &amp; ERP Integrations
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Middle East shoppers have distinct payment preferences.</strong> Offering the right payment options removes friction at checkout and lifts average order value (AOV). We integrate top Buy Now, Pay Later (BNPL) options like <strong className="font-semibold text-[#de5e18] tracking-tight">Tabby and Tamara</strong>. These options can raise sales by up to 35% across the GCC. We also connect your store with trusted payment gateways. These include Checkout.com, Network International (N-Genius), Telr, PayTabs, and Amazon Payment Services (APS). We also enable fast 1-click payments with Apple Pay and Google Pay.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Growing stores need reliable backend tools. We build custom Shopify apps and API links that connect your store directly to your ERP. We support systems like <strong className="font-semibold text-[#de5e18] tracking-tight">Microsoft Dynamics 365, SAP, Oracle NetSuite, and Odoo</strong>. We also connect shipping with local couriers like Aramex, Shipa, Fetchr, and DHL Express UAE. This stops manual order entry, prevents out-of-stock orders, and sends live tracking updates to customers via SMS and WhatsApp.
            </p>

            <h3 id="headless-shopify-hydrogen" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Headless Shopify Architecture &amp; Next.js Hydrogen
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Brands that want ultra-fast load speeds</strong> and custom layouts often choose headless commerce. We separate the front storefront from the backend using <strong className="font-semibold text-[#de5e18] tracking-tight">Shopify Hydrogen</strong> and <strong className="font-semibold text-[#de5e18] tracking-tight">Next.js</strong>. This removes extra code and allows pages to load in under a second.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our headless stores connect to the Shopify Storefront API. This allows instant page clicks, 3D product previews, video lookbooks, and custom accounts. We host storefronts on cloud edge networks near Middle East users. This delivers fast server response times and strong Core Web Vitals scores. To learn more about app-like web experiences, read our guide on <Link href="/explore-more/benefits-of-pwa-for-mobile-users" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">the benefits of Progressive Web Apps (PWAs)</Link>.
            </p>

            <h3 id="ecommerce-cro-growth" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              E-Commerce Conversion Rate Optimization &amp; Growth
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Bringing visitors to your store is only the first step.</strong> Turning those visitors into paying buyers is what drives profit. Our team uses data-backed conversion rate optimization methods tailored for Middle East shoppers. We study user heatmaps, review buyer paths, and run A/B tests to find and fix drop-off points.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We add proven sales features to your store. These include sticky add-to-cart bars, bundle discounts, free shipping bars for the UAE emirates, and automated cart recovery via SMS and email. To drive steady organic buyers, we also provide advanced <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO services</Link>. We help your product pages rank high on Google for top search terms across Dubai and the GCC.
            </p>

            <h3 id="shopify-plus-migration" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              End-to-End Migration to Shopify Plus Platform
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Scaling brands often outgrow older platforms</strong> like Magento, WooCommerce, or custom PHP systems. Moving to Shopify Plus gives your team greater speed and lower upkeep costs. Our migration process protects your sales, customer data, and search rankings with zero downtime.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We safely transfer your product catalog, media assets, order history, customer accounts, and discount rules. Our team tests every data point to ensure nothing gets lost. Our SEO specialists map exact 301 redirects for every old URL. This preserves your organic rankings and traffic. Ready to upgrade your store? <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Contact our Shopify developers today</Link> to plan your project.
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
                    &quot;Southern Edge transformed our fragrance brand in Dubai Mall. They built a bilingual Arabic and English Shopify Plus store with Tabby, Tamara, and our SAP ERP in JAFZA. Our mobile sales rate rose by 58% in 60 days, and the Arabic text is clean and easy to read.&quot;
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
                    &quot;Migrating 40,000 products from Magento to Shopify Plus seemed difficult. Southern Edge managed the move with zero downtime. Their 301 redirects preserved all our Google rankings, and the Aramex shipping links save our warehouse team hours every day.&quot;
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
                Grow your brand across the Middle East with our full suite of digital services:
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
              <FaqAccordion headingTag="h3" faqs={[
                {
                  "question": "Why should we choose a specialized Dubai Shopify agency?",
                  "answer": "Selling in the UAE requires bilingual Arabic (RTL) design, local payment options like Tabby and Tamara, and fast mobile experiences for GCC shoppers."
                },
                {
                  "question": "Can you migrate our existing WooCommerce or Magento store to Shopify?",
                  "answer": "Yes. We handle full migrations with zero downtime. We move your customer accounts, order history, and products while using 301 redirects to protect your SEO rankings."
                },
                {
                  "question": "Do you support Arabic and English bilingual Shopify setups?",
                  "answer": "Yes. We build bilingual stores with clean RTL layout switching, correct language tags, and local currency display for all GCC countries."
                },
                {
                  "question": "What is the average timeline for launching a custom Shopify Plus store?",
                  "answer": "Custom theme builds usually take 4 to 8 weeks. Larger headless builds with custom ERP links take about 8 to 12 weeks."
                },
                {
                  "question": "Do you provide post-launch Shopify maintenance and CRO support?",
                  "answer": "Yes. We provide ongoing support, speed checks, app updates, and monthly conversion testing to help your store grow."
                }
              ]} />
            </div>

      </ServiceLayout>
    </div>
  );
}
