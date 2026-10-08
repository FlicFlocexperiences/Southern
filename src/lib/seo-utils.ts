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

const READABILITY_REPLACEMENTS: [RegExp, string][] = [
  [/\bin an era of stringent data regulations\b/gi, 'under strict privacy laws'],
  [/\bin an era of stringent data privacy\b/gi, 'under strict privacy laws'],
  [/\bin an era of strict data regulations\b/gi, 'under strict privacy laws'],
  [/\bcommercial enterprise ecosystems\b/gi, 'business markets'],
  [/\bcommercial enterprise ecosystem\b/gi, 'business market'],
  [/\bcomprehensive corporate brand architectures\b/gi, 'complete brand setups'],
  [/\bcomprehensive corporate brand architecture\b/gi, 'complete brand setup'],
  [/\bcomprehensive product development lifecycle\b/gi, 'full product build process'],
  [/\bcomprehensive product development\b/gi, 'complete product build'],
  [/\bcategory-defining brand architectures\b/gi, 'strong brand setups'],
  [/\bcategory-defining brand architecture\b/gi, 'strong brand setup'],
  [/\bcategory-defining market narratives\b/gi, 'clear market narratives'],
  [/\bcategory-defining market narrative\b/gi, 'clear market narrative'],
  [/\bcategory-defining enterprise brand\b/gi, 'standout enterprise brand'],
  [/\bmonolithic legacy architectures\b/gi, 'older legacy setups'],
  [/\bmonolithic legacy systems\b/gi, 'older legacy setups'],
  [/\bmonolithic legacy architecture\b/gi, 'older legacy setup'],
  [/\bmonolithic legacy system\b/gi, 'older legacy setup'],
  [/\bmonolithic architecture\b/gi, 'legacy setup'],
  [/\bmilitary-grade security protocols\b/gi, 'bank-grade security'],
  [/\bmilitary-grade security protocol\b/gi, 'bank-grade security'],
  [/\bmilitary-grade security and data privacy\b/gi, 'strict security and privacy'],
  [/\bmilitary-grade security\b/gi, 'bank-grade security'],
  [/\buncompromising security and compliance\b/gi, 'strict security and compliance'],
  [/\buncompromising security and data privacy\b/gi, 'strict security and privacy'],
  [/\buncompromising security\b/gi, 'strict security'],
  [/\bproactively identify and neutralize\b/gi, 'quickly find and fix'],
  [/\bproactively identify and fix\b/gi, 'quickly find and fix'],
  [/\bproactively neutralize\b/gi, 'quickly stop'],
  [/\bdiminishing returns\b/gi, 'fewer leads'],
  [/\bdiminishing return\b/gi, 'fewer leads'],
  [/\binbound B2B contract inquiries\b/gi, 'new business leads'],
  [/\binbound contract inquiries\b/gi, 'new client leads'],
  [/\binbound contract inquiry\b/gi, 'new client lead'],
  [/\bfrictionless checkout pathways\b/gi, 'fast checkout flows'],
  [/\bfrictionless checkout pathway\b/gi, 'fast checkout flow'],
  [/\bfrictionless data retrieval\b/gi, 'instant page loads'],
  [/\bfrictionless user experience\b/gi, 'smooth user experience'],
  [/\bmitigating financial exposure\b/gi, 'lowering business risk'],
  [/\bmitigate financial exposure\b/gi, 'lower business risk'],
  [/\bclosed-loop CRM attribution\b/gi, 'direct CRM tracking'],
  [/\bclosed-loop CRM analytics\b/gi, 'direct CRM analytics'],
  [/\bexceptional page experiences\b/gi, 'fast page speed'],
  [/\bmeasuring critical performance indicators\b/gi, 'tracking key business metrics'],
  [/\bmeasure critical performance indicators\b/gi, 'track key business metrics'],
  [/\bseamless API integrations\b/gi, 'smooth API links'],
  [/\bseamless API integration\b/gi, 'smooth API links'],
  [/\bseamlessly integrate\b/gi, 'easily connect'],
  [/\bseamlessly integrates\b/gi, 'easily connects'],
  [/\bseamlessly integrated\b/gi, 'easily connected'],
  [/\bseamlessly connect\b/gi, 'easily link'],
  [/\bseamlessly connects\b/gi, 'easily links'],
  [/\bseamlessly connected\b/gi, 'easily linked'],
  [/\bsignificantly reducing initial time-to-market\b/gi, 'speeding up launch times'],
  [/\bsignificantly reducing time-to-market\b/gi, 'speeding up launch times'],
  [/\bprioritizing lean, optimized code\b/gi, 'writing clean, fast code'],
  [/\bprioritizing lean code\b/gi, 'writing clean code'],
  [/\bsearch engine optimization\b/gi, 'search optimization'],
  [/\bsearch engine optimizations\b/gi, 'search optimization'],
  [/\bauthoritative backlink profiles\b/gi, 'strong backlink profiles'],
  [/\bauthoritative backlink profile\b/gi, 'strong backlink profile'],
  [/\bauthoritative backlinks\b/gi, 'trusted backlinks'],
  [/\bauthoritative backlink\b/gi, 'trusted backlink'],
  [/\btransactional search terms\b/gi, 'buyer search terms'],
  [/\btransactional search term\b/gi, 'buyer search term'],
  [/\btransactional queries\b/gi, 'buyer queries'],
  [/\btransactional query\b/gi, 'buyer query'],
  [/\btransliterated keywords\b/gi, 'local search phrases'],
  [/\btransliterated keyword\b/gi, 'local search phrase'],
  [/\bgeographic search queries\b/gi, 'local searches'],
  [/\bgeographic search query\b/gi, 'local search'],
  [/\bcommercial search queries\b/gi, 'business searches'],
  [/\bcommercial search query\b/gi, 'business search'],
  [/\bindustrial search queries\b/gi, 'factory searches'],
  [/\bindustrial search query\b/gi, 'factory search'],
  [/\bmaterial specifications\b/gi, 'material specs'],
  [/\bmaterial specification\b/gi, 'material spec'],
  [/\bengineering documentation\b/gi, 'tech docs'],
  [/\bwholesale firms\b/gi, 'wholesalers'],
  [/\bwholesale operations\b/gi, 'wholesale firms'],
  [/\bprocurement officers\b/gi, 'buyers'],
  [/\bprocurement officer\b/gi, 'buyer'],
  [/\bprocurement managers\b/gi, 'buyers'],
  [/\bprocurement manager\b/gi, 'buyer'],
  [/\bcorporate executives\b/gi, 'business leaders'],
  [/\bcorporate executive\b/gi, 'business leader'],
  [/\bdecision-makers\b/gi, 'buyers'],
  [/\bdecision-maker\b/gi, 'buyer'],
  [/\bcommercial corridors\b/gi, 'business hubs'],
  [/\bcommercial corridor\b/gi, 'business hub'],
  [/\bcommercial environment\b/gi, 'business market'],
  [/\bcommercial landscape\b/gi, 'business scene'],
  [/\bcommercial activity\b/gi, 'business activity'],
  [/\bcumulative layout shifts\b/gi, 'layout shifts'],
  [/\bcumulative layout shift\b/gi, 'layout shift'],
  [/\blargest contentful paint\b/gi, 'load speed'],
  [/\btopical authority\b/gi, 'topic trust'],
  [/\bsustainable competitive advantage\b/gi, 'lasting market edge'],
  [/\bcompetitive advantage\b/gi, 'market edge'],
  [/\bdiscerning consumers\b/gi, 'smart buyers'],
  [/\bdiscerning consumer\b/gi, 'smart buyer'],
  [/\bconsumer purchasing psychology\b/gi, 'buyer habits'],
  [/\bpurchasing psychology\b/gi, 'buyer habits'],
  [/\bconsumer psychology\b/gi, 'buyer habits'],
  [/\bcommanding premium pricing\b/gi, 'charging premium rates'],
  [/\bcommand premium pricing\b/gi, 'charge premium rates'],
  [/\btransformations\b/gi, 'shifts'],
  [/\btransformation\b/gi, 'shift'],
  [/\bmethodologies\b/gi, 'methods'],
  [/\bmethodology\b/gi, 'method'],
  [/\barchitectures\b/gi, 'setups'],
  [/\barchitecture\b/gi, 'setup'],
  [/\binfrastructures\b/gi, 'systems'],
  [/\binfrastructure\b/gi, 'system'],
  [/\bimplementations\b/gi, 'rollouts'],
  [/\bimplementation\b/gi, 'setup'],
  [/\bfunctionalities\b/gi, 'tools'],
  [/\bfunctionality\b/gi, 'features'],
  [/\bspecifications\b/gi, 'specs'],
  [/\bspecification\b/gi, 'spec'],
  [/\bresponsiveness\b/gi, 'speed'],
  [/\bcomprehensive\b/gi, 'complete'],
  [/\bsophisticated\b/gi, 'modern'],
  [/\bvulnerabilities\b/gi, 'security flaws'],
  [/\bvulnerability\b/gi, 'security flaw'],
  [/\butilizing\b/gi, 'using'],
  [/\butilize\b/gi, 'use'],
  [/\butilizes\b/gi, 'uses'],
  [/\butilized\b/gi, 'used'],
  [/\bleveraging\b/gi, 'using'],
  [/\bleverage\b/gi, 'use'],
  [/\bleverages\b/gi, 'uses'],
  [/\bleveraged\b/gi, 'used'],
  [/\bincorporating\b/gi, 'adding'],
  [/\bincorporates\b/gi, 'includes'],
  [/\bincorporate\b/gi, 'include'],
  [/\bincorporated\b/gi, 'included'],
  [/\bfacilitating\b/gi, 'helping'],
  [/\bfacilitate\b/gi, 'help'],
  [/\bfacilitates\b/gi, 'helps'],
  [/\bfacilitated\b/gi, 'helped'],
  [/\bestablishing\b/gi, 'building'],
  [/\bestablishes\b/gi, 'builds'],
  [/\bestablish\b/gi, 'build'],
  [/\bestablished\b/gi, 'built'],
  [/\bmaximizing\b/gi, 'boosting'],
  [/\bmaximize\b/gi, 'boost'],
  [/\bmaximizes\b/gi, 'boosts'],
  [/\bmaximized\b/gi, 'boosted'],
  [/\boptimizing\b/gi, 'refining'],
  [/\boptimized\b/gi, 'streamlined'],
  [/\bcapabilities\b/gi, 'features'],
  [/\bcapability\b/gi, 'feature'],
  [/\bsubstantially\b/gi, 'greatly'],
  [/\bpredominantly\b/gi, 'mostly'],
  [/\bdemographics\b/gi, 'audiences'],
  [/\bdemographic\b/gi, 'market'],
  [/\bdisruptive\b/gi, 'modern'],
  [/\bindispensable\b/gi, 'vital'],
  [/\bparamount\b/gi, 'critical'],
  [/\bheterogeneous\b/gi, 'varied'],
  [/\bconcomitantly\b/gi, 'also'],
  [/\binstantaneously\b/gi, 'instantly'],
  [/\bexhaustive\b/gi, 'thorough'],
  [/\bmeticulously\b/gi, 'carefully'],
  [/\bmeticulous\b/gi, 'careful'],
  [/\btechnological\b/gi, 'tech'],
  [/\bastronomical\b/gi, 'very fast'],
  [/\bcustomizations\b/gi, 'custom options'],
  [/\bcustomization\b/gi, 'custom options'],
  [/\bcustomized\b/gi, 'tailored'],
  [/\bdelivering\b/gi, 'giving'],
  [/\bdisseminating\b/gi, 'sharing'],
  [/\bdisseminate\b/gi, 'share'],
  [/\bexponentially\b/gi, 'rapidly'],
  [/\bexponential\b/gi, 'rapid'],
  [/\bsynchronization\b/gi, 'syncing'],
  [/\bdegradation in performance\b/gi, 'slowdown'],
  [/\bdegradation\b/gi, 'slowdown'],
  [/\bcountermeasures\b/gi, 'protections'],
  [/\bcountermeasure\b/gi, 'protection'],
  [/\bnavigating\b/gi, 'leading'],
  [/\bconversions\b/gi, 'sales'],
  [/\bconversion\b/gi, 'sale'],
  [/\bdiminishing\b/gi, 'dropping'],
  [/\bgranular\b/gi, 'detailed'],
  [/\bmitigate\b/gi, 'cut'],
  [/\bmitigating\b/gi, 'cutting'],
  [/\bmitigates\b/gi, 'cuts'],
  [/\bhyper-accelerated\b/gi, 'rapid'],
  [/\bhyper-personalized\b/gi, 'tailored'],
  [/\bhyper-intuitive\b/gi, 'easy-to-use'],
  [/\bhyper-scalable\b/gi, 'scalable'],
  [/\bdiscussions\b/gi, 'talks'],
  [/\brequirements\b/gi, 'rules'],
  [/\brequirement\b/gi, 'rule'],
  [/\bexperienced\b/gi, 'proven'],
  [/\bconglomerates\b/gi, 'large firms'],
  [/\bconglomerate\b/gi, 'large firm'],
  [/\bconglomerates'\b/gi, 'firms\''],
  [/\bconglomerate's\b/gi, 'firm\'s'],
  [/\bauthoritative\b/gi, 'trusted'],
  [/\bconsulting\b/gi, 'advisory'],
  [/\bconsultation\b/gi, 'consult'],
  [/\bconsultations\b/gi, 'consults'],
  [/\bacquisition\b/gi, 'growth'],
  [/\bacquisitions\b/gi, 'growth'],
  [/\bexceptional\b/gi, 'top-tier'],
  [/\bexclusively\b/gi, 'solely'],
  [/\bprospective\b/gi, 'future'],
  [/\bprospects\b/gi, 'buyers'],
  [/\bprospect\b/gi, 'buyer'],
  [/\binitiatives\b/gi, 'projects'],
  [/\binitiative\b/gi, 'project'],
  [/\binfluential\b/gi, 'leading'],
  [/\btechnological\b/gi, 'tech'],
  [/\btechnologies\b/gi, 'tech tools'],
  [/\btechnology\b/gi, 'tech'],
  [/\bextraordinary\b/gi, 'strong'],
  [/\bcommercial velocity\b/gi, 'market speed'],
  [/\boperational friction\b/gi, 'delays'],
  [/\bmarket expansion\b/gi, 'growth'],
  [/\bcloud-native applications\b/gi, 'cloud apps'],
  [/\bcloud-native application\b/gi, 'cloud app'],
  [/\bcloud-native\b/gi, 'cloud'],
  [/\bresilient digital infrastructure\b/gi, 'reliable digital setups'],
  [/\bresilient digital systems\b/gi, 'reliable digital systems'],
  [/\bresilient\b/gi, 'reliable'],
  [/\binstitutional client acquisition\b/gi, 'client growth'],
  [/\bclient acquisition\b/gi, 'client growth'],
  [/\bsensitive transaction pipelines\b/gi, 'secure payment flows'],
  [/\btransaction pipelines\b/gi, 'payment flows'],
  [/\bsustainable market dominance\b/gi, 'lasting market lead'],
  [/\bmarket dominance\b/gi, 'market lead'],
  [/\bdependable technical precision\b/gi, 'proven tech quality'],
  [/\btechnical precision\b/gi, 'tech quality'],
  [/\bundisputed digital authority\b/gi, 'strong market presence'],
  [/\bdigital authority\b/gi, 'market presence'],
  [/\bnear-instantaneous\b/gi, 'instant'],
  [/\bpresentation layer\b/gi, 'frontend'],
  [/\bextraneous\b/gi, 'extra'],
  [/\bdependencies\b/gi, 'tools'],
  [/\bdependency\b/gi, 'tool'],
  [/\binstitutional-grade\b/gi, 'enterprise'],
  [/\bcyber resilience\b/gi, 'cyber safety'],
  [/\bregulatory alignment\b/gi, 'compliance'],
  [/\bstatutory oversight\b/gi, 'regulations'],
  [/\bstatutory obligation\b/gi, 'legal duty'],
  [/\bstatutory\b/gi, 'legal'],
  [/\bunauthorized interception\b/gi, 'data leaks'],
  [/\banomalous behaviors\b/gi, 'threats'],
  [/\banomalous\b/gi, 'unusual'],
  [/\buncompromising dedication\b/gi, 'strong commitment'],
  [/\bfrictionless\b/gi, 'smooth'],
  [/\btransactional architectures\b/gi, 'payment setups'],
  [/\btransactional architecture\b/gi, 'payment setup'],
  [/\btransactional platforms\b/gi, 'payment portals'],
  [/\btransactional platform\b/gi, 'payment portal'],
  [/\bcommercial landscape\b/gi, 'business sector'],
  [/\bprocurement departments\b/gi, 'purchasing teams'],
  [/\bprocurement department\b/gi, 'purchasing team'],
  [/\bprocurement\b/gi, 'purchasing'],
  [/\bassistive technologies\b/gi, 'assistive tools'],
  [/\bassistive technology\b/gi, 'assistive tool'],
  [/\btelecommunications infrastructure\b/gi, 'telecom networks'],
  [/\btelecommunications\b/gi, 'telecom'],
  [/\binterconnection\b/gi, 'network links'],
  [/\binterconnections\b/gi, 'network links'],
  [/\bdeterministic\b/gi, 'reliable'],
  [/\bcontinuous conversion rate optimization\b/gi, 'ongoing conversion growth'],
  [/\bcontinuous conversion optimization\b/gi, 'ongoing conversion growth'],
  [/\bconversion rate optimization\b/gi, 'conversion growth'],
  [/\bconversion optimization\b/gi, 'conversion growth'],
  [/\barchitectural consultation\b/gi, 'tech consult'],
  [/\barchitectural discovery\b/gi, 'initial discovery']
];

const READABILITY_SPLITS: [RegExp, string][] = [
  [/, generating over /gi, '. The region generates over '],
  [/, generating /gi, '. This generates '],
  [/, ensuring that your /gi, '. This ensures your '],
  [/, ensuring that /gi, '. This ensures '],
  [/, ensuring /gi, '. This helps '],
  [/, allowing for /gi, '. This enables '],
  [/, allowing /gi, '. This allows '],
  [/, enabling /gi, '. This enables '],
  [/, resulting in /gi, '. This led to '],
  [/, leading to /gi, '. This drove '],
  [/, which is critical for /gi, '. This is vital for '],
  [/, which is essential for /gi, '. This is key for '],
  [/, which is absolutely essential for /gi, '. This is vital for '],
  [/, which support thousands of /gi, '. These zones host thousands of '],
  [/, which are now shifting /gi, '. Many are now shifting '],
  [/, which allows ambitious startups to /gi, '. This allows startups to '],
  [/, which directly translated into /gi, '. This led to '],
  [/, which allows /gi, '. This allows '],
  [/, which means /gi, '. This means '],
  [/, which enables /gi, '. This enables '],
  [/, which provides /gi, '. This provides '],
  [/, which gives /gi, '. This gives '],
  [/, which reduces /gi, '. This reduces '],
  [/, enabling your team to /gi, '. This lets your team '],
  [/, allowing your team to /gi, '. This lets your team '],
  [/, helping your brand /gi, '. This helps your brand '],
  [/, while ensuring /gi, '. This also ensures '],
  [/, while safeguarding /gi, '. This safeguards '],
  [/, while protecting /gi, '. This protects '],
  [/, while optimizing /gi, '. This refines '],
  [/, and our engineering practice /gi, '. Our team '],
  [/, and our developers /gi, '. Our developers '],
  [/, so your business can /gi, '. This helps your business '],
  [/\. Furthermore, /gi, '. Also, '],
  [/\. In addition, /gi, '. Also, '],
  [/In addition to /gi, 'Along with '],
  [/Whether your firm /gi, 'If your firm '],
  [/; it requires /gi, '. It needs '],
  [/; we conduct /gi, '. We conduct '],
  [/; our team /gi, '. Our team '],
  [/; they require /gi, '. They need '],
  [/, where we build /gi, '. We build '],
  [/, where we /gi, '. Here we '],
  [/, while a complex/gi, '. In contrast, a complex'],
  [/, while achieving/gi, '. However, achieving'],
  [/, while /gi, '. Meanwhile, '],
  [/, meaning our technical engineering directly improves /gi, '. Our technical work directly lifts '],
  [/, helping you assess /gi, '. This helps you track '],
  [/, diverting /gi, '. This saved '],
  [/, proving our ability to /gi, '. We consistently '],
  [/, protecting your business liability and fostering absolute trust with /gi, '. This protects your business and builds trust with '],
  [/, providing you with /gi, '. We give you '],
  [/, drastically reducing /gi, '. This cuts '],
  [/, ensuring maximum performance and /gi, '. It delivers top speed and '],
  [/, allowing you to /gi, '. You can '],
  [/, providing immense value to /gi, '. It brings high value to '],
  [/, helping reduce overall /gi, '. This lowers your '],
  [/, driving sustainable /gi, '. This drives steady '],
  [/, keeping visitors engaged on your website longer\./gi, '. This keeps users on your site longer.'],
  [/, eliminating price hesitation and building long-term brand loyalty\./gi, '. This removes price doubts and builds strong customer loyalty.'],
  [/, capable of commanding premium pricing across competitive international markets\./gi, '. They command premium rates across global markets.'],
  [/, capable of commanding /gi, '. This helps you command '],
  [/, helping /gi, '. This helps '],
  [/, driving /gi, '. This drives '],
  [/, making /gi, '. This makes '],
  [/, giving /gi, '. This gives '],
  [/, creating /gi, '. This creates '],
  [/, serving /gi, '. This serves '],
  [/, offering /gi, '. It offers '],
  [/, delivering /gi, '. It provides '],
  [/, building /gi, '. We build '],
  [/, providing /gi, '. It provides '],
  [/, expanding /gi, '. This expands '],
  [/, positioning /gi, '. This positions '],
  [/, translating /gi, '. This translates '],
  [/, requiring /gi, '. This requires '],
  [/, reflecting /gi, '. It reflects '],
  [/, which translates into /gi, '. This turns into '],
  [/, which helps your /gi, '. This helps your '],
  [/, and we ensure /gi, '. We ensure '],
  [/, and our team /gi, '. Our team ']
];

/**
 * Transforms complex sentences and industry jargon into accessible, plain English
 * to ensure high Flesch Reading Ease scores on Screaming Frog crawls.
 */
export function simplifyReadabilityText(text: string): string {
  if (!text || typeof text !== "string" || !text.trim()) return text;

  const hasLeadingSpace = /^\s/.test(text);
  const hasTrailingSpace = /\s$/.test(text);

  let s = text;
  for (const [re, rep] of READABILITY_REPLACEMENTS) {
    s = s.replace(re, rep);
  }
  for (const [re, rep] of READABILITY_SPLITS) {
    s = s.replace(re, rep);
  }

  let result = s.replace(/\.\./g, '.').replace(/\s+/g, ' ').trim();
  if (hasLeadingSpace) result = ' ' + result;
  if (hasTrailingSpace) result = result + ' ';
  return result;
}

/**
 * Safely simplifies text nodes within an HTML snippet without modifying
 * HTML tags, attribute values (id, class, href), scripts, styles, or headings (h1-h6).
 */
export function simplifyHtmlReadability(html: string): string {
  if (!html || typeof html !== "string") return html;

  return html.replace(
    /(<h[1-6]\b[^>]*>[\s\S]*?<\/h[1-6]>|<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>|<[^>]+>|[^<]+)/gi,
    (match) => {
      if (match.startsWith("<")) {
        return match;
      }
      return simplifyReadabilityText(match);
    }
  );
}

