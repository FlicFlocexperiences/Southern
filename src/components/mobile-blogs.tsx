"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BlogItem } from "./desktop-blogs";

export const MobileBlogs = ({ blogs = [] }: { blogs?: BlogItem[] }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  // Use first blog as featured, or fallback if none exist
  const featuredBlog = blogs[0] || {
    title: "Trademark Registration in June 2026: A Comprehensive Guide",
    category: "SOUTHERN EDGE MARKETING BLOGS",
    slug: "trademark-registration-in-june-2026-a-comprehensive-guide",
    image: "/assets/trademark-guide.png",
    date: "Jun 20, 2026",
    excerpt: "A Comprehensive Guide to Understanding Trademark Signatures and Claims in India"
  };

  const remainingBlogs = blogs.length > 0 ? blogs.slice(1) : [];

  const filters = ["All", "AI Agents", "AI Trends & News", "Tutorials"];

  // Filter and sort remaining blogs
  const filteredAndSortedBlogs = useMemo(() => {
    let result = [...remainingBlogs];
    
    // 1. Filter
    if (activeFilter !== "All") {
      result = result.filter(
        (blog) => blog.category.toLowerCase() === activeFilter.toLowerCase()
      );
    }
    
    // 2. Sort
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === "newest" ? dateB - dateA : dateA - dateB;
    });
    
    return result;
  }, [remainingBlogs, activeFilter, sortBy]);

  return (
    <div className="w-full relative bg-[#f2decc] pt-24 pb-16 overflow-hidden">
      
      {/* Hero Section */}
      <div className="flex flex-col items-start w-full px-6 gap-6 mb-10 z-10 relative">
        <span className="text-[12px] font-bold tracking-[1.5px] uppercase text-orange-500">
          SOUTHERN EDGE MARKETING BLOGS
        </span>
        
        <h1 className="text-[36px] leading-[1.1] font-bold text-black tracking-tight mt-1">
          Ideas that build<br />
          better digital experiences
        </h1>
        
        <p className="text-black/60 text-[14px] leading-relaxed text-justify mb-4">
          Anything and everything you're looking for to protect your brand, trademarks, and intellectual property rights.
        </p>

        {/* Featured Card */}
        <Link 
          href={`/blogs/${featuredBlog.slug}`}
          className="group flex flex-col w-full text-left cursor-pointer bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-black/5"
        >
          <div className="w-full relative flex bg-transparent">
            <img 
              src={featuredBlog.image} 
              alt={featuredBlog.title} 
              className="w-full h-auto block drop-shadow-lg" 
            />
            {/* 3 min read pill */}
            <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="text-[12px] font-medium text-gray-700">3 min read</span>
            </div>
          </div>
          <div className="p-5 flex flex-col">
            <div className="flex justify-between items-start gap-4 mb-3">
              <span className="text-[11px] font-semibold text-[#de5e18] uppercase tracking-wider leading-relaxed flex-1">
                {featuredBlog.category}
              </span>
              <span className="text-[12px] text-gray-400 whitespace-nowrap pt-0.5">
                {featuredBlog.date}
              </span>
            </div>
            <h3 className="font-semibold text-[20px] leading-[1.3] text-black mb-3">
              {featuredBlog.title}
            </h3>
            {featuredBlog.excerpt && (
              <p className="text-[14px] text-gray-500 line-clamp-3 mb-5 leading-relaxed">
                {featuredBlog.excerpt}
              </p>
            )}
            <div className="flex items-center gap-2 text-[14px] font-medium text-black mt-auto">
              Read Article 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </Link>
      </div>

      {/* Horizontal Line Divider */}
      <div className="w-[150vw] -ml-[25vw] h-px bg-black/10 relative mb-8" />

      {/* Filter and Sort Bar */}
      <div className="w-full px-6 flex flex-col gap-5 mb-8 text-left">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2.5 rounded-full text-[12px] font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-orange-500 text-white  border-transparent shadow-sm"
                    : "bg-transparent text-black/70 border border-black/10 hover:border-black/35"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 self-end">
          <span className="text-[12px] text-black/45 font-medium whitespace-nowrap">
            Sort By:
          </span>
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-transparent border border-black/10 rounded-xl px-3 py-1.5 text-[12px] font-medium text-black focus:outline-none focus:border-black/40 cursor-pointer"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Remaining Blogs List */}
      <div className="w-full px-6 flex flex-col gap-8 relative z-10">
        {filteredAndSortedBlogs.length > 0 ? (
          <>
            {filteredAndSortedBlogs
              .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
              .map((blog, index) => (
            <Link 
              key={index} 
              href={`/blogs/${blog.slug}`}
              className="group flex flex-col w-full text-left cursor-pointer bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-black/5"
            >
              <div className="w-full relative flex bg-transparent">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-auto block drop-shadow-lg" 
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span className="text-[12px] font-medium text-gray-700">3 min read</span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <span className="text-[11px] font-semibold text-[#de5e18] uppercase tracking-wider leading-relaxed flex-1">
                    {blog.category}
                  </span>
                  <span className="text-[12px] text-gray-400 whitespace-nowrap pt-0.5">
                    {blog.date}
                  </span>
                </div>
                
                <h3 className="font-semibold text-[19px] leading-[1.3] text-black mb-3">
                  {blog.title}
                </h3>
                
                {blog.excerpt && (
                  <p className="text-[14px] text-gray-500 line-clamp-3 mb-5 leading-relaxed">
                    {blog.excerpt}
                  </p>
                )}
                
                <div className="flex items-center gap-2 text-[14px] font-medium text-black mt-auto">
                  Read Article 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Pagination Controls */}
          {Math.ceil(filteredAndSortedBlogs.length / ITEMS_PER_PAGE) > 1 && (
            <div className="flex justify-between items-center gap-2 mt-4">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-full border border-black/10 hover:border-black/30 disabled:opacity-50 disabled:hover:border-black/10 transition-all font-medium text-[12px] text-black"
              >
                Previous
              </button>
              <span className="text-[12px] font-medium text-black/60">
                {currentPage} of {Math.ceil(filteredAndSortedBlogs.length / ITEMS_PER_PAGE)}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(Math.ceil(filteredAndSortedBlogs.length / ITEMS_PER_PAGE), p + 1))}
                disabled={currentPage === Math.ceil(filteredAndSortedBlogs.length / ITEMS_PER_PAGE)}
                className="px-4 py-2 rounded-full border border-black/10 hover:border-black/30 disabled:opacity-50 disabled:hover:border-black/10 transition-all font-medium text-[12px] text-black"
              >
                Next
              </button>
            </div>
          )}
          </>
        ) : (
          <div className="py-12 text-center text-black/40 font-medium">
            No articles found in this category.
          </div>
        )}
      </div>

    </div>
  );
};

