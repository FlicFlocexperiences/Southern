"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { OPEN_SETTINGS_EVENT, readConsent, saveConsent } from "@/lib/consent";

export function ConsentBanner() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) setOpen(true);
    else {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    }
    const reopen = () => {
      const c = readConsent();
      setAnalytics(c?.analytics ?? false);
      setMarketing(c?.marketing ?? false);
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  if (!open || pathname?.startsWith("/authority") || pathname?.startsWith("/nullify")) return null;

  const decide = (a: boolean, m: boolean) => {
    saveConsent(a, m);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie and tracking consent"
      className="fixed inset-x-3 bottom-3 md:inset-x-auto md:left-6 md:bottom-6 md:max-w-[460px] z-[1000] rounded-2xl border border-black/10 bg-white p-5 text-[#0f0f0f] shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
    >
      <p className="text-[15px] font-bold mb-2">Your privacy choices</p>
      <p className="text-[13.5px] leading-relaxed text-black/75">
        With your consent, we use Google Analytics and Microsoft Clarity to understand how visitors use this site, and the Meta Pixel to measure and show our ads.
        These collect device and browsing data such as pages visited and IP address. Essential functions work without them.
        You can change your choice at any time from &ldquo;Cookie settings&rdquo; in the footer. Read our{" "}
        <Link href="/privacy" className="text-[#de5e18] underline">Privacy Policy</Link>.
      </p>

      {details && (
        <div className="mt-4 space-y-3 border-t border-black/10 pt-4 text-[13.5px]">
          <label className="flex items-start gap-3">
            <input type="checkbox" checked disabled className="mt-1 h-4 w-4 accent-[#de5e18]" />
            <span><strong>Essential</strong> (always on): hosting, security and remembering this choice.</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="mt-1 h-4 w-4 accent-[#de5e18]" />
            <span><strong>Analytics</strong>: Google Analytics and Microsoft Clarity, to understand and improve the site.</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-1 h-4 w-4 accent-[#de5e18]" />
            <span><strong>Marketing</strong>: Meta Pixel, to measure our ads and show relevant ads on Facebook and Instagram.</span>
          </label>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={() => decide(true, true)} className="rounded-full bg-[#de5e18] px-5 py-2 text-[14px] font-medium text-white hover:opacity-90">
          Accept all
        </button>
        <button onClick={() => decide(false, false)} className="rounded-full border border-black/20 px-5 py-2 text-[14px] font-medium hover:border-[#de5e18]">
          Reject all
        </button>
        {details ? (
          <button onClick={() => decide(analytics, marketing)} className="rounded-full border border-black/20 px-5 py-2 text-[14px] font-medium hover:border-[#de5e18]">
            Save choices
          </button>
        ) : (
          <button onClick={() => setDetails(true)} className="px-2 py-2 text-[14px] font-medium underline text-black/70 hover:text-black">
            Choose
          </button>
        )}
      </div>
    </div>
  );
}
