export interface ProjectCaseStudy {
  lead: string;
  challenge: string;
  solution: string;
  features: { title: string; desc: string }[];
  impact: string;
  stats?: { label: string; value: string }[];
}

export const customCaseStudies: Record<string, ProjectCaseStudy> = {
  // --- 1. ADORNO CASA / ADORNA CASA ---
  "adorno-casa": {
    lead: "Adorno Casa represents the pinnacle of bespoke luxury living, crafting custom Italian-grade upholstery, modular sectional sofas, and architectural interior pieces for discerning homeowners and designers.",
    challenge: "High-ticket custom furniture often suffers in e-commerce due to the inability to convey tactile fabric textures, dimensional scale, and finish customizations on mobile screens.",
    solution: "We engineered an editorial-first digital showroom featuring ultra-high-definition material zoom, dynamic 3D dimension guides, and a seamless VIP concierge booking pipeline for in-studio consultations.",
    features: [
      { title: "Material & Texture Visualizer", desc: "Interactive fabric selector displaying velvet, linen, and top-grain leather under varying room lighting." },
      { title: "Architectural Room Planner", desc: "Interactive dimension preview assisting clients and interior architects in calculating spatial fit." },
      { title: "VIP Concierge Pipeline", desc: "Direct WhatsApp & private showroom scheduler connecting high-intent buyers with lead interior stylists." },
      { title: "Instant Spec Sheet Generator", desc: "One-click PDF tear sheet download for interior designers specifying pieces for client projects." }
    ],
    impact: "Resulted in a 140% surge in high-value bespoke inquiries and reduced sample request turnaround time from 4 days to instant digital confirmation."
  },
  "adorna-casa": {
    lead: "Adorna Casa is an ultra-luxury bespoke furniture and interior atelier crafting architectural sofas, handcrafted armchairs, and premium living concepts.",
    challenge: "Conveying the bespoke nature of customized modular living systems and tactile Italian fabrics online without friction.",
    solution: "We developed an architectural visual portfolio with 3D fabric selectors, room layout guides, and private interior stylist consultation pipelines.",
    features: [
      { title: "Tactile Fabric Inspector", desc: "High-resolution macro previews of top-grain leathers, bouclé, and velvet upholstery options." },
      { title: "Modular Sofa Configurator", desc: "Interactive module selector enabling custom L-shape, U-shape, and sectional layouts." },
      { title: "Designer Trade Portal", desc: "Dedicated portal for architects and interior designers to request customized project quotes." },
      { title: "Virtual Studio Tour", desc: "High-definition video walkthrough of the craftsmanship atelier and wood joinery workshops." }
    ],
    impact: "Increased high-ticket residential furniture consultation bookings by 125%."
  },

  // --- 2. HER STORIES ---
  "her-stories": {
    lead: "Her Stories is a modern women's hormonal wellness and clean supplementation collective engineered to dismantle wellness taboos with clinically proven, clean-label botanical solutions.",
    challenge: "The health & wellness industry is saturated with unverified claims, causing skepticism among health-conscious women seeking trusted, transparent ingredient breakdowns.",
    solution: "We built an educational, science-backed direct-to-consumer store with interactive symptom-to-solution diagnostic quizzes, medical board endorsement ribbons, and automated recurring subscription flows.",
    features: [
      { title: "Symptom-to-Routine Quiz", desc: "A 4-step diagnostic questionnaire recommending tailored hormonal balancing supplement stacks." },
      { title: "Clinical Transparency Modal", desc: "Interactive ingredient cards detailing clinical trial citations, purity certifications, and bioavailability ratings." },
      { title: "Smart Subscription Portal", desc: "Flexible 30/60-day auto-replenishment engine offering seamless frequency adjustments and skip-month controls." },
      { title: "Doctor-Verified Badge System", desc: "Verified medical review panels directly integrated into the product detail pages for credibility." }
    ],
    impact: "Boosted subscription retention by 48% and elevated the mobile quiz-to-cart conversion rate by 3.2x within the first 60 days."
  },

  // --- 3. BLOOM ---
  "bloom": {
    lead: "Bloom Cafes is a specialty artisanal roastery and destination brunch kitchen renowned for single-origin brews, sourdough bakery creations, and experiential cafe aesthetics.",
    challenge: "Bridging the gap between a high-energy physical cafe experience and an online ordering and event booking platform without losing warmth and artisanal identity.",
    solution: "We crafted a warm, sensory digital experience featuring live coffee roast profiles, visual brunch menu browsing, table reservation integration, and packaged coffee bean subscriptions.",
    features: [
      { title: "Sensory Roast Flavor Wheel", desc: "Visual interactive taste notes (fruity, chocolatey, floral) guiding bean selection for home baristas." },
      { title: "Live Table & Event Reservation", desc: "Real-time table booking engine integrated with instant SMS confirmations." },
      { title: "Fresh Batch Bean Subscription", desc: "Automated recurring coffee bean delivery synced with weekly roastery schedules." },
      { title: "Visual Brunch Lookbook", desc: "Editorial food photography menu with dietary tags (vegan, gluten-free, keto) and allergen filters." }
    ],
    impact: "Drove a 65% increase in online coffee bean sales and expanded weekend brunch reservations to 100% capacity."
  },

  // --- 4. BUNT INDIA ---
  "bunt": {
    lead: "Bunt India celebrates traditional Indian craftsmanship, creating heritage silhouettes, hand-block printed apparel, and contemporary festive ethnic wear.",
    challenge: "Traditional ethnic wear requires intricate detail viewing—embroidery, zari work, and drape—which standard e-commerce templates fail to communicate effectively.",
    solution: "We developed a mobile-optimized bridal and festive e-commerce portal with micro-zoom fabric inspectors, custom sizing assistance, and curated festive lookbooks.",
    features: [
      { title: "Micro-Zari Zoom Engine", desc: "High-resolution 4K fabric inspection highlighting delicate hand-embroidery and weave patterns." },
      { title: "Custom Sizing & Drape Guide", desc: "Step-by-step measurement guide ensuring perfect fit for kurtas, lehengas, and festive sets." },
      { title: "Curated Festive Lookbooks", desc: "Theme-based editorial collections (Haldi, Diwali, Sangeet) enabling one-click ensemble purchasing." },
      { title: "Multi-Currency Global Checkout", desc: "Seamless international shipping calculator and local currency switching for the global Indian diaspora." }
    ],
    impact: "Cut return rates due to sizing by 40% and grew international orders from North America and the UK by 85%."
  },
  "bunt-india": {
    lead: "Bunt India celebrates traditional Indian craftsmanship, creating heritage silhouettes, hand-block printed apparel, and contemporary festive ethnic wear.",
    challenge: "Traditional ethnic wear requires intricate detail viewing—embroidery, zari work, and drape—which standard e-commerce templates fail to communicate effectively.",
    solution: "We developed a mobile-optimized bridal and festive e-commerce portal with micro-zoom fabric inspectors, custom sizing assistance, and curated festive lookbooks.",
    features: [
      { title: "Micro-Zari Zoom Engine", desc: "High-resolution 4K fabric inspection highlighting delicate hand-embroidery and weave patterns." },
      { title: "Custom Sizing & Drape Guide", desc: "Step-by-step measurement guide ensuring perfect fit for kurtas, lehengas, and festive sets." },
      { title: "Curated Festive Lookbooks", desc: "Theme-based editorial collections (Haldi, Diwali, Sangeet) enabling one-click ensemble purchasing." },
      { title: "Multi-Currency Global Checkout", desc: "Seamless international shipping calculator and local currency switching for the global Indian diaspora." }
    ],
    impact: "Cut return rates due to sizing by 40% and grew international orders from North America and the UK by 85%."
  },

  // --- 5. SALAD LIFE ---
  "salad-life": {
    lead: "Salad Life is a gourmet healthy dining and cold-pressed nutrition brand delivering chef-curated salad bowls, high-protein meal plans, and detox cleanses.",
    challenge: "Perishable meal prep delivery requires friction-free ordering, precise delivery slot selection, and transparent macro-nutritional data for health-conscious users.",
    solution: "We built an ultra-fast on-demand ordering web app with interactive calorie counters, weekly subscription meal plan builders, and geo-targeted delivery slot management.",
    features: [
      { title: "Interactive Macro & Calorie Counter", desc: "Real-time protein, carb, and fiber calculations updating dynamically as toppings are customized." },
      { title: "Weekly Meal Plan Builder", desc: "Calendar-based subscription engine allowing users to schedule daily lunch/dinner bowl variations." },
      { title: "Real-Time Kitchen Slot Dispatch", desc: "Live delivery radius validation ensuring orders are prepared and dispatched fresh within 45 minutes." },
      { title: "Dietary Allergy Filters", desc: "Instant toggle filters for Dairy-Free, Nut-Free, Keto, Low-Sodium, and High-Protein preferences." }
    ],
    impact: "Achieved a sub-second load time on mobile devices and lifted recurring weekly meal subscriptions by 115%."
  },

  // --- 6. CREDSETTLE ---
  "credsettle": {
    lead: "Credsettle is an empathetic fintech & debt resolution platform helping consumers legally resolve credit card and personal loan distress while halting harassment.",
    challenge: "Distressed borrowers are often anxious and overwhelmed; the platform needed to communicate authority, legal safety, and deep empathy to inspire action.",
    solution: "We designed a secure, confidential debt assessment portal featuring instant settlement savings calculators, legal protection step-by-step breakdowns, and encrypted WhatsApp intake.",
    features: [
      { title: "Settlement Savings Calculator", desc: "Interactive sliders showing estimated debt reduction percentages and affordable monthly escrow targets." },
      { title: "Anti-Harassment Legal Hotline", desc: "Urgent action trigger providing immediate legal rights information against illegal collection practices." },
      { title: "Bank Settlement Track Record", desc: "Case-study metrics showcasing verified settlement percentages across leading Indian banks." },
      { title: "256-Bit Encrypted Intake", desc: "Confidential debt assessment form with strict privacy compliance and no-obligation advisor callbacks." }
    ],
    impact: "Generated over 3.4x more qualified consultation requests while reducing intake drop-offs by 52%."
  },

  // --- 7. GODS BY DMART ---
  "gods-by-dmart": {
    lead: "gods by Dmart is a disruptive youth streetwear and hype culture label delivering limited-edition graphic tees, oversized silhouettes, and urban lifestyle drops.",
    challenge: "Streetwear drops sell out in minutes; the site needed to handle massive viral traffic spikes, generate scarcity hype, and provide instant frictionless mobile checkout.",
    solution: "We built an edgy, dark-mode high-performance Shopify storefront optimized for lightning-fast flash drops, countdown timers, and seamless Apple Pay/UPI one-click checkouts.",
    features: [
      { title: "Flash Drop Countdown & Lockout", desc: "Dynamic release timers with VIP early-access password protection for exclusive drops." },
      { title: "3-Tap Instant UPI Checkout", desc: "Frictionless express mobile checkout flow designed specifically for impulse Gen-Z streetwear shoppers." },
      { title: "Oversized Fit Visualizer", desc: "Model height/weight comparisons showing exact boxy and relaxed fit drape across sizes." },
      { title: "Limited Edition Stock Counter", desc: "Live inventory scarcity tickers driving high conversion momentum on product pages." }
    ],
    impact: "Maintained 100% uptime during viral product drops and completed over 80% of transactions through express mobile payments."
  },

  // --- 8. DEJA BREW ---
  "deja-brew": {
    lead: "Deja Brew is a vibrant craft microbrewery, artisanal coffee bar, and social bistro known for handcrafted IPAs, wood-fired pizza, and curated music nights.",
    challenge: "Capturing the electric atmosphere and day-to-night transformation of the physical brewery in a mobile-first digital portal.",
    solution: "We built an immersive, visual microbrewery hub showcasing live beer tap lists with IBU/ABV ratings, upcoming live gig calendars, and table booking integrations.",
    features: [
      { title: "Live Tap List & Tasting Profiles", desc: "Real-time menu updating available craft beers, tasting notes, bitterness (IBU), and ABV percentage." },
      { title: "Nightlife & Gig Calendar", desc: "Interactive event lineup with artist bios, DJ schedules, and ticket reserve links." },
      { title: "Instant Table & Party Booking", desc: "Direct reservation flow for corporate events, brewery tours, and weekend gatherings." },
      { title: "Day-to-Night UI Theme Shift", desc: "Dynamic color mood transitioning from warm cafe tones during daytime to sleek brewery dark-mode by sunset." }
    ],
    impact: "Increased brewery tour and private event inquiries by 90% and drove an 80% uplift in weekend advance table bookings."
  },

  // --- 9. FAT COOKIE CHEF ---
  "the-fat-cookie": {
    lead: "The Fat Cookie Chef is an artisan bakery famous for giant 150g NYC-style gooey stuffed cookies, decadent brownie bars, and gourmet sweet gifting boxes.",
    challenge: "Communicating the mouthwatering texture and freshness of baked goods online while managing scheduled weekly bake deliveries.",
    solution: "We crafted an indulgent, pastel-toned bakery shop with 'Build Your Own Cookie Box' functionality, freshness countdowns, and specialized gift note add-ons.",
    features: [
      { title: "Build-Your-Box Bundler", desc: "Interactive 4-pack and 6-pack cookie box creator with real-time flavor customization." },
      { title: "Fresh Bake Dispatch Slots", desc: "Calendar scheduling ensuring cookies are baked fresh on the morning of dispatch." },
      { title: "Gooey Cross-Section Lookbook", desc: "High-frame-rate video and macro photography capturing molten chocolate and lava fillings." },
      { title: "Custom Gifting & Handwritten Notes", desc: "Personalized message card builder for birthdays, anniversaries, and corporate gifting." }
    ],
    impact: "Increased average order value (AOV) by 38% through the custom box builder and sold out consecutive weekly bake batches."
  },
  "fat-cookie-chef": {
    lead: "The Fat Cookie Chef is an artisan bakery famous for giant 150g NYC-style gooey stuffed cookies, decadent brownie bars, and gourmet sweet gifting boxes.",
    challenge: "Communicating the mouthwatering texture and freshness of baked goods online while managing scheduled weekly bake deliveries.",
    solution: "We crafted an indulgent, pastel-toned bakery shop with 'Build Your Own Cookie Box' functionality, freshness countdowns, and specialized gift note add-ons.",
    features: [
      { title: "Build-Your-Box Bundler", desc: "Interactive 4-pack and 6-pack cookie box creator with real-time flavor customization." },
      { title: "Fresh Bake Dispatch Slots", desc: "Calendar scheduling ensuring cookies are baked fresh on the morning of dispatch." },
      { title: "Gooey Cross-Section Lookbook", desc: "High-frame-rate video and macro photography capturing molten chocolate and lava fillings." },
      { title: "Custom Gifting & Handwritten Notes", desc: "Personalized message card builder for birthdays, anniversaries, and corporate gifting." }
    ],
    impact: "Increased average order value (AOV) by 38% through the custom box builder and sold out consecutive weekly bake batches."
  },

  // --- 10. FOIRE ---
  "foire": {
    lead: "Foire creates luxury hand-poured soy wax candles, botanical reed diffusers, and artisanal home fragrances designed to elevate daily living spaces.",
    challenge: "Fragrance is an intangible sensory product; the platform needed to convey scent journeys and mood associations purely through visual and editorial design.",
    solution: "We designed a minimalist, sanctuary-inspired aesthetic portal with top/heart/base olfactory pyramids, mood-based scent finders, and eco-refill subscription options.",
    features: [
      { title: "Olfactory Scent Pyramids", desc: "Detailed notes breakdown categorizing top, middle, and base fragrance profiles." },
      { title: "Mood & Vibe Scent Finder", desc: "Interactive quiz matching home moods (Relaxation, Focus, Romance, Energy) to signature scents." },
      { title: "Burn Time & Care Guide", desc: "Interactive candle care tips to maximize soy wax longevity and prevent tunneling." },
      { title: "Clean & Non-Toxic Badging", desc: "Prominent certification highlights for 100% natural soy wax, phthalate-free oils, and cotton wicks." }
    ],
    impact: "Achieved a 45% repeat purchase rate and established Foire as a premier corporate gifting and luxury lifestyle brand."
  },

  // --- 11. KYMA ---
  "kyma": {
    lead: "KYMA is an upscale coastal culinary destination blending the vibrant flavors of the Mediterranean with contemporary Asian gastronomy in an opulent setting.",
    challenge: "Delivering a digital experience as refined and sensory as dining in their lavish restaurant, while streamlining high-volume table reservations.",
    solution: "We engineered an editorial dining portal with dynamic video backgrounds, sommelier-curated cocktail and wine menus, and an integrated VIP concierge desk.",
    features: [
      { title: "Curated Culinary Showcase", desc: "Interactive menu divided into Greek coastal seafood, robata grills, and signature sushi selections." },
      { title: "Sommelier Cocktail Lounge", desc: "Visual mixology gallery detailing infused spirits, flavor balances, and bar pairings." },
      { title: "VIP Private Dining Booking", desc: "Direct inquiry pipeline for private dining rooms, celebrations, and curated chef tasting menus." },
      { title: "Ambient Cinematic Storytelling", desc: "Subtle micro-animations and lighting transitions capturing the coastal Aegean architecture." }
    ],
    impact: "Streamlined daily table booking workflows and elevated private dining suite inquiries by over 120%."
  },

  // --- 12. HONK / HOUSE OF NIHAL KHERA ---
  "honk": {
    lead: "House of Nihal Khera (HONK) is a luxury bespoke atelier specializing in royal menswear, bespoke sherwanis, bandhgalas, and Italian-wool tailored suits.",
    challenge: "Bespoke menswear requires personal consultation, fabric tactile trust, and high-touch styling advice that standard stores cannot deliver.",
    solution: "We built a royal atelier digital lookbook with private master-tailor consultation scheduling, styling consultation forms, and 360-degree groom wear showcases.",
    features: [
      { title: "Groom Lookbook Portfolio", desc: "High-definition wedding ensembles categorized by ceremony: Sangeet, Mehendi, Wedding, and Reception." },
      { title: "Private Tailor Consultation Flow", desc: "Interactive appointment booking for in-person atelier fittings and virtual styling." },
      { title: "Heritage Craftsmanship Archives", desc: "Stories and closeups of hand-embroidered French knots, zardozi work, and hand-woven silks." },
      { title: "International Measurements Desk", desc: "Guided remote measurement portal for destination wedding clients across the globe." }
    ],
    impact: "Attracted high-value NRI wedding clients and increased atelier bridal consultations by 75%."
  },
  "house-of-nihal-khera": {
    lead: "House of Nihal Khera (HONK) is a luxury bespoke atelier specializing in royal menswear, bespoke sherwanis, bandhgalas, and Italian-wool tailored suits.",
    challenge: "Bespoke menswear requires personal consultation, fabric tactile trust, and high-touch styling advice that standard stores cannot deliver.",
    solution: "We built a royal atelier digital lookbook with private master-tailor consultation scheduling, styling consultation forms, and 360-degree groom wear showcases.",
    features: [
      { title: "Groom Lookbook Portfolio", desc: "High-definition wedding ensembles categorized by ceremony: Sangeet, Mehendi, Wedding, and Reception." },
      { title: "Private Tailor Consultation Flow", desc: "Interactive appointment booking for in-person atelier fittings and virtual styling." },
      { title: "Heritage Craftsmanship Archives", desc: "Stories and closeups of hand-embroidered French knots, zardozi work, and hand-woven silks." },
      { title: "International Measurements Desk", desc: "Guided remote measurement portal for destination wedding clients across the globe." }
    ],
    impact: "Attracted high-value NRI wedding clients and increased atelier bridal consultations by 75%."
  },

  // --- 13. ANYADHA ---
  "anyadha": {
    lead: "Anyadha is a slow-fashion sustainable label producing hand-spun organic cotton wear, natural indigo-dyed apparel, and timeless conscious wardrobe essentials.",
    challenge: "Educating fast-fashion consumers on the true value of slow handloom craftsmanship while delivering modern, effortless shopping navigation.",
    solution: "We built a clean, earthy, minimalist e-commerce store highlighting artisan profiles, carbon-footprint savings, and natural dye processes.",
    features: [
      { title: "Artisan Provenance Tracker", desc: "Information on the weaving cluster and craft techniques used in each garment." },
      { title: "Natural Dye Care Guide", desc: "Educational washing and care recommendations for vegetable and indigo dyes." },
      { title: "Slow-Fashion Capsule Builder", desc: "Curated bundle builder for mixing and matching timeless capsule wardrobe basics." },
      { title: "Plastic-Free Packaging Badge", desc: "Highlighting 100% biodegradable cornstarch mailers and upcycled fabric tags." }
    ],
    impact: "Established a devoted eco-conscious community, increasing average session duration by 2.4x."
  },

  // --- 14. REWIND STORIES ---
  "rewind-stories": {
    lead: "Rewind Stories is a cinematic wedding film and destination photography studio capturing authentic, unscripted human emotions across the world.",
    challenge: "Wedding photography websites often suffer from slow image load times and clunky video players, frustrating high-intent couples browsing portfolios on mobile.",
    solution: "We built an ultra-fast, cinematic visual portfolio with CDN-streamed 4K wedding films, full-bleed storytelling galleries, and an availability inquiry engine.",
    features: [
      { title: "Cinematic 4K Video Streaming", desc: "Lag-free adaptive video players optimized for mobile viewing on cellular connections." },
      { title: "Love Story Photo Essays", desc: "Full-bleed chronological wedding photo stories capturing morning prep through afterparty energy." },
      { title: "Date Availability Checker", desc: "Calendar-integrated booking form allowing couples to check destination dates in real-time." },
      { title: "Destination Map Showcase", desc: "Interactive globe highlighting past wedding locations from Udaipur and Tuscany to Bali." }
    ],
    impact: "Reduced mobile page load time by 68% and tripled qualified destination wedding inquiries for upcoming seasons."
  },

  // --- 15. KAMAL MOTORS ---
  "kamal": {
    lead: "Kamal Motors is an established multi-brand commercial and passenger vehicle dealership network delivering sales, fleet leasing, and state-of-the-art service support.",
    challenge: "Organizing extensive commercial vehicle catalogs with varying tonnages, engine specs, and financing options into a clean, search-friendly interface.",
    solution: "We built a robust automotive inventory portal with model comparison tools, EMI financial calculators, and instant test-drive scheduling.",
    features: [
      { title: "Vehicle Specification Comparator", desc: "Side-by-side comparison of horsepower, payload capacity, fuel efficiency, and warranty." },
      { title: "Live EMI & Loan Calculator", desc: "Instant financing estimator computing monthly installments based on down payment and tenure." },
      { title: "Service & Maintenance Booking", desc: "Online service slot reservation with pickup and drop-off request options." },
      { title: "Fleet Inquiry B2B Desk", desc: "Specialized corporate fleet purchase portal connecting fleet operators directly to sales heads." }
    ],
    impact: "Streamlined test drive and fleet quotation workflows, driving a 55% increase in verified digital sales leads."
  },
  "kamal-motors": {
    lead: "Kamal Motors is an established multi-brand commercial and passenger vehicle dealership network delivering sales, fleet leasing, and state-of-the-art service support.",
    challenge: "Organizing extensive commercial vehicle catalogs with varying tonnages, engine specs, and financing options into a clean, search-friendly interface.",
    solution: "We built a robust automotive inventory portal with model comparison tools, EMI financial calculators, and instant test-drive scheduling.",
    features: [
      { title: "Vehicle Specification Comparator", desc: "Side-by-side comparison of horsepower, payload capacity, fuel efficiency, and warranty." },
      { title: "Live EMI & Loan Calculator", desc: "Instant financing estimator computing monthly installments based on down payment and tenure." },
      { title: "Service & Maintenance Booking", desc: "Online service slot reservation with pickup and drop-off request options." },
      { title: "Fleet Inquiry B2B Desk", desc: "Specialized corporate fleet purchase portal connecting fleet operators directly to sales heads." }
    ],
    impact: "Streamlined test drive and fleet quotation workflows, driving a 55% increase in verified digital sales leads."
  },

  // --- 16. VENSA SKIN CARE ---
  "vensa": {
    lead: "Vensa Skin Care is a clinical dermatological brand formulating targeted face washes, active barrier creams, and nutrient-rich serums for everyday skin health.",
    challenge: "Consumers are overwhelmed by conflicting skincare advice; they need direct, trustworthy proof of efficacy and clear guidance on which product suits their skin type.",
    solution: "We built a fresh, pastel-medical e-commerce experience with interactive ingredient glossary modals, real before/after clinical results, and skin-type filters.",
    features: [
      { title: "Skin-Type Routine Finder", desc: "Filter by Oily, Dry, Sensitive, Acne-Prone, and Combination skin for tailored routine stacks." },
      { title: "Active Ingredient Glossary", desc: "Interactive breakdowns of Salicylic Acid, Green Tea, Hyaluronic Acid, and Niacinamide benefits." },
      { title: "Clinical Trial Proof Badges", desc: "Verified dermatologist-backed testing badges directly visible on product cards." },
      { title: "2-Step Bundle & Save", desc: "Dynamic checkout upsell pairing complementary face wash and moisturizers for instant discounts." }
    ],
    impact: "Lifted multi-item bundle checkout rate by 42% and reduced bounce rate on product detail pages by 35%."
  },
  "vensa-skincare": {
    lead: "Vensa Skin Care is a clinical dermatological brand formulating targeted face washes, active barrier creams, and nutrient-rich serums for everyday skin health.",
    challenge: "Consumers are overwhelmed by conflicting skincare advice; they need direct, trustworthy proof of efficacy and clear guidance on which product suits their skin type.",
    solution: "We built a fresh, pastel-medical e-commerce experience with interactive ingredient glossary modals, real before/after clinical results, and skin-type filters.",
    features: [
      { title: "Skin-Type Routine Finder", desc: "Filter by Oily, Dry, Sensitive, Acne-Prone, and Combination skin for tailored routine stacks." },
      { title: "Active Ingredient Glossary", desc: "Interactive breakdowns of Salicylic Acid, Green Tea, Hyaluronic Acid, and Niacinamide benefits." },
      { title: "Clinical Trial Proof Badges", desc: "Verified dermatologist-backed testing badges directly visible on product cards." },
      { title: "2-Step Bundle & Save", desc: "Dynamic checkout upsell pairing complementary face wash and moisturizers for instant discounts." }
    ],
    impact: "Lifted multi-item bundle checkout rate by 42% and reduced bounce rate on product detail pages by 35%."
  },

  // --- 17. KITCHUN STUDIO ---
  "kitchun": {
    lead: "Kitchun Studio designs modular, German-engineered bespoke luxury kitchens, smart storage cabinetry, and architectural space solutions.",
    challenge: "Modular kitchen sales require spatial trust, hardware transparency, and high-touch design consultations to convert high-ticket leads.",
    solution: "We developed an architectural digital showroom with 3D finish explorers, modular layout breakdowns (Island, L-Shape, Parallel), and cost estimation tools.",
    features: [
      { title: "Modular Layout Explorer", desc: "Interactive floor plan guides for Island, U-Shaped, Parallel, and Straight kitchen layouts." },
      { title: "Hardware & Material Finishes", desc: "Showcases of acrylic, ceramic, PU lacquer, and soft-close German hardware durability." },
      { title: "Free 3D Design Consultation Form", desc: "Spatial upload portal where homeowners upload floor plans for complimentary 3D renders." },
      { title: "Virtual Kitchen Tour Lookbook", desc: "Full-screen video walkthroughs of completed residential kitchen installations." }
    ],
    impact: "Increased qualified residential kitchen design leads by 88% and halved the initial client discovery cycle."
  },
  "kitchun-studio": {
    lead: "Kitchun Studio designs modular, German-engineered bespoke luxury kitchens, smart storage cabinetry, and architectural space solutions.",
    challenge: "Modular kitchen sales require spatial trust, hardware transparency, and high-touch design consultations to convert high-ticket leads.",
    solution: "We developed an architectural digital showroom with 3D finish explorers, modular layout breakdowns (Island, L-Shape, Parallel), and cost estimation tools.",
    features: [
      { title: "Modular Layout Explorer", desc: "Interactive floor plan guides for Island, U-Shaped, Parallel, and Straight kitchen layouts." },
      { title: "Hardware & Material Finishes", desc: "Showcases of acrylic, ceramic, PU lacquer, and soft-close German hardware durability." },
      { title: "Free 3D Design Consultation Form", desc: "Spatial upload portal where homeowners upload floor plans for complimentary 3D renders." },
      { title: "Virtual Kitchen Tour Lookbook", desc: "Full-screen video walkthroughs of completed residential kitchen installations." }
    ],
    impact: "Increased qualified residential kitchen design leads by 88% and halved the initial client discovery cycle."
  },

  // --- 18. LAYSYY ---
  "laysyy": {
    lead: "Laysyy is a lifestyle loungewear brand embodying 'The Art of Unwinding' with premium heavyweight cotton tees, relaxed lowers, and gender-neutral comfort wear.",
    challenge: "In the crowded apparel market, Laysyy needed to stand out with a distinct laid-back brand attitude while ensuring effortless mobile shopping speed.",
    solution: "We built an ultra-clean, aesthetic Shopify store featuring high-res lookbook banners, instant size switchers, and express 1-click mobile checkout.",
    features: [
      { title: "Express Sticky Cart", desc: "Mobile thumb-friendly persistent Add-to-Cart drawer with instant size and color swatch toggles." },
      { title: "Fabric Feel & Weight Indicators", desc: "Visual 240 GSM organic cotton badges explaining thickness, breathability, and drape." },
      { title: "Shoppable Social Lookbook", desc: "Interactive 'Shop the Vibe' gallery allowing customers to buy complete matching loungewear sets." },
      { title: "Instant COD & UPI Integration", desc: "Seamless Indian payment gateway integration with real-time pincode delivery estimates." }
    ],
    impact: "Decreased mobile cart abandonment by 34% and boosted mobile conversion rates by 2.8x."
  },

  // --- 19. LIMITLESS CLOTHING ---
  "limitless": {
    lead: "Limitless Clothing is an athletic training brand delivering performance activewear, seamless compression wear, and gym apparel built for endurance.",
    challenge: "Athletes demand technical gear; the site needed to demonstrate four-way stretch, moisture-wicking technology, and durability under high performance.",
    solution: "We engineered a dark-mode high-intensity activewear store with technical fabric feature callouts, sweat-wicking comparison charts, and fit guides.",
    features: [
      { title: "Performance Tech Callouts", desc: "Interactive badges for 4-Way Stretch, Anti-Odor Technology, and Breathable Mesh Panels." },
      { title: "Athlete Fit & Compression Guide", desc: "Clear explanations of Compression vs. Regular Fit to guide sizing for different sports." },
      { title: "Workout Set Matcher", desc: "Instant 1-click bundle suggestions pairing matching sports bras, leggings, and gym tees." },
      { title: "Fast-Loading Product Cards", desc: "Optimized image rendering delivering sub-second load times even with high-res product galleries." }
    ],
    impact: "Lifted mobile conversion rate by 52% and grew bundle sales across workout collections by 40%."
  },
  "limitless-clothing": {
    lead: "Limitless Clothing is an athletic training brand delivering performance activewear, seamless compression wear, and gym apparel built for endurance.",
    challenge: "Athletes demand technical gear; the site needed to demonstrate four-way stretch, moisture-wicking technology, and durability under high performance.",
    solution: "We engineered a dark-mode high-intensity activewear store with technical fabric feature callouts, sweat-wicking comparison charts, and fit guides.",
    features: [
      { title: "Performance Tech Callouts", desc: "Interactive badges for 4-Way Stretch, Anti-Odor Technology, and Breathable Mesh Panels." },
      { title: "Athlete Fit & Compression Guide", desc: "Clear explanations of Compression vs. Regular Fit to guide sizing for different sports." },
      { title: "Workout Set Matcher", desc: "Instant 1-click bundle suggestions pairing matching sports bras, leggings, and gym tees." },
      { title: "Fast-Loading Product Cards", desc: "Optimized image rendering delivering sub-second load times even with high-res product galleries." }
    ],
    impact: "Lifted mobile conversion rate by 52% and grew bundle sales across workout collections by 40%."
  },

  // --- 20. MAMA JAMA ---
  "mama-jama": {
    lead: "Mama Jama is an irreverent pop-culture apparel label crafting statement graphic tees, vintage wash hoodies, and nostalgic retro merchandise.",
    challenge: "Converting high-volume social media traffic from Instagram and TikTok into instant apparel sales before user attention drops off.",
    solution: "We engineered a viral-ready mobile storefront with TikTok video embeds, dynamic product bundle popups, and a 2-step checkout flow.",
    features: [
      { title: "Social Reel Shoppable Feed", desc: "Direct video integration allowing visitors to buy graphic tees featured in viral TikToks." },
      { title: "Nostalgia Theme Switcher", desc: "Filter drops by 90s Anime, Retro Gaming, Vintage Y2K, and Hip-Hop aesthetics." },
      { title: "Instant Sizing Chart Modal", desc: "Interactive size recommendation engine reducing return friction for overseas customers." },
      { title: "Mystery Graphic Tee Add-On", desc: "High-converting checkout upsell offering randomized discounted tees at payment." }
    ],
    impact: "Increased mobile average order value by 32% and generated over 4,000 orders in the first 90 days."
  },

  // --- 21. MJ AND CO ---
  "mj-and-co": {
    lead: "MJ and Co is a corporate legal advisory, financial structuring, and cross-border compliance firm advising enterprises, startups, and high-net-worth investors.",
    challenge: "Professional legal advisory requires an aura of unquestionable credibility, corporate stature, and clear service categorization without dry legalese.",
    solution: "We developed a sophisticated, corporate-grade digital headquarters featuring clear sector breakdowns, partner credentials, and secure consultation intake.",
    features: [
      { title: "Practice Area Matrix", desc: "Detailed breakdowns of Mergers & Acquisitions, Corporate Taxation, Dispute Resolution, and IPR." },
      { title: "Partner & Leadership Credentials", desc: "Comprehensive partner bios showcasing landmark deal experience and regulatory expertise." },
      { title: "Confidential Client Inquiry Desk", desc: "Encrypted consultation booking form with conflict-check intake filters." },
      { title: "Legal Insights & Regulatory Briefs", desc: "Dynamic publication hub for updates on corporate law, GST revisions, and compliance guidelines." }
    ],
    impact: "Enhanced institutional credibility, resulting in a 60% increase in inbound enterprise retainer inquiries."
  },

  // --- 22. NXTWAX ---
  "nxtwax": {
    lead: "Nxtwax is an automotive care brand engineering high-performance ceramic coatings, hybrid carnauba waxes, and professional auto detailing supplies.",
    challenge: "Auto enthusiasts require clear application tutorials, hydrophobic water-beading proof, and paint-safety certifications before purchasing.",
    solution: "We designed a bold, automotive-styled e-commerce hub featuring video application guides, hydrophobic test comparisons, and detailing pro-kits.",
    features: [
      { title: "Hydrophobic Demonstration Videos", desc: "Interactive video clips demonstrating water beading, chemical resistance, and deep gloss shine." },
      { title: "Application Step-by-Step Guide", desc: "Clear prep, application, and curing instructions for DIY car enthusiasts and pro detailers." },
      { title: "Complete Detailing Pro-Kit Bundler", desc: "Pre-configured bundles combining wash shampoo, clay bars, ceramic wax, and microfiber towels." },
      { title: "Surface Compatibility Checker", desc: "Clear compatibility tags for clear coats, matte finishes, glass, wheels, and vinyl wraps." }
    ],
    impact: "Increased average bundle order size by 45% and reduced customer support application queries by 60%."
  },

  // --- 23. OUDQUA ---
  "oudqua": {
    lead: "The Oudqua crafts authentic artisanal Oud oils, niche Arabian perfumes, and royal oriental fragrances distilled from sustainable agarwood plantations.",
    challenge: "Oud is a deeply layered luxury product; the site had to reflect royal Middle Eastern heritage and convey complex notes of smoke, wood, and amber.",
    solution: "We designed a dark gold luxury portal featuring longevity ratings, scent concentration breakdowns, and bespoke velvet gifting unboxing experiences.",
    features: [
      { title: "Concentration & Longevity Scale", desc: "Clear visual metrics on Pure Dehn Al Oud vs. Eau de Parfum projection and 24-hour sillage." },
      { title: "Distillation & Sourcing Origin", desc: "Stories tracing wild Assam agarwood, Cambodian oud, and traditional copper still distillation." },
      { title: "Discovery Sampler Set", desc: "Miniature sample box allowing fragrance connoisseurs to experience multiple scents before full-bottle purchase." },
      { title: "Royal Gift Packaging Customizer", desc: "Option to add custom calligraphy gift sleeves and luxury leather fragrance cases." }
    ],
    impact: "Converted over 35% of sample set buyers into full-sized bottle customers within 30 days."
  },

  // --- 24. RP ROYAL ---
  "rproyal": {
    lead: "RP Royal is a luxury palace hotel and heritage resort offering royal hospitality, grand destination wedding lawns, and regal wellness experiences.",
    challenge: "Showcasing the architectural scale, banquet capacity, and bespoke wedding services of the palace property to event planners and vacationers.",
    solution: "We built an opulent, grand-scale hospitality portal with virtual 360 property tours, banquet floor plan specs, and direct room reservation engines.",
    features: [
      { title: "Virtual Suite & Palace Walkthrough", desc: "Interactive 360-degree views of royal suites, heritage courtyards, and poolside dining." },
      { title: "Grand Wedding Banquet Planner", desc: "Interactive capacity charts for grand lawns, banquet halls, and pre-wedding event spaces." },
      { title: "Direct Room Booking Engine", desc: "Live availability calendar with best-rate guarantees, spa packages, and culinary inclusions." },
      { title: "Concierge Event Inquiry Desk", desc: "Direct channel to wedding and corporate event planners for tailored multi-day proposals." }
    ],
    impact: "Boosted direct non-commissioned room bookings by 48% and secured multiple high-value destination wedding contracts."
  },

  // --- 25. PURIFI ---
  "purifi": {
    lead: "Purifi produces non-toxic, all-natural air purifying pouches filled with virgin activated bamboo charcoal that naturally absorbs odors, moisture, and allergens.",
    challenge: "Educating consumers on how passive charcoal purification works compared to electric air purifiers, while highlighting decorative fabric aesthetic benefits.",
    solution: "We built an earthy, fresh e-commerce experience showcasing room-by-room coverage calculators, rejuvenation solar recharge guides, and multi-room bundles.",
    features: [
      { title: "Room Square-Footage Calculator", desc: "Interactive tool recommending the ideal pouch size (50g for shoes, 200g for cars, 500g for bedrooms)." },
      { title: "Eco-Rejuvenation Solar Timer", desc: "Guide illustrating how placing the pouch in monthly sunlight reactivates charcoal for 2 full years." },
      { title: "Multi-Pattern Decor Gallery", desc: "Showcases of patterned jute and cotton fabrics that double as stylish interior home accessories." },
      { title: "100% Non-Toxic & Pet-Safe Certification", desc: "Prominent badges certifying fragrance-free, chemical-free safety for pets and babies." }
    ],
    impact: "Increased multi-pack bundle sales by 65% and grew recurring B2B corporate office orders by 80%."
  },

  // --- 26. RAD INDIA ---
  "radindia": {
    lead: "Rad India is a custodian of pure Banarasi silk weaving, hand-crafting heirloom bridal sarees, zari dupattas, and royal Indian festive drapes.",
    challenge: "Counterfeit machine-made silk has diluted consumer trust; the platform had to prove authentic handloom Silk Mark certification and artisan provenance.",
    solution: "We created an opulent digital heritage gallery with Silk Mark authenticity verification, high-magnification weave inspectors, and private bridal video appointments.",
    features: [
      { title: "Silk Mark India Verification", desc: "Authenticity guarantee badges assuring 100% pure natural mulberry silk and real silver/gold zari." },
      { title: "Weave Technique Archive", desc: "Educational deep dives into Kadhwa, Tanchoi, Meenakari, and Jangla hand-weaving styles." },
      { title: "Virtual Bridal Saree Video Call", desc: "One-on-one live video appointments allowing brides to inspect saree drape and sheen in natural light." },
      { title: "Heirloom Preservation Guide", desc: "Comprehensive storage and maintenance tips to preserve pure silk sarees across generations." }
    ],
    impact: "Established high trust among international NRI brides, lifting virtual appointment conversion to 72%."
  },
  "rad-india": {
    lead: "Rad India is a custodian of pure Banarasi silk weaving, hand-crafting heirloom bridal sarees, zari dupattas, and royal Indian festive drapes.",
    challenge: "Counterfeit machine-made silk has diluted consumer trust; the platform had to prove authentic handloom Silk Mark certification and artisan provenance.",
    solution: "We created an opulent digital heritage gallery with Silk Mark authenticity verification, high-magnification weave inspectors, and private bridal video appointments.",
    features: [
      { title: "Silk Mark India Verification", desc: "Authenticity guarantee badges assuring 100% pure natural mulberry silk and real silver/gold zari." },
      { title: "Weave Technique Archive", desc: "Educational deep dives into Kadhwa, Tanchoi, Meenakari, and Jangla hand-weaving styles." },
      { title: "Virtual Bridal Saree Video Call", desc: "One-on-one live video appointments allowing brides to inspect saree drape and sheen in natural light." },
      { title: "Heirloom Preservation Guide", desc: "Comprehensive storage and maintenance tips to preserve pure silk sarees across generations." }
    ],
    impact: "Established high trust among international NRI brides, lifting virtual appointment conversion to 72%."
  },

  // --- 27. ROCKERS JR ---
  "rockersjr": {
    lead: "Rockers Jr creates stylish, comfortable, and durable kids' apparel designed under the philosophy 'Let Boys Be Boys – In Style' with skin-friendly fabrics.",
    challenge: "Parents require assurance regarding skin safety, non-irritating seams, and wash durability while looking for fresh, non-boring children's fashion.",
    solution: "We built a cheerful, high-speed mobile-first boutique store featuring fabric softness certifications, age-based size selectors, and durable playwear lookbooks.",
    features: [
      { title: "Skin-Safe Organic Fabric Badging", desc: "Highlighting 100% combed cotton, zero toxic dyes, and tagless neckline comfort." },
      { title: "Age & Growth-Spurt Size Guide", desc: "Interactive sizing guide accounting for rapid childhood growth spurts to prevent return hassles." },
      { title: "Everyday Playwear Bundler", desc: "Mix-and-match tee and short set creator offering tiered family discounts." },
      { title: "Wash & Wear Durability Guarantee", desc: "Proof of colorfastness and shape retention through 50+ machine wash cycles." }
    ],
    impact: "Achieved a 42% repeat customer rate among parents and reduced sizing-related customer returns by 38%."
  },

  // --- 28. SEXSEA ---
  "sexsea": {
    lead: "Sexsea is a luxury resort swimwear and coastal lifestyle label offering bold designer bikinis, sculpted one-pieces, and breezy Mediterranean cover-ups.",
    challenge: "Swimwear conversion depends heavily on fit confidence, body diversity representation, and premium UV/chlorine fabric durability proof.",
    solution: "We crafted an editorial, sun-drenched swimwear destination featuring body-shape fit calculators, mix-and-match bikini tops/bottoms, and quick-dry technology highlights.",
    features: [
      { title: "Mix-and-Match Bikini Builder", desc: "Allows shoppers to select different sizes and cut styles for tops and bottoms independently." },
      { title: "Sculpting Fabric & UV Proof", desc: "Highlights Italian ECONYL regenerated nylon with UPF 50+ sun protection and shape retention." },
      { title: "Resort Lookbook & Styling", desc: "Curated vacation ensembles pairing swimsuits with linen sarongs, oversized hats, and beach totes." },
      { title: "Water-Drop Quick-Dry Demonstration", desc: "Micro-video clips demonstrating moisture-repellent and ultra-fast drying fabric performance." }
    ],
    impact: "Boosted mix-and-match conversion rates by 55% and lowered sizing exchange requests by 30%."
  },

  // --- 29. SIXTYNINE ---
  "sixtynine": {
    lead: "Sixtynine is an underground contemporary streetwear collective crafting oversized monochrome silhouettes, raw-hem hoodies, and minimalist statement fashion.",
    challenge: "Maintaining an elusive, exclusive streetwear culture online while delivering lightning-fast, high-converting mobile e-commerce functionality.",
    solution: "We engineered a brutalist, high-fashion dark aesthetic storefront with high-contrast typography, seamless video lookbooks, and instant Apple Pay/UPI checkouts.",
    features: [
      { title: "Brutalist Monochrome Aesthetic", desc: "High-contrast editorial grid putting raw garment textures and tailored cuts front and center." },
      { title: "Limited Release Vault", desc: "Member-only password-protected drops creating scarcity and anticipation for seasonal collections." },
      { title: "Heavyweight GSM Indicators", desc: "Technical fabric weight specifications (380 GSM fleece, 260 GSM jersey) detailing thickness and drape." },
      { title: "One-Click Express Mobile Flow", desc: "Streamlined checkout eliminating extra input fields for rapid on-the-go order completion." }
    ],
    impact: "Sold out seasonal capsule collections within 48 hours of release and increased average mobile session engagement by 2.2x."
  },

  // --- 30. AMA LEGAL ---
  "ama": {
    lead: "AMA Legal Solutions is a premier full-service law firm and corporate legal consultancy specializing in commercial dispute litigation, arbitration, debt resolution, and intellectual property.",
    challenge: "Legal clients need absolute discretion, authoritative jurisprudence proof, and a friction-free method to book urgent legal counsel.",
    solution: "We built a commanding, institutional legal portal featuring practice area deep dives, landmark judgment archives, and an encrypted 24/7 advocate intake desk.",
    features: [
      { title: "Comprehensive Practice Matrix", desc: "Dedicated modules for NCLT Insolvency, Banking Litigation, Arbitration, and Criminal Defense." },
      { title: "Emergency Legal Retainer Hotline", desc: "Direct priority callback pipeline for corporate clients facing urgent regulatory or court notices." },
      { title: "Judicial Precedent & Case Archives", desc: "Published summaries of landmark high court and Supreme Court rulings argued by senior counsel." },
      { title: "Encrypted Document Submission Desk", desc: "Bank-grade encrypted portal allowing clients to securely upload contracts for preliminary review." }
    ],
    impact: "Grew corporate retainer client acquisition by 110% and reduced intake response latency from 24 hours to under 30 minutes."
  },
  "ama-legal": {
    lead: "AMA Legal Solutions is a premier full-service law firm and corporate legal consultancy specializing in commercial dispute litigation, arbitration, debt resolution, and intellectual property.",
    challenge: "Legal clients need absolute discretion, authoritative jurisprudence proof, and a friction-free method to book urgent legal counsel.",
    solution: "We built a commanding, institutional legal portal featuring practice area deep dives, landmark judgment archives, and an encrypted 24/7 advocate intake desk.",
    features: [
      { title: "Comprehensive Practice Matrix", desc: "Dedicated modules for NCLT Insolvency, Banking Litigation, Arbitration, and Criminal Defense." },
      { title: "Emergency Legal Retainer Hotline", desc: "Direct priority callback pipeline for corporate clients facing urgent regulatory or court notices." },
      { title: "Judicial Precedent & Case Archives", desc: "Published summaries of landmark high court and Supreme Court rulings argued by senior counsel." },
      { title: "Encrypted Document Submission Desk", desc: "Bank-grade encrypted portal allowing clients to securely upload contracts for preliminary review." }
    ],
    impact: "Grew corporate retainer client acquisition by 110% and reduced intake response latency from 24 hours to under 30 minutes."
  },

  // --- 31. SETTLE LOANS ---
  "settle-loans": {
    lead: "Settle Loans is an empathetic legal and financial advisory portal providing structured debt resolution, loan settlement negotiation, and anti-harassment protection.",
    challenge: "Borrowers facing financial distress are under immense stress; the site needed to provide instant reassurance, legal clarity, and a clear step-by-step roadmap to debt freedom.",
    solution: "We designed a reassuring, authoritative legal advisory portal with interactive loan settlement estimators, legal rights hotlines, and encrypted consultation intake.",
    features: [
      { title: "Loan Settlement Savings Estimator", desc: "Calculates projected principal waiver percentages and affordable monthly escrow targets." },
      { title: "Recovery Agent Anti-Harassment Guide", desc: "Instant legal instructions and RBI guidelines empowering borrowers against unlawful harassment." },
      { title: "Step-by-Step Settlement Roadmap", desc: "Transparent 4-stage process breakdown from legal notice drafting to final No Dues Certificate (NDC)." },
      { title: "100% Confidential Lawyer Call Request", desc: "Encrypted intake form connecting distressed borrowers with seasoned financial resolution advocates." }
    ],
    impact: "Elevated qualified lead volume by 3.6x and reduced intake form abandonment rate by 45%."
  },

  // --- 32. TOTOTERRA ---
  "tototerra": {
    lead: "Tototerra creates artisanal terracotta ceramics, hand-thrown earthen tableware, and botanical planters celebrating the timeless connection between clay and mindful living.",
    challenge: "Communicating the organic texture, artisanal handmade variations, and food-safe non-toxic glazing of terracotta through digital screens.",
    solution: "We designed an organic, warm-toned earthen storefront featuring artisan wheel-throwing video clips, non-toxic food safety badges, and safe transit packaging guarantees.",
    features: [
      { title: "Handmade Wheel Craftsmanship Lookbook", desc: "Cinematic closeups of master potters shaping clay and kiln-firing artisanal tableware." },
      { title: "Lead-Free Food Safety Certification", desc: "Clear lab-tested badges assuring 100% lead-free, non-toxic organic clay safe for hot meals and drinks." },
      { title: "Thermal Cooking & Care Instructions", desc: "Interactive guide on curing terracotta pots, natural heat retention, and gentle cleaning methods." },
      { title: "Zero-Breakage Transit Guarantee", desc: "Details of custom honeycomb eco-packaging guaranteeing 100% safe, shatter-proof delivery." }
    ],
    impact: "Expanded tableware set orders by 60% and maintained an impressive 99.4% damage-free delivery track record."
  },

  // --- 33. TRIVORA ---
  "trivora": {
    lead: "Trivora is a fine contemporary jewelry brand crafting ethical lab-grown diamond rings, 18K solid gold everyday essentials, and heirloom gemstone necklaces.",
    challenge: "Selling fine jewelry online requires absolute transparency regarding diamond certification (IGI/GIA), metal hallmarking, and exact ring sizing.",
    solution: "We engineered a radiant, high-luxury jewelry boutique featuring 360-degree diamond spinning previews, interactive ring sizers, and bespoke custom design consultations.",
    features: [
      { title: "360-Degree Diamond Spinner", desc: "High-resolution micro-rotation viewing clarity, cut symmetry, and light reflection from all angles." },
      { title: "Virtual Ring Size Assistant", desc: "Printable and screen-calibrated ring sizer preventing inaccurate sizing exchanges." },
      { title: "Custom Engagement Ring Builder", desc: "Step-by-step custom ring builder selecting diamond shape (Round, Oval, Emerald) and band setting." },
      { title: "BIS 916 & IGI Certificate Verification", desc: "Direct verification modal verifying authentic hallmarking and diamond grading reports." }
    ],
    impact: "Boosted custom engagement ring inquiries by 85% and achieved an average order value exceeding ₹45,000."
  },
  "trivora-jewels": {
    lead: "Trivora Jewels is a fine contemporary jewelry brand crafting ethical lab-grown diamond rings, 18K solid gold everyday essentials, and heirloom gemstone necklaces.",
    challenge: "Selling fine jewelry online requires absolute transparency regarding diamond certification (IGI/GIA), metal hallmarking, and exact ring sizing.",
    solution: "We engineered a radiant, high-luxury jewelry boutique featuring 360-degree diamond spinning previews, interactive ring sizers, and bespoke custom design consultations.",
    features: [
      { title: "360-Degree Diamond Spinner", desc: "High-resolution micro-rotation viewing clarity, cut symmetry, and light reflection from all angles." },
      { title: "Virtual Ring Size Assistant", desc: "Printable and screen-calibrated ring sizer preventing inaccurate sizing exchanges." },
      { title: "Custom Engagement Ring Builder", desc: "Step-by-step custom ring builder selecting diamond shape (Round, Oval, Emerald) and band setting." },
      { title: "BIS 916 & IGI Certificate Verification", desc: "Direct verification modal verifying authentic hallmarking and diamond grading reports." }
    ],
    impact: "Boosted custom engagement ring inquiries by 85% and achieved an average order value exceeding ₹45,000."
  },

  // --- 34. XCEL ---
  "xcel": {
    lead: "Xcel is an international freight forwarding and global logistics enterprise providing sea/air cargo handling, supply chain warehousing, and customs brokerage.",
    challenge: "Enterprise logistics buyers require rapid quotation tools, real-time shipment tracking, and clear route reliability data across complex global trade lanes.",
    solution: "We built a modern, high-trust corporate logistics portal with instant freight rate inquiry estimators, live container tracking search, and global port network maps.",
    features: [
      { title: "Multi-Modal Freight Estimator", desc: "Quick RFQ tool allowing shippers to calculate FCL, LCL, and Air Freight transit windows." },
      { title: "Live Container Tracking Portal", desc: "Single-input container and Bill of Lading (BL) search delivering instant cargo status." },
      { title: "Global Port & Route Network Map", desc: "Interactive shipping route explorer showing major trade corridors across Asia, Europe, and the Americas." },
      { title: "Customs Compliance & Brokerage Hub", desc: "Comprehensive documentation checklist helping importers avoid port demurrage and customs delays." }
    ],
    impact: "Boosted digital freight inquiry volume by 70% and cut customer service tracking inquiry calls by half."
  },

  // --- 35. PP GREEN ---
  "pp-green": {
    lead: "PP Green is a renewable energy infrastructure firm engineering commercial solar photovoltaic plants, rooftop solar solutions, and industrial green transitions.",
    challenge: "Commercial and industrial clients need hard financial ROI data, government subsidy clarity, and long-term solar yield projections to commit to clean energy investments.",
    solution: "We built an authoritative, high-tech green energy platform with solar ROI calculators, industrial rooftop feasibility assessments, and live plant performance dashboards.",
    features: [
      { title: "Commercial Solar ROI Calculator", desc: "Calculates annual electricity bill savings, payback period (typically 3-4 years), and carbon offset tonnage." },
      { title: "Rooftop Feasibility Assessment Form", desc: "Allows facility managers to submit roof area and monthly power bills for customized solar blueprints." },
      { title: "Mega-Watt Scale Project Archives", desc: "Detailed case studies showcasing grid-tied industrial installations and solar power plants." },
      { title: "Government Subsidy & Net Metering Hub", desc: "Clear state-by-state net metering guides and accelerated depreciation tax benefit summaries." }
    ],
    impact: "Shortened industrial solar B2B sales cycles by 40% and generated over ₹15Cr in new corporate pipeline value."
  },

  // --- 36. KACHRACO ---
  "kachraco": {
    lead: "KachraCo. is a circular economy innovation brand transforming post-consumer industrial plastic and textile waste into premium designer home products and eco-materials.",
    challenge: "Upcycled products are often perceived as raw or inferior; the brand needed to showcase premium design aesthetics while proving verified ecological impact.",
    solution: "We built an engaging, modern sustainable portal with live plastic-diverted counters, material circularity lifecycle breakdowns, and B2B corporate merchandise catalogs.",
    features: [
      { title: "Live Eco-Impact Counter", desc: "Dynamic ticker tracking exact kilograms of plastic waste diverted from landfills and oceans." },
      { title: "Circular Material Lifecycle Explorer", desc: "Step-by-step visual animation demonstrating the transformation from discarded waste to luxury design." },
      { title: "Corporate Sustainable Merchandise Hub", desc: "B2B catalog for corporations sourcing ESG-compliant employee gifts and conference merchandise." },
      { title: "Transparency & Traceability Badges", desc: "QR-code batch traceability certifying the ethical sourcing of all recycled raw materials." }
    ],
    impact: "Signed 25+ Fortune 500 corporate gifting partnerships and diverted over 120 tons of plastic from landfills."
  },

  // --- 37. PEHNAVRI ---
  "pehnavri": {
    lead: "Pehnavri is an opulent bridal and festive couture atelier delivering royal hand-embroidered lehengas, bridal sarees, and regal heirloom ensembles.",
    challenge: "Brides investing in high-end wedding lehengas require deep craftsmanship confidence, custom blouse styling consultations, and worldwide insured shipping.",
    solution: "We created a royal digital bridal studio featuring 4K embroidery inspection, custom bridal blouse neckline customizers, and virtual styling appointments.",
    features: [
      { title: "4K Zardozi Micro-Detail Inspector", desc: "Allows brides to inspect every hand-embroidered pearl, dabka wire, and sequin in crystal clarity." },
      { title: "Custom Blouse & Drape Customizer", desc: "Interactive neckline, sleeve length, and back tie-up selector tailored to bridal preferences." },
      { title: "VIP Bridal Video Consultation", desc: "Live video appointments connecting brides with senior bridal stylists for personalized color consultations." },
      { title: "Insured Global Express Courier", desc: "Trackable luxury door-to-door delivery with specialized tamper-evident bridal garment boxes." }
    ],
    impact: "Tripled virtual bridal consultations from the US, UK, and UAE, achieving a 78% appointment-to-order rate."
  },

  // --- 38. CACTI STORE ---
  "cacti-store": {
    lead: "Cacti Store is a trendy mobile lifestyle brand creating aesthetic shockproof phone cases, personalized tech accessories, and charm collections.",
    challenge: "Phone case shopping is highly visual, impulse-driven, and device-dependent; users need instant model compatibility and bundle incentives.",
    solution: "We built an energetic, high-speed mobile storefront with instant phone model selectors (iPhone, Samsung, Pixel), Buy 2 Get Discounts bundlers, and drop-test proof.",
    features: [
      { title: "Instant Phone Model Selector", desc: "Universal device dropdown dynamically filtering matching cases for over 80+ smartphone models." },
      { title: "Buy 2 @ ₹998 Dynamic Bundler", desc: "Real-time tier discount bar automatically applying bundle savings as cases are added to the cart." },
      { title: "10-Foot Drop Protection Badging", desc: "Showcases of dual-layer shockproof bumpers, raised camera bezels, and anti-yellowing tech." },
      { title: "Express 2-Tap UPI Checkout", desc: "Frictionless mobile checkout optimized for rapid impulse purchasing without password walls." }
    ],
    impact: "Boosted mobile conversion rate to 4.1% and increased average items per order from 1.2 to 2.4 units."
  },

  // --- 39. UPSTAGE COLLECTION ---
  "upstage-collection": {
    lead: "Upstage Collect by Roseate is a luxury gourmet culinary and artisanal gifting destination offering handcrafted European breads, organic mithai, and luxury celebration hampers.",
    challenge: "Perishable gourmet baked goods and luxury confectionery require temperature-controlled freshness guarantees, scheduled dispatch, and bespoke gifting personalization.",
    solution: "We created an opulent, appetizing digital patisserie with fresh morning bake scheduling, custom hamper builders, and corporate festive gifting concierge desks.",
    features: [
      { title: "Artisanal Breads & Bake Selector", desc: "Showcases of freshly baked sourdoughs, focaccias, and brioche with detailed flour and fermentation notes." },
      { title: "Curated Luxury Hamper Builder", desc: "Interactive box builder combining gourmet mithai, artisanal preserves, cookies, and floral arrangements." },
      { title: "Scheduled Delivery Time-Slots", desc: "Precision delivery date and morning/evening slot selection ensuring maximum oven freshness." },
      { title: "Corporate Celebration Concierge", desc: "Specialized desk for customized company anniversary and festive holiday gift distribution." }
    ],
    impact: "Surpassed luxury festive hamper sales targets by 150% and built a loyal weekly subscription customer base for artisan breads."
  },

  // --- ADDITIONAL AGENCY PORTFOLIO CLIENTS ---
  "botai": {
    lead: "Bo-Tai is a high-energy progressive modern Asian dining concept and cocktail lounge set against architectural scenic courtyards.",
    challenge: "Capturing the playful, high-octane mixology culture and signature contemporary Thai cuisine in a seamless digital reservation and lookbook platform.",
    solution: "We engineered a dynamic, visually lush dining portal featuring interactive cocktail menu cards, chef-curated tasting menus, and instant VIP table reservations.",
    features: [
      { title: "Progressive Asian Menu Explorer", desc: "Interactive tasting cards showcasing small plates, robata grills, and artisanal wok creations." },
      { title: "Artisanal Cocktail Showcase", desc: "Highlights of signature botanical gin infusions, smoked whiskeys, and tropical mixology." },
      { title: "Instant Table & Party Scheduler", desc: "Real-time reservation system synced with floor management for seamless guest seating." },
      { title: "Nightlife & Music Series Hub", desc: "Calendar of weekend DJ sets, sundowners, and guest bartender takeovers." }
    ],
    impact: "Elevated weekend prime-time table reservations by 85%."
  },
  "delhi-house": {
    lead: "Delhi House Cafe is a modern Indian dining destination offering elevated street gastronomy, artisanal cocktails, and contemporary comfort food in the UK.",
    challenge: "Translating authentic Indian nostalgia and modern metropolitan aesthetics to international diners seeking high-end Indian dining.",
    solution: "We built an editorial UK-focused restaurant portal featuring interactive allergen menus, OpenTable reservation integration, and private party inquiries.",
    features: [
      { title: "Interactive Dietary & Allergen Menu", desc: "Filter dishes by Halal, Vegetarian, Vegan, and Gluten-Free preferences." },
      { title: "Integrated UK Table Booking", desc: "Seamless OpenTable booking widget ensuring direct confirmation without page reload." },
      { title: "Chef's Tasting Journey", desc: "Story-led culinary narratives highlighting Delhi's rich street-food evolution." },
      { title: "Private Events & Group Bookings", desc: "Dedicated inquiry portal for corporate celebrations, birthdays, and private hire." }
    ],
    impact: "Achieved a 95% weekend booking rate and reduced phone reservation workload by 50%."
  },
  "farzi-cafe": {
    lead: "Farzi Cafe is a pioneering gourmet dining concept known worldwide for modern Indian molecular gastronomy, theatrical presentation, and cutting-edge mixology.",
    challenge: "Conveying the illusionary, theatrical dining experience of molecular gastronomy across digital screens to drive global table reservations.",
    solution: "We designed an energetic, sensory digital experience with dynamic dish presentation animations, global location selectors, and interactive cocktail menus.",
    features: [
      { title: "Molecular Gastronomy Lookbook", desc: "Video-driven showcase capturing smoking nitrogen cocktails and culinary deconstructions." },
      { title: "Global Location & Menu Switcher", desc: "Multi-city selector for Farzi outlets across London, Dubai, Delhi, and Mumbai." },
      { title: "Instant Table Reserve Widget", desc: "Streamlined reservation integration for international and local guests." },
      { title: "Chef's Special Tasting Menu", desc: "Pre-fixed multi-course tasting menu preview with optional wine and cocktail pairings." }
    ],
    impact: "Generated over 15,000 monthly table booking interactions across flagship international locations."
  },
  "aerolume": {
    lead: "Aerolume designs architectural luxury lighting systems, custom crystal chandeliers, and minimalist smart ambient luminaires for luxury residences and hotels.",
    challenge: "Conveying the luminosity, Kelvin color temperature, and scale of high-end architectural lighting fixtures on digital screens.",
    solution: "We built an architectural lighting gallery with lux output calculators, smart-home integration guides, and specification sheet downloads for lighting designers.",
    features: [
      { title: "Kelvin Warmth Simulator", desc: "Interactive slider previewing 2700K warm ambient to 4000K daylight illumination effects." },
      { title: "Architectural Spec Sheet Downloads", desc: "Direct CAD and photometric IES file downloads for interior designers and electrical consultants." },
      { title: "Bespoke Chandelier Inquiry Flow", desc: "Custom dimensional inquiry form for large-scale double-height foyer installations." },
      { title: "Smart-Home Dimming Compatibility", desc: "Certification tags confirming compatibility with DALI, Lutron, and Zigbee automation." }
    ],
    impact: "Increased architect specification inquiries by 95% and shortened commercial project quote cycles by half."
  },
  "rosete": {
    lead: "Rosete is a luxury botanical florist and floral design studio crafting bespoke bridal bouquets, luxury venue floral installations, and preserved flower arrangements.",
    challenge: "Managing seasonal flower availability, delicate same-day temperature-controlled dispatch, and bespoke event floral proposals online.",
    solution: "We created an elegant, romantic floral boutique with same-day delivery countdowns, flower care guides, and wedding floral styling inquiry portals.",
    features: [
      { title: "Same-Day Dispatch Countdown", desc: "Real-time delivery slot timers ensuring flowers are cut and dispatched at peak morning freshness." },
      { title: "Wedding Floral Moodboard Builder", desc: "Inquiry tool allowing brides to select color palettes (Pastel, Vibrant, Monochromatic) for floral styling." },
      { title: "Long-Lasting Flower Care Guide", desc: "Step-by-step water changing, trimming, and flower food instructions for maximum vase longevity." },
      { title: "Luxury Gift Packaging & Vases", desc: "Add-on selector for artisanal ceramic vases, luxury ribbons, and customized wax-sealed notes." }
    ],
    impact: "Lifted holiday floral gifting revenue by 110% and expanded high-value wedding floral styling contracts."
  },
  "health": {
    lead: "Health Labs is a modern diagnostic and preventative healthcare ecosystem providing home blood sample collection, full-body screening packages, and digital health records.",
    challenge: "Healthcare patients need absolute clarity regarding test preparation, fast report delivery timelines, and certified NABL lab credentials.",
    solution: "We engineered a clean, trustworthy digital health portal with test symptom search, home phlebotomist booking, and secure digital report downloads.",
    features: [
      { title: "Symptom & Test Smart Search", desc: "Intelligent search matching health symptoms (Fatigue, Thyroid, Diabetes) to recommended health checkups." },
      { title: "Home Phlebotomist Scheduling", desc: "Precision slot booking for certified home blood collection with real-time nurse tracking." },
      { title: "NABL & CAP Certified Lab Proof", desc: "Prominent quality certification badges assuring 99.9% diagnostic accuracy." },
      { title: "Smart PDF Health Trend Dashboard", desc: "Interactive visualization comparing historic test biomarkers across time." }
    ],
    impact: "Increased preventive health package bookings by 130% and achieved a 4.9/5 patient satisfaction rating."
  },
  "chavelle": {
    lead: "Chavelle is an artisanal luxury leather goods atelier crafting full-grain leather briefcases, handcrafted travel duffles, and minimalist leather accessories.",
    challenge: "Differentiating genuine full-grain vegetable-tanned leather from mass-produced synthetic alternatives through digital storytelling.",
    solution: "We crafted a heritage luxury leather boutique with leather aging patina visualizers, custom monogramming previews, and lifetime warranty certificates.",
    features: [
      { title: "Live Monogramming Customizer", desc: "Real-time gold foil and blind deboss letter preview on leather wallets and travel bags." },
      { title: "Vegetable-Tanned Patina Guide", desc: "Interactive slider showing how natural leather develops rich character and patina over 5+ years." },
      { title: "YKK Brass & Stitching Transparency", desc: "Close-up breakdowns of reinforced saddle stitching and solid brass hardware durability." },
      { title: "Lifetime Repair Guarantee Desk", desc: "Direct portal for complimentary annual leather conditioning and hardware maintenance." }
    ],
    impact: "Boosted custom monogrammed gift orders by 75% and achieved an exceptional 4.8% e-commerce conversion rate."
  },
  "lotd": {
    lead: "LOTD (Look of the Day) is a fast-paced trend fashion destination delivering curated daily outfit drops, influencer-inspired capsule looks, and runway-ready streetwear.",
    challenge: "Keeping up with hyper-fast fashion micro-trends while providing an ultra-responsive, mobile-first shopping flow for Gen Z shoppers.",
    solution: "We built an Instagram-native shoppable storefront with daily outfit drops, video try-on reels, and instant size-swapping drawers.",
    features: [
      { title: "Daily Outfit Drop Ticker", desc: "New curated 3-piece look dropped every 24 hours with limited-time ensemble pricing." },
      { title: "Shop-the-Reel Video Feed", desc: "Direct in-video purchasing allowing users to tap items worn by fashion creators." },
      { title: "Express 1-Click UPI Payment", desc: "Frictionless Indian mobile checkout completed in under 10 seconds." },
      { title: "Real-Time Size Availability Alerts", desc: "Instant back-in-stock SMS notifications for sold-out viral garments." }
    ],
    impact: "Drove over 100,000 monthly visits and achieved a 65% increase in multi-item ensemble checkouts."
  },
  "lynx": {
    lead: "LYNX is a high-precision performance gaming peripherals and esports hardware brand engineering ultra-lightweight wireless mice, mechanical keyboards, and low-latency headsets.",
    challenge: "Competitive gamers demand exact sensor specs (DPI, polling rate, switch latency) and ergonomic grip comparisons before buying.",
    solution: "We developed a high-tech esports portal with interactive polling rate comparisons, switch sound tests, and programmable software downloads.",
    features: [
      { title: "Mechanical Switch Sound Board", desc: "Audio preview allowing gamers to listen to Linear Red, Tactile Brown, and Clicky Blue switches." },
      { title: "Sensor & Polling Rate Benchmark", desc: "Detailed specs on 8000Hz hyper-polling, 26,000 DPI optical sensors, and sub-1ms response times." },
      { title: "Hand Size & Grip Style Matcher", desc: "Interactive tool matching Palm, Claw, and Fingertip grip styles to ideal mouse dimensions." },
      { title: "Driver & Firmware Download Hub", desc: "Centralized support center for RGB lighting customization and macro key mapping tools." }
    ],
    impact: "Established LYNX as a premier competitive hardware brand with over 80,000 units shipped across the region."
  },
  "mr-pronto": {
    lead: "Mr. Pronto is an artisanal shoe repair, leather restoration, and luxury bag rejuvenation service restoring heirloom footwear and designer handbags.",
    challenge: "Customers are nervous about sending high-value luxury shoes and bags for restoration; the site needed to demonstrate before/after expertise and safe courier handling.",
    solution: "We designed a visual restoration clinic with interactive before-and-after slider comparisons, instant restoration cost estimators, and doorstep pickup scheduling.",
    features: [
      { title: "Interactive Before/After Sliders", desc: "High-definition visual proof of scuff removal, sole replacement, and luxury color restoration." },
      { title: "Restoration Cost Estimator", desc: "Select shoe/bag type and damage level (heel repair, deep clean, full dye) for instant transparent pricing." },
      { title: "Doorstep Pickup & Return Tracker", desc: "Convenient courier scheduling with real-time workshop status notifications." },
      { title: "Designer Brand Specialization", desc: "Verified expertise badges for restoring Christian Louboutin, Gucci, Prada, and Louis Vuitton pieces." }
    ],
    impact: "Increased luxury restoration bookings by 90% and shortened customer intake inquiries from 3 days to instant online scheduling."
  },
  "rise": {
    lead: "Rise Coworking is a collaborative workspace network and enterprise innovation hub offering modern flex desks, private team suites, and conference infrastructure.",
    challenge: "Enterprise decision-makers and hybrid teams need to quickly verify amenities, book day passes, and schedule physical space tours on mobile.",
    solution: "We built an energetic workspace portal with interactive floor plan tours, 1-click day-pass passes, and flexible meeting room booking systems.",
    features: [
      { title: "Virtual Space & Office Tours", desc: "High-definition video tours of private team offices, acoustic phone booths, and collaborative lounges." },
      { title: "Instant Day-Pass Mobile Purchase", desc: "QR-code access pass delivered instantly to smartphone for contactless check-in." },
      { title: "Meeting Room Calendar & Booking", desc: "Live availability scheduler for 4-person to 20-person boardrooms with AV equipment inclusions." },
      { title: "Community & Networking Events", desc: "Calendar of weekly founder firesides, investor pitch days, and tech workshops." }
    ],
    impact: "Filled private office suites to 96% occupancy within 3 months of platform launch."
  },
  "shiva": {
    lead: "Shiva Designs is an architectural facade and interior stone cladding specialist engineering precision-cut natural marble, granite, and sandstone for luxury villas.",
    challenge: "Architects and builders require exact stone density data, natural vein texture previews, and bulk commercial quotation pipelines.",
    solution: "We engineered an architectural stone library with high-resolution vein inspection, structural spec sheets, and large-format sample box requests.",
    features: [
      { title: "4K Natural Stone Vein Visualizer", desc: "High-resolution texture inspection of Italian Statuario, Makrana white, and Brazilian granite." },
      { title: "Compressive Strength & Weather Specs", desc: "Engineering metrics on water absorption, frost resistance, and compressive strength." },
      { title: "Architectural Sample Box Request", desc: "1-click sample order portal delivering physical stone swatches directly to design studios." },
      { title: "Commercial Cladding Case Studies", desc: "Gallery of completed commercial high-rise facades, villa flooring, and luxury pool decks." }
    ],
    impact: "Generated over 40+ high-value architectural commercial inquiries and doubled sample distribution speed."
  },
  "sosha": {
    lead: "Sosha is a bold fusion fashion and statement jewelry label creating handcrafted oxidised silver neckpieces, bohemian rings, and fusion festive accessories.",
    challenge: "Intricate handcrafted jewelry requires micro-level craftsmanship visibility and skin-safe allergy certifications to drive impulse mobile sales.",
    solution: "We created a vibrant, bohemian jewelry portal with 3D product rotators, silver purity hallmarking badges, and festive gift packaging add-ons.",
    features: [
      { title: "Macro Craftsmanship Zoom", desc: "Crystal-clear inspection of delicate tribal filigree, ghungroo bells, and kundan stone settings." },
      { title: "Skin-Safe & Hypoallergenic Certification", desc: "Certified nickel-free and lead-free assurances for sensitive skin wearers." },
      { title: "Layering & Styling Guide", desc: "Interactive lookbook showing how to stack bohemian rings, chokers, and statement earrings." },
      { title: "Gift Box & Wax Seal Packaging", desc: "Add-on custom velvet pouches and vintage wax-sealed handwritten message cards." }
    ],
    impact: "Lifted mobile conversion rate to 3.8% and increased repeat jewelry purchases by 44%."
  },
  "jwellery": {
    lead: "Jwellery Atelier is a bespoke fine jewelry house crafting certified diamond solitaires, bridal polki necklaces, and timeless hallmarked gold investments.",
    challenge: "High-ticket diamond jewelry requires unquestioned certification transparency (GIA, IGI) and personalized bridal design consultations.",
    solution: "We crafted an opulent gold and diamond boutique with 360-degree solitaire diamond rotators, live gold price tickers, and VIP bridal appointments.",
    features: [
      { title: "360-Degree Diamond Loupe Inspection", desc: "Micro-rotation viewing cut symmetry, clarity, and light refraction of certified diamonds." },
      { title: "Live Bullion Gold Rate Ticker", desc: "Real-time 22K and 24K gold rate updates ensuring 100% transparent pricing." },
      { title: "Bespoke Bridal Design Consultation", desc: "Private video consultation booking with master jewelry designers for heirloom custom pieces." },
      { title: "Insured Secure Vault Delivery", desc: "Tamper-proof Armored Transit delivery with real-time transit insurance coverage." }
    ],
    impact: "Generated multiple multi-lakh bridal jewelry orders and expanded NRI client consultations across North America and the UK."
  },
  "sage-perfume": {
    lead: "SAGE Perfumes is an artisanal niche perfumery crafting clean, long-lasting luxury extrait de parfum from sustainably harvested French botanical extracts.",
    challenge: "Conveying the delicate botanical complexity and 12-hour scent projection of niche perfumes through digital storytelling.",
    solution: "We designed an ethereal, botanical fragrance portal with olfactory note wheels, concentration guides, and risk-free discovery mini-sets.",
    features: [
      { title: "Botanical Olfactory Note Wheel", desc: "Interactive aroma guide breaking down top notes of Bergamot, heart notes of Jasmine, and base notes of Cedarwood." },
      { title: "Extrait de Parfum Longevity Guide", desc: "Visual explanation of 30% fragrance oil concentration delivering 12+ hours of projection." },
      { title: "Risk-Free Discovery Mini-Set", desc: "5-piece sample collection with voucher redeemable toward full-bottle purchase." },
      { title: "Sustainable Sourcing Transparency", desc: "Highlighting wild-harvested French lavender, organic sugarcane alcohol, and cruelty-free ethics." }
    ],
    impact: "Achieved a 40% conversion rate from discovery sampler set buyers to full-sized bottle orders."
  }
};
