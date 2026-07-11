"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

const categories = [
  "All",
  "Website Development",
  "Photography & Videography",
  "Shopify Development",
  "App Development",
  "Branding",
  "SEO",
  "Social Media Management"
];

export const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section className="w-full bg-[#fffff0] px-6 lg:px-[90px] py-16 lg:py-24">
      {/* Dropdown Filter Button Container */}
      <div className="relative mb-16 z-50 flex items-center">
        {/* Backdrop for closing dropdown when clicking outside */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-40 cursor-default" 
            onClick={() => setIsOpen(false)}
          />
        )}
        
        <div className="relative z-50 flex items-center gap-3">
          {/* Pill Button (Category Label) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="px-8 py-3 bg-gradient-to-r from-[#ff5100] to-[#e04400] text-white font-medium text-[16px] rounded-full shadow-[0_8px_25px_-5px_rgba(255,81,0,0.45)] hover:shadow-[0_12px_30px_-5px_rgba(255,81,0,0.6)] transition-all duration-300 min-w-[120px] text-center cursor-pointer hover:scale-[1.02] active:scale-[0.98] outline-none border-none"
          >
            {selectedCategory}
          </button>
          
          {/* Circular Arrow Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#ff5100] to-[#e04400] text-white rounded-full shadow-[0_8px_25px_-5px_rgba(255,81,0,0.45)] hover:shadow-[0_12px_30px_-5px_rgba(255,81,0,0.6)] transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98] outline-none border-none"
          >
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"></path>
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute left-0 top-full mt-3 w-64 bg-white/95 backdrop-blur-xl border border-white/50 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-6 py-3.5 text-[15px] transition-colors duration-200 first:rounded-t-[20px] last:rounded-b-[20px] cursor-pointer outline-none border-none ${
                    selectedCategory === cat 
                      ? 'text-[#ff5100] bg-[#ff5100]/5 font-semibold' 
                      : 'text-[#30261c]/80 hover:bg-[#30261c]/5 hover:text-[#30261c]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-12">
        {filteredProjects.map((project, index) => {
          return (
            <Link 
              href={`/projects/${project.slug}`}
              key={project.id} 
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
            </Link>
          );
        })}
      </div>
    </section>
  );
};
