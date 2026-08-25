import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/social-media-management/los-angeles',
  },
  title: "Social Media Management in Los Angeles | Southern Edge Marketing",
  description: "Partner with Los Angeles's premier social media management agency. We engineer high-ROAS paid social campaigns, creator economy activations, and viral content strategies for Silicon Beach and Hollywood brands.",
  openGraph: {
    title: "Social Media Management in Los Angeles | Southern Edge Marketing",
    description: "Partner with Los Angeles's premier social media management agency. We engineer high-ROAS paid social campaigns, creator economy activations, and viral content strategies for Silicon Beach and Hollywood brands.",
    url: "https://southernedgemarketing.com/services/social-media-management/los-angeles",
    siteName: "Southern Edge Marketing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management in Los Angeles | Southern Edge Marketing",
    description: "Partner with Los Angeles's premier social media management agency. We engineer high-ROAS paid social campaigns, creator economy activations, and viral content strategies for Silicon Beach and Hollywood brands.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const tableOfContents = [
  { id: "los-angeles-social-ecosystem-and-creator-economy", title: "1. The Los Angeles Social Ecosystem and Creator Economy" },
  { id: "creator-partnerships-ugc-production-and-tiktok-reels", title: "2. Creator Partnerships, In-House UGC Production, and TikTok/Reels" },
  { id: "paid-social-performance-meta-tiktok-youtube-ads", title: "3. High-ROAS Paid Social Performance across Meta, TikTok, and YouTube" },
  { id: "hollywood-entertainment-launches-and-viral-cultural-moments", title: "4. Hollywood Entertainment Campaign Launches and Pop Culture Hooks" },
  { id: "luxury-lifestyle-and-beverly-hills-social-clienteling", title: "5. Luxury Lifestyle, Beverly Hills Fashion, and High-Ticket Social Clienteling" },
  { id: "b2b-executive-thought-leadership-on-linkedin-and-x", title: "6. B2B Executive Thought Leadership on LinkedIn and X for Silicon Beach" },
  { id: "hyper-localized-los-angeles-geo-clusters-and-event-activations", title: "7. Hyper-Localized LA Geo-Clusters and Experiential Pop-Up Activations" },
  { id: "multi-touch-attribution-data-clean-rooms-and-slas", title: "8. Multi-Touch Attribution, Data Clean Rooms, and Dedicated SLAs" },
  { id: "reviews", title: "Reviews" },
  { id: "faq", title: "FAQ" },
];

export default function LosAngelesSocialMediaPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://southernedgemarketing.com/services/social-media-management/los-angeles#organization",
        "name": "Southern Edge Marketing - Social Media Los Angeles",
        "url": "https://southernedgemarketing.com/services/social-media-management/los-angeles",
        "logo": "https://southernedgemarketing.com/LOGO_Final.svg",
        "telephone": "+1-800-555-0199",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ocean Park Blvd, Silicon Beach",
          "addressLocality": "Santa Monica",
          "addressRegion": "CA",
          "postalCode": "90405",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.0195",
          "longitude": "-118.4912"
        }
      },
      {
        "@type": "Service",
        "@id": "https://southernedgemarketing.com/services/social-media-management/los-angeles#service",
        "name": "Social Media Management & Paid Social in Los Angeles",
        "provider": {
          "@id": "https://southernedgemarketing.com/services/social-media-management/los-angeles#organization"
        },
        "serviceType": "Paid Social Advertising, Creator Economy Management, Short-Form Video Production, Executive Thought Leadership",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Greater Los Angeles Metropolitan Area"
        },
        "description": "Full-funnel paid social advertising, high-impact creator partnerships, and short-form video production engineered for Los Angeles brands and enterprises."
      }
    ]
  };

  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ServiceHero 
        title="Social Media Management in Los Angeles"
        tagline="Engineering high-ROAS paid social campaigns, creator economy activations, and viral short-form video strategies for Silicon Beach scale-ups, Hollywood entertainment brands, and luxury lifestyle leaders."
        breadcrumbTitle="Social Media in Los Angeles"
      />
      
      <ServiceLayout sections={tableOfContents}>

        <h3 id="los-angeles-social-ecosystem-and-creator-economy" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          The Los Angeles Social Ecosystem and Creator Economy
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Los Angeles stands as the undisputed global capital of digital culture, influencer marketing, and social storytelling</strong>. Home to the world&apos;s highest concentration of top-tier content creators, production studios, and digital talent agencies, Southern California dictates social trends worldwide. In this hyper-dynamic environment, generic stock graphics, automated recycling of press releases, and disconnected ad campaigns fail to capture attention. As an elite <strong className="font-semibold text-[#de5e18] tracking-tight">social media management agency in Los Angeles</strong>, Southern Edge Marketing engineers full-funnel organic and paid social architectures. We combine cinema-quality short-form video production, verified creator partnerships, and quantitative media buying to drive brand affinity and bottom-line revenue. To learn how we connect social engagement with high-converting digital storefronts, explore our enterprise <Link href="/services/web-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">web development</Link> capabilities.
        </p>

        <h3 id="creator-partnerships-ugc-production-and-tiktok-reels" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Creator Partnerships, In-House UGC Production, and TikTok/Reels
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          Organic algorithmic distribution on TikTok, Instagram Reels, and YouTube Shorts is driven by authentic storytelling and rapid pacing. Operating from the epicenter of creator culture, we coordinate high-impact creator partnerships and direct-response User-Generated Content (UGC) production. We collaborate with vetted Los Angeles influencers, tastemakers, and video editors to produce native vertical video assets that hook viewers in the first 1.5 seconds. Our production workflows deliver continuous creative iterations featuring diverse hooks, pacing variations, and lifestyle contexts, ensuring your ad accounts consistently benefit from fresh, winning creative assets that prevent ad fatigue. To elevate your visual identity and brand assets, explore our bespoke <Link href="/services/branding" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">branding services</Link>.
        </p>

        <h3 id="paid-social-performance-meta-tiktok-youtube-ads" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          High-ROAS Paid Social Performance across Meta, TikTok, and YouTube
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          Our quantitative media buyers manage multi-million dollar ad budgets across Meta (Instagram &amp; Facebook), TikTok Ads, YouTube, and Pinterest. We deploy advanced campaign structures utilizing Meta Advantage+ Shopping Campaigns (ASC), broad targeting models, and First-Party Conversions API (CAPI) server-side tracking. By feeding clean, server-side conversion signals to advertising algorithms, our campaigns maintain attribution integrity and maximize Return on Ad Spend (ROAS) even in post-iOS14 privacy environments.
        </p>

        <h3 id="hollywood-entertainment-launches-and-viral-cultural-moments" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Hollywood Entertainment Campaign Launches and Pop Culture Hooks
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          For entertainment production houses, streaming networks, and talent agencies in Hollywood and Burbank, campaign success is defined by opening-weekend momentum and viral cultural relevance. We execute synchronized premiere activations, interactive countdowns, and talent takeover series that mobilize fans across platforms. Our teams monitor real-time social sentiment, community memes, and trending audio, deploying agile micro-content that transforms passive viewers into active brand evangelists.
        </p>

        <h3 id="luxury-lifestyle-and-beverly-hills-social-clienteling" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Luxury Lifestyle, Beverly Hills Fashion, and High-Ticket Social Clienteling
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          High-end fashion labels, boutique jewelry ateliers, and luxury hospitality venues across Beverly Hills and West Hollywood require an elevated, aesthetic social presence. We craft bespoke visual grids, editorial motion snippets, and private VIP social clienteling strategies via Instagram Direct Messages and WhatsApp VIP concierge conduits. This refined strategy bridges physical boutique visits on Rodeo Drive with global e-commerce shopping, maintaining brand prestige while driving high-ticket transactions.
        </p>

        <h3 id="b2b-executive-thought-leadership-on-linkedin-and-x" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          B2B Executive Thought Leadership on LinkedIn and X for Silicon Beach
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          For founders, venture capitalists, and C-suite executives across Silicon Beach and the South Bay aerospace corridor, personal executive presence is a primary channel for closing enterprise deals and hiring top tier talent. We ghostwrite high-conviction LinkedIn essays, data breakdown carousels, and X (Twitter) threads that establish market authority. We pair organic executive posting with targeted LinkedIn Sponsored Content to position your leaders directly in front of target enterprise decision-makers.
        </p>

        <h3 id="hyper-localized-los-angeles-geo-clusters-and-event-activations" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Hyper-Localized LA Geo-Clusters and Experiential Pop-Up Activations
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          Los Angeles is a confederation of distinct cultural micro-markets. We configure hyper-targeted geofencing and localized audience clusters across Santa Monica, Venice, DTLA, Beverly Hills, West Hollywood, Silver Lake, and Pasadena. For experiential pop-ups on Abbot Kinney or brand activations at LA Live, we synchronize real-time social ads with on-the-ground foot traffic, turning local buzz into measurable retail footfall and online sales. To capture regional search demand simultaneously, explore our specialized <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO services</Link>.
        </p>

        <h3 id="multi-touch-attribution-data-clean-rooms-and-slas" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Multi-Touch Attribution, Data Clean Rooms, and Dedicated SLAs
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          We believe in transparent, verifiable performance. Our team constructs custom multi-touch attribution dashboards integrating Google Analytics 4, Triple Whale, and Northbeam data clean rooms to track exact customer journey touchpoints from first video view to repeat transaction. When your business is ready to transform its social media presence in Los Angeles, <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">contact our Los Angeles social media team</Link> to schedule an initial campaign strategy review.
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
                &quot;Southern Edge Marketing took over our paid Meta and TikTok ad strategy for our Silicon Beach DTC wellness brand. Their in-house short-form video production and automated CAPI server tracking improved our blended ROAS from 1.8x to 3.9x while scaling our monthly spend past $200k.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Maya Lin" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Maya Lin</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Kura Botanicals (Santa Monica, CA)</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                &quot;Our Hollywood entertainment studio partnered with Southern Edge for our feature film theatrical release. Their coordinated creator reaction campaigns on TikTok and hyper-localized geofencing generated over 45 million impressions and drove sold-out opening weekend screenings across LA.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Jonathan Sterling" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Jonathan Sterling</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Silvergate Pictures (Burbank, CA)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FaqAccordion faqs={[
          {
            "question": "What platforms do you manage for Los Angeles businesses?",
            "answer": "We manage end-to-end paid and organic campaigns across Meta (Instagram, Facebook), TikTok, YouTube (Shorts & In-Stream), LinkedIn, X (Twitter), and Pinterest, tailoring platform distribution to your specific customer demographics."
          },
          {
            "question": "How do you source and vet content creators in Los Angeles?",
            "answer": "We maintain direct relationships with thousands of vetted California creators and talent managers. We evaluate creators based on authentic audience engagement rates, content quality, brand safety, and historical conversion performance rather than vanity follower metrics."
          },
          {
            "question": "How do you track conversions accurately with iOS14 and cookie privacy changes?",
            "answer": "We implement First-Party Server-Side Conversions API (CAPI) on Next.js architectures, combined with Triple Whale / Northbeam multi-touch attribution clean rooms. This captures 100% of purchase signals and optimizes ad algorithms effectively."
          },
          {
            "question": "What is the typical management fee and minimum ad spend commitment?",
            "answer": "We structure engagements through custom monthly retainers plus performance incentives for scaled paid media budgets. Minimum ad spends are structured to ensure sufficient statistical data for rapid algorithmic learning."
          }
        ]} />

      </ServiceLayout>
    </div>
  );
}
