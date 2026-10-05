import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/influencer-marketing',
  },
  title: "Influencer Marketing Agency Dubai",
  description: "Data-driven influencer marketing agency in Dubai & UAE. We connect brands with vetted creators, manage campaigns, and maximize paid social ROI.",
  openGraph: {
    title: "Influencer Marketing Agency Dubai | Southern Edge",
    description: "Data-driven influencer marketing agency in Dubai & UAE. We connect brands with vetted creators, manage campaigns, and maximize paid social ROI.",
    url: "https://www.southernedgemarketing.com/services/influencer-marketing",
    siteName: "Southern Edge Marketing",
  },
};

const tableOfContents = [
  {
    "id": "creator-sourcing-vetting",
    "title": "Data-Driven Creator Sourcing & Audience Vetting"
  },
  {
    "id": "meta-partnership-whitelisting",
    "title": "Meta Partnership Ads & Paid Social Whitelisting"
  },
  {
    "id": "ugc-content-production",
    "title": "High-Converting User-Generated Content Production"
  },
  {
    "id": "campaign-tracking-attribution",
    "title": "Full-Funnel Campaign Tracking & Revenue Attribution"
  },
  {
    "id": "middle-east-global-management",
    "title": "Middle East & Global Creator Campaign Management"
  },
  {
    "id": "multi-platform-execution",
    "title": "Multi-Platform Execution: Instagram, TikTok & YouTube"
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

export default function InfluencerMarketingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Strategic Influencer Marketing & Creator Management",
    "serviceType": "Influencer Marketing & Creator Management Agency",
    "provider": {
      "@type": "Organization",
      "name": "Southern Edge Marketing",
      "url": "https://www.southernedgemarketing.com"
    },
    "areaServed": [
      { "@type": "City", "name": "Dubai" },
      { "@type": "City", "name": "Abu Dhabi" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "India" },
      { "@type": "AdministrativeArea", "name": "GCC" }
    ],
    "description": "Data-driven influencer marketing agency in Dubai & UAE. We connect brands with vetted creators, manage campaigns, and maximize paid social ROI.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "142"
    }
  };

  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceHero 
        title={"Strategic Influencer Marketing & Creator Management"}
        tagline={"Turn creator credibility into compounding brand revenue."}
        breadcrumbTitle={"Influencer Marketing"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            {/* Quick Metrics & Trust Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">5,000+</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Vetted Creators</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">GCC &amp; Pan-India Network</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">5.4x</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Average ROAS</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Meta Partnership Whitelisting</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">100%</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Attribution</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">GA4 &amp; Shopify Verified</p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-xl p-4 text-center shadow-xs">
                <p className="text-[20px] md:text-[24px] font-black text-[#de5e18] tracking-tight">Turnkey</p>
                <p className="text-[12px] md:text-[13px] font-bold text-[#432d1c] uppercase tracking-wide mt-1">Execution</p>
                <p className="text-[11px] text-black/60 hidden sm:block mt-0.5">Contracts, Gifting &amp; Reporting</p>
              </div>
            </div>

            <h2 id="creator-sourcing-vetting" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Data-Driven Creator Sourcing &amp; Audience Vetting
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Influencer marketing drives direct sales</strong> and brand growth. Buyers in Dubai, Abu Dhabi, Riyadh, and Mumbai trust creator reviews over standard ads. However, picking the wrong accounts wastes budget on fake bots and empty likes. As a trusted <strong className="font-semibold text-[#de5e18] tracking-tight">influencer marketing agency in Dubai</strong>, Southern Edge Marketing connects your brand with real creators who drive sales.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We vet creators on Instagram, TikTok, YouTube, and Snapchat. We check real follower locations, active engagement, and past sales. This ensures your ads reach real buyers in the GCC and India. By filtering out fake profiles, we make sure your ad budget works hard.
            </p>

            <h3 id="meta-partnership-whitelisting" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Meta Partnership Ads &amp; Paid Social Whitelisting
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Standard social posts reach only a small fraction of followers.</strong> Platform feeds often show organic posts to less than 10% of an audience. With Meta Partnership Ads and creator whitelisting, we run paid ads straight from the creator&apos;s profile. This pairs creator trust with exact ad targeting across Instagram and Facebook.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              This method gives your brand strong sales results. We test multiple video hooks and buttons without filling up the creator&apos;s main page. Then, we retarget viewers until they buy. Our clients see an average 5.4x Return on Ad Spend (ROAS) and lower cost per sale. For full social growth, pair this with our <Link href="/services/social-media-management" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">social media management services</Link>.
            </p>

            <h3 id="ugc-content-production" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              High-Converting User-Generated Content Production
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Modern shoppers skip glossy studio ads.</strong> They stop to watch authentic User-Generated Content (UGC). Southern Edge Marketing connects your brand with skilled creators who produce high-converting videos. We write clear creative briefs for unboxings, daily routines, honest reviews, and product demos.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Each video features a sharp 3-second hook, product benefits, text captions, and clear buying prompts. We deliver 9:16 vertical videos built for TikTok Spark Ads, Instagram Reels, and YouTube Shorts. Our creator contracts include full ad usage rights. You can reuse top videos across landing pages, emails, and paid ad channels.
            </p>

            <h3 id="campaign-tracking-attribution" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Full-Funnel Campaign Tracking &amp; Revenue Attribution
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">We focus on revenue rather than vanity metrics</strong> like likes and shares. Our tracking setups monitor every campaign from first view to checkout. We give each creator custom tracking links and discount codes. These send live sales data directly into Google Analytics 4 (GA4) and your Shopify store.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Custom dashboards display your click rates, total sales, ROAS, and cost per buyer. This allows us to scale winning creators and cut low returns. When creator videos go viral, brand search volume rises. To capture that organic search traffic, pair your campaigns with our <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO services</Link>.
            </p>

            <h3 id="middle-east-global-management" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Middle East &amp; Global Creator Campaign Management
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Managing creator campaigns in the UAE and GCC</strong> requires local knowledge. Southern Edge Marketing handles your campaign from start to finish. Our team manages creator outreach, price negotiations, product gifting, legal contracts, and posting dates.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We ensure all campaigns follow UAE media rules, including National Media Council (NMC) guidelines and clear ad tags (#Ad / #Sponsored). Whether you need a VIP event in Dubai or a rollout in Saudi Arabia and India, we run it smoothly. For online retail in the region, explore our specialized <Link href="/services/shopify-agency-dubai" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Shopify agency in Dubai</Link>.
            </p>

            <h3 id="multi-platform-execution" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Multi-Platform Execution: Instagram, TikTok &amp; YouTube
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Each social app serves a different stage</strong> in the buying path. A smart strategy meets shoppers where they spend their time. On Instagram, we share carousels, Stories with shop links, and Reels. On TikTok, creators use trending sounds and relatable formats to drive product discovery with Gen Z and millennial buyers.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              For software apps and high-ticket products, we set up in-depth YouTube reviews and tutorials. Long-form video builds buyer trust and brings in search traffic for months. You can also pair creator campaigns with our <Link href="/services/branding" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">branding and creative strategy</Link> or build custom online stores with our <Link href="/services/web-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">custom web development services</Link>.
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
                    &quot;Southern Edge transformed our beauty brand&apos;s online sales in the UAE and Saudi Arabia. Their creator whitelisting generated a 5.8x ROAS during White Friday. Their UGC video quality and clear GA4 tracking were outstanding.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Nour Al-Sabah" width={100} height={100} className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Nour Al-Sabah</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">Head of Marketing, Lumina Luxury Skincare Dubai</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    &quot;For our finance app in India and the GCC, finding authentic creators was key. Southern Edge sourced 45 vetted creators, handled all contracts, and helped us gain over 80,000 app downloads in 90 days.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Rohan Varma" width={100} height={100} className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Rohan Varma</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">VP Growth, PayKite Global Financial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Digital Services Cluster */}
            <div className="w-full bg-[#ede0d4]/80 border border-black/10 rounded-2xl p-6 my-8">
              <h3 className="text-[18px] font-bold text-[#432d1c] mb-3">Explore Related Growth Channels</h3>
              <p className="text-[15px] text-[#432d1c]/80 leading-relaxed mb-4">
                Grow your brand reach across social media, search, and bespoke web sales:
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Link href="/services/social-media-management" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Social Media Management &rarr;
                </Link>
                <Link href="/services/shopify-agency-dubai" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Shopify Agency Dubai &rarr;
                </Link>
                <Link href="/services/seo" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Search Engine Optimization (SEO) &rarr;
                </Link>
                <Link href="/services/web-development" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Custom Web Development &rarr;
                </Link>
                <Link href="/services/branding" className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-[13px] font-semibold text-[#432d1c] hover:text-[#de5e18] hover:border-[#de5e18] transition-colors">
                  Branding &amp; Creative Strategy &rarr;
                </Link>
              </div>
            </div>

            <div className="w-full clear-both pt-8 mt-8 border-t border-black/10">
              <FaqAccordion headingTag="h3" faqs={[
                {
                  "question": "How do you vet influencers to avoid fake followers and engagement?",
                  "answer": "We use smart analytics tools to check real followers, viewer locations, active engagement, and past sales data."
                },
                {
                  "question": "What is Meta Partnership Ads / Whitelisting?",
                  "answer": "Whitelisting lets us run targeted ads directly through a creator's profile handle. This unlocks custom ad targeting and lowers your customer acquisition costs."
                },
                {
                  "question": "Do you handle legal contracts and content usage rights?",
                  "answer": "Yes. Our contracts protect your brand by securing full ad usage rights, clear delivery timelines, and exclusivity terms."
                },
                {
                  "question": "How is influencer campaign ROI measured?",
                  "answer": "We track sales using custom UTM links, exclusive discount codes, and live revenue data inside Google Analytics 4 (GA4) and Shopify."
                },
                {
                  "question": "What tiers of influencers do you work with for Middle East campaigns?",
                  "answer": "We work with all creator tiers, from nano (1K-10K) and micro (10K-100K) to macro (100K-1M) and celebrity talent across Dubai, Abu Dhabi, Saudi Arabia, and India."
                },
                {
                  "question": "Can creator content be repurposed across our website and paid advertising?",
                  "answer": "Yes. We secure full digital usage rights so you can run creator videos in paid ads, on your website, and in email campaigns."
                }
              ]} />
            </div>

      </ServiceLayout>
    </div>
  );
}
