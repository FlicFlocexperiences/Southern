import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileFooter } from "@/components/mobile-footer";
import { Cta } from "@/components/cta";

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

        {/* Massive Full-Width Image */}
        <div className="w-full h-[50vh] lg:h-[85vh] rounded-[24px] lg:rounded-[40px] overflow-hidden mb-24">
          <img 
            src={project.heroImage} 
            alt={`${project.title} Hero`} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Optional Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="flex flex-col gap-8 lg:gap-12 w-full mb-24">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="w-full h-[40vh] lg:h-[70vh] rounded-[24px] lg:rounded-[40px] overflow-hidden">
                <img src={img} alt={`${project.title} Gallery ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </main>

      <div style={{ zoom: 0.8 }}><Cta /></div>
      <div className="block md:hidden" style={{ zoom: 0.8 }}><MobileFooter /></div>
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopFooter /></div>
    </div>
  );
}
