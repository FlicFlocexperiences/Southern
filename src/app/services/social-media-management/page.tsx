import { getServiceBySlug } from "@/data/services";
import { ServiceContent } from "@/components/ServiceContent";
import { LocationsGrid } from "@/components/LocationsGrid";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug("social-media-management");
  if (!service) return {};
  return {
    alternates: { canonical: `/services/social-media-management` },
    title: service.metaTitle || service.title,
    description: service.metaDescription || service.description1,
  };
}

export default function SocialMediaManagementServicePage() {
  const service = getServiceBySlug("social-media-management");

  if (!service) {
    notFound();
  }

  return (
    <>
      <main className="w-full pb-12">
        <ServiceContent service={service} />
      </main>
      <LocationsGrid serviceSlug="social-media-management" />
    </>
  );
}
