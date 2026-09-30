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
