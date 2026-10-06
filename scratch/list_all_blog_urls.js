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

async function listAll() {
  const blogsSnap = await getDocs(collection(db, 'blogs'));
  const blogs = [];
  blogsSnap.forEach(d => {
    const data = d.data();
    blogs.push({
      title: data.title || 'Untitled',
      slug: data.slug || d.id
    });
  });

  blogs.sort((a, b) => a.title.localeCompare(b.title));

  console.log(`Total blogs: ${blogs.length}`);
  blogs.forEach((b, i) => {
    console.log(`${i+1}. [${b.title}](https://www.southernedgemarketing.com/blogs/${b.slug}) (Route: /blogs/${b.slug})`);
  });
}

listAll().catch(console.error);
