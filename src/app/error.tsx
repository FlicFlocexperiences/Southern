"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Uncaught application error:", error);
  }, [error]);

  return (
    <div className="w-full min-h-screen bg-[#f2decc] flex flex-col items-center justify-center text-center px-4 py-20">
      <p className="font-medium text-[20px] mb-4 tracking-wide">
        <span className="text-[#de5e18]">[</span>
        <span className="text-black mx-2 uppercase tracking-[-0.6px]">Something Went Wrong</span>
        <span className="text-[#de5e18]">]</span>
      </p>
      <h1 className="text-[42px] md:text-[64px] font-semibold text-black leading-tight tracking-tight mb-6">
        EXPERIENCING TECHNICAL DIFFICULTIES
      </h1>
      <p className="text-[16px] md:text-[18px] text-black/70 mb-8 max-w-[540px]">
        We encountered an unexpected issue while loading this page. Please try refreshing or return home.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="bg-[#de5e18] text-white px-8 py-3.5 rounded-full font-medium hover:bg-black transition-colors cursor-pointer"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-black/10 text-black px-8 py-3.5 rounded-full font-medium hover:bg-black/20 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
