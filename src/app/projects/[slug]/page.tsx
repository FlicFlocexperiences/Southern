import { notFound } from "next/navigation";
import { getProjectBySlug, projects as staticProjects, Project } from "@/data/projects";
import { customCaseStudies } from "@/data/case-studies";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileFooter } from "@/components/mobile-footer";
import { Cta } from "@/components/cta";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Metadata } from "next";
import Link from "next/link";
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
      const imageFiles = files
        .filter((file) => /\.(jpg|jpeg|png|svg|webp)$/i.test(file))
        .sort((a, b) => {
          const numA = parseInt(a.match(/\d+/)?.[0] || "0", 10);
          const numB = parseInt(b.match(/\d+/)?.[0] || "0", 10);
          return numA - numB;
        });

      if (imageFiles.length > 0) {
        return imageFiles.map((file) => `/${folderName}/${file}`);
      }
    } catch {
      // ignore
    }
  }

  return [];
}

async function getLiveProject(slug: string): Promise<Project | null> {
  try {
    const q = query(collection(db, "projects"), where("slug", "==", slug));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const docData = querySnapshot.docs[0].data() as Project;
      return docData;
    }
  } catch {
    // fallback
  }

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

function getProjectCaseStudyContent(project: Project): string {
  // If a bespoke case study is registered for this specific project slug, use it
  const study = customCaseStudies[project.slug] || 
    customCaseStudies[project.slug.replace(/_/g, "-")] || 
    customCaseStudies[project.slug.toLowerCase()];

  if (study) {
    const featuresList = study.features
      .map(
        (f) => `
        <div style="margin-bottom: 1.25rem;">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: #3e2723; margin-bottom: 0.25rem;">✦ ${f.title}</h3>
          <p style="margin-top: 0; color: #5d4037;">${f.desc}</p>
        </div>`
      )
      .join("");

    return `
      <p class="lead">${study.lead}</p>
      
      <h2>The Strategic Challenge</h2>
      <p>${study.challenge}</p>
      
      <h2>The Southern Edge Solution</h2>
      <p>${study.solution}</p>
      
      <h2>Key Features & Platform Innovations</h2>
      ${featuresList}
      
      <h2>Measurable Business Impact</h2>
      <p>${study.impact}</p>
    `;
  }

  // If the user entered custom rich content in TipTap (without old boilerplate), prioritize it
  if (project.content && project.content.trim().length > 300 && !project.content.includes("Modern digital platforms don't just display information")) {
    return project.content;
  }

  const category = project.tag || project.category || "Web Design";
  const services = project.services || "Digital Strategy, UI/UX Architecture, Custom Engineering";

  return `
    <p class="lead">${project.title} is a premier ${category.toLowerCase()} platform engineered by Southern Edge to deliver a high-converting digital home tailored for ${project.client || project.title}.</p>
    
    <h2>Project Objectives</h2>
    <p>${project.description || `Delivering an industry-leading digital presence with streamlined user journeys, lightning-fast rendering, and intuitive navigation.`}</p>
    
    <h2>Delivered Architecture & Services</h2>
    <p>Our multidisciplinary team developed a customized technical stack including ${services}. Every layout and interactive flow was purpose-built to guide visitors seamlessly from initial curiosity to verified conversion.</p>
    
    <h2>Key Highlights</h2>
    <div style="margin-bottom: 1.25rem;">
      <h3 style="font-size: 1.15rem; font-weight: 700; color: #3e2723; margin-bottom: 0.25rem;">✦ Custom Brand Aesthetic</h3>
      <p style="margin-top: 0; color: #5d4037;">A bespoke design language reflecting the distinct identity and premium stature of ${project.client || project.title}.</p>
    </div>
    <div style="margin-bottom: 1.25rem;">
      <h3 style="font-size: 1.15rem; font-weight: 700; color: #3e2723; margin-bottom: 0.25rem;">✦ Frictionless Mobile Checkout & Intake</h3>
      <p style="margin-top: 0; color: #5d4037;">Thumb-friendly UI patterns and minimal step transitions engineered for high mobile conversion rates.</p>
    </div>
    
    <h2>Measurable Outcomes</h2>
    <p>The platform achieved exceptional performance metrics with sub-second page loads, significant reductions in bounce rates, and a measurable increase in qualified client inquiries.</p>
  `;
}

function ProjectGalleryView({ title, images }: { title: string; images: string[] }) {
  if (!images || images.length === 0) return null;

  // 1 Image layout - Uncropped Full View
  if (images.length === 1) {
    return (
      <div className="w-full rounded-[24px] lg:rounded-[36px] overflow-hidden bg-white border border-gray-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative group p-3 sm:p-6 md:p-8 flex items-center justify-center">
        <img 
          src={images[0]} 
          alt={`${title} Gallery`} 
          className="w-full h-auto max-h-[850px] object-contain rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]" 
        />
      </div>
    );
  }

  // 2 Images layout (side-by-side split)
  if (images.length === 2) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {images.map((img, idx) => (
          <div key={idx} className="h-[280px] md:h-[480px] rounded-[24px] lg:rounded-[36px] overflow-hidden bg-white border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group flex items-center justify-center p-2 sm:p-4">
            <img 
              src={img} 
              alt={`${title} Gallery ${idx + 1}`} 
              className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" 
            />
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
  const caseStudyHtml = getProjectCaseStudyContent(project);

  return (
    <div className="w-full min-h-screen bg-[#fdfaf6] text-[#3e2723]">
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      <main className="w-full pt-28 md:pt-36 lg:pt-40 px-4 sm:px-6 md:px-10 lg:px-[90px] pb-24 max-w-[1600px] mx-auto">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-[14px] font-bold text-gray-500 hover:text-[#de5e18] transition-colors group cursor-pointer"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Hero Title & Headline */}
        <div className="text-center max-w-5xl mx-auto mb-10 md:mb-14">
          <h1 className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[62px] font-extrabold text-[#3e2723] tracking-tight leading-[1.15] mb-6">
            {project.title}
            {project.description && (
              <span className="font-normal text-[#5d4037]/85 block sm:inline">
                , {project.description}
              </span>
            )}
          </h1>

          {/* Badges / Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {project.categories && project.categories.map((cat) => (
              <span 
                key={cat}
                className="px-4 py-1.5 rounded-full text-[13px] font-bold bg-white border border-gray-200/80 text-gray-700 shadow-xs"
              >
                {cat}
              </span>
            ))}
            {project.projectType && (
              <span className="px-4 py-1.5 rounded-full text-[13px] font-bold bg-[#de5e18]/10 border border-[#de5e18]/20 text-[#de5e18] shadow-xs">
                {project.projectType}
              </span>
            )}
            {project.flag && (
              <span className="px-4 py-1.5 rounded-full text-[13px] font-bold bg-white border border-gray-200/80 text-gray-700 shadow-xs flex items-center gap-1.5">
                <span>Origin:</span>
                <span>{project.flag}</span>
              </span>
            )}
          </div>
        </div>

        {/* Device Showcase Mockup Window */}
        <div className="w-full max-w-6xl mx-auto mb-16 lg:mb-24">
          <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-gray-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
            {/* Browser Top Chrome */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-gray-50/80 border-b border-gray-200/60">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              </div>
              <div className="bg-white px-6 py-1 rounded-full text-[11px] font-semibold text-gray-400 border border-gray-200/50 shadow-xs max-w-xs truncate">
                {project.websiteUrl ? project.websiteUrl.replace(/^https?:\/\//, '') : `${project.slug}.com`}
              </div>
              <div className="w-10"></div>
            </div>

            {/* Showcase Image Display */}
            <div className="w-full relative bg-[#f7f5f0] p-4 sm:p-8 flex items-center justify-center">
              <img 
                src={project.heroImage || project.image} 
                alt={`${project.title} Showcase Mockup`} 
                className="w-full h-auto max-h-[700px] object-contain rounded-2xl shadow-sm transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>

        {/* Two-Column Deep Case Study & Specifications Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-32 items-start">
          
          {/* Left Column: Floating Specifications Card */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-32">
            <div className="bg-white/90 backdrop-blur-md rounded-[28px] p-6 sm:p-8 border border-gray-200/80 shadow-lg space-y-6">
              
              {/* Type */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <span className="text-[13px] font-bold text-gray-400 uppercase tracking-wider">Type:</span>
                <span className="text-[15px] font-extrabold text-[#3e2723]">
                  {project.projectType || "Custom Code"}
                </span>
              </div>

              {/* Category */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <span className="text-[13px] font-bold text-gray-400 uppercase tracking-wider">Category:</span>
                <span className="text-[15px] font-extrabold text-[#3e2723]">
                  {project.category}
                </span>
              </div>

              {/* Client */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <span className="text-[13px] font-bold text-gray-400 uppercase tracking-wider">Client:</span>
                <span className="text-[15px] font-extrabold text-[#3e2723]">
                  {project.client || project.title}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <span className="text-[13px] font-bold text-gray-400 uppercase tracking-wider">Duration:</span>
                <span className="text-[15px] font-extrabold text-[#3e2723]">
                  {project.duration || "6 Weeks"}
                </span>
              </div>

              {/* Services */}
              {project.services && (
                <div className="flex flex-col border-b border-gray-100 pb-4">
                  <span className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Services:</span>
                  <span className="text-[14px] font-medium text-[#5d4037] leading-relaxed">
                    {project.services}
                  </span>
                </div>
              )}

              {/* Visit Website Button matching Southern Inverted Orange Theme */}
              {project.websiteUrl && (
                <div className="pt-3">
                  <a 
                    href={project.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full h-[54px] bg-gradient-to-b from-[#ffa479] to-[#de5e18] hover:from-[#ff9360] hover:to-[#cb5210] rounded-full flex items-center justify-between pl-5 pr-2 gap-3 group hover:scale-[1.02] transition-all duration-300 shadow-[0_6px_20px_rgba(222,94,24,0.35)] hover:shadow-[0_8px_24px_rgba(222,94,24,0.5)] cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                      <span className="text-white text-[15px] font-bold tracking-tight whitespace-nowrap">
                        Visit Website
                      </span>
                    </div>
                    <div className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center relative overflow-hidden group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300 shadow-[0_2px_6px_rgba(0,0,0,0.15)] shrink-0">
                      <svg 
                        className="w-4 h-4 text-[#de5e18] relative z-10" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Deep Case Study Storytelling Body */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="case-study-content max-w-3xl">
              <style>{`
                .case-study-content h1 {
                  font-size: 2.2rem;
                  font-weight: 800;
                  color: #3e2723;
                  margin-top: 1.8rem;
                  margin-bottom: 0.8rem;
                  line-height: 1.2;
                  letter-spacing: -0.02em;
                }
                .case-study-content h2 {
                  font-size: 1.75rem;
                  font-weight: 800;
                  color: #3e2723;
                  margin-top: 2.2rem;
                  margin-bottom: 0.8rem;
                  line-height: 1.25;
                  letter-spacing: -0.01em;
                }
                .case-study-content h3 {
                  font-size: 1.35rem;
                  font-weight: 700;
                  color: #3e2723;
                  margin-top: 1.6rem;
                  margin-bottom: 0.6rem;
                }
                .case-study-content p {
                  font-size: 1.1rem;
                  line-height: 1.8;
                  color: #5d4037;
                  margin-bottom: 1.4rem;
                  font-weight: 400;
                }
                .case-study-content p.lead,
                .case-study-content > p:first-of-type {
                  font-size: 1.25rem;
                  line-height: 1.7;
                  color: #3e2723;
                  font-weight: 500;
                  margin-bottom: 1.8rem;
                }
                .case-study-content ul, .case-study-content ol {
                  margin: 1.2rem 0;
                  padding-left: 1.8rem;
                  color: #5d4037;
                  font-size: 1.05rem;
                  line-height: 1.7;
                }
                .case-study-content ul { list-style-type: disc; }
                .case-study-content ol { list-style-type: decimal; }
                .case-study-content li { margin-bottom: 0.5rem; }
                .case-study-content blockquote {
                  border-left: 4px solid #de5e18;
                  padding-left: 1.2rem;
                  margin: 1.6rem 0;
                  font-style: italic;
                  color: #3e2723;
                  font-size: 1.15rem;
                }
                .case-study-content img {
                  border-radius: 1.2rem;
                  margin: 2rem 0;
                  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
              `}</style>
              
              <div 
                dangerouslySetInnerHTML={{ __html: caseStudyHtml }}
              />
            </div>
          </div>
        </div>

        {/* Bento Grid Image Gallery (Only renders if distinct gallery images exist) */}
        {(galleryImages.length > 1 || (galleryImages.length === 1 && galleryImages[0] !== (project.heroImage || project.image))) && (
          <div className="w-full mb-24">
            <div className="flex items-center gap-2 text-[13px] font-bold text-[#de5e18] uppercase tracking-wider mb-2">
              <span>VISUAL SHOWCASE</span>
              <span>•</span>
            </div>
            <h2 className="text-[32px] lg:text-[46px] font-bold text-[#3e2723] mb-8 lg:mb-12 tracking-tight">
              PROJECT GALLERY
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
