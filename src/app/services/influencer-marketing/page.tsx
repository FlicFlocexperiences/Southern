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
              <strong className="font-semibold text-[#de5e18] tracking-tight">Influencer marketing has fundamentally evolved from vanity brand awareness</strong> into a high-performance customer acquisition discipline. In premier commercial hubs across Dubai, Abu Dhabi, Riyadh, and Mumbai, consumer purchasing decisions are increasingly governed by the authentic endorsements of trusted digital creators. However, executing creator collaborations without granular demographic audits exposes brands to fraudulent bot followers, engagement pods, and misaligned audience geographies. As a leading <strong className="font-semibold text-[#de5e18] tracking-tight">influencer marketing agency in Dubai</strong>, Southern Edge Marketing engineers data-driven creator partnerships that translate directly into compounding enterprise revenue.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We deploy proprietary audience intelligence software to rigorously evaluate potential creators across Instagram, TikTok, YouTube, and Snapchat. Our forensic vetting process inspects follower credibility scores, geographic audience density (ensuring genuine GCC or tier-1 Indian presence), historical engagement velocity, and commercial conversion benchmarks. By filtering out artificially inflated handles, we guarantee that every marketing dollar is deployed into authentic creator ecosystems with proven buyer intent.
            </p>

            <h3 id="meta-partnership-whitelisting" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Meta Partnership Ads &amp; Paid Social Whitelisting
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Relying strictly on organic creator posts severely caps campaign return on investment.</strong> Due to social media algorithmic compression, even top-performing organic reels and stories rarely reach more than 8% to 12% of an influencer&apos;s total following. Through Meta Partnership Ads and paid social whitelisting (creator licensing), we merge the raw credibility of creator content with the hyper-targeting precision of paid performance marketing. Whitelisting empowers our media buyers to serve paid ads directly through the creator&apos;s authentic handle to targeted lookalike and custom audiences.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              This methodology provides unprecedented conversion advantages. We unlock creator pixel data, create high-converting dark posts that test multiple hooks, captions, and call-to-action buttons without altering the creator&apos;s public feed, and retarget engaged viewers across the purchase funnel. Brands utilizing our whitelisting architectures achieve an average of 5.4x Return on Ad Spend (ROAS) and a 42% reduction in Customer Acquisition Cost (CAC). To maximize paid social efficiency, integrate this with our <Link href="/services/social-media-management" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">social media management services</Link>.
            </p>

            <h3 id="ugc-content-production" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              High-Converting User-Generated Content Production
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Modern digital consumers scroll past glossy corporate studio commercials in milliseconds,</strong> yet stop and engage with authentic, relatable User-Generated Content (UGC). Southern Edge Marketing operates an agile UGC production studio that pairs your brand with skilled content creators who produce high-converting, native-feeling video assets at scale. We design psychology-driven creative briefs centered around problem-agitation-solution angles, unboxing experiences, aesthetic GRWM formats, and compelling social proof demonstrations.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Every asset is engineered with high-impact 3-second visual hooks, clear value props, native on-screen text overlays, and persuasive conversion triggers. We deliver expansive creative libraries in 9:16 vertical video format, fully optimized for TikTok Spark Ads, Instagram Reels, and YouTube Shorts. Crucially, our comprehensive talent contracts secure perpetual digital advertising usage rights, allowing you to repurpose top-performing creator assets across high-converting landing pages, email marketing funnels, and programmatic display ads.
            </p>

            <h3 id="campaign-tracking-attribution" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Full-Funnel Campaign Tracking &amp; Revenue Attribution
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">We discard ambiguous vanity metrics like likes and video views</strong> in favor of verified financial returns. We architect enterprise-grade tracking systems that monitor every influencer collaboration from top-of-funnel reach down to exact pipeline revenue, qualified lead generation, and e-commerce transactions. We equip every creator with dedicated UTM parameters, dynamic deep links, and bespoke discount codes synchronized directly with Google Analytics 4 (GA4), Shopify backend analytics, and server-side tracking pipelines.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              Our live business intelligence dashboards provide transparent visibility into click-through rates (CTR), post-view conversions, blended ROAS, and customer lifetime value (LTV). By evaluating each creator against strict Cost-Per-Acquisition (CPA) thresholds, we scale winning ambassador partnerships and eliminate underperforming channels. To capture the compounding organic search demand sparked by creator viral reach, pair your influencer activations with our technical <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO services</Link>.
            </p>

            <h3 id="middle-east-global-management" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Middle East &amp; Global Creator Campaign Management
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Coordinating multi-tier creator campaigns across Dubai, Abu Dhabi, Saudi Arabia,</strong> and international markets requires meticulous operational logistics and regional cultural fluency. Southern Edge Marketing provides end-to-end turnkey campaign execution, eliminating administrative friction from your internal team. Our talent managers handle talent outreach, rate negotiations, gifting logistics, product seeding, contract execution, and content publishing schedules.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              We understand the unique regulatory landscape of Middle Eastern creator marketing. We ensure strict compliance with UAE National Media Council (NMC) licensing rules, regional advertising disclosure standards (#Ad / #Sponsored), and culturally authentic messaging. Whether executing an exclusive VIP event in Dubai Design District or managing a multi-city product rollout across the GCC, our dedicated campaign directors guarantee seamless delivery. If you are launching an e-commerce brand in the region, explore our specialized <Link href="/services/shopify-agency-dubai" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Shopify agency in Dubai</Link>.
            </p>

            <h3 id="multi-platform-execution" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Multi-Platform Execution: Instagram, TikTok &amp; YouTube
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Each digital channel addresses distinct moments in the modern customer decision journey.</strong> A high-converting creator strategy orchestrates multi-platform synergy to engage prospects across their entire digital lifecycle. On Instagram, we deploy curated aesthetic feed carousels, interactive Stories with native product stickers, and high-energy Reels. On TikTok, our creators harness fast-moving sound trends, humor, and organic storytelling that ignites discovery among high-spending Gen Z and millennial demographics.
            </p>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              For complex B2B solutions, FinTech apps, and high-ticket consumer electronics, we coordinate dedicated YouTube integrations and in-depth product walkthroughs. Long-form video builds deep educational authority and continues generating compounding search traffic on YouTube for years. Partner with our creative team to align your creator assets with an impactful <Link href="/services/branding" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">branding and creative strategy</Link> or build high-converting storefronts via our <Link href="/services/web-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">custom web development services</Link>.
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
                    &quot;Southern Edge transformed our beauty brand&apos;s digital customer acquisition across the UAE and Saudi Arabia. Their Meta whitelisting and creator management achieved a 5.8x blended ROAS during White Friday. The quality of UGC video assets and transparent GA4 attribution tracking was unlike any agency we have worked with.&quot;
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
                    &quot;As a fast-growing FinTech app expanding across India and the GCC, vetting creators for authentic finance audiences was our top priority. Southern Edge sourced 45 vetted creator partners, managed all legal licensing, and scaled our TikTok Spark Ads to over 80,000 verified app downloads in 90 days.&quot;
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
                Compound your brand authority across social media, search, and bespoke digital commerce:
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
                  "answer": "We use deep audience analytics to inspect follower authenticity, geography, engagement velocity, and past commercial conversion benchmarks."
                },
                {
                  "question": "What is Meta Partnership Ads / Whitelisting?",
                  "answer": "Whitelisting allows us to run targeted paid ads directly through the influencer’s handle, granting access to custom audience pixels and significantly lower CAC."
                },
                {
                  "question": "Do you handle legal contracts and content usage rights?",
                  "answer": "Yes, our contracts secure perpetual digital advertising usage rights, clear deliverables, and exclusivity agreements."
                },
                {
                  "question": "How is influencer campaign ROI measured?",
                  "answer": "We track dedicated UTM parameters, bespoke discount codes, post-view conversions, and blended ROAS in your Google Analytics 4 and Shopify dashboards."
                },
                {
                  "question": "What tiers of influencers do you work with for Middle East campaigns?",
                  "answer": "We deploy tailored mixes of nano-creators (1k–10k), micro-influencers (10k–100k), macro-creators (100k–1M), and celebrity talent across Dubai, Abu Dhabi, Saudi Arabia, and India based on campaign objectives."
                },
                {
                  "question": "Can creator content be repurposed across our website and paid advertising?",
                  "answer": "Yes, we negotiate full digital licensing rights so you can utilize creator assets across paid Meta ads, TikTok Spark Ads, website landing pages, and email marketing funnels."
                }
              ]} />
            </div>

      </ServiceLayout>
    </div>
  );
}
