import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileFaq } from "@/components/mobile-faq";
import { DesktopFaq } from "@/components/desktop-faq";
import { Cta } from "@/components/cta";
import { services, getServiceBySlug } from "@/data/services";
import { ServiceContent } from "./ServiceContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Southern Edge Marketing`,
    description: service.description1,
  };
}

export default async function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-[#fffff0]">
      {/* Navigation Headers */}
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      <main className="w-full pt-32 lg:pt-40 px-6 lg:px-[90px] pb-24">
        <ServiceContent service={service} />
      </main>

      {/* FAQ, CTA and Footers */}
      <div style={{ zoom: 0.8 }}>
        <div className="block md:hidden"><MobileFaq /></div>
        <div className="hidden md:block"><DesktopFaq /></div>
      </div>
      <div style={{ zoom: 0.8 }}><Cta /></div>
      <div style={{ zoom: 0.8 }}>
        <div className="block md:hidden"><MobileFooter /></div>
        <div className="hidden md:block"><DesktopFooter /></div>
      </div>
    </div>
  );
}
