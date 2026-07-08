import { NextRequest, NextResponse } from 'next/server';

export async function verifyAuth(request: NextRequest) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return { error: NextResponse.json({ error: "Unauthorized: Missing or invalid token" }, { status: 401 }), uid: null };
    }

    const token = authHeader.split('Bearer ')[1];
    
    try {
        // We use the REST API to verify the token without needing firebase-admin and service accounts
        const apiKey = "AIzaSyBDQKm8HPlLQwSRnrArVyiuET3WvAlX7a8";
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken: token })
        });
        
        if (!response.ok) {
            return { error: NextResponse.json({ error: "Unauthorized: Invalid token" }, { status: 401 }), uid: null };
        }
        
        const data = await response.json();
        if (data.users && data.users.length > 0) {
            return { error: null, uid: data.users[0].localId };
        } else {
            return { error: NextResponse.json({ error: "Unauthorized: Invalid token" }, { status: 401 }), uid: null };
        }
    } catch (error) {
        console.error('Error verifying token:', error);
        return { error: NextResponse.json({ error: "Unauthorized: Token verification failed" }, { status: 401 }), uid: null };
    }
}
