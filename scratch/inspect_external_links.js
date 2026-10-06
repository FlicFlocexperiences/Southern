const fs = require('fs');
const path = require('path');

const report = JSON.parse(fs.readFileSync(path.join(__dirname, 'blog_links_audit_report.json'), 'utf8'));

console.log("=== EXTERNAL LINKS IN BLOGS ===");
report.externalLinks.forEach((l, idx) => {
  console.log(`${idx+1}. Blog: "${l.blogTitle}" (${l.blogSlug})`);
  console.log(`   Href: ${l.rawHref}`);
  console.log(`   Anchor: "${l.anchorText}"`);
});

