"use client";

import React from "react";

const servicesData = [
  {
    title: "Ui/UX Design",
    description1: "We craft digital experiences that are intuitive, beautiful, and user-centric.",
    description2: "By focusing on user behavior, wireframing, and interactive prototyping, we turn complex ideas into clear and engaging user interfaces.",
    tags: ["User Experience", "User Interface", "Figma Design", "Prototyping", "Wireframing", "User Research"],
    image: "/services/branding.png",
  },
  {
    title: "Web Development",
    description1: "We build fast, secure, and fully responsive websites tailored to your business goals.",
    description2: "Using modern architectures and clean code standards, we ensure your site is optimized for performance, scalability, and seamless user experiences.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Custom API", "Performance", "Websites"],
    image: "/services/website-development.png",
  },
  {
    title: "Performance Marketing",
    description1: "We run highly targeted, data-driven ad campaigns that maximize conversion rates and scale business growth.",
    description2: "From audience research to ongoing optimization, we focus on measurable results and maximizing return on investment.",
    tags: ["Google Ads", "Meta Ads", "A/B Testing", "Audience Targeting", "Analytics", "Lead Gen"],
    image: "/services/performance-marketing.png",
  },
  {
    title: "SEO",
    description1: "We optimize your website's search engine visibility to drive consistent, high-intent organic traffic.",
    description2: "Through comprehensive keyword research, on-page optimization, and technical audits, we build sustainable rankings.",
    tags: ["On-Page SEO", "Technical SEO", "Keywords", "Link Building", "Rankings", "Content Audit"],
    image: "/services/seo.png",
  },
  {
    title: "Shopify Development",
    description1: "We build fully customized, conversion-focused e-commerce stores designed to scale with your sales.",
    description2: "From storefront setup to liquid customization and seamless checkout optimization, we cover every aspect of e-commerce.",
    tags: ["Shopify Store", "Liquid Templates", "Custom checkout", "Payment Gateway", "Integrations", "E-commerce"],
    image: "/services/website-revamp.png",
  },
  {
    title: "App Development",
    description1: "We engineer robust, high-performance mobile applications that deliver native-like user experiences.",
    description2: "Whether iOS or Android, we develop seamless frontend interfaces connected to reliable, scalable backends.",
    tags: ["React Native", "iOS Apps", "Android Apps", "APIs", "Push Notifications", "App Store"],
    image: "/services/app-development.png",
  },
];

export const DesktopServicesPage = () => {
  return (
    <section className="w-full bg-[#fffff0] pb-10 pt-0 px-8 lg:px-[90px] flex flex-col relative z-10 overflow-hidden">
      
      {/* Top Section: Title */}
      <div className="flex flex-col w-full mb-16 lg:mb-20 items-start relative pt-32 lg:pt-36 gap-6 md:gap-8 max-w-[1280px] mx-auto">
        {/* Tagline */}
        <div className="text-[14px] md:text-[16px] font-semibold tracking-wider flex items-center">
          <span className="text-[#ff5100]">[</span>
          <span className="text-black mx-2">WHAT WE DO</span>
          <span className="text-[#ff5100]">]</span>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-black/10" />

        {/* Main Heading */}
        <h1 className="text-[50px] md:text-[80px] lg:text-[130px] font-bold text-black leading-none tracking-tight">
          SERVICES
        </h1>
      </div>

      {/* Services Cards List */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10 pb-20">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="w-full bg-[#ffffff] rounded-[24px] md:rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] border-2 border-orange-600/40"
          >
            {/* Left Content */}
            <div className="w-full md:w-[60%] flex flex-col h-full justify-between items-start">
              <div>
                <h3 className="text-black text-[28px] md:text-[36px] font-bold tracking-tight mb-4 md:mb-6">
                  {service.title}
                </h3>
                <p className="text-black/60 text-[16px] md:text-[18px] leading-relaxed mb-4 text-justify">
                  {service.description1}
                </p>
                <p className="text-black/60 text-[16px] md:text-[18px] leading-relaxed mb-6 md:mb-8 text-justify">
                  {service.description2}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                {service.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-4 py-2 bg-[#FF5100] border border-white/10 rounded-xl text-white/90 text-[14px] md:text-[15px] font-medium  cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-[35%] flex items-center justify-center shrink-0 min-h-[220px] md:min-h-0 relative select-none">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] lg:w-[320px] lg:h-[320px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};


