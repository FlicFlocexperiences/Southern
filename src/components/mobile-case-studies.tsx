"use client";

import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  duration: string;
  image: string;
  result?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ slug, title, category, duration, image, result }) => {
  const isPhotography = false;
  return (
    <Link 
      href={`/projects/${slug}`}
      className="group flex flex-col w-full cursor-pointer bg-white border border-[#eaeaea] p-4 lg:p-5 rounded-[28px] lg:rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_16px_35px_rgba(0,0,0,0.045)] hover:border-neutral-200"
    >
      {/* Image Container with Inset padding and rounded corners */}
      <div className={`w-full aspect-[4/3] rounded-[20px] lg:rounded-[24px] overflow-hidden mb-6 bg-neutral-50 relative ${isPhotography ? "flex items-center justify-center p-4" : ""}`}>
        <img 
          src={image} 
          alt={title}
          className={`transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 ${
            isPhotography 
              ? "max-w-full max-h-full w-auto h-auto object-contain" 
              : "w-full h-full object-cover"
          }`}
        />
        
        {/* Subtle dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.01] transition-colors duration-500 ease-in-out"></div>
      </div>
      
      {/* Text Meta Container */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[24px] lg:text-[28px] font-bold text-[#0f0f0f] leading-none transition-colors duration-300">
          {title}
        </h3>
        
        {result && (
          <p className="text-[13px] lg:text-[14px] text-black/75 leading-relaxed font-normal">
            {result}
          </p>
        )}
        
        {/* Details Row: Category on left, Location & Year & Arrow on right */}
        <div className="flex justify-between items-center text-[12px] lg:text-[13px] font-sans text-neutral-400 font-semibold tracking-wider uppercase mt-1">
          <span>
            {category}
          </span>
          
          <div className="flex items-center gap-2.5">
            {/* Circle Arrow Button */}
            <div className="w-11 h-11 rounded-full bg-[#de5e18] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const MobileCaseStudies = () => {
  const selectedProjects = [
    {
      slug: "ama",
      title: "AMA Legal Solutions",
      category: "Website Development",
      duration: "6 weeks",
      image: "/project/AMA.svg",
      result: "40% reduction in onboarding times & 25% increase in operational efficiency."
    },
    {
      slug: "the-fat-cookie",
      title: "The Fat Cookie",
      category: "Shopify",
      duration: "8 weeks",
      image: "/project/The_fat_cookie.svg",
      result: "Custom Shopify storefront engineered for high conversion rates and frictionless checkout."
    },
    {
      slug: "sage-perfume",
      title: "Sage Perfume",
      category: "Photography & Videography",
      duration: "5 weeks",
      image: "/Sage.jpeg",
      result: "Luxury editorial fragrance photography elevating brand perception and social engagement."
    },
    {
      slug: "jsv",
      title: "JSV Branding",
      category: "Branding",
      duration: "6 weeks",
      image: "/JSV/5.jpg",
      result: "Comprehensive brand identity system built for scalable visual positioning."
    }
  ];

  return (
    <section className="w-full bg-[#f2decc] px-6 md:px-10 lg:px-[90px] py-16 md:py-24 max-w-[1440px] mx-auto">
      {/* Top Header */}
      <div className="flex flex-col items-center mb-16 w-full">
        <p className="font-medium text-[20px] lg:text-[24px] mb-8 tracking-wide">
          <span className="text-[#de5e18]">[</span>
          <span className="text-black mx-2">PROJECTS</span>
          <span className="text-[#de5e18]">]</span>
        </p>
        
        {/* Subtle divider line across the screen */}
        <div className="w-full h-px bg-black/5 mb-10 max-w-[1200px]" />
        
        <h2 className="text-[60px] lg:text-[80px] xl:text-[104px] font-semibold text-black leading-none tracking-tight text-center uppercase">
          CASE STUDIES
        </h2>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-y-12">
        <ProjectCard {...selectedProjects[0]} />
        <ProjectCard {...selectedProjects[1]} />
        <ProjectCard {...selectedProjects[2]} />
        <ProjectCard {...selectedProjects[3]} />
      </div>

      {/* Explore More Projects Button */}
      <div className="w-full flex justify-center mt-12 md:mt-16">
        <Link href="/projects">
          <button 
            className="relative w-[240px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] overflow-hidden shadow-[0px_6px_16px_rgba(222,94,24,0.35)] hover:shadow-[0px_8px_20px_rgba(222,94,24,0.5)] transition-shadow group cursor-pointer"
            aria-label="Explore more projects"
          >
            {/* Inner Left Pill with right shadow */}
            <div className="absolute left-[0px] top-0 w-[180px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
              <span className="font-medium text-[12px] text-white tracking-tight uppercase whitespace-nowrap pt-0.5">
                Explore More Projects
              </span>
            </div>
            
            {/* Right Arrow Icon */}
            <div className="absolute right-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
              <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

