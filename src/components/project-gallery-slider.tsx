"use client";

import React, { useRef, useState, useEffect } from "react";

interface ProjectGallerySliderProps {
  images: string[];
}

export const ProjectGallerySlider: React.FC<ProjectGallerySliderProps> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Triple the images to allow seamless infinite scrolling
  const displayedImages = images.length > 1 ? [...images, ...images, ...images] : images;

  // Initialize scroll position to the start of the middle set of images
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || images.length <= 1) return;

    const initScroll = () => {
      const singleSetWidth = slider.scrollWidth / 3;
      slider.scrollLeft = singleSetWidth;
    };

    // Use requestAnimationFrame to ensure layout is complete
    const rafId = requestAnimationFrame(initScroll);

    window.addEventListener("resize", initScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", initScroll);
    };
  }, [images]);

  // Autoplay function
  useEffect(() => {
    if (images.length <= 1 || isDragging || isHovered) return;

    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const slider = sliderRef.current;

      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const cardWidth = isMobile ? 260 : isTablet ? 320 : 400;
      const gap = isMobile ? 24 : 32;
      const scrollAmount = cardWidth + gap;

      slider.scrollTo({
        left: slider.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [images, isDragging, isHovered]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
    setTimeout(checkBoundary, 50);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(checkBoundary, 50);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Seamless wrapping function
  const checkBoundary = () => {
    if (!sliderRef.current || images.length <= 1) return;
    const slider = sliderRef.current;
    const singleSetWidth = slider.scrollWidth / 3;

    if (slider.scrollLeft >= singleSetWidth * 2) {
      slider.scrollLeft -= singleSetWidth;
    } else if (slider.scrollLeft < singleSetWidth - 50) {
      slider.scrollLeft += singleSetWidth;
    }
  };

  const handleScroll = () => {
    if (isDragging) return;
    checkBoundary();
  };

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const cardWidth = isMobile ? 260 : isTablet ? 320 : 400;
    const gap = isMobile ? 24 : 32;
    const scrollAmount = cardWidth + gap;

    slider.scrollTo({
      left: slider.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount),
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full mb-16 md:mb-20 text-left">
      {/* Top Slider Navigation Header */}
      <div className="w-full flex justify-end items-center gap-3 mb-6 md:mb-8">
        <button
          onClick={() => scroll("left")}
          className="w-12 h-12 rounded-full bg-[#ff5100] text-white flex items-center justify-center cursor-pointer hover:bg-[#e04400] transition-colors border-none outline-none shadow-sm active:scale-95"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-12 h-12 rounded-full bg-[#ff5100] text-white flex items-center justify-center cursor-pointer hover:bg-[#e04400] transition-colors border-none outline-none shadow-sm active:scale-95"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Draggable Cards Slider Wrapper */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onScroll={handleScroll}
        className="w-full overflow-x-auto flex gap-6 md:gap-8 pb-4 cursor-grab active:cursor-grabbing select-none scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className="snap-start shrink-0 w-[260px] sm:w-[320px] md:w-[400px] aspect-[3/4] rounded-[20px] md:rounded-[28px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group"
          >
            <img
              src={image}
              alt={`Gallery Image ${(index % images.length) + 1}`}
              className="w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};
