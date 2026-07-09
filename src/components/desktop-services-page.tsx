"use client";

import Link from "next/link";
import { services } from "@/data/services";

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
        <h1 className="text-[50px] md:text-[80px] lg:text-[100px] font-bold text-black leading-none tracking-tight">
          SERVICES
        </h1>
      </div>

      {/* Services Cards List */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10 pb-20">
        {services.map((service, index) => (
          <Link
            href={`/services/${service.slug}`}
            key={index} 
            className="block w-full bg-[#ffffff] rounded-[24px] md:rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] border-2 border-orange-600/40 cursor-pointer"
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
                    className="px-4 py-2 bg-[#FF5100] border border-white/10 rounded-xl text-white/90 text-[14px] md:text-[15px] font-medium cursor-default"
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
          </Link>
        ))}
      </div>

    </section>
  );
};


