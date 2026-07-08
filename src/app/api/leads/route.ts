import { NextRequest, NextResponse } from 'next/server';
import { verifyAuth } from '@/lib/auth';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

export async function GET(request: NextRequest) {
    // 1. Verify Authentication
    const { error, uid } = await verifyAuth(request);
    
    if (error) {
        return error; // Return the 401 or 500 NextResponse directly
    }

    try {
        // 2. Fetch leads from Firestore using the standard client SDK
        const contactsRef = collection(db, 'contacts');
        const q = query(contactsRef, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        
        const leads = snapshot.docs.map((doc: any) => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                // Handle Firestore Timestamps correctly for JSON serialization
                createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : new Date().toISOString()
            };
        });

        // 3. Return the data
        return NextResponse.json({ leads }, { status: 200 });
    } catch (err: any) {
        console.error('Error fetching leads:', err);
        return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
    }
}
