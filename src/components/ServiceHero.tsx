import React from 'react';
import Link from 'next/link';

interface ServiceHeroProps {
  title: string;
  tagline?: string;
  breadcrumbTitle: string;
}

export function ServiceHero({ title, tagline, breadcrumbTitle }: ServiceHeroProps) {
  return (
    <>
      {/* Top Hero Section - Full Width */}
      <div className="w-full bg-[#432d1c] text-white pt-[120px] lg:pt-[160px] pb-14 px-4 sm:px-6 lg:px-12 relative overflow-hidden text-center flex flex-col items-center">
        <div className="text-[11px] sm:text-[12px] tracking-[0.2em] font-bold text-[#de5e18] uppercase mb-2">
          [ SERVICE ]
        </div>

        <h1 className="text-[26px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold leading-[1.1] tracking-tight mb-3 max-w-[800px] text-white">
          {title}
        </h1>

        <p className="text-[13px] sm:text-[15px] text-white/70 max-w-[600px] leading-relaxed mb-5 font-light">
          {tagline || "Engineered to convert visitors into customers, not just look good. High-performance, mobile-first growth systems."}
        </p>

        <Link href="/contact" className="inline-block">
          <button 
            className="relative w-[220px] sm:w-[240px] h-[52px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] overflow-hidden shadow-[0px_6px_16px_rgba(222,94,24,0.35)] hover:shadow-[0px_8px_20px_rgba(222,94,24,0.5)] transition-shadow group cursor-pointer"
            aria-label="For Consultation"
          >
            <div className="absolute left-0 top-0 w-[165px] sm:w-[185px] h-[52px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
              <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
              <span className="font-medium text-[14px] sm:text-[15px] text-white tracking-tight whitespace-nowrap">
                For Consultation
              </span>
            </div>
            
            <div className="absolute right-[20px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
              <svg className="w-[20px] h-[20px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </button>
        </Link>
      </div>

      {/* Breadcrumb Navigation - Moved outside the dark hero */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-6">
        <div className="flex items-center gap-2 text-[13px] sm:text-[14px] text-black/60 font-medium px-1">
          <Link href="/" className="hover:text-[#de5e18] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#de5e18] transition-colors">Services</Link>
          <span>/</span>
          <span className="text-[#de5e18] font-semibold truncate max-w-[200px] sm:max-w-none">{breadcrumbTitle}</span>
        </div>
      </div>
    </>
  );
}
