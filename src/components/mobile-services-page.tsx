"use client";

import Link from "next/link";
import { services } from "@/data/services";

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
        {services.map((service, index) => (
          <Link
            href={`/services/${service.slug}`}
            key={index} 
            className="block w-full bg-[#ffffff] rounded-[24px] p-6 flex flex-col gap-6 relative overflow-hidden border-2 border-orange-600/45 cursor-pointer"
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
                  className="px-3 py-1.5 bg-[#FF5100] border border-white/10 rounded-lg text-white/90 text-[13px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};


