import Link from "next/link";

// The site's signature CTA: gradient pill with a live green dot and arrow.
export function ConsultButton({ label = "For Consultation", href = "/contact" }: { label?: string; href?: string }) {
  return (
    <Link href={href} className="inline-block">
      <button
        className="relative w-[220px] sm:w-[240px] h-[52px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] overflow-hidden shadow-[0px_6px_16px_rgba(222,94,24,0.35)] hover:shadow-[0px_8px_20px_rgba(222,94,24,0.5)] transition-shadow group cursor-pointer"
        aria-label={label}
      >
        <div className="absolute left-0 top-0 w-[165px] sm:w-[185px] h-[52px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
          <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
          <span className="font-medium text-[14px] sm:text-[15px] text-white tracking-tight whitespace-nowrap">{label}</span>
        </div>
        <div className="absolute right-[20px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
          <svg className="w-[20px] h-[20px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </button>
    </Link>
  );
}

export function ArrowCircle() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#f2decc]/50 group-hover:bg-[#ff5d2a] group-hover:text-white text-[#3b2b23] flex items-center justify-center transition-colors duration-300 shrink-0 ml-2">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </div>
  );
}
