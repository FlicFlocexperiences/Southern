import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/luxury-shopify-agency-uae',
  },
  title: "Luxury & Fashion Shopify Agency UAE",
  description: "Award-winning luxury fashion & beauty Shopify agency in UAE. We design bespoke, ultra-fast digital boutiques tailored for high-end GCC consumers.",
  openGraph: {
    title: "Luxury & Fashion Shopify Agency UAE | Southern Edge",
    description: "Award-winning luxury fashion & beauty Shopify agency in UAE. We design bespoke, ultra-fast digital boutiques tailored for high-end GCC consumers.",
    url: "https://www.southernedgemarketing.com/services/luxury-shopify-agency-uae",
    siteName: "Southern Edge Marketing",
  },
};

const tableOfContents = [
  {
    "id": "bespoke-digital-boutiques",
    "title": "Bespoke Digital Boutiques for Luxury & Haute Couture"
  },
  {
    "id": "vip-clienteling-showrooms",
    "title": "VIP Clienteling, Private Showrooms & Concierge Access"
  },
  {
    "id": "sub-second-mobile-commerce",
    "title": "Sub-Second Mobile Commerce for High-Net-Worth Shoppers"
  },
  {
    "id": "interactive-3d-ar-video",
    "title": "Interactive 3D AR Product Viewers & Video Commerce"
  },
  {
    "id": "fragrance-jewelry-fashion",
    "title": "Fragrance, High Jewelry & Fashion E-Commerce Systems"
  },
  {
    "id": "bilingual-editorial-storytelling",
    "title": "Bilingual Arabic & English Editorial Storytelling"
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

export default function LuxuryShopifyAgencyUaePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury & Fashion Shopify Agency in UAE & Dubai",
    "serviceType": "Luxury Fashion & Beauty Shopify Plus E-Commerce Development",
    "provider": {
      "@type": "Organization",
      "name": "Southern Edge Marketing",
      "url": "https://www.southernedgemarketing.com"
    },
    "areaServed": [
      { "@type": "City", "name": "Dubai" },
      { "@type": "City", "name": "Abu Dhabi" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "AdministrativeArea", "name": "GCC" }
    ],
    "description": "Award-winning luxury fashion & beauty Shopify agency in UAE. We design bespoke, ultra-fast digital boutiques tailored for high-end GCC consumers.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "96"
    }
  };

  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceHero 
        title={"Luxury & Fashion Shopify Agency in UAE & Dubai"}
        tagline={"Bespoke digital boutiques for haute couture & luxury beauty."}
        breadcrumbTitle={"Luxury Shopify Agency UAE"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            {/* Quick Metrics & Trust Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">3.8x</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Higher AOV</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">VIP Clienteling &amp; Bundles</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">Haute Couture</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Editorial Focus</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Bespoke Visual Systems</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">3D &amp; AR</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Virtual Showroom</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Interactive Try-On Models</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">&lt; 0.8s</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Sub-Second Speed</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Zero-Lag High-Res Media</p>
              </div>
            </div>

            <h2 id="bespoke-digital-boutiques" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Bespoke Digital Boutiques for Luxury &amp; Haute Couture
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">The luxury market in the Arabian Gulf</strong> is known for elegance, style, and high standards. Shoppers in Dubai Design District, Dubai Mall Fashion Avenue, and Abu Dhabi expect an online experience that feels like a private salon. Standard web templates cannot show the craft, heritage, and detail of luxury goods. As a leading <strong className="font-semibold text-[#de5e18] tracking-tight">luxury Shopify agency in UAE</strong>, Southern Edge Marketing creates custom digital boutiques on Shopify Plus.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We design clean visual layouts with editorial type, video showcases, and smooth navigation. We create online lookbooks and runway collection displays that put your products in the spotlight. Every detail—from smooth hover effects to custom slide-out carts—is built to build customer trust and lift order values across the UAE and GCC.
            </p>

            <h3 id="vip-clienteling-showrooms" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              VIP Clienteling, Private Showrooms &amp; Concierge Access
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Luxury online retail relies on personal relationships.</strong> In the GCC, high-value shoppers and private collectors expect attentive, private service. We build VIP client portals in Shopify Plus. This allows your stylists and brand advisors to create private lookbooks and custom shopping carts for individual clients.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We also build password-protected private rooms for limited product drops, private trunk shows, and rare jewelry previews. We connect WhatsApp concierge chat so clients in Downtown Dubai, Palm Jumeirah, and Emirates Hills can talk to advisors, book salon visits, or pay via private links. For more regional store services, explore our <Link href="/services/shopify-agency-dubai" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Shopify agency in Dubai</Link> page.
            </p>

            <h3 id="sub-second-mobile-commerce" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Sub-Second Mobile Commerce for High-Net-Worth Shoppers
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Over 88% of UAE luxury online sales</strong> happen on mobile phones. Shoppers expect pages to load right away without lag or jumpy layouts. We use modern headless setups with Next.js and Shopify Hydrogen. This allows your store to load in under a second while displaying high-res photos and video.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our stores run on fast cloud edge servers in Dubai and Abu Dhabi for quick response times. We enable fast 1-click checkout with Apple Pay and Google Pay, as well as local options like Tabby and Tamara. We also support split payments for high-value orders. To see how app-like sites help keep buyers, read our guide on <Link href="/explore-more/benefits-of-pwa-for-mobile-users" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">the benefits of PWAs for mobile users</Link>.
            </p>

            <h3 id="interactive-3d-ar-video" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Interactive 3D AR Product Viewers &amp; Video Commerce
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Buying luxury goods online</strong> requires clear visuals. When buying a couture dress, leather handbag, or watch, clients want to see every detail, stitch, and stone setting. We build 3D and augmented reality (AR) viewers. Shoppers can view products in 3D and see items in their own space with realistic scale and lighting.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We also add shoppable video to product and collection pages. Visitors can watch runway clips or workshop videos and tap items to see details, size guides, and add-to-bag buttons without pausing the video. This creates an engaging shopping experience that keeps shoppers on your site longer.
            </p>

            <h3 id="fragrance-jewelry-fashion" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Fragrance, High Jewelry &amp; Fashion E-Commerce Systems
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Each luxury sector has specific online needs.</strong> For fragrance brands, we build scent finders, layering tools, and sample discovery sets with voucher credits. For fine jewelry and watch brands, we build ring sizing guides, diamond cert lookups, and live engraving preview tools.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              On the backend, we link your Shopify Plus store to your ERP, including SAP, Microsoft Dynamics 365, and Oracle NetSuite. We automate shipping with couriers like DHL Express and Aramex for secure, trackable delivery across the UAE. For broader technical solutions, see our <Link href="/services/web-development/dubai" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">web development company in Dubai</Link>.
            </p>

            <h3 id="bilingual-editorial-storytelling" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Bilingual Arabic &amp; English Editorial Storytelling
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Language and tone are vital for luxury brands.</strong> Poor translations or broken Arabic layouts can hurt brand trust. Our design team creates balanced bilingual stores. We design both English and Arabic (RTL) pages with equal care, using clean Arabic fonts like Readex Pro, Cairo, and Amiri.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We set up smooth multi-currency buying for AED, SAR, QAR, KWD, BHD, OMR, USD, and EUR, fully aligned with UAE VAT rules. We also include targeted <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO services</Link> to help your boutique rank for top luxury terms in Google. Ready to build your digital boutique? <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Contact our luxury Shopify team</Link> to plan your project.
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
                    &quot;Southern Edge built our couture Shopify Plus store in Dubai Design District. The 3D garment viewer, Arabic typography, and private VIP portal raised our average order value by 4.2x. Their knowledge of GCC luxury buyers is unmatched.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Layla Al-Hashimi" width={100} height={100} className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Layla Al-Hashimi</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Maison Al-Hashimi Couture, Dubai Design District</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    &quot;For our jewelry brand, basic templates would not work. Southern Edge built a fast headless Shopify store with 360-degree product views and WhatsApp concierge chat. Our GCC and global online sales have grown well beyond our goals.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Zaid Al-Maktoum" width={100} height={100} className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Zaid Al-Maktoum</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Aura Fine Jewelry &amp; Horology, Downtown Dubai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Digital Services Cluster */}
            <div className="w-full bg-[#ede0d4]/80 border border-black/10 rounded-2xl p-6 my-8">
              <h3 className="text-[18px] font-bold text-[#432d1c] mb-3">Explore Related Digital Solutions</h3>
              <p className="text-[15px] text-[#432d1c]/80 leading-relaxed mb-4">
                Grow your luxury brand across the GCC with our digital services:
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Link href="/services/shopify-agency-dubai" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Shopify Agency Dubai &rarr;
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
                <Link href="/services/branding" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Luxury Brand Strategy &rarr;
                </Link>
              </div>
            </div>

            <div className="w-full clear-both pt-8 mt-8 border-t border-black/10">
              <FaqAccordion headingTag="h3" faqs={[
                {
                  "question": "How do you maintain a luxury brand identity on an e-commerce store?",
                  "answer": "We avoid generic templates. We build custom editorial layouts, video features, smooth interactions, and clear product journeys."
                },
                {
                  "question": "Can you integrate virtual try-on and 3D product rendering?",
                  "answer": "Yes. We add 3D models and augmented reality for jewelry, watches, eyewear, and fashion so shoppers can see products up close."
                },
                {
                  "question": "How do you handle private VIP sales and exclusive member access?",
                  "answer": "We create password-protected rooms, private product drops, and direct WhatsApp concierge support."
                },
                {
                  "question": "Is the checkout process optimized for high-ticket luxury purchases?",
                  "answer": "Yes. We set up secure payment gateways, multi-currency pricing, and split payment options for large purchases."
                },
                {
                  "question": "How do you optimize high-resolution editorial imagery and video lookbooks without sacrificing page speed?",
                  "answer": "We use modern image compression (WebP and AVIF), cloud edge caching, and video streaming to keep pages loading in under a second."
                }
              ]} />
            </div>

      </ServiceLayout>
    </div>
  );
}
