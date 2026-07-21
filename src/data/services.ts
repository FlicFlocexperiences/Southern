export interface Service {
  slug: string;
  title: string;
  tagline?: string;
  description1: string;
  description2: string;
  callout?: string;
  statValue?: string;
  statLabel?: string;
  tags: string[];
  image: string;
  content: string; // Markdown content
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Website Platforms",
    tagline: "Convert, not just impress.",
    description1: "High-performance websites engineered to turn visitors into customers. We combine editorial craft with conversion science to build digital experiences that compound in value.",
    description2: "Using modern frameworks like Next.js and React, we ensure your store or landing page is lightning-fast, fully responsive, and optimized to capture every possible lead.",
    callout: "The foundation of every growth system — without a website that converts, every other channel is pouring water into a leaky bucket.",
    statValue: "3.2x",
    statLabel: "AVG. CONVERSION IMPROVEMENT",
    tags: ["UX Design", "Development", "CRO", "CMS"],
    image: "/services/website-development.png",
    content: `Building High-Performance Digital Experiences
A modern website is the foundation of a successful online presence. Our web development services focus on speed, scalability, security, responsive design, and conversion optimization. We build websites that not only look exceptional but also drive measurable business growth.

### What is Web Development?
Web development involves designing, building, maintaining, and optimizing websites and web applications. It includes frontend development, backend development, databases, APIs, cloud deployment, and continuous performance improvements.

### Our Comprehensive Web Development Services
- Business Websites & Corporate Portals
- High-Converting Landing Pages
- Custom Web Applications & SaaS Dashboards
- Ecommerce Frontend Solutions
- CMS Setup & Management
- Third-Party API Integration

### Why Choose Us?
We build SEO-friendly, mobile-responsive, secure, and lightning-fast websites using modern development practices. Our focus is on scalability, clean architecture, excellent user experience, and long-term business growth.

### Client Success Story
An ecommerce company migrated to a custom Next.js platform, reducing page load time by over 60% while improving search visibility and increasing online sales through a better shopping experience.`
  },
  {
    slug: "branding",
    title: "Branding & Strategy",
    tagline: "Define your voice, claim your space.",
    description1: "We build cohesive, memorable identities that stand out in crowded markets, combining strategic positioning with visual storytelling to define who you are and why you matter.",
    description2: "From logo marks to comprehensive style guides, we establish a distinct design system that builds trust and drives immediate recognition across all touchpoints.",
    callout: "Your brand isn't just what you say — it's the lasting imprint you leave on your audience's mind.",
    statValue: "84%",
    statLabel: "INCREASE IN BRAND RECALL",
    tags: ["Brand Identity", "Brand Strategy", "Typography", "Visual System"],
    image: "/services/branding.png",
    content: `Crafting Memorable Brand Identities
In a world full of noise, a strong brand is your greatest asset. We help companies find their voice, construct visual consistency, and develop identities that resonate deeply with their target market.

### Core Branding Capabilities
- Brand Audits & Competitive Positioning
- Logo Design & Iconography
- Typography & Complete Color Systems
- Interactive Brand Guideline Handbooks
- Packaging & Collateral Material

### The Branding Process
We start with deep research into your history, values, and competition. Next, we explore design directions, iterating closely with your team. Finally, we output a robust package of guidelines, assets, and design files.

### Why Strategic Branding Matters
A brand is more than a logo; it is the sum of all customer experiences. Consistent branding across channels increases customer loyalty, supports premium pricing, and creates a clear identity that team members and customers advocate for.`
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    tagline: "Scale your store, not your stress.",
    description1: "Fully customized, conversion-focused e-commerce storefronts designed to scale with your sales. We build on Liquid and headless APIs to make checkout frictionless and fast.",
    description2: "From storefront setup to liquid customization and seamless checkout optimization, we cover every aspect of e-commerce architecture.",
    callout: "E-commerce is a game of margins and milliseconds, and we optimize both to maximize customer lifetime value.",
    statValue: "42%",
    statLabel: "BOOST IN CONVERSION RATE",
    tags: ["Shopify Plus", "Liquid Coding", "API Integration", "Checkout Optim."],
    image: "/services/website-revamp.png",
    content: `Building High-Converting Shopify Stores
Shopify is one of the world's leading ecommerce platforms. We create fast, scalable, and conversion-focused Shopify stores that help brands establish a strong online presence, improve customer experience, and increase sales.

### Our Comprehensive Shopify Services
- Custom Shopify Store Development & Design
- Shopify Theme Design
- Shopify Theme Customization
- Shopify Plus Development
- Store Migration
- App Integration
- Payment Gateway Integration
- CRO & Speed Optimization
- Store Maintenance

### Technologies & Tools
Shopify, Liquid, HTML5, CSS3, JavaScript, Shopify CLI, GraphQL APIs, Shopify Plus, Klaviyo, Judge.me, Recharge, PageFly, Google Analytics 4, Google Tag Manager, and Meta Pixel.

### Our Development Process
- Business Discovery & Planning
- UI/UX Design & Theme Development
- Product Setup, Integrations & Testing
- Launch, Optimization & Ongoing Support

### Why Choose Us?
We develop high-performing Shopify stores with clean code, responsive design, optimized checkout experiences, advanced integrations, and scalable architecture to maximize ecommerce growth.

### Client Success Story
A fashion retailer migrated to Shopify with a fully customized storefront, improving page speed, customer engagement, and online revenue through an optimized shopping experience.`
  },
  {
    slug: "app-development",
    title: "App Development",
    tagline: "Native experiences, global reach.",
    description1: "We engineer robust, high-performance mobile applications that deliver native-like user experiences on iOS and Android, connected to secure, scalable backend APIs.",
    description2: "Whether iOS or Android, we develop seamless frontend interfaces connected to reliable, scalable backends.",
    callout: "A great mobile app turns occasional buyers into highly engaged, loyal members of your ecosystem.",
    statValue: "4.8★",
    statLabel: "AVERAGE APP STORE RATING",
    tags: ["React Native", "iOS & Android", "API Architecture", "Cloud Scaling"],
    image: "/services/app-development.png",
    content: `Building Powerful Mobile Applications
Mobile applications have become an essential part of digital transformation. We develop scalable, secure, and user-friendly Android, iOS, and cross-platform applications that help businesses engage customers, streamline operations, and accelerate growth.

### Our Comprehensive App Development Services
- Android App Development
- iOS App Development
- Cross-Platform Apps
- Flutter Development
- React Native Development
- UI/UX Design for Mobile Apps
- Backend & API Development
- App Maintenance & Support
- App Store Deployment

### Technologies & Platforms
Flutter, React Native, Kotlin, Swift, Java, Firebase, Node.js, REST APIs, GraphQL, AWS, Google Cloud, MongoDB, PostgreSQL, Figma, Git, and CI/CD pipelines.

### Our Development Process
- Product Discovery & Strategy
- UI/UX Design & Prototyping
- Development, Testing & QA
- Deployment, Monitoring & Continuous Improvement

### Why Choose Us?
We build secure, scalable, and performance-driven mobile applications with intuitive user experiences, modern architecture, and long-term technical support to help businesses grow.

### Client Success Story
A logistics company launched a custom mobile application that automated field operations, improved delivery tracking, and significantly increased operational efficiency.`
  },
  {
    slug: "seo",
    title: "SEO Solutions",
    tagline: "Own the search, capture the intent.",
    description1: "We optimize your website's search visibility to drive consistent, high-intent organic traffic that converts without recurring advertising spend.",
    description2: "Through comprehensive keyword research, technical site audits, page-speed tuning, and authority building, we construct sustainable search rankings.",
    callout: "Ranking #1 is cool, but ranking for the queries that actually make money is where real growth happens.",
    statValue: "150%",
    statLabel: "GROWTH IN ORGANIC SESSIONS",
    tags: ["Technical SEO", "Keyword Strategy", "Content Audits", "Link Building"],
    image: "/services/seo.png",
    content: `Achieving Sustainable Organic Growth
Search Engine Optimization (SEO) helps businesses increase visibility, attract qualified traffic, and generate long-term growth through higher rankings on search engines. Our SEO strategies combine technical expertise, content optimization, and authority building to deliver measurable results.

### Our Comprehensive SEO Services
- SEO Audits & Competitor Mapping
- Strategic Keyword Research & Competitor Analysis
- On-Page SEO & Content Strategy
- Technical SEO & Site Architecture Tuning
- Ethical Link Building & Authority Elevation

### Our SEO Process
- Website Audit & Competitor Analysis
- Keyword & Content Strategy
- Technical & On-Page Optimization
- Monitoring, Reporting & Continuous Growth

### Client Success Story
A B2B software company doubled its organic traffic within months through technical optimization, strategic content creation, and authority-building campaigns, resulting in increased qualified inquiries.`
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "Precision spending, measurable return.",
    description1: "We run data-driven, highly optimized ad campaigns across Google and Meta to scale your acquisition pipeline with predictable customer acquisition costs.",
    description2: "From audience research to ongoing optimization, we focus on measurable results and maximizing return on investment.",
    callout: "Ad budgets are easy to spend but hard to return — we design funnels that turn clicks into profitable scale.",
    statValue: "4.5x",
    statLabel: "AVERAGE RETURN ON AD SPEND",
    tags: ["Meta Ads", "Google Ads/PMax", "Funnel Optim.", "Audience Scaling"],
    image: "/services/performance-marketing.png",
    content: `Driving Measurable Business Growth
Performance marketing focuses on measurable results through paid advertising, audience targeting, conversion optimization, and continuous campaign improvements. We help brands maximize return on ad spend while generating qualified leads and sales.

### Our Performance Marketing Services
- Google Search, Display & Performance Max Ads
- Meta Ads (Facebook & Instagram campaigns)
- LinkedIn Ads for B2B Lead Generation
- Conversion Rate Optimization & Landing Page Tuning
- Advanced Analytics Setup & ROI Dashboards

### Why Choose Us?
We build highly targeted campaigns backed by analytics, creative testing, and conversion optimization to maximize ROI while minimizing wasted ad spend.

### Client Success Story
A D2C ecommerce brand increased online revenue by improving campaign targeting, optimizing product feeds, and implementing retargeting strategies that significantly boosted ROAS.`
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    tagline: "Be talked about, not just scrolled past.",
    description1: "We create high-engagement content strategies that build active communities and transform passive followers into active brand advocates.",
    description2: "By combining trend analysis, native video production, and active community outreach, we amplify your brand's cultural relevance.",
    callout: "Attention is the currency of the digital age — we build content that makes your brand the center of attention.",
    statValue: "6.8x",
    statLabel: "INCREASE IN SOCIAL ENGAGEMENT",
    tags: ["Content Creation", "Community Mgmt", "Short-Form Video", "Influencer Collab"],
    image: "/services/social-media.png",
    content: `Building Communities and Cultural Relevance
Social media is more than broadcasting messages; it is an active dialogue with your audience. We help businesses manage their profiles, create dynamic media assets, and foster active discussions.

### Our Social Media Services
- Content Creation & Copywriting
- Short-form Video Production (TikTok, Instagram Reels, YouTube Shorts)
- Community Management & Direct Audience Engagement
- Influencer Partnerships & Advocacy Campaigns
- Social Listening & Sentiment Auditing

### Strategic Impact of Social Media
A strong social channel generates trust, provides instant feedback channels, builds brand equity, and serves as an organic acquisition driver. By staying on top of platform trends, we ensure your brand remains relevant, engaging, and top-of-mind.`
  }
];

export const getServiceBySlug = (slug: string) => {
  return services.find((service) => service.slug === slug);
};
