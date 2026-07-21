"use client";

import React from "react";
import Link from "next/link";

export function AboutIntro() {
  const headingText = "Hello! We're Southern Edge Marketing, a results-driven digital marketing agency in Delhi, India, helping businesses grow, scale, and succeed in the digital world.";
  const words = headingText.split(" ");

  return (
    <section className="w-full bg-[#f2decc] px-4  pb-8 md:pt-0 md:pb-12 flex justify-center overflow-hidden">
      <div className="max-w-[1200px] w-full flex flex-col items-start">
        <div className="w-full">
          {/* Label */}
          <div className="text-[14px] md:text-[16px] tracking-widest font-medium mb-4">
            <span className="text-[#de5e18]">[</span>
            <span className="text-black mx-2">ABOUT US</span>
            <span className="text-[#de5e18]">]</span>
          </div>
          
          {/* Divider */}
          <hr className="w-full border-t border-[#432d1c]/10 mb-10 md:mb-12 origin-left" />

          <div className="w-full max-w-[950px]">
            {/* Heading paragraph with split-words */}
            <p className="text-[22px] md:text-[32px] leading-[1.4] text-[#4a4a4a] flex flex-wrap gap-x-[8px]">
              {words.map((word, index) => {
                const isBold = word.includes("We're") || word.includes("Southern") || word.includes("Edge") || word.includes("Marketing,");
                return (
                  <span 
                    key={index} 
                    className={isBold ? "text-[#de5e18] font-semibold" : ""}
                  >
                    {word}
                  </span>
                );
              })}
            </p>

            {/* Body paragraph */}
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#4a4a4a] mt-6 md:mt-8">
              We partner with brands to create impactful digital experiences that drive measurable results — from website development and performance marketing to social media management, SEO, branding, and video & photography production. Whether you're a growing D2C brand or an established business ready to scale, we provide end-to-end marketing solutions tailored to your goals.
            </p>

            {/* CTA Button */}
            <div className="mt-8 md:mt-10">
              <Link href="/contact">
                <button 
                  className="relative w-[260px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] overflow-hidden shadow-[0px_6px_16px_rgba(222,94,24,0.35)] hover:shadow-[0px_8px_20px_rgba(222,94,24,0.5)] transition-shadow group cursor-pointer"
                  aria-label="Let's Work Together"
                >
                  {/* Inner Left Pill with right shadow */}
                  <div className="absolute left-[0px] top-0 w-[200px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[8px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                    <span className="font-medium text-[17px] text-white tracking-tight whitespace-nowrap">
                      Let's Work Together
                    </span>
                  </div>
                  
                  {/* Right Arrow Icon */}
                  <div className="absolute right-[22px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
                    <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
