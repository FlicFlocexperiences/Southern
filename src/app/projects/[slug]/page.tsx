import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileFooter } from "@/components/mobile-footer";
import { Cta } from "@/components/cta";
import { ProjectGallerySlider } from "@/components/project-gallery-slider";
import { DesktopFaq } from "@/components/desktop-faq";
import { MobileFaq } from "@/components/mobile-faq";
import fs from "fs";
import path from "path";

// Helper function to read project images from local folders or fallback to database gallery
function getProjectImages(slug: string, fallbackGallery: string[]): string[] {
  const folderName = 
    slug === "health" ? "Health/GRID 13" : 
    slug === "chavelle" ? "Chavelle/Grid 08" : 
    slug === "lotd" ? "LOTD/Grid 01" :
    slug === "lynx" ? "LYNX/Grid 01" :
    (slug === "mr-pronto" || slug === "mr_pronto") ? "Mr_Pronto/Grid 01" :
    slug === "rise" ? "Rise/Grid 12" :
    slug === "shiva" ? "Shiva/Grids" :
    slug === "sosha" ? "Sosha/GRID 04" :
    slug === "jwellery" ? "Jwellery" :
    (slug === "sage" || slug === "sage-perfume" || slug === "sage_perfume") ? "SAGE_Perfumes" :
    (slug === "jsv" || slug === "jsc") ? "JSV" :
    slug;
  const dirPath = path.join(process.cwd(), "public", folderName);

  if (fs.existsSync(dirPath)) {
    try {
      const files = fs.readdirSync(dirPath);
      const imageExtensions = [".png", ".jpg", ".jpeg", ".webp", ".svg"];
      const localImages = files
        .filter((file) => imageExtensions.includes(path.extname(file).toLowerCase()))
        .filter((file) => 
          !file.includes("Grid 08.png") && 
          !file.includes("Grid 01.png") && 
          !file.includes("Grid 03.png") &&
          !file.includes("Grid 12.png") &&
          !file.includes("grid 0f 9 ii.png")
        ) // Exclude huge images for speed
        .map((file) => `/${folderName}/${file}`);

      if (localImages.length > 0) {
        return localImages;
      }
    } catch (error) {
      console.error("Error reading project folder:", error);
    }
  }
  return fallbackGallery;
}

// Helper function to return execution detail paragraphs for the projects
function getProjectExecutionText(slug: string, title: string, category: string): string {
  switch (slug) {
    case "health":
      return "We executed the Health project by establishing a secure and highly scalable backend infrastructure combined with an intuitive user interface. Our development lifecycle focused on clinical workflow optimization, data privacy compliance, and real-time patient-doctor telemetry. The result is a robust digital ecosystem that streamlines operations and enhances patient outcomes.";
    case "chavelle":
      return "Our execution for Chavelle focused on creating a visually immersive Shopify storefront designed to elevate the brand's luxury aesthetic. We integrated smooth micro-interactions, high-fidelity media showcases, and a streamlined, secure check-out flow. The visual branding was tailored to capture the elegance of the collection, maximizing conversion rates and customer retention.";
    case "lotd":
      return "For LOTD, we launched a comprehensive Meta Ads campaign paired with high-impact creative assets. We implemented advanced lookalike audience targeting and dynamic product ads to drive qualified traffic. Continuous A/B testing of creative angles, copy variations, and landing page designs resulted in a significantly optimized return on ad spend (ROAS) and brand authority.";
    case "lynx":
      return "We developed LYNX as a high-speed, interactive web portal showcasing their technical capabilities. Utilizing cutting-edge three-dimensional elements and optimized asset loaders, the showcase delivers a lag-free immersive experience. The visual style reflects the brand's forward-looking engineering approach through industrial palettes and structural geometry.";
    case "mr-pronto":
    case "mr_pronto":
      return "The Mr Pronto branding campaign was executed across digital and print collateral. We designed a vibrant color identity system and playful typography to appeal to their fast-paced restaurant customers. The packaging designs, website layout, and point-of-sale visual materials were aligned to present a cohesive, recognizable brand that commands customer loyalty.";
    case "rise":
      return "For Rise, we built a modern React-based interface utilizing fluid layout transitions and performance optimization. The UI highlights corporate services and case studies through interactive charts and staggered scroll indicators. The web structure is SEO-optimized and built for maximum speed to support their inbound marketing strategy.";
    case "shiva":
      return "Our team executed the Shiva photoshoot campaign by blending high-fashion editorial concepts with artistic studio lighting. We directed the visual composition and model staging to focus on the unique contours of the brand's products. Advanced post-production retouching and color grading were applied to achieve a premium, high-impact aesthetic.";
    case "sosha":
      return "For Sosha, we staged a minimal outdoor photoshoot focused on natural light and flowy fabrics. The resulting assets were integrated into a premium digital lookbook designed to tell a visual story. The layout utilizes generous whitespace and elegant typography to match the refined and premium personality of the collection.";
    case "jwellery":
      return "Executing the Jwellery campaign required specialized macro-photography techniques to capture the detailed reflections and craftsmanship of each piece. We used controlled diffuse lighting to eliminate harsh highlights and reveal the true colors of the gems. The final campaign assets present a rich, elegant narrative across web and print catalogs.";
    case "sage":
    case "sage-perfume":
    case "sage_perfume":
      return "For Sage Perfume, our execution leveraged minimalist product staging and soft shadows to capture the organic essence of the fragrances. We composed layouts using natural elements like stone, wood, and water droplets to reinforce the botanical ingredients of the scents. The final assets deliver a clean, sensory-focused visual identity.";
    case "jsv":
    case "jsc":
      return "We executed the JSV Branding project by establishing a cohesive visual language and brand system. We focused on typography pairings, color harmonies, and clean editorial compositions to design high-fidelity collateral, packaging details, and stationery. The resulting design provides a premium and modern brand presence across all public-facing media.";
    case "sexsea":
      return "The website was crafted with a clean visual hierarchy, engaging product storytelling, and intuitive navigation to highlight skincare and haircare collections. Focus was placed on mobile responsiveness, conversion-focused product pages, promotional sections, trust-building content, and a frictionless shopping journey. Every interaction was optimized to reinforce the brand's premium identity while encouraging product exploration and purchases.";
    case "bunt":
      return "The website was developed with a minimal yet sophisticated interface that emphasizes premium craftsmanship and thoughtful storytelling. Carefully structured product pages, lifestyle imagery, intuitive navigation, and responsive layouts create an engaging browsing experience while communicating the brand's focus on quality, comfort, and timeless design for modern pet owners.";
    case "the-fat-cookie":
      return "The platform was designed with vibrant product displays, intuitive category organization, and an effortless purchasing flow. Interactive product pages, bundle-building functionality, responsive layouts, and strong visual storytelling work together to create an engaging shopping experience while highlighting the freshness and uniqueness of every cookie collection.";
    case "kamal":
      return "The platform features structured vehicle listings, service information, responsive layouts, and streamlined navigation to simplify customer interactions. Strong visual hierarchy, optimized content sections, and clear calls to action ensure visitors can efficiently explore inventory, learn about services, and make inquiries with confidence.";
    case "kitchun":
      return "The website was structured with immersive visuals, organized project galleries, intuitive navigation, and responsive layouts. Clean typography, minimal aesthetics, and carefully planned user flows help visitors explore the portfolio, understand the studio's services, and connect effortlessly through strategically placed contact touchpoints.";
    case "bloom":
      return "The website was built with an inviting visual style, intuitive navigation, responsive layouts, and engaging imagery. Dedicated sections for menu highlights, brand story, locations, and contact information create a seamless browsing experience while reflecting the café's warm and contemporary identity.";
    case "ama":
      return "The platform was designed with a structured information architecture, clear service pages, responsive layouts, and conversion-focused call-to-actions. Clean typography, intuitive navigation, and trust-building elements ensure visitors can understand legal services, submit inquiries, and connect with experts effortlessly.";
    case "foire":
      return "The website emphasizes refined visuals, intuitive product categorization, responsive layouts, and streamlined purchasing flows. Carefully crafted interfaces, engaging product displays, and consistent branding help customers browse collections effortlessly while delivering a polished shopping experience across all devices.";
    case "delhi-house":
      return "The website was designed with immersive food photography, intuitive navigation, responsive layouts, and a clean content structure. Dedicated sections for the menu, brand story, gallery, and contact information create an enjoyable browsing experience while reflecting the café's vibrant atmosphere and modern identity.";
    case "honk":
      return "The platform combines elegant layouts, immersive imagery, responsive design, and intuitive navigation to present the property's offerings seamlessly. Carefully organized content, booking touchpoints, and visual storytelling create a sophisticated user experience while communicating the brand's heritage, comfort, and exclusivity.";
    default:
      return `Our team worked closely with the client to bring the ${title} ${category} project to life. We implemented best-in-class industry workflows, optimized assets for digital distribution, and delivered a cohesive presentation matching modern branding principles.`;
  }
}

// Helper function to return after effect detail paragraphs for the projects
function getProjectAfterEffectText(slug: string, title: string, category: string): string {
  switch (slug) {
    case "health":
      return "The implementation of the digital health ecosystem resulted in a 40% reduction in patient onboarding times and a 25% increase in operational efficiency. Healthcare providers reported significantly higher patient satisfaction rates due to the intuitive interface, while patients benefited from seamless, immediate access to medical consultations and health history records.";
    case "chavelle":
      return "Post-launch, Chavelle witnessed a substantial surge in organic e-commerce traffic and a 30% uplift in customer average order value (AOV). The custom-branded storefront elevated Chavelle's identity, positioning them as a top-tier luxury player and garnering praise across major design publications.";
    case "lotd":
      return "Our optimized creative testing and targeting strategy yielded a 3.5x return on ad spend (ROAS) during the peak shopping season. The unified visual campaign not only drove immediate sales but also built long-term brand equity, resulting in a 50% increase in social media brand mentions.";
    case "lynx":
      return "The high-performance technical identity and interactive portal successfully positioned LYNX as a modern, forward-thinking industry leader. The site achieved excellent engagement metrics, with visitors spending 3x more time interacting with the 3D showcase compared to their previous static website.";
    case "mr-pronto":
    case "mr_pronto":
      return "The brand refresh for Mr Pronto resulted in immediate franchise expansion interest and a 20% increase in year-over-year store sales. Customers highly praised the clean packaging and easy-to-use digital menus, validating our target audience strategy of appeal through convenience and modern visual delight.";
    case "rise":
      return "The performance-oriented web showcase enabled Rise to capture high-quality inbound leads, resulting in a 45% increase in business consultation inquiries within the first quarter. The seamless transitions and fast loading speeds significantly reduced bounce rates, boosting search engine visibility.";
    case "shiva":
      return "Our team executed the Shiva photoshoot campaign by blending high-fashion editorial concepts with artistic studio lighting. We directed the visual composition and model staging to focus on the unique contours of the brand's products. Advanced post-production retouching and color grading were applied to achieve a premium, high-impact aesthetic.";
    case "sosha":
      return "For Sosha, we staged a minimal outdoor photoshoot focused on natural light and flowy fabrics. The resulting assets were integrated into a premium digital lookbook designed to tell a visual story. The layout utilizes generous whitespace and elegant typography to match the refined and premium personality of the collection.";
    case "jwellery":
      return "The bespoke jewelry campaign was featured in premium lifestyle magazines and drove a 50% increase in custom jewelry booking appointments. The macro-detailed photography allowed customers to appreciate the meticulous design details online, driving high-trust direct sales.";
    case "sage":
    case "sage-perfume":
    case "sage_perfume":
      return "For Sage Perfume, our execution leveraged minimalist product staging and soft shadows to capture the organic essence of the fragrances. We composed layouts using natural elements like stone, wood, and water droplets to reinforce the botanical ingredients of the scents. The final assets deliver a clean, sensory-focused visual identity.";
    case "jsv":
    case "jsc":
      return "Following the launch of the JSV brand identity, the client reported a 45% increase in brand recognition and a significant uplift in corporate partner engagement. The structured style guide and professional assets successfully repositioned JSV as a market-leading authority in creative and modern presentation.";
    case "sexsea":
      return "The final experience strengthened the brand's premium positioning while making product discovery and purchasing more intuitive. A refined interface, improved navigation, and engaging presentation created a trustworthy shopping experience that encourages customer confidence and repeat visits.";
    case "bunt":
      return "The completed platform elevated the online shopping experience through premium visuals, streamlined navigation, and stronger product presentation. The refined digital presence reinforces brand credibility while helping customers confidently discover and purchase luxury pet furniture.";
    case "the-fat-cookie":
      return "The final website delivers an enjoyable shopping experience that enhances product discovery and supports online sales. A clean interface, engaging visuals, and simplified ordering process help strengthen customer trust while reinforcing the brand's fun and premium identity.";
    case "kamal":
      return "The completed website improves accessibility to inventory and dealership information while establishing a stronger digital presence. Better organization and intuitive navigation create a smoother customer journey that supports engagement and lead generation.";
    case "kitchun":
      return "The finished website strengthens the studio's online presence with a premium visual identity and seamless browsing experience. Enhanced project presentation and clear communication encourage inquiries while reinforcing credibility among prospective residential and commercial clients.";
    case "bloom":
      return "The final website strengthens the café's online presence through improved accessibility, consistent branding, and an engaging user experience. Visitors can easily explore offerings, connect with the brand, and discover locations with confidence.";
    case "ama":
      return "The redesigned experience enhances credibility, improves service discoverability, and streamlines client engagement. A modern interface combined with simplified navigation supports higher user confidence while reinforcing the firm's professional digital identity.";
    case "foire":
      return "The completed platform elevates the brand's online presence with stronger product visibility and an intuitive customer journey. Improved usability, premium aesthetics, and optimized shopping experiences contribute to greater customer trust and engagement.";
    case "delhi-house":
      return "The completed platform strengthens the café's online visibility with a refined visual experience and simplified customer journey. Improved accessibility, engaging content, and clear calls to action help increase customer engagement and reinforce the brand's premium positioning.";
    case "honk":
      return "The final website enhances the property's digital presence with stronger visual storytelling and a streamlined browsing experience. A polished interface, improved content organization, and premium branding encourage visitor inquiries while strengthening credibility and guest confidence.";
    default:
      return `The ${title} ${category} project delivered excellent metrics, strengthening the brand's position and demonstrating outstanding return on creative investment.`;
  }
}

// Make it dynamic by defining generateStaticParams
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Gather images from the local folder or fallback to the gallery array
  const galleryImages = getProjectImages(slug, project.gallery);
  const bentoImages = [...galleryImages];
  while (bentoImages.length < 7) {
    bentoImages.push(project.heroImage || project.image);
  }

  return (
    <div className="w-full min-h-screen bg-[#fffff0]">
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      <main className="w-full pt-32 lg:pt-48 px-6 lg:px-[90px] pb-24">
        {/* Massive Title */}
        <h1 className="text-[50px] lg:text-[110px] xl:text-[130px] font-medium leading-[1] text-[#30261C] uppercase tracking-tighter mb-12 lg:mb-24">
          {project.title}
        </h1>

        {/* Two-Column Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 lg:mb-32">
          {/* Left Column: Description & Links */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between">
            <p className="text-[22px] lg:text-[28px] xl:text-[34px] leading-[1.3] text-[#30261C]/80 font-light mb-12">
              {project.description}
            </p>

            <div className="flex items-center gap-6">
              {project.websiteUrl && (
                <a 
                  href={project.websiteUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-8 py-3 bg-[#30261C]/50 hover:bg-[#30261C] text-white rounded-full transition-colors font-medium text-[14px] tracking-wide"
                >
                  VISIT WEBSITE
                </a>
              )}
              <a 
                href="#approach" 
                className="flex items-center gap-2 text-[#30261C]/60 hover:text-[#ff5100] transition-colors text-[14px] font-medium tracking-wide uppercase"
              >
                OUR APPROACH <span className="text-[18px]">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Meta Info */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col pt-2 lg:pt-0">
            <div className="flex flex-col border-t border-[#30261C]/10 py-5">
              <span className="text-[11px] text-[#30261C]/40 uppercase tracking-widest mb-1">DURATION</span>
              <span className="text-[16px] text-[#30261C]">{project.duration}</span>
            </div>
            <div className="flex flex-col border-t border-[#30261C]/10 py-5">
              <span className="text-[11px] text-[#30261C]/40 uppercase tracking-widest mb-1">CLIENT</span>
              <span className="text-[16px] text-[#30261C]">{project.client}</span>
            </div>
            <div className="flex flex-col border-t border-[#30261C]/10 py-5">
              <span className="text-[11px] text-[#30261C]/40 uppercase tracking-widest mb-1">SERVICES</span>
              <span className="text-[16px] text-[#30261C]">{project.services}</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Image Gallery */}
        <div className="w-full mb-24">
          <h2 className="text-[28px] lg:text-[42px] font-medium text-[#30261C] mb-8 lg:mb-12 uppercase tracking-tight">
            Project Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {/* Slot 1: Top Full-Width Image */}
            <div className="col-span-1 md:col-span-4 h-[250px] md:h-[450px] rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
              <img 
                src={bentoImages[0]} 
                alt={`${project.title} Gallery 1`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Slot 2: Middle Left Medium-Large (spans 2 rows) */}
            <div className="col-span-1 md:col-span-2 md:row-span-2 h-[250px] md:h-full min-h-[250px] md:min-h-[360px] lg:min-h-[464px] rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
              <img 
                src={bentoImages[1]} 
                alt={`${project.title} Gallery 2`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Slot 3: Middle Right Small 1 */}
            <div className="col-span-1 md:col-span-1 h-[170px] md:h-[170px] lg:h-[330px] rounded-[24px] lg:rounded-[28px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
              <img 
                src={bentoImages[2]} 
                alt={`${project.title} Gallery 3`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Slot 4: Middle Right Small 2 */}
            <div className="col-span-1 md:col-span-1 h-[170px] md:h-[170px] lg:h-[330px] rounded-[24px] lg:rounded-[28px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
              <img 
                src={bentoImages[3]} 
                alt={`${project.title} Gallery 4`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Slot 5: Middle Right Small 3 */}
            <div className="col-span-1 md:col-span-1 h-[170px] md:h-[170px] lg:h-[330px] rounded-[24px] lg:rounded-[28px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
              <img 
                src={bentoImages[4]} 
                alt={`${project.title} Gallery 5`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Slot 6: Middle Right Small 4 */}
            <div className="col-span-1 md:col-span-1 h-[170px] md:h-[170px] lg:h-[330px] rounded-[24px] lg:rounded-[28px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
              <img 
                src={bentoImages[5]} 
                alt={`${project.title} Gallery 6`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Slot 7: Bottom Full-Width Image */}
            <div className="col-span-1 md:col-span-4 h-[250px] md:h-[450px] rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
              <img 
                src={bentoImages[6]} 
                alt={`${project.title} Gallery 7`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
          </div>
        </div>
      </main>

      <div style={{ zoom: 0.8 }}><Cta /></div>
      <div className="hidden md:block" style={{ zoom: 0.8 }}>
        <DesktopFaq />
        <DesktopFooter />
      </div>
      <div className="md:hidden" style={{ zoom: 0.8 }}>
        <MobileFaq />
        <MobileFooter />
      </div>
    </div>
  );
}
