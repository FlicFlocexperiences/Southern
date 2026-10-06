const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

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

async function inspectSnippets() {
  const blogsSnap = await getDocs(collection(db, 'blogs'));
  
  console.log("=== INSPECTING SAMPLE BLOG CONTENT WITH LINKS ===");
  let sampleCount = 0;
  for (const doc of blogsSnap.docs) {
    const data = doc.data();
    const desc = data.description || '';
    if (desc.includes('/services/branding-and-creative-strategy') || desc.includes('/services/photography-and-videography')) {
      sampleCount++;
      if (sampleCount <= 3) {
        console.log(`\n--- Blog ${sampleCount}: "${data.title}" (slug: ${data.slug || doc.id}) ---`);
        // Find matching paragraph or snippet
        const matches = desc.match(/<p>[^<]*?\/services\/[^<]*?<\/p>/gi) || desc.match(/<li[^>]*>[^<]*?\/services\/[^<]*?<\/li>/gi);
        if (matches) {
          console.log("Matched snippets:", matches.slice(0, 5));
        } else {
          // just print a 500 char slice around the link
          const idx = desc.indexOf('/services/');
          console.log("Context slice:", desc.substring(Math.max(0, idx - 100), Math.min(desc.length, idx + 400)));
        }
      }
    }
  }
}

inspectSnippets().catch(console.error);
