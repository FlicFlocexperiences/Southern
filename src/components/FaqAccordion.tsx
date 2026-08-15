"use client";

import React, { useState } from "react";

interface FaqAccordionProps {
  faqs: { question: string; answer: string }[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="w-full mt-10 mb-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <h3 id="faq" className="text-[26px] md:text-[32px] font-bold text-[#432d1c] tracking-tight mb-6 font-sans scroll-mt-28">
        Frequently Asked Questions
      </h3>
      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`w-full rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#de5e18] shadow-md bg-white' : 'border-black/10 bg-white hover:border-black/20'}`}
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left px-5 py-4 flex items-center justify-between focus:outline-none"
              >
                <span className="font-semibold text-[17px] text-[#432d1c] pr-4">{faq.question}</span>
                <span className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#f2decc] text-[#de5e18] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-5 pb-5 text-[16px] text-black/75 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
