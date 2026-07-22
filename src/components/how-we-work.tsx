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
    desc: "Website, creative, and campaigns go live — built to perform from day one.",
  },
  {
    num: "04",
    title: "Optimize & scale",
    desc: "We track what's working, cut what isn't, and double down on the wins.",
  },
];

export const HowWeWork = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (window.innerWidth >= 640) return;
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeftState(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftState - walk;
  };

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

        {/* Mobile: Horizontal Drag Carousel / Desktop: Grid */}
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory scrollbar-none pb-4 sm:pb-0 cursor-grab active:cursor-grabbing"
        >
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white border border-black/8 p-8 md:p-9 rounded-[24px] md:rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.045)] transition-all duration-300 flex flex-col justify-between relative group min-w-[85vw] max-w-[85vw] sm:min-w-0 sm:max-w-none snap-center shrink-0"
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

        {/* Progress Bar (Visible only on mobile/tablet below sm) */}
        <div className="w-full flex justify-center mt-6 sm:hidden">
          <div className="w-[160px] h-[3px] bg-black/10 rounded-full overflow-hidden relative">
            <div 
              className="absolute top-0 left-0 h-full bg-[#de5e18] rounded-full transition-all duration-75"
              style={{ 
                width: '40px',
                transform: `translateX(${(scrollProgress / 100) * (160 - 40)}px)`
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
