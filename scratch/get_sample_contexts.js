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

async function getContexts() {
  const blogsSnap = await getDocs(collection(db, 'blogs'));
  
  const targetRoutes = [
    '/services/branding',
    '/services/web-development',
    '/services/app-development',
    '/services/social-media-management',
    '/services/seo',
    '/services/social-media-management/delhi',
    '/services/web-development/dubai'
  ];

  const results = {};
  targetRoutes.forEach(r => results[r] = []);

  blogsSnap.forEach(docSnap => {
    const data = docSnap.data();
    const blogTitle = data.title || docSnap.id;
    const blogSlug = data.slug || docSnap.id;
    const desc = data.description || '';

    targetRoutes.forEach(route => {
      // Find occurrences of this route in href
      const regex = new RegExp(`<a[^>]*href=["']${route}["'][^>]*>(.*?)<\\/a>`, 'gi');
      let match;
      while ((match = regex.exec(desc)) !== null) {
        if (results[route].length < 3) {
          // Extract surrounding sentence/context (approx 150 chars before and after)
          const startIdx = Math.max(0, match.index - 100);
          const endIdx = Math.min(desc.length, match.index + match[0].length + 100);
          const snippet = desc.substring(startIdx, endIdx)
            .replace(/<[^>]+>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

          results[route].push({
            blogTitle,
            blogSlug,
            anchorText: match[1].replace(/<[^>]+>/g, '').trim(),
            currentHref: route,
            snippet
          });
        }
      }
    });
  });

  console.log(JSON.stringify(results, null, 2));
}

getContexts().catch(console.error);
