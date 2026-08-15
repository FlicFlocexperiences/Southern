import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileFooter } from "@/components/mobile-footer";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: '/thank-you',
  },
  title: "Thank You",
  description: "Thank you for getting in touch with us.",
  robots: {
    index: false,
    follow: false,
  },
};

// Icons for the cards
const FolderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 9.1371C2 14 2 16.4315 3.51472 17.9462C5.02944 19.461 7.46092 19.461 12.3239 19.461C16.3274 19.461 18.3292 19.461 19.8439 17.9462C21.3587 16.4315 21.3587 14.4297 21.3587 10.4262C21.3587 9.49755 21.3587 9.03323 21.0543 8.65345C20.7499 8.27367 20.3013 8.16335 19.4042 7.9427L18.4239 7.70165C17.7029 7.52443 17.3424 7.43582 16.9699 7.43389C16.5975 7.43195 16.2307 7.5168 15.4973 7.68652L14.7352 7.86291C13.882 8.06037 13.4553 8.1591 13.011 8.11867C12.5666 8.07823 12.1648 7.90425 11.3611 7.55628L10.7412 7.288C9.56994 6.7812 8.98433 6.52779 8.36881 6.51642C7.75329 6.50505 7.1585 6.73695 5.96892 7.20074L5.61793 7.33758C4.30514 7.84931 3.64875 8.10518 3.16104 8.64364C2.67332 9.18209 2.51865 9.87327 2.2093 11.2556L2 12.191V9.1371Z" fill="white"/>
  </svg>
);

const PencilIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.2322 5.23223L18.7678 8.76777M16.7322 3.73223C17.7085 2.75592 19.2915 2.75592 20.2678 3.73223C21.2441 4.70854 21.2441 6.29146 20.2678 7.26777L6.5 21.0355H3V17.5L16.7322 3.73223Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InstagramCardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white" strokeWidth="2" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" />
  </svg>
);

const CheckIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13L9 17L19 7" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Social Icons for footer
const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#ebe2d4] flex flex-col font-sans">
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 pt-32 pb-16 max-w-[800px] mx-auto w-full">


        {/* Main Heading */}
        <h1 className="text-[80px] md:text-[140px] font-black text-[#2a1c17] tracking-[-0.04em] mb-4 text-center leading-[0.9]">
          Thank you
        </h1>

        {/* Sub Heading */}
        <div className="text-[28px] md:text-[38px] font-semibold text-[#a45330] text-center mb-6 leading-[1.1] tracking-tight">
          <p>The hard part's done.</p>
          <p>Now we get to</p>
          <p>impress you.</p>
        </div>

        {/* Text */}
        <p className="text-[#2a1c17]/60 text-center text-[18px] md:text-[20px] max-w-[700px] mb-12 leading-[1.6] font-normal">
          We've got your brief. A strategist from our team will personally<br className="hidden md:block" /> reach out within 24 hours — no bots, no queue.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 mb-24 w-full sm:w-auto">
          <a href="tel:+918700901769" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#2a241f] text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors text-[17px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            Call now
          </a>
          <Link href="/" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#ca744d] text-white px-8 py-4 rounded-full font-medium hover:bg-[#b8613c] transition-colors text-[17px]">
            <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
            Return to homepage <span className="text-[18px] ml-1">→</span>
          </Link>
          <Link href="/projects" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-[#2a1c17]/15 text-[#2a1c17] px-8 py-4 rounded-full font-medium hover:bg-black/5 transition-colors text-[17px]">
            See our work <span className="text-[18px] ml-1">→</span>
          </Link>
        </div>

        {/* While you wait section */}
        <div className="w-full max-w-[800px]">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-[22px] font-bold text-[#2a1c17]">While you wait</h3>
            <p className="text-[#2a1c17]/60 text-[17px] mt-[3px]">Get a feel for how we think and what we've shipped.</p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Card 1 */}
            <Link href="/projects" className="flex items-center justify-between p-4 bg-[#f6efe7] rounded-[24px] hover:bg-white transition-colors group">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-[18px] bg-[#d46d3e] flex items-center justify-center">
                  <FolderIcon />
                </div>
                <div>
                  <h4 className="font-bold text-[#2a1c17] text-[18px]">Recent projects</h4>
                  <p className="text-[#2a1c17]/60 text-[15px]">Brands we've grown across Dubai and India.</p>
                </div>
              </div>
              <div className="text-[#d46d3e] pr-4 group-hover:translate-x-1 transition-transform">→</div>
            </Link>

            {/* Card 2 */}
            <Link href="/blogs" className="flex items-center justify-between p-4 bg-[#f6efe7] rounded-[24px] hover:bg-white transition-colors group">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-[18px] bg-[#d46d3e] flex items-center justify-center">
                  <PencilIcon />
                </div>
                <div>
                  <h4 className="font-bold text-[#2a1c17] text-[18px]">Read the blog</h4>
                  <p className="text-[#2a1c17]/60 text-[15px]">Playbooks and ideas from our strategy team.</p>
                </div>
              </div>
              <div className="text-[#d46d3e] pr-4 group-hover:translate-x-1 transition-transform">→</div>
            </Link>

            {/* Card 3 */}
            <Link href="https://www.instagram.com/southernedgemarketing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-[#f6efe7] rounded-[24px] hover:bg-white transition-colors group">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-[18px] bg-[#eb4a75] flex items-center justify-center">
                  <InstagramCardIcon />
                </div>
                <div>
                  <h4 className="font-bold text-[#2a1c17] text-[18px]">Follow us</h4>
                  <p className="text-[#2a1c17]/60 text-[15px]">Behind the scenes and fresh work, daily.</p>
                </div>
              </div>
              <div className="text-[#d46d3e] pr-4 group-hover:translate-x-1 transition-transform">→</div>
            </Link>
          </div>
        </div>
      </main>

      <div className="hidden md:block">
        <DesktopFooter />
      </div>
      <div className="block md:hidden">
        <MobileFooter />
      </div>
    </div>
  );
}
