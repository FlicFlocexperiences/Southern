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

async function checkProjects() {
  const pSnap = await getDocs(collection(db, 'projects'));
  console.log(`Checking ${pSnap.size} projects in Firestore...`);
  pSnap.forEach(d => {
    const data = d.data();
    const str = JSON.stringify(data);
    const aMatches = str.match(/href=\\"[^"]*\\"/g);
    if (aMatches) {
      console.log(`Project ${d.id} has links:`, aMatches);
    }
  });
}

checkProjects().catch(console.error);
