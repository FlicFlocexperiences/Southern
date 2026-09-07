"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function ThankYouGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isSubmitted = sessionStorage.getItem("sem_lead_submitted");
      if (isSubmitted === "true") {
        // Clear immediately so subsequent page refreshes or direct navigations are blocked
        sessionStorage.removeItem("sem_lead_submitted");
        setIsAuthorized(true);

        // Fire Google Analytics generate_lead conversion event once
        if (typeof (window as any).gtag === "function") {
          (window as any).gtag("event", "generate_lead", {
            event_category: "Thank You Page",
            event_label: "Thank You Page Confirmation",
          });
        }
      } else {
        // Unauthorized direct URL access or page reload: redirect back to /contact
        setIsAuthorized(false);
        router.replace("/contact");
      }
    }
  }, [router]);

  // Loading state while checking client-side sessionStorage
  if (isAuthorized === null) {
    return (
      <div className="min-h-screen bg-[#ebe2d4] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#de5e18] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return <>{children}</>;
}
