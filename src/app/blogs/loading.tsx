import React from "react";

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-[#f2decc] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-[#de5e18]/30 border-t-[#de5e18] rounded-full animate-spin"></div>
        
        {/* Loading text */}
        <p className="text-[#1a1a1a] font-medium animate-pulse">
          Loading Blogs...
        </p>
      </div>
    </div>
  );
}
