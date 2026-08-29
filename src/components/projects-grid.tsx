"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { projects as initialStaticProjects, Project, ProjectCategory } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

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

const GridIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>
);

type FilterCategory = "All" | ProjectCategory;

// --- Categories Definition ---
const categories: { name: FilterCategory; icon: React.ReactNode | null }[] = [
  { name: "All", icon: null },
  { name: "Web Design", icon: <GlobeIcon /> },
  { name: "Meta Ads", icon: <InfinityIcon /> },
  { name: "Lead Generation", icon: <TargetIcon /> },
  { name: "SEO", icon: <ChartIcon /> },
  { name: "Branding", icon: <PencilIcon /> },
  { name: "Social Media", icon: <ThumbsUpIcon /> },
  { name: "Photography", icon: <CameraIcon /> }
];

const normalizeCat = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

const matchesCategory = (p: Project, targetCat: FilterCategory): boolean => {
  if (targetCat === "All") return true;

  const targetNorm = normalizeCat(targetCat);

  // 1. Direct match on primary category
  if (p.category && normalizeCat(p.category) === targetNorm) return true;

  // 2. Match in categories array
  if (p.categories && Array.isArray(p.categories)) {
    if (p.categories.some(c => typeof c === 'string' && normalizeCat(c) === targetNorm)) {
      return true;
    }
  }

  // 3. Match on exact tag if specified as category name
  if (p.tag && normalizeCat(p.tag) === targetNorm) {
    return true;
  }

  return false;
};

export const ProjectsGrid = () => {
  const [projectsList, setProjectsList] = useState<Project[]>(initialStaticProjects);
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  
  const sortRefMobile = useRef<HTMLDivElement>(null);
  const sortRefDesktop = useRef<HTMLDivElement>(null);
  const filterDropdownRef = useRef<HTMLDivElement>(null);

  // Fetch Firestore projects and merge with static projects
  useEffect(() => {
    const fetchLiveProjects = async () => {
      try {
        const q = query(collection(db, "projects"), orderBy("created", "desc"));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const liveProjects: Project[] = snapshot.docs.map(doc => {
            const data = doc.data();
            return {
              id: doc.id,
              slug: data.slug || doc.id,
              title: data.title || "Untitled Project",
              category: (data.category as ProjectCategory) || "Web Design",
              tag: data.tag || (data.category ? data.category.toUpperCase() : "WEB DESIGN"),
              categories: (data.categories as ProjectCategory[]) || [data.category || "Web Design"],
              description: data.description || "",
              client: data.client || "",
              duration: data.duration || "",
              services: data.services || "",
              websiteUrl: data.websiteUrl || "",
              image: data.image || "/photoshoot.jpg",
              heroImage: data.heroImage || data.image || "/photoshoot.jpg",
              gallery: Array.isArray(data.gallery) ? data.gallery : [],
              created: data.created || Date.now()
            };
          });

          // Firestore is the single authoritative source of truth
          setProjectsList(liveProjects);
        } else {
          // Fallback only if Firestore is completely empty
          setProjectsList(initialStaticProjects);
        }
      } catch (err) {
        console.error("Error fetching live projects from Firestore:", err);
        setProjectsList(initialStaticProjects);
      }
    };

    fetchLiveProjects();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        (!sortRefMobile.current || !sortRefMobile.current.contains(target)) &&
        (!sortRefDesktop.current || !sortRefDesktop.current.contains(target))
      ) {
        setIsSortOpen(false);
      }
      if (!filterDropdownRef.current || !filterDropdownRef.current.contains(target)) {
        setIsFilterDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProjects = useMemo(() => {
    let filtered = projectsList;

    // Filter strictly & smartly by Category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => matchesCategory(p, selectedCategory));
    }

    // Filter by Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.client.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.services.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q) ||
          p.categories.some((c) => c.toLowerCase().includes(q))
      );
    }

    // Apply Sorting
    if (sortBy === "Oldest") {
      filtered = [...filtered].reverse();
    } else if (sortBy === "A-Z") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // Default (Latest): Prioritize projects with active live website links first
      filtered = [...filtered].sort((a, b) => {
        const hasLiveA = a.websiteUrl && a.websiteUrl !== "#" && a.websiteUrl.trim() !== "" ? 1 : 0;
        const hasLiveB = b.websiteUrl && b.websiteUrl !== "#" && b.websiteUrl.trim() !== "" ? 1 : 0;
        if (hasLiveA !== hasLiveB) {
          return hasLiveB - hasLiveA;
        }
        return (b.created || 0) - (a.created || 0);
      });
    }

    return filtered;
  }, [projectsList, selectedCategory, searchQuery, sortBy]);

  const renderSortOptions = () => (
    <AnimatePresence>
      {isSortOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute right-0 top-full mt-2 w-44 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden py-2"
        >
          {["Latest", "Oldest", "A-Z"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSortBy(option);
                setIsSortOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-[14px] hover:bg-gray-50 transition-colors flex items-center justify-between ${
                sortBy === option ? "text-[#de5e18] font-bold bg-[#de5e18]/5" : "text-gray-700 font-medium"
              }`}
            >
              <span>{option}</span>
              {sortBy === option && (
                <span className="w-2 h-2 rounded-full bg-[#de5e18]"></span>
              )}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section className="w-full bg-[#fdfaf6] min-h-screen px-4 md:px-10 lg:px-[90px] pt-24 md:pt-32 lg:pt-36 pb-16 md:pb-24 max-w-[1600px] mx-auto">
      
      {/* Mobile Success Stories Badge */}
      <div className="flex md:hidden items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-[#de5e18] flex items-center justify-center text-white shadow-lg shrink-0">
          <BriefcaseIcon />
        </div>
        <div className="flex flex-col">
          <span className="text-[20px] font-bold text-[#de5e18] leading-none">
            {projectsList.length}
          </span>
          <span className="text-[13px] font-medium text-[#5d4037]">Success Stories</span>
        </div>
      </div>

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
      <div className="w-full bg-white rounded-[24px] md:rounded-full p-3 md:p-2 md:pl-6 flex flex-col md:flex-row items-center justify-between border border-gray-100 md:border-gray-200 shadow-sm mb-6 gap-3 md:gap-0 relative z-30">
        <div className="flex items-center gap-3 w-full md:w-auto flex-1 bg-[#fafafa] md:bg-transparent border border-gray-100 md:border-none rounded-[16px] md:rounded-none px-4 py-3 md:px-0 md:py-0">
          <span className="text-gray-500 md:text-gray-400">
            <SearchIcon />
          </span>
          <input 
            type="text"
            placeholder="Search projects by name, service or industry..."
            className="w-full bg-transparent outline-none text-[15px] text-gray-700 placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="text-gray-400 hover:text-gray-600 px-2 text-xs font-bold"
            >
              CLEAR
            </button>
          )}
        </div>
        
        {/* Filter By Category Dropdown */}
        <div ref={filterDropdownRef} className="relative w-full md:w-auto">
          <button 
            type="button"
            onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
            className={`w-full md:w-auto flex items-center justify-between md:justify-center gap-2 px-4 py-3 md:px-6 md:py-2.5 rounded-[16px] md:rounded-full text-[14px] font-semibold transition-colors shrink-0 ${
              selectedCategory !== "All"
                ? "bg-[#de5e18] text-white"
                : "bg-[#fafafa] hover:bg-gray-100 text-gray-700 border border-gray-100 md:border-gray-200"
            }`}
          >
            <div className="flex items-center gap-2">
              <FilterIcon />
              <span>{selectedCategory === "All" ? "Filter By Category" : selectedCategory}</span>
            </div>
            <span className={`ml-1 transition-transform duration-200 ${isFilterDropdownOpen ? "rotate-180" : ""}`}>
              <ChevronDownIcon />
            </span>
          </button>

          <AnimatePresence>
            {isFilterDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden py-2"
              >
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setIsFilterDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-[14px] hover:bg-gray-50 transition-colors ${
                      selectedCategory === cat.name
                        ? "text-[#de5e18] font-bold bg-[#de5e18]/5"
                        : "text-gray-700 font-medium"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {cat.icon && <span className="opacity-70">{cat.icon}</span>}
                      <span>{cat.name}</span>
                    </div>
                    {selectedCategory === cat.name && (
                      <span className="w-2 h-2 rounded-full bg-[#de5e18]"></span>
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Category Pills & Desktop Sort Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-12 relative z-20">
        {/* Category Pills Row */}
        <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-2 md:pb-0 md:flex-wrap items-center gap-3 -mx-4 px-4 md:mx-0 md:px-0 flex-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.name;
            const isAll = cat.name === "All";
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex shrink-0 items-center justify-center transition-all duration-300 cursor-pointer border ${
                  isAll
                    ? isActive 
                      ? "bg-[#de5e18] border-[#de5e18] text-white rounded-[20px] px-6 py-3 shadow-md font-bold text-[15px] h-fit md:h-auto" 
                      : "bg-white border-gray-100 text-gray-700 hover:bg-gray-50 rounded-[20px] px-6 py-3 shadow-sm font-bold text-[15px] h-fit md:h-auto"
                    : isActive
                      ? "bg-[#de5e18] border-[#de5e18] text-white rounded-[24px] shadow-md flex-col w-[85px] h-[85px] gap-1 md:flex-row md:w-auto md:h-auto md:px-5 md:py-2.5 md:rounded-full md:gap-2"
                      : "bg-white border-gray-100 text-gray-700 hover:bg-gray-50 rounded-[24px] shadow-sm flex-col w-[85px] h-[85px] gap-1 md:flex-row md:w-auto md:h-auto md:px-5 md:py-2.5 md:rounded-full md:gap-2"
                }`}
              >
                {cat.icon && (
                  <span className={`${isAll ? '' : 'mb-1 md:mb-0'} ${isActive ? "text-white" : "text-black md:text-gray-500"}`}>
                    {cat.icon}
                  </span>
                )}
                <span className={`font-semibold whitespace-nowrap text-center ${
                  isAll ? "text-[15px]" : "text-[11px] md:text-[14px]"
                } ${isActive ? "text-white" : "text-gray-700"}`}>
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Desktop Sort Dropdown (Positioned outside overflow-x-auto) */}
        <div ref={sortRefDesktop} className="relative hidden md:block shrink-0 z-30">
          <button 
            type="button"
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-full text-[14px] font-semibold text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors shadow-xs"
          >
            <span>Sort: <span className="text-[#de5e18]">{sortBy}</span></span>
            <span className={`transition-transform duration-200 ${isSortOpen ? "rotate-180" : ""}`}>
              <ChevronDownIcon />
            </span>
          </button>
          {renderSortOptions()}
        </div>
      </div>

      {/* Mobile Sort & Grid Toggle Row */}
      <div className="flex md:hidden items-center justify-between mb-8 px-1 relative z-20">
        <div ref={sortRefMobile} className="relative">
          <button 
            type="button"
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center gap-2 bg-white border border-gray-100 px-5 py-2.5 rounded-2xl shadow-sm text-[14px] font-semibold text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <span>Sort: <span className="text-[#de5e18]">{sortBy}</span></span>
            <span className={`transition-transform duration-200 ${isSortOpen ? "rotate-180" : ""}`}>
              <ChevronDownIcon />
            </span>
          </button>
          {renderSortOptions()}
        </div>
        
        <div className="w-11 h-11 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-50">
          <GridIcon />
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-20 bg-white/70 rounded-3xl border border-gray-100 p-8 flex flex-col items-center justify-center">
            <p className="text-[#3e2723] text-lg font-bold mb-2">No projects found</p>
            <p className="text-gray-500 text-sm mb-6 max-w-md">
              No projects match the selected category &quot;{selectedCategory}&quot; {searchQuery ? `and search &quot;${searchQuery}&quot;` : ""}.
            </p>
            <button 
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="px-6 py-2.5 bg-[#de5e18] text-white rounded-full font-bold text-sm hover:bg-[#c44f12] shadow-sm transition-colors"
            >
              View All Projects
            </button>
          </div>
        ) : (
          filteredProjects.map((project, index) => {
            const badgeTag = project.tag || project.category.toUpperCase();

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
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-4 py-1.5 rounded-full shadow-sm z-10 border border-black/5">
                    <span className="text-[10px] md:text-[11px] font-bold text-[#de5e18] tracking-wider uppercase">
                      {badgeTag}
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
          })
        )}
      </div>

    </section>
  );
};
