'use client';

import { useAuth } from '@/components/AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function AuthorityLayout({ children }: { children: React.ReactNode }) {
    const { user, loading, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/nullify');
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white text-sm animate-pulse">Verifying Authority...</div>
            </div>
        );
    }

    if (!user) {
        return null; // Will redirect in useEffect
    }

    return (
        <div className="min-h-screen bg-[#f2decc] text-black flex flex-col">
            <nav className="bg-[#f2decc] border-b border-black/10 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-6">
                    <h1 className="text-xl font-bold tracking-wider">AUTHORITY</h1>
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <Link href="/authority" className="text-black/60 hover:text-black transition-colors">Dashboard</Link>
                        <Link href="/authority/leads" className="text-black/60 hover:text-black transition-colors">Leads</Link>
                        <Link href="/authority/blogs" className="text-black/60 hover:text-black transition-colors">Blogs</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-black/50 text-xs">{user.email}</span>
                    <button 
                        onClick={() => logout()}
                        className="text-xs bg-black/5 hover:bg-black/10 border border-black/10 px-3 py-1.5 rounded transition-colors text-black"
                    >
                        Sign Out
                    </button>
                </div>
            </nav>
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}
