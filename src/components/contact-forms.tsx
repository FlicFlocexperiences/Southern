"use client";

import React, { useState } from "react";
import { NameInput } from "@/components/name-input";
import { PhoneInput } from "@/components/phone-input";
import { countryCodes } from "@/lib/countryCodes";
import { useRouter } from "next/navigation";

// Local Social Icons
const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

function useContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      code: formData.get("code"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      projectDetails: formData.get("projectDetails"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit the form.");
      }

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      router.push("/thank-you");
    } catch (err: any) {
      console.error("Error adding document: ", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading, success, error };
}

export const ContactUsWidget = () => {
  const { handleSubmit, loading, success, error } = useContactForm();

  return (
    <div className="w-full max-w-[1400px] mx-auto rounded-[32px] border-4 border-[#432d1c]/10 bg-white p-4 md:p-6 flex flex-col md:flex-row gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] font-sans text-left">
      {/* Left Box: Form Container */}
      <div className="flex-1 bg-[#f2decc]/30 rounded-[24px] p-6 md:p-8 flex flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {success && <p className="text-[#de5e18] font-medium text-[16px] mb-2">Thank you! We have received your message.</p>}
          {error && <p className="text-red-600 font-medium text-[16px] mb-2">{error}</p>}
          
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] md:text-[15px] font-semibold text-black/60 tracking-tight">Name</label>
            <NameInput 
              name="name" 
              required 
              placeholder="Enter your full name" 
              className="w-full bg-white rounded-xl px-4 py-3.5 outline-none text-[16px] text-black border border-black/10 focus:border-[#de5e18] focus:ring-1 focus:ring-[#de5e18] transition-all placeholder:text-black/35" 
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] md:text-[15px] font-semibold text-black/60 tracking-tight">Phone number</label>
            <div className="flex gap-3">
              <div className="w-[95px] shrink-0 relative">
                <input 
                  name="code"
                  list="country-codes-widget" 
                  className="w-full bg-white rounded-xl px-3 py-3.5 outline-none text-[16px] text-black border border-black/10 focus:border-[#de5e18] focus:ring-1 focus:ring-[#de5e18] transition-all placeholder:text-black/35 cursor-pointer text-center" 
                  placeholder="+Code"
                  required
                />
                <datalist id="country-codes-widget">
                  {countryCodes.map((c, i) => (
                    <option key={`w-${i}`} value={`${c.code}`}>{c.flag} {c.country}</option>
                  ))}
                </datalist>
              </div>
              <PhoneInput 
                name="phone" 
                required 
                placeholder="Enter your phone number" 
                className="flex-1 min-w-0 w-full bg-white rounded-xl px-4 py-3.5 outline-none text-[16px] text-black border border-black/10 focus:border-[#de5e18] focus:ring-1 focus:ring-[#de5e18] transition-all placeholder:text-black/35" 
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] md:text-[15px] font-semibold text-black/60 tracking-tight">Email</label>
            <input 
              name="email" 
              type="email" 
              required 
              placeholder="Enter your email" 
              className="w-full bg-white rounded-xl px-4 py-3.5 outline-none text-[16px] text-black border border-black/10 focus:border-[#de5e18] focus:ring-1 focus:ring-[#de5e18] transition-all placeholder:text-black/35" 
            />
          </div>

          {/* Service Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] md:text-[15px] font-semibold text-black/60 tracking-tight">Service</label>
            <div className="relative">
              <select 
                name="service" 
                required 
                className="w-full bg-white rounded-xl px-4 py-3.5 outline-none text-[16px] text-black border border-black/10 focus:border-[#de5e18] focus:ring-1 focus:ring-[#de5e18] transition-all cursor-pointer appearance-none" 
                defaultValue=""
              >
                <option value="" disabled>Select a service</option>
                <option value="web-development">Website Development</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="branding">Branding</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="seo">SEO</option>
                <option value="social-media">Social Media Management</option>
                <option value="performance-marketing">Performance Marketing</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/35">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Project Details (Message) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] md:text-[15px] font-semibold text-black/60 tracking-tight">Message</label>
            <textarea 
              name="projectDetails" 
              required 
              placeholder="Message goes here..." 
              className="w-full bg-white rounded-xl px-4 py-3.5 outline-none text-[16px] text-black border border-black/10 focus:border-[#de5e18] focus:ring-1 focus:ring-[#de5e18] transition-all placeholder:text-black/35 h-[100px] resize-none" 
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4 flex justify-center w-full">
            <button 
              disabled={loading} 
              type="submit" 
              className="relative w-[222px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] overflow-hidden shadow-[0px_6px_16px_rgba(222,94,24,0.35)] hover:shadow-[0px_8px_20px_rgba(222,94,24,0.5)] transition-all group cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              aria-label="Submit Form"
            >
              {/* Inner Left Pill with right shadow */}
              <div className="absolute left-[0px] top-0 w-[157px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
                <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                <span className="font-medium text-[18px] text-white tracking-tight whitespace-nowrap">
                  {loading ? "Submitting..." : "Submit"}
                </span>
              </div>
              
              {/* Right Arrow Icon */}
              <div className="absolute right-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
                <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>

      {/* Right Box: Info Callout Container */}
      <div className="w-full md:w-[450px] bg-white border-2 border-dashed border-[#de5e18]/30 rounded-[24px] p-6 md:p-8 flex flex-col justify-between items-center text-center relative min-h-[460px] shrink-0">
        {/* Brand Logo Circle */}
        <div className="absolute top-6 left-6 w-[48px] h-[48px] md:w-[76px] md:h-[76px] rounded-full border border-black/5 bg-[#ffffff] flex items-center justify-center p-1.5 md:p-2.5 shadow-l">
          <img src="/LOGO_Final.svg" alt="Southern Edge Marketing" className="max-h-full max-w-full object-contain" />
        </div>

        {/* Floating Time Badge */}
        <div className="absolute top-6 right-6 bg-[#f4f3ef] text-black/60 px-4 py-2 md:px-6 md:py-3 rounded-full text-[14px] md:text-[16px] font-bold tracking-tight">
          Approximately 30-min.
        </div>

        {/* Center content */}
        <div className="flex-1 flex flex-col justify-center items-center mt-20 w-full">
          <h4 className="text-[22px] font-bold text-black tracking-tight mb-3">Prefer email or phone?</h4>
          <p className="text-[15px] text-black/50 leading-relaxed max-w-[260px] mx-auto mb-8">
            Let's connect. Reach out and we'll help bring your ideas to life.
          </p>

          {/* Email Us Button */}
          <div className="w-full flex justify-center mt-2">
            <a 
              href="mailto:info@southernedgemarketing.com" 
              className="relative block w-[222px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] overflow-hidden shadow-[0px_6px_16px_rgba(222,94,24,0.35)] hover:shadow-[0px_8px_20px_rgba(222,94,24,0.5)] transition-all group cursor-pointer"
              aria-label="Email Us"
            >
              {/* Inner Left Pill with right shadow */}
              <div className="absolute left-[0px] top-0 w-[157px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#de5e18] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
                <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                <span className="font-medium text-[18px] text-white tracking-tight whitespace-nowrap">
                  Email Us
                </span>
              </div>
              
              {/* Right Arrow Icon */}
              <div className="absolute right-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
                <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </a>
          </div>

          {/* Phone Link */}
          <p className="text-[14px] text-black/50 mt-5">
            or call us at 
            <a href="tel:+919899238237" className="font-bold text-black hover:text-[#de5e18] transition-colors ml-1.5 whitespace-nowrap">
              +91 98992 38237
            </a>
          </p>
        </div>

        {/* Social Icons at the bottom */}
        <div className="flex items-center gap-6 mt-6 pt-4 border-t border-black/5 w-full justify-center">
          <a 
            href="https://www.linkedin.com/company/southernedgemarketing/?viewAsMember=true" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black/50 hover:text-[#de5e18] transition-all transform hover:scale-110" 
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a 
            href="https://www.facebook.com/southernedgemarketing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black/50 hover:text-[#de5e18] transition-all transform hover:scale-110" 
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a 
            href="https://www.instagram.com/southernedgemarketing?igsh=MXF2bTlpNHZpbzlt&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black/50 hover:text-[#de5e18] transition-all transform hover:scale-110" 
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
