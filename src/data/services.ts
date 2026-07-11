export interface Service {
  slug: string;
  title: string;
  description1: string;
  description2: string;
  tags: string[];
  image: string;
  content: string; // Markdown content
}

export const services: Service[] = [
  {
    slug: "ui-ux-design",
    title: "Ui/UX Design",
    description1: "We craft digital experiences that are intuitive, beautiful, and user-centric.",
    description2: "By focusing on user behavior, wireframing, and interactive prototyping, we turn complex ideas into clear and engaging user interfaces.",
    tags: ["User Experience", "User Interface", "Figma", "Prototyping", "Wireframing"],
    image: "/services/branding.png",
    content: `Navigating the Modern Digital Experience
In today's competitive digital landscape, exceptional user experience is no longer optional. Businesses need intuitive interfaces, research-driven design, and seamless digital journeys that improve engagement, conversions, and customer satisfaction. Our UI/UX design services help startups, SMEs, and enterprises transform ideas into delightful digital products through strategy, research, wireframing, prototyping, visual design, usability testing, and design systems.

### What is UI/UX Design?
UI (User Interface) Design focuses on the visual appearance of digital products, while UX (User Experience) Design focuses on usability, accessibility, and the complete customer journey. Together they ensure products are attractive, intuitive, and business-driven.

### Our Comprehensive UI/UX Services
- UX Research and Discovery
- User Personas & Journey Mapping
- Information Architecture
- Wireframing & Interactive Prototypes
- Mobile App UI Design
- Website UI Design
- SaaS Dashboard Design
- Design Systems
- Usability Testing
- Product Redesign

### Our Process
- Discovery & Business Analysis
- UX Research & Wireframes
- High-Fidelity UI Design & Prototype
- Developer Handoff & Design QA

### Why Choose Us?
We combine business strategy, UX psychology, modern design systems, and scalable workflows to build products that are visually appealing and conversion-focused. Every project emphasizes accessibility, responsiveness, performance, and consistency.

### Client Success Story
A SaaS startup improved user activation by redesigning onboarding, simplifying navigation, and introducing a scalable design system. The result was higher engagement, improved retention, and faster product adoption.`
  },
  {
    slug: "web-development",
    title: "Web Development",
    description1: "We build fast, secure, and fully responsive websites tailored to your business goals.",
    description2: "Using modern architectures and clean code standards, we ensure your site is optimized for performance, scalability, and seamless user experiences.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "APIs", "Performance"],
    image: "/services/website-development.png",
    content: `Building High-Performance Digital Experiences
A modern website is the foundation of a successful online presence. Our web development services focus on speed, scalability, security, responsive design, and conversion optimization. We build websites that not only look exceptional but also drive measurable business growth.

### What is Web Development?
Web development involves designing, building, maintaining, and optimizing websites and web applications. It includes frontend development, backend development, databases, APIs, cloud deployment, and continuous performance improvements.

### Our Comprehensive Web Development Services
- Business Websites
- Corporate Websites
- Landing Pages
- Custom Web Applications
- Ecommerce Development
- CMS Development
- API Integration
- Dashboard Development
- Website Maintenance
- Performance Optimization

### Technologies We Use
HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Node.js, Express.js, PHP, Laravel, Shopify, WordPress, MongoDB, MySQL, PostgreSQL, Firebase, AWS, Vercel, Git, and REST APIs.

### Our Development Process
- Discovery & Requirement Analysis
- UI Implementation & Backend Development
- Testing, Security & Performance Optimization
- Deployment, Maintenance & Continuous Support

### Why Choose Us?
We build SEO-friendly, mobile-responsive, secure, and lightning-fast websites using modern development practices. Our focus is on scalability, clean architecture, excellent user experience, and long-term business growth.

### Client Success Story
An ecommerce company migrated to a custom Next.js platform, reducing page load time by over 60% while improving search visibility and increasing online sales through a better shopping experience.`
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    description1: "We run highly targeted, data-driven ad campaigns that maximize conversion rates and scale business growth.",
    description2: "From audience research to ongoing optimization, we focus on measurable results and maximizing return on investment.",
    tags: ["Google Ads", "Meta Ads", "A/B Testing", "Targeting", "ROI"],
    image: "/services/performance-marketing.png",
    content: `Driving Measurable Business Growth
Performance marketing focuses on measurable results through paid advertising, audience targeting, conversion optimization, and continuous campaign improvements. We help brands maximize return on ad spend while generating qualified leads and sales.

### What is Performance Marketing?
Performance marketing is a data-driven digital marketing approach where campaigns are optimized based on measurable KPIs such as leads, sales, conversions, ROAS, CAC, and customer lifetime value.

### Our Performance Marketing Services
- Google Ads
- Meta Ads (Facebook & Instagram)
- LinkedIn Ads
- YouTube Advertising
- Conversion Rate Optimization
- Landing Page Optimization
- Retargeting Campaigns
- Ecommerce Advertising
- Analytics & Reporting

### Platforms & Tools
Google Ads, Meta Ads Manager, LinkedIn Campaign Manager, Google Analytics 4, Google Tag Manager, Search Console, Hotjar, Microsoft Clarity, Merchant Center, and Looker Studio.

### Our Process
- Business & Audience Research
- Campaign Strategy & Creative Planning
- Launch, Optimization & A/B Testing
- Reporting, Scaling & Continuous Improvement

### Why Choose Us?
We build highly targeted campaigns backed by analytics, creative testing, and conversion optimization to maximize ROI while minimizing wasted ad spend.

### Client Success Story
A D2C ecommerce brand increased online revenue by improving campaign targeting, optimizing product feeds, and implementing retargeting strategies that significantly boosted ROAS.`
  },
  {
    slug: "seo",
    title: "SEO",
    description1: "We optimize your website's search engine visibility to drive consistent, high-intent organic traffic.",
    description2: "Through comprehensive keyword research, on-page optimization, and technical audits, we build sustainable rankings.",
    tags: ["On-Page SEO", "Technical SEO", "Keywords", "Link Building", "Rankings"],
    image: "/services/seo.png",
    content: `Achieving Sustainable Organic Growth
Search Engine Optimization (SEO) helps businesses increase visibility, attract qualified traffic, and generate long-term growth through higher rankings on search engines. Our SEO strategies combine technical expertise, content optimization, and authority building to deliver measurable results.

### What is SEO?
SEO is the process of optimizing websites so they rank higher on search engines like Google. It includes technical SEO, keyword research, on-page optimization, content strategy, link building, and performance improvements.

### Our Comprehensive SEO Services
- SEO Audits
- Keyword Research
- On-Page SEO
- Technical SEO
- Local SEO
- Ecommerce SEO
- Content Strategy
- Link Building
- SEO Reporting & Analytics

### Tools & Technologies
Google Search Console, Google Analytics 4, Ahrefs, SEMrush, Screaming Frog, PageSpeed Insights, GTmetrix, Google Business Profile, Bing Webmaster Tools, and Looker Studio.

### Our SEO Process
- Website Audit & Competitor Analysis
- Keyword & Content Strategy
- Technical & On-Page Optimization
- Monitoring, Reporting & Continuous Growth

### Why Choose Us?
Our SEO campaigns are focused on sustainable rankings, improved user experience, technical excellence, and content that aligns with search intent to generate consistent organic leads.

### Client Success Story
A B2B software company doubled its organic traffic within months through technical optimization, strategic content creation, and authority-building campaigns, resulting in increased qualified inquiries.`
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    description1: "We build fully customized, conversion-focused e-commerce stores designed to scale with your sales.",
    description2: "From storefront setup to liquid customization and seamless checkout optimization, we cover every aspect of e-commerce.",
    tags: ["Shopify", "Liquid Templates", "Custom Checkout", "Integrations", "E-commerce"],
    image: "/services/website-revamp.png",
    content: `Building High-Converting Shopify Stores
Shopify is one of the world's leading ecommerce platforms. We create fast, scalable, and conversion-focused Shopify stores that help brands establish a strong online presence, improve customer experience, and increase sales.

### What is Shopify Development?
Shopify development involves designing, developing, customizing, and optimizing ecommerce stores using Shopify's ecosystem. It includes theme development, custom functionality, app integrations, payment gateways, and ongoing store optimization.

### Our Comprehensive Shopify Services
- Custom Shopify Store Development
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
    description1: "We engineer robust, high-performance mobile applications that deliver native-like user experiences.",
    description2: "Whether iOS or Android, we develop seamless frontend interfaces connected to reliable, scalable backends.",
    tags: ["React Native", "iOS Apps", "Android Apps", "APIs", "App Store"],
    image: "/services/app-development.png",
    content: `Building Powerful Mobile Applications
Mobile applications have become an essential part of digital transformation. We develop scalable, secure, and user-friendly Android, iOS, and cross-platform applications that help businesses engage customers, streamline operations, and accelerate growth.

### What is App Development?
App development is the process of designing, developing, testing, deploying, and maintaining mobile applications. It combines user experience, backend architecture, APIs, cloud infrastructure, and security to create high-performing digital products.

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
];

export const getServiceBySlug = (slug: string) => {
  return services.find((service) => service.slug === slug);
};
