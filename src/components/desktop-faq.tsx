"use client";

import React, { useState } from "react";

const ArrowDownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="white" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
  >
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

export const DesktopFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who do you usually work with?",
      answer: "We work with small and growing businesses across India, from D2C and e-commerce brands to F&B, retail, and professional services, who want marketing that's tied to real business outcomes, not just impressions."
    },
    {
      question: "How much does a new website cost?",
      answer: "Every project is scoped around what your business actually needs, from a lean landing page to a full custom build. Reach out for a free quote based on your goals and timeline."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we don't disappear after launch. We offer ongoing maintenance, content, and performance support so your website and campaigns keep improving after go-live."
    },
    {
      question: "How long does it take to see results?",
      answer: "It depends on the channel: website and brand work show up immediately, SEO typically builds momentum over 3 to 6 months, and paid ads/social can show early signals within the first few weeks."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f2decc] pt-22 pb-22 px-8 lg:px-[90px] flex flex-col items-center relative z-10" style={{ zoom: 0.75 }}>
      
      {/* Top Header */}
      <div className="flex flex-col items-center mb-16 w-full">
        <p className="font-medium text-[20px] lg:text-[24px] mb-8 tracking-wide">
          <span className="text-[#de5e18]">[</span>
          <span className="text-black mx-2">FAQ</span>
          <span className="text-[#de5e18]">]</span>
        </p>
        
        {/* Subtle divider line across the screen */}
        <div className="w-full h-px bg-black/5 mb-10 max-w-[1200px]" />
        
        <h2 className="text-[60px] lg:text-[80px] xl:text-[104px] font-semibold text-black leading-none tracking-tight text-center">
          COMMON QUERIES
        </h2>
      </div>

      {/* FAQ List */}
      <div className="w-full max-w-[1000px] flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div 
              key={index} 
              className={`w-full bg-[#f2decc] rounded-[35px] border border-transparent transition-all duration-300 ${isOpen ? 'shadow-[0px_10px_30px_rgba(0,0,0,0.05)] border-black/5 pb-6' : 'hover:bg-black/[0.02]'}`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 lg:px-10 lg:py-8 cursor-pointer text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[24px] lg:text-[28px] xl:text-[32px] text-black font-normal pr-8">
                  {faq.question}
                </span>
                
                {/* Arrow Button */}
                <div className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] rounded-full bg-[#de5e18] flex items-center justify-center shrink-0 shadow-[0_8px_16px_rgba(222,94,24,0.4)]">
                  <ArrowDownIcon isOpen={isOpen} />
                </div>
              </button>
              
              {/* Expandable Answer */}
              <div 
                className={`overflow-hidden transition-all duration-300 px-6 lg:px-10 ${isOpen ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
              >
                <div className="bg-[#de5e18] rounded-[20px] p-6 mb-6">
                  <p className="text-[18px] lg:text-[20px] text-white font-normal leading-[1.5]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
