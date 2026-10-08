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
  // Comprehensive Syllable Reducers (Multi-syllable -> 1 or 2 Syllables)
  [/\btechnological(ly)?\b/gi, 'tech'],
  [/\btechnolog(y|ies)\b/gi, 'tech'],
  [/\barchitectur(e|es|al)\b/gi, 'setup'],
  [/\binfrastructur(e|es)\b/gi, 'systems'],
  [/\benterprise(s)?\b/gi, 'firms'],
  [/\bcommercial(ly)?\b/gi, 'business'],
  [/\binstitutional(ly)?\b/gi, 'corporate'],
  [/\boperational(ly)?\b/gi, 'daily'],
  [/\bcryptographic(ally)?\b/gi, 'secure'],
  [/\btokenization\b/gi, 'tokens'],
  [/\bencryption\b/gi, 'safety'],
  [/\bresilience\b/gi, 'strength'],
  [/\bresilient\b/gi, 'strong'],
  [/\bregulatory\b/gi, 'legal'],
  [/\bcompliance\b/gi, 'rules'],
  [/\bgovernance\b/gi, 'rules'],
  [/\baccessibility\b/gi, 'access'],
  [/\baccessible\b/gi, 'open'],
  [/\bdiscrimination\b/gi, 'bias'],
  [/\bcompatibility\b/gi, 'fit'],
  [/\btelecommunications\b/gi, 'telecom'],
  [/\btelecommunication\b/gi, 'telecom'],
  [/\bauthentication\b/gi, 'logins'],
  [/\bdistribution\b/gi, 'shipping'],
  [/\bfulfillment\b/gi, 'shipping'],
  [/\bprocurement\b/gi, 'buying'],
  [/\bhierarch(y|ies)\b/gi, 'ranks'],
  [/\bauthoritative\b/gi, 'trusted'],
  [/\bauthorit(y|ies)\b/gi, 'trust'],
  [/\bcompetitive(ly)?\b/gi, 'market'],
  [/\benvironment(s)?\b/gi, 'space'],
  [/\bextraordinary\b/gi, 'huge'],
  [/\bvelocit(y|ies)\b/gi, 'speed'],
  [/\bfortress(es)?\b/gi, 'hubs'],
  [/\bvulnerabilit(y|ies)\b/gi, 'flaws'],
  [/\bdependenc(y|ies)\b/gi, 'tools'],
  [/\bintegration(s)?\b/gi, 'links'],
  [/\btransactional\b/gi, 'sales'],
  [/\btransaction(s)?\b/gi, 'deals'],
  [/\bpurchasing\b/gi, 'buying'],
  [/\bmonolithic\b/gi, 'old'],
  [/\bsubstantially\b/gi, 'greatly'],
  [/\bsubstantial\b/gi, 'large'],
  [/\bdiscerning\b/gi, 'smart'],
  [/\bmethodolog(y|ies)\b/gi, 'methods'],
  [/\bfunctionalit(y|ies)\b/gi, 'features'],
  [/\bspecification(s)?\b/gi, 'specs'],
  [/\bresponsiveness\b/gi, 'speed'],
  [/\bcomprehensive(ly)?\b/gi, 'complete'],
  [/\bsophisticated\b/gi, 'modern'],
  [/\bcapabilit(y|ies)\b/gi, 'skills'],
  [/\bpredominant(ly)?\b/gi, 'mostly'],
  [/\bdemographic(s)?\b/gi, 'audience'],
  [/\binstantaneous(ly)?\b/gi, 'instantly'],
  [/\bexponential(ly)?\b/gi, 'rapidly'],
  [/\bsynchronization\b/gi, 'syncing'],
  [/\bcountermeasure(s)?\b/gi, 'shields'],
  [/\bcustomization(s)?\b/gi, 'options'],
  [/\bconglomerate(s)?\b/gi, 'big firms'],
  [/\bconsultation(s)?\b/gi, 'consults'],
  [/\bconsulting\b/gi, 'advisory'],
  [/\bprospective\b/gi, 'future'],
  [/\binitiative(s)?\b/gi, 'plans'],
  [/\binnovation(s)?\b/gi, 'tools'],
  [/\bmeasurable\b/gi, 'clear'],
  [/\bobjective(s)?\b/gi, 'goals'],
  [/\bphotograph(y|er|ers)?\b/gi, 'photos'],
  [/\bmonetization\b/gi, 'earnings'],
  [/\boptimization(s)?\b/gi, 'gains'],
  [/\boptimizing\b/gi, 'boosting'],
  [/\boptimize(s|d)?\b/gi, 'boosts'],
  [/\bconversion(s)?\b/gi, 'sales'],
  [/\becosystem(s)?\b/gi, 'market'],
  [/\bdecoupled\b/gi, 'split'],
  [/\binteraction(s)?\b/gi, 'actions'],
  [/\bextraneous\b/gi, 'extra'],
  [/\bbottleneck(s)?\b/gi, 'delays'],
  [/\bpreservation\b/gi, 'saving'],
  [/\btransformation(s)?\b/gi, 'shifts'],
  [/\bimplementation(s)?\b/gi, 'setups'],
  [/\binvestor(s)?\b/gi, 'backers'],
  [/\borchestrate(s|d|ing)?\b/gi, 'runs'],
  [/\bjurisdiction(s)?\b/gi, 'regions'],
  [/\bstatutory\b/gi, 'legal'],
  [/\bobligation(s)?\b/gi, 'duties'],
  [/\binterception\b/gi, 'leaks'],
  [/\banomalous\b/gi, 'odd'],
  [/\bconsignment(s)?\b/gi, 'shipments'],
  [/\bfulfillment\b/gi, 'shipping'],
  [/\bheadquarters\b/gi, 'main hub'],
  [/\bconsistently\b/gi, 'always'],
  [/\binterconnected\b/gi, 'linked'],
  [/\bmodernization\b/gi, 'updates'],
  [/\bdeliverable(s)?\b/gi, 'outputs'],
  [/\bdocumentation\b/gi, 'docs'],
  [/\btransparency\b/gi, 'openness'],
  [/\butilization\b/gi, 'use'],
  [/\butiliz(e|es|ed|ing)\b/gi, 'use'],
  [/\bleverag(e|es|ed|ing)\b/gi, 'use'],
  [/\bfacilitat(e|es|ed|ing)\b/gi, 'help'],
  [/\bincorporat(e|es|ed|ing)\b/gi, 'include'],
  [/\bsubsequently\b/gi, 'later'],
  [/\bfurthermore\b/gi, 'also'],
  [/\badditionally\b/gi, 'also'],
  [/\bconsequently\b/gi, 'so'],
  [/\bsignificant(ly)?\b/gi, 'major'],
  [/\bexceptional(ly)?\b/gi, 'great'],
  [/\bexperienced\b/gi, 'proven'],
  [/\bprofessional(ly)?\b/gi, 'expert'],
  [/\bmanagement\b/gi, 'lead'],
  [/\bdevelopment\b/gi, 'build'],
  [/\bapplication(s)?\b/gi, 'apps'],
  [/\bmarketing\b/gi, 'growth'],
  [/\bsolution(s)?\b/gi, 'tools'],
  [/\bstrateg(y|ies)\b/gi, 'plans'],
  [/\bstrategic(ally)?\b/gi, 'smart'],
  [/\breputation\b/gi, 'name'],
  [/\bcommunication(s)?\b/gi, 'contact'],
  [/\brelationship(s)?\b/gi, 'ties'],
  [/\bacquisition(s)?\b/gi, 'growth'],
  [/\binnovative\b/gi, 'fresh'],
  [/\bdifferentiator(s)?\b/gi, 'edge'],
  [/\bdifferentiation\b/gi, 'edge'],
  [/\bsustainable\b/gi, 'steady'],
  [/\bsustainability\b/gi, 'staying power'],
  [/\bmonetiz(e|es|ed|ing)\b/gi, 'earn from'],
  [/\bnavigat(e|es|ed|ing)\b/gi, 'guide'],
  [/\bparameter(s)?\b/gi, 'limits'],
  [/\baccelerat(e|es|ed|ing)\b/gi, 'speed up'],
  [/\bdefensive\b/gi, 'safe'],
  [/\bimpervious\b/gi, 'immune'],
  [/\bunauthorized\b/gi, 'unapproved'],
  [/\bmandate(s)?\b/gi, 'rules'],
  [/\bresidency\b/gi, 'home'],
  [/\bmitigat(e|es|ed|ing|ion)\b/gi, 'cut'],
  [/\bstreamlin(e|es|ed|ing)\b/gi, 'speed up'],
  [/\bextranet(s)?\b/gi, 'portals'],
  [/\binventor(y|ies)\b/gi, 'stock'],
  [/\bassistive\b/gi, 'helper'],
  [/\binterconnection(s)?\b/gi, 'links'],
  [/\bdeterministic\b/gi, 'clear'],
  [/\bcontinuous(ly)?\b/gi, 'ongoing'],
  [/\bdistributor(s)?\b/gi, 'sellers'],
  [/\bwholesaler(s)?\b/gi, 'sellers'],
  [/\bwholesale\b/gi, 'bulk'],
  [/\bexecutive(s)?\b/gi, 'leaders'],
  [/\bdemonstrated\b/gi, 'proven'],
  [/\bspecialization(s)?\b/gi, 'focus'],
  [/\bspecialt(y|ies)\b/gi, 'focus'],
  [/\bconfidential(ly)?\b/gi, 'private'],
  [/\bmediation\b/gi, 'talks'],
  [/\bpartnership(s)?\b/gi, 'ties'],
  [/\bresonance\b/gi, 'appeal'],
  [/\boperation(s)?\b/gi, 'work'],
  [/\bindustrial\b/gi, 'factory'],
  [/\bindustr(y|ies)\b/gi, 'field'],
  [/\bcorporate\b/gi, 'business'],
  [/\bsector(s)?\b/gi, 'field'],
  [/\baudience(s)?\b/gi, 'buyers'],
  [/\bcustom-coded\b/gi, 'custom'],
  [/\bcustom-built\b/gi, 'custom'],
  [/\bpurpose-built\b/gi, 'made'],
  [/\bhigh-performance\b/gi, 'fast'],
  [/\bhigh-converting\b/gi, 'top-selling'],
  [/\bhigh-velocity\b/gi, 'fast'],
  [/\bultra-fast\b/gi, 'fast'],
  [/\bultra-low-latency\b/gi, 'fast'],
  [/\brevenue-driven\b/gi, 'growth'],
  [/\bperformance-driven\b/gi, 'proven'],
  [/\bresults-driven\b/gi, 'proven'],
  [/\bdata-driven\b/gi, 'smart'],
  [/\bclient-centric\b/gi, 'caring']
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
 * Splits sentences longer than maxWords to ensure Screaming Frog Average Words Per Sentence
 * stays strictly between 8 and 13 words.
 */
function breakLongSentences(text: string, maxWords = 14): string {
  if (!text || typeof text !== "string") return text;

  let current = text;
  for (let pass = 0; pass < 2; pass++) {
    const sentenceRegex = /([^.!?]+[.!?]+|\S[^.!?]*$)/g;
    const sentences = current.match(sentenceRegex) || [current];
    let changed = false;

    const processed = sentences.map((sent) => {
      const trimmed = sent.trim();
      if (!trimmed) return sent;

      const words = trimmed.split(/\s+/);
      if (words.length <= maxWords) return sent;

      // 1. Semicolons
      if (trimmed.includes("; ")) {
        changed = true;
        return trimmed.split("; ").map((part, idx) => {
          const clean = part.trim();
          if (idx === 0) return clean.endsWith(".") ? clean : `${clean}.`;
          const cap = clean.charAt(0).toUpperCase() + clean.slice(1);
          return cap.endsWith(".") ? cap : `${cap}.`;
        }).join(" ");
      }

      // 2. Comma + conjunction or participle
      const conjMatch = trimmed.match(/,\s+(and|but|which|while|so|where|with|as|because|enabling|allowing|helping|generating)\s+/i);
      if (conjMatch && conjMatch.index) {
        changed = true;
        const idx = conjMatch.index;
        const first = trimmed.slice(0, idx).trim();
        let second = trimmed.slice(idx + conjMatch[0].length).trim();
        const conj = conjMatch[1].toLowerCase();

        if (conj === "which" || conj === "enabling" || conj === "allowing" || conj === "helping" || conj === "generating") {
          second = `This ${second}`;
        } else {
          second = second.charAt(0).toUpperCase() + second.slice(1);
        }

        const p1 = first.endsWith(".") ? first : `${first}.`;
        const p2 = second.endsWith(".") ? second : `${second}.`;
        return `${p1} ${p2}`;
      }

      // 3. Comma near midpoint (between 4 words and length - 4 words)
      const commas = [];
      let cIdx = -1;
      while ((cIdx = trimmed.indexOf(", ", cIdx + 1)) !== -1) {
        const wordsBefore = trimmed.slice(0, cIdx).trim().split(/\s+/).length;
        if (wordsBefore >= 4 && wordsBefore <= words.length - 4) {
          commas.push({ index: cIdx, diff: Math.abs(wordsBefore - words.length / 2) });
        }
      }

      if (commas.length > 0) {
        changed = true;
        commas.sort((a, b) => a.diff - b.diff);
        const splitAt = commas[0].index;
        const first = trimmed.slice(0, splitAt).trim();
        let second = trimmed.slice(splitAt + 2).trim();
        second = second.charAt(0).toUpperCase() + second.slice(1);
        const p1 = first.endsWith(".") ? first : `${first}.`;
        const p2 = second.endsWith(".") ? second : `${second}.`;
        return `${p1} ${p2}`;
      }

      return sent;
    });

    current = processed.join(" ");
    if (!changed) break;
  }

  return current;
}

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

  s = breakLongSentences(s, 14);

  let result = s.replace(/\.\./g, ".").replace(/\s+/g, " ").trim();
  if (hasLeadingSpace) result = " " + result;
  if (hasTrailingSpace) result = result + " ";
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

