"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DesktopNav = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <div className="fixed top-3 left-0 right-0 z-[100] w-full px-5 md:px-8 py-3 flex flex-col gap-3 max-w-[1280px] mx-auto">

      {/* Main Navbar */}
      <nav className="w-full h-[54px] bg-[#de5e18] rounded-full flex items-center justify-between px-5 relative overflow-hidden shadow-sm">
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/">
            <Image
              src="/LOGO_Final.svg"
              alt="SEM Logo"
              width={44}
              height={44}
              className="h-11 w-11 cursor-pointer transition-transform"
            />
          </Link>
        </div>

        {/* Links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[22px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`text-[15px] transition-all whitespace-nowrap ${
                  isActive 
                    ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
                    : "text-white/65 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link 
          href="/contact" 
          className="shrink-0 h-[38px] bg-white rounded-full flex items-center pl-4 pr-[3px] gap-2 group hover:scale-[1.02] transition-transform"
        >
          <div className="flex items-center gap-[5px]">
            <div className="w-[6px] h-[6px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_6px_#00ff00] animate-pulse" />
            <span className="text-black text-[15px] font-medium tracking-tight whitespace-nowrap pt-0.5">
              Let's impress you
            </span>
          </div>
          <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center relative overflow-hidden group-hover:rotate-45 transition-transform duration-300 shadow-inner">
             <div className="absolute inset-0 bg-gradient-to-r from-[#ffa479] to-[#de5e18]" />
             <div className="relative z-10 text-white">
               <ArrowRightIcon />
             </div>
          </div>
        </Link>
      </nav>
    </div>
  );
};
