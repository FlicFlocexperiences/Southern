"use client";

import React, { useEffect, useState, useMemo, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Article } from "@/data/articles";

interface ArticleContentProps {
  article: Article;
}

const parseInlineMarkdown = (text: string) => {
  const parts = text.split("**");
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <strong key={index} className="font-bold text-[#432d1c]">
          {part}
        </strong>
      );
    }
    return part;
  });
};

export const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  const pathname = usePathname();
  const isBlog = pathname?.startsWith("/blogs");
  const [currentUrl, setCurrentUrl] = useState("");
  const [activeId, setActiveId] = useState("");
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

  // Parse sections (h3 headers) for TOC
  const sections = useMemo(() => {
    return article.content
      .split("\n")
      .filter((line) => line.trim().startsWith("###"))
      .map((line) => {
        const text = line.trim().replace("###", "").trim();
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
        return { id, title: text };
      });
  }, [article.content]);

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

  const handleShare = (platform: string) => {
    const title = article.title;
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

  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let currentParagraph: string[] = [];
    let sectionCounter = 0;

    const flushParagraph = (key: string | number) => {
      if (currentParagraph.length > 0) {
        elements.push(
          <p
            key={`p-${key}`}
            className="text-[16px] md:text-[18px] leading-[1.7] text-[#432d1c]/85 mb-6 font-normal font-sans"
          >
            {parseInlineMarkdown(currentParagraph.join(" "))}
          </p>
        );
        currentParagraph = [];
      }
    };

    const flushList = (key: string | number) => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`ul-${key}`} className="list-disc pl-6 mb-6 text-[#432d1c]/80 space-y-2 text-[16px] md:text-[18px] font-normal font-sans">
            {currentList.map((item, idx) => (
              <li key={idx}>{parseInlineMarkdown(item)}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("###")) {
        flushParagraph(index);
        flushList(index);

        const text = trimmed.replace("###", "").trim();
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
        sectionCounter++;
        const numStr = String(sectionCounter).padStart(2, "0");
        elements.push(
          <h3
            key={`h3-${index}`}
            id={id}
            className="text-[22px] md:text-[28px] font-bold text-[#0f0f0f] mt-10 mb-4 font-sans scroll-mt-28 flex items-center gap-3"
          >
            <span className="text-[#de5e18] font-mono">// {numStr}</span>
            <span>{text}</span>
          </h3>
        );
      } else if (trimmed.startsWith("-")) {
        flushParagraph(index);
        const itemText = trimmed.substring(1).trim();
        currentList.push(itemText);
      } else if (trimmed === "") {
        flushParagraph(index);
        flushList(index);
      } else {
        flushList(index);
        currentParagraph.push(trimmed);
      }
    });

    flushParagraph("final");
    flushList("final");

    return elements;
  };

  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      {/* Top Hero Section */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-2">
        {/* Mobile & Desktop Dark Hero Card */}
        <div className="w-full bg-[#432d1c] text-white rounded-[28px] p-6 sm:p-10 lg:p-14 mb-6 shadow-lg relative overflow-hidden text-center flex flex-col items-center">
          <div className="text-[11px] sm:text-[12px] tracking-[0.2em] font-bold text-[#de5e18] uppercase mb-3">
            [ INSIGHT & STRATEGY ]
          </div>

          <h1 className="text-[28px] sm:text-[42px] md:text-[54px] lg:text-[64px] font-extrabold leading-[1.1] tracking-tight mb-4 max-w-[900px] text-white">
            {article.title}
          </h1>

          <p className="text-[14px] sm:text-[16px] text-white/70 max-w-[650px] leading-relaxed mb-6 font-light">
            Published: {article.publishedAt || "March 2026"} • 5 min read
          </p>

          <Link href="/contact" className="inline-block">
            <button 
              className="relative w-[260px] sm:w-[280px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] overflow-hidden shadow-[0px_6px_16px_rgba(222,94,24,0.35)] hover:shadow-[0px_8px_20px_rgba(222,94,24,0.5)] transition-shadow group cursor-pointer"
              aria-label="For Consultation"
            >
              {/* Inner Left Pill with right shadow */}
              <div className="absolute left-0 top-0 w-[195px] sm:w-[215px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
                <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                <span className="font-medium text-[15px] sm:text-[16px] text-white tracking-tight whitespace-nowrap">
                  For Consultation
                </span>
              </div>
              
              {/* Right Arrow Icon */}
              <div className="absolute right-[20px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
                <svg className="w-[20px] h-[20px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </button>
          </Link>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-[13px] sm:text-[14px] text-black/60 font-medium mb-6 px-1">
          <Link href="/" className="hover:text-[#de5e18] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-[#de5e18] transition-colors">Insights</Link>
          <span>/</span>
          <span className="text-[#de5e18] font-semibold truncate max-w-[200px] sm:max-w-none">{article.title}</span>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-8 xl:gap-12 items-start max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Left Sidebar - Table of Contents */}
        <aside className="hidden lg:block sticky top-28 w-full pr-4">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 mb-6 font-sans text-left">
            TABLE OF CONTENTS
          </h4>
          <nav className="flex flex-col gap-2">
            {sections.map((sec, idx) => {
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
                  className={`text-[14px] font-medium leading-[1.4] transition-all duration-200 border-l-2 pl-3 py-1.5 text-left ${
                    isActive
                      ? "text-[#de5e18] border-[#de5e18] font-semibold bg-[#de5e18]/5 rounded-r-md"
                      : "text-black/60 border-transparent hover:text-black"
                  }`}
                >
                  {idx + 1}. {sec.title}
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Middle Column - Content */}
        <div className="w-full min-w-0">
          {/* Mobile Horizontal Tabs Bar (Matching reference image) */}
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

          {/* Article Box */}
          <article className="w-full bg-white border border-black/8 rounded-[28px] p-6 md:p-10 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.015)]">
            <div className="prose max-w-none text-[#432d1c] font-sans text-left">
              {renderContent(article.content)}
            </div>

            {/* Share Post */}
            <div className="border-t border-black/10 mt-12 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <span className="text-[14px] md:text-[16px] font-regular text-black/70 text-left">
                Share this insight:
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
        <aside className="w-full lg:sticky lg:top-28 space-y-6">
          
          {/* Company Bio Card */}
          <div className="bg-[#de5e18] rounded-[24px] p-6 text-white shadow-[0_12px_24px_rgba(222,94,24,0.15)] border border-[#de5e18]/25 relative overflow-hidden group text-left">
            <div className="absolute top-[-20%] right-[-10%] w-[50%] aspect-square rounded-full bg-white/10 blur-[30px] pointer-events-none" />
            <h3 className="text-[18px] font-bold mb-3 uppercase tracking-wide">
              Southern Edge Marketing
            </h3>
            <p className="text-[14px] text-white/90 leading-relaxed mb-6 font-light">
              We design, build, and optimize high-converting digital storefronts, corporate portals, and brand systems for ambitious companies.
            </p>
            <Link href="/about" className="inline-block mt-4">
              <button 
                className="relative w-[222px] h-[63px] rounded-full bg-white overflow-hidden shadow-[0px_6px_16px_rgba(0,0,0,0.1)] hover:shadow-[0px_8px_20px_rgba(0,0,0,0.15)] transition-shadow group cursor-pointer"
                aria-label="Learn about us"
              >
                {/* Inner Left Pill with right shadow */}
                <div className="absolute left-[0px] top-0 w-[157px] h-[63px] rounded-full bg-white drop-shadow-[4px_0px_6px_rgba(0,0,0,0.1)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                  <span className="font-medium text-[16px] text-black tracking-tight whitespace-nowrap">
                    Learn about us
                  </span>
                </div>
                
                {/* Right Arrow Icon */}
                <div className="absolute right-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
                  <svg className="w-[21px] h-[21px] text-black" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </button>
            </Link>
          </div>

          {/* Need Marketing Help Card */}
          <div className="bg-white border border-black/10 rounded-[24px] p-6 shadow-[0_4px_30px_rgba(0,0,0,0.02)] text-left">
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
                  {/* Inner Left Pill with right shadow */}
                  <div className="absolute left-0 top-0 w-[calc(100%-45px)] h-full rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2 transform group-hover:translate-x-[3px] transition-transform duration-300 z-10 px-2 sm:px-3">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                    <span className="font-medium text-[13px] sm:text-[14px] lg:text-[15px] text-white tracking-tight whitespace-nowrap">
                      For Consultation
                    </span>
                  </div>
                  
                  {/* Right Arrow Icon */}
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
    </div>
  );
};
