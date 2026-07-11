import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileFooter } from "@/components/mobile-footer";
import { Cta } from "@/components/cta";
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

  return (
    <div className="w-full min-h-screen bg-[#fffff0]">
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      <main className="w-full pt-32 lg:pt-40 px-6 lg:px-[90px] pb-24">
        
        {/* Hero Section */}
        <div className="w-full relative mb-12 rounded-[28px] lg:rounded-[36px] overflow-hidden aspect-[16/9] md:aspect-[21/9] max-h-[600px] shadow-sm select-none">
          <img 
            src={project.heroImage || project.image} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-8 lg:p-16">
            <h1 className="text-[44px] lg:text-[76px] xl:text-[92px] font-black leading-none text-white uppercase tracking-tighter">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Two-Column Writeups and Meta Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16 lg:mb-28">
          {/* Left Column: Writeups */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-[26px] lg:text-[32px] font-bold text-[#30261C]">About This Project</h2>
              <p className="text-[18px] lg:text-[20px] leading-relaxed text-[#30261C]/80 font-light">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-[26px] lg:text-[32px] font-bold text-[#30261C]">Steps We Did</h2>
              <p className="text-[18px] lg:text-[20px] leading-relaxed text-[#30261C]/80 font-light">
                Our team initiated the project with extensive user research, strategy planning, and UX wireframing. Following validation, we crafted a high-fidelity visual system utilizing responsive typography and modern design patterns, followed by front-end optimization and testing.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-[26px] lg:text-[32px] font-bold text-[#30261C]">Execution & Launch</h2>
              <p className="text-[18px] lg:text-[20px] leading-relaxed text-[#30261C]/80 font-light">
                The project was successfully executed through a structured release cycle. We verified page responsiveness, interactive layouts, asset load speeds, and SEO optimization. Post-launch analytics show increased user engagement and outstanding performance metrics.
              </p>
            </div>
            
            {project.websiteUrl && (
              <div className="mt-4">
                <a 
                  href={project.websiteUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block px-8 py-3.5 bg-[#30261C] hover:bg-[#ff5100] text-white rounded-full transition-colors font-semibold text-[14px] tracking-wider uppercase shadow-md hover:shadow-lg"
                >
                  Visit Live Website
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Meta Info */}
          <div className="lg:col-span-4 flex flex-col pt-2 lg:pt-0">
            <div className="flex flex-col border-t border-[#30261C]/15 py-6">
              <span className="text-[11px] text-[#30261C]/50 uppercase tracking-widest font-bold mb-1.5">CLIENT</span>
              <span className="text-[18px] text-[#30261C] font-semibold">{project.client}</span>
            </div>
            <div className="flex flex-col border-t border-[#30261C]/15 py-6">
              <span className="text-[11px] text-[#30261C]/50 uppercase tracking-widest font-bold mb-1.5">DURATION</span>
              <span className="text-[18px] text-[#30261C] font-semibold">{project.duration}</span>
            </div>
            <div className="flex flex-col border-t border-[#30261C]/15 py-6 border-b border-[#30261C]/15">
              <span className="text-[11px] text-[#30261C]/50 uppercase tracking-widest font-bold mb-1.5">SERVICES</span>
              <span className="text-[18px] text-[#30261C] font-semibold leading-relaxed">{project.services}</span>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Gallery of Images (Hidden for single-image projects) */}
        {galleryImages.length > 1 && (
          <div className="w-full mb-16 lg:mb-24">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#30261C] mb-8 uppercase tracking-tight">
              Project Gallery
            </h2>
            
            {/* Scrollable Container with custom padding and styling */}
            <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-neutral-300 hover:scrollbar-thumb-neutral-400 scroll-smooth snap-x snap-mandatory">
              {galleryImages.map((img, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 w-[55vw] md:w-[35vw] lg:w-[22vw] aspect-[3/4] rounded-[24px] lg:rounded-[32px] overflow-hidden bg-neutral-100 shadow-sm snap-start relative group"
                >
                  <img 
                    src={img} 
                    alt={`${project.title} gallery ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <div style={{ zoom: 0.8 }}><Cta /></div>
      <div className="block md:hidden" style={{ zoom: 0.8 }}><MobileFooter /></div>
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopFooter /></div>
    </div>
  );
}
