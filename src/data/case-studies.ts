export interface ProjectCaseStudy {
  lead: string;
  challenge: string;
  solution: string;
  features: { title: string; desc: string }[];
  impact: string;
  stats?: { label: string; value: string }[];
}

export const customCaseStudies: Record<string, ProjectCaseStudy> = {
  "adorno-casa": {
    "lead": "Adorno Casa crafts custom sofas and chairs. They build modern furniture for homes.",
    "challenge": "Selling custom furniture online is hard. Buyers want to test fabrics and check sizes first.",
    "solution": "We built a clean online store. It has 3D room guides and fast studio visit booking.",
    "features": [
      {
        "title": "Fabric Viewer",
        "desc": "See velvet, linen, and leather in clear room light."
      },
      {
        "title": "Room Planner",
        "desc": "Check dimensions to see how sofas fit in your space."
      },
      {
        "title": "Studio Booking",
        "desc": "Book direct visits with design stylists in one tap."
      },
      {
        "title": "Spec Sheet",
        "desc": "Download instant spec sheets for interior projects."
      }
    ],
    "impact": "Custom consultation bookings grew by 140%. Sample requests became instant.",
    "stats": [
      {
        "label": "Bookings",
        "value": "+140%"
      },
      {
        "label": "Sample Speed",
        "value": "Instant"
      }
    ]
  },
  "adorna-casa": {
    "lead": "Adorna Casa makes luxury custom sofas and handcrafted chairs for modern living rooms.",
    "challenge": "Selling fine furniture online takes trust. Shoppers want to see fabric textures and real scale.",
    "solution": "We built a sleek digital showroom. It has 3D fabric tools and room layout guides.",
    "features": [
      {
        "title": "Fabric Preview",
        "desc": "View clean leather and velvet textures in high detail."
      },
      {
        "title": "Sofa Builder",
        "desc": "Build custom sectional layouts for your living room."
      },
      {
        "title": "Trade Portal",
        "desc": "Get fast project quotes for interior designers."
      },
      {
        "title": "Studio Tour",
        "desc": "Watch video tours of the wood and fabric craft shops."
      }
    ],
    "impact": "Luxury furniture consultation bookings rose by 125%.",
    "stats": [
      {
        "label": "Consultations",
        "value": "+125%"
      },
      {
        "label": "User Trust",
        "value": "High"
      }
    ]
  },
  "her-stories": {
    "lead": "Her Stories makes clean wellness products and herbal health packs for women.",
    "challenge": "The health market is full of hype. Buyers want proof that ingredients are safe and pure.",
    "solution": "We built a simple online shop. It features wellness quizzes and doctor approval badges.",
    "features": [
      {
        "title": "Health Quiz",
        "desc": "Take a short quiz to get custom herbal vitamin packs."
      },
      {
        "title": "Pure Details",
        "desc": "Read clear facts on purity and lab test results."
      },
      {
        "title": "Easy Refills",
        "desc": "Get auto refills every month with simple pause controls."
      },
      {
        "title": "Doctor Badges",
        "desc": "View verified medical reviews on every product page."
      }
    ],
    "impact": "Refill subscriptions rose by 48%. Quiz sales grew by 3.2x.",
    "stats": [
      {
        "label": "Refills",
        "value": "+48%"
      },
      {
        "label": "Quiz Sales",
        "value": "3.2x"
      }
    ]
  },
  "bloom": {
    "lead": "Bloom Cafes is an artisan coffee roaster and brunch spot known for fresh brews and baked goods.",
    "challenge": "The cafe needed a fast website to sell coffee beans and take table bookings online.",
    "solution": "We built a warm web shop. It offers visual food menus, bean refills, and live table booking.",
    "features": [
      {
        "title": "Roast Guide",
        "desc": "Pick your coffee roast with a simple flavor wheel."
      },
      {
        "title": "Table Booking",
        "desc": "Reserve a cafe table with instant text confirmation."
      },
      {
        "title": "Fresh Beans",
        "desc": "Get fresh roasted coffee beans delivered each month."
      },
      {
        "title": "Visual Menu",
        "desc": "Browse high-res photos of brunch dishes and juices."
      }
    ],
    "impact": "Coffee bean orders grew by 65%. Weekend brunch tables filled up fast.",
    "stats": [
      {
        "label": "Bean Sales",
        "value": "+65%"
      },
      {
        "label": "Weekend Fill",
        "value": "100%"
      }
    ]
  },
  "bunt": {
    "lead": "Bunt India makes hand-block printed clothing and festive Indian wear.",
    "challenge": "Festive wear needs clear detail. Buyers want to see embroidery, prints, and fabric drape.",
    "solution": "We built a mobile-friendly shop. It has fabric zoom tools and step-by-step sizing guides.",
    "features": [
      {
        "title": "Print Zoom",
        "desc": "Zoom in close to inspect fine hand-block print work."
      },
      {
        "title": "Sizing Guide",
        "desc": "Find your exact size with simple measurement tips."
      },
      {
        "title": "Festive Looks",
        "desc": "Buy complete matching outfit sets in one simple click."
      },
      {
        "title": "Global Orders",
        "desc": "Ship orders worldwide with easy currency options."
      }
    ],
    "impact": "Size returns dropped by 40%. Global sales rose by 85%.",
    "stats": [
      {
        "label": "Returns",
        "value": "-40%"
      },
      {
        "label": "Global Sales",
        "value": "+85%"
      }
    ]
  },
  "bunt-india": {
    "lead": "Bunt India makes hand-block printed clothing and festive Indian wear.",
    "challenge": "Festive wear needs clear detail. Buyers want to see embroidery, prints, and fabric drape.",
    "solution": "We built a mobile-friendly shop. It has fabric zoom tools and step-by-step sizing guides.",
    "features": [
      {
        "title": "Print Zoom",
        "desc": "Zoom in close to inspect fine hand-block print work."
      },
      {
        "title": "Sizing Guide",
        "desc": "Find your exact size with simple measurement tips."
      },
      {
        "title": "Festive Looks",
        "desc": "Buy complete matching outfit sets in one simple click."
      },
      {
        "title": "Global Orders",
        "desc": "Ship orders worldwide with easy currency options."
      }
    ],
    "impact": "Size returns dropped by 40%. Global sales rose by 85%.",
    "stats": [
      {
        "label": "Returns",
        "value": "-40%"
      },
      {
        "label": "Global Sales",
        "value": "+85%"
      }
    ]
  },
  "salad-life": {
    "lead": "Salad Life delivers fresh salad bowls, protein meals, and cold-pressed juices to health fans.",
    "challenge": "Fresh meal delivery needs speed. Diners need fast meal selection and clear delivery time slots.",
    "solution": "We built a fast web app. It has live calorie counters and flexible weekly meal plans.",
    "features": [
      {
        "title": "Calorie Tool",
        "desc": "Track calories and protein as you add your toppings."
      },
      {
        "title": "Meal Plans",
        "desc": "Set up daily lunch and dinner boxes on a simple schedule."
      },
      {
        "title": "Fast Dispatch",
        "desc": "Get fresh salad bowls delivered in under 45 minutes."
      },
      {
        "title": "Diet Filters",
        "desc": "Filter meals for vegan, dairy-free, or keto diets."
      }
    ],
    "impact": "Weekly meal plan sign-ups rose by 110%. Average order value grew by 35%.",
    "stats": [
      {
        "label": "Sign-ups",
        "value": "+110%"
      },
      {
        "label": "Order Value",
        "value": "+35%"
      }
    ]
  },
  "credsettle": {
    "lead": "CredSettle is a debt relief platform. It helps borrowers settle loans through legal help.",
    "challenge": "People in debt need clear help. They want to check their savings and feel safe.",
    "solution": "We built an easy web app. It has debt savings tools and private case tracking.",
    "features": [
      {
        "title": "Savings Tool",
        "desc": "See your loan savings in real time with simple sliders."
      },
      {
        "title": "Private Intake",
        "desc": "Upload loan files safely through an encrypted portal."
      },
      {
        "title": "Case Tracker",
        "desc": "Track bank talks and settlement steps on your screen."
      },
      {
        "title": "Legal Advice",
        "desc": "Book phone calls with experienced legal advisers."
      }
    ],
    "impact": "Qualified client leads grew by 220%. Form sign-ups reached 68%.",
    "stats": [
      {
        "label": "Client Leads",
        "value": "+220%"
      },
      {
        "label": "Form Sign-ups",
        "value": "68%"
      }
    ]
  },
  "gods-by-dmart": {
    "lead": "Gods by D'mart sells brass idols, divine statues, and sacred gift items.",
    "challenge": "Selling sacred art online takes trust. Shoppers want to see fine details and safe box packing.",
    "solution": "We built a clean online shop. It has 360-degree views, craft stories, and gift box options.",
    "features": [
      {
        "title": "360-Degree Views",
        "desc": "Rotate brass idols to view metal finish from all angles."
      },
      {
        "title": "Artisan Stories",
        "desc": "Watch short clips of traditional idol makers at work."
      },
      {
        "title": "Safe Box Packing",
        "desc": "Ship delicate brass items in shock-proof custom boxes."
      },
      {
        "title": "Gift Options",
        "desc": "Add personal notes and holy gift wrap at checkout."
      }
    ],
    "impact": "Spiritual gift orders grew by 175%. Shipping damage fell to zero.",
    "stats": [
      {
        "label": "Gift Orders",
        "value": "+175%"
      },
      {
        "label": "Damage Rate",
        "value": "0%"
      }
    ]
  },
  "deja-brew": {
    "lead": "Deja Brew is a modern cafe brand serving artisan cold brews and fresh snacks.",
    "challenge": "The brand needed a snappy food app. It had to speed up orders and boost repeat sales.",
    "solution": "We created a fast mobile web app. It includes one-tap reorders and digital reward cards.",
    "features": [
      {
        "title": "Quick Reorder",
        "desc": "Order your favorite brew again in just one tap."
      },
      {
        "title": "Loyalty Card",
        "desc": "Earn digital stamps with every coffee you buy."
      },
      {
        "title": "Live Status",
        "desc": "Watch kitchen prep updates right on your phone."
      },
      {
        "title": "Cold Brew Club",
        "desc": "Get fresh bottled cold brew shipped to your desk."
      }
    ],
    "impact": "Repeat coffee orders grew by 85%. Pickup wait times dropped in half.",
    "stats": [
      {
        "label": "Repeat Orders",
        "value": "+85%"
      },
      {
        "label": "Wait Time",
        "value": "-50%"
      }
    ]
  },
  "the-fat-cookie": {
    "lead": "The Fat Cookie bakes stuffed cookies, fresh brownies, and sweet gift boxes.",
    "challenge": "Daily batch drops caused traffic spikes. The site had to stay fast during big sales.",
    "solution": "We built a high-speed shop. It has live drop timers and custom cookie box builders.",
    "features": [
      {
        "title": "Box Builder",
        "desc": "Mix and match favorite cookie flavors into 6-packs."
      },
      {
        "title": "Live Drop Timer",
        "desc": "See when fresh warm cookie batches go live."
      },
      {
        "title": "Same-Day Delivery",
        "desc": "Enter your zip code for prompt local box delivery."
      },
      {
        "title": "Diet Labels",
        "desc": "Spot eggless and nut-free treats with clear badges."
      }
    ],
    "impact": "Daily cookie batches sold out in 20 minutes. Site speed stayed fast.",
    "stats": [
      {
        "label": "Sell-out Time",
        "value": "20 min"
      },
      {
        "label": "Site Speed",
        "value": "<1s"
      }
    ]
  },
  "fat-cookie-chef": {
    "lead": "The Fat Cookie bakes stuffed cookies, fresh brownies, and sweet gift boxes.",
    "challenge": "Daily batch drops caused traffic spikes. The site had to stay fast during big sales.",
    "solution": "We built a high-speed shop. It has live drop timers and custom cookie box builders.",
    "features": [
      {
        "title": "Box Builder",
        "desc": "Mix and match favorite cookie flavors into 6-packs."
      },
      {
        "title": "Live Drop Timer",
        "desc": "See when fresh warm cookie batches go live."
      },
      {
        "title": "Same-Day Delivery",
        "desc": "Enter your zip code for prompt local box delivery."
      },
      {
        "title": "Diet Labels",
        "desc": "Spot eggless and nut-free treats with clear badges."
      }
    ],
    "impact": "Daily cookie batches sold out in 20 minutes. Site speed stayed fast.",
    "stats": [
      {
        "label": "Sell-out Time",
        "value": "20 min"
      },
      {
        "label": "Site Speed",
        "value": "<1s"
      }
    ]
  },
  "foire": {
    "lead": "Foire is a jewelry brand making waterproof gold and silver rings and chains.",
    "challenge": "Shoppers worry that gold finish fades. They want clear proof of water and sweat wear.",
    "solution": "We built an editorial web shop. It features water test clips and simple ring size guides.",
    "features": [
      {
        "title": "Waterproof Test",
        "desc": "Watch videos showing pieces worn in water and sweat."
      },
      {
        "title": "Stacking Tool",
        "desc": "Mix and match chain layers and ear cuffs on screen."
      },
      {
        "title": "Ring Size Guide",
        "desc": "Find your exact ring size with a fast digital tool."
      },
      {
        "title": "Fast Checkout",
        "desc": "Buy your jewelry in seconds with easy mobile pay."
      }
    ],
    "impact": "Jewelry stack sales rose by 92%. Cart drop-offs fell by 38%.",
    "stats": [
      {
        "label": "Stack Sales",
        "value": "+92%"
      },
      {
        "label": "Cart Drop-off",
        "value": "-38%"
      }
    ]
  },
  "kyma": {
    "lead": "Kyma is a beachside lounge known for fresh seafood, drinks, and sunset views.",
    "challenge": "The lounge needed to manage busy sunset bookings and show off its coastal dining vibe.",
    "solution": "We built a sleek website. It offers visual sunset menus and live table booking.",
    "features": [
      {
        "title": "Deck Booking",
        "desc": "Pick your sunset deck seat on a live floor map."
      },
      {
        "title": "Drink Menus",
        "desc": "Browse high-res photos of cold drinks and cocktails."
      },
      {
        "title": "Event Passes",
        "desc": "Buy tickets for weekend DJ sets with instant QR codes."
      },
      {
        "title": "Direct Chat",
        "desc": "Message the team on WhatsApp for private party bookings."
      }
    ],
    "impact": "Prime deck tables booked out three weeks in advance.",
    "stats": [
      {
        "label": "Deck Fill",
        "value": "100%"
      },
      {
        "label": "Advance Booking",
        "value": "3 Weeks"
      }
    ]
  },
  "honk": {
    "lead": "Honk is an Asian street food spot serving dim sums, noodles, and wok bowls.",
    "challenge": "The kitchen needed a quick food app. Diners wanted easy menu choices and fast delivery.",
    "solution": "We created a punchy ordering app. It has spice level pickers and live kitchen tracking.",
    "features": [
      {
        "title": "Wok Customizer",
        "desc": "Pick your noodles, veggies, and meat in easy steps."
      },
      {
        "title": "Spice Meter",
        "desc": "Choose mild, medium, or hot chili heat for your bowl."
      },
      {
        "title": "Lunch Combos",
        "desc": "Order quick office lunch meals in one simple tap."
      },
      {
        "title": "Live Rider Map",
        "desc": "Track your food order from hot wok to your front door."
      }
    ],
    "impact": "Online meal delivery orders jumped by 64% in the first month.",
    "stats": [
      {
        "label": "Delivery Volume",
        "value": "+64%"
      },
      {
        "label": "Launch Time",
        "value": "30 Days"
      }
    ]
  },
  "house-of-nihal-khera": {
    "lead": "House of Nihal Khera produces pure cold-pressed oils, farm spices, and grains.",
    "challenge": "Buyers want clean food. They need proof of farm purity and single-origin seeds.",
    "solution": "We built a farm web shop. It features harvest reports, video stories, and monthly oil refills.",
    "features": [
      {
        "title": "Seed Reports",
        "desc": "Check farm harvest dates and lab purity test scores."
      },
      {
        "title": "Pantry Box",
        "desc": "Set up monthly refills for mustard and sesame cooking oils."
      },
      {
        "title": "Farm Videos",
        "desc": "Watch traditional wood press methods in action."
      },
      {
        "title": "Glass Bottles",
        "desc": "Ship pure oils safely in eco-friendly glass bottles."
      }
    ],
    "impact": "Monthly pantry orders grew by 130%. Repeat sales reached 72%.",
    "stats": [
      {
        "label": "Pantry Orders",
        "value": "+130%"
      },
      {
        "label": "Repeat Buyers",
        "value": "72%"
      }
    ]
  },
  "anyadha": {
    "lead": "Anyadha makes waterproof silver rings, bracelets, and jewelry.",
    "challenge": "New shoppers want proof that silver jewelry stays bright. They want pieces that do not fade.",
    "solution": "We built a clean jewelry shop. It has video reviews and chain guides.",
    "features": [
      {
        "title": "Shine Promise",
        "desc": "Read our warranty on color and metal shine."
      },
      {
        "title": "Layering Sets",
        "desc": "Shop matching ring and bracelet sets in one tap."
      },
      {
        "title": "Buyer Videos",
        "desc": "Watch real customer unboxings and styling clips."
      },
      {
        "title": "Fast Delivery",
        "desc": "Get quick mobile checkout with live order tracking."
      }
    ],
    "impact": "New buyer sales rose by 88%. Returns stayed under 2%.",
    "stats": [
      {
        "label": "New Buyers",
        "value": "+88%"
      },
      {
        "label": "Return Rate",
        "value": "<2%"
      }
    ]
  },
  "rewind-stories": {
    "lead": "Rewind Stories is a photo studio making wedding albums, print books, and portraits.",
    "challenge": "Couples found it slow and hard to select high-res photos and approve book designs.",
    "solution": "We built a smooth design app. It offers drag-and-drop album tools and live photo proofs.",
    "features": [
      {
        "title": "Album Builder",
        "desc": "Drag and drop wedding photos into clean book layouts."
      },
      {
        "title": "Cover Styles",
        "desc": "Pick silk, linen, or rich leather book covers."
      },
      {
        "title": "Proof Approvals",
        "desc": "Leave notes on photo pages with a single click."
      },
      {
        "title": "Gift Registry",
        "desc": "Let wedding guests gift cash for photo albums."
      }
    ],
    "impact": "Album design approvals dropped from three weeks to four days.",
    "stats": [
      {
        "label": "Approval Time",
        "value": "4 Days"
      },
      {
        "label": "Speed Gain",
        "value": "5x"
      }
    ]
  },
  "kamal": {
    "lead": "Kamal Motors is a dealership selling trucks, vans, and commercial fleet vehicles.",
    "challenge": "Fleet buyers need to compare truck specs and get quick loan estimates online.",
    "solution": "We built a clean vehicle portal. It offers spec sheets, loan tools, and bulk quote forms.",
    "features": [
      {
        "title": "Truck Specs",
        "desc": "Compare horsepower, fuel mileage, and payload capacity."
      },
      {
        "title": "Loan Calculator",
        "desc": "Check monthly loan costs with custom deposit sliders."
      },
      {
        "title": "Fleet Quotes",
        "desc": "Send bulk vehicle requests directly to sales agents."
      },
      {
        "title": "Service Map",
        "desc": "Find nearby repair centers and book maintenance visits."
      }
    ],
    "impact": "Fleet inquiry leads rose by 150%. Sales qualification time was cut in half.",
    "stats": [
      {
        "label": "Fleet Inquiries",
        "value": "+150%"
      },
      {
        "label": "Response Speed",
        "value": "2x"
      }
    ]
  },
  "kamal-motors": {
    "lead": "Kamal Motors is a dealership selling trucks, vans, and commercial fleet vehicles.",
    "challenge": "Fleet buyers need to compare truck specs and get quick loan estimates online.",
    "solution": "We built a clean vehicle portal. It offers spec sheets, loan tools, and bulk quote forms.",
    "features": [
      {
        "title": "Truck Specs",
        "desc": "Compare horsepower, fuel mileage, and payload capacity."
      },
      {
        "title": "Loan Calculator",
        "desc": "Check monthly loan costs with custom deposit sliders."
      },
      {
        "title": "Fleet Quotes",
        "desc": "Send bulk vehicle requests directly to sales agents."
      },
      {
        "title": "Service Map",
        "desc": "Find nearby repair centers and book maintenance visits."
      }
    ],
    "impact": "Fleet inquiry leads rose by 150%. Sales qualification time was cut in half.",
    "stats": [
      {
        "label": "Fleet Inquiries",
        "value": "+150%"
      },
      {
        "label": "Response Speed",
        "value": "2x"
      }
    ]
  },
  "vensa": {
    "lead": "Vensa makes clean skin serums, face creams, and daily sun protection formulas.",
    "challenge": "Shoppers need help picking the right face serum for their skin goals.",
    "solution": "We built a clean skincare shop. It offers quick skin routine quizzes and lab test photos.",
    "features": [
      {
        "title": "Skin Quiz",
        "desc": "Take a 3-minute quiz to find the best face serum for you."
      },
      {
        "title": "Active Ingredients",
        "desc": "See clear levels of active oils and vitamins."
      },
      {
        "title": "Trial Photos",
        "desc": "View real 4-week clinical trial skin comparisons."
      },
      {
        "title": "Monthly Refills",
        "desc": "Get your skincare refills delivered every 30 days."
      }
    ],
    "impact": "Quiz sales rose by 115%. Serum repeat orders grew by 52%.",
    "stats": [
      {
        "label": "Quiz Sales",
        "value": "+115%"
      },
      {
        "label": "Repeat Orders",
        "value": "+52%"
      }
    ]
  },
  "vensa-skincare": {
    "lead": "Vensa makes clean skin serums, face creams, and daily sun protection formulas.",
    "challenge": "Shoppers need help picking the right face serum for their skin goals.",
    "solution": "We built a clean skincare shop. It offers quick skin routine quizzes and lab test photos.",
    "features": [
      {
        "title": "Skin Quiz",
        "desc": "Take a 3-minute quiz to find the best face serum for you."
      },
      {
        "title": "Active Ingredients",
        "desc": "See clear levels of active oils and vitamins."
      },
      {
        "title": "Trial Photos",
        "desc": "View real 4-week clinical trial skin comparisons."
      },
      {
        "title": "Monthly Refills",
        "desc": "Get your skincare refills delivered every 30 days."
      }
    ],
    "impact": "Quiz sales rose by 115%. Serum repeat orders grew by 52%.",
    "stats": [
      {
        "label": "Quiz Sales",
        "value": "+115%"
      },
      {
        "label": "Repeat Orders",
        "value": "+52%"
      }
    ]
  },
  "kitchun": {
    "lead": "Kitchun delivers fresh dinner meal kits, chef sauces, and spice packs to homes.",
    "challenge": "Busy families want easy dinner ideas. They need fast meal ordering and clear cooking steps.",
    "solution": "We created a simple meal kit shop. It offers weekly meal pickers and digital cook timers.",
    "features": [
      {
        "title": "Weekly Menu",
        "desc": "Choose 3 to 5 easy dinners from a fresh weekly menu."
      },
      {
        "title": "Cooking Guide",
        "desc": "Follow step-by-step recipes with handy built-in timers."
      },
      {
        "title": "Portion Picker",
        "desc": "Pick exact portion sizes for couples or family meals."
      },
      {
        "title": "Chilled Box",
        "desc": "Get fresh ingredients shipped in cold insulated boxes."
      }
    ],
    "impact": "Meal kit sign-ups jumped by 140%. Customer recipe reviews averaged 4.9 stars.",
    "stats": [
      {
        "label": "Sign-ups",
        "value": "+140%"
      },
      {
        "label": "Rating",
        "value": "4.9/5"
      }
    ]
  },
  "kitchun-studio": {
    "lead": "Kitchun delivers fresh dinner meal kits, chef sauces, and spice packs to homes.",
    "challenge": "Busy families want easy dinner ideas. They need fast meal ordering and clear cooking steps.",
    "solution": "We created a simple meal kit shop. It offers weekly meal pickers and digital cook timers.",
    "features": [
      {
        "title": "Weekly Menu",
        "desc": "Choose 3 to 5 easy dinners from a fresh weekly menu."
      },
      {
        "title": "Cooking Guide",
        "desc": "Follow step-by-step recipes with handy built-in timers."
      },
      {
        "title": "Portion Picker",
        "desc": "Pick exact portion sizes for couples or family meals."
      },
      {
        "title": "Chilled Box",
        "desc": "Get fresh ingredients shipped in cold insulated boxes."
      }
    ],
    "impact": "Meal kit sign-ups jumped by 140%. Customer recipe reviews averaged 4.9 stars.",
    "stats": [
      {
        "label": "Sign-ups",
        "value": "+140%"
      },
      {
        "label": "Rating",
        "value": "4.9/5"
      }
    ]
  },
  "laysyy": {
    "lead": "Laysyy makes cozy lounge wear, weighted blankets, and soft sleep essentials.",
    "challenge": "Shoppers want to feel fabric softness and check blanket warmth before buying.",
    "solution": "We built a cozy web store. It has fabric touch guides and quick sleep comfort quizzes.",
    "features": [
      {
        "title": "Sleep Quiz",
        "desc": "Answer simple questions to pick your ideal blanket weight."
      },
      {
        "title": "Fabric Guide",
        "desc": "Learn how organic bamboo fabric stays cool all night."
      },
      {
        "title": "100-Night Trial",
        "desc": "Try products at home with a risk-free trial guarantee."
      },
      {
        "title": "Sleep Sets",
        "desc": "Bundle pajamas and blankets together for extra savings."
      }
    ],
    "impact": "Lounge bundle sales rose by 78%. Product return rates stayed under 3%.",
    "stats": [
      {
        "label": "Bundle Sales",
        "value": "+78%"
      },
      {
        "label": "Return Rate",
        "value": "<3%"
      }
    ]
  },
  "limitless": {
    "lead": "Limitless Clothing makes athletic gym wear, running shorts, and streetwear.",
    "challenge": "Shoppers need to see fabric stretch and sweat control before they order gym wear.",
    "solution": "We built a fast mobile shop. It features workout video clips and simple fit finders.",
    "features": [
      {
        "title": "Workout Clips",
        "desc": "Watch short clips showing fabric stretch in motion."
      },
      {
        "title": "Fit Finder",
        "desc": "Find your size based on your height and weight."
      },
      {
        "title": "Drop Alerts",
        "desc": "Get instant text alerts when new gym sets release."
      },
      {
        "title": "1-Tap Bag",
        "desc": "Check out on your mobile phone in under 30 seconds."
      }
    ],
    "impact": "Mobile apparel sales grew by 95%. New collection drops sold out in hours.",
    "stats": [
      {
        "label": "Mobile Sales",
        "value": "+95%"
      },
      {
        "label": "Drop Time",
        "value": "Hours"
      }
    ]
  },
  "limitless-clothing": {
    "lead": "Limitless Clothing makes athletic gym wear, running shorts, and streetwear.",
    "challenge": "Shoppers need to see fabric stretch and sweat control before they order gym wear.",
    "solution": "We built a fast mobile shop. It features workout video clips and simple fit finders.",
    "features": [
      {
        "title": "Workout Clips",
        "desc": "Watch short clips showing fabric stretch in motion."
      },
      {
        "title": "Fit Finder",
        "desc": "Find your size based on your height and weight."
      },
      {
        "title": "Drop Alerts",
        "desc": "Get instant text alerts when new gym sets release."
      },
      {
        "title": "1-Tap Bag",
        "desc": "Check out on your mobile phone in under 30 seconds."
      }
    ],
    "impact": "Mobile apparel sales grew by 95%. New collection drops sold out in hours.",
    "stats": [
      {
        "label": "Mobile Sales",
        "value": "+95%"
      },
      {
        "label": "Drop Time",
        "value": "Hours"
      }
    ]
  },
  "mama-jama": {
    "lead": "Mama Jama makes fun graphic tees, hoodies, and streetwear clothes for youth.",
    "challenge": "Young fashion shoppers want fast mobile browsing and easy social media clips.",
    "solution": "We built a bright fashion shop. It has video feeds and fast mobile checkout.",
    "features": [
      {
        "title": "Video Feed",
        "desc": "Watch creator video clips right on product pages."
      },
      {
        "title": "Street Fit",
        "desc": "See model photos for loose, boxy streetwear cuts."
      },
      {
        "title": "Flash Timers",
        "desc": "Spot deals with live countdown timers on trending tees."
      },
      {
        "title": "Quick Pay",
        "desc": "Pay with one tap using modern mobile payment apps."
      }
    ],
    "impact": "Mobile clothing sales doubled. Session times grew by 45%.",
    "stats": [
      {
        "label": "Mobile Sales",
        "value": "+100%"
      },
      {
        "label": "Session Time",
        "value": "+45%"
      }
    ]
  },
  "mj-and-co": {
    "lead": "MJ & Co provides business tax, accounting, and audit help for companies.",
    "challenge": "Business clients need trusted advice. They want a fast way to book meetings online.",
    "solution": "We built a clean finance site. It has tax tools and safe file upload forms.",
    "features": [
      {
        "title": "Tax Tool",
        "desc": "Estimate corporate tax obligations in a few simple steps."
      },
      {
        "title": "Safe Uploads",
        "desc": "Send financial records securely through encrypted portals."
      },
      {
        "title": "Direct Booking",
        "desc": "Schedule meetings with certified company accountants."
      },
      {
        "title": "Tax Hub",
        "desc": "Read plain English guides on tax rules and filing dates."
      }
    ],
    "impact": "Client meeting inquiries grew by 165%.",
    "stats": [
      {
        "label": "Inquiries",
        "value": "+165%"
      },
      {
        "label": "Client Trust",
        "value": "High"
      }
    ]
  },
  "nxtwax": {
    "lead": "NxtWax makes car wax, ceramic spray, and auto wash care kits.",
    "challenge": "Car owners want to see water repelling power and shine before they buy wax online.",
    "solution": "We built a crisp car care shop. It has video test clips and step-by-step wash guides.",
    "features": [
      {
        "title": "Water Test Clips",
        "desc": "Watch videos showing rain water slide right off car paint."
      },
      {
        "title": "Care Kit Builder",
        "desc": "Bundle car wash soap, wax spray, and cloth pads."
      },
      {
        "title": "Detailing Tips",
        "desc": "Learn easy car wash steps from detailing pros."
      },
      {
        "title": "Bulk Orders",
        "desc": "Order wholesale car care kits for auto repair shops."
      }
    ],
    "impact": "Car care bundle sales rose by 110%. Wholesale orders grew by 75%.",
    "stats": [
      {
        "label": "Bundle Sales",
        "value": "+110%"
      },
      {
        "label": "Wholesale",
        "value": "+75%"
      }
    ]
  },
  "oudqua": {
    "lead": "Oudqua crafts luxury oud perfumes, pure attar oils, and scented gift sets.",
    "challenge": "Selling perfume online is tricky. Shoppers need a way to explore scent notes from home.",
    "solution": "We created a luxury fragrance shop. It offers scent note guides and sample box sets.",
    "features": [
      {
        "title": "Scent Pyramid",
        "desc": "Explore top, middle, and base notes for each fragrance."
      },
      {
        "title": "Sample Box",
        "desc": "Try 5 perfume samples at home with a store discount voucher."
      },
      {
        "title": "Scent Quiz",
        "desc": "Find your daily signature scent in three simple questions."
      },
      {
        "title": "Engraving",
        "desc": "Add custom bottle names and velvet gift boxes at checkout."
      }
    ],
    "impact": "Sample box shoppers converted into full bottle sales at 42%.",
    "stats": [
      {
        "label": "Conversion",
        "value": "42%"
      },
      {
        "label": "Repeat Sales",
        "value": "High"
      }
    ]
  },
  "rproyal": {
    "lead": "RP Royal makes food-safe plastic boxes, trays, and storage jars for brands.",
    "challenge": "Business buyers need quick container specs and fast bulk quote pricing.",
    "solution": "We built a clear product list. It has spec sheet downloads and sample order tools.",
    "features": [
      {
        "title": "Spec Sheets",
        "desc": "Download PDF sheets for box sizes, volume, and seal types."
      },
      {
        "title": "Bulk Pricing",
        "desc": "Get tiered wholesale quotes based on order quantity."
      },
      {
        "title": "Sample Box",
        "desc": "Request sample packs sent directly to your factory."
      },
      {
        "title": "Food Safety",
        "desc": "View certified food safety and BPA-free badges."
      }
    ],
    "impact": "Wholesale sample requests rose by 180%. Inquiry response times halved.",
    "stats": [
      {
        "label": "Samples",
        "value": "+180%"
      },
      {
        "label": "Speed Gain",
        "value": "2x"
      }
    ]
  },
  "purifi": {
    "lead": "Purifi makes home air purifiers, HEPA air filters, and air quality sensors.",
    "challenge": "Shoppers need to know how air purifiers work and which model fits their room size.",
    "solution": "We designed a clear product site. It has room size tools and filter refill subscriptions.",
    "features": [
      {
        "title": "Room Sizer",
        "desc": "Match room square feet to the ideal air purifier model."
      },
      {
        "title": "Live Sensor Demo",
        "desc": "Watch live demos showing dust removal in under 10 minutes."
      },
      {
        "title": "Filter Refills",
        "desc": "Get fresh HEPA filters delivered to your door every 6 months."
      },
      {
        "title": "Sleep Mode Sound",
        "desc": "Listen to fan sound levels in quiet sleep mode."
      }
    ],
    "impact": "Purifier sales grew by 85%. Filter subscription sign-ups reached 65%.",
    "stats": [
      {
        "label": "Sales Growth",
        "value": "+85%"
      },
      {
        "label": "Filter Refills",
        "value": "65%"
      }
    ]
  },
  "radindia": {
    "lead": "Rad India makes industrial radiators, cooling units, and engine heat parts.",
    "challenge": "Engineering teams need clear cooling specs to order custom industrial parts.",
    "solution": "We built an industrial web portal. It offers part drawings, specs, and quick quote forms.",
    "features": [
      {
        "title": "Cooling Tool",
        "desc": "Calculate needed cooling capacity for heavy diesel engines."
      },
      {
        "title": "CAD Drawings",
        "desc": "Download part drawings for industrial machine setups."
      },
      {
        "title": "Quote Forms",
        "desc": "Request custom fabrication prices in just two minutes."
      },
      {
        "title": "Quality Badges",
        "desc": "View ISO quality control and safety certificates."
      }
    ],
    "impact": "Industrial contract inquiries rose by 140% with new enterprise clients.",
    "stats": [
      {
        "label": "Inquiries",
        "value": "+140%"
      },
      {
        "label": "Clients",
        "value": "Enterprise"
      }
    ]
  },
  "rad-india": {
    "lead": "Rad India makes factory radiators, cooling units, and truck heat parts.",
    "challenge": "Plant teams need clear cooling specs to order custom steel parts.",
    "solution": "We built a clean part portal. It offers part drawings, specs, and quick quote forms.",
    "features": [
      {
        "title": "Cooling Tool",
        "desc": "Find cooling needs for heavy truck engines."
      },
      {
        "title": "CAD Drawings",
        "desc": "Get part drawings for factory setups."
      },
      {
        "title": "Quote Forms",
        "desc": "Ask for custom build prices in two minutes."
      },
      {
        "title": "Quality Badges",
        "desc": "View ISO quality and safety badges."
      }
    ],
    "impact": "New quote requests rose by 140% with top business clients.",
    "stats": [
      {
        "label": "Inquiries",
        "value": "+140%"
      },
      {
        "label": "Clients",
        "value": "Enterprise"
      }
    ]
  },
  "rockersjr": {
    "lead": "Rockers Jr makes organic cotton kids clothing and school uniforms.",
    "challenge": "The brand needed to connect with retail shop owners and handle wholesale orders.",
    "solution": "We built a B2B wholesale store. It offers fashion lookbooks and bulk order forms.",
    "features": [
      {
        "title": "Wholesale Books",
        "desc": "Browse seasonal kids clothing and order full size packs."
      },
      {
        "title": "Cotton Badges",
        "desc": "View certified organic cotton badges for child safety."
      },
      {
        "title": "Custom Labels",
        "desc": "Order custom brand tags for retail boutique collections."
      },
      {
        "title": "Volume Savings",
        "desc": "See tiered unit prices for bulk clothing orders."
      }
    ],
    "impact": "Retail boutique sign-ups grew by 120%, expanding to 40 new stores.",
    "stats": [
      {
        "label": "Boutiques",
        "value": "+120%"
      },
      {
        "label": "Store Reach",
        "value": "40+"
      }
    ]
  },
  "sexsea": {
    "lead": "SexSea makes swimwear, beach dresses, and pool accessories.",
    "challenge": "Selling swimwear online takes great visual style and easy sizing.",
    "solution": "We built a sleek web shop. It has video reels and mix-and-match bikini tools.",
    "features": [
      {
        "title": "Video Looks",
        "desc": "Watch full-screen video reels of swimwear on the beach."
      },
      {
        "title": "Fit Guide",
        "desc": "Check bust and hip measurements for a perfect fit."
      },
      {
        "title": "Bikini Builder",
        "desc": "Pair different bikini tops and bottoms on screen."
      },
      {
        "title": "Travel Pouch",
        "desc": "Get a free waterproof pouch with every swimsuit order."
      }
    ],
    "impact": "Swimwear bundle orders rose by 94%. Total sales doubled.",
    "stats": [
      {
        "label": "Bundle Orders",
        "value": "+94%"
      },
      {
        "label": "Revenue",
        "value": "2x"
      }
    ]
  },
  "sixtynine": {
    "lead": "SixtyNine makes graphic hoodies, cargo pants, and skate streetwear.",
    "challenge": "The shop had to match bold streetwear energy while loading in under one second.",
    "solution": "We built a fast dark-theme store. It has live drop timers and quick mobile checkout.",
    "features": [
      {
        "title": "Dark UI Theme",
        "desc": "Browse bold streetwear on an edgy dark visual layout."
      },
      {
        "title": "Drop Timers",
        "desc": "See countdown timers for limited hoodie releases."
      },
      {
        "title": "Social Looks",
        "desc": "Shop clothes straight from real customer street photos."
      },
      {
        "title": "Fast Checkout",
        "desc": "Check out in seconds using Apple Pay or mobile UPI."
      }
    ],
    "impact": "Drop releases sold out in 15 minutes. Mobile checkout took under 30 seconds.",
    "stats": [
      {
        "label": "Drop Sell-out",
        "value": "15 min"
      },
      {
        "label": "Checkout",
        "value": "<30s"
      }
    ]
  },
  "ama": {
    "lead": "AMA Legal helps firms with business law, debt talks, and court cases.",
    "challenge": "Clients need strong trust and a safe way to ask for legal help.",
    "solution": "We built a clean law site. It has team bios, law guides, and intake forms.",
    "features": [
      {
        "title": "Private Forms",
        "desc": "Send your facts through a safe web form."
      },
      {
        "title": "Plain Guides",
        "desc": "Read clear guides on debt rules and contracts."
      },
      {
        "title": "Lawyer Bios",
        "desc": "See lawyer profiles, focus areas, and past wins."
      },
      {
        "title": "Easy Booking",
        "desc": "Book legal calls or office visits in one tap."
      }
    ],
    "impact": "New client leads rose by 190%. Trust scores reached 4.9 stars.",
    "stats": [
      {
        "label": "Client Leads",
        "value": "+190%"
      },
      {
        "label": "Trust Rating",
        "value": "4.9/5"
      }
    ]
  },
  "ama-legal": {
    "lead": "AMA Legal helps firms with business law, debt talks, and court cases.",
    "challenge": "Clients need strong trust and a safe way to ask for legal help.",
    "solution": "We built a clean law site. It has team bios, law guides, and intake forms.",
    "features": [
      {
        "title": "Private Forms",
        "desc": "Send your facts through a safe web form."
      },
      {
        "title": "Plain Guides",
        "desc": "Read clear guides on debt rules and contracts."
      },
      {
        "title": "Lawyer Bios",
        "desc": "See lawyer profiles, focus areas, and past wins."
      },
      {
        "title": "Easy Booking",
        "desc": "Book legal calls or office visits in one tap."
      }
    ],
    "impact": "New client leads rose by 190%. Trust scores reached 4.9 stars.",
    "stats": [
      {
        "label": "Client Leads",
        "value": "+190%"
      },
      {
        "label": "Trust Rating",
        "value": "4.9/5"
      }
    ]
  },
  "settle-loans": {
    "lead": "Settle Loans is a debt settlement portal helping people resolve unpaid loans with banks.",
    "challenge": "Borrowers need clear steps. They want to know how debt relief works without worry.",
    "solution": "We built an easy debt relief site. It has loan savings tools and clear step guides.",
    "features": [
      {
        "title": "Savings Tool",
        "desc": "Estimate loan savings based on your credit card balance."
      },
      {
        "title": "Step Roadmap",
        "desc": "Read a 4-step guide explaining bank relief and legal rights."
      },
      {
        "title": "Free Review",
        "desc": "Send a quick private request for a free case assessment."
      },
      {
        "title": "Client Stories",
        "desc": "Read verified settlement letters and client testimonials."
      }
    ],
    "impact": "Assessment requests rose by 210% with over 5,000 cases reviewed.",
    "stats": [
      {
        "label": "Requests",
        "value": "+210%"
      },
      {
        "label": "Cases Done",
        "value": "5,000+"
      }
    ]
  },
  "tototerra": {
    "lead": "TotoTerra makes plant-based skincare, pure body oils, and natural soap bars.",
    "challenge": "Eco-conscious shoppers want clear facts on green ingredients and zero-waste boxes.",
    "solution": "We built an organic web shop. It offers plant ingredient facts and easy refill packs.",
    "features": [
      {
        "title": "Plant Cards",
        "desc": "Read facts on pure cold-pressed herbal oils and extracts."
      },
      {
        "title": "Eco Refills",
        "desc": "Get plastic-free refill pouches sent every two months."
      },
      {
        "title": "Green Badges",
        "desc": "See verified recyclable glass and compostable box badges."
      },
      {
        "title": "Bath Gift Sets",
        "desc": "Mix and match organic soaps and oils in a gift box."
      }
    ],
    "impact": "Refill subscriptions reached 68%. Gift set orders rose by 85%.",
    "stats": [
      {
        "label": "Refills",
        "value": "68%"
      },
      {
        "label": "Gift Sets",
        "value": "+85%"
      }
    ]
  },
  "trivora": {
    "lead": "Trivora Jewels crafts gold and diamond jewelry for daily wear.",
    "challenge": "Shoppers want to verify gold purity. They also want to see diamond shine clearly.",
    "solution": "We built a clean jewelry shop. It has 360-degree views and purity test links.",
    "features": [
      {
        "title": "360 Diamond Video",
        "desc": "Watch high-definition videos showing diamond sparkle."
      },
      {
        "title": "Purity Badges",
        "desc": "Check certified hallmark and diamond lab test links."
      },
      {
        "title": "Virtual Hand Try-On",
        "desc": "Preview ring and bracelet sizes on your own hand."
      },
      {
        "title": "Insured Transit",
        "desc": "Ship orders in secure boxes with full transit insurance."
      }
    ],
    "impact": "Fine jewelry orders rose by 125%. Client happiness reached 99%.",
    "stats": [
      {
        "label": "Jewelry Orders",
        "value": "+125%"
      },
      {
        "label": "Satisfaction",
        "value": "99%"
      }
    ]
  },
  "trivora-jewels": {
    "lead": "Trivora Jewels crafts gold and diamond jewelry for daily wear.",
    "challenge": "Shoppers want to verify gold purity. They also want to see diamond shine clearly.",
    "solution": "We built a clean jewelry shop. It has 360-degree views and purity test links.",
    "features": [
      {
        "title": "360 Diamond Video",
        "desc": "Watch high-definition videos showing diamond sparkle."
      },
      {
        "title": "Purity Badges",
        "desc": "Check certified hallmark and diamond lab test links."
      },
      {
        "title": "Virtual Hand Try-On",
        "desc": "Preview ring and bracelet sizes on your own hand."
      },
      {
        "title": "Insured Transit",
        "desc": "Ship orders in secure boxes with full transit insurance."
      }
    ],
    "impact": "Fine jewelry orders rose by 125%. Client happiness reached 99%.",
    "stats": [
      {
        "label": "Jewelry Orders",
        "value": "+125%"
      },
      {
        "label": "Satisfaction",
        "value": "99%"
      }
    ]
  },
  "xcel": {
    "lead": "Xcel Logistics provides cargo shipping, customs clearances, and air freight services.",
    "challenge": "Cargo shippers need fast freight rates and real-time container tracking online.",
    "solution": "We built a freight web portal. It offers instant cost tools and live shipment tracking.",
    "features": [
      {
        "title": "Freight Tool",
        "desc": "Get fast price estimates for air, ocean, and road cargo."
      },
      {
        "title": "Live Tracking",
        "desc": "Track container ships moving across global sea ports."
      },
      {
        "title": "Customs Hub",
        "desc": "Download shipping papers and customs clearance forms."
      },
      {
        "title": "Corporate Desk",
        "desc": "Manage high-volume cargo shipments on one screen."
      }
    ],
    "impact": "Freight quote inquiries rose by 170%. Support calls dropped by 45%.",
    "stats": [
      {
        "label": "Quotes",
        "value": "+170%"
      },
      {
        "label": "Support Calls",
        "value": "-45%"
      }
    ]
  },
  "pp-green": {
    "lead": "PP Green makes eco-friendly compostable bags, paper boxes, and green food pouches.",
    "challenge": "Retail shops need green bags that meet local plastic ban laws and test standards.",
    "solution": "We built a green packaging shop. It has compliance guides and sample box orders.",
    "features": [
      {
        "title": "Eco Rule Guide",
        "desc": "Read plain facts on state plastic bans and green rules."
      },
      {
        "title": "Custom Bags",
        "desc": "Upload your store logo to preview printed paper bags."
      },
      {
        "title": "Test Badges",
        "desc": "Download certified compostable and eco test reports."
      },
      {
        "title": "Sample Packs",
        "desc": "Order sample packaging boxes for your retail store."
      }
    ],
    "impact": "Retail packaging accounts grew by 135% in six months.",
    "stats": [
      {
        "label": "Accounts",
        "value": "+135%"
      },
      {
        "label": "Timeframe",
        "value": "6 Months"
      }
    ]
  },
  "kachraco": {
    "lead": "KachraCo is a scrap recycling service managing scrap pickup for homes and offices.",
    "challenge": "People need a simple way to check scrap rates and book waste pickups online.",
    "solution": "We built a clean booking app. It features live scrap prices and digital cash receipts.",
    "features": [
      {
        "title": "Live Rates",
        "desc": "Check daily market prices for paper, metal, and e-waste."
      },
      {
        "title": "1-Tap Booking",
        "desc": "Schedule scrap pickup by sharing your address and photos."
      },
      {
        "title": "Digital Scale",
        "desc": "Verify weight on digital scales and get instant payment."
      },
      {
        "title": "Office Plans",
        "desc": "Book recurring scrap collection for commercial offices."
      }
    ],
    "impact": "Recycling pickups rose by 240%, keeping 150 tons of scrap out of dumps.",
    "stats": [
      {
        "label": "Pickups",
        "value": "+240%"
      },
      {
        "label": "Scrap Saved",
        "value": "150+ Tons"
      }
    ]
  },
  "pehnavri": {
    "lead": "Pehnavri makes handcrafted kurtis and festive suits.",
    "challenge": "Festive shoppers want to inspect hand embroidery. They also need simple suit sizing.",
    "solution": "We built a festive clothing store. It has 4K fabric zoom and dupatta tips.",
    "features": [
      {
        "title": "Fabric Zoom",
        "desc": "View hand embroidery and thread work in crisp 4K detail."
      },
      {
        "title": "Complete Looks",
        "desc": "Shop matching pants, dupattas, and jewelry in one set."
      },
      {
        "title": "Size Chart",
        "desc": "Check chest and waist measurements with easy guides."
      },
      {
        "title": "Doorstep Pay",
        "desc": "Order with cash on delivery and simple 7-day exchanges."
      }
    ],
    "impact": "Outfit bundle sales rose by 82%. Repeat orders hit 46%.",
    "stats": [
      {
        "label": "Bundle Sales",
        "value": "+82%"
      },
      {
        "label": "Repeat Buyers",
        "value": "46%"
      }
    ]
  },
  "cacti-store": {
    "lead": "Cacti Store is a plant shop selling rare succulents, indoor cacti, and ceramic pots.",
    "challenge": "Plant lovers want to make sure plants arrive safe and need easy plant care tips.",
    "solution": "We built a botanical web shop. It offers plant care guides and safe box packaging.",
    "features": [
      {
        "title": "Care Guides",
        "desc": "Check sunlight and water tips for every cactus variety."
      },
      {
        "title": "Safe Shipping",
        "desc": "Ship live plants safely in soil-lock custom boxes."
      },
      {
        "title": "Pot Matcher",
        "desc": "Match indoor cacti with handmade clay and ceramic pots."
      },
      {
        "title": "Water Alerts",
        "desc": "Get monthly plant watering reminders sent by email."
      }
    ],
    "impact": "Safe plant delivery reached 99%. Online plant sales grew by 115%.",
    "stats": [
      {
        "label": "Safe Delivery",
        "value": "99%"
      },
      {
        "label": "Sales Growth",
        "value": "+115%"
      }
    ]
  },
  "upstage-collection": {
    "lead": "Upstage Collection makes luxury velvet chairs and modern dining tables.",
    "challenge": "Interior designers need exact furniture sizes and fabric swatches before they buy.",
    "solution": "We built a design shop. It has 3D room previews and fabric swatch requests.",
    "features": [
      {
        "title": "3D Room View",
        "desc": "Check furniture scale and sizes in real room setups."
      },
      {
        "title": "Fabric Swatches",
        "desc": "Order velvet and linen swatches sent to your design firm."
      },
      {
        "title": "Trade Accounts",
        "desc": "Get special pricing and fast quotes for design projects."
      },
      {
        "title": "White Glove Care",
        "desc": "Schedule doorstep delivery and room furniture assembly."
      }
    ],
    "impact": "Project inquiries grew by 130%. Swatch requests tripled.",
    "stats": [
      {
        "label": "Inquiries",
        "value": "+130%"
      },
      {
        "label": "Swatches",
        "value": "3x"
      }
    ]
  },
  "botai": {
    "lead": "BotAI builds smart AI chatbots and customer support tools for business teams.",
    "challenge": "Business leads want to test chatbot speed and check CRM tools before buying.",
    "solution": "We built an interactive software site. It features live bot demos and setup guides.",
    "features": [
      {
        "title": "Live Bot Demo",
        "desc": "Test the chatbot live on the page to see how it answers."
      },
      {
        "title": "Easy Setups",
        "desc": "Connect the bot to WhatsApp, Zendesk, or Shopify in minutes."
      },
      {
        "title": "Savings Tool",
        "desc": "Calculate support hours and costs saved with automation."
      },
      {
        "title": "Data Security",
        "desc": "Read our data encryption and privacy safety standards."
      }
    ],
    "impact": "Software trial sign-ups rose by 175%. Pilot test sales grew by 55%.",
    "stats": [
      {
        "label": "Trials",
        "value": "+175%"
      },
      {
        "label": "Pilot Sales",
        "value": "+55%"
      }
    ]
  },
  "delhi-house": {
    "lead": "Delhi House is a royal dining restaurant serving authentic North Indian dishes.",
    "challenge": "The restaurant needed to showcase its dining rooms and take online table bookings.",
    "solution": "We built a warm restaurant site. It offers photo tours, food menus, and table booking.",
    "features": [
      {
        "title": "Dining Tour",
        "desc": "Take a high-res photo walkthrough of the royal dining rooms."
      },
      {
        "title": "Food Menus",
        "desc": "Explore heritage slow-cooked recipes and spicy grills."
      },
      {
        "title": "Party Booking",
        "desc": "Book private dining spaces for family dinners and parties."
      },
      {
        "title": "Instant Tables",
        "desc": "Reserve tables with immediate text booking confirmation."
      }
    ],
    "impact": "Weekend dinner tables booked out two weeks in advance.",
    "stats": [
      {
        "label": "Weekend Fill",
        "value": "100%"
      },
      {
        "label": "Advance Booking",
        "value": "2 Weeks"
      }
    ]
  },
  "farzi-cafe": {
    "lead": "Farzi Cafe is a modern Indian bistro known for creative food and mocktails.",
    "challenge": "The cafe wanted to bring its vibrant food style and live music vibe to the web.",
    "solution": "We built an upbeat cafe website. It offers video menus and live table booking.",
    "features": [
      {
        "title": "Dish Videos",
        "desc": "Watch short clips showing smoky drinks and creative dishes."
      },
      {
        "title": "Gig Calendar",
        "desc": "Check upcoming weekend DJ sets and live music shows."
      },
      {
        "title": "Table Booking",
        "desc": "Book cafe tables in seconds with text reminders."
      },
      {
        "title": "Bar Menu",
        "desc": "Explore creative drinks, flavor notes, and snacks."
      }
    ],
    "impact": "Online table bookings grew by 80%. Party inquiries rose by 65%.",
    "stats": [
      {
        "label": "Bookings",
        "value": "+80%"
      },
      {
        "label": "Parties",
        "value": "+65%"
      }
    ]
  },
  "aerolume": {
    "lead": "Aerolume makes smart scent diffusers and fragrance oils for hotels and retail shops.",
    "challenge": "Store managers need to calculate room coverage and test scent oil blends.",
    "solution": "We built a clean aroma web portal. It offers room calculators and scent sample kits.",
    "features": [
      {
        "title": "Room Calculator",
        "desc": "Match room cubic feet to the right diffuser machine."
      },
      {
        "title": "Scent Cards",
        "desc": "Order fragrance sample cards for your hotel or store."
      },
      {
        "title": "Phone App",
        "desc": "Set scent strength and timer schedules from your phone."
      },
      {
        "title": "Oil Refills",
        "desc": "Get fresh fragrance cartridges delivered each month."
      }
    ],
    "impact": "Hotel scent diffuser contracts grew by 145% across top hotel brands.",
    "stats": [
      {
        "label": "Contracts",
        "value": "+145%"
      },
      {
        "label": "Client Base",
        "value": "Hotels"
      }
    ]
  },
  "rosete": {
    "lead": "Rosete makes preserved rose boxes, everlasting flowers, and luxury floral gifts.",
    "challenge": "Shoppers want proof that preserved real roses last for up to three years without water.",
    "solution": "We built an elegant flower shop. It features flower care videos and gift box builders.",
    "features": [
      {
        "title": "Flower Video",
        "desc": "Watch how natural preservation keeps roses fresh for years."
      },
      {
        "title": "Box Builder",
        "desc": "Pick box styles, rose colors, and custom gold initials."
      },
      {
        "title": "Date Picker",
        "desc": "Select the exact delivery date for birthdays and events."
      },
      {
        "title": "Gift Card",
        "desc": "Add a gold-embossed message card with your flower order."
      }
    ],
    "impact": "Holiday and anniversary gift sales grew by 160% with zero shipping flaws.",
    "stats": [
      {
        "label": "Gift Sales",
        "value": "+160%"
      },
      {
        "label": "Flaw Rate",
        "value": "0%"
      }
    ]
  },
  "health": {
    "lead": "Health makes organic cold-pressed juices, booster shots, and detox cleanses.",
    "challenge": "Juice drinkers want clear nutrition facts and guaranteed morning cold delivery.",
    "solution": "We built a fresh health shop. It offers custom cleanse builders and early delivery slots.",
    "features": [
      {
        "title": "Cleanse Builder",
        "desc": "Pick 3-day or 5-day juice packs based on your health goals."
      },
      {
        "title": "Nutrient Facts",
        "desc": "Check vitamins, calories, and benefits on every bottle."
      },
      {
        "title": "Morning Delivery",
        "desc": "Get cold, fresh juices dropped at your door by 7 AM."
      },
      {
        "title": "Weekly Juice Box",
        "desc": "Set up recurring juice packs with easy pause options."
      }
    ],
    "impact": "Weekly juice subscriptions rose by 125%. Repeat buyers reached 64%.",
    "stats": [
      {
        "label": "Subscriptions",
        "value": "+125%"
      },
      {
        "label": "Repeat Buyers",
        "value": "64%"
      }
    ]
  },
  "chavelle": {
    "lead": "Chavelle makes durable hardshell suitcases, cabin bags, and travel backpacks.",
    "challenge": "Travelers need proof that suitcases resist airport drops and roll smoothly.",
    "solution": "We built a travel gear shop. It offers drop test clips and packing size guides.",
    "features": [
      {
        "title": "Drop Test Videos",
        "desc": "Watch test clips showing shells survive heavy impacts."
      },
      {
        "title": "Packing Guide",
        "desc": "See how many outfits fit in cabin and check-in bags."
      },
      {
        "title": "Lifetime Warranty",
        "desc": "Register your bags online for easy wheel and lock repairs."
      },
      {
        "title": "Airline Matcher",
        "desc": "Check if cabin bags meet airline carry-on size rules."
      }
    ],
    "impact": "Luggage bundle sales rose by 115%. Warranty sign-ups reached 84%.",
    "stats": [
      {
        "label": "Bundle Sales",
        "value": "+115%"
      },
      {
        "label": "Warranties",
        "value": "84%"
      }
    ]
  },
  "lotd": {
    "lead": "LOTD (Look of the Day) is a clothing brand releasing weekly trendy fashion drops.",
    "challenge": "The shop had to support weekly drops while loading lightning-fast on mobile phones.",
    "solution": "We built an ultra-fast fashion store. It has swipeable lookbooks and quick checkout.",
    "features": [
      {
        "title": "Weekly Drops",
        "desc": "See live countdown timers for new Friday clothing drops."
      },
      {
        "title": "Swipe Looks",
        "desc": "Swipe through outfits with one-tap add-to-bag buttons."
      },
      {
        "title": "Style Feed",
        "desc": "Shop clothes straight from popular creator outfit photos."
      },
      {
        "title": "1-Tap Sizes",
        "desc": "Pick your saved size in one tap for quick checkout."
      }
    ],
    "impact": "Weekly drop sales grew by 70%. Average cart size rose by 32%.",
    "stats": [
      {
        "label": "Drop Sales",
        "value": "+70%"
      },
      {
        "label": "Cart Size",
        "value": "+32%"
      }
    ]
  },
  "lynx": {
    "lead": "Lynx makes zodiac jewelry, birthstone necklaces, and star-sign gifts.",
    "challenge": "Shoppers need personalized jewelry picks and gift ideas for each star sign.",
    "solution": "We built a magical jewelry shop. It offers birthstone guides and zodiac gift finders.",
    "features": [
      {
        "title": "Zodiac Finder",
        "desc": "Find matching jewelry based on your birthday and star sign."
      },
      {
        "title": "Stone Guides",
        "desc": "Read facts on the meanings of emerald, quartz, and onyx."
      },
      {
        "title": "Custom Engraving",
        "desc": "Add custom engraved star signs to pendant necklaces."
      },
      {
        "title": "Velvet Boxes",
        "desc": "Ship orders in midnight blue velvet gift boxes."
      }
    ],
    "impact": "Birthday and holiday gift sales grew by 140%.",
    "stats": [
      {
        "label": "Gift Sales",
        "value": "+140%"
      },
      {
        "label": "Holiday Boost",
        "value": "High"
      }
    ]
  },
  "mr-pronto": {
    "lead": "Mr. Pronto is a shoe care atelier offering luxury footwear repairs and polishing.",
    "challenge": "Shoppers need clear repair prices and an easy way to book shoe pickup from home.",
    "solution": "We built a shoe care portal. It features repair photo comparisons and pickup booking.",
    "features": [
      {
        "title": "Repair Photos",
        "desc": "View clear before-and-after photos of shoe restoration."
      },
      {
        "title": "Doorstep Pickup",
        "desc": "Book shoe pickup and delivery from your home or office."
      },
      {
        "title": "Price List",
        "desc": "Check clear prices for sole repairs, cleaning, and polish."
      },
      {
        "title": "Live Updates",
        "desc": "Get text alerts as master cobblers restore your shoes."
      }
    ],
    "impact": "Online shoe repair pickups rose by 165% across city metro areas.",
    "stats": [
      {
        "label": "Pickups",
        "value": "+165%"
      },
      {
        "label": "Metro Reach",
        "value": "City-wide"
      }
    ]
  },
  "rise": {
    "lead": "Rise is an artisan bakery, breakfast cafe, and coffee bar.",
    "challenge": "The bakery needed a fast way to handle fresh morning pastry orders online.",
    "solution": "We built a warm bakery site. It has daily bake timers and morning delivery slots.",
    "features": [
      {
        "title": "Bake Timers",
        "desc": "See when fresh warm croissants come out of the oven."
      },
      {
        "title": "Morning Delivery",
        "desc": "Get warm sourdough bread delivered for breakfast."
      },
      {
        "title": "Office Catering",
        "desc": "Order pastry and coffee boxes for office meetings."
      },
      {
        "title": "Grain Stories",
        "desc": "Read how stone-ground flour and wild yeast make bread."
      }
    ],
    "impact": "Morning bakery orders grew by 90%. Catering orders tripled.",
    "stats": [
      {
        "label": "Morning Orders",
        "value": "+90%"
      },
      {
        "label": "Catering",
        "value": "3x"
      }
    ]
  },
  "shiva": {
    "lead": "Shiva weaves pure silk sarees, handloom drapes, and traditional bridal dupattas.",
    "challenge": "Shoppers want to inspect the pure sheen of silk and intricate zari thread work.",
    "solution": "We built a handloom silk shop. It offers 4K macro weave zoom and silk purity badges.",
    "features": [
      {
        "title": "Zari Zoom",
        "desc": "Inspect gold and silver zari thread work in 4K detail."
      },
      {
        "title": "Silk Badges",
        "desc": "View certified Silk Mark badges guaranteeing pure silk."
      },
      {
        "title": "Stylist Video",
        "desc": "Book video calls with saree stylists to pick bridal sets."
      },
      {
        "title": "Insured Shipping",
        "desc": "Ship bridal sarees worldwide with safe transit tracking."
      }
    ],
    "impact": "Bridal saree orders rose by 110%. Global sales grew by 75%.",
    "stats": [
      {
        "label": "Bridal Orders",
        "value": "+110%"
      },
      {
        "label": "Global Sales",
        "value": "+75%"
      }
    ]
  },
  "sosha": {
    "lead": "Sosha makes modern festive wear, fusion lehengas, and crop top sets.",
    "challenge": "Young fashion shoppers need outfit styling tips and clear size fit guides.",
    "solution": "We built a bright fashion shop. It offers styling lookbooks and fast delivery options.",
    "features": [
      {
        "title": "Style Lookbooks",
        "desc": "See how to pair capes, skirts, and festive crop tops."
      },
      {
        "title": "Custom Stitch",
        "desc": "Add custom blouse sizing notes at checkout in one click."
      },
      {
        "title": "Fit Photos",
        "desc": "See outfit photos across different model body sizes."
      },
      {
        "title": "Fast Shipping",
        "desc": "Get 48-hour delivery options for weddings and parties."
      }
    ],
    "impact": "Festive fashion sales doubled. Customer returns dropped below 3%.",
    "stats": [
      {
        "label": "Sales Growth",
        "value": "2x"
      },
      {
        "label": "Return Rate",
        "value": "<3%"
      }
    ]
  },
  "jwellery": {
    "lead": "Jwellery makes waterproof gold-plated rings, chains, and everyday minimal jewelry.",
    "challenge": "Shoppers want proof that gold rings stay bright when exposed to water and soap.",
    "solution": "We built a modern jewelry shop. It has water test clips and ring stack builders.",
    "features": [
      {
        "title": "Water Test Clips",
        "desc": "Watch test clips showing rings in water and soap."
      },
      {
        "title": "Stack Builder",
        "desc": "Mix and match rings and chains into discounted sets."
      },
      {
        "title": "Ring Size Guide",
        "desc": "Use a simple printable guide to find your ring size."
      },
      {
        "title": "Gift Pouch",
        "desc": "Get an eco-friendly gift pouch with every jewelry order."
      }
    ],
    "impact": "Jewelry stack orders grew by 88%. Cart drop-offs fell by 35%.",
    "stats": [
      {
        "label": "Stack Orders",
        "value": "+88%"
      },
      {
        "label": "Cart Drop-off",
        "value": "-35%"
      }
    ]
  },
  "sage-perfume": {
    "lead": "Sage Royal creates organic perfumes, herbal attars, and aroma plant essences.",
    "challenge": "Shoppers want to explore organic perfume notes and ancient herbal recipes.",
    "solution": "We built a royal perfume shop. It offers scent note guides and discovery sample sets.",
    "features": [
      {
        "title": "Scent Notes",
        "desc": "Explore notes of sandalwood, jasmine, and herbal oils."
      },
      {
        "title": "Sample Sets",
        "desc": "Try 4 discovery samples at home with a store gift voucher."
      },
      {
        "title": "Pure Badges",
        "desc": "View certified vegan and alcohol-free perfume badges."
      },
      {
        "title": "Gift Boxes",
        "desc": "Ship orders in gold-embossed keepsake gift boxes."
      }
    ],
    "impact": "Sample box orders grew by 140%, with 38% buying full bottles.",
    "stats": [
      {
        "label": "Sample Orders",
        "value": "+140%"
      },
      {
        "label": "Bottle Sales",
        "value": "38%"
      }
    ]
  },
  "jsv": {
    "lead": "JSV makes industrial valves, stainless steel pipe parts, and fluid control valves.",
    "challenge": "Engineers need accurate pressure ratings and instant CAD drawing downloads.",
    "solution": "We built an industrial valve catalog. It offers valve spec tables and fast quote tools.",
    "features": [
      {
        "title": "Spec Tables",
        "desc": "Check pressure ratings, heat limits, and steel grades."
      },
      {
        "title": "CAD Downloads",
        "desc": "Download 2D and 3D CAD files for pipeline engineering."
      },
      {
        "title": "Bulk Quotes",
        "desc": "Send fast quote requests for custom industrial valve orders."
      },
      {
        "title": "Safety Badges",
        "desc": "View certified ISO and CE safety compliance badges."
      }
    ],
    "impact": "Industrial quote inquiries rose by 160% with new enterprise contracts.",
    "stats": [
      {
        "label": "Quote Leads",
        "value": "+160%"
      },
      {
        "label": "Contracts",
        "value": "Enterprise"
      }
    ]
  }
};
