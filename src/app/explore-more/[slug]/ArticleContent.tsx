"use client";

import React, { useEffect, useState, useMemo, useRef } from "react";
import Link from "next/link";
import { Article } from "@/data/articles";

interface ArticleContentProps {
  article: Article;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [activeId, setActiveId] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const mobileSliderRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

  // Process content to inject IDs and build TOC
  const { processedContent, sections } = useMemo(() => {
    const headings: { id: string; title: string }[] = [];
    let content = article.content || "";

    // Replace h2 and h3 tags, injecting an ID for scroll tracking
    const headingRegex = /(<h[23][^>]*>)(.*?)(<\/h[23]>)/gi;
    const idCounts: Record<string, number> = {};

    const newContent = content.replace(headingRegex, (match, openTag, text, closeTag) => {
      const cleanText = text.replace(/<[^>]+>/g, "").trim();

      // If heading already has an ID, use it
      let id = "";
      if (openTag.includes("id=")) {
        const idMatch = openTag.match(/id=["']([^"']+)["']/);
        if (idMatch) id = idMatch[1];
      }

      if (!id) {
        let baseId = cleanText
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
        if (!baseId) baseId = "section";
        idCounts[baseId] = (idCounts[baseId] || 0) + 1;
        id = idCounts[baseId] > 1 ? `${baseId}-${idCounts[baseId]}` : baseId;

        headings.push({ id, title: cleanText });
        return `${openTag.replace(">", ` id="${id}">`)}${text}${closeTag}`;
      }

      headings.push({ id, title: cleanText });
      return match;
    });

    return { processedContent: newContent, sections: headings };
  }, [article.content]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = sections
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      let currentActiveId = "";
      const offset = 200;

      for (const el of headingElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          currentActiveId = el.id;
        } else {
          break;
        }
      }

      if (!currentActiveId && headingElements.length > 0 && window.scrollY < 300) {
        currentActiveId = headingElements[0].id;
      }

      if (currentActiveId && currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };

    const timeoutId = setTimeout(handleScroll, 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, activeId]);

  // Sync sidebar TOC scroll with active section
  useEffect(() => {
    if (activeId) {
      const activeElement = document.getElementById(`toc-${activeId}`);
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [activeId]);

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

  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      {/* Dark Brown Hero Section */}
      <div className="w-full bg-[#3e271a] -mt-32 lg:-mt-40 pt-36 lg:pt-44 pb-12 px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="text-[#de5e18] text-[14px] font-bold tracking-[0.2em] mb-4 uppercase">
            [ {article.category || "EXPLORE MORE"} ]
          </div>
          <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="text-[18px] md:text-[20px] text-white/70 mb-8 font-light max-w-[700px] mx-auto leading-relaxed">
              {article.excerpt}
            </p>
          )}

          <div className="text-white/50 text-[14px] font-medium mb-10">
            {article.publishedAt || "August 2026"} &nbsp;&nbsp;&bull;&nbsp;&nbsp; {article.author || "Southern Strategic Insights"} {article.readTime ? `  •   ${article.readTime}` : ""}
          </div>

          <div className="flex justify-center">
            <Link href="/contact">
              <button
                className="relative h-[58px] sm:h-[63px] w-[240px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] overflow-hidden shadow-[0px_6px_16px_rgba(222,94,24,0.35)] hover:shadow-[0px_8px_20px_rgba(222,94,24,0.5)] transition-shadow group cursor-pointer"
                aria-label="For Consultation"
              >
                <div className="absolute left-0 top-0 w-[calc(100%-45px)] h-full rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2 transform group-hover:translate-x-[3px] transition-transform duration-300 z-10 px-2 sm:px-3">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                  <span className="font-medium text-[15px] text-white tracking-tight whitespace-nowrap">
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
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-6 xl:gap-10 items-start mt-8">
        {/* Left Sidebar - Table of Contents */}
        <aside
          className="hidden lg:block sticky top-8 w-full pr-2 max-h-[calc(100vh-80px)] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Breadcrumbs for Desktop */}
          <div className="text-[13px] text-black/50 font-medium mb-12 hidden lg:block">
            <Link href="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/projects" className="hover:text-black">Explore More</Link>
          </div>

          <nav className="flex flex-col gap-6">
            {sections.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <a
                  key={sec.id}
                  id={`toc-${sec.id}`}
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
          {/* Mobile Breadcrumbs */}
          <div className="text-[13px] text-black/50 font-medium mb-6 lg:hidden">
            <Link href="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/projects" className="hover:text-black">Explore More</Link>
            <span className="mx-2">/</span>
            <span className="text-black/80 truncate max-w-[150px] inline-block align-bottom">{article.title}</span>
          </div>

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
                          : "text-black border-transparent hover:text-black"
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
          <article className="w-full bg-white border border-black/8 rounded-2xl p-6 md:p-8 lg:p-12 shadow-sm">
            <div
              className="prose prose-lg max-w-none prose-slate prose-headings:font-bold prose-headings:text-[#432d1c] prose-h2:text-[28px] prose-h3:text-[22px] prose-p:text-[#432d1c] prose-p:leading-[1.7] prose-p:my-4 prose-headings:mt-8 prose-headings:mb-4 prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-6 prose-h3:mb-3 prose-a:text-[#de5e18] prose-a:no-underline hover:prose-a:underline prose-li:text-[#432d1c] text-left font-sans text-[#432d1c]"
              style={{
                ["--tw-prose-body" as any]: "#432d1c",
                ["--tw-prose-headings" as any]: "#432d1c",
                ["--tw-prose-bold" as any]: "#432d1c",
                ["--tw-prose-counters" as any]: "#432d1c",
                ["--tw-prose-bullets" as any]: "#432d1c",
                ["--tw-prose-quotes" as any]: "#432d1c",
              }}
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            {/* FAQs */}
            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-14 pt-10 border-t border-black/10">
                <h3 className="text-[26px] font-bold text-[#3e271a] mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {article.faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div
                        key={index}
                        className="bg-[#fcf8f4] rounded-xl border border-black/5 overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                        >
                          <h4 className="text-[17px] sm:text-[18px] font-bold text-[#432d1c] pr-4">{faq.question}</h4>
                          <span className="shrink-0 ml-4 text-[#de5e18]">
                            {isOpen ? (
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                              </svg>
                            ) : (
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            )}
                          </span>
                        </button>
                        <div
                          className={`transition-all duration-300 ease-in-out px-6 ${
                            isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 py-0 opacity-0"
                          }`}
                        >
                          <p className="text-[15px] text-[#432d1c]/85 leading-relaxed font-light">{faq.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Share Post */}
            <div className="border-t border-black/10 mt-12 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <span className="text-[14px] md:text-[16px] font-regular text-black/70 text-left">
                Share this article:
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
        <aside className="w-full lg:sticky lg:top-8 space-y-5">
          {/* Company Bio Card */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 text-[#0f0f0f] shadow-sm relative overflow-hidden group text-left">
            <div className="absolute top-[-20%] right-[-10%] w-[50%] aspect-square rounded-full bg-[#de5e18]/10 blur-[30px] pointer-events-none" />
            <h3 className="text-[18px] font-bold mb-3 uppercase tracking-wide text-[#3e271a]">
              Southern Edge Marketing
            </h3>
            <p className="text-[14px] text-black/75 leading-relaxed mb-6 font-light">
              We design, engineer, and scale high-converting digital storefronts, custom web applications, and premium brand identities.
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

          {/* Direct Consultation Card */}
          <div className="hidden lg:block bg-white border border-black/10 rounded-2xl p-5 shadow-sm text-center">
            <h3 className="text-[16px] font-bold text-[#3e271a] mb-2 uppercase tracking-wide">
              Prefer to Call?
            </h3>
            <p className="text-[13px] text-black/75 leading-snug mb-4 font-light">
              Scan the QR code or call us directly to discuss your digital strategy.
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="p-2 bg-white border border-black/10 rounded-[12px] shadow-sm inline-block">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=tel:+918700901769&margin=2"
                  alt="Scan to call"
                  width={110}
                  height={110}
                  className="rounded-lg mix-blend-multiply"
                />
              </div>
              <div className="flex flex-col items-center gap-3 mt-1 w-full">
                <a
                  href="tel:+918700901769"
                  className="text-[17px] font-semibold text-[#de5e18] hover:text-[#de5e18]/80 transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                  </svg>
                  +91 8700901769
                </a>
                <a
                  href="https://www.linkedin.com/in/ameet-nangia-b231b864/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 bg-[#0a66c2]/10 text-[#0a66c2] rounded-lg text-[13.5px] font-semibold hover:bg-[#0a66c2] hover:text-white transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
