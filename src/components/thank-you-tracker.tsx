"use client";

import { useEffect } from "react";

export function ThankYouTracker() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Fire Meta Pixel Lead conversion event
      if (typeof (window as any).fbq === "function") {
        (window as any).fbq("track", "Lead", {
          content_name: "Thank You Page Confirmation",
          currency: "USD",
          value: 0,
        });
      }
      // Fire Google Analytics generate_lead conversion event
      if (typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "generate_lead", {
          event_category: "Thank You Page",
          event_label: "Thank You Page Confirmation",
        });
      }
    }
  }, []);

  return null;
}
