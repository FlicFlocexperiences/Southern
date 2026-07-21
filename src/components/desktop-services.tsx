"use client";

import React from "react";

// Icons

const ArrowRightUpIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff5100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-45 transition-transform duration-300">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

// Service Item Component
const services = [
  {
    num: "01",
    title: "Website Platforms",
    desc: "High-performance websites engineered to turn visitors into customers. We combine editorial craft with conversion science to build digital experiences that compound in value.",
    time: "1 - 4 weeks",
    icon: <img src="/74c0af15118c1b2a2c39e1511c12af1dfd68bbda.svg" alt="Website Platforms" className="w-[60px] h-[60px] object-contain" />
  },
  {
    num: "02",
    title: "Branding & Strategy",
    desc: "We build cohesive, memorable identities that stand out in crowded markets, combining strategic positioning with visual storytelling to define who you are and why you matter.",
    time: "2 - 4 weeks",
    icon: <img src="/7b6d1a31b01642571f2ba8ae197279b79c46ed00.svg" alt="Branding & Strategy" className="w-[60px] h-[60px] object-contain" />
  },
  {
    num: "03",
    title: "Shopify Development",
    desc: "Fully customized, conversion-focused e-commerce storefronts designed to scale with your sales. We build on Liquid and headless APIs to make checkout frictionless and fast.",
    time: "2 - 4 weeks",
    icon: <img src="/0d1c43af53df1d13a18cab9909507ae5e5ee1faf.svg" alt="Shopify Development" className="w-[60px] h-[60px] object-contain" />
  },
  {
    num: "04",
    title: "App Development",
    desc: "We engineer robust, high-performance mobile applications that deliver native-like user experiences on iOS and Android, connected to secure, scalable backend APIs.",
    time: "5 - 6 weeks",
    icon: <img src="/dbb2cc477667c1535fbdfc2c6aa1ca82913f633a.svg" alt="App Development" className="w-[60px] h-[60px] object-contain" />
  },
  {
    num: "05",
    title: "SEO Solutions",
    desc: "We optimize your website's search visibility to drive consistent, high-intent organic traffic that converts without recurring advertising spend.",
    time: "3 - 4 weeks",
    icon: <img src="/6d024c7b5b7156400997ad06258dcf9946364743.svg" alt="SEO Solutions" className="w-[60px] h-[60px] object-contain" />
  },
  {
    num: "06",
    title: "Performance Marketing",
    desc: "We run data-driven, highly optimized ad campaigns across Google and Meta to scale your acquisition pipeline with predictable customer acquisition costs.",
    time: "2 - 4 weeks",
    icon: <img src="/00cd375964412dedc26595d780eebba9baf9a5c4.svg" alt="Performance Marketing" className="w-[60px] h-[60px] object-contain" />
  },
  {
    num: "07",
    title: "Social Media Management",
    desc: "We create high-engagement content strategies that build active communities and transform passive followers into active brand advocates.",
    time: "1 - 2 weeks",
    icon: <img src="/fbf3bb63c485c87731f72b92377c293b49debc58.svg" alt="Social Media Management" className="w-[60px] h-[60px] object-contain" />
  }
];

export const DesktopServices = () => {
  return (
    <section className="w-full bg-[#fffff0] pt-2 pb-20 px-8 lg:px-[90px] flex justify-center relative z-10 mt-16">
      <div className="w-full max-w-[1400px] flex items-start justify-between relative">
        
        {/* Left Sticky Column */}
        <div className="w-[45%] sticky top-32 flex flex-col items-start pr-12 relative">
          <p className="font-medium text-[24px] mb-8 tracking-wide">
            <span className="text-[#ff5100]">[</span>
            <span className="text-black mx-2">SERVICES</span>
            <span className="text-[#ff5100]">]</span>
          </p>
          
          <h2 className="text-[80px] xl:text-[110px] font-bold text-black leading-[0.9] tracking-tight mb-8">
            WHAT WE<br />DO BEST
          </h2>
          
          <p className="text-[20px] xl:text-[24px] text-black/65 font-normal leading-[1.4] max-w-[500px] mb-12">
            From web development and branding to SEO and marketing, we create digital solutions designed to drive measurable growth.
          </p>

          <div className="flex items-center gap-6">
            <a href="/contact" className="w-[80px] h-[80px] rounded-full border border-black/20 flex items-center justify-center hover:bg-[#ff5100]/5 transition-colors group shrink-0">
              <ArrowRightUpIcon />
            </a>
            <div className="flex flex-col gap-1">
              <p className="text-[18px] text-black font-medium leading-tight">Let's build something</p>
              <p className="text-[18px] text-black font-medium leading-tight">great together.</p>
              <a href="/contact" className="text-[#ff5100] text-[18px] font-bold tracking-wide mt-1 hover:opacity-80 transition-opacity flex items-center gap-2">
                <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                GET IN TOUCH
              </a>
            </div>
          </div>
          
          {/* Vertical Divider Line */}
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-[#ff5100] hidden md:block"></div>
        </div>

        {/* Right Scrolling Column */}
        <div className="w-[50%] flex flex-col pl-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col w-full border-t border-black/10 py-12 first:border-t-0 first:pt-0">
               <div className="flex items-center">
                
                {/* Number & Divider */}
                <div className="flex items-center gap-6 mr-8 shrink-0 h-[98px]">
                  <span className="text-[100px] xl:text-[110px] font-medium leading-[0.8] tracking-tighter text-black flex items-center h-full">{service.num}</span>
                  <div className="w-[2px] h-full bg-[#ff5100]"></div>
                </div>

                {/* Icon */}
                <div className="w-[98px] h-[98px] rounded-full border-[2px] border-black flex items-center justify-center shrink-0 mr-8">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 py-2">
                  <h3 className="text-[28px] font-medium text-black mb-3 leading-tight">{service.title}</h3>
                  <p className="text-[20px] text-black/60 leading-[1.4] mb-6 pr-4">{service.desc}</p>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
