export type ProjectCategory =
  | "Web Design"
  | "Meta Ads"
  | "Lead Generation"
  | "SEO"
  | "Branding"
  | "Social Media"
  | "Photography";

export type Project = {
  id?: number | string;
  slug: string;
  title: string;
  category: ProjectCategory;
  tag: string;
  categories: ProjectCategory[];
  description: string;
  client: string;
  duration: string;
  services: string;
  websiteUrl?: string;
  projectType?: "Shopify Store" | "Custom Code" | "Mobile App" | "Visual Identity" | "Photoshoot";
  flag?: string;
  content?: string; // Rich HTML case study content (Headings, Approach, Vision, Impact)
  image: string; // Used for the grid
  heroImage: string; // Used for the individual page
  gallery: string[]; // Additional images
  created?: number;
};

export const projects: Project[] = [
  // --- PROJECTS WITH LIVE WEBSITE LINKS (DISPLAYED FIRST) ---
  {
    id: 101,
    slug: "ama",
    title: "AMA Legal Solutions",
    category: "Web Design",
    tag: "LEGAL SERVICES",
    categories: ["Web Design", "SEO", "Lead Generation"],
    projectType: "Custom Code",
    flag: "🇺🇸",
    description: "A leading corporate and commercial law firm providing high-end legal counsel and cross-border solutions.",
    client: "AMA Legal Solutions",
    duration: "8 Weeks",
    services: "Corporate Law Digital Infrastructure, UI/UX Design, Custom Code Development, SEO & Lead Generation",
    websiteUrl: "https://www.amalegalsolutions.com/",
    content: `
      <p>AMA Legal Solutions is a premier legal services experience built to deliver a digital presence as refined as their services. It pairs a sleek, editorial aesthetic with high-performance engineering to provide a comprehensive, intuitive interface and fully scalable architecture right out of the box.</p>
      
      <h2>Important</h2>
      <p>Modern digital platforms don't just display information — they build credibility. AMA Legal Solutions is structured around that reality, guiding each visitor from curiosity to action using proof-led storytelling and a frictionless navigation path.</p>
      
      <h2>Approach</h2>
      <p>Rather than chasing transient trends, the layout follows natural user conversion behavior: a clear introduction, real success metrics, transparent process descriptions, and direct ways to engage. Every section is designed to keep users engaged and build momentum toward a transaction.</p>
      
      <h2>Vision and Innovation</h2>
      <p>The goal was a customized digital home that reads like a premium brand, not a generic template. Typography in the layout was carefully chosen, while a subtle color palette keeps the client's identity front and center.</p>
      
      <h2>Identifying Unique Challenges</h2>
      <p>Legal consumers require instant trust and direct access to practice area expertise. We architected intuitive practice filters, attorney profiles with direct consultation booking, and streamlined inquiry funnels that reduced onboarding friction by 40%.</p>
      
      <h2>Impact and Results</h2>
      <p>The resulting platform elevated AMA Legal Solutions to a top-tier cross-border legal destination, generating a 65% increase in high-value corporate inquiries within the first quarter following deployment.</p>
    `,
    image: "/project/AMA.svg",
    heroImage: "/project/AMA.svg",
    gallery: ["/project/AMA.svg"]
  },
  {
    id: 102,
    slug: "adorna-casa",
    title: "Adorna Casa",
    category: "Web Design",
    tag: "LUXURY RETAIL",
    categories: ["Web Design"],
    projectType: "Shopify Store",
    flag: "🇮🇳",
    description: "A premium luxury home decor and bespoke furnishing brand offering curated fabrics, wallpapers, and upholstery.",
    client: "Adorna Casa",
    duration: "6 Weeks",
    services: "Luxury Retail, Interior Design Showcase, Shopify E-Commerce",
    websiteUrl: "https://adornocasa.com/",
    image: "/project/Adorna_casa.svg",
    heroImage: "/project/Adorna_casa.svg",
    gallery: ["/project/Adorna_casa.svg"]
  },
  {
    id: 103,
    slug: "aerolume",
    title: "Aerolume",
    category: "Web Design",
    tag: "ARCHITECTURAL LIGHTING",
    categories: ["Web Design", "SEO"],
    projectType: "Shopify Store",
    flag: "🇮🇳",
    description: "High-end smart lighting solutions and architectural lighting fixtures for premium commercial and residential spaces.",
    client: "Aerolume Lighting",
    duration: "6 Weeks",
    services: "Architectural Lighting, IoT Systems, Shopify Store Development, Technical SEO",
    websiteUrl: "https://aerolume.in/",
    image: "/project/Aerolume.svg",
    heroImage: "/project/Aerolume.svg",
    gallery: ["/project/Aerolume.svg"]
  },
  {
    id: 104,
    slug: "anyadha",
    title: "Anyadha",
    category: "Web Design",
    tag: "ETHNIC WEAR",
    categories: ["Web Design"],
    projectType: "Shopify Store",
    flag: "🇮🇳",
    description: "An ethnic luxury Indian handloom and boutique fashion store celebrating traditional craftsmanship and designs.",
    client: "Anyadha Handlooms",
    duration: "6 Weeks",
    services: "Indian Handloom, Ethnic Wear, E-Commerce Store",
    websiteUrl: "https://anyadha.in/",
    image: "/project/Anyadha.svg",
    heroImage: "/project/Anyadha.svg",
    gallery: ["/project/Anyadha.svg"]
  },
  {
    id: 105,
    slug: "bloom",
    title: "Bloom Cafes",
    category: "Branding",
    tag: "SPECIALTY COFFEE",
    categories: ["Branding", "Web Design"],
    projectType: "Shopify Store",
    flag: "🇦🇪",
    description: "An artisanal specialty coffee roastery and cafe brand offering premium blends and gourmet bakery items.",
    client: "Bloom Cafes",
    duration: "5 Weeks",
    services: "Specialty Coffee, Artisanal Cafe Identity, Shopify Store",
    websiteUrl: "https://bloomcafes.com/",
    image: "/project/Bloom.svg",
    heroImage: "/project/Bloom.svg",
    gallery: ["/project/Bloom.svg"]
  },
  {
    id: 106,
    slug: "botai",
    title: "Bo-Tai",
    category: "Web Design",
    tag: "FINE DINING",
    categories: ["Web Design"],
    projectType: "Custom Code",
    flag: "🇮🇳",
    description: "An award-winning modern Thai and Chinese fine dining restaurant and high-energy bar concept.",
    client: "Bo-Tai Hospitality",
    duration: "7 Weeks",
    services: "Fine Dining, Hospitality Digital Experience, Custom Code",
    websiteUrl: "https://www.bo-tai.co.in/",
    image: "/project/Botai.svg",
    heroImage: "/project/Botai.svg",
    gallery: ["/project/Botai.svg"]
  },
  {
    id: 107,
    slug: "bunt",
    title: "Bunt India",
    category: "Branding",
    tag: "HAUTE COUTURE",
    categories: ["Branding", "Web Design"],
    projectType: "Shopify Store",
    flag: "🇮🇳",
    description: "An exclusive haute couture fashion brand presenting traditional Indian craftsmanship with modern silhouettes.",
    client: "Bunt India",
    duration: "6 Weeks",
    services: "Haute Couture, Luxury Fashion, E-Commerce Platform",
    websiteUrl: "https://buntindia.com/",
    image: "/project/Bunt.svg",
    heroImage: "/project/Bunt.svg",
    gallery: ["/project/Bunt.svg"]
  },
  {
    id: 108,
    slug: "credsettle",
    title: "Credsettle",
    category: "Lead Generation",
    tag: "FINTECH",
    categories: ["Lead Generation", "Web Design", "SEO"],
    projectType: "Custom Code",
    flag: "🇺🇸",
    description: "A secure, automated fintech platform simplifying enterprise debt settlement, legal compliance, and payments.",
    client: "Credsettle Inc.",
    duration: "10 Weeks",
    services: "Fintech Architecture, Debt Settlement Workflow, Custom Web App, Conversion SEO",
    websiteUrl: "https://www.credsettle.com/",
    image: "/project/Credsettle.svg",
    heroImage: "/project/Credsettle.svg",
    gallery: ["/project/Credsettle.svg"]
  },
  {
    id: 109,
    slug: "house-of-nihal-khera",
    title: "House of Nihal khera",
    category: "Branding",
    tag: "LUXURY HOMESTAY",
    categories: ["Branding", "Web Design"],
    description: "A luxurious heritage homestay and agritourism resort offering premium hospitality experiences in Punjab.",
    client: "House of Nihal Khera",
    duration: "6 Weeks",
    services: "Luxury Homestay, Agritourism, Custom Web Platform",
    websiteUrl: "https://houseofnihalkhera.com/",
    image: "/project/Delhi House.svg",
    heroImage: "/project/Delhi House.svg",
    gallery: ["/project/Delhi House.svg"]
  },
  {
    id: 110,
    slug: "delhi-house",
    title: "Delhi House Cafe",
    category: "Web Design",
    tag: "CONTEMPORARY DINING",
    categories: ["Web Design"],
    description: "A premier contemporary Indian restaurant and culinary destination offering gourmet street food and authentic meals.",
    client: "Delhi House Cafe",
    duration: "6 Weeks",
    services: "Contemporary Dining, Food & Beverage Portal, Custom Code",
    websiteUrl: "https://www.delhihousecafe.com/",
    image: "/project/Delhi House.svg",
    heroImage: "/project/Delhi House.svg",
    gallery: ["/project/Delhi House.svg"]
  },
  {
    id: 111,
    slug: "farzi-cafe",
    title: "Farzi Cafe",
    category: "Branding",
    tag: "MOLECULAR GASTRONOMY",
    categories: ["Branding", "Web Design"],
    description: "An acclaimed modern Indian bistro utilizing molecular gastronomy and innovative presentations.",
    client: "Massive Restaurants",
    duration: "8 Weeks",
    services: "Molecular Gastronomy, Modern Bistro Portal, Custom Code, Digital Brand Positioning",
    websiteUrl: "https://www.farzicafe.com/",
    image: "/project/Farzi_Cafe.svg",
    heroImage: "/project/Farzi_Cafe.svg",
    gallery: ["/project/Farzi_Cafe.svg"]
  },
  {
    id: 112,
    slug: "foire",
    title: "Foire",
    category: "Web Design",
    tag: "GOURMET CONDIMENTS",
    categories: ["Web Design"],
    description: "A boutique artisanal food and gourmet condiments brand providing hand-crafted jams, spreads, and snacks.",
    client: "Foire Gourmet",
    duration: "5 Weeks",
    services: "Gourmet Food, Artisanal Condiments, Shopify Store",
    websiteUrl: "https://foire.in/",
    image: "/project/Foire.svg",
    heroImage: "/project/Foire.svg",
    gallery: ["/project/Foire.svg"]
  },
  {
    id: 114,
    slug: "kamal",
    title: "Kamal Motors",
    category: "Lead Generation",
    tag: "AUTOMOTIVE",
    categories: ["Lead Generation", "Web Design", "SEO"],
    description: "One of India's leading authorized dealerships for commercial vehicles, logistics solutions, and passenger cars.",
    client: "Kamal Motors",
    duration: "8 Weeks",
    services: "Automotive Dealership, Commercial Vehicles, Custom Code, Lead Generation Architecture",
    websiteUrl: "https://kamalmotors.in/",
    image: "/project/Kamal.svg",
    heroImage: "/project/Kamal.svg",
    gallery: ["/project/Kamal.svg"]
  },
  {
    id: 116,
    slug: "mama-jama",
    title: "Mama Jama",
    category: "Branding",
    tag: "STREETWEAR",
    categories: ["Branding", "Web Design"],
    description: "A premium youth culture and modern streetwear fashion brand offering contemporary urban apparel.",
    client: "Mama Jama Apparel",
    duration: "6 Weeks",
    services: "Streetwear Brand Identity, Urban Fashion, Shopify Store",
    websiteUrl: "https://mamajama.in/",
    image: "/project/Mama_jama.svg",
    heroImage: "/project/Mama_jama.svg",
    gallery: ["/project/Mama_jama.svg"]
  },
  {
    id: 117,
    slug: "oudqua",
    title: "Oudqua",
    category: "Branding",
    tag: "ARABIAN OUD",
    categories: ["Branding", "Web Design"],
    description: "A luxury niche perfume house specializing in authentic Arabian Oud, fine fragrances, and home diffusers.",
    client: "The Oudqua Parfums",
    duration: "6 Weeks",
    services: "Niche Fragrances, Arabian Oud Branding, Shopify Store",
    websiteUrl: "https://theoudqua.com/",
    image: "/project/Oud.svg",
    heroImage: "/project/Oud.svg",
    gallery: ["/project/Oud.svg"]
  },
  {
    id: 119,
    slug: "sexsea",
    title: "Sexsea",
    category: "Lead Generation",
    tag: "YACHT CHARTERS",
    categories: ["Lead Generation", "Web Design"],
    description: "A premium yacht rental and private sea cruise booking experience for luxury marine travel.",
    client: "Sexsea Marine",
    duration: "6 Weeks",
    services: "Yacht Charters, Luxury Travel Booking, Shopify Store, VIP Lead Funnels",
    websiteUrl: "https://sexsea.in/",
    image: "/project/Sexsea.svg",
    heroImage: "/project/Sexsea.svg",
    gallery: ["/project/Sexsea.svg"]
  },
  {
    id: 120,
    slug: "the-fat-cookie",
    title: "The Fat Cookie",
    category: "Branding",
    tag: "ARTISANAL BAKERY",
    categories: ["Branding", "Web Design"],
    description: "An artisanal gourmet bakery specializing in giant, freshly-baked cookies and premium sweet treats.",
    client: "The Fat Cookie Chef",
    duration: "5 Weeks",
    services: "Gourmet Bakery, Artisanal Cookies, Shopify Store",
    websiteUrl: "https://thefatcookiechef.com/",
    image: "/project/The_fat_cookie.svg",
    heroImage: "/project/The_fat_cookie.svg",
    gallery: ["/project/The_fat_cookie.svg"]
  },
  {
    id: 121,
    slug: "trivora-jewels",
    title: "Trivora Jewels",
    category: "Branding",
    tag: "FINE JEWELLERY",
    categories: ["Branding", "Web Design"],
    description: "A luxury fine jewellery brand offering handcrafted gold, diamond, and bespoke artisanal jewelry collections.",
    client: "Trivora Jewels",
    duration: "7 Weeks",
    services: "Fine Jewellery, Luxury E-Commerce, Shopify Store",
    websiteUrl: "https://trivorajewels.com/",
    image: "/Jwel.jpeg",
    heroImage: "/Jwel.jpeg",
    gallery: ["/Jwel.jpeg"]
  },

  // --- PROJECTS WITHOUT EXTERNAL LINKS (DISPLAYED LATER) ---
  {
    id: 3,
    slug: "health",
    title: "Health",
    category: "Web Design",
    tag: "HEALTHCARE / UI/UX",
    categories: ["Web Design", "Lead Generation"],
    description: "An advanced digital healthcare ecosystem designed for patient care and seamless health management.",
    client: "Health Labs",
    duration: "12 Weeks",
    services: "UI/UX Design, Front-End Development, Lead Generation Architecture",
    image: "/Health/GRID 13/p17_01.png",
    heroImage: "/Health/GRID 13/p17_01.png",
    gallery: [
      "/Health/GRID 13/P9.png",
      "/Health/GRID 13/p17_02.png",
      "/Health/GRID 13/p17_03.png",
      "/Health/GRID 13/p17_04.png",
      "/Health/GRID 13/p3-carousel_01.png",
      "/Health/GRID 13/p3-carousel_02.png",
      "/Health/GRID 13/p3-carousel_03.png",
      "/Health/GRID 13/p31_01.png",
      "/Health/GRID 13/p31_02.png",
      "/Health/GRID 13/p31_03.png",
      "/Health/GRID 13/p31_04.png",
      "/Health/GRID 13/p7-carousel_01.png",
      "/Health/GRID 13/p7-carousel_02.png"
    ]
  },
  {
    id: 4,
    slug: "chavelle",
    title: "Chavelle",
    category: "Web Design",
    tag: "SHOPIFY / E-COMMERCE",
    categories: ["Web Design", "Branding"],
    description: "A premium e-commerce and visual branding platform crafted for Chavelle's luxury line.",
    client: "Chavelle Group",
    duration: "8 Weeks",
    services: "Branding, E-Commerce Development, Custom UI/UX",
    image: "/Chavelle/Grid 08/Grid-08_01.png",
    heroImage: "/Chavelle/Grid 08/Grid-08_01.png",
    gallery: [
      "/Chavelle/Grid 08/Grid-08_02.png",
      "/Chavelle/Grid 08/Grid-08_03.png",
      "/Chavelle/Grid 08/Grid-08_05.png",
      "/Chavelle/Grid 08/Grid-08_06.png"
    ]
  },
  {
    id: 5,
    slug: "lotd",
    title: "LOTD",
    category: "Lead Generation",
    tag: "LEAD GENERATION",
    categories: ["Lead Generation", "Meta Ads"],
    description: "A conversion-driven digital campaign and landing experience tailored for high-volume lead generation.",
    client: "LOTD Agency",
    duration: "6 Weeks",
    services: "Lead Funnel Design, Meta Ads Integration, Conversion Rate Optimization",
    image: "/LOTD/Grid 01/p1_01.png",
    heroImage: "/LOTD/Grid 01/p1_01.png",
    gallery: [
      "/LOTD/Grid 01/p1_02.png",
      "/LOTD/Grid 01/p1_03.png",
      "/LOTD/Grid 01/p1_04.png",
      "/LOTD/Grid 01/p1_05.png",
      "/LOTD/Grid 01/p1_06.png",
      "/LOTD/Grid 01/p1_07.png",
      "/LOTD/Grid 01/p1_08.png",
      "/LOTD/Grid 01/p1_09.png",
      "/LOTD/Grid 01/p1_10.png",
      "/LOTD/Grid 01/p1_11.png"
    ]
  },
  {
    id: 6,
    slug: "lynx",
    title: "LYNX",
    category: "Meta Ads",
    tag: "META ADS",
    categories: ["Meta Ads", "Social Media"],
    description: "A high-impact paid social media strategy designed to boost customer acquisition and ROI.",
    client: "LYNX Brand",
    duration: "10 Weeks",
    services: "Paid Social Creative, Meta Ads Scaling, Audience Segmentation",
    image: "/LYNX/Grid 01/Grid 01.png",
    heroImage: "/LYNX/Grid 01/Grid 01.png",
    gallery: [
      "/LYNX/Grid 01/p3-carousel_01.png",
      "/LYNX/Grid 01/p3-carousel_02.png",
      "/LYNX/Grid 01/p3-carousel_03.png",
      "/LYNX/Grid 01/p7-carousel_01.png",
      "/LYNX/Grid 01/p7-carousel_02.png",
      "/LYNX/Grid 01/p7-carousel_03.png",
      "/LYNX/Grid 01/p11-carousel_01.png",
      "/LYNX/Grid 01/p11-carousel_02.png",
      "/LYNX/Grid 01/p11-carousel_03.png",
      "/LYNX/Grid 01/p15-carousel_01.png",
      "/LYNX/Grid 01/p15-carousel_02.png",
      "/LYNX/Grid 01/p15-carousel_03.png",
      "/LYNX/Grid 01/p19-carousel_01.png",
      "/LYNX/Grid 01/p19-carousel_02.png",
      "/LYNX/Grid 01/p19-carousel_03.png",
      "/LYNX/Grid 01/p23-carousel_01.png",
      "/LYNX/Grid 01/p23-carousel_02.png",
      "/LYNX/Grid 01/p23-carousel_03.png",
      "/LYNX/Grid 01/p27-carousel_01.png",
      "/LYNX/Grid 01/p27-carousel_02.png",
      "/LYNX/Grid 01/p27-carousel_03.png"
    ]
  },
  {
    id: 7,
    slug: "mr-pronto",
    title: "Mr Pronto",
    category: "SEO",
    tag: "SEO STRATEGY",
    categories: ["SEO", "Web Design"],
    description: "An organic search visibility overhaul driving top-tier rankings and targeted traffic for Mr Pronto.",
    client: "Mr Pronto Services",
    duration: "16 Weeks",
    services: "Technical SEO, Keyword Strategy, On-Page Optimization, Organic Growth",
    image: "/Mr_Pronto/Grid 01/p1_01.png",
    heroImage: "/Mr_Pronto/Grid 01/p1_01.png",
    gallery: [
      "/Mr_Pronto/Grid 01/p1_02.png",
      "/Mr_Pronto/Grid 01/p1_03.png",
      "/Mr_Pronto/Grid 01/p1_04.png",
      "/Mr_Pronto/Grid 01/p1_05.png",
      "/Mr_Pronto/Grid 01/p1_06.png",
      "/Mr_Pronto/Grid 01/p1_07.png",
      "/Mr_Pronto/Grid 01/p1_08.png",
      "/Mr_Pronto/Grid 01/p1_09.png",
      "/Mr_Pronto/Grid 01/p1_10.png"
    ]
  },
  {
    id: 8,
    slug: "rise",
    title: "Rise",
    category: "Branding",
    tag: "BRANDING",
    categories: ["Branding"],
    description: "A complete identity and brand architecture revamp to elevate Rise's presence in a competitive market.",
    client: "Rise Co.",
    duration: "8 Weeks",
    services: "Visual Identity, Brand Guidelines, Typography & Color Systems",
    image: "/Rise/Grid 12/p1_01.png",
    heroImage: "/Rise/Grid 12/p1_01.png",
    gallery: [
      "/Rise/Grid 12/p1_02.png",
      "/Rise/Grid 12/p1_03.png",
      "/Rise/Grid 12/p1_04.png",
      "/Rise/Grid 12/p1_05.png",
      "/Rise/Grid 12/p1_06.png",
      "/Rise/Grid 12/p1_07.png",
      "/Rise/Grid 12/p1_08.png",
      "/Rise/Grid 12/p1_09.png",
      "/Rise/Grid 12/p1_10.png",
      "/Rise/Grid 12/p1_11.png"
    ]
  },
  {
    id: 9,
    slug: "shiva",
    title: "Shiva",
    category: "Social Media",
    tag: "SOCIAL MEDIA",
    categories: ["Social Media"],
    description: "A cohesive social content strategy and visual storytelling framework designed to grow brand engagement.",
    client: "Shiva Lifestyle",
    duration: "12 Weeks",
    services: "Content Creation, Grid Strategy, Community Management",
    image: "/Shiva/Grids/Grid 03.png",
    heroImage: "/Shiva/Grids/Grid 03.png",
    gallery: [
      "/Shiva/Grids/1.png",
      "/Shiva/Grids/2.png",
      "/Shiva/Grids/3.png",
      "/Shiva/Grids/4.png",
      "/Shiva/Grids/5.png",
      "/Shiva/Grids/6.png",
      "/Shiva/Grids/7.png",
      "/Shiva/Grids/8.png",
      "/Shiva/Grids/9.png"
    ]
  },
  {
    id: 10,
    slug: "sosha",
    title: "Sosha",
    category: "Photography",
    tag: "PHOTOSHOOT",
    categories: ["Photography"],
    description: "An elegant lookbook and e-commerce identity project designed to capture high fashion aesthetics.",
    client: "Sosha Brand",
    duration: "8 Weeks",
    services: "Fashion Photography, Creative Direction, Lookbook Styling",
    image: "/Sosha/GRID 04/grid-0f-9_01.png",
    heroImage: "/Sosha/GRID 04/grid-0f-9_01.png",
    gallery: [
      "/Sosha/GRID 04/grid-0f-9_02.png",
      "/Sosha/GRID 04/grid-0f-9_03.png",
      "/Sosha/GRID 04/grid-0f-9_04.png",
      "/Sosha/GRID 04/grid-0f-9_05.png",
      "/Sosha/GRID 04/grid-0f-9_06.png",
      "/Sosha/GRID 04/grid-0f-9_07.png",
      "/Sosha/GRID 04/grid-0f-9_08.png",
      "/Sosha/GRID 04/grid-0f-9_09.png"
    ]
  },
  {
    id: 11,
    slug: "jwellery",
    title: "Jwellery",
    category: "Photography",
    tag: "PHOTOGRAPHY",
    categories: ["Photography"],
    description: "A high-end editorial jewelry photoshoot capturing the elegance and fine detail of bespoke jewelry pieces.",
    client: "Bespoke Jewels",
    duration: "4 Weeks",
    services: "Editorial Photography, Art Direction, Retouching",
    image: "/Jwellery/6.jpg",
    heroImage: "/Jwellery/6.jpg",
    gallery: [
      "/Jwellery/7.jpg",
      "/Jwellery/8.jpg",
      "/Jwellery/9.jpg",
      "/Jwellery/10.jpg"
    ]
  },
  {
    id: 12,
    slug: "sage-perfume",
    title: "Sage Perfume",
    category: "Photography",
    tag: "PHOTOGRAPHY",
    categories: ["Photography"],
    description: "A minimalist product photography campaign designed for Sage Perfume's signature scent line.",
    client: "Sage Aromas",
    duration: "5 Weeks",
    services: "Product Photography, Prop Styling, Lighting Design",
    image: "/SAGE_Perfumes/1.jpg",
    heroImage: "/SAGE_Perfumes/1.jpg",
    gallery: [
      "/SAGE_Perfumes/2.jpg",
      "/SAGE_Perfumes/3.jpg",
      "/SAGE_Perfumes/4.jpg",
      "/SAGE_Perfumes/5.jpg"
    ]
  },
  {
    id: 113,
    slug: "honk",
    title: "HONK",
    category: "Web Design",
    tag: "MOBILITY / UI/UX",
    categories: ["Web Design", "Lead Generation"],
    description: "A modern ride-sharing and carpool tracking system with high precision maps.",
    client: "HONK Mobility",
    duration: "7 Weeks",
    services: "Mobility Design, Mobile Application UI/UX, Interaction Design",
    image: "/project/HONK.svg",
    heroImage: "/project/HONK.svg",
    gallery: ["/project/HONK.svg"]
  },
  {
    id: 115,
    slug: "kitchun",
    title: "Kitchun",
    category: "Web Design",
    tag: "SMART PANTRY SAAS",
    categories: ["Web Design"],
    description: "A meal-planning and smart-pantry application designed to minimize food waste.",
    client: "Kitchun App",
    duration: "6 Weeks",
    services: "SaaS Design, Mobile First Platform, UI/UX Architecture",
    image: "/project/Kitchun.svg",
    heroImage: "/project/Kitchun.svg",
    gallery: ["/project/Kitchun.svg"]
  },
  {
    id: 118,
    slug: "rosete",
    title: "Rosete",
    category: "Web Design",
    tag: "EDITORIAL FASHION",
    categories: ["Web Design"],
    description: "A high-fashion brand portal focused on editorial imagery and seamless checkout.",
    client: "Rosete Haute",
    duration: "5 Weeks",
    services: "E-Commerce, Art Direction, High-Fashion Web Design",
    image: "/project/Rosete.svg",
    heroImage: "/project/Rosete.svg",
    gallery: ["/project/Rosete.svg"]
  },
  {
    id: 122,
    slug: "purifi",
    title: "Purifi",
    category: "Web Design",
    tag: "SMART WELLNESS",
    categories: ["Web Design", "SEO"],
    description: "An advanced smart air purification and wellness technology brand engineered for modern homes and commercial spaces.",
    client: "Purifi Clean Tech",
    duration: "6 Weeks",
    services: "Smart Wellness, Clean Tech Engineering, Shopify Store, Conversion SEO",
    image: "/website.jpg",
    heroImage: "/website.jpg",
    gallery: ["/website.jpg"]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};
