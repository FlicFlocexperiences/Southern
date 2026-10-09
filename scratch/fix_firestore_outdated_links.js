const { initializeApp } = require('firebase/app');
const { getFirestore, doc, getDoc, updateDoc } = require('firebase/firestore');

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

const URL_MAPPINGS = [
  // Multi-word specifics first
  { from: /\/services\/custom-website-and-app-development/g, to: '/services/web-development' },
  { from: /\/services\/website-and-app-development/g, to: '/services/web-development' },
  { from: /\/services\/custom-software-development/g, to: '/services/web-development' },
  { from: /\/services\/ui-ux-planning/g, to: '/services/web-development' },
  { from: /\/services\/website-development/g, to: '/services/web-development' },

  { from: /\/services\/strategic-branding-and-creative-strategy/g, to: '/services/branding' },
  { from: /\/services\/branding-and-creative-strategy/g, to: '/services/branding' },
  { from: /\/services\/branding-strategy/g, to: '/services/branding' },

  { from: /\/services\/commercial-photography-and-videography/g, to: '/services/social-media-management' },
  { from: /\/services\/photography-and-videography/g, to: '/services/social-media-management' },
  { from: /\/services\/targeted-social-media-management/g, to: '/services/social-media-management' },
  { from: /\/services\/lead-generation-sales-campaigns/g, to: '/services/social-media-management' },

  { from: /\/services\/scalable-application-development-solutions/g, to: '/services/app-development' },
  { from: /\/services\/application-development/g, to: '/services/app-development' },

  { from: /\/services\/advanced-search-engine-optimization-services/g, to: '/services/seo' },
  { from: /\/services\/seo-services/g, to: '/services/seo' },
];

const TARGET_DOC_IDS = [
  'DOWE2z1SgyL8g41qUJtf',
  'NbRZpN2sEqA54oy0m1xA',
  'QE1apDDqL8r8WGehsD29',
  'vbZ4ha9VRP0wvFOq0AYR'
];

async function run() {
  console.log('Starting Firestore blog link fix...');

  for (const docId of TARGET_DOC_IDS) {
    const docRef = doc(db, 'blogs', docId);
    const snap = await getDoc(docRef);
    if (!snap.exists()) {
      console.log(`Document ${docId} does not exist!`);
      continue;
    }

    const data = snap.data();
    let updatedDescription = data.description || '';
    let changeCount = 0;

    for (const rule of URL_MAPPINGS) {
      const match = updatedDescription.match(rule.from);
      if (match) {
        changeCount += match.length;
        updatedDescription = updatedDescription.replace(rule.from, rule.to);
      }
    }

    if (changeCount > 0) {
      await updateDoc(docRef, { description: updatedDescription });
      console.log(`Successfully updated ${docId} (${data.slug}): replaced ${changeCount} outdated links.`);
    } else {
      console.log(`No outdated links found in ${docId}.`);
    }
  }

  console.log('Finished updating all target documents.');
  process.exit(0);
}

run().catch((err) => {
  console.error('Error updating Firestore:', err);
  process.exit(1);
});
