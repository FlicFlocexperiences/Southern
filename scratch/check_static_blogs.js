const fs = require('fs');
const path = require('path');

// Let's import or read src/data/blogs.ts
const blogsTs = fs.readFileSync(path.join(__dirname, '../src/data/blogs.ts'), 'utf8');

const aTagRegex = /<a\s+(?:[^>]*?\s+)?href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
let match;
console.log("=== CHECKING STATIC BLOGS IN src/data/blogs.ts ===");
let count = 0;
while ((match = aTagRegex.exec(blogsTs)) !== null) {
  count++;
  console.log(`[${count}] Href: ${match[1]}, Anchor: "${match[2]}"`);
}
if (count === 0) {
  console.log("No <a> tags found directly in src/data/blogs.ts or content is plain text / markdown.");
}

// Check markdown links [text](url) in src/data/blogs.ts
const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
let mdMatch;
let mdCount = 0;
while ((mdMatch = mdLinkRegex.exec(blogsTs)) !== null) {
  mdCount++;
  console.log(`[MD ${mdCount}] Href: ${mdMatch[2]}, Text: "${mdMatch[1]}"`);
}
