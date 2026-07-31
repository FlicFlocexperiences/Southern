"use client";

import React from "react";
import Link from "next/link";

export function AboutIntro() {
  const headingText = "We understand that modern businesses need more than just vanity metrics. They need real, sustainable growth. Our dedicated team provides ROI-focused SEO services in Delhi to help local and national brands scale effectively and outpace their competition.";
  const words = headingText.split(" ");

  return (
    <section className="w-full bg-[#f2decc] px-4  pb-8 md:pt-0 md:pb-12 flex justify-center overflow-hidden">
      <div className="max-w-[1200px] w-full flex flex-col items-start">
        <div className="w-full">
          {/* Label */}
          <div className="text-[14px] md:text-[16px] tracking-widest font-medium mb-4">
            <span className="text-[#de5e18]">[</span>
            <span className="text-black mx-2">ABOUT US</span>
            <span className="text-[#de5e18]">]</span>
          </div>
          
          {/* Divider */}
          <hr className="w-full border-t border-[#432d1c]/10 mb-10 md:mb-12 origin-left" />

          <div className="w-full max-w-[950px]">
            {/* Heading paragraph with split-words */}
            <p className="text-[22px] md:text-[32px] leading-[1.4] text-[#4a4a4a] flex flex-wrap gap-x-[8px]">
              {words.map((word, index) => {
                const isBold = word.includes("real,") || word.includes("sustainable") || word.includes("growth.") || word.includes("ROI-focused") || word.includes("SEO") || word.includes("services");
                return (
                  <span 
                    key={index} 
                    className={isBold ? "text-[#de5e18] font-semibold" : ""}
                  >
                    {word}
                  </span>
                );
              })}
            </p>

            {/* Body paragraph */}
            <div className="text-[16px] md:text-[18px] leading-[1.6] text-[#4a4a4a] mt-6 md:mt-8 space-y-8">
              <div>
                <h2 className="text-[20px] md:text-[24px] font-semibold text-black mb-3">Best SEO Company in Delhi NCR</h2>
                <p>When you partner with us, you are choosing a team that truly cares about your bottom line. We have built a solid reputation as the best SEO company in Delhi NCR by consistently delivering transparent and measurable results. From targeted local SEO services to comprehensive web development, our strategies are uniquely tailored to fit your specific business goals. We avoid generic solutions because we know your brand deserves a customized approach.</p>
              </div>
              
              <div>
                <h2 className="text-[20px] md:text-[24px] font-semibold text-black mb-3">Proven Social Media Marketing Agency</h2>
                <p>Beyond search engine optimization, building a strong brand presence requires active engagement across all major platforms. As a trusted social media marketing agency, we design creative campaigns that resonate with your target audience. We combine stunning visuals with data driven insights to ensure your message reaches the exact right people. This focused approach builds lasting relationships between your brand and your customers.</p>
              </div>

              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-black mb-3">Comprehensive PPC Agency Services</h3>
                <p>While organic growth is incredibly powerful, sometimes your business requires immediate visibility to capture active buyers. Our expertise as a premier PPC agency allows us to craft highly targeted ad campaigns that maximize your overall return on investment. We manage your advertising spend carefully to ensure every click brings you closer to your revenue targets.</p>
              </div>

              <div>
                <h2 className="text-[20px] md:text-[24px] font-semibold text-black mb-3">Your Trusted Online Marketing Agency</h2>
                <p>At Southern Edge Marketing, we operate as a true extension of your own internal team. Whether you need a full service digital marketing agency in Delhi or a specialized partner for a distinct campaign, we are fully equipped to assist you. Contact us today and let us help you dominate your local market.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
