"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
}

interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export const MobileFooter = () => {
  const [openSection, setOpenSection] = useState<string | null>("quick-links");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections: FooterSection[] = [
    {
      id: "quick-links",
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Our Services", href: "/services" },
        { label: "Featured Projects", href: "/projects" },
        { label: "Blogs & Insights", href: "/blogs" },
        { label: "Founder Profile", href: "/author/ameet-nangia" },
        { label: "Free Growth Consultation →", href: "/contact", highlight: true },
      ],
    },
    {
      id: "our-expertise",
      title: "Our Expertise",
      links: [
        { label: "Custom Web Development", href: "/services/web-development" },
        { label: "Mobile App Development", href: "/services/app-development" },
        { label: "Search Engine Optimization", href: "/services/seo" },
        { label: "Social Media Management", href: "/services/social-media-management" },
        { label: "Branding & Creative Strategy", href: "/services/branding" },
        { label: "UI/UX & Conversion Design", href: "/services/web-development" },
        { label: "Performance Marketing & Ads", href: "/services" },
      ],
    },
    {
      id: "connect-with-us",
      title: "Connect With Us",
      links: [
        { label: "Schedule a Meeting", href: "/contact" },
        { label: "info@southernedgemarketing.com", href: "mailto:info@southernedgemarketing.com" },
        { label: "+91 87009 01769", href: "tel:+918700901769" },
        { label: "Instagram", href: "https://www.instagram.com/southernedgemarketing?igsh=MXF2bTlpNHZpbzlt&utm_source=qr", external: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/southernedgemarketing/?viewAsMember=true", external: true },
        { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590949122507#", external: true },
        { label: "Offices: Delhi & Dubai", href: "/about" },
      ],
    },
    {
      id: "top-locations",
      title: "Top Locations",
      links: [
        { label: "Delhi NCR, India", href: "/services/web-development/delhi" },
        { label: "Dubai, UAE", href: "/services/web-development/dubai" },
        { label: "Mumbai, India", href: "/services/web-development/mumbai" },
        { label: "Bengaluru, India", href: "/services/web-development/bengaluru" },
        { label: "London, UK", href: "/services/web-development/london" },
        { label: "New York, USA", href: "/services/web-development/new-york" },
        { label: "Toronto, Canada", href: "/services/web-development/toronto" },
      ],
    },
    {
      id: "web-app-solutions",
      title: "Web & App Solutions",
      links: [
        { label: "Next.js & React Web Apps", href: "/services/web-development" },
        { label: "Custom E-Commerce & Shopify", href: "/explore-more/why-shopify-good-for-ecommerce" },
        { label: "iOS & Android Native Apps", href: "/services/app-development" },
        { label: "Headless CMS Architecture", href: "/explore-more/future-of-headless-architecture" },
        { label: "High-Converting Landing Pages", href: "/explore-more/psychology-of-high-converting-landing-pages" },
        { label: "Progressive Web Apps (PWA)", href: "/explore-more/benefits-of-pwa-for-mobile-users" },
      ],
    },
    {
      id: "search-growth",
      title: "Search & Growth Marketing",
      links: [
        { label: "Technical SEO & Core Audits", href: "/services/seo" },
        { label: "Local SEO & Maps Ranking", href: "/services/seo" },
        { label: "Meta & Google Paid Ads (ROAS)", href: "/explore-more/maximizing-roas-on-meta-ads" },
        { label: "Speed & Core Web Vitals", href: "/explore-more/optimizing-page-speed-for-conversion" },
        { label: "E-Commerce Email Scaling", href: "/explore-more/scaling-e-commerce-with-email-marketing" },
        { label: "Organic Search Growth Engine", href: "/explore-more/role-of-seo-in-digital-growth" },
      ],
    },
    {
      id: "creative-case-studies",
      title: "Creative & Case Studies",
      links: [
        { label: "Brand Strategy & Identity", href: "/services/branding" },
        { label: "Short-Form Content & Reels", href: "/services/social-media-management" },
        { label: "Influencer & Creator Growth", href: "/services/social-media-management" },
        { label: "Luxury Brand Photography", href: "/explore-more/importance-of-photography-for-luxury-brands" },
        { label: "Explore 30+ Client Case Studies →", href: "/projects", highlight: true },
      ],
    },
    {
      id: "popular-guides",
      title: "Popular Guides & Insights",
      links: [
        { label: "Custom Code vs WordPress", href: "/explore-more/why-custom-code-better-than-wordpress" },
        { label: "Why Next.js Powers Modern Web", href: "/explore-more/power-of-nextjs-for-modern-websites" },
        { label: "How Branding Dictates Growth", href: "/explore-more/how-branding-dictates-business-success" },
        { label: "Mobile-First Design Blueprint", href: "/blogs/the-importance-of-mobile-first-design-in-2005" },
        { label: "Color Theory in Digital Identity", href: "/blogs/understanding-color-theory-in-digital-branding" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-[#fffff0] via-[#ffebd9] to-[#ff5100] px-5 pt-8 pb-6 flex flex-col relative overflow-hidden text-black font-sans">
      
      {/* Brand & Intro */}
      <div className="flex flex-col gap-3 mb-8">
        <Link href="/" className="inline-flex items-center w-fit">
          <Image
            src="/Footer_Logo.svg"
            alt="Southern Edge Marketing"
            width={170}
            height={58}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <p className="text-[14px] leading-relaxed text-black/75">
          Building brands, websites, and growth strategies that help ambitious businesses stand out, scale faster, and stay ahead in a digital-first world.
        </p>
      </div>

      {/* Accordion Categories */}
      <div className="flex flex-col border-t border-black/10 mb-8">
        {sections.map((section) => {
          const isOpen = openSection === section.id;
          return (
            <div key={section.id} className="border-b border-black/10">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full py-4 flex items-center justify-between text-left group"
              >
                <span className="text-[16px] font-bold text-black group-hover:text-[#c43e00] transition-colors">
                  {section.title}
                </span>
                <svg
                  className={`w-4 h-4 text-black/70 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-black" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
                }`}
              >
                <div className="flex flex-col gap-2.5 pl-1">
                  {section.links.map((link) => {
                    const isExternal = link.external || link.href.startsWith("http") || link.href.startsWith("mailto:") || link.href.startsWith("tel:");
                    return isExternal ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                        className={`text-[14px] text-black/80 hover:text-black transition-colors ${
                          link.highlight ? "font-semibold text-[#c43e00]" : ""
                        }`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={`text-[14px] text-black/80 hover:text-black transition-colors ${
                          link.highlight ? "font-semibold text-[#c43e00]" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Legal & Copyright */}
      <div className="flex flex-col gap-3 pt-4 border-t border-black/15 text-[12.5px] text-black/80">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
          <span>•</span>
          <Link href="/refund" className="hover:text-white transition-colors">
            Refund Policy
          </Link>
        </div>
        <p>© {new Date().getFullYear()} Southern Edge Marketing. All rights reserved.</p>
      </div>

    </footer>
  );
};
