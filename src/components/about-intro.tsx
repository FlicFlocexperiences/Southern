"use client";

import React from "react";

export function AboutIntro() {
  const headingText = "Hello! We're Southern Edge Marketing, a results-driven digital marketing agency helping businesses grow, scale, and succeed in the digital world.";
  const words = headingText.split(" ");

  return (
    <section className="w-full bg-[#fffff0] px-4 pt-2 pb-8 md:pt-0 md:pb-12 flex justify-center overflow-hidden">
      <div className="max-w-[1200px] w-full flex flex-col items-start">
        <div className="w-full">
          {/* Label */}
          <div className="text-[14px] md:text-[16px] tracking-widest font-medium mb-4">
            <span className="text-[#ff5100]">[</span>
            <span className="text-black mx-2">ABOUT US</span>
            <span className="text-[#ff5100]">]</span>
          </div>
          
          {/* Divider */}
          <hr className="w-full border-t border-[#30261c]/10 mb-10 md:mb-12 origin-left" />

          <div className="w-full max-w-[950px]">
            {/* Heading paragraph with split-words */}
            <p className="text-[22px] md:text-[32px] leading-[1.4] text-[#4a4a4a] flex flex-wrap gap-x-[8px]">
              {words.map((word, index) => {
                const isBold = word.includes("We're") || word.includes("Southern") || word.includes("Edge") || word.includes("Marketing,");
                return (
                  <span 
                    key={index} 
                    className={isBold ? "text-[#ff5100] font-semibold" : ""}
                  >
                    {word}
                  </span>
                );
              })}
            </p>

            {/* Body paragraph */}
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#4a4a4a] mt-6 md:mt-8">
              At Southern Edge Marketing, we partner with brands across the globe to create impactful digital experiences that drive measurable results. From stunning website development and high-converting performance marketing campaigns to strategic social media management, SEO, branding, and professional video & photography production, we provide end-to-end marketing solutions tailored to your business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
