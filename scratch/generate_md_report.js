const fs = require('fs');
const r = JSON.parse(fs.readFileSync('./gsc_analytics_report.json', 'utf8'));

let md = '# Google Search Console Live Analytics Report\n\n';
md += `**Property**: \`${r.siteUrl}\`  \n`;
md += `**Current Period**: ${r.dateRanges.current.startDate} to ${r.dateRanges.current.endDate} (28 Days)  \n`;
md += `**Previous Comparison Period**: ${r.dateRanges.previous.startDate} to ${r.dateRanges.previous.endDate} (28 Days)  \n`;
md += `**Total Active Queries Analyzed**: ${r.summary.totalQueries} | **Total Pages**: ${r.summary.totalPages} | **Growing Queries Detected**: ${r.summary.growingQueriesCount}\n\n`;

md += '## 1. Top Keywords by Impressions (Search Visibility)\n\n';
md += '| # | Keyword / Query | Impressions | Clicks | CTR | Avg Position |\n';
md += '|---|---|---|---|---|---|\n';
r.topKeywordsByImpressions.slice(0, 20).forEach((x, i) => {
  md += `| ${i + 1} | **${x.keys[0]}** | ${x.impressions} | ${x.clicks} | ${((x.ctr || 0) * 100).toFixed(2)}% | ${Number(x.position).toFixed(1)} |\n`;
});

md += '\n## 2. Top Pages by Views (Impressions) & Clicks\n\n';
md += '| # | Page URL | Clicks | Impressions (Views) | CTR | Avg Position |\n';
md += '|---|---|---|---|---|---|\n';
r.topPagesByClicks.slice(0, 20).forEach((x, i) => {
  let p = x.keys[0];
  try {
    p = new URL(p).pathname;
  } catch (e) {}
  md += `| ${i + 1} | \`${p}\` | ${x.clicks} | ${x.impressions} | ${((x.ctr || 0) * 100).toFixed(2)}% | ${Number(x.position).toFixed(1)} |\n`;
});

md += '\n## 3. Top Ranking Pages (Best Average Position, Min 5 Impressions)\n\n';
md += '| # | Page URL | Avg Position | Impressions | Clicks | CTR |\n';
md += '|---|---|---|---|---|---|\n';
r.topRankingPages.slice(0, 20).forEach((x, i) => {
  let p = x.keys[0];
  try {
    p = new URL(p).pathname;
  } catch (e) {}
  md += `| ${i + 1} | \`${p}\` | **${Number(x.position).toFixed(1)}** | ${x.impressions} | ${x.clicks} | ${((x.ctr || 0) * 100).toFixed(2)}% |\n`;
});

md += '\n## 4. Top Queries that are Growing (Period-over-Period Comparison)\n\n';
md += '| # | Growing Query | Impression Growth | Current vs Previous | Clicks (+/-) | Current Rank (Rank Delta) |\n';
md += '|---|---|---|---|---|---|\n';
r.topGrowingQueries.slice(0, 20).forEach((x, i) => {
  md += `| ${i + 1} | **${x.query}** | **+${x.impGrowth}** (${x.impGrowthPct}) | ${x.curImp} vs ${x.prevImp} | ${x.curClk} (${x.clkGrowth >= 0 ? '+' : ''}${x.clkGrowth}) | #${x.curPos} (${x.posDiff >= 0 ? '+' : ''}${x.posDiff}) |\n`;
});

fs.writeFileSync('./GSC_REPORT.md', md, 'utf8');
console.log('Successfully written to GSC_REPORT.md');
