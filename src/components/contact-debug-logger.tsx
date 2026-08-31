"use client";

import { useEffect } from "react";

export function ContactDebugLogger() {
  useEffect(() => {
    const startTime = performance.now();
    const isFramed = typeof window !== "undefined" && window.self !== window.top;

    console.group("🚀 [Contact Page Debug] Lifecycle Initialization");
    console.log("⏱️ Page Mount Timestamp:", new Date().toISOString());
    console.log("📱 Viewport:", `${window.innerWidth}x${window.innerHeight}`);
    console.log("🖼️ Is running inside an iframe (e.g. Meta preview tool):", isFramed);
    console.log("📄 Document ReadyState:", document.readyState);
    console.log("🎯 Meta Pixel fbq status:", typeof (window as any).fbq === "function" ? "✅ Loaded" : "⏳ Pending/Not loaded");
    console.log("📊 Google Analytics gtag status:", typeof (window as any).gtag === "function" ? "✅ Loaded" : "⏳ Pending/Not loaded");
    console.groupEnd();

    // Log when window load event completes (all images, scripts, fonts rendered)
    const handleLoad = () => {
      const loadTime = Math.round(performance.now() - startTime);
      console.log(`🏁 [Contact Page Debug] All assets & scripts finished loading in ${loadTime}ms.`);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    // Capture and log any uncaught client errors on this page
    const handleError = (event: ErrorEvent) => {
      console.error("🚨 [Contact Page Debug] Uncaught runtime error detected:", {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
      });
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      console.error("🚨 [Contact Page Debug] Unhandled Promise Rejection detected:", {
        reason: event.reason,
      });
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return null;
}
