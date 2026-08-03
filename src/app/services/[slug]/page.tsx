import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";

import { Cta } from "@/components/cta";
import { services, getServiceBySlug } from "@/data/services";
import { ServiceContent } from "@/components/ServiceContent";
import { LocationsGrid } from "@/components/LocationsGrid";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  const params = services.map((service) => ({
    slug: service.slug,
  }));
  params.push({ slug: "website-development" });
  params.push({ slug: "branding-strategy" });
  params.push({ slug: "seo-services" });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle || `${service.title} | Southern Edge Marketing`,
    description: service.metaDescription || service.description1,
  };
}

export default async function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-[#f2decc]">
      {/* Navigation Headers */}
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      <main className="w-full pb-12">
        <ServiceContent service={service} />
      </main>

      {["web-development", "app-development", "social-media-management", "seo", "branding"].includes(service.slug) && (
        <LocationsGrid serviceSlug={service.slug} />
      )}

      {/* CTA and Footers */}
      <div className="md:[zoom:0.8]"><Cta /></div>
      <div className="md:[zoom:0.8]">
        <div className="block md:hidden"><MobileFooter /></div>
        <div className="hidden md:block"><DesktopFooter /></div>
      </div>
    </div>
  );
}
