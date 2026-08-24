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

  // Exclude all third-party marketing & analytics scripts on admin/internal pages
  if (isAdminRoute) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-NS1V6RD7RJ"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NS1V6RD7RJ');
        `}
      </Script>

      {/* Meta / Facebook Pixel */}
      <Script id="meta-pixel" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('set', 'autoConfig', false, '2511912949279933');
          fbq('init', '2511912949279933');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
}
