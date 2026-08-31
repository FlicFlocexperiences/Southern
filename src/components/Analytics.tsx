"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

export function Analytics() {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/authority") || pathname?.startsWith("/nullify");

  useEffect(() => {
    // Only initialize Microsoft Clarity on public customer-facing routes
    if (!isAdminRoute && typeof window !== "undefined") {
      (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "y6wutbd2rw");
    }
  }, [isAdminRoute]);

  // Track PageView on SPA route changes for Meta Pixel & Google Analytics
  useEffect(() => {
    if (!isAdminRoute && typeof window !== "undefined") {
      if (typeof (window as any).fbq === "function") {
        (window as any).fbq("track", "PageView");
      }
      if (typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "page_view", {
          page_path: pathname,
        });
      }
    }
  }, [pathname, isAdminRoute]);

  // Exclude all third-party marketing & analytics scripts on admin/internal pages
  if (isAdminRoute) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-NS1V6RD7RJ"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NS1V6RD7RJ');
          `,
        }}
      />

      {/* Meta / Facebook Pixel */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2511912949279933');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=2511912949279933&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}
