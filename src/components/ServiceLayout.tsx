"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { AuthorCard } from "./AuthorCard";

export interface Section {
  id: string;
  title: string;
}

interface ServiceLayoutProps {
  sections: Section[];
  children: React.ReactNode;
}

export function ServiceLayout({ sections, children }: ServiceLayoutProps) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [activeId, setActiveId] = useState("");
  const sidebarRef = useRef<HTMLElement>(null);
  const mobileSliderRef = useRef<HTMLDivElement>(null);
  const [isMobileDragging, setIsMobileDragging] = useState(false);
  const [mobileStartX, setMobileStartX] = useState(0);
  const [mobileScrollLeft, setMobileScrollLeft] = useState(0);

  const handleMobileMouseDown = (e: React.MouseEvent) => {
    if (!mobileSliderRef.current) return;
    setIsMobileDragging(true);
    setMobileStartX(e.pageX - mobileSliderRef.current.offsetLeft);
    setMobileScrollLeft(mobileSliderRef.current.scrollLeft);
  };

  const handleMobileMouseLeave = () => {
    setIsMobileDragging(false);
  };

  const handleMobileMouseUp = () => {
    setIsMobileDragging(false);
  };

  const handleMobileMouseMove = (e: React.MouseEvent) => {
    if (!isMobileDragging || !mobileSliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - mobileSliderRef.current.offsetLeft;
    const walk = (x - mobileStartX) * 1.5;
    mobileSliderRef.current.scrollLeft = mobileScrollLeft - walk;
  };

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Auto-scroll sidebar and mobile tabs when active section changes
  useEffect(() => {
    // Scroll desktop sidebar
    if (activeId && sidebarRef.current) {
      const activeElement = sidebarRef.current.querySelector(`a[href="#${activeId}"]`) as HTMLElement;
      if (activeElement) {
        const container = sidebarRef.current;
        const containerRect = container.getBoundingClientRect();
        const elementRect = activeElement.getBoundingClientRect();

        // Check if element is out of visible bounds
        if (elementRect.top < containerRect.top || elementRect.bottom > containerRect.bottom) {
          const relativeTop = elementRect.top - containerRect.top;
          const targetScroll = container.scrollTop + relativeTop - (containerRect.height / 2) + (elementRect.height / 2);
          container.scrollTo({ top: targetScroll, behavior: "smooth" });
        }
      }
    }

    // Scroll mobile slider
    if (activeId && mobileSliderRef.current) {
      const activeElement = mobileSliderRef.current.querySelector(`a[href="#${activeId}"]`) as HTMLElement;
      if (activeElement) {
        const container = mobileSliderRef.current;
        const containerRect = container.getBoundingClientRect();
        const elementRect = activeElement.getBoundingClientRect();

        if (elementRect.left < containerRect.left || elementRect.right > containerRect.right) {
          const relativeLeft = elementRect.left - containerRect.left;
          const targetScroll = container.scrollLeft + relativeLeft - (containerRect.width / 2) + (elementRect.width / 2);
          container.scrollTo({ left: targetScroll, behavior: "smooth" });
        }
      }
    }
  }, [activeId]);

  const handleShare = (platform: string) => {
    const title = document.title || "Southern Edge Marketing";
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[200px_1fr_280px] gap-6 xl:gap-10 items-start">
      
      {/* Left Sidebar - Table of Contents */}
      <aside 
        ref={sidebarRef}
        className="hidden lg:block sticky top-28 w-full pr-2 max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden pb-24"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <nav className="flex flex-col gap-3">
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth" });
                  setActiveId(sec.id);
                }}
                className={`text-[15px] leading-[1.5] transition-all duration-200 py-1 pr-4 text-left border-r-[3px] ${
                  isActive
                    ? "text-[#0f0f0f] border-[#de5e18] font-bold"
                    : "text-black/60 border-transparent hover:text-black font-medium"
                }`}
              >
                {sec.title}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Middle Column - Content */}
      <div className="w-full min-w-0 lg:pr-2">
        {/* Mobile Horizontal Tabs Bar */}
        {sections.length > 0 && (
          <div className="lg:hidden w-full border-b border-black/10 mb-8 bg-[#f2decc]/90 sticky top-0 z-30 backdrop-blur-md">
            <div
              ref={mobileSliderRef}
              onMouseDown={handleMobileMouseDown}
              onMouseLeave={handleMobileMouseLeave}
              onMouseUp={handleMobileMouseUp}
              onMouseMove={handleMobileMouseMove}
              className="w-full overflow-x-auto flex gap-6 px-2 py-3 cursor-grab active:cursor-grabbing select-none scrollbar-none scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {sections.map((sec) => {
                const isActive = activeId === sec.id;
                return (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById(sec.id);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                        setActiveId(sec.id);
                      }
                    }}
                    className={`shrink-0 text-[14px] font-bold pb-2 transition-all border-b-2 whitespace-nowrap ${
                      isActive
                        ? "text-[#de5e18] border-[#de5e18]"
                        : "text-black/50 border-transparent hover:text-black"
                    }`}
                  >
                    {sec.title}
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Article Content Container */}
        <article className="w-full bg-white border border-black/8 rounded-xl p-6 md:p-8 lg:p-10 shadow-sm">
          <div className="prose prose-lg max-w-none text-[#432d1c] font-sans text-left">
            {children}
          </div>

          {/* Share Post */}
          <div className="border-t border-black/10 mt-12 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="text-[14px] md:text-[16px] font-regular text-black/70 text-left">
              Share this page:
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleShare("facebook")}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-black/15 hover:border-[#de5e18] text-black hover:text-[#de5e18] transition-all duration-300"
                aria-label="Share on Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 0 0-4 4v2z" />
                </svg>
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-black/15 hover:border-[#de5e18] text-black hover:text-[#de5e18] transition-all duration-300"
                aria-label="Share on Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.56a9.83 9.83 0 0 1-2.83.77 4.93 4.93 0 0 0 2.17-2.72 9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.48A13.98 13.98 0 0 1 1.67 3.15a4.93 4.93 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.62v.06a4.93 4.93 0 0 0 3.95 4.83 4.92 4.92 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.55 2.21c9.06 0 14-7.5 14-14 0-.21 0-.42-.02-.63A10 10 0 0 0 24 4.56z" />
                </svg>
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-black/15 hover:border-[#de5e18] text-black hover:text-[#de5e18] transition-all duration-300"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>

      {/* Right Sidebar - About Agency & Contact Card */}
      <aside className="w-full lg:sticky lg:top-28 space-y-5">
        {/* Author Card */}
        <AuthorCard />

        <div className="bg-white border border-black/10 rounded-xl p-6 text-[#0f0f0f] shadow-sm relative overflow-hidden group text-left">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] aspect-square rounded-full bg-[#de5e18]/10 blur-[30px] pointer-events-none" />
          <h3 className="text-[18px] font-bold mb-3 uppercase tracking-wide text-black">
            Southern Edge Marketing
          </h3>
          <p className="text-[14px] text-black/75 leading-relaxed mb-6 font-light">
            We design, build, and optimize high-converting digital storefronts, corporate portals, and brand systems for ambitious companies.
          </p>
          <Link href="/about" className="block mt-4 w-full">
            <button
              className="relative w-full h-[58px] sm:h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] overflow-hidden shadow-[0px_6px_16px_rgba(222,94,24,0.35)] hover:shadow-[0px_8px_20px_rgba(222,94,24,0.5)] transition-shadow group cursor-pointer"
              aria-label="Learn about us"
            >
              <div className="absolute left-0 top-0 w-[calc(100%-45px)] h-full rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2 transform group-hover:translate-x-[3px] transition-transform duration-300 z-10 px-2 sm:px-3">
                <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                <span className="font-medium text-[13px] sm:text-[14px] lg:text-[15px] text-white tracking-tight whitespace-nowrap">
                  Learn about us
                </span>
              </div>
              <div className="absolute right-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
                <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </button>
          </Link>
        </div>

        <div className="bg-white border border-black/10 rounded-xl p-6 shadow-sm text-left">
          <h3 className="text-[18px] font-bold text-black mb-3 uppercase tracking-wide">
            Start Your Digital Journey
          </h3>
          <p className="text-[14px] text-black/75 leading-relaxed mb-6 font-light">
            Get in touch with our team to discuss custom Next.js engineering, Shopify architectures, or modern digital strategies.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/contact" className="w-full">
              <button
                className="relative w-full h-[58px] sm:h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] overflow-hidden shadow-[0px_6px_16px_rgba(222,94,24,0.35)] hover:shadow-[0px_8px_20px_rgba(222,94,24,0.5)] transition-shadow group cursor-pointer"
                aria-label="For Consultation"
              >
                <div className="absolute left-0 top-0 w-[calc(100%-45px)] h-full rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2 transform group-hover:translate-x-[3px] transition-transform duration-300 z-10 px-2 sm:px-3">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                  <span className="font-medium text-[13px] sm:text-[14px] lg:text-[15px] text-white tracking-tight whitespace-nowrap">
                    For Consultation
                  </span>
                </div>
                <div className="absolute right-[14px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
                  <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </aside>

    </div>
  );
}
