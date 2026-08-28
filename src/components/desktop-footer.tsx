"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const DesktopFooter = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#fffff0] via-[#ffebd9] to-[#ff5100] pt-14 pb-10 px-8 lg:px-[80px] xl:px-[100px] relative z-10 overflow-hidden flex flex-col text-black font-sans">
      
      {/* Top Section: Centered Brand Mark & Mission */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
        <Link href="/" className="inline-flex items-center group mb-5">
          <Image
            src="/Footer_Logo.svg"
            alt="Southern Edge Marketing"
            width={220}
            height={74}
            className="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <p className="text-[17px] lg:text-[19px] text-black/75 max-w-2xl leading-relaxed font-normal">
          Building high-performance digital platforms, custom websites, and revenue-driven growth strategies that help ambitious businesses dominate their industry.
        </p>
      </div>

      {/* Main Grid: 8 Columns across 2 Rows */}
      <div className="flex flex-col gap-12 w-full max-w-[1400px] mx-auto mb-12">
        
        {/* ROW 1: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Col 1: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-[18px] lg:text-[19px] font-bold tracking-tight text-black pb-2.5 mb-4 border-b border-black/15">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2.5 text-[14.5px] lg:text-[15px] text-black/80">
              <Link href="/" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Home
              </Link>
              <Link href="/about" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                About Us
              </Link>
              <Link href="/services" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Our Services
              </Link>
              <Link href="/projects" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Featured Projects
              </Link>
              <Link href="/blogs" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Blogs & Insights
              </Link>
              <Link href="/author/ameet-nangia" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Founder Profile
              </Link>
              <Link href="/contact" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit font-medium text-[#c43e00]">
                Free Growth Consultation →
              </Link>
            </nav>
          </div>

          {/* Col 2: Our Expertise */}
          <div className="flex flex-col">
            <h3 className="text-[18px] lg:text-[19px] font-bold tracking-tight text-black pb-2.5 mb-4 border-b border-black/15">
              Our Expertise
            </h3>
            <nav className="flex flex-col gap-2.5 text-[14.5px] lg:text-[15px] text-black/80">
              <Link href="/services/web-development" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Custom Web Development
              </Link>
              <Link href="/services/app-development" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Mobile App Development
              </Link>
              <Link href="/services/seo" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Search Engine Optimization
              </Link>
              <Link href="/services/social-media-management" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Social Media Management
              </Link>
              <Link href="/services/branding" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Branding & Creative Strategy
              </Link>
              <Link href="/services/web-development" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                UI/UX & Conversion Design
              </Link>
              <Link href="/services" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Performance Marketing & Ads
              </Link>
            </nav>
          </div>

          {/* Col 3: Connect With Us */}
          <div className="flex flex-col">
            <h3 className="text-[18px] lg:text-[19px] font-bold tracking-tight text-black pb-2.5 mb-4 border-b border-black/15">
              Connect With Us
            </h3>
            <nav className="flex flex-col gap-2.5 text-[14.5px] lg:text-[15px] text-black/80">
              <Link href="/contact" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Schedule a Meeting
              </Link>
              <a 
                href="mailto:info@southernedgemarketing.com" 
                className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit text-black"
              >
                info@southernedgemarketing.com
              </a>
              <a 
                href="tel:+918700901769" 
                className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit"
              >
                +91 87009 01769
              </a>
              <a 
                href="https://www.instagram.com/southernedgemarketing?igsh=MXF2bTlpNHZpbzlt&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit"
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/southernedgemarketing/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61590949122507#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit"
              >
                Facebook
              </a>
              <Link href="/about" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Offices: Delhi & Dubai
              </Link>
            </nav>
          </div>

          {/* Col 4: Top Locations */}
          <div className="flex flex-col">
            <h3 className="text-[18px] lg:text-[19px] font-bold tracking-tight text-black pb-2.5 mb-4 border-b border-black/15">
              Top Locations
            </h3>
            <nav className="flex flex-col gap-2.5 text-[14.5px] lg:text-[15px] text-black/80">
              <Link href="/services/web-development/delhi" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Delhi NCR, India
              </Link>
              <Link href="/services/web-development/dubai" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Dubai, UAE
              </Link>
              <Link href="/services/web-development/mumbai" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Mumbai, India
              </Link>
              <Link href="/services/web-development/bengaluru" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Bengaluru, India
              </Link>
              <Link href="/services/web-development/london" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                London, UK
              </Link>
              <Link href="/services/web-development/new-york" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                New York, USA
              </Link>
              <Link href="/services/web-development/toronto" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Toronto, Canada
              </Link>
            </nav>
          </div>

        </div>

        {/* ROW 2: 4 Deep-Dive Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-4 border-t border-black/10">
          
          {/* Col 5: Web & App Solutions */}
          <div className="flex flex-col">
            <h3 className="text-[18px] lg:text-[19px] font-bold tracking-tight text-black pb-2.5 mb-4 border-b border-black/15">
              Web & App Solutions
            </h3>
            <nav className="flex flex-col gap-2.5 text-[14.5px] lg:text-[15px] text-black/80">
              <Link href="/services/web-development" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Next.js & React Web Apps
              </Link>
              <Link href="/explore-more/why-shopify-good-for-ecommerce" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Custom E-Commerce & Shopify
              </Link>
              <Link href="/services/app-development" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                iOS & Android Native Apps
              </Link>
              <Link href="/explore-more/future-of-headless-architecture" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Headless CMS Architecture
              </Link>
              <Link href="/explore-more/psychology-of-high-converting-landing-pages" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                High-Converting Landing Pages
              </Link>
              <Link href="/explore-more/benefits-of-pwa-for-mobile-users" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Progressive Web Apps (PWA)
              </Link>
            </nav>
          </div>

          {/* Col 6: Search & Growth Marketing */}
          <div className="flex flex-col">
            <h3 className="text-[18px] lg:text-[19px] font-bold tracking-tight text-black pb-2.5 mb-4 border-b border-black/15">
              Search & Growth Marketing
            </h3>
            <nav className="flex flex-col gap-2.5 text-[14.5px] lg:text-[15px] text-black/80">
              <Link href="/services/seo" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Technical SEO & Core Audits
              </Link>
              <Link href="/services/seo" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Local SEO & Maps Ranking
              </Link>
              <Link href="/explore-more/maximizing-roas-on-meta-ads" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Meta & Google Paid Ads (ROAS)
              </Link>
              <Link href="/explore-more/optimizing-page-speed-for-conversion" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Speed & Core Web Vitals
              </Link>
              <Link href="/explore-more/scaling-e-commerce-with-email-marketing" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                E-Commerce Email Scaling
              </Link>
              <Link href="/explore-more/role-of-seo-in-digital-growth" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Organic Search Growth Engine
              </Link>
            </nav>
          </div>

          {/* Col 7: Creative & Case Studies */}
          <div className="flex flex-col">
            <h3 className="text-[18px] lg:text-[19px] font-bold tracking-tight text-black pb-2.5 mb-4 border-b border-black/15">
              Creative & Case Studies
            </h3>
            <nav className="flex flex-col gap-2.5 text-[14.5px] lg:text-[15px] text-black/80">
              <Link href="/services/branding" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Brand Strategy & Identity
              </Link>
              <Link href="/services/social-media-management" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Short-Form Content & Reels
              </Link>
              <Link href="/services/social-media-management" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Influencer & Creator Growth
              </Link>
              <Link href="/explore-more/importance-of-photography-for-luxury-brands" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Luxury Brand Photography
              </Link>
              <Link href="/projects" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit font-medium text-black">
                Explore 30+ Client Case Studies →
              </Link>
            </nav>
          </div>

          {/* Col 8: Popular Guides & Insights */}
          <div className="flex flex-col">
            <h3 className="text-[18px] lg:text-[19px] font-bold tracking-tight text-black pb-2.5 mb-4 border-b border-black/15">
              Popular Guides & Insights
            </h3>
            <nav className="flex flex-col gap-2.5 text-[14.5px] lg:text-[15px] text-black/80">
              <Link href="/explore-more/why-custom-code-better-than-wordpress" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Custom Code vs WordPress
              </Link>
              <Link href="/explore-more/power-of-nextjs-for-modern-websites" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Why Next.js Powers Modern Web
              </Link>
              <Link href="/explore-more/how-branding-dictates-business-success" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                How Branding Dictates Growth
              </Link>
              <Link href="/blogs/the-importance-of-mobile-first-design-in-2005" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Mobile-First Design Blueprint
              </Link>
              <Link href="/blogs/understanding-color-theory-in-digital-branding" className="hover:text-black hover:translate-x-1 transition-all duration-200 w-fit">
                Color Theory in Digital Identity
              </Link>
            </nav>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-[1400px] mx-auto pt-6 border-t border-black/20 flex flex-col md:flex-row items-center justify-between gap-4 text-[13.5px] text-black/85">
        <p>© {new Date().getFullYear()} Southern Edge Marketing. All rights reserved.</p>
        
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </Link>
          <span className="text-black/30">•</span>
          <Link href="/terms" className="hover:text-white transition-colors duration-200">
            Terms & Conditions
          </Link>
          <span className="text-black/30">•</span>
          <Link href="/refund" className="hover:text-white transition-colors duration-200">
            Refund Policy
          </Link>
        </div>
      </div>

    </footer>
  );
};
