// Programmatic SEO pages for Meta Ads (cities + industries) and
// Website Development (industries). Each entry carries its own copy so
// no two pages are a city-name swap of each other.
// Inline links in paragraphs/bullets use [text](/path) syntax.

export type SeoService = "meta-ads" | "web-development";
export type SeoKind = "city" | "industry";

export interface SeoSection {
  id: string;
  h2: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface SeoPage {
  service: SeoService;
  kind: SeoKind;
  slug: string;
  label: string; // City or industry name shown in grids
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string; // used as an absolute title (no brand suffix), keep under ~60 chars
  metaDescription: string;
  h1: string;
  tagline: string;
  areaServed?: string; // for city pages
  audience?: string; // for industry pages
  sections: SeoSection[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
}

export const seoPages: SeoPage[] = [
  // ───────────────────────── META ADS · CITIES ─────────────────────────
  {
    service: "meta-ads",
    kind: "city",
    slug: "delhi",
    label: "Delhi",
    areaServed: "New Delhi",
    primaryKeyword: "meta ads agency in delhi",
    secondaryKeywords: ["facebook ads agency delhi", "instagram ads agency delhi", "meta ads management delhi ncr"],
    metaTitle: "Meta Ads Agency in Delhi | Facebook & Instagram Ads",
    metaDescription: "Delhi-based Meta Ads agency running Facebook & Instagram campaigns for leads, WhatsApp enquiries and sales. Pixel & CAPI setup. Free ad account audit.",
    h1: "Meta Ads Agency in Delhi for Leads, Enquiries and Sales",
    tagline: "Facebook and Instagram campaigns run from our Delhi office, judged on cost per lead, not reach.",
    sections: [
      {
        id: "why-delhi",
        h2: "Why Delhi Businesses Need a Different Meta Ads Approach",
        paragraphs: [
          "Delhi is one of the most crowded ad auctions in India. Restaurants in Hauz Khas, property developers selling across NCR, coaching institutes in Mukherjee Nagar and D2C brands shipping from Okhla are all bidding for the same Instagram feed. Broad targeting and boosted posts burn money fast here.",
          "We are based in Delhi and run Meta campaigns for local brands every day. That means we plan around the things that actually move cost per lead in this city: tight radius targeting around your outlet or site, Hindi and Hinglish creatives next to English ones, and lead forms that filter out time-wasters before they reach your sales team.",
        ],
      },
      {
        id: "campaigns-we-run",
        h2: "Meta Ad Campaigns We Run for Delhi Brands",
        bullets: [
          "**Lead generation:** instant forms with qualifying questions, synced to Google Sheets, your CRM or WhatsApp.",
          "**Click-to-WhatsApp ads:** for businesses that close deals in conversation, such as real estate, legal, loans and clinics.",
          "**Footfall and reservations:** radius campaigns for cafes, restaurants, salons and showrooms.",
          "**Sales and catalog campaigns:** for e-commerce and D2C stores delivering across Delhi NCR and India.",
          "**Instagram follower and awareness campaigns:** for new venues, nightlife and fashion labels that need social proof first.",
        ],
      },
      {
        id: "tracking-first",
        h2: "Tracking Before Budget: Pixel, CAPI and Lead Quality",
        paragraphs: [
          "Most Delhi ad accounts we audit are optimising for the wrong event. We set up the Meta Pixel, the Conversions API and custom conversions first, so Meta learns from real enquiries and purchases instead of cheap clicks. For lead-form campaigns we track which leads actually picked up the phone and feed that back into targeting.",
          "If your landing page is slow or confusing, ads cannot fix it. Our [website development team in Delhi](/services/web-development/delhi) builds fast landing pages made for ad traffic.",
        ],
      },
      {
        id: "ncr-coverage",
        h2: "Covering All of Delhi NCR",
        paragraphs: [
          "Your customers do not stop at the Delhi border, and neither do our campaigns. We split budgets by zone when it helps, for example South Delhi versus West Delhi, or Delhi versus [Gurgaon](/services/meta-ads/gurgaon) and [Noida](/services/meta-ads/noida), so you can see where your cheapest and best leads come from.",
        ],
      },
    ],
    faqs: [
      { question: "How much does a Meta Ads agency in Delhi charge?", answer: "Agency fees in Delhi are usually a fixed monthly retainer or a percentage of ad spend, and they are separate from what you pay Meta. We share a fixed quote after a free audit of your account and goals." },
      { question: "What daily budget works for Facebook and Instagram ads in Delhi?", answer: "Most local lead-generation campaigns in Delhi start between ₹500 and ₹2,000 per day. Highly competitive categories like real estate and education often need more to exit the learning phase quickly." },
      { question: "Do you create the ad creatives as well?", answer: "Yes. We write the copy and produce static, carousel and Reels creatives, including Hindi and Hinglish versions where they help." },
      { question: "Can you meet us in person in Delhi?", answer: "Yes. Our team is based in Delhi, so we can meet for kickoff and strategy reviews, and we report weekly in between." },
    ],
    related: [
      { label: "Best Meta ads agency in Delhi (guide)", href: "/blogs/best-meta-ads-agency-delhi" },
      { label: "Lead generation ads in Meta", href: "/blogs/lead-generation-ads-in-meta" },
      { label: "Social media marketing agency Delhi", href: "/blogs/social-media-marketing-agency-delhi" },
    ],
  },
  {
    service: "meta-ads",
    kind: "city",
    slug: "gurgaon",
    label: "Gurgaon",
    areaServed: "Gurugram",
    primaryKeyword: "meta ads agency in gurgaon",
    secondaryKeywords: ["facebook ads agency gurgaon", "instagram ads gurugram", "meta ads management gurugram"],
    metaTitle: "Meta Ads Agency in Gurgaon | Facebook & Instagram",
    metaDescription: "Meta Ads agency for Gurgaon businesses: real estate, startups, clinics and premium brands. Lead forms, WhatsApp ads, CAPI tracking. Free ad audit.",
    h1: "Meta Ads Agency in Gurgaon for High-Intent Leads",
    tagline: "Facebook and Instagram campaigns built for Gurugram's premium buyers and fast-moving startups.",
    sections: [
      {
        id: "gurgaon-market",
        h2: "Advertising to Gurugram's Audience",
        paragraphs: [
          "Gurgaon combines corporate professionals, high-income households along Golf Course Road and the Dwarka Expressway, and a dense startup scene in Cyber City and Udyog Vihar. Ad costs here run higher than in most Indian cities, but so does the value of a good customer.",
          "That changes how we build campaigns. Instead of chasing the cheapest lead, we optimise for leads that convert: longer lead forms for premium real estate, higher-intent audiences for clinics and wellness brands, and B2B-style messaging for SaaS and service startups.",
        ],
      },
      {
        id: "who-we-help",
        h2: "Gurgaon Businesses We Run Meta Ads For",
        bullets: [
          "**Real estate:** new launches and resale projects on Dwarka Expressway, Golf Course Extension and New Gurgaon, with RERA-compliant creatives. See our [real estate Meta ads](/services/meta-ads/real-estate) approach.",
          "**Startups and SaaS:** lead and demo-booking campaigns, plus retargeting of website visitors.",
          "**Clinics, gyms and wellness studios:** appointment campaigns within a few kilometres of your centre.",
          "**Restaurants, bars and cafes:** reservation and event campaigns around Cyber Hub, Sector 29 and Golf Course Road.",
        ],
      },
      {
        id: "how-we-work",
        h2: "How We Manage Your Ad Account",
        paragraphs: [
          "We start with a free audit of your current account and tracking. Then we set a target cost per qualified lead, launch two or three creative angles at once and move budget to whatever is converting. You get a weekly report with leads, cost per lead and the next tests we are running.",
          "Need a faster landing page for your campaigns? Our [Gurgaon web development team](/services/web-development/gurgaon) builds pages designed for ad traffic.",
        ],
      },
    ],
    faqs: [
      { question: "Why are Meta ad costs higher in Gurgaon?", answer: "Gurgaon has many advertisers chasing a relatively affluent audience, so the auction is more competitive. Better creative and tighter lead qualification usually matter more than raising the budget." },
      { question: "Can you target only specific sectors of Gurgaon?", answer: "Yes. Meta allows pin-drop radius targeting, so we can focus on specific sectors, societies or business districts, or exclude areas that don't convert." },
      { question: "Do you run Meta ads for real estate projects in Gurgaon?", answer: "Yes. We run lead-form and WhatsApp campaigns for residential and commercial projects and include RERA registration numbers in creatives where required." },
    ],
    related: [
      { label: "Best digital marketing company in Gurgaon", href: "/blogs/best-digital-marketing-company-gurgaon-gurugram" },
      { label: "Real estate marketing for qualified enquiries", href: "/blogs/real-estate-marketing-qualified-enquiries" },
      { label: "SEO packages and pricing in Gurgaon", href: "/blogs/seo-packages-pricing-gurgaon" },
    ],
  },
  {
    service: "meta-ads",
    kind: "city",
    slug: "noida",
    label: "Noida",
    areaServed: "Noida",
    primaryKeyword: "meta ads agency in noida",
    secondaryKeywords: ["facebook ads agency noida", "instagram ads noida", "facebook marketing noida"],
    metaTitle: "Meta Ads Agency in Noida | Facebook & Instagram Ads",
    metaDescription: "Facebook & Instagram ads for Noida and Greater Noida businesses: real estate, education, IT services and retail. Lead forms, WhatsApp ads, free audit.",
    h1: "Meta Ads Agency in Noida and Greater Noida",
    tagline: "Lead-focused Facebook and Instagram campaigns for Noida's real estate, education and service businesses.",
    sections: [
      {
        id: "noida-market",
        h2: "What Works for Meta Ads in Noida",
        paragraphs: [
          "Noida's ad market is shaped by three big categories: residential real estate along the Noida Expressway and in Greater Noida West, education and coaching, and IT and service companies hiring or selling across India. Each needs a different campaign structure.",
          "Real estate needs long lead forms and fast follow-up. Coaching needs seasonal pushes around admissions and exam calendars. Local retail and restaurants need tight radius targeting around sectors like 18, 62 and 104, because a customer in Sector 150 will rarely travel to Sector 18 for dinner.",
        ],
      },
      {
        id: "services",
        h2: "Our Meta Ads Services for Noida",
        bullets: [
          "Campaign strategy and budget plan tied to a cost-per-lead target",
          "Instant lead forms and click-to-WhatsApp campaigns",
          "Pixel, Conversions API and lead-quality tracking",
          "Hindi and English creatives, including Reels and carousels",
          "Retargeting for website visitors and Instagram engagers",
          "Weekly reporting with a named account manager",
        ],
      },
      {
        id: "education-real-estate",
        h2: "Built for Noida's Biggest Categories",
        paragraphs: [
          "We have detailed playbooks for [real estate](/services/meta-ads/real-estate) and [coaching institutes](/services/meta-ads/coaching-institutes), two of the most competitive Meta categories in Noida. Both depend on how fast your team calls a lead back, so we connect forms to WhatsApp or your CRM and set up instant alerts.",
          "Selling across NCR? We often run Noida alongside [Delhi](/services/meta-ads/delhi) and [Gurgaon](/services/meta-ads/gurgaon) campaigns and compare cost per lead by area.",
        ],
      },
    ],
    faqs: [
      { question: "Do you work with businesses in Greater Noida and Greater Noida West?", answer: "Yes. We target Noida, Greater Noida, Greater Noida West and the Yamuna Expressway belt, either together or as separate campaigns." },
      { question: "How fast will a Noida business get leads from Meta ads?", answer: "Lead-form campaigns usually bring the first leads within a few days of launch. Cost per lead tends to improve over the first two to four weeks as we test creatives and audiences." },
      { question: "Can you run admission campaigns for coaching centres in Noida?", answer: "Yes. We plan admission campaigns around your batch dates and exam calendar, and follow Meta's rules on education and personal-attribute ads." },
    ],
    related: [
      { label: "Lead generation ads in Meta", href: "/blogs/lead-generation-ads-in-meta" },
      { label: "Meta ads for business scaling", href: "/blogs/meta-ads-for-business-scaling-guide" },
    ],
  },
  {
    service: "meta-ads",
    kind: "city",
    slug: "mumbai",
    label: "Mumbai",
    areaServed: "Mumbai",
    primaryKeyword: "meta ads agency in mumbai",
    secondaryKeywords: ["facebook ads agency mumbai", "instagram ads agency mumbai", "performance marketing agency mumbai"],
    metaTitle: "Meta Ads Agency in Mumbai | Facebook & Instagram",
    metaDescription: "Meta Ads agency for Mumbai's D2C, fashion, real estate and hospitality brands. ROAS-focused Facebook & Instagram campaigns with CAPI tracking.",
    h1: "Meta Ads Agency in Mumbai for D2C and Lead Generation",
    tagline: "ROAS-focused Facebook and Instagram campaigns for Mumbai's fashion, beauty, food and real estate brands.",
    sections: [
      {
        id: "mumbai-market",
        h2: "Meta Ads in India's Most Competitive Ad Market",
        paragraphs: [
          "Many of India's biggest D2C, fashion and beauty brands are run from Mumbai, which makes Instagram here crowded and expensive. Generic product shots and broad interest targeting rarely work. What works is creative volume, fast testing and clean conversion tracking.",
          "We manage Mumbai accounts remotely from Delhi with weekly calls, and we focus on the levers that matter most: creative angles, offer structure and making sure Meta can see every purchase through the Conversions API.",
        ],
      },
      {
        id: "d2c",
        h2: "For D2C, Fashion and Beauty Brands",
        bullets: [
          "Advantage+ shopping and catalog campaigns with clean product feeds",
          "UGC-style and founder-led video ads alongside studio creatives",
          "Retargeting for viewers, add-to-carts and past buyers",
          "Shopify and custom-store tracking through Pixel and CAPI",
          "Reporting on blended ROAS and new-customer revenue, not only platform ROAS",
        ],
        paragraphs: [
          "See our detailed approach for [fashion brands](/services/meta-ads/fashion-brands) and [D2C e-commerce](/services/meta-ads/d2c-ecommerce).",
        ],
      },
      {
        id: "lead-gen",
        h2: "For Real Estate and Service Businesses",
        paragraphs: [
          "Mumbai real estate buyers search across a huge geography, from the western suburbs to Thane and Navi Mumbai. We separate campaigns by micro-market and budget band so a buyer looking at a 1 BHK in Thane doesn't land on a sea-facing launch in Worli. Lead forms include budget and timeline questions so your sales team can prioritise.",
        ],
      },
    ],
    faqs: [
      { question: "Can a Delhi-based agency run Meta ads for a Mumbai business?", answer: "Yes. Meta Ads are managed entirely online. We run campaigns for clients across India and the UAE, with weekly video calls and shared dashboards." },
      { question: "What ROAS should a Mumbai D2C brand expect from Meta ads?", answer: "It depends heavily on price point, margin and repeat rate. We set a break-even ROAS with you first, then scale only campaigns that clear it." },
      { question: "Do you produce ad creatives for Mumbai brands?", answer: "Yes. We script and design static, carousel and video ads, and can coordinate UGC creators when the brand needs them." },
    ],
    related: [
      { label: "Maximise ROAS on Meta ads in 2026", href: "/blogs/maximize-roas-on-meta-ads-2026" },
      { label: "Web development in Mumbai", href: "/services/web-development/mumbai" },
    ],
  },
  {
    service: "meta-ads",
    kind: "city",
    slug: "bengaluru",
    label: "Bengaluru",
    areaServed: "Bengaluru",
    primaryKeyword: "meta ads agency in bangalore",
    secondaryKeywords: ["facebook ads agency bangalore", "instagram ads bengaluru", "meta ads for startups bangalore"],
    metaTitle: "Meta Ads Agency in Bangalore | Facebook & Instagram",
    metaDescription: "Meta Ads for Bengaluru startups, D2C brands and local businesses. Facebook & Instagram campaigns with CAPI tracking and weekly testing. Free audit.",
    h1: "Meta Ads Agency in Bangalore for Startups and D2C Brands",
    tagline: "Facebook and Instagram campaigns built around data, experiments and unit economics.",
    sections: [
      {
        id: "bengaluru-market",
        h2: "Meta Ads for Bengaluru's Startup Economy",
        paragraphs: [
          "Bengaluru founders tend to ask harder questions about marketing: what is the CAC, what is the payback period, how do we know this campaign caused the sale? We like that. Our campaigns are set up so you can answer those questions from day one.",
          "Typical Bengaluru accounts we manage include consumer apps, D2C food and wellness brands, ed-tech, and local businesses in Indiranagar, Koramangala and HSR Layout that need footfall and bookings.",
        ],
      },
      {
        id: "what-we-do",
        h2: "What We Set Up",
        bullets: [
          "Conversion tracking with Pixel, Conversions API and, for apps, your MMP events",
          "Separate prospecting and retargeting budgets so you can see true new-customer cost",
          "Creative testing frameworks: hooks, formats and offers tested in parallel",
          "English and Kannada creatives when the audience calls for it",
          "Weekly reporting on CPL, CAC and ROAS against agreed targets",
        ],
      },
      {
        id: "landing-pages",
        h2: "Landing Pages That Convert Ad Traffic",
        paragraphs: [
          "Startups often send Meta traffic to a homepage built for investors. We build dedicated, fast landing pages for each campaign with our [Bengaluru web development team](/services/web-development/bengaluru), and test them the same way we test ads.",
        ],
      },
    ],
    faqs: [
      { question: "Do you work with early-stage startups in Bangalore?", answer: "Yes. For early-stage teams we start with a smaller test budget to find a working audience and message before scaling." },
      { question: "Can you run app install campaigns on Meta?", answer: "Yes. We run app install and app event campaigns and connect Meta with your mobile measurement partner so we optimise for real in-app actions." },
      { question: "Do you need to be in Bangalore to run our ads?", answer: "No. We are based in Delhi and manage Bengaluru accounts remotely with weekly calls and shared dashboards." },
    ],
    related: [
      { label: "Website development for startups", href: "/services/web-development/startups" },
      { label: "Google Ads vs Meta Ads ROI guide", href: "/blogs/google-ads-vs-meta-ads-roi-guide" },
    ],
  },
  {
    service: "meta-ads",
    kind: "city",
    slug: "dubai",
    label: "Dubai",
    areaServed: "Dubai",
    primaryKeyword: "meta ads agency in dubai",
    secondaryKeywords: ["facebook ads agency dubai", "instagram ads agency dubai", "meta ads management uae"],
    metaTitle: "Meta Ads Agency in Dubai | Facebook & Instagram UAE",
    metaDescription: "Meta Ads agency in Dubai for real estate, e-commerce, hospitality and services. Multilingual Facebook & Instagram campaigns, CAPI tracking, free audit.",
    h1: "Meta Ads Agency in Dubai for Leads and E-commerce Sales",
    tagline: "Multilingual Facebook and Instagram campaigns for UAE businesses, managed by our Dubai and Delhi team.",
    sections: [
      {
        id: "dubai-market",
        h2: "Running Meta Ads for Dubai's Multilingual Audience",
        paragraphs: [
          "Dubai is unusual: one city, many audiences. A single campaign may need English, Arabic, Hindi, Urdu or Russian creatives depending on who is buying. Purchasing power is high and ad costs follow, so wasted impressions get expensive quickly.",
          "We split campaigns by language and audience, test creatives built for each group, and track results by nationality-relevant segments where Meta allows it. For many UAE businesses this alone brings cost per lead down noticeably.",
        ],
      },
      {
        id: "industries",
        h2: "UAE Industries We Run Meta Ads For",
        bullets: [
          "**Real estate:** off-plan and ready property campaigns, with the required permit details in the ad. See [real estate Meta ads](/services/meta-ads/real-estate).",
          "**E-commerce and Shopify brands:** catalog and Advantage+ campaigns paired with our [Shopify agency in Dubai](/services/shopify-agency-dubai).",
          "**Hospitality:** restaurants, beach clubs, hotels and holiday homes. See our [hotel Meta ads](/services/meta-ads/hotels) approach.",
          "**Clinics and beauty:** appointment campaigns that follow Meta's health advertising rules.",
        ],
      },
      {
        id: "budgets",
        h2: "Budgets and Reporting in AED",
        paragraphs: [
          "Most UAE lead-generation campaigns we launch start around AED 100–300 per day in ad spend, plus our management fee. We report in AED, set targets for cost per lead or ROAS, and send a weekly summary with what we're testing next.",
          "For a deeper look at costs, read our [Meta ads cost guide for Dubai and the UAE](/blogs/meta-ads-cost-dubai-uae-2026-budget).",
        ],
      },
    ],
    faqs: [
      { question: "Do you run Arabic Meta ads in Dubai?", answer: "Yes. We create Arabic versions of ads and lead forms where the audience calls for them, alongside English and other languages." },
      { question: "Do property ads in Dubai need a permit?", answer: "Property advertising in Dubai is regulated, and ads generally need to show the relevant permit details. We build this into creatives and check with you before launch." },
      { question: "Can you target all seven emirates?", answer: "Yes. We can run Dubai-only campaigns or include Abu Dhabi, Sharjah and the northern emirates, and compare results by emirate." },
    ],
    related: [
      { label: "Meta ads cost in Dubai & UAE", href: "/blogs/meta-ads-cost-dubai-uae-2026-budget" },
      { label: "Real estate advertising companies in Dubai", href: "/blogs/real-estate-advertising-companies-dubai" },
      { label: "Web development in Dubai", href: "/services/web-development/dubai" },
    ],
  },

  // ───────────────────────── META ADS · INDUSTRIES ─────────────────────────
  {
    service: "meta-ads",
    kind: "industry",
    slug: "real-estate",
    label: "Real Estate",
    audience: "Real estate developers, brokers and channel partners",
    primaryKeyword: "meta ads for real estate",
    secondaryKeywords: ["facebook ads for real estate", "facebook lead ads for real estate", "meta ads for estate agents", "real estate lead generation facebook"],
    metaTitle: "Meta Ads for Real Estate | Facebook Property Leads",
    metaDescription: "Facebook & Instagram lead ads for real estate developers, brokers and channel partners in India and the UAE. Qualified site-visit leads, CRM sync.",
    h1: "Meta Ads for Real Estate: Site-Visit Leads, Not Junk Enquiries",
    tagline: "Facebook and Instagram lead campaigns for developers, brokers and channel partners in India and the UAE.",
    sections: [
      {
        id: "problem",
        h2: "Why Most Real Estate Facebook Ads Bring Junk Leads",
        paragraphs: [
          "Real estate is one of the biggest spenders on Meta, and also one of the biggest sources of complaints about lead quality. The usual causes are the same: one-tap forms with no qualifying questions, the same creative shown to every buyer, and leads that wait hours for a call back.",
          "We fix all three. Our forms ask about budget, configuration and timeline. Creatives are split by buyer type, such as end-user versus investor. Leads are pushed to your CRM or WhatsApp within seconds so your team can call while the buyer is still interested.",
        ],
      },
      {
        id: "campaign-structure",
        h2: "Campaign Structure That Works for Property",
        bullets: [
          "**Launch phase:** awareness and video-view campaigns to build retargeting audiences before the EOI window opens.",
          "**Lead phase:** higher-intent lead forms and click-to-WhatsApp ads for floor plans, price sheets and site visits.",
          "**Retargeting:** people who watched walkthrough videos, opened forms or visited your project page.",
          "**Channel-partner campaigns:** separate audiences and messaging when you also want brokers to sell your inventory.",
        ],
      },
      {
        id: "compliance",
        h2: "Compliance: RERA, Permits and Special Ad Categories",
        paragraphs: [
          "In India, project ads should carry the RERA registration number. In Dubai, property ads generally need the relevant permit details. Depending on the market, Meta may also require a housing special ad category, which limits targeting by age, gender and postcode. We plan creative and audience strategy around these rules so your account stays healthy.",
        ],
      },
      {
        id: "proof",
        h2: "Results We Optimise For",
        paragraphs: [
          "We report on cost per lead, but we optimise for cost per site visit, because that is what your sales team values. When you share call outcomes with us, we feed qualified leads back into Meta so the algorithm finds more buyers like them.",
          "Need a project microsite that converts? Our [real estate website development](/services/web-development/real-estate) team builds fast project pages with floor plans and lead capture.",
        ],
      },
    ],
    faqs: [
      { question: "What is a good cost per lead for real estate Meta ads in India?", answer: "It varies widely by city, ticket size and form length. Premium projects in NCR and Mumbai naturally cost more per lead than mid-segment projects. We agree a target cost per qualified lead and site visit with you before launch." },
      { question: "Should we use lead forms or a landing page?", answer: "Lead forms usually bring more volume at a lower cost; landing pages usually bring fewer but more serious leads. We often run both and compare cost per site visit." },
      { question: "Do you run Meta ads for brokers and channel partners?", answer: "Yes. We work with developers, brokerages and individual channel partners, and set up campaigns so you own the ad account and leads." },
      { question: "Can you run property ads for NRI buyers?", answer: "Yes. We can target Indians living in the UAE, UK, USA and other markets, with time-zone-friendly follow-up through WhatsApp." },
    ],
    related: [
      { label: "Meta ads lead generation for real estate", href: "/blogs/meta-ads-lead-generation-real-estate" },
      { label: "Real estate marketing agency guide", href: "/blogs/real-estate-marketing-agency-guide" },
      { label: "Real estate marketing for qualified enquiries", href: "/blogs/real-estate-marketing-qualified-enquiries" },
    ],
  },
  {
    service: "meta-ads",
    kind: "industry",
    slug: "restaurants",
    label: "Restaurants & Cafes",
    audience: "Restaurants, cafes, bars and cloud kitchens",
    primaryKeyword: "meta ads for restaurants",
    secondaryKeywords: ["facebook ads for restaurants", "instagram ads for cafes", "restaurant marketing agency", "instagram marketing for restaurants"],
    metaTitle: "Meta Ads for Restaurants & Cafes | Instagram Ads",
    metaDescription: "Instagram & Facebook ads for restaurants, cafes, bars and cloud kitchens. Reservations, footfall, catering leads and followers in your delivery radius.",
    h1: "Meta Ads for Restaurants, Cafes and Bars",
    tagline: "Instagram and Facebook campaigns that fill tables, drive orders and grow followers who actually live nearby.",
    sections: [
      {
        id: "goals",
        h2: "Pick the Right Goal for Each Campaign",
        paragraphs: [
          "A restaurant rarely has one marketing goal. A new opening needs local followers and buzz. A weekday lunch slot needs footfall. A private dining room needs catering and party enquiries. Running all of this as one boosted post is the most common mistake we see.",
          "We give each goal its own campaign, budget and creative, so you can see what a reservation, a follower or a catering lead actually costs you.",
        ],
      },
      {
        id: "campaigns",
        h2: "Restaurant Campaigns We Run",
        bullets: [
          "**Local follower growth:** radius-targeted Reels so new followers are people who can visit.",
          "**Reservations and footfall:** offers and event ads pointing to your booking link, WhatsApp or call button.",
          "**Catering and private-party leads:** lead forms for corporate lunches, birthdays and weddings.",
          "**Delivery orders:** ads that point to your own ordering page or your delivery app listings.",
          "**Events and nightlife:** ladies' nights, live music and DJ nights promoted to the right age band and area.",
        ],
      },
      {
        id: "creative",
        h2: "Food Creative That Stops the Scroll",
        paragraphs: [
          "Food is visual, but polished menu photos alone rarely win on Instagram any more. We mix chef and kitchen moments, guest reactions, short dish reveals and clear offers. Creatives are refreshed every two to three weeks, before ad fatigue raises your costs.",
          "We've worked on hospitality brands such as [Farzi Cafe](/projects/farzi-cafe), [Bo-Tai](/projects/botai) and [Delhi House Cafe](/projects/delhi-house). For your website and menu, see [restaurant website development](/services/web-development/restaurants).",
        ],
      },
    ],
    faqs: [
      { question: "How much should a restaurant spend on Instagram ads?", answer: "Many single-outlet restaurants in Indian metros start with ₹300–₹1,000 per day split across one or two goals. Multi-outlet brands usually set budgets per outlet." },
      { question: "Can Meta ads increase Zomato or Swiggy orders?", answer: "Yes, ads can drive people to your delivery listings, but you can't track those orders inside Meta. We usually recommend also promoting your own ordering or WhatsApp channel, which you can track and which saves commission." },
      { question: "Do you also manage our restaurant's Instagram page?", answer: "Yes. Our social media management team can run your organic content while we run paid campaigns, so both use the same calendar and creative." },
    ],
    related: [
      { label: "Meta ads for restaurants guide", href: "/blogs/meta-ads-for-restaurants-guide" },
      { label: "Meta ads for restaurants, cafes & nightclubs", href: "/blogs/meta-ads-for-restaurant-cafe-nightclub" },
      { label: "Onboard on Swiggy, Zomato & EazyDiner", href: "/blogs/onboard-restaurant-swiggy-zomato-eazydiner" },
    ],
  },
  {
    service: "meta-ads",
    kind: "industry",
    slug: "hotels",
    label: "Hotels & Homestays",
    audience: "Hotels, resorts, homestays and villas",
    primaryKeyword: "meta ads for hotels",
    secondaryKeywords: ["facebook ads for hotels", "instagram ads for homestays", "hotel digital marketing agency", "direct booking ads for hotels"],
    metaTitle: "Meta Ads for Hotels & Homestays | Direct Bookings",
    metaDescription: "Facebook & Instagram ads for hotels, resorts, homestays and villas. Grow direct bookings and WhatsApp enquiries, reduce OTA dependence. Free audit.",
    h1: "Meta Ads for Hotels, Resorts and Homestays",
    tagline: "Instagram and Facebook campaigns that bring direct bookings and WhatsApp enquiries, not just more OTA traffic.",
    sections: [
      {
        id: "direct-bookings",
        h2: "Win More Direct Bookings",
        paragraphs: [
          "Every booking through an OTA costs a hotel a sizeable commission. Instagram is where travellers discover stays, save posts and plan trips weeks in advance, which makes it the natural place to build demand you own.",
          "We run campaigns that send interested travellers to your booking engine or straight into a WhatsApp conversation with your front desk, then retarget people who browsed but didn't book.",
        ],
      },
      {
        id: "audiences",
        h2: "Reaching Travellers Before They Book",
        bullets: [
          "**Feeder-city targeting:** for a hill-station homestay, that may be Delhi NCR and Chandigarh; for a Goa villa, Mumbai, Pune and Bengaluru.",
          "**Seasonal pushes:** long weekends, summer holidays and festive season, planned in advance.",
          "**Regional-language creatives:** Hindi, Punjabi, Marathi or Tamil videos when your guests come from one region.",
          "**Follower growth:** building an Instagram audience that brings repeat stays and referrals.",
          "**Retargeting:** website visitors, video viewers and past guests with new offers.",
        ],
      },
      {
        id: "creative",
        h2: "Creative That Sells the Stay",
        paragraphs: [
          "The best-performing hotel ads usually show the experience, not the room: the view from the balcony, breakfast on the deck, the walk to the river. We shoot or edit short Reels around these moments and test them against offer-led ads.",
          "Your website matters as much as your ads. See [hotel website development](/services/web-development/hotels) for booking-engine integration and fast, image-heavy pages.",
        ],
      },
    ],
    faqs: [
      { question: "Can Meta ads really reduce OTA dependence?", answer: "They can shift part of your bookings to direct, especially from repeat and nearby guests. Most properties keep OTAs for reach and use Meta to grow the direct share over time." },
      { question: "Do you work with single homestays or only hotel chains?", answer: "Both. We run campaigns for single villas and homestays as well as multi-property groups." },
      { question: "Can you track bookings made on our booking engine?", answer: "Usually yes. Most booking engines support the Meta Pixel or a conversion tag; we set this up and verify that bookings are recorded." },
    ],
    related: [
      { label: "Meta ads for business scaling", href: "/blogs/meta-ads-for-business-scaling-guide" },
      { label: "Social media management", href: "/services/social-media-management" },
    ],
  },
  {
    service: "meta-ads",
    kind: "industry",
    slug: "fashion-brands",
    label: "Fashion & Clothing Brands",
    audience: "Fashion, clothing and jewellery brands",
    primaryKeyword: "meta ads for fashion brands",
    secondaryKeywords: ["facebook ads for clothing brand", "instagram ads for clothing brand", "fashion performance marketing agency"],
    metaTitle: "Meta Ads for Fashion & Clothing Brands",
    metaDescription: "Instagram & Facebook ads for fashion, clothing and jewellery brands. Catalog ads, Advantage+ shopping, UGC creatives and seasonal collection launches.",
    h1: "Meta Ads for Fashion and Clothing Brands",
    tagline: "Instagram-first campaigns for collection launches, catalog sales and repeat customers.",
    sections: [
      {
        id: "fashion-meta",
        h2: "Why Fashion Lives and Dies on Instagram",
        paragraphs: [
          "For most fashion labels in India and the UAE, Instagram is the shop window, and Meta ads decide who sees it. Fashion has thin margins on discounts, high return rates and short seasons, so campaigns have to be built around profit, not just revenue.",
          "We run fashion accounts with a clear split: launch campaigns for new collections, always-on catalog campaigns for best-sellers, and retargeting for people who viewed or carted products.",
        ],
      },
      {
        id: "what-we-run",
        h2: "What We Run for Fashion Brands",
        bullets: [
          "Advantage+ shopping and catalog campaigns with clean, well-tagged product feeds",
          "Collection launches timed to festive, wedding and winter seasons",
          "UGC, try-on and styling videos alongside studio shoots",
          "Instagram profile and follower campaigns for newer labels",
          "Separate targeting for India and international customers when you ship abroad",
        ],
      },
      {
        id: "store",
        h2: "Your Store Is Part of the Campaign",
        paragraphs: [
          "Slow product pages and confusing size guides kill fashion conversion rates. We often pair ad management with a store review by our [Shopify team](/services/shopify-agency-dubai) or our [e-commerce website developers](/services/web-development/ecommerce).",
          "Fashion work in our portfolio includes [Limitless Clothing](/projects/limitless-clothing) and [Mama Jama](/projects/mama-jama).",
        ],
      },
    ],
    faqs: [
      { question: "What ROAS is good for a fashion brand on Meta?", answer: "There's no single number; it depends on your margins, average order value and return rate. We calculate your break-even ROAS first and treat anything above it as scalable." },
      { question: "Do you need a product catalog to run fashion ads?", answer: "Not to start, but a connected catalog unlocks dynamic product ads and retargeting, which usually perform well for clothing brands. We can set it up from Shopify or a custom store." },
      { question: "Can you run ads for a new label with no sales history?", answer: "Yes. We usually start with follower and engagement campaigns plus a small conversion test, then scale what works." },
    ],
    related: [
      { label: "Top 15 Shopify clothing stores in India", href: "/blogs/top-15-shopify-clothing-stores-in-india" },
      { label: "Shopify for luxury fashion brands in Dubai", href: "/blogs/shopify-for-luxury-fashion-brands-dubai" },
    ],
  },
  {
    service: "meta-ads",
    kind: "industry",
    slug: "d2c-ecommerce",
    label: "D2C & E-commerce",
    audience: "D2C and e-commerce brands",
    primaryKeyword: "meta ads agency for d2c brands",
    secondaryKeywords: ["facebook ads for ecommerce", "meta ads for shopify store", "d2c performance marketing agency india"],
    metaTitle: "Meta Ads Agency for D2C & E-commerce Brands",
    metaDescription: "Meta Ads for D2C and Shopify brands: catalog ads, Advantage+ shopping, CAPI tracking and creative testing tied to your break-even ROAS. Free audit.",
    h1: "Meta Ads Agency for D2C and E-commerce Brands",
    tagline: "Scale Facebook and Instagram sales profitably, with tracking you can trust.",
    sections: [
      {
        id: "profit",
        h2: "Scaling on Profit, Not Platform ROAS",
        paragraphs: [
          "Meta's reported ROAS often looks better than reality, because it counts some sales that would have happened anyway. For a D2C brand that matters: scaling on inflated numbers can quietly lose money.",
          "We set a break-even ROAS from your margins, shipping and return costs, then compare Meta's numbers with your store data every week. Budget only moves up on campaigns that clear the bar in both.",
        ],
      },
      {
        id: "system",
        h2: "Our D2C Meta Ads System",
        bullets: [
          "**Tracking:** Pixel and Conversions API on Shopify or custom stores, with event deduplication checked.",
          "**Account structure:** fewer, larger campaigns so the algorithm has enough data to learn.",
          "**Creative engine:** new hooks, formats and offers tested every week.",
          "**Catalog:** clean product feed with sets for best-sellers, new arrivals and high-margin products.",
          "**Retention:** retargeting and post-purchase campaigns to grow repeat orders.",
        ],
      },
      {
        id: "regional",
        h2: "Selling Beyond the Metros",
        paragraphs: [
          "Many D2C brands now grow fastest outside the big six cities. We test regional targeting, COD versus prepaid offers, and regional-language creatives to find where your cheapest customers are.",
          "If your store is holding back conversion, our [e-commerce website development](/services/web-development/ecommerce) team can help.",
        ],
      },
    ],
    faqs: [
      { question: "What monthly ad spend do you need for D2C Meta ads?", answer: "Brands can test from around ₹50,000–₹1,00,000 per month in ad spend. Scaling usually needs more, and we'll recommend a budget after reviewing your margins and current data." },
      { question: "Do you work with Shopify stores?", answer: "Yes. Most D2C stores we work with run on Shopify, and we also support custom-built stores." },
      { question: "Do you also run Google Ads?", answer: "Yes. Many D2C brands need both; we can manage Google Shopping and Search alongside Meta so budgets aren't fighting each other." },
    ],
    related: [
      { label: "Maximising ROAS on Meta ads", href: "/explore-more/maximizing-roas-on-meta-ads" },
      { label: "E-commerce strategies for Indian small businesses", href: "/blogs/effective-ecommerce-marketing-strategies-indian-small-businesses" },
    ],
  },
  {
    service: "meta-ads",
    kind: "industry",
    slug: "legal-services",
    label: "Legal Services",
    audience: "Legal-tech platforms and legal service providers",
    primaryKeyword: "meta ads for legal services",
    secondaryKeywords: ["facebook ads for legal services", "lead generation for legal services india", "legal notice service ads"],
    metaTitle: "Meta Ads for Legal Services & Legal-Tech",
    metaDescription: "Compliant Facebook & Instagram lead generation for legal-tech platforms and legal service providers: legal notices, documentation and recovery services.",
    h1: "Meta Ads for Legal Services and Legal-Tech Platforms",
    tagline: "Compliant lead generation for legal notices, documentation, recovery and consumer-legal services.",
    sections: [
      {
        id: "rules",
        h2: "Know the Rules First",
        paragraphs: [
          "Legal advertising in India has real limits. The Bar Council of India's rules restrict individual advocates from soliciting work or advertising their services. Legal-tech platforms, documentation services and companies offering legal processes operate differently, but their ads still need to be careful about claims and promises.",
          "We help you work out what you can advertise and how, before spending a rupee. Ads focus on the problem the customer has and the process you offer, not on guaranteed outcomes.",
        ],
      },
      {
        id: "campaigns",
        h2: "Campaigns That Work in Legal",
        bullets: [
          "Lead forms for services such as legal notices, money recovery, consumer complaints and documentation",
          "Click-to-WhatsApp ads, because many customers prefer to explain their issue in a chat",
          "Hindi and regional-language creatives for consumer-facing services",
          "Qualifying questions that screen out enquiries you can't help with",
          "CRM and Google Sheets integration so every lead gets a quick call back",
        ],
      },
      {
        id: "trust",
        h2: "Building Trust Before the Click",
        paragraphs: [
          "People are cautious when they have a legal problem. Ads that explain the process step by step, show a clear fee range and point to a professional website get better-quality leads. We built the website for [AMA Legal Solutions](/projects/ama), and our [law firm website development](/services/web-development/law-firms) team builds compliant, trustworthy sites.",
        ],
      },
    ],
    faqs: [
      { question: "Can lawyers in India run Facebook ads?", answer: "Bar Council of India rules restrict individual advocates from advertising or soliciting work. Legal-tech platforms and legal service companies have more room, but should still avoid misleading claims. Take advice on your specific setup before advertising." },
      { question: "What legal services get good results on Meta?", answer: "Consumer-facing services with a clear problem and process, such as legal notices, money recovery, documentation and consumer complaints, usually perform best." },
      { question: "How do you keep lead quality high?", answer: "We use qualifying questions in forms, clear fee and process messaging in ads, and fast follow-up through WhatsApp or your CRM." },
    ],
    related: [
      { label: "CRM for loan settlement & law firms", href: "/blogs/crm-for-loan-settlement-law-firms" },
      { label: "Lead generation ads in Meta", href: "/blogs/lead-generation-ads-in-meta" },
    ],
  },
  {
    service: "meta-ads",
    kind: "industry",
    slug: "loan-financial-services",
    label: "Loans & Financial Services",
    audience: "Loan settlement, lending and financial service companies",
    primaryKeyword: "meta ads for financial services",
    secondaryKeywords: ["facebook ads for loan leads", "loan settlement lead generation", "meta ads for fintech india"],
    metaTitle: "Meta Ads for Loan & Financial Services Leads",
    metaDescription: "Policy-compliant Facebook & Instagram lead generation for loan settlement, lending and financial service companies in India. CRM sync, lead screening.",
    h1: "Meta Ads for Loan and Financial Services",
    tagline: "Policy-compliant lead generation for loan settlement, lending and fintech businesses.",
    sections: [
      {
        id: "policy",
        h2: "Financial Ads Need Extra Care on Meta",
        paragraphs: [
          "Meta reviews financial-services ads closely. Ads that promise guaranteed approvals, debt waivers or unrealistic savings get rejected, and repeated rejections can restrict your whole ad account. Depending on the market, Meta may also place credit ads in a special ad category with limited targeting.",
          "We write ads that explain the service honestly, keep disclaimers where they're needed, and build audiences that work within the restrictions.",
        ],
      },
      {
        id: "lead-quality",
        h2: "Screening Leads Before They Reach Your Team",
        bullets: [
          "Form questions on loan type, outstanding amount and city",
          "Separate campaigns for each service, such as settlement, consolidation or new loans",
          "Instant WhatsApp or CRM delivery for quick call-backs",
          "Lead-status feedback into Meta so it learns which leads convert",
          "Hindi and English creatives built around common customer worries",
        ],
      },
      {
        id: "work",
        h2: "Our Financial Services Experience",
        paragraphs: [
          "We've run lead generation for debt-settlement platforms including [Credsettle](/projects/credsettle) and [Settle Loans](/projects/settle-loans). The lesson from both: the campaigns that last are the ones with honest messaging and fast, helpful follow-up.",
        ],
      },
    ],
    faqs: [
      { question: "Why do my loan ads keep getting rejected on Meta?", answer: "The most common reasons are guaranteed-outcome claims, misleading savings figures and missing business information. We review your ads and landing pages against Meta's financial-services policies before relaunch." },
      { question: "Can you target by income or credit score?", answer: "No. Meta doesn't allow targeting by financial status, and credit ads may have further restrictions. We rely on messaging, form questions and broad audiences instead." },
      { question: "Do you set up a CRM for loan leads?", answer: "We can connect Meta lead forms to your existing CRM or a Google Sheet, and recommend a simple CRM if you don't have one." },
    ],
    related: [
      { label: "CRM for loan settlement & law firms", href: "/blogs/crm-for-loan-settlement-law-firms" },
      { label: "Building a lead generation dashboard", href: "/blogs/building-lead-generation-dashboard-tech-stack-architecture" },
    ],
  },
  {
    service: "meta-ads",
    kind: "industry",
    slug: "clinics",
    label: "Clinics & Healthcare",
    audience: "Clinics, dental, dermatology and wellness centres",
    primaryKeyword: "meta ads for clinics",
    secondaryKeywords: ["facebook ads for dental clinic", "instagram ads for dermatologist", "healthcare digital marketing agency", "facebook ads for doctors"],
    metaTitle: "Meta Ads for Clinics, Dentists & Healthcare",
    metaDescription: "Policy-safe Facebook & Instagram ads for clinics, dental, dermatology and wellness centres. Appointment bookings and WhatsApp enquiries nearby.",
    h1: "Meta Ads for Clinics and Healthcare Providers",
    tagline: "Appointment campaigns for clinics, dentists, dermatologists and wellness centres that follow health ad rules.",
    sections: [
      {
        id: "rules",
        h2: "Health Advertising Rules You Can't Ignore",
        paragraphs: [
          "Meta restricts health ads that imply something about the viewer, such as \"Are you suffering from hair loss?\", and limits before-and-after images that create negative self-image. In India, medical regulators also restrict how doctors promote themselves. Ads that break these rules get rejected or, worse, damage your reputation.",
          "We write health ads around services, facilities, convenience and education, and keep claims factual.",
        ],
      },
      {
        id: "campaigns",
        h2: "Appointment Campaigns for Clinics",
        bullets: [
          "Radius targeting around each clinic, since most patients travel only a few kilometres",
          "Click-to-WhatsApp and call ads for appointment booking",
          "Lead forms with preferred date and treatment interest",
          "Educational Reels from your doctors or specialists to build trust",
          "Retargeting for website visitors who viewed treatment pages",
        ],
      },
      {
        id: "website",
        h2: "Pair Ads With a Clinic Website That Books",
        paragraphs: [
          "Patients check your website and reviews before booking. A clear treatment page, doctor profiles and online booking can lift ad results. See [clinic website development](/services/web-development/healthcare) for what we build.",
        ],
      },
    ],
    faqs: [
      { question: "Can clinics run before-and-after ads on Instagram?", answer: "Meta restricts before-and-after images in many health and cosmetic categories. We use alternatives like process videos, facility tours and doctor explainers." },
      { question: "How far around the clinic should we target?", answer: "Usually 3–8 km in metros, wider in smaller cities or for specialist treatments people travel for. We test radius size by location." },
      { question: "Do you work with multi-location clinic chains?", answer: "Yes. We set up campaigns per location so each clinic's budget and cost per appointment is clear." },
    ],
    related: [
      { label: "WhatsApp marketing services", href: "/blogs/whatsapp-marketing-services-uae-india" },
      { label: "Create a Google listing for your business", href: "/blogs/create-a-google-listing-for-business" },
    ],
  },
  {
    service: "meta-ads",
    kind: "industry",
    slug: "coaching-institutes",
    label: "Coaching & Education",
    audience: "Coaching institutes, schools and course creators",
    primaryKeyword: "meta ads for coaching institutes",
    secondaryKeywords: ["facebook ads for coaching centre", "instagram ads for education", "admission lead generation"],
    metaTitle: "Meta Ads for Coaching Institutes | Admissions",
    metaDescription: "Facebook & Instagram admission campaigns for coaching institutes, schools and online course creators. Qualified student and parent leads, CRM sync.",
    h1: "Meta Ads for Coaching Institutes and Education Brands",
    tagline: "Admission campaigns that reach students and parents at the right time of the academic year.",
    sections: [
      {
        id: "timing",
        h2: "Education Ads Run on the Academic Calendar",
        paragraphs: [
          "Admissions are seasonal. Results, entrance-exam dates and batch starts decide when people search and enquire. Campaigns that run flat all year waste money in quiet months and under-spend when demand peaks.",
          "We build a calendar with you, plan budgets around your peaks, and keep low-cost awareness and retargeting running in between.",
        ],
      },
      {
        id: "audiences",
        h2: "Reaching Students and Parents",
        bullets: [
          "Separate creatives for students and for parents, who decide based on different things",
          "Demo-class and free-counselling lead forms with course and city questions",
          "Results and faculty-led Reels to build credibility",
          "Click-to-WhatsApp ads for course counselling",
          "Retargeting for people who watched demo videos or visited course pages",
        ],
      },
      {
        id: "policy",
        h2: "Following Meta's Rules for Education Ads",
        paragraphs: [
          "Ads can't imply personal attributes such as \"Did you fail your exam?\" and need to avoid guaranteed-result claims. Ads aimed at teenagers also have limited targeting options. We write ads that stay compliant and still feel personal.",
          "Need a course website with enquiry forms? See [education website development](/services/web-development/education).",
        ],
      },
    ],
    faqs: [
      { question: "When should a coaching institute start admission ads?", answer: "Usually 4–8 weeks before your main batch start or result date, with retargeting running until the batch fills." },
      { question: "Can you run ads for online courses across India?", answer: "Yes. We run national campaigns for online courses and local campaigns for physical centres." },
      { question: "How do you improve lead quality for admissions?", answer: "Qualifying questions on course, class and city, plus fast counsellor follow-up through WhatsApp or your CRM." },
    ],
    related: [
      { label: "Mastering lead generation sales campaigns", href: "/blogs/mastering-lead-generation-sales-campaigns" },
      { label: "Meta ads in Noida", href: "/services/meta-ads/noida" },
    ],
  },

  // ───────────────────────── WEB DEVELOPMENT · INDUSTRIES ─────────────────────────
  {
    service: "web-development",
    kind: "industry",
    slug: "restaurants",
    label: "Restaurants & Cafes",
    audience: "Restaurants, cafes, bars and cloud kitchens",
    primaryKeyword: "restaurant website development",
    secondaryKeywords: ["restaurant website design", "cafe website design", "website for restaurant india"],
    metaTitle: "Restaurant Website Development | Menus & Bookings",
    metaDescription: "Custom restaurant and cafe websites with fast menus, table booking, direct online ordering and Google-friendly local SEO. Delhi & Dubai team.",
    h1: "Restaurant Website Development That Fills Tables",
    tagline: "Fast, mobile-first websites for restaurants, cafes and bars, with menus, bookings and direct ordering.",
    sections: [
      {
        id: "what-guests-want",
        h2: "What Guests Look For on a Restaurant Website",
        paragraphs: [
          "Most visitors to a restaurant site want four things in under ten seconds: the menu, the location, the timings and a way to book or order. Many restaurant sites hide these behind slow sliders and PDF menus that are hard to read on a phone.",
          "We design around those four jobs first, then add the brand story, photography and events that make people choose you.",
        ],
      },
      {
        id: "features",
        h2: "Features We Build for Restaurants",
        bullets: [
          "Text-based, searchable menus that load fast and rank on Google, not PDFs",
          "Table booking through your reservation tool or WhatsApp",
          "Direct online ordering, so fewer orders lose commission to aggregators",
          "QR menus for dine-in. Read more in our [QR menu guide](/blogs/boost-restaurant-appeal-air-menu-qr)",
          "Private dining, catering and event enquiry forms",
          "Restaurant schema, Google Maps and multi-outlet location pages",
        ],
      },
      {
        id: "work",
        h2: "Restaurant Websites We've Built",
        paragraphs: [
          "Our hospitality work includes [Bo-Tai](/projects/botai), [Delhi House Cafe](/projects/delhi-house) and [Salad Life](/projects/salad-life). Each site is custom-built on Next.js for speed, with content you can update yourself.",
          "Pair your site with [Meta ads for restaurants](/services/meta-ads/restaurants) to bring local diners straight to your booking page.",
        ],
      },
    ],
    faqs: [
      { question: "How much does a restaurant website cost in India?", answer: "A single-outlet restaurant site with menu, booking and location pages typically costs less than a multi-outlet site with online ordering. We quote a fixed price after understanding your outlets and features." },
      { question: "Can I update the menu myself?", answer: "Yes. We set up an easy admin so you can change dishes, prices and photos without a developer." },
      { question: "Should we build our own ordering or stay on Zomato and Swiggy?", answer: "Most restaurants do both: aggregators for discovery and a direct channel for repeat customers, which saves commission." },
    ],
    related: [
      { label: "Custom coded website for a restaurant", href: "/blogs/custom-coded-website-for-a-restaurant" },
      { label: "Onboard on Swiggy, Zomato & EazyDiner", href: "/blogs/onboard-restaurant-swiggy-zomato-eazydiner" },
    ],
  },
  {
    service: "web-development",
    kind: "industry",
    slug: "real-estate",
    label: "Real Estate",
    audience: "Real estate developers, brokers and property consultants",
    primaryKeyword: "real estate website development",
    secondaryKeywords: ["property website development", "real estate website design company", "real estate microsite development"],
    metaTitle: "Real Estate Website Development & Microsites",
    metaDescription: "Real estate websites and project microsites with floor plans, price sheets, virtual tours, RERA details and CRM-connected lead capture. Free consult.",
    h1: "Real Estate Website Development for Developers and Brokers",
    tagline: "Project microsites and property websites that turn ad traffic into site visits.",
    sections: [
      {
        id: "types",
        h2: "Real Estate Websites We Build",
        bullets: [
          "**Project microsites:** one fast page per launch, built for ad traffic and lead capture.",
          "**Developer websites:** portfolio of completed and ongoing projects, credentials and investor information.",
          "**Broker and consultant portals:** searchable listings with filters for location, budget and configuration.",
          "**NRI-focused pages:** multi-currency pricing, time-zone-friendly booking and WhatsApp contact.",
        ],
      },
      {
        id: "features",
        h2: "Features That Matter for Property Sites",
        bullets: [
          "Floor plans, price sheets and brochures gated behind a short form",
          "Virtual tours, walkthrough videos and location maps",
          "RERA registration details and legal disclaimers in the right places",
          "Lead forms connected to your CRM, Google Sheets or WhatsApp",
          "Fast loading on mobile, because most property ad traffic is mobile",
        ],
      },
      {
        id: "ads",
        h2: "Built to Work With Your Ads",
        paragraphs: [
          "A project microsite is only as good as the traffic it receives and the speed of follow-up. We design pages together with your [real estate Meta ads](/services/meta-ads/real-estate) so that the ad promise, landing page and form all match.",
        ],
      },
    ],
    faqs: [
      { question: "Do we need a separate microsite for each project?", answer: "For launches with their own ad budget, yes: a dedicated microsite usually converts better than a page buried in your main site." },
      { question: "Can you integrate our real estate CRM?", answer: "Yes. We connect forms to common CRMs, Google Sheets or WhatsApp so leads reach your sales team instantly." },
      { question: "How fast can you launch a project microsite?", answer: "A focused microsite can usually go live in two to three weeks once content and approvals are ready." },
    ],
    related: [
      { label: "Real estate marketing agency guide", href: "/blogs/real-estate-marketing-agency-guide" },
      { label: "Website development cost guide", href: "/blogs/website-development-cost-guide" },
    ],
  },
  {
    service: "web-development",
    kind: "industry",
    slug: "hotels",
    label: "Hotels & Homestays",
    audience: "Hotels, resorts, homestays and villas",
    primaryKeyword: "hotel website development",
    secondaryKeywords: ["hotel website design", "homestay website design", "resort website development"],
    metaTitle: "Hotel Website Development | More Direct Bookings",
    metaDescription: "Hotel, resort and homestay websites with booking-engine integration, fast image galleries and local SEO to grow commission-free direct bookings.",
    h1: "Hotel Website Development for More Direct Bookings",
    tagline: "Fast, image-rich websites for hotels, resorts and homestays that turn lookers into direct bookers.",
    sections: [
      {
        id: "direct",
        h2: "Your Website Is Your Commission-Free Channel",
        paragraphs: [
          "Travellers often find a property on an OTA, then search its name on Google to check the official site. If your site is slow, outdated or has no clear booking button, they go back and book through the OTA, and you pay commission.",
          "We build hotel websites that make the direct booking the easiest option: clear rates, a visible Book Now button and trust signals like reviews and policies.",
        ],
      },
      {
        id: "features",
        h2: "Hotel Website Features",
        bullets: [
          "Booking-engine integration with your existing provider",
          "Room pages with galleries that stay fast on mobile",
          "WhatsApp enquiry buttons for guests who want to ask first",
          "Experience, dining and local-attraction pages that rank on Google",
          "Hotel schema, maps and multilingual content for international guests",
          "Pixel and analytics set up to track direct bookings",
        ],
      },
      {
        id: "marketing",
        h2: "Websites That Work With Your Marketing",
        paragraphs: [
          "Direct-booking growth usually comes from combining a strong site with Instagram. See how we run [Meta ads for hotels and homestays](/services/meta-ads/hotels).",
        ],
      },
    ],
    faqs: [
      { question: "Can you integrate our existing booking engine?", answer: "In most cases yes. We embed or link your booking engine and make sure the booking flow and tracking work properly." },
      { question: "Do small homestays need a full website?", answer: "Even a small homestay benefits from a fast site with rooms, photos, location and WhatsApp booking. It builds trust and saves commission." },
      { question: "Will the site be fast with lots of photos?", answer: "Yes. We serve modern image formats, lazy-load galleries and test on mobile networks." },
    ],
    related: [
      { label: "Optimising page speed for conversion", href: "/explore-more/optimizing-page-speed-for-conversion" },
      { label: "Revamp your website for maximum impact", href: "/blogs/revamp-your-website-for-maximum-impact" },
    ],
  },
  {
    service: "web-development",
    kind: "industry",
    slug: "ecommerce",
    label: "E-commerce & D2C",
    audience: "E-commerce and D2C brands",
    primaryKeyword: "ecommerce website development company",
    secondaryKeywords: ["ecommerce website development india", "d2c website development", "online store development"],
    metaTitle: "E-commerce Website Development Company",
    metaDescription: "E-commerce website development on Shopify, headless Shopify and custom Next.js. Fast stores, Indian & UAE payment gateways, built for paid traffic.",
    h1: "E-commerce Website Development for D2C Brands",
    tagline: "Shopify, headless and custom stores built to convert paid and organic traffic.",
    sections: [
      {
        id: "platform",
        h2: "Choosing the Right Platform",
        paragraphs: [
          "Most growing D2C brands do best on Shopify: it's reliable, fast to launch and easy for your team. Brands with complex catalogues, B2B pricing or unusual checkout needs may need headless Shopify or a fully custom build. We're Shopify Plus and Hydrogen certified, and we build custom Next.js stores too, so we recommend what fits rather than what we prefer to build.",
          "Not sure? Read [Shopify vs a custom-coded website](/blogs/shopify-website-vs-custom-coded-website).",
        ],
      },
      {
        id: "features",
        h2: "What Every Store We Build Includes",
        bullets: [
          "Mobile-first product and collection pages that load fast",
          "Razorpay, PayU, Stripe or local UAE gateways, plus COD rules where needed",
          "Shipping integrations such as Shiprocket or Delhivery",
          "Meta Pixel, Conversions API and GA4 set up and verified",
          "Product schema and clean URLs for Google Shopping and SEO",
          "WhatsApp order updates and abandoned-cart recovery",
        ],
      },
      {
        id: "work",
        h2: "Stores We've Built",
        paragraphs: [
          "Our e-commerce work includes [Adorna Casa](/projects/adorna-casa), [Vensa Skin Care](/projects/vensa-skincare), [Trivora Jewels](/projects/trivora-jewels) and [Limitless Clothing](/projects/limitless-clothing). For growth after launch, see [Meta ads for D2C brands](/services/meta-ads/d2c-ecommerce).",
        ],
      },
    ],
    faqs: [
      { question: "How long does an e-commerce website take to build?", answer: "A standard Shopify store typically takes 3–6 weeks; headless or custom builds usually take 8–12 weeks or more." },
      { question: "Can you migrate our store from WooCommerce?", answer: "Yes. We migrate products, customers, orders and SEO redirects. See our WooCommerce to Shopify migration guide." },
      { question: "Do you build stores for UAE brands?", answer: "Yes. We build stores for India and the UAE, with local gateways, currencies and shipping." },
    ],
    related: [
      { label: "WooCommerce to Shopify migration", href: "/blogs/woocommerce-to-shopify-migration-services" },
      { label: "E-commerce website development in the UAE", href: "/blogs/ecommerce-website-development-uae-guide" },
      { label: "Shopify agency Dubai", href: "/services/shopify-agency-dubai" },
    ],
  },
  {
    service: "web-development",
    kind: "industry",
    slug: "healthcare",
    label: "Clinics & Healthcare",
    audience: "Clinics, hospitals, dentists and wellness centres",
    primaryKeyword: "healthcare website development",
    secondaryKeywords: ["clinic website design", "dental clinic website", "doctor website development india"],
    metaTitle: "Clinic & Healthcare Website Development",
    metaDescription: "Clinic, dental and healthcare websites with appointment booking, doctor profiles, treatment pages and privacy-first data handling. Free consultation.",
    h1: "Healthcare and Clinic Website Development",
    tagline: "Trustworthy clinic websites with online booking, doctor profiles and treatment pages patients can understand.",
    sections: [
      {
        id: "trust",
        h2: "Patients Choose on Trust",
        paragraphs: [
          "Before booking, patients compare clinics online. They look for qualified doctors, clear treatment information, clean facilities and easy booking. A dated or slow website quietly sends them to the clinic down the road.",
          "We design clinic sites that answer patient questions plainly, show your team and facilities honestly, and make booking a two-tap job on mobile.",
        ],
      },
      {
        id: "features",
        h2: "Features for Clinics and Hospitals",
        bullets: [
          "Online appointment booking or WhatsApp booking",
          "Doctor profiles with qualifications and specialities",
          "Treatment pages written for patients and structured for Google",
          "Multi-location pages with maps, timings and directions",
          "Consent-based forms and careful handling of patient data under India's data-protection law",
          "MedicalClinic and Physician schema for richer search results",
        ],
      },
      {
        id: "compliance",
        h2: "Content That Stays Within the Rules",
        paragraphs: [
          "Medical regulators limit how doctors and clinics can promote themselves. We keep claims factual, avoid guarantees, and focus content on information patients genuinely need. When you're ready to grow, see [Meta ads for clinics](/services/meta-ads/clinics).",
        ],
      },
    ],
    faqs: [
      { question: "Can patients book appointments directly on the website?", answer: "Yes. We integrate your booking system or build a simple booking form, with confirmations by WhatsApp or email." },
      { question: "Is patient data safe on the website?", answer: "We collect only what's necessary, use secure forms and hosting, and set up consent and privacy notices." },
      { question: "Can you build sites for multi-speciality hospitals?", answer: "Yes. We structure larger sites by department, doctor and location so patients and Google can navigate them easily." },
    ],
    related: [
      { label: "Why web accessibility is essential", href: "/explore-more/why-web-accessibility-is-essential" },
      { label: "Create a Google listing for your business", href: "/blogs/create-a-google-listing-for-business" },
    ],
  },
  {
    service: "web-development",
    kind: "industry",
    slug: "law-firms",
    label: "Law Firms & Legal",
    audience: "Law firms, legal-tech platforms and legal service providers",
    primaryKeyword: "law firm website development",
    secondaryKeywords: ["law firm website design india", "lawyer website design", "legal website development"],
    metaTitle: "Law Firm Website Development | Legal Websites",
    metaDescription: "Professional, compliant websites for law firms, legal-tech platforms and legal service providers. Practice areas, client intake and secure forms.",
    h1: "Law Firm and Legal Website Development",
    tagline: "Professional, compliant websites for law firms and legal-tech platforms.",
    sections: [
      {
        id: "compliance",
        h2: "Websites That Respect Bar Council Rules",
        paragraphs: [
          "Indian advocates face strict limits on advertising and soliciting work. Bar Council rules allow law firms to publish certain factual information online, but not to promote themselves in the way other businesses can. Many law firm websites either ignore this or end up so cautious they're useless.",
          "We build firm websites that present factual information clearly and professionally, with the disclaimers firms commonly use. Legal-tech platforms and legal service companies have more flexibility, and we build those as full lead-generation sites.",
        ],
      },
      {
        id: "features",
        h2: "What We Build for Legal Clients",
        bullets: [
          "Practice-area and team pages with qualifications and enrolment details",
          "Disclaimer and consent screens where appropriate",
          "Secure client-intake and document-upload forms",
          "Knowledge-centre articles that build authority and organic traffic",
          "For legal-tech: service pages, pricing, payment and case-tracking dashboards",
        ],
      },
      {
        id: "work",
        h2: "Legal Websites We've Built",
        paragraphs: [
          "We built the website for [AMA Legal Solutions](/projects/ama), focused on professional credibility and smooth client intake. For legal-tech platforms ready to grow, see [Meta ads for legal services](/services/meta-ads/legal-services).",
        ],
      },
    ],
    faqs: [
      { question: "Are law firms in India allowed to have websites?", answer: "Yes. Bar Council rules permit websites with certain factual information about the firm and its advocates, though they restrict solicitation. Take advice on your specific content." },
      { question: "Can clients upload documents securely?", answer: "Yes. We build secure upload forms with access controls and encrypted storage." },
      { question: "Do you write legal content?", answer: "We can structure and edit content, but legal accuracy must be reviewed by your advocates before publishing." },
    ],
    related: [
      { label: "CRM for loan settlement & law firms", href: "/blogs/crm-for-loan-settlement-law-firms" },
      { label: "Benefits of a custom coded website", href: "/blogs/benefits-of-custom-coded-website" },
    ],
  },
  {
    service: "web-development",
    kind: "industry",
    slug: "education",
    label: "Schools & Coaching",
    audience: "Schools, coaching institutes and online course creators",
    primaryKeyword: "education website development",
    secondaryKeywords: ["school website design", "coaching institute website", "online course website development"],
    metaTitle: "Education Website Development | Schools & Coaching",
    metaDescription: "Websites for schools, coaching institutes and online courses: course pages, admission enquiries, fee payments, results and student portals.",
    h1: "Education Website Development for Schools and Coaching Institutes",
    tagline: "Course, admission and student-portal websites that parents and students find easy to use.",
    sections: [
      {
        id: "audiences",
        h2: "Built for Students and Parents",
        paragraphs: [
          "Education websites serve two very different audiences. Students want course details, schedules and results. Parents want trust: faculty credentials, safety, fees and outcomes. Good education sites answer both without making either hunt.",
        ],
      },
      {
        id: "features",
        h2: "Education Website Features",
        bullets: [
          "Course and batch pages with schedules, fees and enquiry forms",
          "Admission enquiry and counselling booking, connected to your CRM",
          "Online fee payment through Razorpay or PayU",
          "Results, toppers and faculty pages",
          "Student and parent login portals, or LMS integration for online courses",
          "Course schema for better visibility in Google",
        ],
      },
      {
        id: "growth",
        h2: "Ready for Admission Season",
        paragraphs: [
          "Admission traffic spikes around results and exam dates. We build sites that stay fast under load and make it easy to publish batch pages quickly. To drive that traffic, see [Meta ads for coaching institutes](/services/meta-ads/coaching-institutes).",
        ],
      },
    ],
    faqs: [
      { question: "Can you build an online course platform?", answer: "Yes. We can integrate an existing LMS or build a custom course platform with video lessons, payments and progress tracking." },
      { question: "Can parents pay fees online?", answer: "Yes. We integrate Indian payment gateways with receipts and fee reminders." },
      { question: "Can our staff update batches and results?", answer: "Yes. We provide an admin so your team can update content without a developer." },
    ],
    related: [
      { label: "Importance of mobile-first design", href: "/blogs/the-importance-of-mobile-first-design-in-2025" },
      { label: "UI/UX design services", href: "/blogs/ui-ux-design-services-for-digital-success" },
    ],
  },
  {
    service: "web-development",
    kind: "industry",
    slug: "startups",
    label: "Startups & SaaS",
    audience: "Startups and SaaS companies",
    primaryKeyword: "website development for startups",
    secondaryKeywords: ["saas website development", "startup web development company", "next.js website development"],
    metaTitle: "Website Development for Startups & SaaS",
    metaDescription: "Fast Next.js websites for startups and SaaS: landing pages, pricing pages, product docs and signup flows that scale with your growth.",
    h1: "Website Development for Startups and SaaS Companies",
    tagline: "Fast Next.js websites that launch quickly and scale with your product.",
    sections: [
      {
        id: "speed",
        h2: "Launch Fast, Then Iterate",
        paragraphs: [
          "Startups can't wait months for a website. We launch a focused first version quickly, covering positioning, product, pricing and signup, and then add pages as you learn what customers care about.",
          "We build on Next.js and React, the same stack many product teams already use, so your engineers can work on the site later if needed.",
        ],
      },
      {
        id: "features",
        h2: "What Startup Websites Need",
        bullets: [
          "Clear positioning and a homepage that explains the product in seconds",
          "Pricing pages, comparison pages and signup or demo-booking flows",
          "Landing pages for each ad campaign or audience",
          "Docs, changelog and blog sections that grow organic traffic",
          "Analytics, product events and ad pixels set up correctly",
          "CMS so marketers can publish without a developer",
        ],
      },
      {
        id: "growth",
        h2: "Built for Growth Marketing",
        paragraphs: [
          "A startup website is a growth tool. We build it alongside your acquisition plan, whether that's SEO, [Meta ads](/services/meta-ads/bengaluru) or Google Ads, so every page has a job. Read why we build on [Next.js](/explore-more/power-of-nextjs-for-modern-websites).",
        ],
      },
    ],
    faqs: [
      { question: "How quickly can you launch a startup website?", answer: "A focused first version often goes live in 3–5 weeks, depending on content and feedback speed." },
      { question: "Can our engineers maintain the site later?", answer: "Yes. We use a standard Next.js codebase and hand over the repository and documentation." },
      { question: "Do you build web apps as well as marketing sites?", answer: "Yes. We build web apps, dashboards and MVPs as well as marketing websites." },
    ],
    related: [
      { label: "Next.js vs WordPress for SEO", href: "/blogs/nextjs-vs-wordpress-seo-comparison" },
      { label: "React JS web development company", href: "/blogs/react-js-web-development-company" },
    ],
  },
  {
    service: "web-development",
    kind: "industry",
    slug: "manufacturers",
    label: "Manufacturers & B2B",
    audience: "Manufacturers, exporters, distributors and B2B suppliers",
    primaryKeyword: "website development for manufacturers",
    secondaryKeywords: ["b2b website development", "manufacturing company website design", "industrial website development india"],
    metaTitle: "Website Development for Manufacturers & B2B",
    metaDescription: "B2B and manufacturing websites with product catalogues, specification sheets, RFQ forms and export-ready multilingual pages. India & UAE.",
    h1: "Website Development for Manufacturers and B2B Companies",
    tagline: "Catalogue and enquiry websites that win buyers, distributors and export orders.",
    sections: [
      {
        id: "b2b-buyers",
        h2: "B2B Buyers Research Before They Call",
        paragraphs: [
          "Procurement teams and distributors shortlist suppliers online before they ever pick up the phone. They want product range, specifications, certifications, capacity and a quick way to request a quote. Many manufacturing websites still offer a homepage, an about page and a phone number.",
          "We build B2B websites that answer buyer questions properly and turn visits into qualified RFQs.",
        ],
      },
      {
        id: "features",
        h2: "Features for Manufacturers",
        bullets: [
          "Product catalogues with filters, specifications and downloadable data sheets",
          "Request-for-quote forms connected to email, CRM or WhatsApp",
          "Certifications, plant, capacity and quality-process pages",
          "Industry and application pages that rank for what buyers search",
          "Multilingual and export pages for international markets",
          "Dealer and distributor enquiry flows",
        ],
      },
      {
        id: "work",
        h2: "B2B Work We've Done",
        paragraphs: [
          "We built the B2B catalogue platform for [RP Royal](/projects/rproyal), a food-grade packaging manufacturer, and the dealership platform for [Kamal Motors](/projects/kamal). Read more on [PHP and custom development options](/blogs/php-development-company-india-guide).",
        ],
      },
    ],
    faqs: [
      { question: "We have hundreds of products. Can you handle that?", answer: "Yes. We structure large catalogues with categories, filters and bulk import from spreadsheets." },
      { question: "Should a B2B company show prices online?", answer: "Not always. Many show ranges or MOQ details and use RFQ forms for final pricing. We'll recommend what suits your sales process." },
      { question: "Can the site help us find export buyers?", answer: "A well-structured site with export and application pages can rank internationally and support trade-show and LinkedIn outreach." },
    ],
    related: [
      { label: "Benefits of a custom coded website", href: "/blogs/benefits-of-custom-coded-website" },
      { label: "Website development cost guide", href: "/blogs/website-development-cost-guide" },
    ],
  },
  {
    service: "web-development",
    kind: "industry",
    slug: "interior-designers",
    label: "Interior Designers & Architects",
    audience: "Interior designers, architects and home decor brands",
    primaryKeyword: "website for interior designers",
    secondaryKeywords: ["interior design website development", "architect website design", "portfolio website for interior designer"],
    metaTitle: "Website Development for Interior Designers",
    metaDescription: "Portfolio websites for interior designers and architects: fast project galleries, case studies, consultation booking and local SEO. Free consult.",
    h1: "Website Development for Interior Designers and Architects",
    tagline: "Portfolio websites that let your projects sell your studio.",
    sections: [
      {
        id: "portfolio",
        h2: "Your Portfolio Is Your Pitch",
        paragraphs: [
          "Clients hire interior designers and architects on taste and trust, and they judge both from your portfolio. That means photography has to look stunning and still load quickly on a phone, and each project should tell a story: the brief, the constraints, the result.",
        ],
      },
      {
        id: "features",
        h2: "Features for Design Studios",
        bullets: [
          "Project case studies with large, fast-loading galleries",
          "Filters by project type: residential, commercial, hospitality",
          "Before-and-after sliders and walkthrough videos",
          "Consultation booking and budget-range enquiry forms",
          "Location pages for the cities you work in",
          "Instagram feed integration so new projects appear automatically",
        ],
      },
      {
        id: "leads",
        h2: "Turning Visitors Into Consultations",
        paragraphs: [
          "Asking for a budget range and project type in your enquiry form saves your team hours of unqualified calls. We also build landing pages for ad campaigns. Read our guide to [Meta ads for interior designers](/blogs/meta-ads-for-interior-designers).",
          "Our home and decor work includes [Adorna Casa](/projects/adorna-casa) and [Tototerra](/projects/tototerra).",
        ],
      },
    ],
    faqs: [
      { question: "Will lots of high-resolution photos slow the site down?", answer: "Not if they're handled properly. We serve modern formats at the right size for each device and lazy-load galleries." },
      { question: "Can I add new projects myself?", answer: "Yes. You can upload new project photos and descriptions through a simple admin." },
      { question: "Do you help with project photography?", answer: "Yes. Our photography team can shoot completed projects in Delhi NCR and Dubai." },
    ],
    related: [
      { label: "Meta ads for interior designers", href: "/blogs/meta-ads-for-interior-designers" },
      { label: "Find web designers near you", href: "/blogs/find-web-designers-professional-near-you" },
    ],
  },
];

export const getSeoPage = (service: SeoService, slug: string) =>
  seoPages.find((p) => p.service === service && p.slug === slug);

export const getSeoPagesFor = (service: SeoService, kind?: SeoKind) =>
  seoPages.filter((p) => p.service === service && (!kind || p.kind === kind));
