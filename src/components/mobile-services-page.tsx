"use client";

import React from "react";

const servicesData = [
  {
    title: "Ui/UX Design",
    description1: "We craft digital experiences that are intuitive, beautiful, and user-centric.",
    description2: "By focusing on user behavior, wireframing, and interactive prototyping, we turn complex ideas into clear and engaging user interfaces.",
    tags: ["User Experience", "User Interface", "Figma", "Prototyping", "Wireframing"],
    image: "/services/branding.png",
  },
  {
    title: "Web Development",
    description1: "We build fast, secure, and fully responsive websites tailored to your business goals.",
    description2: "Using modern architectures and clean code standards, we ensure your site is optimized for performance, scalability, and seamless user experiences.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "APIs", "Performance"],
    image: "/services/website-development.png",
  },
  {
    title: "Performance Marketing",
    description1: "We run highly targeted, data-driven ad campaigns that maximize conversion rates and scale business growth.",
    description2: "From audience research to ongoing optimization, we focus on measurable results and maximizing return on investment.",
    tags: ["Google Ads", "Meta Ads", "A/B Testing", "Targeting", "ROI"],
    image: "/services/performance-marketing.png",
  },
  {
    title: "SEO",
    description1: "We optimize your website's search engine visibility to drive consistent, high-intent organic traffic.",
    description2: "Through comprehensive keyword research, on-page optimization, and technical audits, we build sustainable rankings.",
    tags: ["On-Page SEO", "Technical SEO", "Keywords", "Link Building", "Rankings"],
    image: "/services/seo.png",
  },
  {
    title: "Shopify Development",
    description1: "We build fully customized, conversion-focused e-commerce stores designed to scale with your sales.",
    description2: "From storefront setup to liquid customization and seamless checkout optimization, we cover every aspect of e-commerce.",
    tags: ["Shopify", "Liquid Templates", "Custom Checkout", "Integrations", "E-commerce"],
    image: "/services/website-revamp.png",
  },
  {
    title: "App Development",
    description1: "We engineer robust, high-performance mobile applications that deliver native-like user experiences.",
    description2: "Whether iOS or Android, we develop seamless frontend interfaces connected to reliable, scalable backends.",
    tags: ["React Native", "iOS Apps", "Android Apps", "APIs", "App Store"],
    image: "/services/app-development.png",
  },
];

export const MobileServicesPage = () => {
  return (
    <div className="w-full relative bg-[#fffff0] pt-24 pb-8 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col w-full px-6 items-start gap-4 z-10 relative mb-10">
        {/* Tagline */}
        <div className="text-[14px] font-semibold tracking-wider flex items-center">
          <span className="text-[#ff5100]">[</span>
          <span className="text-black mx-2">WHAT WE DO</span>
          <span className="text-[#ff5100]">]</span>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-black/10" />

        {/* Main Heading */}
        <h1 className="text-[40px] leading-none font-bold text-black tracking-tight mt-2">
          SERVICES
        </h1>
      </div>

      {/* Services Cards List */}
      <div className="w-full px-6 flex flex-col gap-6 pb-16">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="w-full bg-[#ffffff] rounded-[24px] p-6 flex flex-col gap-6 relative overflow-hidden border-2 border-orange-600/45"
          >
            {/* Title & Description */}
            <div className="flex flex-col gap-4">
              <h3 className="text-black text-[24px] font-bold tracking-tight">
                {service.title}
              </h3>
              <p className="text-black/60 text-[15px] leading-relaxed text-justify">
                {service.description1}
              </p>
              <p className="text-black/60 text-[15px] leading-relaxed text-justify">
                {service.description2}
              </p>
            </div>

            {/* Image (Centered) */}
            <div className="w-1/2 flex items-center justify-center shrink-0 min-h-[160px] py-4 select-none">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-[180px] h-[180px] object-contain"
              />
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {service.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="px-3 py-1.5 bg-[#1c1c1c] border border-white/10 rounded-lg text-white/90 text-[13px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


