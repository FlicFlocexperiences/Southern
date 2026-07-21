"use client";

import React, { useState } from "react";

const testimonials = [
  {
    quote: "Southern Edge Marketing transformed our digital presence completely. The custom web platform reduced patient onboarding time by 40% and significantly elevated our brand authority.",
    name: "Anand M. Sharma",
    role: "Managing Director, AMA Legal Solutions",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
  },
  {
    quote: "Our Shopify storefront conversion rates increased by 42% within weeks of launch. Their team understands both high-end design aesthetics and conversion science.",
    name: "Rohan Kapoor",
    role: "Co-Founder, The Fat Cookie",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
  },
  {
    quote: "The branding and fragrance photography elevated our luxury perception instantly. Their creative strategy gave us the exact edge we needed in a crowded market.",
    name: "Tanya Mehta",
    role: "Head of Marketing, Sage Perfumes",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80",
  },
  {
    quote: "From brand positioning to scalable design systems, working with Southern Edge Marketing felt like a true strategic partnership. They deliver outcomes, not just promises.",
    name: "Vikramjeet Singh",
    role: "Founder & CEO, JSV Group",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
  },
];

const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="w-full bg-[#fffff0] py-16 md:py-24 px-6 md:px-10 lg:px-[90px] flex flex-col items-center relative z-10">
      <div className="w-full max-w-[1280px] flex flex-col items-center">
        
        {/* Section Pill Label */}
        <p className="font-medium text-[20px] lg:text-[24px] mb-4 tracking-wide text-center">
          <span className="text-[#ff5100]">[</span>
          <span className="text-black mx-2 uppercase">TESTIMONIALS</span>
          <span className="text-[#ff5100]">]</span>
        </p>

        {/* Section Heading */}
        <h2 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] font-bold text-black leading-[0.95] tracking-tight uppercase mb-12 md:mb-16 text-center">
          WHAT PEOPLE SAY
        </h2>

        {/* Testimonial Card */}
        <div className="w-full max-w-[1100px] bg-white rounded-[28px] md:rounded-[36px] p-8 md:p-12 lg:p-14 border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden transition-all duration-300">
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-10 md:mb-12">
            
            {/* Left: Author Info */}
            <div className="md:col-span-5 flex md:flex-col items-center md:items-start gap-4 md:gap-5 border-b md:border-b-0 md:border-r border-black/5 pb-6 md:pb-0 md:pr-8">
              <div className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md bg-neutral-100">
                <img 
                  src={current.avatar} 
                  alt={current.name} 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-[22px] md:text-[26px] font-bold text-[#0f0f0f] leading-tight">
                  {current.name}
                </h3>
                <p className="text-[14px] md:text-[16px] text-black/60 font-medium mt-1">
                  {current.role}
                </p>
              </div>
            </div>

            {/* Right: Quote Text */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <p className="text-[20px] md:text-[24px] lg:text-[28px] font-normal leading-[1.4] text-[#1a1a1a] tracking-tight">
                “{current.quote}”
              </p>
            </div>
          </div>

          {/* Bottom Bar Controls */}
          <div className="w-full flex items-center justify-between pt-6 border-t border-black/5">
            {/* Arrows & Counter */}
            <div className="flex items-center gap-4">
              <button 
                onClick={prev}
                className="w-[46px] h-[46px] md:w-[50px] md:h-[50px] rounded-full border border-black/15 flex items-center justify-center text-black hover:bg-[#ff5100] hover:border-[#ff5100] hover:text-white transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
                aria-label="Previous Testimonial"
              >
                <ArrowLeftIcon />
              </button>

              <button 
                onClick={next}
                className="w-[46px] h-[46px] md:w-[50px] md:h-[50px] rounded-full border border-black/15 flex items-center justify-center text-black hover:bg-[#ff5100] hover:border-[#ff5100] hover:text-white transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
                aria-label="Next Testimonial"
              >
                <ArrowRightIcon />
              </button>

              <span className="text-[15px] md:text-[16px] font-semibold text-black/40 font-mono ml-2">
                {currentIndex + 1} of {testimonials.length}
              </span>
            </div>

            {/* Quote Watermark Icon */}
            <div className="text-black/10 select-none pointer-events-none">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
