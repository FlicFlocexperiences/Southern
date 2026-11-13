import { getSeoPagesFor, type SeoService } from "@/data/seo-pages";
import { SeoHubGrid } from "@/components/seo-hub-links";

export function SeoHubLinks({ service, excludeSlug, title, intro }: { service: SeoService; excludeSlug?: string; title?: string; intro?: string }) {
  const items = getSeoPagesFor(service)
    .filter((p) => p.slug !== excludeSlug)
    .map(({ slug, label, kind }) => ({ slug, label, kind }));
  return <SeoHubGrid service={service} items={items} title={title} intro={intro} />;
}
