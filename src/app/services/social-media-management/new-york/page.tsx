import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/social-media-management/new-york',
  },
  title: "Social Media Management Company in New York | Southern Edge Marketing",
  description: "Partner with the premier social media management company in New York. We engineer high-converting B2B campaigns, luxury social commerce, and institutional growth.",
};

const tableOfContents = [
  {
    "id": "new-york-enterprise-digital-economy-and-social-landscape",
    "title": "Navigating New York City's Commercial Velocity and Social Landscape"
  },
  {
    "id": "wall-street-midtown-b2b-linkedin-executive-thought-leadership",
    "title": "B2B Executive Thought Leadership and LinkedIn ABM for Wall Street and Midtown"
  },
  {
    "id": "soho-madison-avenue-luxury-fashion-and-social-commerce",
    "title": "Luxury Social Commerce and High-Converting Visual Campaigns for SoHo and Madison Avenue"
  },
  {
    "id": "silicon-alley-saas-user-acquisition-and-employer-branding",
    "title": "Full-Funnel User Acquisition and Employer Branding for Silicon Alley Tech Scale-Ups"
  },
  {
    "id": "sec-finra-and-ftc-regulatory-compliance-governance",
    "title": "SEC Marketing Rule, FINRA Rule 2210, and FTC Disclosure Governance"
  },
  {
    "id": "five-borough-demographics-and-mta-commuter-targeting",
    "title": "Hyper-Targeted Five-Borough Demographics and MTA Commuter Engagement"
  },
  {
    "id": "cinematic-short-form-video-and-nyc-creator-networks",
    "title": "Cinematic Short-Form Video Production and Vetted New York Creator Networks"
  },
  {
    "id": "enterprise-attribution-server-side-capi-and-roi",
    "title": "Enterprise Multi-Touch Attribution, Server-Side CAPI, and Transparent ROI"
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

export default function NewYorkSocialMediaManagementPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title="Social Media Management Company in New York"
        tagline="Elevating New York's institutional enterprises, luxury retail flagships, and high-growth scale-ups with data-driven social authority."
        breadcrumbTitle="Social Media Management in New York"
      />
      
      <ServiceLayout sections={tableOfContents}>

        <h3 id="new-york-enterprise-digital-economy-and-social-landscape" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Navigating New York City&apos;s Commercial Velocity and Social Landscape
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">New York City serves as the undisputed financial, media, and cultural capital of the world</strong>, producing over two trillion dollars in regional economic output. From the institutional trading fortresses lining Wall Street and the corporate headquarters of Midtown Manhattan to the creative enclaves of SoHo and DUMBO Brooklyn, businesses in New York operate at a relentless commercial tempo. In such a dense, hyper-competitive metropolitan ecosystem, generic social media posts and cookie-cutter content calendars fail to command the attention of discerning corporate buyers and affluent consumers. As an elite <strong className="font-semibold text-[#de5e18] tracking-tight">social media management company in New York</strong>, Southern Edge Marketing engineers bespoke social distribution architectures, executive positioning campaigns, and high-converting paid acquisition funnels tailored specifically to the city&apos;s commercial titans. We combine studio-grade creative production with advanced algorithmic targeting to establish definitive category leadership, accelerate sales pipeline velocity, and protect brand prestige across the five boroughs and international markets. Whether your organization manages private capital out of Midtown or scales an omnichannel consumer brand out of SoHo, our social media practice delivers measurable commercial impact. <strong className="font-semibold text-[#de5e18] tracking-tight">Partnering with our senior social media strategists</strong> provides your enterprise with the creative distinction and data-driven leverage required to dominate your market. Explore our performance-first digital philosophy on our <Link href="/about" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">about us</Link> page.
        </p>

        <h3 id="wall-street-midtown-b2b-linkedin-executive-thought-leadership" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          B2B Executive Thought Leadership and LinkedIn ABM for Wall Street and Midtown
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Operating within New York&apos;s primary financial corridors</strong> demands an authoritative, high-trust approach to digital communication. C-suite executives, private equity partners, hedge fund managers, and enterprise procurement directors actively utilize <a href="https://business.linkedin.com/marketing-solutions" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">LinkedIn</a> to evaluate strategic service partners, absorb macroeconomic analysis, and discover market opportunities. We architect comprehensive B2B executive positioning frameworks that elevate your leadership team into recognized industry authorities across fintech, asset management, corporate law, and management consulting. Our specialized copywriters craft rigorous whitepapers, market commentary, executive ghostwritten articles, and bespoke data visualizations that articulate your corporate perspective with intellectual precision. To accelerate high-value institutional deal flow, we pair organic thought leadership with hyper-targeted Account-Based Marketing (ABM) paid campaigns that reach verified decision-makers across Fortune 500 enterprises and institutional investment funds. <strong className="font-semibold text-[#de5e18] tracking-tight">Our enterprise B2B social architecture</strong> systematically nurtures complex multi-stakeholder buying committees across prolonged sales cycles, turning digital impressions into qualified corporate relationships. To ensure your social campaigns drive high-intent traffic to resilient, high-speed conversion platforms, explore our enterprise <Link href="/services/web-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">web development</Link> solutions.
        </p>

        <h3 id="soho-madison-avenue-luxury-fashion-and-social-commerce" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Luxury Social Commerce and High-Converting Visual Campaigns for SoHo and Madison Avenue
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">New York stands as the global epicentre of fashion, luxury, and direct-to-consumer commerce</strong>, anchored by prestigious retail flagships along Madison Avenue, Fifth Avenue, SoHo, and the Meatpacking District. Modern consumer purchasing behaviors across the metropolitan area have transformed into social-first product discovery journeys, where affluent buyers make instantaneous purchase decisions directly within visual feeds. We engineer seamless social commerce architectures across Instagram Shopping, Facebook Shop, and TikTok Shop, integrating natively with enterprise e-commerce platforms such as <a href="https://www.shopify.com/plus" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Shopify Plus</a>. Our creative studio produces high-definition shoppable video reels, editorial lookbooks, and interactive product showcases that capture immediate buyer intent while preserving immaculate luxury aesthetics. We configure real-time catalog synchronization, native in-app checkouts, and automated customer concierge messaging conduits that eliminate transaction friction and maximize average order value. <strong className="font-semibold text-[#de5e18] tracking-tight">Our luxury social commerce strategies</strong> transform your social channels into high-yielding digital storefronts that drive substantial online revenue and foot traffic to Manhattan boutique flagships. To refine your brand identity and establish commanding visual luxury across all marketing touchpoints, examine our bespoke <Link href="/services/branding" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">branding services</Link>.
        </p>

        <h3 id="silicon-alley-saas-user-acquisition-and-employer-branding" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Full-Funnel User Acquisition and Employer Branding for Silicon Alley Tech Scale-Ups
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">The technology ecosystem spanning Silicon Alley</strong> across Flatiron, Union Square, Chelsea, and DUMBO Brooklyn represents one of the world&apos;s most dynamic startup clusters. High-growth software ventures and venture-backed SaaS innovators require agile, full-funnel social marketing strategies to accelerate product adoption and cultivate loyal user communities. We execute multi-platform user acquisition funnels across LinkedIn, X (Twitter), YouTube, and short-form video channels, optimizing campaigns for qualified free trial activations, product demos, and annual recurring revenue. Our creative teams craft interactive product walkthroughs, architectural breakdowns, and developer-oriented tutorials that clearly communicate complex technical value propositions to software engineers and enterprise IT decision-makers. In addition to customer acquisition, we design compelling employer branding campaigns on social channels to help New York tech scale-ups attract and recruit elite engineering, artificial intelligence, and product management talent. <strong className="font-semibold text-[#de5e18] tracking-tight">Our agile social growth campaigns</strong> significantly decrease customer acquisition costs while building passionate developer communities that champion your software platform. If your SaaS platform requires dedicated native mobile applications, discover our specialized <Link href="/services/app-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">app development services</Link>.
        </p>

        <h3 id="sec-finra-and-ftc-regulatory-compliance-governance" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          SEC Marketing Rule, FINRA Rule 2210, and FTC Disclosure Governance
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Executing commercial social media campaigns for New York enterprises</strong> demands uncompromising adherence to rigorous statutory guidelines and advertising standards. For registered investment advisers, wealth managers, and fintech platforms, our content workflows incorporate the strict requirements established by the <a href="https://www.sec.gov/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Securities and Exchange Commission (SEC)</a> under the modernized Marketing Rule (Rule 206(4)-1). We implement rigorous compliance protocols aligned with <a href="https://www.finra.org/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">FINRA</a> Rule 2210 governing communications with the public, ensuring that all published commentary, performance claims, and testimonials are balanced, substantiated, and fully documented. For creator partnerships and influencer endorsements, we enforce strict compliance with the <a href="https://www.ftc.gov/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Federal Trade Commission (FTC)</a> Guides Concerning the Use of Endorsements and Testimonials, mandating clear and conspicuous disclosures across every sponsored post. We establish enterprise approval hierarchies, immutable audit logs, and automated brand safety filters that protect your organization from regulatory penalties and reputational exposure. <strong className="font-semibold text-[#de5e18] tracking-tight">Our comprehensive regulatory governance</strong> guarantees that your social media campaigns expand reach and drive revenue while remaining fully compliant with state and federal oversight.
        </p>

        <h3 id="five-borough-demographics-and-mta-commuter-targeting" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Hyper-Targeted Five-Borough Demographics and MTA Commuter Engagement
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">With a population exceeding 8.3 million residents across five distinct boroughs</strong>, New York City represents one of the most culturally diverse and economically complex demographic landscapes in the world. A generic, broad-brush digital campaign cannot effectively engage the distinct consumer mindsets found across Manhattan, Brooklyn, Queens, Staten Island, and the Bronx. We architect hyper-segmented social ad sets utilizing precise geographical radii, zip-code parameters, demographic profiles, and contextual interests to deliver tailored messaging to specific New York sub-markets. We optimize campaign distribution schedules around the daily rhythm of the <a href="https://new.mta.info/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Metropolitan Transportation Authority (MTA)</a> subway, Metro-North Railroad, Long Island Rail Road (LIRR), and PATH commutes, capturing peak mobile engagement windows during morning and evening transit hours. Our strategists design culturally resonant visual assets and localized copy that reflect regional events, retail seasonality, and New York lifestyle preferences. <strong className="font-semibold text-[#de5e18] tracking-tight">Our localized demographic segmentation</strong> maximizes advertising efficiency, ensuring every dollar of your marketing budget targets verified, high-intent prospects across the Tri-State area. To reinforce your social campaigns with dominant organic visibility on search engines, examine our results-driven <Link href="/services/seo" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">SEO services</Link>.
        </p>

        <h3 id="cinematic-short-form-video-and-nyc-creator-networks" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Cinematic Short-Form Video Production and Vetted New York Creator Networks
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Modern social media algorithms</strong> across <a href="https://www.facebook.com/business/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Meta</a> platforms, <a href="https://www.tiktok.com/business/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">TikTok</a>, and YouTube Shorts heavily prioritize vertical, high-retention video content over static imagery. Our in-house creative production studio oversees the complete production lifecycle, from concept ideation and narrative scripting to professional cinematography across iconic New York architectural landmarks, urban streets, and dedicated studio spaces. We craft dynamic video assets engineered with potent psychological hooks in the opening two seconds, securing high completion rates and unlocking algorithmic distribution spikes. In tandem with studio-produced assets, we curate and manage high-impact creator partnerships, connecting your brand with thoroughly vetted New York creators whose authentic followings match your exact buyer personas. We administer all influencer contracting, usage licensing, FTC compliance verification, and performance benchmarking, ensuring every collaborative campaign yields genuine social proof and quantifiable commercial reach. <strong className="font-semibold text-[#de5e18] tracking-tight">Our studio-grade video production and creator management</strong> elevate brand perception while supplying a continuous flow of viral-ready creative assets for paid and organic distribution.
        </p>

        <h3 id="enterprise-attribution-server-side-capi-and-roi" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Enterprise Multi-Touch Attribution, Server-Side CAPI, and Transparent ROI
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Corporate marketing leaders cannot justify capital allocation</strong> through superficial vanity metrics such as follower counts and generic impressions. At Southern Edge Marketing, we deploy advanced full-funnel tracking architectures and server-side Conversions API (CAPI) integrations compliant with the New York SHIELD Act and federal data privacy standards. We implement sophisticated multi-touch attribution models that clearly demonstrate how social interactions across LinkedIn, Meta, and TikTok influence pipeline creation, deal velocity, and lifetime customer value. Our media planners continually execute algorithmic bid optimization, creative split-testing, and audience hygiene to systematically decrease Customer Acquisition Cost (CAC) and maximize Return on Ad Spend (ROAS). Every client partnership is backed by custom real-time reporting dashboards and monthly executive strategy reviews, providing complete transparency into commercial performance. <strong className="font-semibold text-[#de5e18] tracking-tight">When you are prepared to scale your brand with the leading social media management company in New York</strong>, <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">contact our social media strategists</Link> to schedule an initial consultation.
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
                &quot;Southern Edge Marketing transformed our institutional B2B social strategy across LinkedIn and digital channels. Their executive thought leadership campaigns and strict adherence to SEC and FINRA compliance guidelines positioned our fund directly before family offices and institutional allocators, driving a 58% increase in qualified LP inquiries within six months.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Marcus Sterling" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Marcus Sterling</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Hudson Bay Capital Management (Financial District, New York)</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                &quot;Scaling an omnichannel luxury fashion house out of SoHo requires flawless visual storytelling and frictionless social commerce. Southern Edge produced stunning short-form video campaigns and seamlessly integrated our product catalog with Instagram Shopping and TikTok Shop, delivering an exceptional 5.2x return on ad spend and driving record foot traffic to our Mercer Street flagship.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Elena Rostova" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Elena Rostova</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Mercer &amp; Madison Luxury Goods (SoHo, New York)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FaqAccordion faqs={[
          {
            "question": "How do you ensure social media marketing campaigns comply with SEC Marketing Rule and FINRA regulations in New York?",
            "answer": "We develop compliance-first social media marketing workflows adhering strictly to SEC Rule 206(4)-1 (the modernized Marketing Rule) and FINRA Rule 2210. All creative assets, executive commentary, and targeting parameters undergo rigorous multi-tier compliance reviews to ensure performance claims are substantiated, risk disclosures are prominent, and testimonials include required regulatory disclosures. We also maintain immutable audit archives of all published content to satisfy institutional record-keeping mandates."
          },
          {
            "question": "Which social media platforms deliver the highest ROI for New York B2B enterprises compared to luxury consumer brands?",
            "answer": "For B2B enterprises, wealth management firms, and SaaS scale-ups located in Wall Street, Midtown, or Silicon Alley, LinkedIn and X (Twitter) provide the highest return on investment through executive thought leadership, content syndication, and Account-Based Marketing (ABM). For luxury retail, direct-to-consumer, and hospitality brands across SoHo, Madison Avenue, and the Meatpacking District, Meta (Instagram and Facebook) and TikTok deliver superior acquisition results through cinematic short-form video, shoppable product catalogs, and vetted creator partnerships."
          },
          {
            "question": "How does your agency manage influencer marketing and creator compliance under FTC guidelines?",
            "answer": "We manage the entire creator collaboration lifecycle in strict alignment with Federal Trade Commission (FTC) Guides Concerning the Use of Endorsements and Testimonials. We thoroughly vet every influencer for authentic audience engagement, execute legally binding compliance agreements, and mandate clear, conspicuous disclosure identifiers (such as #ad or #sponsored) on all collaborative content. This systematic oversight ensures absolute commercial transparency while safeguarding your brand against regulatory sanctions."
          },
          {
            "question": "Can your team tailor social advertising campaigns to specific New York boroughs and MTA commuter patterns?",
            "answer": "Yes. New York City presents distinct demographic and lifestyle profiles across Manhattan, Brooklyn, Queens, Staten Island, and the Bronx. We construct hyper-localized audience clusters utilizing precise zip-code targeting and synchronize ad delivery with Metropolitan Transportation Authority (MTA) commuter peak hours on the subway, LIRR, Metro-North, and PATH trains. This mobile-first timing strategy captures user attention during high-engagement morning and evening transit windows."
          },
          {
            "question": "Do you produce short-form video assets and photography on-location in New York City?",
            "answer": "Yes. We operate a full-service creative production studio staffed by professional cinematographers, directors, video editors, and motion designers. We handle the complete production workflow, including concept scripting, on-location shooting across iconic New York architectural backdrops and commercial corridors, dedicated studio sessions, color grading, and platform-specific audio mastering for TikTok, Instagram Reels, and YouTube Shorts."
          },
          {
            "question": "How do you integrate social commerce storefronts with enterprise e-commerce platforms like Shopify Plus?",
            "answer": "We build and optimize native social shopping channels, including Instagram Shop, Facebook Shop, and TikTok Shop, integrating them directly with your Shopify Plus, Salesforce Commerce Cloud, or custom Next.js e-commerce architecture. We configure automated catalog synchronization, set up native in-app checkouts, and integrate frictionless payment options like Apple Pay, Google Pay, Klarna, and Affirm to create a seamless purchasing journey from social discovery to conversion."
          },
          {
            "question": "How do you measure and report commercial ROI while complying with New York data privacy standards?",
            "answer": "We implement advanced first-party tracking architectures utilizing server-side Conversions API (CAPI) and Google Analytics 4, fully aligned with the New York SHIELD Act and federal privacy frameworks. We track concrete business outcomes such as Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), Cost Per Lead (CPL), and multi-touch pipeline revenue attribution rather than superficial vanity metrics. Enterprise clients receive 24/7 access to live interactive reporting dashboards accompanied by structured monthly executive reviews."
          }
        ]} />

      </ServiceLayout>
    </div>
  );
}
