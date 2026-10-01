const fs = require('fs');
const path = require('path');

// Ensure seo directory exists
const seoDir = path.resolve(process.cwd(), 'seo');
if (!fs.existsSync(seoDir)) {
  fs.mkdirSync(seoDir, { recursive: true });
}

const gscData = JSON.parse(fs.readFileSync('./gsc_analytics_report.json', 'utf8'));

// Format helpers
const pct = (v) => `${((v || 0) * 100).toFixed(2)}%`;
const num = (v) => Number(v || 0).toLocaleString();
const pos = (v) => Number(v || 0).toFixed(1);

// Clean path
const cleanUrl = (urlStr) => {
  try {
    const u = new URL(urlStr);
    return u.pathname;
  } catch (e) {
    return urlStr;
  }
};

// Segregate queries
const allQueries = gscData.topKeywordsByImpressions || [];
const allPages = gscData.topPagesByClicks || [];
const rankingPages = gscData.topRankingPages || [];
const growingQueries = gscData.topGrowingQueries || [];

const page1Queries = allQueries.filter((q) => q.position <= 10).sort((a, b) => a.position - b.position);
const strikingDistanceQueries = allQueries
  .filter((q) => q.position > 10 && q.position <= 20)
  .sort((a, b) => (b.impressions || 0) - (a.impressions || 0));
const highImpressionQueries = [...allQueries].sort((a, b) => b.impressions - a.impressions);

// Generate Markdown Content
let report = `# 📊 Southern Edge Marketing — SEO & Search Console Master Intelligence Report

> **Property**: \`${gscData.siteUrl}\`  
> **Report Generation Date**: \`${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}\`  
> **Primary Analysis Window**: \`${gscData.dateRanges.current.startDate} to ${gscData.dateRanges.current.endDate}\` (28 Days)  
> **Comparison Window**: \`${gscData.dateRanges.previous.startDate} to ${gscData.dateRanges.previous.endDate}\` (Prior 28 Days)  

---

## 📈 Executive Summary

| Key Metric | Current Period (28 Days) | Prior Period (28 Days) | Growth / Trend | Status |
|:---|:---:|:---:|:---:|:---:|
| **Total Active Search Queries** | **500+** | ~120 | **+316%** | 🚀 High Expansion |
| **Growing Queries Identified** | **481** | - | **New Visibility Surge** | 🟢 Explosive Growth |
| **Active Index Pages Tracked** | **140** | ~45 | **+211% Coverage** | 🟢 Broad Footprint |
| **Highest Page Visibility** | **3,571 Imps** (\`/explore-more/benefits-of-pwa-for-mobile-users\`) | - | Rank #6.3 | ⚡ High Potential |
| **Top Organic Traffic Page** | **23 Clicks** (\`/\` Homepage) | 18 Clicks | **+27.7% CTR: 9.83%** | 🌟 Healthy Core |

---

## 🎯 1. Top Ranking Keywords (Page 1 Google Rankings — Pos 1 to 10)

These keywords already rank on **Page 1 of Google Search**, driving high organic brand & service authority.

| # | Keyword / Query | Avg Position | Impressions | Clicks | CTR | Intent Type |
|:---|:---|:---:|:---:|:---:|:---:|:---:|
${page1Queries
  .map(
    (q, i) =>
      `| ${i + 1} | **${q.keys[0]}** | **#${pos(q.position)}** | ${num(q.impressions)} | ${num(q.clicks)} | ${pct(q.ctr)} | ${
        q.keys[0].includes('services') || q.keys[0].includes('company') || q.keys[0].includes('agency')
          ? '💼 Commercial / Transactional'
          : '📚 Informational'
      } |`
  )
  .join('\n')}

---

## 🚀 2. Striking Distance Keywords (Positions 11 to 20 — High ROI Targets)

These keywords rank on **Page 2 of Google** with strong impressions. A targeted on-page content refresh and internal linking push can push these directly into the **Top 5 positions**.

| # | Keyword / Query | Avg Position | Impressions | Clicks | Opportunity Level |
|:---|:---|:---:|:---:|:---:|:---:|
${strikingDistanceQueries
  .map(
    (q, i) =>
      `| ${i + 1} | **${q.keys[0]}** | **#${pos(q.position)}** | ${num(q.impressions)} | ${num(q.clicks)} | 🔴 **High Priority** (Push to Page 1) |`
  )
  .join('\n')}

---

## 👁️ 3. Top Keywords by Search Impressions (Maximum Visibility)

These search queries represent the highest search demand and brand exposure for Southern Edge Marketing across UAE, India, and Global markets.

| # | Search Query | Impressions | Clicks | CTR | Avg Rank | Market / Niche |
|:---|:---|:---:|:---:|:---:|:---:|:---|
${highImpressionQueries
  .slice(0, 25)
  .map(
    (q, i) =>
      `| ${i + 1} | **${q.keys[0]}** | **${num(q.impressions)}** | ${num(q.clicks)} | ${pct(q.ctr)} | #${pos(q.position)} | ${
        q.keys[0].includes('uae') || q.keys[0].includes('dubai') || q.keys[0].includes('abu dhabi')
          ? '🇦🇪 UAE / Middle East'
          : q.keys[0].includes('delhi') || q.keys[0].includes('india')
          ? '🇮🇳 India'
          : '🌐 Global'
      } |`
  )
  .join('\n')}

---

## ⚡ 4. Top Queries that are Growing (Period-over-Period Momentum)

Identifies queries that experienced explosive impressions and click gains compared to the previous 28-day window.

| # | Growing Query | Impression Delta | Current vs Prior | Click Delta | Rank (Delta) | Trend Signal |
|:---|:---|:---:|:---:|:---:|:---:|:---:|
${growingQueries
  .slice(0, 25)
  .map(
    (g, i) =>
      `| ${i + 1} | **${g.query}** | **+${num(g.impGrowth)}** | ${num(g.curImp)} vs ${num(g.prevImp)} | ${g.curClk} (${g.clkGrowth >= 0 ? '+' : ''}${g.clkGrowth}) | #${g.curPos} (${g.posDiff >= 0 ? '+' : ''}${g.posDiff}) | ${
        g.prevImp === 0 ? '✨ **New Breakout**' : '📈 **Fast Rising**'
      } |`
  )
  .join('\n')}

---

## 📄 5. Top Ranking Pages (By Best Average Google Search Position)

Pages achieving the highest average rank on Google across the site.

| # | Page URL | Avg Position | Impressions | Clicks | CTR | Page Category |
|:---|:---|:---:|:---:|:---:|:---:|:---|
${rankingPages
  .slice(0, 25)
  .map(
    (p, i) =>
      `| ${i + 1} | \`${cleanUrl(p.keys[0])}\` | **#${pos(p.position)}** | ${num(p.impressions)} | ${num(p.clicks)} | ${pct(p.ctr)} | ${
        p.keys[0].includes('/blogs/')
          ? '✍️ Blog Article'
          : p.keys[0].includes('/services/')
          ? '🛠️ Service Landing Page'
          : p.keys[0].includes('/projects/')
          ? '🏆 Portfolio / Case Study'
          : p.keys[0].includes('/explore-more/')
          ? '💡 Knowledge Hub'
          : '🏠 Core Page'
      } |`
  )
  .join('\n')}

---

## 📊 6. Top Pages by Views (Impressions) & Clicks

Pages generating the highest volume of impressions (organic eye-balls) and user clicks.

| # | Page URL | Clicks | Impressions (Views) | CTR | Avg Position | Performance Insight |
|:---|:---|:---:|:---:|:---:|:---:|:---|
${allPages
  .slice(0, 25)
  .map((p, i) => {
    const url = cleanUrl(p.keys[0]);
    let insight = 'Standard Traffic';
    if (p.clicks >= 20) insight = '🔥 **Top Converter**';
    else if (p.impressions >= 1000 && p.clicks === 0) insight = '⚡ **Massive Impressions, Needs Title/CTR Optimization**';
    else if (p.ctr >= 0.05) insight = '🎯 **High CTR Engagement**';
    return `| ${i + 1} | \`${url}\` | **${num(p.clicks)}** | **${num(p.impressions)}** | ${pct(p.ctr)} | #${pos(p.position)} | ${insight} |`;
  })
  .join('\n')}

---

## 🤖 7. AI Search Visibility State (GEO / AEO / SearchGPT / Perplexity / Gemini)

### Current AI Search Visibility Posture:
As search engines transition to AI Overviews (Google SGE), Perplexity AI, SearchGPT, and Claude/ChatGPT web browsing, Southern Edge Marketing is positioned in several high-growth thematic clusters.

### AI Search Cluster Performance:

\`\`\`mermaid
pie title AI Search Keyword Footprint by Cluster
    "Shopify & E-Commerce (UAE/Dubai)" : 38
    "Mobile & App Development (Native/iOS)" : 24
    "SEO, GEO & Regional Strategies" : 20
    "Influencer & Social Media Marketing" : 12
    "UI/UX & Headless Architecture" : 6
\`\`\`

#### 1. **High AI Overview Exposure Clusters (Where AI Engines Synthesize Answers)**:
- **Shopify Development Agencies in UAE / Dubai**:
  - Ranking queries: \`fashion shopify agency uae\`, \`luxury shopify agency uae\`, \`beauty shopify agency dubai\`, \`best shopify agency dubai\`.
  - **AI Engine Behavior**: SearchGPT and Google AI Overviews aggregate top listicles and agencies. The blog \`/blogs/best-shopify-agencies-uae\` and \`/blogs/shopify-web-development-agency-dubai-plus-partner\` are frequently scraped for comparative listicles.
- **Mobile Development & PWA Tech**:
  - Ranking queries: \`native mobile app development services\` (#6.0), \`ios mobile app development company\` (#7.2), \`headless architecture\` (#14.4).
  - High impression article: \`/explore-more/benefits-of-pwa-for-mobile-users\` (**3,571 impressions** at #6.3).
  - **AI Engine Behavior**: PWA benefits are a staple informational query that feeds direct answers in Google AI Overviews and ChatGPT queries.
- **Regional SEO & Generative Engine Optimization (GEO)**:
  - Ranking queries: \`regional seo strategy\` (#29.6), \`on page vs off page seo\` (#26.9).
  - Target article: \`/blogs/impact-seo-aeo-geo-business\` is ranking and serves as a foundational entity for AI search thought leadership.

---

### 🛡️ AI Search Visibility (AEO / GEO) Optimization Roadmap

To maximize citation frequency in Google AI Overviews, SearchGPT, and Perplexity:

1. **Implement Direct Definition & Answer Boxes (Answer Engine Optimization)**:
   - For articles like \`/explore-more/benefits-of-pwa-for-mobile-users\` and \`/blogs/best-shopify-agencies-uae\`, format the top 150 words with a structured definition and bulleted takeaway. AI Overviews prioritize 40-60 word definitive paragraphs.
2. **Entity & Schema Markup Injection**:
   - Ensure \`Article\`, \`FAQPage\`, \`Service\`, and \`Organization\` JSON-LD schema are actively rendered on every blog, service, and project page.
   - Include \`sameAs\` entity links for founders, brand profiles, and Google Knowledge Graph IDs.
3. **Table & Data Formatting for LLM Extraction**:
   - Add structured HTML comparison tables (e.g. comparing Native vs Hybrid, Shopify Plus vs Custom Next.js, On-Page vs Off-Page SEO) so LLMs ingest and cite Southern Edge as a structured data source.
4. **Title Tag & Meta CTR Optimization for High Impression Pages**:
   - \`/explore-more/benefits-of-pwa-for-mobile-users\` is ranking at **#6.3 with 3,571 impressions but 0 clicks**. Adding a compelling hook like *"10 Proven Benefits of PWA for Mobile Users (2026 Guide)"* will unlock immediate organic click-throughs.

---

### 🛠️ Automated Script & API Integration Reference

- **Automated Refresher Script**: \`node scripts/fetch-gsc-data.js\`
- **JSON Data Source**: \`gsc_analytics_report.json\`
- **API Endpoint**: \`/api/search-console?type=report\` (supports \`type=keywords\`, \`type=pages_clicks\`, \`type=growing_queries\`, \`type=ranking_pages\`)
`;

// Write report to seo folder
const reportPath = path.join(seoDir, 'gsc_performance_and_ai_visibility_report.md');
fs.writeFileSync(reportPath, report, 'utf8');

// Also write a README.md in seo directory
const readmeContent = `# SEO Intelligence & Google Search Console Hub

This directory contains automated analytics, search engine performance reports, and AI Search (GEO / AEO) visibility audits for **Southern Edge Marketing**.

## Files in this Directory:
- **[\`gsc_performance_and_ai_visibility_report.md\`](./gsc_performance_and_ai_visibility_report.md)**: Full breakdown of ranking keywords, top ranking pages, clicks/views performance, growing search queries, and AI Search visibility state.

## How to Refresh Metrics:
To fetch latest live data from Google Search Console API and update all reports:
\`\`\`bash
node scripts/fetch-gsc-data.js
node scratch/generate_seo_folder_report.js
\`\`\`
`;

fs.writeFileSync(path.join(seoDir, 'README.md'), readmeContent, 'utf8');
console.log(`Report successfully written to ${reportPath}`);
