"use client";

import Link from 'next/link';
import { useState } from 'react';

interface LocationsGridProps {
  serviceSlug?: string;
}

const locations = [
  { name: 'Abu Dhabi', slug: 'abu-dhabi', country: 'UAE' },
  { name: 'Dubai', slug: 'dubai', country: 'UAE' },
  { name: 'Sharjah', slug: 'sharjah', country: 'UAE' },
  { name: 'Sydney', slug: 'sydney', country: 'Australia' },
  { name: 'Melbourne', slug: 'melbourne', country: 'Australia' },
  { name: 'Brisbane', slug: 'brisbane', country: 'Australia' },
  { name: 'Toronto', slug: 'toronto', country: 'Canada' },
  { name: 'Montreal', slug: 'montreal', country: 'Canada' },
  { name: 'Vancouver', slug: 'vancouver', country: 'Canada' },
  { name: 'London', slug: 'london', country: 'UK' },
  { name: 'Manchester', slug: 'manchester', country: 'UK' },
  { name: 'Birmingham', slug: 'birmingham', country: 'UK' },
  { name: 'New York', slug: 'new-york', country: 'USA' },
  { name: 'San Francisco', slug: 'san-francisco', country: 'USA' },
  { name: 'Los Angeles', slug: 'los-angeles', country: 'USA' },
  { name: 'California', slug: 'california', country: 'USA' },
  { name: 'New Delhi', slug: 'delhi', country: 'India' },
  { name: 'Gurgaon', slug: 'gurgaon', country: 'India' },
  { name: 'Noida', slug: 'noida', country: 'India' },
  { name: 'Chandigarh', slug: 'chandigarh', country: 'India' },
  { name: 'Lucknow', slug: 'lucknow', country: 'India' },
  { name: 'Mumbai', slug: 'mumbai', country: 'India' },
  { name: 'Bengaluru', slug: 'bengaluru', country: 'India' },
  { name: 'Chennai', slug: 'chennai', country: 'India' },
  { name: 'Kolkata', slug: 'kolkata', country: 'India' },
  { name: 'Pune', slug: 'pune', country: 'India' },
  { name: 'Hyderabad', slug: 'hyderabad', country: 'India' },
  { name: 'Surat', slug: 'surat', country: 'India' },
  { name: 'Jaipur', slug: 'jaipur', country: 'India' },
];

const unavailableByService: Record<string, string[]> = {
  branding: ['chandigarh'],
  seo: [],
};

type FilterCategory = 'All' | 'USA' | 'India' | 'UAE' | 'Canada' | 'UK' | 'Australia';

export function LocationsGrid({ serviceSlug }: LocationsGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const availableLocations = locations.filter(loc => {
    if (serviceSlug && unavailableByService[serviceSlug]?.includes(loc.slug)) {
      return false;
    }
    return true;
  });

  const availableCountries = Array.from(new Set(availableLocations.map(loc => loc.country)));
  const filterTabs: FilterCategory[] = [
    'All',
    ...(['USA', 'India', 'UAE', 'Canada', 'UK', 'Australia'] as const).filter(c => availableCountries.includes(c)),
  ];

  const filteredLocations = availableLocations.filter(loc => 
    activeFilter === 'All' ? true : loc.country === activeFilter
  );

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-16 border-t border-[#e6d0bb]/50">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#3b2b23] mb-4">Our Locations</h2>
        <p className="text-lg text-[#554238] max-w-3xl mx-auto">
          Southern Edge Marketing is a trusted global digital agency. We are strategically located to serve businesses across the USA, UAE, India, Canada, the UK, Australia, and international markets, bringing expert digital solutions directly to you.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex flex-wrap justify-center gap-1 bg-[#fbf8f5] rounded-full p-1.5 border border-[#e6d0bb]/50 shadow-sm">
          {filterTabs.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-[#ff5d2a] text-white shadow-md' 
                  : 'text-[#554238] hover:bg-[#f2decc]/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {filteredLocations.map((loc) => {
          const content = (
            <>
              <span className="text-base font-bold text-[#3b2b23]">{loc.name}</span>
              <div className="w-8 h-8 rounded-full bg-[#f2decc]/50 group-hover:bg-[#ff5d2a] group-hover:text-white text-[#3b2b23] flex items-center justify-center transition-colors duration-300 shrink-0 ml-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </>
          );
          
          const className = "group flex items-center justify-between bg-[#fbf8f5] hover:bg-white transition-all duration-300 rounded-xl p-4 shadow-sm border border-transparent hover:border-[#e6d0bb] hover:-translate-y-1";

          if (serviceSlug) {
            return (
              <Link 
                key={loc.slug}
                href={`/services/${serviceSlug}/${loc.slug}`}
                className={className}
              >
                {content}
              </Link>
            );
          }

          return (
            <div key={loc.slug} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
