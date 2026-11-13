import { getServiceBySlug } from "@/data/services";
import { ServiceContent } from "@/components/ServiceContent";
import { SeoHubLinks } from "@/components/seo-hub";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug("meta-ads");
  if (!service) return {};
  return {
    alternates: { canonical: `/services/meta-ads` },
    title: service.metaTitle || service.title,
    description: service.metaDescription || service.description1,
  };
}

export default function MetaAdsServicePage() {
  const service = getServiceBySlug("meta-ads");

  if (!service) {
    notFound();
  }

  return (
    <>
      <main className="w-full pb-12">
        <ServiceContent service={service} />
      </main>
      <SeoHubLinks service="meta-ads" />
    </>
  );
}
