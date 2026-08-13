import { NextRequest, NextResponse } from 'next/server';
import { verifyAuth } from '@/lib/auth';
import { db } from '@/lib/firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

export async function PATCH(request: NextRequest, context: any) {
    // 1. Verify Authentication
    const { error, uid } = await verifyAuth(request);
    
    if (error) {
        return error;
    }

    try {
        const params = await context.params;
        const leadId = params.id;
        
        if (!leadId) {
            return NextResponse.json({ error: "Lead ID is required" }, { status: 400 });
        }

        const body = await request.json();
        const { action, payload } = body;

        const leadRef = doc(db, 'contacts', leadId);

        if (action === 'ADD_HISTORY') {
            await updateDoc(leadRef, {
                history: arrayUnion({
                    ...payload,
                    createdAt: new Date().toISOString()
                })
            });
            return NextResponse.json({ success: true }, { status: 200 });
        }
        
        if (action === 'UPDATE_STATUS') {
             await updateDoc(leadRef, {
                 status: payload.status
             });
             return NextResponse.json({ success: true }, { status: 200 });
        }

        return NextResponse.json({ error: "Invalid action" }, { status: 400 });

    } catch (err: any) {
        console.error('Error updating lead:', err);
        return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
    }
}
