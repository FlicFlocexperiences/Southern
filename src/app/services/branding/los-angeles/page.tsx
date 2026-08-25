import { Metadata } from "next";
import Link from "next/link";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceLayout } from "@/components/ServiceLayout";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  alternates: {
    canonical: "/services/branding/los-angeles",
  },
  title: "Branding Company in Los Angeles | Southern Edge Marketing",
  description: "Partner with Los Angeles's premier enterprise branding company. We engineer category-defining brand systems, visual identities, and market positioning for Silicon Beach, Hollywood, and global luxury brands.",
  openGraph: {
    title: "Branding Company in Los Angeles | Southern Edge Marketing",
    description: "Partner with Los Angeles's premier enterprise branding company. We engineer category-defining brand systems, visual identities, and market positioning for Silicon Beach, Hollywood, and global luxury brands.",
    url: "https://southernedgemarketing.com/services/branding/los-angeles",
    siteName: "Southern Edge Marketing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding Company in Los Angeles | Southern Edge Marketing",
    description: "Partner with Los Angeles's premier enterprise branding company. We engineer category-defining brand systems, visual identities, and market positioning for Silicon Beach, Hollywood, and global luxury brands.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const tableOfContents = [
  { id: "los-angeles-commercial-landscape-and-enterprise-brand-architecture", title: "1. The Los Angeles Commercial Landscape and Enterprise Brand Architecture" },
  { id: "silicon-beach-category-creation-and-venture-readiness", title: "2. Silicon Beach Category Creation, Tech Narrative, and VC Readiness" },
  { id: "entertainment-media-studio-identity-and-hollywood-authority", title: "3. Entertainment Studio Identity, Creator Economy, and Hollywood Authority" },
  { id: "luxury-beverly-hills-fashion-and-dtla-lifestyle-branding", title: "4. Luxury Beverly Hills Fashion, DTLA Lifestyle Labels, and Sensory Packaging" },
  { id: "aerospace-clean-tech-and-industrial-b2b-rebranding", title: "5. El Segundo Aerospace, Clean Tech, and B2B Industrial Modernization" },
  { id: "uspto-trademark-governance-and-california-ip-protection", title: "6. USPTO Multi-Class Trademark Governance and IP Protection" },
  { id: "accessible-design-systems-and-california-unruh-compliance", title: "7. Accessible Design Systems, Unruh Civil Rights Act, and High-DPI Assets" },
  { id: "environmental-placemaking-experiential-pop-ups-and-scale", title: "8. Environmental Placemaking, Experiential Retail Pop-Ups, and Scale" },
  { id: "reviews", title: "Reviews" },
  { id: "faq", title: "FAQ" },
];

export default function LosAngelesBrandingPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://southernedgemarketing.com/services/branding/los-angeles#organization",
        "name": "Southern Edge Marketing - Branding Los Angeles",
        "url": "https://southernedgemarketing.com/services/branding/los-angeles",
        "logo": "https://southernedgemarketing.com/LOGO_Final.svg",
        "telephone": "+1-800-555-0199",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ocean Park Blvd, Silicon Beach",
          "addressLocality": "Santa Monica",
          "addressRegion": "CA",
          "postalCode": "90405",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.0195",
          "longitude": "-118.4912"
        }
      },
      {
        "@type": "Service",
        "@id": "https://southernedgemarketing.com/services/branding/los-angeles#service",
        "name": "Enterprise Branding and Visual Identity in Los Angeles",
        "provider": {
          "@id": "https://southernedgemarketing.com/services/branding/los-angeles#organization"
        },
        "serviceType": "Corporate Identity, Brand Architecture, Trademark Strategy, Sensory Packaging",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Greater Los Angeles Metropolitan Area"
        },
        "description": "Comprehensive corporate brand architectures, bespoke visual identity systems, and psychology-backed market positioning for Los Angeles enterprises."
      }
    ]
  };

  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ServiceHero 
        title="Premier Branding Company in Los Angeles"
        tagline="Engineering category-defining brand architectures, iconic visual identity systems, and psychological market positioning for Silicon Beach tech disruptors, Hollywood entertainment giants, and world-class luxury lifestyle brands."
        breadcrumbTitle="Branding in Los Angeles"
      />
      
      <ServiceLayout sections={tableOfContents}>

        <h3 id="los-angeles-commercial-landscape-and-enterprise-brand-architecture" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          The Los Angeles Commercial Landscape and Enterprise Brand Architecture
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          <strong className="font-semibold text-[#de5e18] tracking-tight">Los Angeles stands as the storytelling capital of the world and an undisputed global trendsetter</strong>, generating over one trillion dollars in economic activity across technology, entertainment, fashion, and advanced manufacturing. In this visually sophisticated, culturally forward-leaning market, superficial logo design and generic stock templates fail to establish credibility with discerning consumers or institutional investors. As a premier <strong className="font-semibold text-[#de5e18] tracking-tight">branding company in Los Angeles</strong>, Southern Edge Marketing engineers comprehensive corporate brand architectures, bespoke visual identity systems, and psychology-backed market positioning for category-leading brands. We deconstruct competitive whitespace, analyze consumer purchasing psychology, and articulate your core corporate vision into a distinctive, defensible market posture. Our strategic branding frameworks transform regional businesses into globally recognized category leaders capable of commanding premium pricing across competitive international markets. To ensure your brand identity translates seamlessly into high-converting digital storefronts and web infrastructure, explore our enterprise <Link href="/services/web-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">web development solutions</Link>.
        </p>

        <h3 id="silicon-beach-category-creation-and-venture-readiness" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Silicon Beach Category Creation, Tech Narrative, and VC Readiness
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          For venture-backed startups and high-growth scale-ups across Santa Monica, Venice, Culver City, and Playa Vista, establishing a distinct brand identity is the most potent lever for closing Series A/B funding rounds and attracting top engineering talent. Our <strong className="font-semibold text-[#de5e18] tracking-tight">Los Angeles brand strategy team</strong> translates complex software architectures, artificial intelligence algorithms, and SaaS product suites into clear, category-defining market narratives. We engineer kinetic motion design toolkits, responsive digital design tokens, and comprehensive pitch decks that convey technological authority. By defining a proprietary brand archetype and distinct technical point of view, we help your enterprise stand out in venture syndicates across Silicon Beach, Sand Hill Road, and Wall Street.
        </p>

        <h3 id="entertainment-media-studio-identity-and-hollywood-authority" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Entertainment Studio Identity, Creator Economy, and Hollywood Authority
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          Anchored in the global heartland of cinema, television, and creator culture, Hollywood production studios, talent management firms, and digital media ventures require visual identities that exude creative authority and cultural relevance. We develop comprehensive brand guidelines, dynamic motion idents, title card animations, and multi-platform media collateral that resonate on IMAX screens, streaming dashboards, and social media feeds. Our designers balance cinematic grandeur with modern digital minimalism, ensuring your entertainment brand commands respect from studio executives and mass audiences alike.
        </p>

        <h3 id="luxury-beverly-hills-fashion-and-dtla-lifestyle-branding" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Luxury Beverly Hills Fashion, DTLA Lifestyle Labels, and Sensory Packaging
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          From the haute couture houses lining Rodeo Drive in Beverly Hills to the avant-garde streetwear labels and sustainable lifestyle brands emerging from the DTLA Arts District, luxury branding requires exquisite attention to tactile and digital detail. We design custom typographic ligatures, tactile physical unboxing packaging specifications, and editorial lookbooks that evoke visceral desire. We ensure that your physical flagship presence harmonizes flawlessly with your digital luxury e-commerce experience, eliminating price resistance and cultivating enduring brand loyalty. To amplify your luxury brand positioning across affluent social audiences, explore our specialized <Link href="/services/social-media-management" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">social media management</Link> campaigns.
        </p>

        <h3 id="aerospace-clean-tech-and-industrial-b2b-rebranding" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          El Segundo Aerospace, Clean Tech, and B2B Industrial Modernization
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          The South Bay aerospace corridor (El Segundo, Hawthorne, Long Beach) and Southern California clean tech innovators coordinate mission-critical engineering initiatives for commercial and government defense clients. Many legacy engineering firms operate with outdated visual identities that fail to showcase their cutting-edge composite manufacturing, satellite telemetry, and autonomous systems. We specialize in B2B industrial rebranding, modernizing corporate visual marks, facility signage, technical datasheets, and trade show environments. This transformation elevates your commercial standing from a regional subcontractor to a tier-1 prime contractor.
        </p>

        <h3 id="uspto-trademark-governance-and-california-ip-protection" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          USPTO Multi-Class Trademark Governance and IP Protection
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          Brand equity cannot compound safely if visual assets, company nomenclature, or signature design elements face trademark infringement or dilution. Our branding lifecycle incorporates forensic linguistic analysis and visual distinctiveness checks aligned with registration standards defined by the <a href="https://www.uspto.gov/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">United States Patent and Trademark Office (USPTO)</a>. We design proprietary typographic marks and distinctive trade dress elements engineered for seamless domestic registration and international filing under the Madrid Protocol.
        </p>

        <h3 id="accessible-design-systems-and-california-unruh-compliance" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Accessible Design Systems, Unruh Civil Rights Act, and High-DPI Assets
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          In alignment with the California Unruh Civil Rights Act and ADA Title III, all visual design systems are engineered to satisfy WCAG 2.2 Level AA accessibility criteria. We calibrate brand color palettes to guarantee minimum 4.5:1 contrast ratios for standard typography and 3:1 for large graphical elements. We deliver vector-based SVG assets, variable font packages, and responsive design systems optimized for high-DPI Retina displays and edge CDN distribution.
        </p>

        <h3 id="environmental-placemaking-experiential-pop-ups-and-scale" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Environmental Placemaking, Experiential Retail Pop-Ups, and Scale
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          A comprehensive brand system extends far beyond digital viewports. We design environmental graphics, tech campus signage, experiential retail pop-ups on Abbot Kinney in Venice, and high-impact conference booths. When you are ready to construct an iconic, category-defining brand in Los Angeles, <Link href="/contact" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">contact our Los Angeles branding team</Link> to schedule an initial strategic consultation.
        </p>

        {/* Client Reviews Section */}
        <div className="w-full bg-white border border-black/10 rounded-2xl p-8 shadow-sm text-left mt-10 mb-6">
          <h3 id="reviews" className="text-[22px] font-bold text-black mb-6 uppercase tracking-wide flex items-center gap-2 scroll-mt-28">
            <svg className="w-6 h-6 text-[#de5e18]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Client Reviews
          </h3>
          <div className="flex flex-col gap-8">
            <div className="border-b border-black/5 pb-6">
              <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                &quot;Southern Edge transformed our Silicon Beach AI startup from a generic tech tool into an authoritative, category-defining enterprise brand. Their brand narrative, kinetic identity, and investor deck directly contributed to closing our $18M Series A round.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Brooke Calder" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Brooke Calder</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Synthetix Intelligence (Santa Monica, CA)</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                &quot;Our Beverly Hills luxury skincare line needed a brand architecture that could bridge physical retail boutiques and global e-commerce. Southern Edge delivered a masterclass in visual refinement and tactile packaging design that doubled our average order value.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Harrison Reed" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Harrison Reed</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Botanica Royale (Beverly Hills, CA)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FaqAccordion faqs={[
          {
            "question": "What is the typical timeframe and investment for an enterprise branding engagement in Los Angeles?",
            "answer": "Our full-scale brand architecture and visual identity engagements typically span 6 to 12 weeks. We follow structured phases: competitive discovery, narrative formulation, visual design systems, brand guidelines documentation, and digital collateral rollout."
          },
          {
            "question": "How do you ensure our new brand marks are eligible for USPTO trademark registration?",
            "answer": "We integrate rigorous visual and linguistic novelty checks early in the design phase, reviewing USPTO TESS databases to ensure proposed marks, color treatments, and taglines do not conflict with existing active marks in relevant Nice classes."
          },
          {
            "question": "Do you design physical packaging and environmental signage in addition to digital brand assets?",
            "answer": "Yes, our team creates tactile physical packaging specifications (embossing, die-lines, foil stamping, sustainable substrates) as well as environmental signage, office placemaking, and event collateral."
          },
          {
            "question": "How do your brand systems support accessible design standards under California law?",
            "answer": "Every brand identity is built with WCAG 2.2 Level AA accessibility compliance in mind. We test color contrast ratios, font legibility at multiple screen resolutions, and deliver scalable SVG/variable font assets."
          }
        ]} />

      </ServiceLayout>
    </div>
  );
}
