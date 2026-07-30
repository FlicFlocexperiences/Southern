import { auth } from './firebase';
import { User, onAuthStateChanged } from 'firebase/auth';

function waitForAuth(): Promise<User | null> {
    return new Promise((resolve) => {
        // If auth state is already resolved, return immediately
        if (auth.currentUser) {
            resolve(auth.currentUser);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe();
            resolve(user);
        });
    });
}

export async function authFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    const user = await waitForAuth();
    
    if (!user) {
        throw new Error("User is not authenticated");
    }
    
    const token = await user.getIdToken();
    
    const headers = new Headers(init?.headers);
    headers.set('Authorization', `Bearer ${token}`);
    
    return fetch(input, {
        ...init,
        headers,
    });
}
