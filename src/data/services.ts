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
  faqs?: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Custom Website Design Solutions",
    h1Title: "Website Development Services That Turn Visitors Into Customers",
    tagline: "Convert, not just impress.",
    metaTitle: "Website Development Company | High-Converting Business Websites | Southern Edge Marketing",
    metaDescription: "Build high-performance websites designed for conversions. Southern Edge Marketing creates SEO-friendly, responsive websites that generate leads, increase sales, and grow businesses.",
    description1: "Your website is the foundation of your online presence. We specialize in custom website design that turns casual visitors into loyal customers. Our developers build high-performance platforms that are incredibly fast and fully responsive. Whether you need a simple corporate site or a complex digital platform, our web development team ensures an optimal user experience and superior conversion rates.",
    description2: "Using modern frameworks like Next.js and React, we ensure your store or landing page is lightning-fast, fully responsive, and optimized to capture every possible lead.",
    callout: "The foundation of every growth system, without a website that converts, every other channel is pouring water into a leaky bucket.",
    statValue: "3.2x",
    statLabel: "AVG. CONVERSION IMPROVEMENT",
    tags: ["UX Design", "Development", "CRO", "CMS"],
    image: "/services/website-development.png",
    content: `### Introduction
Your website is your business's most valuable digital asset. It should do more than look beautiful—it should generate leads, build trust, and convert visitors into paying customers. In today's highly competitive digital landscape, a generic online presence is simply not enough. Your digital storefront must be meticulously engineered to reflect your brand's unique identity while flawlessly guiding users through an optimized conversion funnel.

At Southern Edge Marketing, we create custom websites focused on user experience, speed, SEO, and conversion optimization. Every website is strategically designed to support long-term business growth while providing a seamless experience across desktop, tablet, and mobile devices. Whether you need a corporate website, landing page, or complete business platform, our team builds websites engineered for measurable results. We don't just build sites; we architect digital experiences that solve complex business challenges, streamline operations, and ultimately drive sustainable, compounding revenue for your organization.

### What We Offer
**Comprehensive Development:** We deliver end-to-end custom website design and responsive development tailored to your brand's unique identity and business goals. From initial wireframes to final deployment, our holistic approach ensures that every single pixel and line of code serves a specific, strategic purpose in your overarching marketing strategy.

**Specialized Architecture:** Whether you need high-converting landing pages, robust CMS development, or advanced headless architectures, our team ensures your digital presence is built to scale securely. We leverage modern frameworks like Next.js and React to build dynamic, data-rich applications that load instantly and perform flawlessly under heavy traffic.

**Optimization & Growth:** From initial technical SEO setup to ongoing website maintenance and rigorous conversion optimization, we handle every aspect of your online platform so you can focus on running your business. Our post-launch support includes continuous A/B testing, speed audits, and security updates to keep your site at the cutting edge of digital performance.

### E-commerce Solutions
**High-Converting Storefronts:** For retail and direct-to-consumer brands, a seamless shopping experience is non-negotiable. We build robust, scalable e-commerce platforms using Shopify, WooCommerce, and custom architectures. Our online stores are designed to minimize cart abandonment, maximize average order value, and deliver a frictionless checkout process.

**Inventory & API Integrations:** Modern e-commerce relies on synchronizing complex systems. We integrate advanced inventory management, global payment gateways, and enterprise resource planning (ERP) software directly into your storefront, ensuring automated workflows and flawless fulfillment operations.

### Custom Web Applications
**Tailored Software Development:** Beyond standard websites, we engineer bespoke web applications tailored specifically to solve your unique business challenges. From custom client portals and internal dashboards to full-scale SaaS platforms, we build intuitive interfaces powered by secure, high-performance backends.

**Scalable Cloud Infrastructure:** Our web applications are deployed on cutting-edge cloud infrastructure, guaranteeing 99.9% uptime and auto-scaling capabilities. As your user base grows, your application seamlessly expands its resources to handle the increased load without any performance degradation.

### Modern Technology Stack
**Future-Proof Engineering:** We refuse to rely on bloated, outdated templates. Instead, we build your digital infrastructure using the most advanced, enterprise-grade technology stack available today. By utilizing React, Next.js, and Tailwind CSS, we ensure that your website benefits from server-side rendering, static site generation, and highly optimized asset delivery.

**Seamless API Integrations:** Modern businesses rely on a complex web of software. Our development team specializes in seamlessly integrating third-party APIs, CRM systems like Salesforce and HubSpot, custom payment gateways, and sophisticated marketing automation tools directly into your website's core architecture, ensuring your business operates without friction.

### Why Choose Us
**Mobile-First Performance:** Partnering with Southern Edge Marketing means choosing a mobile-first approach that guarantees lightning-fast performance across all devices. We build on an SEO-ready architecture with clean, scalable code. Because over 60% of all web traffic now originates from mobile devices, we meticulously optimize touch targets, navigation flows, and image loading specifically for smaller screens.

**Conversion-Focused Engineering:** Our layouts are meticulously crafted to turn casual visitors into loyal customers, ensuring your website works as a powerful, autonomous sales engine 24/7. We employ advanced heat-mapping, scroll-depth tracking, and user behavior analytics to continuously refine the user interface and maximize your return on investment.

### Security & Compliance
**Uncompromising Data Protection:** In an era of increasing digital threats, the security of your website and your customers' data is paramount. We implement robust, military-grade security protocols, including advanced SSL encryption, automated threat detection, and comprehensive DDoS protection to safeguard your digital assets against malicious attacks.

**Global Privacy Compliance:** Navigating international data privacy laws can be complex and overwhelming. Our development team ensures that your new platform is fully compliant with global data protection regulations, including GDPR, CCPA, and HIPAA. We build in transparent cookie management and secure data handling processes to protect both your business liability and your users' privacy.

### Our Process
**01. Discovery:** We begin by deeply understanding your business goals, target audience, and current market position to build a solid strategic foundation. This involves comprehensive stakeholder interviews and competitive landscape analysis.

**02. UX Strategy:** Our experts map out intuitive user journeys that eliminate friction and are aggressively focused on driving conversions and engaging users. We create detailed wireframes and interactive prototypes to visualize the flow before writing a single line of code.

**03. UI Design:** We craft visually stunning, highly engaging interfaces that resonate with your brand guidelines and captivate your digital visitors. Our designers meticulously select typography, color palettes, and micro-animations that elevate your brand perception.

**04. Development:** Utilizing modern, optimized coding practices, we bring the designs to life with a strict focus on speed, accessibility, and scalability. Our developers follow rigorous code review processes and automated testing to ensure absolute reliability.

**05. QA Testing:** Rigorous performance, security, and cross-device responsiveness testing ensures a flawless launch without unexpected downtime. We test across dozens of browser and device combinations to guarantee a uniform experience.

**06. Launch & Growth:** After a successful deployment, we continuously monitor performance analytics and implement data-driven improvements for compounding returns. Your dedicated account manager will provide transparent monthly reporting on traffic and conversion metrics.

### Ongoing Support & Maintenance
**Proactive Monitoring:** A successful digital launch is only the beginning. Our dedicated support teams monitor your platform 24/7, actively identifying and resolving potential issues before they impact your users. We handle routine software updates, plugin compatibility, and continuous performance tuning.

**Strategic Iterations:** The digital landscape is constantly evolving, and your website should too. We work closely with you to analyze user behavior data, running continuous A/B tests and iterative design improvements to ensure your conversion rates consistently climb month over month.

### Industries We Serve
**Broad Expertise:** Our customized web solutions have successfully empowered businesses across a wide spectrum of industries. We specialize in building robust platforms for Healthcare providers, Law Firms, and rapidly growing SaaS companies. We understand the unique regulatory requirements, consumer behaviors, and technical challenges inherent to these highly competitive sectors.

**Diverse Portfolios:** Additionally, our technical expertise extends to Real Estate, Education, Ecommerce, Finance, and dynamic Startups looking to make a strong, immediate digital impact in their respective markets. No matter your industry, we adapt our proven methodologies to create a digital platform that uniquely positions you as a market leader.`,
    faqs: [
      { question: "How long does website development take?", answer: "Most bespoke projects are completed within 4 to 8 weeks depending on the complexity of the features and integrations required." },
      { question: "Do you redesign existing websites?", answer: "Yes. We modernize outdated websites while drastically improving speed, SEO foundation, and overall conversion rates." },
      { question: "Do you combine SEO services in Delhi with paid ads?", answer: "Yes, we do. While our SEO services in Delhi build your long term organic presence, our targeted PPC services in Delhi provide immediate visibility. Combining both approaches ensures you capture both active buyers right now and future customers over time for maximum return on investment." },
      { question: "Do you work with businesses outside of Delhi and Dubai?", answer: "Absolutely. While we have a strong physical presence in Delhi and Dubai, we operate globally. We have successfully partnered with over 100 businesses across India, the Middle East, and beyond, delivering high-converting digital solutions." },
      { question: "What makes your custom website design different from templates?", answer: "Template websites often suffer from bloat, slow loading times, and generic user experiences. We build our websites from the ground up using modern frameworks like Next.js, ensuring lightning-fast performance, unique brand alignment, and an architecture explicitly designed to maximize your conversion rates." },
      { question: "How do you measure the success of a performance marketing campaign?", answer: "We move past vanity metrics and focus squarely on your bottom line. Success is measured by tracking Cost Per Acquisition (CPA), Return On Ad Spend (ROAS), and overall lead quality. We set up advanced full-funnel tracking to ensure every dollar spent is accounted for." },
      { question: "Do you provide ongoing maintenance and support after a website launch?", answer: "Yes, launching your website is just the beginning. We offer comprehensive ongoing maintenance, security updates, speed optimizations, and continuous Conversion Rate Optimization (CRO) to ensure your digital platform scales smoothly alongside your business." }
    ]
  },
  {
    slug: "app-development",
    title: "Mobile App Development Services",
    h1Title: "Custom Mobile App Development Services",
    tagline: "Native experiences, global reach.",
    metaTitle: "Mobile App Development Company | Android & iOS Apps",
    metaDescription: "Build mobile experiences your users actually enjoy. We create scalable Android and iOS applications focused on usability, performance, and business growth.",
    description1: "Create native digital experiences that reach a global audience. Our mobile app development services deliver scalable iOS and Android applications. We prioritize seamless usability alongside secure cloud architecture. A professionally built mobile app easily transforms occasional buyers into highly engaged brand advocates.",
    description2: "We create scalable Android and iOS applications focused on usability, performance, and business growth.",
    callout: "A great mobile app turns occasional buyers into highly engaged, loyal members of your ecosystem.",
    statValue: "4.8★",
    statLabel: "AVERAGE APP STORE RATING",
    tags: ["React Native", "iOS & Android", "API Architecture", "Cloud Scaling"],
    image: "/services/app-development.png",
    content: `### Introduction
In a mobile-first world, your business needs more than just a website; it requires a powerful, intuitive mobile presence. We build mobile experiences your users actually enjoy. We create highly scalable Android and iOS applications focused entirely on usability, native performance, and driving tangible business growth. By combining intuitive interfaces with robust backend architectures, we ensure your app becomes a daily habit for your audience. From startups looking to disrupt the market to established enterprises seeking digital transformation, our mobile app development services are tailored to meet your unique objectives.

### Custom App Development Services
**Cross-Platform Mastery:** Maximize your reach while minimizing development time and costs. We build highly efficient cross-platform solutions using React Native and Flutter, ensuring a native-like experience on both iOS and Android from a single codebase.

**Native App Development:** For projects requiring maximum performance and deep device integration, we build bespoke native iOS (Swift) and Android (Kotlin) applications optimized for speed and fluidity.

**Complete Ecosystems:** Beyond the frontend, our expert engineers design secure Backend APIs, provide seamless Cloud Integration (AWS, Google Cloud, Azure), and construct scalable microservices architecture.

**App Modernization:** We breathe new life into legacy mobile applications by updating the tech stack, redesigning the UI/UX, and migrating to modern cloud architectures to improve performance and user retention.

### Strategic UI/UX Design
**User-Centric Interfaces:** An app's success hinges on its usability. Our design team meticulously maps out user journeys, creating wireframes and interactive prototypes that eliminate friction and guide users seamlessly toward conversion points.

**Engaging Micro-interactions:** We incorporate subtle animations and micro-interactions that provide satisfying tactile feedback, elevating the overall user experience from merely functional to highly delightful.

### Unmatched Performance & Security
**Lightning-Fast Execution:** We optimize every line of code to guarantee smooth 60fps animations and near-instant load times. Whether handling large data sets or complex media streaming, our apps are built to perform without lagging.

**Enterprise-Grade Security:** We prioritize your users' data with military-grade encryption, secure authentication (OAuth, Biometrics), and strict compliance with global privacy regulations like GDPR and CCPA. We deliver a secure architecture built on a scalable infrastructure, ensuring your application can handle massive spikes in user adoption without faltering.

### Our Development Process
**01. Strategy & Ideation:** We don't just write code; we partner with you to validate your app concept, define the target audience, and outline a monetization and growth strategy.

**02. Wireframing & Design:** Our designers create stunning, brand-aligned interfaces focused on maximizing user engagement and retention.

**03. Agile Development:** Working in two-week sprints, our development team builds your application iteratively, providing regular updates and allowing for flexible adaptations based on early feedback.

**04. Rigorous Testing (QA):** We perform comprehensive automated and manual testing across hundreds of real devices to ensure crash-free performance and flawless cross-platform consistency.

**05. Launch & Optimization:** We manage the entire App Store and Google Play submission process, utilizing App Store Optimization (ASO) best practices to maximize initial visibility. Post-launch, we monitor analytics and crash reports to continually refine the app.

### Ongoing App Maintenance
A successful app launch is only step one. We provide ongoing App Maintenance to keep your software running flawlessly, updating libraries for OS compatibility, monitoring server health, and proactively adding new features to keep your user base engaged month after month.

### Industries We Serve
We have delivered robust mobile applications across a variety of sectors including E-commerce & Retail, Healthcare & Telemedicine, FinTech, On-Demand Delivery Services, and B2B Enterprise Solutions. Our industry-specific expertise ensures your app meets the unique regulatory and user expectations of your market.

### Advanced API Integrations
**Seamless Connectivity:** Modern apps don't exist in a vacuum. We specialize in connecting your mobile application to complex third-party systems, including payment gateways (Stripe, PayPal), CRM platforms (Salesforce, HubSpot), and custom internal enterprise databases.

### App Store Optimization (ASO)
**Maximizing Organic Installs:** Building a great app is only half the battle; people need to find it. Our dedicated ASO experts optimize your app's title, keywords, descriptions, and screenshots to ensure you rank high in App Store and Google Play search results, driving consistent organic downloads.

### Related Solutions
**Need a complete digital ecosystem? Explore:**
- [Website Development](/services/web-development)
- [Social Media Management](/services/social-media-management)`,
    faqs: [
      { question: "Should I build a native or cross-platform app?", answer: "It depends on your specific needs. Cross-platform frameworks like React Native are great for faster time-to-market and budget efficiency. Native development (Swift/Kotlin) is ideal if your app requires heavy processing, complex animations, or deep integration with specific device hardware." },
      { question: "How much does it cost to develop a mobile app?", answer: "App development costs vary widely based on complexity, feature set, and platform choice. A simple utility app will cost significantly less than a complex on-demand delivery platform with robust backend infrastructure. We provide custom quotes after a detailed discovery session." },
      { question: "How long does the app development process take?", answer: "On average, a standard mobile application takes between 3 to 6 months from initial discovery to App Store launch. Highly complex enterprise applications may take longer, while simple MVPs can be deployed more rapidly." },
      { question: "Do you help with App Store and Google Play submissions?", answer: "Yes, we handle the entire submission and review process for both the Apple App Store and Google Play Store, ensuring all guidelines are met for a smooth launch." },
      { question: "Will I own the source code after launch?", answer: "Absolutely. Upon final payment and project completion, you retain 100% ownership of all source code, design assets, and intellectual property." },
      { question: "How do you ensure the app remains secure?", answer: "We follow industry-best security practices, including data encryption at rest and in transit, secure token-based authentication, regular vulnerability scanning, and compliance with data privacy standards." }
    ]
  },
  {
    slug: "social-media-management",
    title: "Expert Social Media Management",
    h1Title: "Social Media Management That Builds Communities",
    tagline: "Be talked about, not just scrolled past.",
    metaTitle: "Social Media Management Services | Build Your Brand Online",
    metaDescription: "Social media isn't just about posting content—it's about building meaningful relationships with your audience. We develop data-driven social media strategies that increase brand awareness, engagement, and customer loyalty.",
    description1: "Effective social media is about building a truly loyal community. We develop targeted content strategies that steadily increase brand awareness and audience engagement. By leveraging deep data analytics, we create compelling social campaigns that make your business the absolute center of attention.",
    description2: "We develop data-driven social media strategies that increase brand awareness, engagement, and customer loyalty across today's most influential platforms.",
    callout: "Attention is the currency of the digital age, we build content that makes your brand the center of attention.",
    statValue: "6.8x",
    statLabel: "INCREASE IN SOCIAL ENGAGEMENT",
    tags: ["Content Creation", "Community Mgmt", "Short-Form Video", "Influencer Collab"],
    image: "/services/social-media.png",
    content: `### Introduction
In today's hyper-connected digital ecosystem, simply maintaining a social media profile is no longer enough. Social media is not a broadcast channel; it's an interactive dialogue and the frontline of your brand's customer experience. We develop robust, data-driven social media strategies that dramatically increase brand awareness, drive high engagement rates, and foster deep, unshakeable customer loyalty across today's most influential platforms. Whether you're a B2B enterprise looking to establish thought leadership on LinkedIn, or a direct-to-consumer brand aiming for explosive viral growth on TikTok and Instagram, we meticulously tailor our approach to maximize your specific Return on Investment (ROI) and build communities that advocate for your brand.

### Comprehensive Social Media Services
**Strategic Content Creation:** We do not believe in creating filler content. We engineer highly shareable digital assets. Our in-house creative studio handles high-quality graphic design, compelling copywriting, and dynamic short-form video production (Instagram Reels, TikToks, YouTube Shorts) designed specifically with behavioral psychology in mind to capture attention within the critical first three seconds.

**Active Community Management & Growth:** We don't just accumulate followers; we build passionate communities. Our community management team excels at proactive engagement—responding rapidly to comments, nurturing high-value leads directly in DMs, and strategically interacting with adjacent niche communities to organically intercept and acquire your ideal audience.

**Influencer & Creator Ecosystems:** We go beyond one-off shoutouts. We identify, vet, negotiate with, and manage long-term relationships with key influencers and micro-creators in your specific niche. By strategically leveraging their established trust and authentic voices, we rapidly expand your brand's reach, credibility, and social proof.

**Integrated Paid Social Advertising:** Organic reach is essential, but it has limits. We integrate highly targeted paid social campaigns across Meta (Facebook & Instagram), LinkedIn, TikTok, and Pinterest. By amplifying your best-performing organic content and utilizing advanced lookalike audiences and retargeting pixels, we ensure your message reaches users with the highest intent to purchase, driving measurable direct conversions.

### Platform-Specific Expertise
**Instagram & Facebook (Meta):** We leverage the full Meta ecosystem. From building aesthetic, grid-worthy Instagram feeds and engaging daily Stories to running highly complex, multi-stage Facebook ad funnels, we turn the world's largest social networks into your most reliable revenue streams. We heavily utilize Instagram Shopping and seamless checkout features for eCommerce clients.

**TikTok & Short-Form Video:** We help brands speak the language of modern attention. Our TikTok strategies focus on authenticity, jumping on relevant audio trends early, and producing high-volume, lo-fi video content that feels native to the platform. We focus heavily on User Generated Content (UGC) styles that build immediate trust with Gen-Z and Millennial demographics.

**LinkedIn for B2B Growth:** We transform corporate LinkedIn pages into authoritative industry hubs. Our B2B strategies focus on executive ghostwriting, publishing in-depth thought leadership articles, sharing proprietary data, and running highly targeted Account-Based Marketing (ABM) campaigns to generate high-value enterprise leads.

**X (Twitter) & Real-Time Engagement:** For brands that need to be part of the daily cultural conversation, we deploy agile X (Twitter) strategies. We focus on real-time trend participation, witty community interaction, and rapid-response customer service to build a highly active, vocal brand presence.

### The Tangible Benefits of Expert Management
**Unmatched Audience Connection:** Stop shouting into the void. By consistently publishing highly relevant, value-driven content tailored to the specific nuances of each platform, you will see massively increased engagement and significantly better brand recall within your core target demographic.

**Resilient Brand Loyalty & Crisis Mitigation:** Build stronger, more resilient customer relationships. A consistent, highly professional online presence humanizes your brand. Furthermore, our proactive community monitoring ensures that potential PR issues are identified and mitigated before they can escalate into full-blown crises.

**Time and Resource Efficiency:** Managing multiple social platforms effectively requires a full-time, multidisciplinary team of strategists, copywriters, designers, and media buyers. By partnering with us, you regain your focus on your core business operations and product development, while we handle the grueling daily rigors of content calendars, trend spotting, and algorithmic updates.

### Our Proven End-to-End Process
**01. Deep-Dive Research & Audit:** We begin by deeply understanding your audience demographics and psychographics. We conduct a comprehensive, data-backed audit of your current channels, analyze your top competitors, and identify unique whitespace opportunities in your industry's social landscape.

**02. Strategic Content Planning:** We develop a robust, multi-pillar content matrix. We strategically structure content themes, establish strict visual aesthetic guidelines, and map out cross-platform distribution tactics to ensure a cohesive yet platform-native brand narrative.

**03. High-End Creative Production:** Our production studio brings the strategy to life. We design high-converting graphics, edit engaging short-form videos, and produce premium assets tailored precisely to the specific dimensions, format requirements, and cultural norms of each individual platform.

**04. Optimized Publishing & SEO:** We meticulously manage your posting schedule using enterprise software. Utilizing advanced predictive analytics, we determine the optimal post times for your specific audience and craft compelling, keyword-rich, SEO-optimized captions and hashtag strategies to maximize searchability within social networks.

**05. Proactive Community Management:** We act as your brand's digital concierge. We actively engage with your followers, promptly responding to comments and direct messages in real-time, fostering a vibrant community atmosphere and swiftly resolving customer service inquiries.

**06. Advanced Analytics & Iterative Optimization:** We don't guess; we measure obsessively. We thoroughly analyze performance data, tracking key metrics such as Engagement Rate, Reach, Share of Voice, and Click-Through-Rate. We hold monthly strategy sessions to review this data, fine-tuning our approach month over month to ensure compounding audience growth and increasing ROI.

### Advanced Social Commerce Strategies
The gap between scrolling and shopping is closing rapidly. We implement advanced social commerce strategies, integrating your product catalogs directly into platforms like Instagram, Facebook, and TikTok. We reduce purchase friction by enabling seamless in-app checkout experiences, turning your social profiles into highly effective secondary storefronts.

### Transparent Reporting & Analytics
**Actionable Insights:** We believe in absolute transparency. You will receive customized, interactive monthly reports detailing every critical metric—from top-of-funnel follower growth and reach, down to bottom-of-funnel link clicks, conversions, and Cost-Per-Acquisition (CPA). We meet with your executive team regularly to review these insights, translate data into business intelligence, and adjust our strategic roadmap accordingly.

### Related Solutions
**Combine social growth with:**
- [Website Development](/services/web-development)
- [App Development](/services/app-development)`,
    faqs: [
      { question: "Which social media platforms do you manage?", answer: "We professionally manage a wide array of platforms including Instagram, Facebook, LinkedIn, X (Twitter), TikTok, Pinterest, and YouTube. Our platform recommendation is entirely dependent on your specific business goals and where your target audience is most active." },
      { question: "How often will you post on my social media accounts?", answer: "Posting frequency varies based on your selected package and the specific platform's best practices. Typically, this ranges from 3 to 5 high-quality posts per week per platform, supplemented by daily Stories and proactive community engagement." },
      { question: "Do I need to provide the images and videos?", answer: "Not at all. We have an in-house creative team that handles graphic design and video editing. However, if you have existing brand assets, product photos, or raw video footage, we will gladly incorporate them into our content strategy." },
      { question: "How do you measure social media success?", answer: "While we track vanity metrics like followers and likes, our primary focus is on actionable business metrics: Engagement Rate, Website Traffic generated from social, Lead Generation (via DMs or link clicks), and overall Return on Ad Spend (ROAS) for paid campaigns." },
      { question: "Can you help with negative comments or PR crises?", answer: "Yes, our community management team is trained in crisis communication. We monitor your channels closely, respond to negative feedback professionally and promptly, and escalate critical issues to your team with a recommended action plan." },
      { question: "Is there a minimum contract length?", answer: "Because social media growth builds momentum over time, we typically require an initial 3 to 6-month commitment. This allows us sufficient time to implement our strategy, gather meaningful data, and optimize for sustainable, long-term growth." }
    ]
  }
];

export const getServiceBySlug = (slug: string) => {
  if (slug === "website-development") return services.find((service) => service.slug === "web-development");
  if (slug === "branding-strategy") return services.find((service) => service.slug === "branding");
  if (slug === "seo-services") return services.find((service) => service.slug === "seo");
  return services.find((service) => service.slug === slug);
};
