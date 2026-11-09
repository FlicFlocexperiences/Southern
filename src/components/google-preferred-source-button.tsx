import React from "react";

// Google's documented deeplink for the "Preferred sources" tool:
// https://developers.google.com/search/docs/appearance/preferred-sources
export const GOOGLE_PREFERRED_SOURCE_URL =
  "https://www.google.com/preferences/source?q=southernedgemarketing.com";

interface Props {
  variant?: "light" | "compact";
  className?: string;
}

export const GooglePreferredSourceButton: React.FC<Props> = ({ variant = "light", className = "" }) => {
  const compact = variant === "compact";
  return (
    <a
      href={GOOGLE_PREFERRED_SOURCE_URL}
      target="_blank"
      rel="noopener"
      aria-label="Add Southern Edge Marketing as a preferred source on Google"
      className={`inline-flex items-center gap-2 rounded-full border border-black/15 bg-white text-[#0f0f0f] font-medium shadow-sm hover:border-[#de5e18] hover:shadow-md transition-all duration-300 w-fit ${
        compact ? "px-3.5 py-1.5 text-[12.5px]" : "px-5 py-2.5 text-[14px] md:text-[15px]"
      } ${className}`}
    >
      <svg
        className={compact ? "w-3.5 h-3.5" : "w-[18px] h-[18px]"}
        viewBox="0 0 24 24"
        fill="#de5e18"
        aria-hidden="true"
      >
        <path d="M12 2l2.9 6.26 6.85.74-5.1 4.64 1.43 6.76L12 16.97 5.92 20.4l1.43-6.76L2.25 9l6.85-.74L12 2z" />
      </svg>
      <span className="whitespace-nowrap">
        Add as a preferred source on <span className="font-bold">Google</span>
      </span>
    </a>
  );
};
