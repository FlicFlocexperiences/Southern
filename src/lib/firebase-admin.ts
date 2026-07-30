import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

if (!getApps().length) {
  try {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID || 'southernmarketing-1a7cd',
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL || '',
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
      }),
    });
  } catch (error: any) {
    console.error('Firebase admin initialization error:', error.stack);
  }
}

export const adminAuth = getApps().length > 0 ? getAuth() : null;
export const adminDb = getApps().length > 0 ? getFirestore() : null;
