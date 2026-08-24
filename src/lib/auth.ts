import { NextRequest, NextResponse } from 'next/server';

const tokenCache = new Map<string, { uid: string; expiresAt: number }>();

export async function verifyAuth(request: NextRequest) {
    const start = performance.now();
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.warn(`[verifyAuth] ⚠️ Missing or invalid Bearer token (${(performance.now() - start).toFixed(1)}ms)`);
        return { error: NextResponse.json({ error: "Unauthorized: Missing or invalid token" }, { status: 401 }), uid: null };
    }

    const token = authHeader.split('Bearer ')[1];
    
    // Check in-memory cache (valid for 5 minutes)
    const now = Date.now();
    const cached = tokenCache.get(token);
    if (cached && cached.expiresAt > now) {
        console.log(`[verifyAuth] ⚡ Token verified via cache (took ${(performance.now() - start).toFixed(1)}ms) - UID: ${cached.uid}`);
        return { error: null, uid: cached.uid };
    }

    console.log('[verifyAuth] 🌐 Cache miss, verifying token via Identity Toolkit API...');
    const apiStart = performance.now();
    try {
        // We use the REST API to verify the token without needing firebase-admin and service accounts
        const apiKey = "AIzaSyBDQKm8HPlLQwSRnrArVyiuET3WvAlX7a8";
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken: token })
        });
        
        const apiTime = performance.now() - apiStart;
        console.log(`[verifyAuth] Identity Toolkit API responded in ${apiTime.toFixed(1)}ms (Status: ${response.status})`);
        
        if (!response.ok) {
            console.error(`[verifyAuth] ❌ Identity Toolkit failed (${(performance.now() - start).toFixed(1)}ms)`);
            return { error: NextResponse.json({ error: "Unauthorized: Invalid token" }, { status: 401 }), uid: null };
        }
        
        const data = await response.json();
        if (data.users && data.users.length > 0) {
            const uid = data.users[0].localId;
            // Cache for 5 minutes
            tokenCache.set(token, { uid, expiresAt: now + 5 * 60 * 1000 });
            console.log(`[verifyAuth] ✅ Token verified successfully in ${(performance.now() - start).toFixed(1)}ms - UID: ${uid}`);
            return { error: null, uid };
        } else {
            console.warn(`[verifyAuth] ⚠️ No user found in token payload (${(performance.now() - start).toFixed(1)}ms)`);
            return { error: NextResponse.json({ error: "Unauthorized: Invalid token" }, { status: 401 }), uid: null };
        }
    } catch (error) {
        console.error(`[verifyAuth] 💥 Error verifying token (${(performance.now() - start).toFixed(1)}ms):`, error);
        return { error: NextResponse.json({ error: "Unauthorized: Token verification failed" }, { status: 401 }), uid: null };
    }
}
