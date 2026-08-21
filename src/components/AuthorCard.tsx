"use client";

import React from "react";
import Link from "next/link";

export interface AuthorCardProps {
  name?: string;
  role?: string;
  authorSlug?: string;
  image?: string;
  shortBio?: string;
}

export function AuthorCard({
  name = "Ameet Nangia",
  role = "Digital Marketer | SEO | Adwords",
  authorSlug = "/authors/ameet-nangia",
  image = "/assets/team/ameet.png",
  shortBio = "Founder & Lead Digital Strategist driving performance marketing, technical SEO, and scalable enterprise growth.",
}: AuthorCardProps) {
  return (
    <div className="bg-white border border-black/10 rounded-xl p-6 text-[#0f0f0f] shadow-sm relative overflow-hidden group text-left">
      <div className="absolute top-[-20%] right-[-10%] w-[50%] aspect-square rounded-full bg-[#de5e18]/10 blur-[30px] pointer-events-none" />

      {/* Author Header */}
      <div className="flex items-center gap-3.5 mb-3.5 relative z-10">
        <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-[#de5e18]/30 shadow-sm shrink-0 relative bg-[#ffd1b8]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold tracking-widest text-[#de5e18] uppercase">
              Author
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#de5e18]" />
          </div>
          <h3 className="text-[17px] font-bold text-black leading-tight tracking-tight">
            {name}
          </h3>
          <p className="text-[12px] font-semibold text-[#de5e18] leading-tight mt-0.5 truncate">
            {role}
          </p>
        </div>
      </div>

      {/* Short Bio */}
      <p className="text-[14px] text-black/75 leading-relaxed mb-6 font-light relative z-10">
        {shortBio}
      </p>

      {/* Action Button */}
      <Link href={authorSlug} className="block mt-4 w-full relative z-10">
        <button
          className="relative w-full h-[58px] sm:h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] overflow-hidden shadow-[0px_6px_16px_rgba(222,94,24,0.35)] hover:shadow-[0px_8px_20px_rgba(222,94,24,0.5)] transition-shadow group/btn cursor-pointer"
          aria-label={`View ${name}'s profile`}
        >
          <div className="absolute left-0 top-0 w-[calc(100%-45px)] h-full rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2 transform group-hover/btn:translate-x-[3px] transition-transform duration-300 z-10 px-2 sm:px-3">
            <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
            <span className="font-medium text-[13px] sm:text-[14px] lg:text-[15px] text-white tracking-tight whitespace-nowrap">
              View Author Profile
            </span>
          </div>
          <div className="absolute right-[20px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover/btn:translate-x-[3px] transition-transform duration-300 z-0">
            <svg
              className="w-[21px] h-[21px] text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default AuthorCard;
