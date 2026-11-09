"use client";

import { openConsentSettings } from "@/lib/consent";

export const CookieSettingsLink = ({ label = "Cookie settings" }: { label?: string }) => (
  <button type="button" onClick={openConsentSettings} className="text-[#de5e18] underline font-medium cursor-pointer">
    {label}
  </button>
);
