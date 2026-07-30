"use client";

import React, { useState, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We learn your business, audience, and competitors before we touch a single ad or asset.",
  },
  {
    num: "02",
    title: "Design the strategy",
    desc: "A content and channel plan built around what will actually move your numbers.",
  },
  {
    num: "03",
    title: "Build & launch",
    desc: "Website, creative, and campaigns go live, built to perform from day one.",
  },
  {
    num: "04",
    title: "Optimize & scale",
    desc: "We track what's working, cut what isn't, and double down on the wins.",
  },
];

export const HowWeWork = () => {
  const duplicatedSteps = [...steps, ...steps, ...steps, ...steps];

  return (
    <section className="w-full bg-[#f2decc] py-16 md:py-24 px-6 md:px-10 lg:px-[90px] flex flex-col items-center relative z-10 select-none">
      <div className="w-full max-w-[1480px] flex flex-col items-start">
        
        {/* Section Pill */}
        <p className="font-medium text-[18px] md:text-[22px] mb-4 tracking-wide">
          <span className="text-[#de5e18]">[</span>
          <span className="text-black mx-2 uppercase font-semibold">HOW WE WORK</span>
          <span className="text-[#de5e18]">]</span>
        </p>

        {/* Section Heading */}
        <h2 className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[85px] font-bold text-black leading-[1.02] tracking-tight mb-12 md:mb-16 max-w-[950px]">
          From attention to action, in four steps
        </h2>

        {/* Desktop: Static Grid (Visible on >= 640px) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white border border-black/8 p-8 md:p-9 rounded-[24px] md:rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.045)] transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[36px] font-bold text-[#de5e18] tracking-tighter select-none">
                    {step.num}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#de5e18]/30 group-hover:bg-[#de5e18] transition-colors duration-300" />
                </div>

                <h3 className="text-[22px] md:text-[24px] font-bold text-[#0f0f0f] mb-3 leading-snug select-none">
                  {step.title}
                </h3>

                <p className="text-[15px] md:text-[16px] text-black/70 leading-relaxed font-normal select-none">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Infinite Horizontal Marquee Carousel (Visible on < 640px) */}
        <div className="sm:hidden block w-full relative overflow-hidden py-4 -mx-6 px-6">
          {/* Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f2decc] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f2decc] to-transparent z-20 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-logo-slide flex gap-6 w-max hover:[animation-play-state:paused] cursor-pointer">
            {duplicatedSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-white border border-black/8 p-8 rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.045)] transition-all duration-300 flex flex-col justify-between relative group w-[260px] sm:w-[320px] shrink-0"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[36px] font-bold text-[#de5e18] tracking-tighter select-none">
                      {step.num}
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#de5e18]/30 group-hover:bg-[#de5e18] transition-colors duration-300" />
                  </div>

                  <h3 className="text-[22px] font-bold text-[#0f0f0f] mb-3 leading-snug select-none">
                    {step.title}
                  </h3>

                  <p className="text-[15px] text-black/70 leading-relaxed font-normal select-none">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
