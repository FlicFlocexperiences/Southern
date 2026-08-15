import { getServiceBySlug } from "@/data/services";
import { ServiceContent } from "@/components/ServiceContent";
import { LocationsGrid } from "@/components/LocationsGrid";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug("app-development");
  if (!service) return {};
  return {
    alternates: { canonical: `/services/app-development` },
    title: service.metaTitle || service.title,
    description: service.metaDescription || service.description1,
  };
}

export default function AppDevelopmentServicePage() {
  const service = getServiceBySlug("app-development");

  if (!service) {
    notFound();
  }

  return (
    <>
      <main className="w-full pb-12">
        <ServiceContent service={service} />
      </main>
      <LocationsGrid serviceSlug="app-development" />
    </>
  );
}
