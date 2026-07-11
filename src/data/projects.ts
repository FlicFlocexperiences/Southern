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
    id: 20,
    slug: "ama",
    title: "AMA",
    category: "Website development",
    description: "A premium website development project designed for AMA.",
    client: "AMA Group",
    duration: "6 Weeks",
    services: "Web Design, Front-End Development",
    image: "/project/AMA.svg",
    heroImage: "/project/AMA.svg",
    gallery: []
  },
  {
    id: 21,
    slug: "adorna-casa",
    title: "Adorna Casa",
    category: "Shopify Development",
    description: "Elegant branding and visual identity suite designed for Adorna Casa.",
    client: "Adorna Casa",
    duration: "8 Weeks",
    services: "Brand Strategy, Visual Identity, Packaging",
    image: "/project/Adorna_casa.svg",
    heroImage: "/project/Adorna_casa.svg",
    gallery: []
  },
  {
    id: 22,
    slug: "aerolume",
    title: "Aerolume",
    category: "Shopify development",
    description: "A modern, high-performance web presence crafted for Aerolume.",
    client: "Aerolume Systems",
    duration: "6 Weeks",
    services: "UI/UX Design, Development, Integration",
    image: "/project/Aerolume.svg",
    heroImage: "/project/Aerolume.svg",
    gallery: []
  },
  {
    id: 23,
    slug: "anyadha",
    title: "Anyadha",
    category: "Shopify development",
    description: "Creative visual brand identity and digital assets for Anyadha.",
    client: "Anyadha Co.",
    duration: "4 Weeks",
    services: "Graphic Design, Identity Design",
    image: "/project/Anyadha.svg",
    heroImage: "/project/Anyadha.svg",
    gallery: []
  },
  {
    id: 24,
    slug: "bloom",
    title: "Bloom",
    category: "Shopify Development",
    description: "Fresh and vibrant branding strategy designed for Bloom.",
    client: "Bloom Inc.",
    duration: "6 Weeks",
    services: "Brand Identity, Marketing Materials",
    image: "/project/Bloom.svg",
    heroImage: "/project/Bloom.svg",
    gallery: []
  },
  {
    id: 25,
    slug: "botai",
    title: "Botai",
    category: "Website development",
    description: "An interactive, visual website development project crafted for Botai.",
    client: "Botai Restaurant",
    duration: "8 Weeks",
    services: "Creative Direction, Web Design, UI/UX",
    image: "/project/Botai.svg",
    heroImage: "/project/Botai.svg",
    gallery: []
  },
  {
    id: 26,
    slug: "bunt",
    title: "Bunt",
    category: "Shopify Development",
    description: "Bold visual design and styling campaign developed for Bunt.",
    client: "Bunt Studio",
    duration: "5 Weeks",
    services: "Art Direction, Identity Design",
    image: "/project/Bunt.svg",
    heroImage: "/project/Bunt.svg",
    gallery: []
  },
  {
    id: 27,
    slug: "credsettle",
    title: "Credsettle",
    category: "Website development",
    description: "A secure, streamlined web application and platform designed for Credsettle.",
    client: "Credsettle Ltd.",
    duration: "10 Weeks",
    services: "Web Application, UI/UX Design, Front-End",
    image: "/project/Credsettle.svg",
    heroImage: "/project/Credsettle.svg",
    gallery: []
  },
  {
    id: 28,
    slug: "delhi-house",
    title: "Delhi House",
    category: "Website development",
    description: "An elegant, highly functional digital hub created for Delhi House.",
    client: "Delhi House Group",
    duration: "6 Weeks",
    services: "UI/UX, Website Design, Development",
    image: "/project/Delhi House.svg",
    heroImage: "/project/Delhi House.svg",
    gallery: []
  },
  {
    id: 29,
    slug: "farzi-cafe",
    title: "Farzi Cafe",
    category: "Website Development",
    description: "Experimental brand elements and menu graphics crafted for Farzi Cafe.",
    client: "Farzi Cafe Global",
    duration: "8 Weeks",
    services: "Branding, Concept Design, Graphic Design",
    image: "/project/Farzi_Cafe.svg",
    heroImage: "/project/Farzi_Cafe.svg",
    gallery: []
  },
  {
    id: 30,
    slug: "foire",
    title: "Foire",
    category: "Shopify development",
    description: "A sophisticated online platform and design framework built for Foire.",
    client: "Foire Fashion",
    duration: "7 Weeks",
    services: "UI/UX Design, Shopify Development",
    image: "/project/Foire.svg",
    heroImage: "/project/Foire.svg",
    gallery: []
  },
  {
    id: 31,
    slug: "honk",
    title: "HONK",
    category: "Shopify Development",
    description: "Vibrant visual branding and identity concepts designed for HONK.",
    client: "HONK Entertainment",
    duration: "4 Weeks",
    services: "Visual Identity, Asset Creation",
    image: "/project/HONK.svg",
    heroImage: "/project/HONK.svg",
    gallery: []
  },
  {
    id: 32,
    slug: "kamal",
    title: "Kamal",
    category: "Website Development",
    description: "Elegant corporate branding suite and typography crafted for Kamal.",
    client: "Kamal Holdings",
    duration: "6 Weeks",
    services: "Corporate Identity, Branding",
    image: "/project/Kamal.svg",
    heroImage: "/project/Kamal.svg",
    gallery: []
  },
  {
    id: 33,
    slug: "kitchun",
    title: "Kitchun",
    category: "Shopify Development",
    description: "A high-conversion Shopify store designed for kitchen appliances by Kitchun.",
    client: "Kitchun Brands",
    duration: "8 Weeks",
    services: "Shopify Store Setup, E-commerce Optimization",
    image: "/project/Kitchun.svg",
    heroImage: "/project/Kitchun.svg",
    gallery: []
  },
  {
    id: 34,
    slug: "mama-jama",
    title: "Mama Jama",
    category: "Shopify Development",
    description: "Warm and friendly brand design for Mama Jama food and lifestyle line.",
    client: "Mama Jama",
    duration: "5 Weeks",
    services: "Logo Design, Branding, Package Design",
    image: "/project/Mama_jama.svg",
    heroImage: "/project/Mama_jama.svg",
    gallery: []
  },
  {
    id: 35,
    slug: "oud",
    title: "Oud",
    category: "Shopify Development",
    description: "Luxury brand packaging and identity designed for Oud premium scents.",
    client: "Oud Luxury",
    duration: "7 Weeks",
    services: "Luxury Packaging, Brand Identity",
    image: "/project/Oud.svg",
    heroImage: "/project/Oud.svg",
    gallery: []
  },
  {
    id: 36,
    slug: "rosete",
    title: "Rosete",
    category: "Website Development",
    description: "Minimalist boutique branding and visual style suite for Rosete.",
    client: "Rosete Boutique",
    duration: "4 Weeks",
    services: "Boutique Branding, Asset Design",
    image: "/project/Rosete.svg",
    heroImage: "/project/Rosete.svg",
    gallery: []
  },
  {
    id: 37,
    slug: "sexsea",
    title: "Sexsea",
    category: "Shopify Development",
    description: "High-impact visual identity and assets designed for Sexsea swimwear.",
    client: "Sexsea Swimwear",
    duration: "6 Weeks",
    services: "Brand Strategy, Visual Assets",
    image: "/project/Sexsea.svg",
    heroImage: "/project/Sexsea.svg",
    gallery: []
  },
  {
    id: 38,
    slug: "the-fat-cookie",
    title: "The Fat Cookie",
    category: "Shopify Development",
    description: "A mouth-watering, responsive Shopify store created for The Fat Cookie.",
    client: "The Fat Cookie Company",
    duration: "8 Weeks",
    services: "E-commerce Development, UI/UX Design",
    image: "/project/The_fat_cookie.svg",
    heroImage: "/project/The_fat_cookie.svg",
    gallery: []
  },
  {
    id: 3,
    slug: "health",
    title: "Health",
    category: "Photography & Videography",
    description: "An advanced digital healthcare ecosystem designed for patient care and seamless health management.",
    client: "Health Labs",
    duration: "12 Weeks",
    services: "UI/UX Design, Front-End Development, Integration",
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
    category: "Photography & Videography",
    description: "A premium e-commerce and visual branding platform crafted for Chavelle's luxury line.",
    client: "Chavelle Group",
    duration: "8 Weeks",
    services: "Branding, E-Commerce Development, Video Production",
    image: "/Chavelle/Grid 08/Grid-08_01.png",
    heroImage: "/Chavelle/Grid 08/Grid-08_01.png",
    gallery: [
      "/Chavelle/Grid 08/Grid-08_02.png",
      "/Chavelle/Grid 08/Grid-08_03.png",
      "/Chavelle/Grid 08/Grid-08_05.png",
      "/Chavelle/Grid 08/Grid-08_06.png",
      "/Chavelle/Grid 08/p3.png"
    ]
  },
  {
    id: 5,
    slug: "lotd",
    title: "LOTD",
    category: "Photography & Videography",
    description: "An immersive digital showcase and creative experience designed for LOTD.",
    client: "LOTD Group",
    duration: "6 Weeks",
    services: "Web Design, Development, Creative Direction",
    image: "/LOTD/Grid 01/Grid-01_01.png",
    heroImage: "/LOTD/Grid 01/Grid-01_01.png",
    gallery: [
      "/LOTD/Grid 01/Grid-01_02.png",
      "/LOTD/Grid 01/Grid-01_03.png",
      "/LOTD/Grid 01/Grid-01_04.png",
      "/LOTD/Grid 01/Grid-01_05.png",
      "/LOTD/Grid 01/Grid-01_06.png",
      "/LOTD/Grid 01/Grid-01_07.png",
      "/LOTD/Grid 01/Grid-01_08.png"
    ]
  },
  {
    id: 6,
    slug: "lynx",
    title: "LYNX",
    category: "Photography & Videography",
    description: "A high-performance technical identity and web showcase built for LYNX.",
    client: "LYNX Inc",
    duration: "8 Weeks",
    services: "Brand Strategy, 3D Rendering, Interactive Web",
    image: "/LYNX/Grid 01/Grid-01_01.png",
    heroImage: "/LYNX/Grid 01/Grid-01_01.png",
    gallery: [
      "/LYNX/Grid 01/Grid-01_02.png",
      "/LYNX/Grid 01/Grid-01_03.png",
      "/LYNX/Grid 01/p3.png"
    ]
  },
  {
    id: 7,
    slug: "mr-pronto",
    title: "Mr Pronto",
    category: "Photography & Videography",
    description: "A vibrant branding and digital identity design suite for Mr Pronto's quick-service restaurants.",
    client: "Mr Pronto",
    duration: "4 Weeks",
    services: "Visual Identity, Packaging Design, UI/UX",
    image: "/Mr_Pronto/Grid 01/Grid-03_01.png",
    heroImage: "/Mr_Pronto/Grid 01/Grid-03_01.png",
    gallery: [
      "/Mr_Pronto/Grid 01/Grid-03_02.png",
      "/Mr_Pronto/Grid 01/Grid-03_03.png",
      "/Mr_Pronto/Grid 01/Grid-03_04.png",
      "/Mr_Pronto/Grid 01/Grid-03_05.png",
      "/Mr_Pronto/Grid 01/Grid-03_06.png"
    ]
  },
  {
    id: 8,
    slug: "rise",
    title: "Rise",
    category: "Photography & Videography",
    description: "A creative web interface and strategy focused on brand growth and dynamic presentation.",
    client: "Rise Inc.",
    duration: "6 Weeks",
    services: "Brand Strategy, Web Design, Visual Identity",
    image: "/Rise/Grid 12/p1.png",
    heroImage: "/Rise/Grid 12/p1.png",
    gallery: [
      "/Rise/Grid 12/p2.png",
      "/Rise/Grid 12/p3.png",
      "/Rise/Grid 12/p5.png",
      "/Rise/Grid 12/p6.png",
      "/Rise/Grid 12/p7.png",
      "/Rise/Grid 12/p8.png"
    ]
  },
  {
    id: 9,
    slug: "shiva",
    title: "Shiva",
    category: "Photography & Videography",
    description: "A stunning visual branding campaign showcasing high-impact design layouts and artwork.",
    client: "Shiva Creative",
    duration: "10 Weeks",
    services: "Graphic Design, Creative Direction, Digital Art",
    image: "/Shiva/Grids/grid-03_01.png",
    heroImage: "/Shiva/Grids/grid-03_01.png",
    gallery: [
      "/Shiva/Grids/grid-03_02.png",
      "/Shiva/Grids/grid-03_03.png",
      "/Shiva/Grids/grid-03_04.png",
      "/Shiva/Grids/grid-03_05.png",
      "/Shiva/Grids/grid-03_06.png",
      "/Shiva/Grids/grid-03_07.png",
      "/Shiva/Grids/grid-03_08.png",
      "/Shiva/Grids/grid-03_09.png",
      "/Shiva/Grids/grid-03_10.png",
      "/Shiva/Grids/grid-03_11.png",
      "/Shiva/Grids/grid-03_12.png",
      "/Shiva/Grids/grid-03_13.png",
      "/Shiva/Grids/grid-03_14.png",
      "/Shiva/Grids/grid-03_15.png"
    ]
  },
  {
    id: 10,
    slug: "sosha",
    title: "Sosha",
    category: "Photography & Videography",
    description: "An elegant lookbook and e-commerce identity project designed to capture high fashion aesthetics.",
    client: "Sosha Brand",
    duration: "8 Weeks",
    services: "E-Commerce Design, Creative Direction, Styling",
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
    category: "Photography & Videography",
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
    category: "Photography & Videography",
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
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};
