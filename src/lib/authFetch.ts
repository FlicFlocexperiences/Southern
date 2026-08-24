import { auth } from './firebase';
import { User, onAuthStateChanged } from 'firebase/auth';

function waitForAuth(): Promise<User | null> {
    const t0 = performance.now();
    return new Promise((resolve) => {
        if (auth.currentUser) {
            console.log(`[authFetch] Auth state already ready (${(performance.now() - t0).toFixed(1)}ms)`);
            resolve(auth.currentUser);
            return;
        }

        console.log('[authFetch] Waiting for onAuthStateChanged...');
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(`[authFetch] onAuthStateChanged resolved in ${(performance.now() - t0).toFixed(1)}ms, user:`, user?.email || 'null');
            unsubscribe();
            resolve(user);
        });
    });
}

export async function authFetch(input: RequestInfo | URL, init?: RequestInit, directUser?: User | null): Promise<Response> {
    const totalStart = performance.now();
    const urlStr = typeof input === 'string' ? input : input.toString();
    console.log(`[authFetch] 🚀 Starting request to: ${urlStr}`);

    const authWaitStart = performance.now();
    const user = directUser || (await waitForAuth());
    const authWaitTime = performance.now() - authWaitStart;
    
    if (!user) {
        console.error(`[authFetch] ❌ User is not authenticated (${(performance.now() - totalStart).toFixed(1)}ms)`);
        throw new Error("User is not authenticated");
    }
    
    const tokenStart = performance.now();
    const token = await user.getIdToken(false);
    const tokenTime = performance.now() - tokenStart;
    console.log(`[authFetch] 🔑 Got ID token in ${tokenTime.toFixed(1)}ms (auth wait: ${authWaitTime.toFixed(1)}ms)`);
    
    const headers = new Headers(init?.headers);
    headers.set('Authorization', `Bearer ${token}`);
    
    const fetchStart = performance.now();
    const response = await fetch(input, {
        ...init,
        headers,
    });
    const fetchTime = performance.now() - fetchStart;
    const totalTime = performance.now() - totalStart;

    console.log(`[authFetch] 🏁 Request completed to ${urlStr} - Status: ${response.status} | Network fetch: ${fetchTime.toFixed(1)}ms | Total authFetch: ${totalTime.toFixed(1)}ms`);
    
    return response;
}
