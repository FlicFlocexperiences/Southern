export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  client: string;
  duration: string;
  services: string;
  websiteUrl?: string;
  image: string; // Used for the grid
  heroImage: string; // Used for the individual page
  gallery: string[]; // Additional images
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "urban-architecture-redesign",
    title: "Urban Architecture",
    category: "Web Development & Branding",
    description: "An abstract visual exploration where light, water, and color dissolve into a single atmospheric form. We partnered with Urban Architecture to reimagine their digital presence, creating a fluid, dynamic web experience that perfectly encapsulates their forward-thinking design philosophy.",
    client: "Urban Arch Group",
    duration: "6 Weeks",
    services: "Branding, Web Design, Development",
    websiteUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    slug: "eco-friendly-app-ecosystem",
    title: "Eco Ecosystem",
    category: "UX/UI Design",
    description: "A comprehensive digital ecosystem designed to connect environmentally conscious consumers with sustainable brands. Our goal was to create a clean, intuitive, and highly engaging interface that promotes green living.",
    client: "GreenLife Inc.",
    duration: "8 Weeks",
    services: "UX Research, UI Design, App Development",
    websiteUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    gallery: []
  },
  {
    id: 3,
    slug: "financial-dashboard-platform",
    title: "FinDash Platform",
    category: "Product Design",
    description: "A robust financial dashboard offering real-time analytics, predictive modeling, and highly customizable reporting tools for enterprise clients. We focused on clarity and data visualization.",
    client: "Capital Insights",
    duration: "12 Weeks",
    services: "Product Design, Data Visualization, React Dev",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    gallery: []
  },
  {
    id: 4,
    slug: "modern-lifestyle-ecommerce",
    title: "Lifestyle Market",
    category: "E-Commerce Strategy",
    description: "A highly-optimized, conversion-focused e-commerce experience for a modern lifestyle brand. The project included a complete overhaul of the purchasing funnel and visual identity.",
    client: "Aura Essentials",
    duration: "10 Weeks",
    services: "E-Commerce, Shopify Plus, Branding",
    websiteUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    gallery: []
  },
  {
    id: 5,
    slug: "health-wellness-platform",
    title: "Wellness Sync",
    category: "App Development",
    description: "An integrated health platform that tracks daily activity, mindfulness, and nutrition. We built a scalable backend and a soothing, friendly frontend interface.",
    client: "Vitality Health",
    duration: "14 Weeks",
    services: "Full-Stack Dev, iOS App, UI Design",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    gallery: []
  },
  {
    id: 6,
    slug: "global-supply-chain-system",
    title: "Global Supply",
    category: "Enterprise Software",
    description: "A global logistics and supply chain management tool designed to streamline complex international shipping routes and inventory management for multi-national corporations.",
    client: "LogistiCore",
    duration: "20 Weeks",
    services: "System Architecture, Next.js, Cloud Infrastructure",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590a?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590a?q=80&w=2070&auto=format&fit=crop",
    gallery: []
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};
