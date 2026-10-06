const fs = require('fs');
const path = require('path');

const report = JSON.parse(fs.readFileSync(path.join(__dirname, 'blog_links_audit_report.json'), 'utf8'));

console.log("=== OVERALL METRICS ===");
console.log(JSON.stringify(report.stats, null, 2));

console.log("\n=== UNIQUE BROKEN TARGET URLS & FREQUENCIES ===");
const brokenUrlCounts = {};
report.brokenLinks.forEach(l => {
  const norm = l.normalizedPath;
  if (!brokenUrlCounts[norm]) {
    brokenUrlCounts[norm] = {
      count: 0,
      reason: l.reason,
      suggestedFix: l.suggestedFix,
      sampleAnchor: l.anchorText,
      blogs: []
    };
  }
  brokenUrlCounts[norm].count++;
  if (!brokenUrlCounts[norm].blogs.includes(l.blogSlug)) {
    brokenUrlCounts[norm].blogs.push(l.blogSlug);
  }
});

const sortedBroken = Object.entries(brokenUrlCounts).sort((a, b) => b[1].count - a[1].count);

console.log(`Total unique broken target URLs: ${sortedBroken.length}`);
sortedBroken.forEach(([url, data], i) => {
  console.log(`${i+1}. ${url} (${data.count} occurrences across ${data.blogs.length} blogs)`);
  console.log(`   Reason: ${data.reason}`);
  console.log(`   Sample Anchor: "${data.sampleAnchor}"`);
});

console.log("\n=== UNIQUE REDIRECTED TARGET URLS ===");
const redirectCounts = {};
report.redirectedLinks.forEach(l => {
  const norm = l.normalizedPath;
  if (!redirectCounts[norm]) {
    redirectCounts[norm] = {
      count: 0,
      redirectTo: l.redirectTo,
      blogs: []
    };
  }
  redirectCounts[norm].count++;
  if (!redirectCounts[norm].blogs.includes(l.blogSlug)) {
    redirectCounts[norm].blogs.push(l.blogSlug);
  }
});
Object.entries(redirectCounts).forEach(([url, data], i) => {
  console.log(`${i+1}. ${url} -> ${data.redirectTo} (${data.count} occurrences across ${data.blogs.length} blogs)`);
});

console.log("\n=== UNIQUE VALID INTERNAL TARGET URLS ===");
const validCounts = {};
report.validInternalLinks.forEach(l => {
  const norm = l.normalizedPath;
  if (!validCounts[norm]) {
    validCounts[norm] = { count: 0, blogs: [] };
  }
  validCounts[norm].count++;
  if (!validCounts[norm].blogs.includes(l.blogSlug)) {
    validCounts[norm].blogs.push(l.blogSlug);
  }
});
const sortedValid = Object.entries(validCounts).sort((a, b) => b[1].count - a[1].count);
console.log(`Total unique valid target internal URLs: ${sortedValid.length}`);
sortedValid.slice(0, 30).forEach(([url, data], i) => {
  console.log(`${i+1}. ${url} (${data.count} occurrences)`);
});

