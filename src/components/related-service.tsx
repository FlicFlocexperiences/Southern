import Link from "next/link";

type Rel = { href: string; name: string; pitch: string };

const RULES: { test: RegExp; rel: Rel }[] = [
  { test: /meta[- ]ads|facebook|instagram[- ]ads|lead[- ]generation|roas|whatsapp|ad[- ]budget|paid[- ]ads|ppc/i, rel: { href: "/services/meta-ads", name: "Meta Ads Management", pitch: "Want leads from Facebook & Instagram? We plan, run and optimise Meta Ads around your cost per lead." } },
  { test: /shopify|e-?commerce|woocommerce|d2c|store/i, rel: { href: "/services/shopify-agency-dubai", name: "Shopify Development", pitch: "Need a fast Shopify store that converts? Our team designs and builds custom Shopify stores." } },
  { test: /\bios\b|app[- ]development|mobile[- ]app|pwa|android/i, rel: { href: "/services/app-development", name: "Mobile App Development", pitch: "Planning an app? We build native iOS and Android apps from MVP to App Store launch." } },
  { test: /seo|aeo|geo|search|google[- ]ranking|backlink|keyword/i, rel: { href: "/services/seo", name: "SEO Services", pitch: "Want to rank on page one? We handle technical SEO, content and link building." } },
  { test: /influencer|creator|ugc/i, rel: { href: "/services/influencer-marketing", name: "Influencer Marketing", pitch: "Turn creators into a sales channel with vetted influencers and partnership ads." } },
  { test: /social[- ]media|reels|content[- ]marketing/i, rel: { href: "/services/social-media-management", name: "Social Media Management", pitch: "Grow on Instagram and Facebook with content, community and paid social handled for you." } },
  { test: /brand|logo|colou?r|identity/i, rel: { href: "/services/branding", name: "Branding & Strategy", pitch: "Build a brand people remember, from positioning to visual identity." } },
];

const DEFAULT: Rel = { href: "/services/web-development", name: "Custom Website Development", pitch: "Need a website that brings in leads? We build fast, SEO-ready Next.js and Shopify websites." };

export function pickRelatedService(text: string): Rel {
  return RULES.find((r) => r.test.test(text))?.rel ?? DEFAULT;
}

export const RelatedService = ({ text }: { text: string }) => {
  const rel = pickRelatedService(text);
  return (
    <aside className="mt-12 rounded-2xl border border-[#de5e18]/30 bg-[#fff6ef] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
      <div>
        <p className="text-[12px] font-bold uppercase tracking-wider text-[#de5e18] mb-2">Related service</p>
        <p className="text-[20px] md:text-[22px] font-bold text-[#0f0f0f] mb-1">
          <Link href={rel.href} className="hover:text-[#de5e18] transition-colors">{rel.name}</Link>
        </p>
        <p className="text-[15px] text-black/70 leading-relaxed max-w-[520px]">{rel.pitch}</p>
      </div>
      <div className="flex flex-wrap gap-3 shrink-0">
        <Link href={rel.href} className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-[14px] font-medium hover:border-[#de5e18] transition-colors">
          View {rel.name}
        </Link>
        <Link href="/contact" className="rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] px-5 py-2.5 text-[14px] font-medium text-white shadow-[0px_6px_16px_rgba(222,94,24,0.35)]">
          Get a free quote
        </Link>
      </div>
    </aside>
  );
};
