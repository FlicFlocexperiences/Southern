"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

// --- Icons ---
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const FilterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
);

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

const InfinityIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"></path></svg>
);

const TargetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);

const ChartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
);

const PencilIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
);

const ThumbsUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
);

const CameraIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
);

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

// --- Mapping & Data ---
const categories = [
  { name: "All", icon: null, mapping: "All" },
  { name: "Web Design", icon: <GlobeIcon />, mapping: "Website development" },
  { name: "Meta Ads", icon: <InfinityIcon />, mapping: "Meta Ads" },
  { name: "Lead Generation", icon: <TargetIcon />, mapping: "Lead Generation" },
  { name: "SEO", icon: <ChartIcon />, mapping: "SEO" },
  { name: "Branding", icon: <PencilIcon />, mapping: "Branding" },
  { name: "Social Media", icon: <ThumbsUpIcon />, mapping: "Social Media Management" },
  { name: "Photography", icon: <CameraIcon />, mapping: "Photoshoot" }
];

export const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by Category
    if (selectedCategory !== "All") {
      const activeCat = categories.find(c => c.name === selectedCategory);
      if (activeCat) {
        filtered = filtered.filter(p => {
          // Normalize some categories to match data
          const pCat = p.category.toLowerCase();
          const targetCat = activeCat.mapping.toLowerCase();
          
          if (targetCat.includes('website') || targetCat.includes('web')) {
            return pCat.includes('website') || pCat.includes('web') || pCat.includes('shopify');
          }
          if (targetCat.includes('photo')) {
            return pCat.includes('photo') || pCat.includes('video');
          }
          return pCat.includes(targetCat);
        });
      }
    }

    // Filter by Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) || 
        p.client.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    // Apply Sorting
    if (sortBy === "Oldest") {
      filtered = [...filtered].reverse();
    } else if (sortBy === "A-Z") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section className="w-full bg-[#fdfaf6] min-h-screen px-4 md:px-10 lg:px-[90px] pt-24 md:pt-32 lg:pt-36 pb-16 md:pb-24 max-w-[1600px] mx-auto">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 text-[13px] md:text-[14px] font-bold text-[#de5e18] uppercase tracking-wider">
            <span>OUR WORK</span>
            <span className="text-[18px] leading-none">•</span>
          </div>
          <h1 className="text-[42px] sm:text-[56px] md:text-[64px] lg:text-[72px] font-bold leading-[1.1] text-[#3e2723] tracking-tight">
            PROJECTS
          </h1>
          <p className="text-[15px] md:text-[16px] text-[#5d4037] mt-2 leading-relaxed">
            Explore our work across different industries and<br className="hidden md:block"/> see the impact we create for our clients.
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="w-full bg-white rounded-full p-2 pl-6 flex flex-col md:flex-row items-center justify-between border border-gray-200 shadow-sm mb-6 gap-4 md:gap-0">
        <div className="flex items-center gap-3 w-full md:w-auto flex-1">
          <span className="text-gray-400">
            <SearchIcon />
          </span>
          <input 
            type="text"
            placeholder="Search projects, clients or keywords..."
            className="w-full bg-transparent outline-none text-[15px] text-gray-700 placeholder-gray-400 py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <button className="hidden md:flex items-center gap-2 bg-[#fafafa] hover:bg-gray-100 border border-gray-200 px-6 py-2.5 rounded-full text-[14px] font-semibold text-gray-700 transition-colors shrink-0">
          <FilterIcon />
          <span>Filter By Category</span>
          <span className="ml-1"><ChevronDownIcon /></span>
        </button>
      </div>

      {/* Category Pills Row */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 border cursor-pointer ${
                isActive 
                  ? "bg-[#de5e18] border-[#de5e18] text-white shadow-md" 
                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              {cat.icon && <span className={isActive ? "text-white" : "text-gray-500"}>{cat.icon}</span>}
              <span>{cat.name}</span>
            </button>
          );
        })}

        {/* Sort Dropdown (Pushed to right if enough space) */}
        <div ref={sortRef} className="ml-auto relative">
          <div 
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-full text-[14px] font-semibold text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <span>Sort: <span className="text-[#de5e18]">{sortBy}</span></span>
            <span className={`transition-transform duration-200 ${isSortOpen ? "rotate-180" : ""}`}>
              <ChevronDownIcon />
            </span>
          </div>

          <AnimatePresence>
            {isSortOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-2xl shadow-lg z-50 overflow-hidden py-2"
              >
                {["Latest", "Oldest", "A-Z"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setIsSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-[14px] hover:bg-gray-50 transition-colors ${
                      sortBy === option ? "text-[#de5e18] font-bold" : "text-gray-700 font-medium"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project, index) => {
          // Determine tag text based on category for the pill
          let tagText = project.category.split(' ')[0].toUpperCase();
          if (project.category.toLowerCase().includes('website') || project.category.toLowerCase().includes('shopify')) tagText = "WEB";
          if (project.category.toLowerCase().includes('photo')) tagText = "MEDIA";

          // Temporary override to match screenshot exactly
          if (project.slug === 'health') tagText = 'HEALTH';
          if (project.slug === 'chavelle') tagText = 'TRAVEL';
          if (project.slug === 'lotd') tagText = 'FOOD & BEVERAGE';

          return (
            <Link 
              href={`/projects/${project.slug}`}
              key={`${project.id}-${project.slug}-${index}`} 
              className="group flex flex-col w-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Header with embedded Pill */}
              <div className="w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] bg-gray-50 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
                
                {/* Category Pill Overlaid */}
                <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full shadow-sm z-10">
                  <span className="text-[10px] md:text-[11px] font-bold text-[#de5e18] tracking-wider uppercase">
                    {tagText}
                  </span>
                </div>
              </div>
              
              {/* Content Body */}
              <div className="flex flex-col p-6 lg:p-8 flex-1">
                <h3 className="text-[20px] lg:text-[24px] font-bold text-[#3e2723] mb-3">
                  {project.title}
                </h3>
                
                <p className="text-[14px] text-gray-600 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="w-full h-px bg-gray-100 mb-6" />
                
                <div className="flex items-center gap-2 text-[#de5e18] font-bold text-[14px] group-hover:gap-3 transition-all duration-300">
                  <span>View Project</span>
                  <ArrowRightIcon />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

    </section>
  );
};
