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
Build mobile experiences your users actually enjoy. We create highly scalable Android and iOS applications focused entirely on usability, native performance, and driving tangible business growth. By combining intuitive interfaces with robust backend architectures, we ensure your app becomes a daily habit for your audience.

### Services
**Cross-Platform Mastery:** We build native Android Apps, iOS Apps, and highly efficient cross-platform solutions using React Native and Flutter. 

**Complete Ecosystems:** Beyond the frontend, we engineer secure Backend APIs, provide seamless Cloud Integration, design beautiful UI/UX, and offer ongoing App Maintenance to keep your software running flawlessly.

### Benefits
**Unmatched Performance:** Leverage cross-platform development without sacrificing high performance or fluid animations. 

**Enterprise Security:** We deliver a secure architecture built on a scalable infrastructure, ensuring your application can handle massive spikes in user adoption without faltering.

### Related Solutions
**Need a complete digital ecosystem? Explore:**
- [Website Development](/services/web-development)
- [Branding](/services/branding)
- [Performance Marketing](/services/performance-marketing)

### Frequently Asked Questions
**Which platform should I choose?** 
It heavily depends on your target audience, timeline, budget, and specific business goals. We provide a detailed consultation to help determine the best technological solution for your app.`
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
Social media isn't just about blindly posting content—it's about building authentic, meaningful relationships with your target audience. We develop robust, data-driven social media strategies that dramatically increase brand awareness, drive high engagement rates, and foster deep customer loyalty across today's most influential platforms.

### Services
**Creative Production:** We handle complete Content Strategy, high-quality Content Creation, and beautiful Social Media Design. 

**Community & Growth:** Our team excels at active Community Management, producing viral Reels & Short Videos, orchestrating Influencer Campaigns, running targeted Social Advertising, and providing detailed Monthly Analytics.

### Benefits
**Audience Connection:** See massively increased engagement and significantly better brand awareness within your target demographic.

**Brand Loyalty:** Build stronger, more resilient customer relationships through a consistent, highly professional online presence that humanizes your brand.

### Process
**01. Research:** We begin by deeply understanding your audience demographics, auditing competitors, and identifying unique channel opportunities.

**02. Content Planning:** We strategically structure content themes, aesthetic calendars, and cross-platform distribution tactics.

**03. Creative Production:** Our studio designs high-converting, eye-catching graphics, engaging reels, and premium video assets.

**04. Publishing:** We meticulously manage your posting schedule, utilizing optimal post times and crafting compelling captions across all networks.

**05. Community Management:** We actively engage with your followers, promptly responding to comments and direct messages in real time to foster community.

**06. Monthly Optimization:** We thoroughly analyze performance data and fine-tune our strategy month over month for compound audience growth.

### Related Solutions
**Combine social growth with:**
- [Branding & Strategy](/services/branding)
- [Performance Marketing](/services/performance-marketing)
- [Website Development](/services/web-development)
- [SEO Solutions](/services/seo)

### Frequently Asked Questions
**Which social platforms do you manage?** 
We professionally manage Instagram, Facebook, LinkedIn, X (Twitter), TikTok, Pinterest, and YouTube, entirely depending on your specific business goals and where your audience lives.`
  }
];

export const getServiceBySlug = (slug: string) => {
  if (slug === "website-development") return services.find((service) => service.slug === "web-development");
  if (slug === "branding-strategy") return services.find((service) => service.slug === "branding");
  if (slug === "seo-services") return services.find((service) => service.slug === "seo");
  return services.find((service) => service.slug === slug);
};
