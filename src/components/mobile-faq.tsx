"use client";

import React, { useState } from "react";

const ArrowDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col transition-all duration-300">
      <button 
        type="button"
        className="flex items-center justify-between py-4 cursor-pointer w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <p className="font-sans text-[18px] text-[#0f0f0f] leading-tight pr-4">
          {question}
        </p>
        <div 
          className={`shrink-0 w-[42px] h-[42px] rounded-full bg-[#de5e18] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          style={{
            boxShadow: "0px 10px 16px rgba(0,0,0,0.15), inset 0px 4px 6px rgba(255,255,255,0.4)"
          }}
          aria-hidden="true"
        >
          <ArrowDownIcon />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] opacity-100 pb-2 mt-2' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-[#de5e18] rounded-[16px] p-5 mb-2">
          <p className="text-white text-[16px] leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export interface FaqItemType {
  question: string;
  answer: string;
}

interface MobileFaqProps {
  faqs?: FaqItemType[];
}

export const MobileFaq = ({ faqs: customFaqs }: MobileFaqProps) => {
  const defaultFaqs = [
    {
      question: "Why should I hire a digital marketing agency in Delhi?",
      answer: "Hiring a local digital marketing agency in Delhi gives you an edge. We understand the local market dynamics and consumer behavior. Our team creates customized strategies that connect your brand with the right audience, helping you scale revenue faster than trying to manage everything in house."
    },
    {
      question: "How much do digital marketing services in Delhi NCR cost?",
      answer: "Pricing depends on your specific goals and requirements. We offer flexible digital marketing services in Delhi NCR, ranging from core SEO packages to comprehensive paid advertising campaigns. Reach out to us for a customized quote tailored to your business needs and budget."
    },
    {
      question: "How long does it take for your SEO company in Delhi to show results?",
      answer: "SEO is a long term strategy. While some technical improvements can show rapid results, significant organic growth usually takes 3 to 6 months. As an experienced SEO company in Delhi, we focus on sustainable methods that build lasting authority and consistent traffic for your brand."
    },
    {
      question: "Do you combine SEO services in Delhi with paid ads?",
      answer: "Yes, we do. While our SEO services in Delhi build your long term organic presence, our targeted PPC services in Delhi provide immediate visibility. Combining both approaches ensures you capture both active buyers right now and future customers over time for maximum return on investment."
    }
  ];

  const faqs = customFaqs && customFaqs.length > 0 ? customFaqs : defaultFaqs;

  return (
    <div className="w-full bg-[#f2decc] px-5 pt-16 pb-16 relative flex flex-col items-center">
      
      {/* Header */}
      <p className="text-[18px] font-medium tracking-wide mb-4 text-center">
        <span className="text-[#de5e18]">[</span>
        <span className="text-black mx-1">FAQ</span>
        <span className="text-[#de5e18]">]</span>
      </p>
      
      <div className="w-full max-w-[360px] h-[1px] bg-gray-200 mb-6"></div>
      
      <h2 className="text-[54px] leading-[1.0] font-semibold text-black mb-12 text-center tracking-tight">
        COMMON<br/>QUERIES
      </h2>

      {/* FAQ List */}
      <div className="w-full flex flex-col gap-2">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      
    </div>
  );
};
