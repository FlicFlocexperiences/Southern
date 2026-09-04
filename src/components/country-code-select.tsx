"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { countryCodes, CountryCode } from "@/lib/countryCodes";

interface CountryCodeSelectProps {
  name?: string;
  defaultValue?: string;
  className?: string;
  onChange?: (country: CountryCode) => void;
}

export function CountryCodeSelect({
  name = "code",
  defaultValue = "+91",
  className = "",
  onChange,
}: CountryCodeSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Find initial country (default to +91 India, fallback to first)
  const initialCountry = useMemo(() => {
    return (
      countryCodes.find((c) => c.code === defaultValue) ||
      countryCodes.find((c) => c.code === "+91") ||
      countryCodes[0]
    );
  }, [defaultValue]);

  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(initialCountry);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Focus search input on open
  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Listen for parent form reset to reset selected country to default
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const form = container.closest("form");
    if (!form) return;

    const handleReset = () => {
      setSelectedCountry(initialCountry);
    };

    form.addEventListener("reset", handleReset);
    return () => {
      form.removeEventListener("reset", handleReset);
    };
  }, [initialCountry]);

  // Filter countries by query (matches country name or dial code)
  const filteredCountries = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return countryCodes;

    return countryCodes.filter((c) => {
      const nameMatch = c.country.toLowerCase().includes(query);
      const codeMatch = c.code.replace("+", "").includes(query.replace("+", ""));
      return nameMatch || codeMatch;
    });
  }, [searchQuery]);

  const handleSelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setIsOpen(false);
    if (onChange) {
      onChange(country);
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Hidden input to pass the selected code to standard form submissions */}
      <input type="hidden" name={name} value={selectedCountry.code} />

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full h-full bg-white rounded-xl px-2 sm:px-2.5 py-3.5 outline-none text-black border border-black/10 hover:border-[#de5e18]/60 focus:border-[#de5e18] focus:ring-1 focus:ring-[#de5e18] transition-all cursor-pointer flex items-center justify-between gap-1 select-none shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select Country Dial Code"
      >
        <span className="text-[18px] sm:text-[20px] leading-none shrink-0" role="img" aria-label={selectedCountry.country}>
          {selectedCountry.flag}
        </span>
        <span className="text-[14px] sm:text-[16px] font-medium text-black tracking-tight shrink-0">
          {selectedCountry.code}
        </span>
        <svg
          className={`w-3 h-3 text-black/40 transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180 text-[#de5e18]" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Popover Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-[290px] sm:w-[350px] max-w-[calc(100vw-40px)] bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.16)] border border-black/10 z-50 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          {/* Search Header */}
          <div className="p-3 border-b border-black/5 bg-[#faf8f5]">
            <div className="relative flex items-center">
              <svg
                className="w-4 h-4 text-black/40 absolute left-3 pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country or code (e.g. India, 91)..."
                className="w-full bg-white rounded-xl pl-9 pr-8 py-2.5 text-[14px] text-black border border-black/10 focus:border-[#de5e18] focus:ring-1 focus:ring-[#de5e18] outline-none placeholder:text-black/35"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 text-black/30 hover:text-black/70 text-[14px] p-1 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* List of Countries */}
          <div
            ref={listRef}
            className="max-h-[260px] overflow-y-auto overscroll-contain py-1.5 divide-y divide-black/[0.03]"
            role="listbox"
          >
            {filteredCountries.length === 0 ? (
              <div className="py-6 text-center text-[14px] text-black/40">
                No matching country found
              </div>
            ) : (
              filteredCountries.map((c, i) => {
                const isSelected =
                  c.code === selectedCountry.code && c.country === selectedCountry.country;
                return (
                  <button
                    key={`${c.country}-${c.code}-${i}`}
                    type="button"
                    onClick={() => handleSelect(c)}
                    className={`w-full px-3.5 py-2.5 flex items-center justify-between gap-3 text-left transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#de5e18]/10 text-[#de5e18] font-semibold"
                        : "hover:bg-[#f2decc]/30 text-black"
                    }`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <span className="text-[20px] shrink-0 leading-none" role="img" aria-label={c.country}>
                        {c.flag}
                      </span>
                      <span className="text-[14px] tracking-tight truncate">
                        {c.country}
                      </span>
                    </div>
                    <span
                      className={`text-[13px] font-mono shrink-0 ${
                        isSelected ? "text-[#de5e18] font-bold" : "text-black/45"
                      }`}
                    >
                      {c.code}
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
