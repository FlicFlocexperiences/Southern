"use client";

import React from "react";

// Generate an array of the 15 client logos
const clientLogos = Array.from({ length: 15 }, (_, i) => `logo-${i + 1}.png`);

const LogoRow = ({ logoIndices, reverse = false }: { logoIndices: number[], reverse?: boolean }) => {
  return (
    <div className={`flex items-center w-max ${reverse ? 'animate-logo-slide-reverse' : 'animate-logo-slide'}`} style={{ animationDuration: '90s' }}>
      {Array.from({ length: 10 }).map((_, repeatIndex) => (
        <React.Fragment key={repeatIndex}>
          {logoIndices.map((logoIndex, index) => (
            <div key={`${repeatIndex}-${index}`} className="h-[70px] lg:h-[90px] w-[250px] mx-[20px] relative flex items-center justify-center shrink-0">
              <img 
                src={`/clientlogo/${clientLogos[logoIndex]}`} 
                alt={`Client Logo ${logoIndex + 1}`} 
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export const DesktopClientLogos = () => {
  const allLogos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <div className="w-full relative overflow-hidden pt-6 pb-20 z-10">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f2decc] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f2decc] to-transparent z-20 pointer-events-none" />
      <LogoRow logoIndices={allLogos} />
    </div>
  );
};

const MobileLogoRow = ({ logoIndices, reverse = false }: { logoIndices: number[], reverse?: boolean }) => {
  return (
    <div className={`flex items-center w-max ${reverse ? 'animate-logo-slide-reverse' : 'animate-logo-slide'}`} style={{ animationDuration: '90s' }}>
      {Array.from({ length: 10 }).map((_, repeatIndex) => (
        <React.Fragment key={repeatIndex}>
          {logoIndices.map((logoIndex, index) => (
            <div key={`${repeatIndex}-${index}`} className="h-16 w-28 mx-[12px] relative flex items-center justify-center shrink-0 gap-4">
              <img 
                src={`/clientlogo/${clientLogos[logoIndex]}`} 
                alt={`Client Logo ${logoIndex + 1}`} 
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export const MobileClientLogos = () => {
  const allLogos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <div className="w-full relative overflow-hidden pt-4 pb-12 z-10">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f2decc] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f2decc] to-transparent z-20 pointer-events-none" />
      <MobileLogoRow logoIndices={allLogos} />
    </div>
  );
};
