import React from "react";
import Link from "next/link";

export function AboutPageHero() {
  return (
    <section className="w-full min-h-[50vh] pt-32 pb-8 md:pt-48 md:pb-12 lg:pt-52 lg:pb-16 px-4 flex justify-center relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>


      
      <div className="max-w-[1200px] w-full flex flex-col items-start relative z-10">
        <h1 className="text-[40px] sm:text-[55px] md:text-[75px] leading-[1.1] md:leading-[1.05] font-semibold tracking-[-0.02em] text-[#0f0f0f] w-full max-w-[1100px]">
          We shape Brands
          <span className="inline-block mt-2">that build lasting connections</span>
        </h1>
        
        <div className="flex items-start gap-4 mt-8 md:mt-10 max-w-[550px]">
          <div className="mt-[2px] flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#de5e18">
              <path d="M12 2.5C12 8 16 12 21.5 12C16 12 12 16 12 21.5C12 16 8 12 2.5 12C8 12 12 8 12 2.5Z" />
            </svg>
          </div>
          <p className="text-[18px] md:text-[20px] leading-[1.5] text-[#0f0f0f]">
            We craft brands and digital experiences that build trust, inspire growth, and leave a lasting impact, for businesses across India and the UAE.
          </p>
        </div>


      </div>
    </section>
  );
}
