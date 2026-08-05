import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/web-development/surat',
  },
  title: "Premium Web Development Company in Surat",
  description: "Partner with the leading Web Development Company in Surat. We engineer secure B2B portals, high-performance D2C e-commerce, and enterprise web applications.",
};

const tableOfContents = [
  {
    id: "digital-transformation-surat",
    title: "Digital Transformation in Surat's Industrial Powerhouse"
  },
  {
    id: "diamond-industry-portals",
    title: "Custom B2B Portals for Diamond Exporters"
  },
  {
    id: "textile-ecommerce-solutions",
    title: "Enterprise E-Commerce for the Silk & Textile Sector"
  },
  {
    id: "headless-nextjs-startups",
    title: "Headless Next.js Architecture for Startups"
  },
  {
    id: "logistics-api-integrations",
    title: "Robust API Integrations for Hazira Port Logistics"
  },
  {
    id: "mobile-first-optimization",
    title: "Mobile-First Optimizations for GIDC Belts"
  },
  {
    id: "localized-ux-ui-design",
    title: "Localized UX/UI Design and Gujarati Values"
  },
  {
    id: "southern-edge-advantage",
    title: "The Southern Edge Marketing Advantage"
  },
  {
    id: "reviews",
    title: "Reviews"
  },
  {
    id: "faq",
    title: "FAQ"
  }
];

export default function SuratWebdevelopmentPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title="Next-Gen Web Development in Surat"
        tagline="Engineering high-performance B2B portals, custom e-commerce, and enterprise web solutions for Surat's premier trading houses."
        breadcrumbTitle="Web Development in Surat"
      />
      
      <ServiceLayout sections={tableOfContents}>
        <h3 id="digital-transformation-surat" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Digital Transformation in Surat's Industrial Powerhouse
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Surat, widely recognized</strong> as one of the fastest-growing commercial capitals in India, is undergoing a profound digital transformation that is redefining its traditional business operations. Known globally for its dominant position in diamond cutting and textile manufacturing, the city is transitioning from legacy offline systems to high-performance, enterprise-grade digital infrastructures. For local firms to capture international market share, simple template-based websites are no longer sufficient; they require bespoke web applications that project trust and operational excellence. As a leading <strong className="font-semibold text-[#de5e18]">Web Development Company in Surat</strong>, Southern Edge Marketing engineers custom web solutions that serve as powerful growth engines. We bridge the gap between traditional trading wisdom and cutting-edge software engineering, helping firms in Vesu, Varachha, and Ichchhapor establish global digital authority. By deploying lightning-fast, secure, and search-optimized web platforms, we empower Surat’s business community to streamline their local operations while scaling globally. Our development methodology is designed to translate the city’s entrepreneurial energy into high-converting web applications that produce compounding business value.
        </p>

        <h3 id="diamond-industry-portals" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Custom B2B Portals for Diamond Exporters
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">With Surat handling over 90%</strong> of the world's diamond cutting and polishing, local diamond trading houses require highly specialized B2B web applications to manage their global transactions. We build bespoke B2B trading portals that enable diamond merchants to showcase live inventory, integrate real-time API feeds from RapNet or IDEX, and secure large-volume international transactions. Our development team implements advanced search and filtering systems that allow global buyers to filter inventory by carat, clarity, cut, and color with sub-millisecond query execution times. Understanding the security demands of the gemstone trade, we integrate multi-factor authentication, end-to-end encrypted messaging, and role-based access controls for brokers and buyers. These secure portals are designed to operate flawlessly within the newly developed Surat Diamond Bourse (SDB) in DREAM City, connecting local merchants directly to global markets. By automating inventory syncs and order tracking, our custom web applications reduce operational friction and eliminate the need for manual spreadsheets. This level of technical sophistication ensures that Surat's diamond exporters can maintain their competitive edge in a rapidly digitizing global market.
        </p>

        <h3 id="textile-ecommerce-solutions" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Enterprise E-Commerce for the Silk & Textile Sector
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">As the Silk City of India</strong>, Surat’s massive textile markets along Ring Road and the Millennium Market process millions of transactions daily, requiring websites that can handle high volume and complex logistics. We develop custom e-commerce platforms and wholesale B2B catalogs tailored specifically to the unique workflows of Surat’s textile manufacturers. Our platforms are built to handle custom pricing tiers, bulk-order discount structures, dynamic catalog configurations, and localized tax rules like GST. We integrate these online storefronts with enterprise resource planning (ERP) systems and warehouse management systems to automate inventory tracking across powerlooms and retail outlets. By utilizing headless commerce architectures, we separate the backend commerce engine from the frontend presentation layer, ensuring that massive catalogs with thousands of sarees, fabrics, and apparel designs load instantly. This headless approach allows textile brands to deliver personalized shopping experiences across web, mobile, and social channels, maximizing their customer lifetime value. Our focus on conversion rate optimization translates high search traffic into direct wholesale bookings, increasing profitability for local manufacturing houses.
        </p>

        <h3 id="headless-nextjs-startups" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Headless <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Next.js</a> Architecture for Startups
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">The startup ecosystem in Surat</strong>, particularly around Vesu and Adajan, is growing rapidly, with new technology, real estate, and retail ventures demanding modern web architectures. We build modern web platforms using Next.js and React, utilizing Server-Side Rendering (SSR) and Static Site Generation (SSG) to achieve near-instantaneous page load speeds. This headless approach ensures that startup platforms are not only exceptionally fast but also highly secure, as there is no direct database exposure on the frontend. By utilizing decoupled architectures, we provide Surat’s developers and startup founders with the flexibility to update frontend designs without affecting backend operations. Our platforms are hosted on global edge networks and integrated with modern Content Delivery Networks (CDNs) to minimize latency to the absolute minimum. This technical setup allows local startups to scale their user base rapidly from a handful of local users to millions of global visitors without experiencing performance degradation or server downtime. Partnering with a professional <strong className="font-semibold text-[#de5e18]">Web Development Company in Surat</strong> guarantees that your startup’s technology stack is future-proof and ready for investment pitches.
        </p>

        <h3 id="logistics-api-integrations" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Robust API Integrations for Hazira Port Logistics
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Surat's strategic location</strong> near Hazira Port makes it a critical logistical hub, meaning that web applications in this region must interface seamlessly with global shipping networks. We design and develop custom API integrations that connect your web platform to local and global logistics providers like Delhivery, Blue Dart, and major container shipping lines. Our developers build real-time tracking dashboards, custom customs-clearance portals, and automated freight calculation tools directly into your corporate website. This allows exporters in Ichchhapor GIDC to automate their shipping paperwork, track containers in transit, and communicate instantly with custom brokers. We implement secure webhook handlers to ensure that shipping status updates are processed and displayed to your clients in real-time. By eliminating administrative bottlenecks and manual shipping inputs, our integrated portals help logistics firms increase their operational efficiency. Our focus on seamless API engineering ensures that Surat's exporters can manage their global supply chains from a single, unified digital interface.
        </p>

        <h3 id="mobile-first-optimization" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Mobile-First Optimizations for GIDC Belts
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">In Surat's busy industrial zones</strong> like Ichchhapor GIDC, Sachin GIDC, and Pandesara, business owners and logistics managers frequently access web platforms via mobile networks. Recognizing this regional constraint, we employ a mobile-first design philosophy, ensuring that all layouts, interactive elements, and forms are fully responsive. We implement aggressive asset optimization, including WebP/AVIF image compression, code splitting, and browser caching to ensure rapid load times on mobile devices. This technical optimization guarantees that your web application remains functional and fast, even when accessed on spotty 4G or congested 5G connections in industrial areas. By optimizing touch targets and simplifying navigation menus, we create a frictionless user experience that keeps visitors engaged on their smartphones. Fast-loading, responsive websites not only satisfy local business users but also rank significantly higher on search engine results pages. Choosing our high-performance optimization services ensures that your digital platform remains accessible to clients across all industrial corridors.
        </p>

        <h3 id="localized-ux-ui-design" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Localized UX/UI Design and Gujarati Values
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Understanding Surat's unique</strong> business culture is essential for designing high-converting user interfaces that resonate with local decision-makers. Gujarati entrepreneurs and consumers place a high premium on trust, clear financial terms, and transparent, relationship-driven communications. We design user interfaces that highlight key trust signals, including clear customer reviews, secure payment gateway logos, and prominent contact details. Our UX architects structure information hierarchically, ensuring that pricing, service capabilities, and company histories are easy to find and digest. By utilizing user heatmapping and behavioral analysis, we identify and eliminate points of friction in the contact and checkout processes. This localized approach to user experience design ensures that your website builds immediate credibility and converts casual traffic into loyal clients. To drive high-intent local traffic to this optimized platform, local firms can integrate our specialized SEO services to dominate local search results.
        </p>

        <h3 id="southern-edge-advantage" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          The Southern Edge Marketing Advantage
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Partnering with Southern Edge Marketing</strong> provides Surat's businesses with access to an elite team of developers, designers, and SEO specialists. We do not believe in cookie-cutter templates; instead, we build bespoke web applications tailored specifically to your business goals. From initial wireframing and database design to custom API development and secure cloud deployment, we manage the entire project lifecycle. We provide ongoing maintenance, security updates, and performance monitoring to ensure your digital infrastructure remains a secure business asset. Our team acts as a technical partner, helping you iterate and scale your web platform as your business grows. By choosing our premium web development services, you are investing in a high-converting digital platform designed to outperform competitors. Let us build the digital foundation that drives your business growth in Surat’s competitive market and beyond.
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
                "Managing live inventory for over 15,000 unique diamonds across our global sales offices was an operational bottleneck. Southern Edge Marketing built a high-security, custom B2B diamond portal that integrates directly with our ERP and RapNet API. Now, our brokers in Antwerp and New York can view real-time diamond catalogs and lock in wholesale purchases with sub-second latency. This has reduced transaction cycles by 35% and completely eliminated manual coordination errors."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Rajesh Shah" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Rajesh Shah</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Varachha Diamond Exports</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                "Our wholesale saree and apparel business on Ring Road was limited by legacy order processing methods. Southern Edge built a high-performance, headless e-commerce catalog that handles thousands of bulk product variations and dynamically calculates wholesale pricing based on order volume. The platform works incredibly fast even on mobile networks in our GIDC manufacturing units. Our wholesale inquiries have surged by 50% since we launched the new platform."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Meera Patel" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Meera Patel</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Surat Silk Weaves Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full clear-both pt-8 mt-8 border-t border-black/10">
          <FaqAccordion faqs={[
            {
              question: "Do you integrate diamond inventory APIs like RapNet or IDEX into our B2B portal?",
              answer: "Yes, we specialize in custom API integrations for diamond exporters in Surat. We connect your frontend Next.js platform directly to live inventory databases like RapNet, IDEX, or custom legacy databases, enabling real-time stock listing, dynamic search parameters, and direct secure trading capabilities for verified global buyers."
            },
            {
              question: "Can your e-commerce platforms handle bulk pricing and wholesale buyer tiers for Surat textile manufacturers?",
              answer: "Absolutely. We develop custom wholesale e-commerce architectures that support tiered pricing structures, bulk discounts, custom catalogs for specific distributors, and secure wholesale buyer login portals. This allows textile manufacturers to manage both B2B distributors and direct-to-consumer sales from a single unified backend dashboard."
            },
            {
              question: "How do you ensure data security and encryption for high-value diamond transactions?",
              answer: "We implement enterprise-grade security protocols, including AES-256 data encryption at rest and in transit, secure token-based user authentication, multi-factor authentication (MFA), and strict role-based access control. Our web servers are protected by web application firewalls and undergo regular security audits to prevent data leaks."
            },
            {
              question: "Will our website load quickly for clients using mobile networks in GIDC industrial belts?",
              answer: "Yes. We leverage Next.js with Static Site Generation (SSG) and Server-Side Rendering (SSR) along with edge CDN caching. We aggressively optimize images using WebP/AVIF formats and split code bundles to ensure pages load under 2 seconds, even on variable 4G mobile networks in Ichchhapor or Sachin GIDC."
            },
            {
              question: "Can we integrate our local ERP, Tally, and custom inventory software with the website?",
              answer: "Yes, we have extensive experience building custom middleware and API connectors. We can link your new web application to popular ERP platforms, accounting software like Tally, custom warehouse inventory systems, and local logistics partners like Delhivery, Shiprocket, or Blue Dart to automate orders."
            },
            {
              question: "How long does it take to develop a custom B2B web portal or wholesale marketplace?",
              answer: "A custom corporate or wholesale web platform typically takes 8 to 12 weeks from initial discovery and design to final deployment. More complex platforms with deep custom databases, RapNet API integrations, and multi-layered ERP syncs may require 12 to 16 weeks to ensure thorough security and load testing."
            },
            {
              question: "Do we retain full ownership of the source code and digital assets?",
              answer: "Yes, 100%. Once the project is completed and the final payment is settled, all intellectual property, source code, database architectures, and custom UI design files are transferred entirely to you. We do not lock you into any proprietary systems, giving you complete freedom to host and scale your platform."
            }
          ]} />
        </div>
      </ServiceLayout>
    </div>
  );
}
