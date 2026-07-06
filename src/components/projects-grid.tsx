"use client";

import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export const ProjectsGrid = () => {
  return (
    <section className="w-full bg-[#fffff0] px-6 lg:px-[90px] py-16 lg:py-24">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-12 lg:gap-y-16">
        {projects.map((project, index) => {
          // Add a slight top margin to the second column on larger screens to create a staggered masonry feel
          const isEven = index % 2 !== 0;
          return (
            <Link 
              href={`/projects/${project.slug}`}
              key={project.id} 
              className={`group flex flex-col w-full cursor-pointer ${isEven ? 'md:mt-16' : ''}`}
            >
              {/* Image Container with Overflow Hidden for the scale effect */}
              <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-6 bg-[#30261c]/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                />
                
                {/* Optional dark overlay on hover for extra premium feel */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-in-out"></div>
              </div>
              
              {/* Text Meta Container */}
              <div className="flex flex-col gap-1 px-2">
                <h3 className="text-[22px] lg:text-[26px] font-medium text-[#30261C] group-hover:text-[#ff5100] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[15px] lg:text-[17px] text-[#30261C]/60 font-light">
                  {project.category}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
