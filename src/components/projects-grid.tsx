"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

const categories = [
  "All",
<<<<<<< HEAD
  "Website Development",
  "Photography & Videography",
  "Shopify Development",
  "App Development",
  "Branding",
  "SEO",
  "Social Media Management"
=======
  "Websites",
  "Shopify Stores",
  "Photoshoots",
  "Branding"
>>>>>>> 7221075c0e395920d79a3133477b5c5363a9cb80
];

const mapCategory = (dbCategory: string): string => {
  switch (dbCategory) {
    case "Website development":
    case "Meta Ads":
      return "Websites";
    case "Shopify stores":
      return "Shopify Stores";
    case "Photoshoot":
      return "Photoshoots";
    case "Branding":
      return "Branding";
    default:
      return dbCategory;
  }
};

export const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
<<<<<<< HEAD
    : projects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
=======
    : projects.filter(p => mapCategory(p.category) === selectedCategory);
>>>>>>> 7221075c0e395920d79a3133477b5c5363a9cb80

  return (
    <section className="w-full bg-[#fffff0] px-6 md:px-10 lg:px-[90px] pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-24 max-w-[1440px] mx-auto">
      {/* Top tag: [ OUR WORK ] */}
      <div className="flex items-center gap-1 text-[11px] md:text-[13px] tracking-[0.2em] font-bold">
        <span className="text-[#ff5100] font-sans">[</span>
        <span className="text-[#30261C] uppercase font-sans">OUR WORK</span>
        <span className="text-[#ff5100] font-sans">]</span>
      </div>

      {/* Horizontal Line Divider */}
      <div className="w-full h-px bg-[#30261C]/15 my-5 md:my-6" />

      {/* Heading: PROJECTS */}
      <h1 className="text-[54px] sm:text-[72px] md:text-[90px] lg:text-[110px] xl:text-[130px] font-extrabold leading-[1] text-[#30261C] uppercase tracking-tighter mb-8 md:mb-12">
        PROJECTS
      </h1>

      {/* Filter Row with Dot Indicators */}
      <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 mb-12 md:mb-16">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="flex items-center gap-2 text-[14px] md:text-[16px] transition-all cursor-pointer select-none border-none outline-none bg-transparent py-1"
            >
              {/* Dot */}
              <span
                className={`w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full transition-colors duration-300 ${
                  isActive ? "bg-[#ff5100]" : "bg-[#30261C]/30"
                }`}
              />
              {/* Text */}
              <span
                className={`transition-colors duration-300 font-medium ${
                  isActive ? "text-[#30261C] font-semibold" : "text-[#30261C]/50 hover:text-[#30261C]"
                }`}
              >
                {category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid Container */}
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-12">
        {filteredProjects.map((project, index) => {
=======
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-20">
        {filteredProjects.map((project) => {
>>>>>>> 7221075c0e395920d79a3133477b5c5363a9cb80
          return (
            <Link 
              href={`/projects/${project.slug}`}
              key={project.id} 
<<<<<<< HEAD
              className="group flex flex-col w-full cursor-pointer bg-white border border-[#eaeaea] p-4 lg:p-5 rounded-[28px] lg:rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_16px_35px_rgba(0,0,0,0.045)] hover:border-neutral-200"
            >
              {/* Image Container with Inset padding and rounded corners */}
              <div className="w-full aspect-[4/3] rounded-[20px] lg:rounded-[24px] overflow-hidden mb-6 bg-neutral-50 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
                
                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.01] transition-colors duration-500 ease-in-out"></div>
              </div>
              
              {/* Text Meta Container */}
              <div className="flex flex-col gap-4 px-1 pb-1">
                <h3 className="text-[24px] lg:text-[28px] font-bold text-[#0f0f0f] leading-none transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Details Row: Category on left, Location & Year & Arrow on right */}
                <div className="flex justify-between items-center text-[12px] lg:text-[13px] font-sans text-neutral-400 font-semibold tracking-wider uppercase mt-1">
                  <span>
                    {project.category}
                  </span>
                  
                  <div className="flex items-center gap-2.5">
                    <span>
                      DUBAI • 2025
                    </span>
                    
                    {/* Circle Arrow Button */}
                    <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white shrink-0 group-hover:bg-[#ff5100] group-hover:scale-105 transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
=======
              className="group flex flex-col w-full cursor-pointer"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] rounded-[24px] lg:rounded-[32px] overflow-hidden bg-[#30261c]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              
              {/* Centered capitalized title */}
              <h3 className="text-center text-[18px] md:text-[22px] lg:text-[24px] font-bold text-[#30261C] uppercase mt-5 tracking-wide group-hover:text-[#ff5100] transition-colors duration-300">
                {project.title}
              </h3>
>>>>>>> 7221075c0e395920d79a3133477b5c5363a9cb80
            </Link>
          );
        })}
      </div>
    </section>
  );
};
