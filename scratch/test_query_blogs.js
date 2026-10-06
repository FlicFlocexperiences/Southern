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

async function main() {
  console.log("Fetching all blogs from Firestore...");
  const blogsSnap = await getDocs(collection(db, 'blogs'));
  console.log(`Found ${blogsSnap.size} blogs in Firestore.`);
  
  const sample = blogsSnap.docs[0].data();
  console.log("Sample blog fields:", Object.keys(sample));
  console.log("Sample blog title:", sample.title);
  console.log("Sample blog slug:", sample.slug);
}

main().catch(console.error);
