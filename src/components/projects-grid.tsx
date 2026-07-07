"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

const categories = [
  "All",
  "Websites",
  "Shopify Stores",
  "Photoshoots",
  "Branding"
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
    : projects.filter(p => mapCategory(p.category) === selectedCategory);

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-20">
        {filteredProjects.map((project) => {
          return (
            <Link 
              href={`/projects/${project.slug}`}
              key={project.id} 
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
            </Link>
          );
        })}
      </div>
    </section>
  );
};
