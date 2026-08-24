import { NextRequest, NextResponse } from 'next/server';
import { verifyAuth } from '@/lib/auth';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

export async function GET(request: NextRequest) {
    const routeStart = performance.now();
    const reqId = Math.random().toString(36).substring(2, 8);
    console.log(`\n================== [API /api/leads] [${reqId}] GET START ==================`);

    // 1. Verify Authentication
    const authStart = performance.now();
    const { error, uid } = await verifyAuth(request);
    const authDuration = performance.now() - authStart;
    console.log(`[API /api/leads] [${reqId}] ⏱️ Auth verification took: ${authDuration.toFixed(1)}ms`);

    if (error) {
        console.warn(`[API /api/leads] [${reqId}] ❌ Auth failed after ${(performance.now() - routeStart).toFixed(1)}ms`);
        return error; // Return the 401 or 500 NextResponse directly
    }

    try {
        // 2. Fetch leads from Firestore using the standard client SDK
        console.log(`[API /api/leads] [${reqId}] 📦 Fetching contacts collection from Firestore...`);
        const firestoreStart = performance.now();
        const contactsRef = collection(db, 'contacts');
        const q = query(contactsRef, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const firestoreDuration = performance.now() - firestoreStart;
        console.log(`[API /api/leads] [${reqId}] ⏱️ Firestore getDocs query took: ${firestoreDuration.toFixed(1)}ms (Found ${snapshot.docs.length} documents)`);

        const parseStart = performance.now();
        const leads = snapshot.docs.map((doc: any) => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                // Handle Firestore Timestamps correctly for JSON serialization
                createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : new Date().toISOString()
            };
        });
        const parseDuration = performance.now() - parseStart;
        console.log(`[API /api/leads] [${reqId}] ⏱️ Document mapping & formatting took: ${parseDuration.toFixed(1)}ms`);

        const totalDuration = performance.now() - routeStart;
        console.log(`[API /api/leads] [${reqId}] 📊 Summary: Auth=${authDuration.toFixed(1)}ms | Firestore=${firestoreDuration.toFixed(1)}ms | Parse=${parseDuration.toFixed(1)}ms | Total=${totalDuration.toFixed(1)}ms`);
        console.log(`================== [API /api/leads] [${reqId}] GET END ==================\n`);

        // 3. Return the data
        return NextResponse.json({ leads }, { status: 200 });
    } catch (err: any) {
        const errorDuration = performance.now() - routeStart;
        console.error(`[API /api/leads] [${reqId}] 💥 Error fetching leads after ${errorDuration.toFixed(1)}ms:`, err);
        return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
    }
}
