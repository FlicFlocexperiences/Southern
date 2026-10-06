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

async function inspectSpecial() {
  const snap = await getDocs(collection(db, 'blogs'));
  snap.forEach(docSnap => {
    const d = docSnap.data();
    const content = (d.description || '') + ' ' + (d.content || '');
    const aTagRegex = /<a\s+(?:[^>]*?\s+)?href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let m;
    while ((m = aTagRegex.exec(content)) !== null) {
      const href = m[1].trim();
      if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
        console.log(`Blog: "${d.title}" (${d.slug || docSnap.id}) -> Special href: ${href}, anchor: "${m[2]}"`);
      }
    }
  });
}
inspectSpecial().catch(console.error);
