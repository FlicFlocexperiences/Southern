import { notFound } from "next/navigation";
import { getProjectBySlug, projects as staticProjects, Project } from "@/data/projects";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileFooter } from "@/components/mobile-footer";
import { Cta } from "@/components/cta";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Metadata } from "next";
import fs from "fs";
import path from "path";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Helper function to read project images from database gallery or fallback to local folders
function getProjectImages(slug: string, gallery?: string[]): string[] {
  // If the project has an explicit gallery list (from Firestore or edited data), ALWAYS prioritize it
  if (gallery && Array.isArray(gallery) && gallery.length > 0) {
    return gallery;
  }

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
  return [];
}

async function getLiveProject(slug: string): Promise<Project | null> {
  try {
    const q = query(collection(db, "projects"), where("slug", "==", slug));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const docSnap = snapshot.docs[0];
      const data = docSnap.data();

      return {
        id: docSnap.id,
        slug: data.slug || docSnap.id,
        title: data.title || "Untitled Project",
        category: data.category || "Web Design",
        tag: data.tag || (data.category ? data.category.toUpperCase() : "WEB DESIGN"),
        categories: data.categories || [data.category || "Web Design"],
        description: data.description || "",
        client: data.client || "",
        duration: data.duration || "",
        services: data.services || "",
        websiteUrl: data.websiteUrl || "",
        image: data.image || "/photoshoot.jpg",
        heroImage: data.heroImage || data.image || "/photoshoot.jpg",
        gallery: Array.isArray(data.gallery) ? data.gallery : [],
        created: data.created || Date.now()
      };
    }
  } catch (e) {
    console.error("Error fetching project from Firestore:", e);
  }

  // Fallback to static projects in src/data/projects.ts
  const staticProject = getProjectBySlug(slug);
  if (staticProject) {
    return staticProject;
  }

  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getLiveProject(slug);

  if (!project) return {};
  return {
    alternates: { canonical: `/projects/${slug}` },
    title: `${project.title} | Case Study | Southern Edge`,
    description: project.description?.slice(0, 160) || `Explore ${project.title} case study.`,
  };
}

function ProjectGalleryView({ title, images }: { title: string; images: string[] }) {
  if (!images || images.length === 0) return null;

  // 1 Image layout
  if (images.length === 1) {
    return (
      <div className="w-full h-[280px] md:h-[520px] rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
        <img 
          src={images[0]} 
          alt={`${title} Gallery`} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
    );
  }

  // 2 Images layout (side-by-side split)
  if (images.length === 2) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {images.map((img, idx) => (
          <div key={idx} className="h-[280px] md:h-[480px] rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
            <img 
              src={img} 
              alt={`${title} Gallery ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </div>
        ))}
      </div>
    );
  }

  // 3 Images layout (1 full width top + 2 columns below)
  if (images.length === 3) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="md:col-span-2 h-[260px] md:h-[450px] rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
          <img 
            src={images[0]} 
            alt={`${title} Gallery 1`} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>
        {images.slice(1).map((img, idx) => (
          <div key={idx} className="h-[240px] md:h-[380px] rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
            <img 
              src={img} 
              alt={`${title} Gallery ${idx + 2}`} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </div>
        ))}
      </div>
    );
  }

  // 4 Images layout (2x2 grid)
  if (images.length === 4) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {images.map((img, idx) => (
          <div key={idx} className="h-[240px] md:h-[380px] rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
            <img 
              src={img} 
              alt={`${title} Gallery ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </div>
        ))}
      </div>
    );
  }

  // 5+ Images layout (Dynamic Bento Grid without duplication)
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
      {images.map((img, idx) => {
        let spanClass = "col-span-1 md:col-span-1 h-[200px] md:h-[260px] lg:h-[330px]";
        
        if (idx === 0) {
          spanClass = "col-span-1 md:col-span-4 h-[250px] md:h-[450px]";
        } else if (idx === 1 && images.length >= 6) {
          spanClass = "col-span-1 md:col-span-2 md:row-span-2 h-[250px] md:h-full min-h-[250px] md:min-h-[360px] lg:min-h-[464px]";
        } else if (idx === 6 && images.length >= 7) {
          spanClass = "col-span-1 md:col-span-4 h-[250px] md:h-[450px]";
        } else if (images.length === 5 && (idx === 1 || idx === 2 || idx === 3 || idx === 4)) {
          spanClass = "col-span-1 md:col-span-2 h-[240px] md:h-[360px]";
        }

        return (
          <div 
            key={idx} 
            className={`${spanClass} rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group`}
          >
            <img 
              src={img} 
              alt={`${title} Gallery ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </div>
        );
      })}
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getLiveProject(slug);

  if (!project) {
    notFound();
  }

  // Gather images from the project gallery or fallback
  const galleryImages = getProjectImages(slug, project.gallery);

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

        {/* Bento Grid Image Gallery (Only renders if gallery images exist) */}
        {galleryImages.length > 0 && (
          <div className="w-full mb-24">
            <h2 className="text-[28px] lg:text-[42px] font-medium text-[#30261C] mb-8 lg:mb-12 uppercase tracking-tight">
              Project Gallery
            </h2>
            <ProjectGalleryView title={project.title} images={galleryImages} />
          </div>
        )}
      </main>

      <div style={{ zoom: 0.8 }}><Cta /></div>
      <div className="block md:hidden" style={{ zoom: 0.8 }}><MobileFooter /></div>
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopFooter /></div>
    </div>
  );
}
