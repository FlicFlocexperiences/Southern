export interface Service {
  slug: string;
  title: string;
  h1Title?: string;
  tagline?: string;
  metaTitle?: string;
  metaDescription?: string;
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
    h1Title: "Website Development Services That Turn Visitors Into Customers",
    tagline: "Convert, not just impress.",
    metaTitle: "Website Development Company | High-Converting Business Websites | Southern Edge Marketing",
    metaDescription: "Build high-performance websites designed for conversions. Southern Edge Marketing creates SEO-friendly, responsive websites that generate leads, increase sales, and grow businesses.",
    description1: "High-performance websites engineered to turn visitors into customers. We combine editorial craft with conversion science to build digital experiences that compound in value.",
    description2: "Using modern frameworks like Next.js and React, we ensure your store or landing page is lightning-fast, fully responsive, and optimized to capture every possible lead.",
    callout: "The foundation of every growth system, without a website that converts, every other channel is pouring water into a leaky bucket.",
    statValue: "3.2x",
    statLabel: "AVG. CONVERSION IMPROVEMENT",
    tags: ["UX Design", "Development", "CRO", "CMS"],
    image: "/services/website-development.png",
    content: `### Introduction
Your website is your business's most valuable digital asset. It should do more than look beautiful—it should generate leads, build trust, and convert visitors into paying customers.

At Southern Edge Marketing, we create custom websites focused on user experience, speed, SEO, and conversion optimization. Every website is strategically designed to support long-term business growth while providing a seamless experience across desktop, tablet, and mobile devices.

Whether you need a corporate website, landing page, or complete business platform, our team builds websites engineered for measurable results.

### What We Offer
- Custom Website Design
- Responsive Development
- Landing Pages
- CMS Development
- WordPress Development
- Webflow Development
- Headless Websites
- Conversion Optimization
- Technical SEO Setup
- Website Maintenance

### Why Choose Us
- Mobile-first design
- Lightning-fast performance
- SEO-ready architecture
- Conversion-focused layouts
- Clean scalable code
- Secure development standards

### Our Process
- **01. Discovery**: Understanding your business goals and audience.
- **02. UX Strategy**: Creating user journeys focused on conversions.
- **03. UI Design**: Building visually engaging interfaces.
- **04. Development**: Modern, optimized coding practices.
- **05. QA Testing**: Performance, security and responsiveness testing.
- **06. Launch & Growth**: Monitoring performance and continuous improvements.

### Industries We Serve
- Healthcare
- Law Firms
- SaaS
- Real Estate
- Education
- Ecommerce
- Finance
- Startups

### Related Solutions
Continue improving your online presence with our:
- [SEO Solutions](/services/seo)
- [Branding & Strategy](/services/branding)
- [Performance Marketing](/services/performance-marketing)
- [Shopify Development](/services/shopify-development)

### Frequently Asked Questions
- **How long does website development take?** Most projects are completed within 4 to 8 weeks depending on complexity.
- **Do you redesign existing websites?** Yes. We modernize outdated websites while improving speed, SEO, and conversions.`
  },
  {
    slug: "branding",
    title: "Branding & Strategy",
    h1Title: "Branding & Strategy That Makes Your Business Memorable",
    tagline: "Define your voice, claim your space.",
    metaTitle: "Branding & Strategy Agency | Build Memorable Brands | Southern Edge Marketing",
    metaDescription: "Strong brands create trust before the first conversation begins. Southern Edge Marketing combines research, positioning, messaging, and visual identity to build memorable brands.",
    description1: "We build cohesive, memorable identities that stand out in crowded markets, combining strategic positioning with visual storytelling to define who you are and why you matter.",
    description2: "From logo marks to comprehensive style guides, we establish a distinct design system that builds trust and drives immediate recognition across all touchpoints.",
    callout: "Your brand isn't just what you say, it's the lasting imprint you leave on your audience's mind.",
    statValue: "84%",
    statLabel: "INCREASE IN BRAND RECALL",
    tags: ["Brand Identity", "Brand Strategy", "Typography", "Visual System"],
    image: "/services/branding.png",
    content: `### Introduction
Strong brands create trust before the first conversation begins.

Our branding strategy combines research, positioning, messaging, and visual identity to help businesses stand out in competitive markets. We develop brands that not only look exceptional but communicate value clearly and consistently.

### Services
- Brand Identity Design
- Logo Systems
- Brand Strategy
- Visual Identity
- Brand Messaging
- Typography Systems
- Color Systems
- Brand Guidelines

### Benefits
- Strong market positioning
- Higher customer trust
- Better recognition
- Consistent communication
- Premium perception

### Our Process
- **01. Research**: In-depth discovery into your business, vision, and core values.
- **02. Competitor Analysis**: Auditing market dynamics and positioning opportunities.
- **03. Brand Positioning**: Crafting your unique value proposition and messaging pillar.
- **04. Identity Design**: Building logos, visual systems, and typography palettes.
- **05. Brand Guidelines**: Documenting design rules for absolute consistency.
- **06. Launch**: Executing a seamless brand rollout across all digital and print touchpoints.

### Related Solutions
Strengthen your brand with:
- [Website Development](/services/web-development)
- [Social Media Management](/services/social-media-management)
- [SEO Solutions](/services/seo)
- [Performance Marketing](/services/performance-marketing)

### Frequently Asked Questions
- **Why is branding important?** Branding creates recognition, trust, and customer loyalty while differentiating your business from competitors.`
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    h1Title: "Custom Shopify Development for Growing Ecommerce Brands",
    tagline: "Scale your store, not your stress.",
    metaTitle: "Shopify Development Company | Custom Shopify Stores | Southern Edge Marketing",
    metaDescription: "Build high-converting custom Shopify stores. Southern Edge Marketing creates fast, scalable Shopify and Shopify Plus e-commerce platforms designed for growth.",
    description1: "Fully customized, conversion-focused e-commerce storefronts designed to scale with your sales. We build on Liquid and headless APIs to make checkout frictionless and fast.",
    description2: "From storefront setup to liquid customization and seamless checkout optimization, we cover every aspect of e-commerce architecture.",
    callout: "E-commerce is a game of margins and milliseconds, and we optimize both to maximize customer lifetime value.",
    statValue: "42%",
    statLabel: "BOOST IN CONVERSION RATE",
    tags: ["Shopify Plus", "Liquid Coding", "API Integration", "Checkout Optim."],
    image: "/services/website-revamp.png",
    content: `### Introduction
Your Shopify store should do more than display products—it should maximize revenue.

We build custom Shopify stores optimized for conversions, speed, user experience, and scalability.

### Services
- Shopify Store Setup
- Custom Theme Development
- Shopify Plus
- Liquid Development
- App Integration
- Checkout Optimization
- Store Migration
- Speed Optimization

### Benefits
- Faster stores
- Better checkout experience
- Higher conversions
- Improved customer retention
- Scalable ecommerce architecture

### Our Process
- **01. Strategy**: E-commerce auditing, UX mapping, and growth planning.
- **02. Store Design**: Crafting high-converting, brand-aligned store layouts.
- **03. Development**: Custom Liquid themes, app integrations, and custom APIs.
- **04. Testing**: Cross-device, checkout, speed, and QA validation.
- **05. Launch**: Zero-downtime deployment and catalog migration.
- **06. Optimization**: Continuous CRO, speed tuning, and retention campaigns.

### Related Solutions
Grow your Shopify business using:
- [SEO Solutions](/services/seo)
- [Performance Marketing](/services/performance-marketing)
- [Branding & Strategy](/services/branding)

### Frequently Asked Questions
- **Can you redesign an existing Shopify store?** Absolutely. We improve UX, speed, branding, and conversion rates.`
  },
  {
    slug: "app-development",
    title: "App Development",
    h1Title: "Custom Mobile App Development Services",
    tagline: "Native experiences, global reach.",
    metaTitle: "Mobile App Development Company | Android & iOS Apps",
    metaDescription: "Build mobile experiences your users actually enjoy. We create scalable Android and iOS applications focused on usability, performance, and business growth.",
    description1: "Build mobile experiences your users actually enjoy.",
    description2: "We create scalable Android and iOS applications focused on usability, performance, and business growth.",
    callout: "A great mobile app turns occasional buyers into highly engaged, loyal members of your ecosystem.",
    statValue: "4.8★",
    statLabel: "AVERAGE APP STORE RATING",
    tags: ["React Native", "iOS & Android", "API Architecture", "Cloud Scaling"],
    image: "/services/app-development.png",
    content: `### Introduction
Build mobile experiences your users actually enjoy.

We create scalable Android and iOS applications focused on usability, performance, and business growth.

### Services
- Android Apps
- iOS Apps
- React Native
- Flutter
- Backend APIs
- Cloud Integration
- UI/UX Design
- App Maintenance

### Benefits
- Cross-platform development
- High performance
- Secure architecture
- Scalable infrastructure

### Related Solutions
Need a complete digital ecosystem? Explore:
- [Website Development](/services/web-development)
- [Branding](/services/branding)
- [Performance Marketing](/services/performance-marketing)

### Frequently Asked Questions
- **Which platform should I choose?** It depends on your audience, budget, and business goals. We help determine the best solution.`
  },
  {
    slug: "seo",
    title: "SEO Solutions",
    h1Title: "SEO Services That Drive Sustainable Organic Growth",
    tagline: "Own the search, capture the intent.",
    metaTitle: "Professional SEO Services | Grow Organic Traffic | Southern Edge Marketing",
    metaDescription: "SEO is more than rankings—it’s about attracting the right audience and converting them into customers. We provide technical SEO, content optimization, keyword strategy, and authority building.",
    description1: "SEO is more than rankings—it’s about attracting the right audience and converting them into customers.",
    description2: "We provide technical SEO, content optimization, keyword strategy, and authority building to improve visibility and increase qualified traffic.",
    callout: "Ranking #1 is cool, but ranking for the queries that actually make money is where real growth happens.",
    statValue: "150%",
    statLabel: "GROWTH IN ORGANIC SESSIONS",
    tags: ["Technical SEO", "Keyword Strategy", "Content Audits", "Link Building"],
    image: "/services/seo.png",
    content: `### Introduction
SEO is more than rankings—it’s about attracting the right audience and converting them into customers.

We provide technical SEO, content optimization, keyword strategy, and authority building to improve visibility and increase qualified traffic.

### Services
- Technical SEO
- On-page SEO
- Off-page SEO
- Keyword Research
- Content Strategy
- Link Building
- Local SEO
- SEO Audits

### Benefits
- Higher Google rankings
- More qualified traffic
- Better ROI
- Long-term growth
- Increased authority

### Related Solutions
Improve results with:
- [Website Development](/services/web-development)
- [Performance Marketing](/services/performance-marketing)
- [Branding](/services/branding)

### Frequently Asked Questions
- **How long does SEO take?** Most businesses begin seeing measurable improvements within 3 to 6 months.`
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    h1Title: "Performance Marketing Focused on Measurable ROI",
    tagline: "Precision spending, measurable return.",
    metaTitle: "Performance Marketing Agency | Google & Meta Ads",
    metaDescription: "Every advertising dollar should generate measurable business growth. We manage paid advertising campaigns across Google, Meta, LinkedIn, and other digital platforms while continuously optimizing for lower acquisition costs and higher returns.",
    description1: "Every advertising dollar should generate measurable business growth.",
    description2: "We manage paid advertising campaigns across Google, Meta, LinkedIn, and other digital platforms while continuously optimizing for lower acquisition costs and higher returns.",
    callout: "Ad budgets are easy to spend but hard to return, we design funnels that turn clicks into profitable scale.",
    statValue: "4.5x",
    statLabel: "AVERAGE RETURN ON AD SPEND",
    tags: ["Meta Ads", "Google Ads/PMax", "Funnel Optim.", "Audience Scaling"],
    image: "/services/performance-marketing.png",
    content: `### Introduction
Every advertising dollar should generate measurable business growth.

We manage paid advertising campaigns across Google, Meta, LinkedIn, and other digital platforms while continuously optimizing for lower acquisition costs and higher returns.

### Services
- Google Ads
- Meta Ads
- LinkedIn Ads
- Remarketing
- Conversion Tracking
- Landing Pages
- Funnel Optimization
- Campaign Management

### Benefits
- Lower CPA
- Higher ROAS
- Better conversions
- Accurate reporting

### Related Solutions
Pair paid advertising with:
- [Website Development](/services/web-development)
- [SEO Solutions](/services/seo)
- [Branding](/services/branding)
- [Shopify Development](/services/shopify-development)

### Frequently Asked Questions
- **Do you manage existing ad accounts?** Yes. We can audit, optimize, or fully manage your campaigns.`
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    h1Title: "Social Media Management That Builds Communities",
    tagline: "Be talked about, not just scrolled past.",
    metaTitle: "Social Media Management Services | Build Your Brand Online",
    metaDescription: "Social media isn't just about posting content—it's about building meaningful relationships with your audience. We develop data-driven social media strategies that increase brand awareness, engagement, and customer loyalty.",
    description1: "Social media isn't just about posting content—it's about building meaningful relationships with your audience.",
    description2: "We develop data-driven social media strategies that increase brand awareness, engagement, and customer loyalty across today's most influential platforms.",
    callout: "Attention is the currency of the digital age, we build content that makes your brand the center of attention.",
    statValue: "6.8x",
    statLabel: "INCREASE IN SOCIAL ENGAGEMENT",
    tags: ["Content Creation", "Community Mgmt", "Short-Form Video", "Influencer Collab"],
    image: "/services/social-media.png",
    content: `### Introduction
Social media isn't just about posting content—it's about building meaningful relationships with your audience.

We develop data-driven social media strategies that increase brand awareness, engagement, and customer loyalty across today's most influential platforms.

### Services
- Content Strategy
- Content Creation
- Social Media Design
- Community Management
- Reels & Short Videos
- Influencer Campaigns
- Social Advertising
- Monthly Analytics

### Benefits
- Increased engagement
- Better brand awareness
- Stronger customer relationships
- Consistent online presence

### Process
- **01. Research**: Understanding your audience, competitors, and channel opportunities.
- **02. Content Planning**: Structuring themes, calendars, and platform distribution tactics.
- **03. Creative Production**: Designing high-converting graphics, reels, and video assets.
- **04. Publishing**: Managing schedule, optimal post times, and captions across platforms.
- **05. Community Management**: Engaging with followers, comments, and direct messages in real time.
- **06. Monthly Optimization**: Analyzing performance data and tuning strategy for compound growth.

### Related Solutions
Combine social growth with:
- [Branding & Strategy](/services/branding)
- [Performance Marketing](/services/performance-marketing)
- [Website Development](/services/web-development)
- [SEO Solutions](/services/seo)

### Frequently Asked Questions
- **Which social platforms do you manage?** We manage Instagram, Facebook, LinkedIn, X, TikTok, Pinterest, and YouTube depending on your business goals.`
  }
];

export const getServiceBySlug = (slug: string) => {
  if (slug === "website-development") return services.find((service) => service.slug === "web-development");
  if (slug === "branding-strategy") return services.find((service) => service.slug === "branding");
  if (slug === "seo-services") return services.find((service) => service.slug === "seo");
  return services.find((service) => service.slug === slug);
};
