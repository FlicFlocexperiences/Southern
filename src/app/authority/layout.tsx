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
            <nav className="bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8D8C8] px-4 sm:px-6 md:px-10 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 sticky top-0 z-50 shadow-xs">
                <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-8">
                    <Link href="/authority/leads" className="text-lg sm:text-xl font-extrabold tracking-widest text-[#4A332A] shrink-0 hover:opacity-90 transition-opacity">
                        AUTHORITY
                    </Link>
                    <div className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold bg-[#F6E9DE]/70 p-1 rounded-xl border border-[#E8D8C8]/70">
                        <Link 
                            href="/authority/leads" 
                            className={`px-3 sm:px-4 py-1.5 rounded-lg transition-all ${
                                isLeadsActive 
                                    ? 'bg-[#4A332A] text-white shadow-xs font-bold' 
                                    : 'text-[#4A332A]/70 hover:text-[#4A332A] hover:bg-[#EBD8C3]/50'
                            }`}
                        >
                            Leads
                        </Link>
                        <Link 
                            href="/authority/blogs" 
                            className={`px-3 sm:px-4 py-1.5 rounded-lg transition-all ${
                                isBlogsActive 
                                    ? 'bg-[#4A332A] text-white shadow-xs font-bold' 
                                    : 'text-[#4A332A]/70 hover:text-[#4A332A] hover:bg-[#EBD8C3]/50'
                            }`}
                        >
                            Blogs
                        </Link>
                        <Link 
                            href="/authority/projects" 
                            className={`px-3 sm:px-4 py-1.5 rounded-lg transition-all ${
                                isProjectsActive 
                                    ? 'bg-[#4A332A] text-white shadow-xs font-bold' 
                                    : 'text-[#4A332A]/70 hover:text-[#4A332A] hover:bg-[#EBD8C3]/50'
                            }`}
                        >
                            Projects
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 pt-1 sm:pt-0 border-t sm:border-t-0 border-[#E8D8C8]/60">
                    <div className="flex items-center gap-2 min-w-0">
                        <div className="w-7 h-7 rounded-full bg-[#EBD8C3] text-[#4A332A] font-bold text-xs flex items-center justify-center shrink-0 border border-white shadow-xs">
                            {user?.email ? user.email.charAt(0).toUpperCase() : 'A'}
                        </div>
                        <span className="text-[#4A332A]/70 text-xs sm:text-sm font-medium truncate max-w-[160px] sm:max-w-[220px]">
                            {user?.email || "Admin"}
                        </span>
                    </div>
                    <button 
                        onClick={() => logout()}
                        className="text-xs sm:text-sm font-semibold flex items-center gap-1.5 border border-[#E8D8C8] hover:bg-[#E8D8C8]/60 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg transition-colors text-[#4A332A] whitespace-nowrap bg-white/80 shadow-xs cursor-pointer"
                    >
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        <span>Sign Out</span>
                    </button>
                </div>
            </nav>
            <main className="flex-1 w-full">
                {children}
            </main>
        </div>
    );
}
