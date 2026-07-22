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
          </div>
        </div>
      </div>
    </section>
  );
}
