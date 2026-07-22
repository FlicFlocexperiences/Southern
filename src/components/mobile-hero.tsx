"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function MobileHero() {
  const [stickersState, setStickersState] = useState<{
    src: string;
    x: number;
    y: number;
    visible: boolean;
  }[]>([]);
  const [windowSize, setWindowSize] = useState({ width: 400, height: 800 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const stickerAssets = [
    { src: "/New%20folder%20(2)/app-development.png" },
    { src: "/New%20folder%20(2)/app-settings.png" },
    { src: "/New%20folder%20(2)/branding.png" },
    { src: "/New%20folder%20(2)/bullhorn.png" },
    { src: "/New%20folder%20(2)/search-engine-optimization.png" },
    { src: "/New%20folder%20(2)/ux-design.png" }
  ];

  const possiblePositions = [
    { x: 10, y: 15 },
    { x: 88, y: 12 },
    { x: 12, y: 82 },
    { x: 85, y: 85 }
  ];

  useEffect(() => {
    const shuffleAndSet = () => {
      // Fade out
      setStickersState(prev => prev.map(s => ({ ...s, visible: false })));

      // Shuffle and fade in new positions after 300ms fadeout transition
      setTimeout(() => {
        // Pick 2 random stickers from the 6 assets
        const randomStickers = [...stickerAssets].sort(() => 0.5 - Math.random()).slice(0, 2);
        // Shuffle the 4 corner positions
        const shuffledPositions = [...possiblePositions].sort(() => 0.5 - Math.random());
        
        const newState = randomStickers.map((asset, i) => {
          const pos = shuffledPositions[i] || { x: 50, y: 50 };
          return {
            src: asset.src,
            x: pos.x,
            y: pos.y,
            visible: true
          };
        });
        setStickersState(newState);
      }, 300);
    };

    shuffleAndSet();
    const interval = setInterval(shuffleAndSet, 1600); // 1.6s cycle (0.3s fadeout + 0.3s fadein + 1.0s display)
    return () => clearInterval(interval);
  }, []);

  const snapToGrid = (percent: number, maxDimension: number) => {
    const pixelVal = (maxDimension * percent) / 100;
    // Align exactly in the middle of a 36px grid cell (+ 18px offset)
    return Math.floor(pixelVal / 36) * 36 + 18;
  };

  return (
    <div className="w-full h-[100dvh] flex flex-col items-center pt-[85px] pb-6 relative overflow-hidden bg-[#f2decc]">
      {/* Square Box Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 50% 50%, transparent 35%, #f2decc 96%), 
                               linear-gradient(to right, rgba(222,94,24,0.25) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(222,94,24,0.25) 1px, transparent 1px)`,
             backgroundSize: '100% 100%, 36px 36px, 36px 36px',
           }} 
      />

      {/* Sticker Animations */}
      {stickersState.map((sticker, idx) => {
        const leftPx = snapToGrid(sticker.x, windowSize.width);
        const topPx = snapToGrid(sticker.y, windowSize.height);
        
        return (
          <div
            key={idx}
            className="absolute pointer-events-none z-0 flex items-center justify-center"
            style={{
              left: `${leftPx}px`,
              top: `${topPx}px`,
              opacity: sticker.visible ? 0.4 : 0,
              transform: `translate(-50%, -50%) scale(${sticker.visible ? 1 : 0.8})`,
              transition: "opacity 300ms ease-in-out, transform 300ms ease-in-out, filter 300ms ease-in-out",
            }}
          >
            <img
              src={sticker.src}
              alt="Graffiti sticker"
              className="w-[28px] h-[28px] object-contain select-none animate-sticker-glow"
            />
          </div>
        );
      })}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 3px rgba(222,94,24,0.25));
          }
          50% {
            filter: drop-shadow(0 0 10px rgba(222,94,24,0.55));
          }
        }
        .animate-sticker-glow {
          animation: glowPulse 4s infinite ease-in-out;
        }
      `}} />

      {/* Middle Content Wrapper (Centered) */}
      <div className="flex-1 flex flex-col items-center justify-center w-full z-10">
        {/* Hero Text */}
        <div className="flex flex-col items-center text-center px-4 w-full max-w-sm mx-auto text-black">
          <p className="font-semibold text-base tracking-wide mb-3 text-black">MORE THAN JUST DIGITAL</p>
          <h1 className="font-extrabold text-[42px] leading-[1.1] tracking-tight text-black">
            <span className="text-[#de5e18] block mb-1">WE TURN</span>
            <span className="block">ATTENTION</span>
            <span className="block">INTO ACTION</span>
          </h1>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <Link href="/contact" className="relative z-20">
            <button 
              className="relative w-[222px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] overflow-hidden shadow-[0px_6px_16px_rgba(222,94,24,0.35)] group cursor-pointer"
              aria-label="Start Growing"
            >
              {/* Inner Left Pill */}
              <div className="absolute left-[0px] top-0 w-[157px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] z-10">
                <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                <span className="font-medium text-[16px] text-white tracking-tight whitespace-nowrap">
                  Start Growing
                </span>
              </div>
              
              {/* Right Arrow Icon */}
              <div className="absolute right-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center z-0">
                <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </div>

      {/* Info Text & Ratings (Bottom Section) */}
      <div className="w-full px-6 mt-auto flex flex-col gap-4 z-10 mb-10">
        {/* Left side text */}
        <div className="flex items-start gap-2 max-w-[280px]">
          <svg className="w-6 h-6 text-[#de5e18] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          <p className="text-[14px] font-medium text-black leading-snug">
            Strategy, design, development, and marketing that actually drives business — not just vanity metrics.
          </p>
        </div>

        {/* Right side rating */}
        <div className="flex flex-col items-end text-right self-end mt-2">
          <div className="flex items-center gap-2 mb-1">
            <div className="flex text-[#ffb800] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[15px] text-black">
              <span className="font-semibold">5.0</span> <span>rating</span>
            </p>
          </div>
          <p className="text-[14px] text-black">
            Helped over <span className="font-semibold">100+ businesses grow across India</span>
          </p>
        </div>
      </div>
    </div>
  );
}
