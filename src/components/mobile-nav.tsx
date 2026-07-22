"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PROJECTS", href: "/projects" },
    { name: "BLOGS", href: "/blogs" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-[100] h-0 pointer-events-none">
      {/* Base Navbar (Always visible at the bottom layer) */}
      <div className={`h-[68px] w-full flex items-center justify-between px-8 md:px-10 absolute top-0 left-0 z-40 transition-all duration-300 pointer-events-auto ${
        isOpen ? "bg-transparent" : "bg-gradient-to-r from-[#e07243] to-[#e07243]"
      }`}>
        {/* Logo */} 
        <Link href="/">
          <Image
            src="/LOGO_Final.svg"
            alt="SEM Logo"
            width={48}
            height={48}
            className="h-12 w-12 cursor-pointer transition-transform hover:scale-105"
          />
        </Link>
        
        <button 
          type="button"
          className="flex items-center justify-center gap-4 cursor-pointer group p-3 -mr-3"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <p className="font-semibold text-[15px] tracking-widest text-[#ffffff] pointer-events-none">
            MENU
          </p>
          {/* Burger Icon */}
          <div className="flex flex-col gap-[4px] w-8 pointer-events-none">
            <div className="h-[2px] w-full bg-[#ffffff]" />
            <div className="h-[2px] w-3/4 self-end bg-[#ffffff] transition-all group-hover:w-full" />
          </div>
        </button>
      </div>

      <div 
        className={`absolute top-0 left-0 w-full bg-white/20 backdrop-blur-xl border border-white/20 z-[60] overflow-hidden rounded-b-[40px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "shadow-2xl shadow-black/5 pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ height: isOpen ? '480px' : '0px' }}
      >
        {/* Inner Content - Fixed height prevents squishing during height transition */}
        <div className="w-full relative" style={{ height: '480px' }}>
          {/* Header (perfectly overlays the base header) */}
          <div className="h-[68px] w-full flex items-center justify-between px-8 md:px-10 absolute top-0 left-0 z-50">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/LOGO_Final.svg"
                alt="SEM Logo"
                width={48}
                height={48}
                className="h-12 w-12 cursor-pointer transition-transform hover:scale-105"
              />
            </Link>
            
            <button 
              type="button"
              className="flex items-center justify-center gap-4 cursor-pointer group p-3 -mr-3"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <p className="font-bold text-[15px] tracking-widest text-[#de5e18] pointer-events-none">
                MENU
              </p>
              {/* Brand Color Burger Icon */}
              <div className="flex flex-col gap-[4px] w-8 pointer-events-none">
                <div className="h-[2px] w-full bg-[#de5e18]" />
                <div className="h-[2px] w-full bg-[#de5e18] transition-all" />
              </div>
            </button>
          </div>

          {/* Links Section */}
          <div className="absolute top-20 right-8 flex flex-col items-end gap-5 font-semibold text-xl text-neutral-800">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`transition-all duration-300 ${
                    isActive 
                      ? "text-[#de5e18] font-bold drop-shadow-[0_0_8px_rgba(222,94,24,0.2)] opacity-100 scale-105" 
                      : "text-neutral-700 hover:text-[#de5e18] opacity-90 hover:opacity-100 hover:translate-x-[-4px]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Footer Info Section */}
          <div className="absolute bottom-8 left-8 flex flex-col gap-4 items-start">
            <div className="flex flex-col font-semibold gap-3 items-start text-neutral-800">
              <a href="tel:+919899238237" className="leading-tight text-2xl hover:text-[#de5e18] transition-colors">+91 9899238237</a>
            </div>
            <div className="flex gap-2.5 items-center">
              <a href="/contact" className="flex items-center justify-center rounded-full size-10 bg-[#de5e18] text-white hover:bg-[#de5e18]/90 hover:scale-105 transition-all shadow-sm">
                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              </a>
              <a href="/contact" className="flex items-center justify-center rounded-full size-10 bg-[#de5e18] text-white hover:bg-[#de5e18]/90 hover:scale-105 transition-all shadow-sm">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer removed so hero section goes behind nav */}
    </div>
  );
}
