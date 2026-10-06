const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
const fs = require('fs');
const path = require('path');

const firebaseConfig = {
  apiKey: "AIzaSyBDQKm8HPlLQwSRnrArVyiuET3WvAlX7a8",
  authDomain: "southernmarketing-1a7cd.firebaseapp.com",
  projectId: "southernmarketing-1a7cd",
  storageBucket: "southernmarketing-1a7cd.firebasestorage.app",
  messagingSenderId: "178630280686",
  appId: "1:178630280686:web:9b0277bb1800aeaa897aff",
  measurementId: "G-VPNQVKENM1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Helper to normalize path
function normalizePath(p) {
  if (!p) return '';
  let clean = p.trim();
  // Strip domain if internal
  clean = clean.replace(/^https?:\/\/(www\.)?southernedgemarketing\.com/i, '');
  clean = clean.replace(/^https?:\/\/localhost(:\d+)?/i, '');
  
  // If still starts with http, it's external
  if (/^https?:\/\//i.test(clean)) {
    return clean;
  }
  
  // Ensure starts with /
  if (!clean.startsWith('/') && !clean.startsWith('#') && !clean.startsWith('mailto:') && !clean.startsWith('tel:')) {
    clean = '/' + clean;
  }
  
  // Remove hash and query for route matching, but keep for analysis
  const [pathname] = clean.split(/[?#]/);
  // Remove trailing slash except for root '/'
  const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return normalized.toLowerCase();
}

async function run() {
  console.log("=== STEP 1: Collecting all valid routes in project ===");
  
  // 1. Static routes
  const staticRoutes = new Set([
    '',
    '/',
    '/about',
    '/services',
    '/projects',
    '/blogs',
    '/authors/ameet-nangia',
    '/author/ameet-nangia',
    '/contact',
    '/privacy',
    '/terms',
    '/refund',
    '/thank-you',
    '/nullify',
    '/authority',
    '/authority/blogs',
    '/authority/leads',
    '/authority/projects'
  ].map(r => normalizePath(r)));

  // 2. City routes
  const allCities = [
    'abu-dhabi', 'ahmedabad', 'bengaluru', 'birmingham', 'brisbane', 'california',
    'chandigarh', 'chennai', 'delhi', 'dubai', 'gurgaon', 'hyderabad', 'jaipur',
    'kolkata', 'london', 'los-angeles', 'lucknow', 'manchester', 'melbourne',
    'montreal', 'mumbai', 'new-york', 'noida', 'pune', 'san-francisco', 'sharjah',
    'surat', 'sydney', 'toronto', 'vancouver'
  ];

  const cityServices = ['app-development', 'web-development', 'social-media-management', 'branding', 'seo'];
  cityServices.forEach(srv => {
    allCities.forEach(city => {
      if (srv === 'branding' && city === 'chandigarh') return;
      staticRoutes.add(`/services/${srv}/${city}`);
    });
  });

  // Dedicated service routes
  const dedicatedServices = [
    'app-development', 'branding', 'influencer-marketing', 'ios-app-development',
    'luxury-shopify-agency-uae', 'seo', 'shopify-agency-dubai',
    'social-media-management', 'web-development'
  ];
  dedicatedServices.forEach(s => staticRoutes.add(`/services/${s}`));

  // 3. Static data files
  // Let's read services.ts
  const servicesTs = fs.readFileSync(path.join(__dirname, '../src/data/services.ts'), 'utf8');
  const serviceSlugMatches = [...servicesTs.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
  serviceSlugMatches.forEach(s => staticRoutes.add(`/services/${s.toLowerCase()}`));

  // Let's read articles.ts (explore-more)
  const articlesTs = fs.readFileSync(path.join(__dirname, '../src/data/articles.ts'), 'utf8');
  const articleSlugMatches = [...articlesTs.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
  articleSlugMatches.forEach(s => staticRoutes.add(`/explore-more/${s.toLowerCase()}`));

  // Let's read static blogs.ts
  const blogsTs = fs.readFileSync(path.join(__dirname, '../src/data/blogs.ts'), 'utf8');
  const staticBlogSlugMatches = [...blogsTs.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
  staticBlogSlugMatches.forEach(s => staticRoutes.add(`/blogs/${s.toLowerCase()}`));

  // Let's read static projects.ts
  const projectsTs = fs.readFileSync(path.join(__dirname, '../src/data/projects.ts'), 'utf8');
  const staticProjectSlugMatches = [...projectsTs.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
  staticProjectSlugMatches.forEach(s => staticRoutes.add(`/projects/${s.toLowerCase()}`));

  // 4. Fetch Firestore blogs and projects
  console.log("Fetching Firestore blogs...");
  const blogsSnap = await getDocs(collection(db, 'blogs'));
  const firestoreBlogSlugs = new Set();
  const allBlogsData = [];
  blogsSnap.forEach(docSnap => {
    const data = docSnap.data();
    const slug = data.slug || docSnap.id;
    if (slug) {
      firestoreBlogSlugs.add(slug.toLowerCase());
      staticRoutes.add(`/blogs/${slug.toLowerCase()}`);
    }
    allBlogsData.push({ id: docSnap.id, ...data });
  });

  console.log("Fetching Firestore projects...");
  const projectsSnap = await getDocs(collection(db, 'projects'));
  const firestoreProjectSlugs = new Set();
  projectsSnap.forEach(docSnap => {
    const data = docSnap.data();
    const slug = data.slug || docSnap.id;
    if (slug) {
      firestoreProjectSlugs.add(slug.toLowerCase());
      staticRoutes.add(`/projects/${slug.toLowerCase()}`);
    }
  });

  // Redirects map from next.config.ts
  const redirects = {
    '/services/website-development': '/services/web-development',
    '/services/branding-strategy': '/services/branding',
    '/services/seo-services': '/services/seo',
    '/services/social-media': '/services/social-media-management',
    '/projects/jewellery': '/projects/jwellery',
    '/projects/roseate': '/projects/upstage-collection',
    '/projects/oud': '/projects/oudqua',
    '/explore-more/customer-retention-strategies-scaling-d2c': '/explore-more/scaling-e-commerce-with-email-marketing',
    '/explore-more/power-of-design-systems-branding-web': '/explore-more/how-branding-dictates-business-success',
    '/explore-more/conversion-rate-optimization-turning-traffic-revenue': '/explore-more/psychology-of-high-converting-landing-pages',
    '/explore-more/copywriting-secrets-writing-words-that-sell': '/explore-more/psychology-of-high-converting-landing-pages',
    '/explore-more/why-web-accessibility-is-essential': '/explore-more/why-custom-code-better-than-wordpress',
    '/explore-more/ai-in-digital-marketing-working-smarter': '/explore-more/maximizing-roas-on-meta-ads',
    '/explore-more/dominate-local-seo-regional-businesses': '/explore-more/role-of-seo-in-digital-growth'
  };

  console.log(`Total recognized valid routes in project: ${staticRoutes.size}`);
  console.log(`Total blogs from DB: ${allBlogsData.length}`);

  console.log("\n=== STEP 2: Extracting and Analyzing Links from All Blogs ===");

  const allLinks = [];
  const linkStats = {
    totalBlogs: allBlogsData.length,
    blogsWithLinks: 0,
    totalLinksExtracted: 0,
    internalLinks: 0,
    internalValid: 0,
    internalRedirected: 0,
    internalBroken: 0,
    externalLinks: 0,
    specialLinks: 0, // mailto, tel, anchor only
  };

  const brokenLinksList = [];
  const validInternalLinksList = [];
  const redirectedLinksList = [];
  const externalLinksList = [];

  for (const blog of allBlogsData) {
    const blogTitle = blog.title || 'Untitled';
    const blogSlug = blog.slug || blog.id;
    const blogUrl = `/blogs/${blogSlug}`;
    
    // Combine all content fields
    const content = (blog.description || '') + ' ' + (blog.content || '') + ' ' + (blog.subtitle || '') + ' ' + (blog.excerpt || '');
    
    // Regex to match <a ... href="..." ...>anchor</a>
    const aTagRegex = /<a\s+(?:[^>]*?\s+)?href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let match;
    let blogLinkCount = 0;

    while ((match = aTagRegex.exec(content)) !== null) {
      blogLinkCount++;
      const rawHref = match[1].trim();
      const anchorText = match[2].replace(/<[^>]+>/g, '').trim();

      linkStats.totalLinksExtracted++;

      // Check link type
      if (rawHref.startsWith('mailto:') || rawHref.startsWith('tel:')) {
        linkStats.specialLinks++;
        continue;
      }

      if (rawHref.startsWith('#')) {
        linkStats.specialLinks++;
        continue;
      }

      const isInternal = rawHref.startsWith('/') ||
        /^https?:\/\/(www\.)?southernedgemarketing\.com/i.test(rawHref) ||
        /^https?:\/\/localhost/i.test(rawHref) ||
        (!/^https?:\/\//i.test(rawHref) && !rawHref.startsWith('mailto:') && !rawHref.startsWith('tel:') && !rawHref.startsWith('javascript:'));

      if (isInternal) {
        linkStats.internalLinks++;
        const normalized = normalizePath(rawHref);
        
        // Check if it's exact valid route
        if (staticRoutes.has(normalized)) {
          linkStats.internalValid++;
          validInternalLinksList.push({
            blogSlug,
            blogTitle,
            rawHref,
            normalizedPath: normalized,
            anchorText
          });
        } else if (redirects[normalized]) {
          linkStats.internalRedirected++;
          redirectedLinksList.push({
            blogSlug,
            blogTitle,
            rawHref,
            normalizedPath: normalized,
            redirectTo: redirects[normalized],
            anchorText
          });
        } else {
          // Check if it matches a prefix or has pattern issues
          linkStats.internalBroken++;
          
          // Let's diagnose why it's broken
          let reason = "Route not found";
          let suggestedFix = "";

          if (normalized.startsWith('/blog/')) {
            const candidateSlug = normalized.replace('/blog/', '');
            const fixedPath = `/blogs/${candidateSlug}`;
            reason = "Used '/blog/' instead of '/blogs/'";
            suggestedFix = staticRoutes.has(fixedPath) ? fixedPath : `Fix to existing blog or redirect to /blogs`;
          } else if (normalized.startsWith('/service/')) {
            const candidateSlug = normalized.replace('/service/', '');
            const fixedPath = `/services/${candidateSlug}`;
            reason = "Used '/service/' instead of '/services/'";
            suggestedFix = staticRoutes.has(fixedPath) ? fixedPath : `Fix to existing service or redirect to /services`;
          } else if (normalized.startsWith('/project/')) {
            const candidateSlug = normalized.replace('/project/', '');
            const fixedPath = `/projects/${candidateSlug}`;
            reason = "Used '/project/' instead of '/projects/'";
            suggestedFix = staticRoutes.has(fixedPath) ? fixedPath : `Fix to existing project or redirect to /projects`;
          } else if (normalized.startsWith('/blogs/')) {
            const blogSlugAttempt = normalized.replace('/blogs/', '');
            reason = `Non-existent blog slug: '${blogSlugAttempt}'`;
            suggestedFix = "Update to relevant existing blog or remove link";
          } else if (normalized.startsWith('/services/')) {
            const serviceSlugAttempt = normalized.replace('/services/', '');
            reason = `Non-existent service route: '${serviceSlugAttempt}'`;
            suggestedFix = "Update to valid service route (e.g., /services/web-development, /services/seo, etc.)";
          } else if (normalized.startsWith('/projects/')) {
            const projectSlugAttempt = normalized.replace('/projects/', '');
            reason = `Non-existent project slug: '${projectSlugAttempt}'`;
            suggestedFix = "Update to valid project slug or redirect";
          } else if (normalized.startsWith('/explore-more/')) {
            const articleSlugAttempt = normalized.replace('/explore-more/', '');
            reason = `Non-existent explore-more article slug: '${articleSlugAttempt}'`;
            suggestedFix = "Update to valid article in /explore-more or /blogs";
          } else {
            reason = `Unknown internal URL path: '${normalized}'`;
            suggestedFix = "Map to closest relevant page on site";
          }

          brokenLinksList.push({
            blogSlug,
            blogTitle,
            rawHref,
            normalizedPath: normalized,
            anchorText,
            reason,
            suggestedFix
          });
        }
      } else {
        linkStats.externalLinks++;
        externalLinksList.push({
          blogSlug,
          blogTitle,
          rawHref,
          anchorText
        });
      }
    }

    if (blogLinkCount > 0) {
      linkStats.blogsWithLinks++;
    }
  }

  console.log("\n================ SUMMARY STATS ================");
  console.log(`Total Blogs Analyzed: ${linkStats.totalBlogs}`);
  console.log(`Blogs Containing Links: ${linkStats.blogsWithLinks}`);
  console.log(`Total Links Extracted: ${linkStats.totalLinksExtracted}`);
  console.log(`- Internal Links: ${linkStats.internalLinks}`);
  console.log(`  * Valid Internal Links: ${linkStats.internalValid}`);
  console.log(`  * Redirected Internal Links: ${linkStats.internalRedirected}`);
  console.log(`  * Broken / 404 Internal Links: ${linkStats.internalBroken}`);
  console.log(`- External Links: ${linkStats.externalLinks}`);
  console.log(`- Special Links (mailto/tel/#): ${linkStats.specialLinks}`);

  console.log("\n================ BROKEN LINKS DETAILS ================");
  brokenLinksList.forEach((item, idx) => {
    console.log(`[${idx + 1}] Blog: "${item.blogTitle}" (${item.blogSlug})`);
    console.log(`    Raw Href: ${item.rawHref}`);
    console.log(`    Normalized: ${item.normalizedPath}`);
    console.log(`    Anchor Text: "${item.anchorText}"`);
    console.log(`    Reason: ${item.reason}`);
    console.log(`    Suggested Fix: ${item.suggestedFix}`);
    console.log("----------------------------------------------------");
  });

  console.log("\n================ REDIRECTED LINKS DETAILS ================");
  redirectedLinksList.forEach((item, idx) => {
    console.log(`[${idx + 1}] Blog: "${item.blogTitle}" (${item.blogSlug})`);
    console.log(`    Raw Href: ${item.rawHref}`);
    console.log(`    Redirects To: ${item.redirectTo}`);
    console.log(`    Anchor Text: "${item.anchorText}"`);
    console.log("----------------------------------------------------");
  });

  // Save results to a detailed JSON report file
  const report = {
    generatedAt: new Date().toISOString(),
    stats: linkStats,
    brokenLinks: brokenLinksList,
    redirectedLinks: redirectedLinksList,
    validInternalLinks: validInternalLinksList,
    externalLinks: externalLinksList
  };

  fs.writeFileSync(
    path.join(__dirname, 'blog_links_audit_report.json'),
    JSON.stringify(report, null, 2),
    'utf8'
  );
  console.log("\nFull report saved to scratch/blog_links_audit_report.json");
}

run().catch(console.error);
