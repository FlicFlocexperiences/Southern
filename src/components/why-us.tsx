"use client";

import React from "react";

const whyUsPoints = [
  {
    title: "Outcomes, Not Optics",
    desc: "We build for outcomes, not optics. Every campaign ties back to leads, sales, or bookings — not just likes.",
    icon: "/1 copy.svg",
  },
  {
    title: "Content That Travels",
    desc: "We know what makes content travel. Our team has engineered reach and virality for brands across F&B, e-commerce, and professional services — we know the difference between noise and momentum.",
    icon: "/2.svg",
  },
  {
    title: "One Team, Every Discipline",
    desc: "Strategy, design, dev, and marketing under one roof means nothing gets lost in translation between agencies.",
    icon: "/3.svg",
  },
  {
    title: "Dual-Market Experience",
    desc: "We've grown brands across India and Dubai, so we understand both markets' audiences, platforms, and buying behavior.",
    icon: "/4.svg",
  },
];

export const WhyUs = () => {
  return (
    <section className="w-full bg-[#fffff0] py-16 md:py-24 px-6 md:px-10 lg:px-[90px] flex flex-col items-center relative z-10">
      <div className="w-full max-w-[1480px] flex flex-col items-start">
        
        {/* Section Pill */}
        <p className="font-medium text-[18px] md:text-[22px] mb-4 tracking-wide">
          <span className="text-[#ff5100]">[</span>
          <span className="text-black mx-2 uppercase font-semibold">WHY SOUTHERN EDGE</span>
          <span className="text-[#ff5100]">]</span>
        </p>

        {/* Section Heading */}
        <h2 className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[85px] font-bold text-black leading-[1.02] tracking-tight mb-12 md:mb-16 max-w-[900px]">
          Why 100+ businesses grow with us
        </h2>

        {/* 2x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {whyUsPoints.map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-black/8 p-8 md:p-10 rounded-[24px] md:rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.045)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-[80px] h-[80px] rounded-full border-[2px] border-black flex items-center justify-center mb-6 shrink-0 p-3">
                  <img src={item.icon} alt={item.title} className="w-[50px] h-[50px] object-contain" />
                </div>
                <h3 className="text-[24px] md:text-[28px] font-bold text-[#0f0f0f] mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[16px] md:text-[18px] text-black/70 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
