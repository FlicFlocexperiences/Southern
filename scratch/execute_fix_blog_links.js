const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, doc, updateDoc, writeBatch } = require('firebase/firestore');
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

// Replacement rules: { searchPattern / literal, replacement }
const replacementRules = [
  // Specific legacy domain URLs
  { from: /https?:\/\/(www\.)?southernmarketing\.com\/services\/branding-and-creative-strategy/gi, to: '/services/branding' },
  { from: /https?:\/\/(www\.)?southernmarketing\.com\/services\/website-and-app-development/gi, to: '/services/web-development' },
  { from: /https?:\/\/(www\.)?southernmarketing\.com\/services\/social-media-management/gi, to: '/services/social-media-management' },
  { from: /https?:\/\/(www\.)?southernmarketing\.com\/services\/seo/gi, to: '/services/seo' },
  { from: /https?:\/\/(www\.)?southernmarketing\.com\/services\/application-development/gi, to: '/services/app-development' },
  { from: /https?:\/\/(www\.)?southernmarketing\.com\/services\/photography-and-videography/gi, to: '/services/social-media-management' },
  { from: /https?:\/\/(www\.)?southernmarketing\.com\/digital-marketing-agency-dubai/gi, to: '/services/web-development/dubai' },
  { from: /https?:\/\/(www\.)?southernmarketing\.com/gi, to: '' },
  
  // Broken relative service URLs -> Closest valid routes
  { from: /href=["']\/services\/branding-and-creative-strategy["']/gi, to: 'href="/services/branding"' },
  { from: /href=["']\/services\/website-and-app-development["']/gi, to: 'href="/services/web-development"' },
  { from: /href=["']\/services\/photography-and-videography["']/gi, to: 'href="/services/social-media-management"' },
  { from: /href=["']\/services\/application-development["']/gi, to: 'href="/services/app-development"' },
  { from: /href=["']\/services\/targeted-social-media-management["']/gi, to: 'href="/services/social-media-management"' },
  { from: /href=["']\/services\/strategic-branding-and-creative-strategy["']/gi, to: 'href="/services/branding"' },
  { from: /href=["']\/services\/custom-software-development["']/gi, to: 'href="/services/web-development"' },
  { from: /href=["']\/services\/ui-ux-planning["']/gi, to: 'href="/services/web-development"' },
  { from: /href=["']\/services\/lead-generation-sales-campaigns["']/gi, to: 'href="/services/social-media-management"' },
  { from: /href=["']\/services\/scalable-application-development-solutions["']/gi, to: 'href="/services/app-development"' },
  { from: /href=["']\/services\/advanced-search-engine-optimization-services["']/gi, to: 'href="/services/seo"' },

  // Dummy anchor in specific blog
  { from: /href=["']#["']([^>]*>best Meta ads agency in Delhi<\/a>)/gi, to: 'href="/services/social-media-management/delhi"$1' },
];

function cleanContent(text) {
  if (!text || typeof text !== 'string') return text;
  let updated = text;
  for (const rule of replacementRules) {
    updated = updated.replace(rule.from, rule.to);
  }
  return updated;
}

async function fixAllBlogLinks() {
  console.log("=== STEP 1: Fetching all blogs from Firestore ===");
  const blogsSnap = await getDocs(collection(db, 'blogs'));
  console.log(`Found ${blogsSnap.size} blogs.`);

  let modifiedBlogsCount = 0;
  let totalReplacementsCount = 0;
  const updatesToCommit = [];

  for (const docSnap of blogsSnap.docs) {
    const data = docSnap.data();
    const docId = docSnap.id;
    let hasChanges = false;
    const updatePayload = {};

    const fieldsToProcess = ['description', 'content', 'subtitle', 'metaDescription', 'excerpt'];
    for (const field of fieldsToProcess) {
      if (data[field] && typeof data[field] === 'string') {
        const original = data[field];
        const cleaned = cleanContent(original);
        if (original !== cleaned) {
          hasChanges = true;
          updatePayload[field] = cleaned;
          // Count diff occurrences
          const beforeMatches = (original.match(/\/services\/(branding-and-creative-strategy|website-and-app-development|photography-and-videography|application-development|targeted-social-media-management|strategic-branding-and-creative-strategy|custom-software-development|ui-ux-planning|lead-generation-sales-campaigns|scalable-application-development-solutions|advanced-search-engine-optimization-services)/g) || []).length;
          totalReplacementsCount += beforeMatches;
        }
      }
    }

    if (hasChanges) {
      modifiedBlogsCount++;
      updatesToCommit.push({
        id: docId,
        title: data.title || docId,
        slug: data.slug || docId,
        payload: updatePayload
      });
    }
  }

  console.log(`\n=== DRY RUN / AUDIT SUMMARY ===`);
  console.log(`Blogs requiring updates: ${modifiedBlogsCount} / ${blogsSnap.size}`);
  console.log(`Estimated broken link replacements: ${totalReplacementsCount}`);

  console.log("\n=== STEP 2: Executing Database Updates in Batches ===");
  
  // Batch updates in chunks of 20
  const CHUNK_SIZE = 20;
  for (let i = 0; i < updatesToCommit.length; i += CHUNK_SIZE) {
    const chunk = updatesToCommit.slice(i, i + CHUNK_SIZE);
    const batch = writeBatch(db);

    for (const item of chunk) {
      const docRef = doc(db, 'blogs', item.id);
      batch.update(docRef, item.payload);
    }

    await batch.commit();
    console.log(`Committed batch ${Math.floor(i / CHUNK_SIZE) + 1} (${chunk.length} blogs updated)...`);
  }

  console.log("\n🎉 All database updates successfully committed to Firestore!");
}

fixAllBlogLinks().catch(console.error);
