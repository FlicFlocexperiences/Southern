"use client";

import React from "react";

export const OfficeLocation = () => {
  const mapShareUrl = "https://share.google/93z22o6RCevNs5X8T";

  return (
    <section className="w-full mt-4 mb-16 md:mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Information Card */}
        <div className="lg:col-span-5 bg-white rounded-[28px] p-8 md:p-10 shadow-sm border border-black/5 flex flex-col justify-between">
          <div>
            {/* Location Icon Badge */}
            <div className="w-12 h-12 rounded-2xl bg-[#fef3c7] flex items-center justify-center text-[#d97706] mb-6">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[34px] font-bold text-black tracking-tight leading-tight mb-4">
              Visit Our Office
            </h2>

            {/* Description */}
            <p className="text-[15px] md:text-[16px] text-black/70 leading-relaxed mb-8">
              Southern Edge Marketing is located in Gurgaon, Haryana. Drop by for a consultation or reach out to schedule an appointment.
            </p>

            {/* Office Address */}
            <div className="mb-6">
              <h3 className="text-[15px] font-bold text-black mb-1.5">Office Address</h3>
              <p className="text-[15px] text-black/75 leading-relaxed">
                Sector 57, Sushant Lok 2, Gurugram, Haryana 122011
              </p>
            </div>

            {/* Phone */}
            <div className="mb-6">
              <h3 className="text-[15px] font-bold text-black mb-1.5">Phone</h3>
              <a href="tel:+918700901769" className="text-[15px] text-[#de5e18] font-semibold hover:underline">
                +91 87009 01769
              </a>
            </div>

            {/* Office Hours */}
            <div className="mb-8">
              <h3 className="text-[15px] font-bold text-black mb-1.5">Office Hours</h3>
              <p className="text-[15px] text-black/75 leading-relaxed">
                Monday – Saturday: 10:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          {/* Action Buttons: Call, WhatsApp, Directions */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <a
              href="tel:+918700901769"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-medium bg-[#de5e18] hover:bg-[#c24f12] shadow-sm hover:shadow-md transition-all duration-300 text-[15px]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>
              Call Now
            </a>
            <a
              href="https://wa.me/918700901769"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-medium bg-[#25d366] hover:bg-[#1fb857] shadow-sm hover:shadow-md transition-all duration-300 text-[15px]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3z"/></svg>
              WhatsApp Us
            </a>
            <a
              href={mapShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-[#de5e18] font-semibold border-[1.5px] border-[#de5e18] hover:bg-[#de5e18]/5 transition-all duration-300 text-[15px]"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Right Map Container */}
        <div className="lg:col-span-7 bg-white rounded-[28px] overflow-hidden border border-black/10 shadow-sm relative min-h-[420px] md:min-h-[480px] flex">
          {/* Floating Card Overlay */}
          <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-xl p-3.5 shadow-md border border-black/10 max-w-[280px] sm:max-w-[320px] pointer-events-auto">
            <h4 className="font-bold text-[14px] text-black tracking-tight leading-tight uppercase">
              Southern Edge Marketing
            </h4>
            <p className="text-[12px] text-black/70 mt-1 leading-snug">
              Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122011
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-[12px] text-black/80 font-medium">
              <span>5.0</span>
              <span className="text-amber-500">★★★★★</span>
              <span className="text-black/50">(Google Reviews)</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <a
                href={mapShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] px-3 py-1.5 rounded-md transition-colors shadow-sm"
              >
                <span>Open in Maps</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <a
                href={mapShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1a73e8]/10 hover:bg-[#1a73e8]/20 text-[#1a73e8] flex items-center justify-center transition-colors"
                title="Directions"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
              </a>
            </div>
          </div>

          {/* Interactive Google Map iframe */}
          <iframe
            src="https://maps.google.com/maps?q=28.439158,77.0909696+(Southern+Edge+Marketing)&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "420px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Southern Edge Marketing Location"
            className="w-full h-full flex-grow rounded-[28px]"
          />
        </div>
      </div>
    </section>
  );
};
