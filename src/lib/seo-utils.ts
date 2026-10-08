/**
 * SEO Utility Functions for Southern Edge Marketing Codebase
 * Adheres strictly to screaming_frog_seo_guidelines.txt
 */

/**
 * Strips 'nofollow' from any internal outlinks within raw HTML strings.
 * Internal links must NEVER have rel="nofollow" according to Section 7 of Screaming Frog SEO guidelines
 * ("Never use rel='nofollow' on standard internal navigation links (avoid 'Links: Internal Nofollow Outlinks')").
 *
 * @param html The raw HTML string (e.g., from Firestore blog/article content)
 * @returns Sanitized HTML string with nofollow removed from internal links
 */
export function cleanInternalNofollow(html: string): string {
  if (!html) return "";

  return html.replace(/<a\b([^>]*)>/gi, (match, attrs) => {
    // Extract href value
    const hrefMatch = attrs.match(/\bhref=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    if (!hrefMatch) return match;

    const href = (hrefMatch[1] || hrefMatch[2] || hrefMatch[3] || "").trim();

    // Determine if the destination is internal
    const isInternal =
      href.startsWith("/") ||
      href.startsWith("#") ||
      /^https?:\/\/(www\.)?southernedgemarketing\.com(\/.*)?$/i.test(href) ||
      (!href.startsWith("http://") &&
       !href.startsWith("https://") &&
       !href.startsWith("mailto:") &&
       !href.startsWith("tel:") &&
       !href.startsWith("javascript:") &&
       !href.startsWith("//"));

    if (isInternal) {
      // Remove 'nofollow' from rel attribute
      let newAttrs = attrs.replace(
        /\brel=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i,
        (_relMatch: string, p1?: string, p2?: string, p3?: string) => {
          const rawRel = p1 || p2 || p3 || "";
          const remainingTokens = rawRel
            .split(/\s+/)
            .filter((token: string) => token.toLowerCase() !== "nofollow" && token.trim().length > 0);

          if (remainingTokens.length === 0) {
            return "";
          }
          return `rel="${remainingTokens.join(" ")}"`;
        }
      );

      // Clean up whitespace inside the opening tag
      newAttrs = newAttrs.replace(/\s{2,}/g, " ").trim();
      return `<a ${newAttrs}>`;
    }

    return match;
  });
}

/**
 * Calibrates meta descriptions to strictly satisfy Screaming Frog SEO rules:
 * - Optimal Character Count: 120 - 150 characters (never < 70 chars, never > 155 chars)
 * - Safe Estimated Pixels: 700 - 920 pixels (never < 400 pixels, never > 960 pixels)
 * - Avoids broken fragments and incomplete sentences
 */
export function calibrateMetaDescription(
  rawDesc: string | undefined | null,
  contextTitle: string = "Digital Marketing Guide"
): string {
  const cleanTitle = contextTitle.replace(/\s*\|\s*Southern Edge.*$/i, '').trim();
  const cleaned = (rawDesc || "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

  // If already in the ideal SERP sweet spot (120 to 155 characters)
  if (cleaned.length >= 120 && cleaned.length <= 155) {
    return cleaned;
  }

  // If too long (> 155 characters): trim at word boundary safely without breaking words
  if (cleaned.length > 155) {
    const trimmed = cleaned.substring(0, 150).replace(/\s+\S*$/, "").trim();
    return trimmed.endsWith(".") ? trimmed : `${trimmed}.`;
  }

  // If moderately short (70 to 119 characters): expand cleanly with brand value context
  if (cleaned.length >= 70 && cleaned.length < 120) {
    const base = cleaned.replace(/[.]+$/, "").trim();
    const withSuffix = `${base}. Learn proven strategies with Southern Edge Marketing.`;
    if (withSuffix.length <= 155 && withSuffix.length >= 120) {
      return withSuffix;
    }
    const shortSuffix = `${base}. Read our expert guide at Southern Edge.`;
    if (shortSuffix.length <= 155 && shortSuffix.length >= 120) {
      return shortSuffix;
    }
    if (withSuffix.length > 155) {
      const cut = withSuffix.substring(0, 150).replace(/\s+\S*$/, "").trim();
      return cut.endsWith(".") ? cut : `${cut}.`;
    }
    return withSuffix;
  }

  // If very short (< 70 chars) or empty (prevents "Below 400 Pixels" / "Below 70 Characters")
  const primaryTemplate = `Explore our expert guide on ${cleanTitle}. Discover actionable insights, proven marketing frameworks, and growth tactics.`;
  if (primaryTemplate.length >= 120 && primaryTemplate.length <= 155) {
    return primaryTemplate;
  }

  const secondaryTemplate = `Master ${cleanTitle} with actionable strategies, expert frameworks, and step-by-step insights from Southern Edge Marketing.`;
  if (secondaryTemplate.length >= 120 && secondaryTemplate.length <= 155) {
    return secondaryTemplate;
  }

  if (primaryTemplate.length > 155) {
    const cut = primaryTemplate.substring(0, 150).replace(/\s+\S*$/, "").trim();
    return cut.endsWith(".") ? cut : `${cut}.`;
  }

  return `Explore actionable strategies and proven frameworks for ${cleanTitle.substring(0, 45)}. Scale your growth with Southern Edge Marketing.`;
}

/**
 * Calibrates child page meta title for Next.js (where layout appends " | Southern Edge" - 16 chars).
 * Final target length after template: 45 - 58 characters (never < 30 chars, never > 60 chars).
 * Therefore, child input should be between 20 and 42 characters.
 */
export function calibrateMetaTitle(
  rawTitle: string | undefined | null,
  fallback: string = "Digital Marketing Guide"
): string {
  let title = (rawTitle || fallback)
    .replace(/\s*\|\s*Southern Edge.*$/i, '')
    .trim();

  // If title is too long for " | Southern Edge" (16 chars)
  if (title.length > 42) {
    const trimmed = title.substring(0, 42).replace(/\s+\S*$/, "").trim();
    title = trimmed.length >= 20 ? trimmed : title.substring(0, 42);
  }

  if (title.length < 20) {
    title = `${title} Guide 2026`;
  }

  return title;
}
