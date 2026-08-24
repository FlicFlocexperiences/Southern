'use client';

import { useAuth } from '@/components/AuthProvider';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function AuthorityLayout({ children }: { children: React.ReactNode }) {
    const { user, loading, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/nullify');
        }
    }, [user, loading, router]);

    if (!loading && !user) {
        return null; // Will redirect in useEffect
    }

    const isLeadsActive = pathname?.startsWith('/authority/leads');
    const isBlogsActive = pathname?.startsWith('/authority/blogs');
    const isProjectsActive = pathname?.startsWith('/authority/projects');

    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[#FAF7F2] text-[#4A332A] flex flex-col">
            <nav className="bg-[#FAF7F2] border-b border-[#E8D8C8] px-6 md:px-10 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sticky top-0 z-50">
                <div className="flex items-center gap-6 md:gap-8 w-full sm:w-auto justify-between sm:justify-start">
                    <h1 className="text-xl font-extrabold tracking-widest text-[#4A332A]">AUTHORITY</h1>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                        <Link 
                            href="/authority/leads" 
                            className={`px-4 py-1.5 rounded-lg transition-colors ${
                                isLeadsActive 
                                    ? 'bg-[#EBD8C3] text-[#4A332A]' 
                                    : 'text-[#4A332A]/70 hover:text-[#4A332A] hover:bg-[#EBD8C3]/40'
                            }`}
                        >
                            Leads
                        </Link>
                        <Link 
                            href="/authority/blogs" 
                            className={`px-4 py-1.5 rounded-lg transition-colors ${
                                isBlogsActive 
                                    ? 'bg-[#EBD8C3] text-[#4A332A]' 
                                    : 'text-[#4A332A]/70 hover:text-[#4A332A] hover:bg-[#EBD8C3]/40'
                            }`}
                        >
                            Blogs
                        </Link>
                        <Link 
                            href="/authority/projects" 
                            className={`px-4 py-1.5 rounded-lg transition-colors ${
                                isProjectsActive 
                                    ? 'bg-[#EBD8C3] text-[#4A332A]' 
                                    : 'text-[#4A332A]/70 hover:text-[#4A332A] hover:bg-[#EBD8C3]/40'
                            }`}
                        >
                            Projects
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                    <span className="text-[#4A332A]/60 text-sm font-medium truncate max-w-[200px]">{user?.email || ""}</span>
                    <button 
                        onClick={() => logout()}
                        className="text-sm font-medium flex items-center gap-2 border border-[#E8D8C8] hover:bg-[#E8D8C8]/50 px-4 py-2 rounded-lg transition-colors text-[#4A332A] whitespace-nowrap bg-white/50"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        Sign Out
                    </button>
                </div>
            </nav>
            <main className="flex-1 w-full">
                {children}
            </main>
        </div>
    );
}
