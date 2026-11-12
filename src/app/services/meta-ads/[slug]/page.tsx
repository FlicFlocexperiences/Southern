import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoPage, getSeoPagesFor } from "@/data/seo-pages";
import { SeoLandingPage } from "@/components/seo-landing-page";

const SERVICE = "meta-ads" as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return getSeoPagesFor(SERVICE).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(SERVICE, slug);
  if (!page) return {};
  const url = `/services/${SERVICE}/${slug}`;
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url, type: "website" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSeoPage(SERVICE, slug);
  if (!page) notFound();
  return <SeoLandingPage page={page} />;
}
