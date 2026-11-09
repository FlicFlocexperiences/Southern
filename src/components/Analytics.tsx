"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { CONSENT_EVENT, readConsent, type Consent } from "@/lib/consent";

export function Analytics() {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/authority") || pathname?.startsWith("/nullify");
  const isFirstMount = useRef(true);
  // Trackers load only after the visitor consents (DPDP). See components/consent-banner.tsx
  const [consent, setConsent] = useState<Consent | null>(null);
  useEffect(() => {
    setConsent(readConsent());
    const onChange = (e: Event) => setConsent((e as CustomEvent<Consent>).detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);
  const allowAnalytics = !!consent?.analytics;
  const allowMarketing = !!consent?.marketing;

  useEffect(() => {
    // Only initialize Microsoft Clarity on public customer-facing routes
    if (!isAdminRoute && allowAnalytics && typeof window !== "undefined" && !(window as any).clarity) {
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
  }, [isAdminRoute, allowAnalytics]);

  // Track PageView on SPA route changes for Meta Pixel & Google Analytics (skips initial mount to avoid duplicate)
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

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
      {allowAnalytics && (<>
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

      </>)}

      {allowMarketing && (<>
      {/* Meta Event Setup Tool (iwl.js) Compatibility Shim */}
      <Script
        id="meta-iwl-compat"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              function safeRect(node) {
                var el = node && node.nodeType === 1
                  ? node
                  : (node && node.parentElement) ||
                    (node && node.nodeType === 9 && node.documentElement) ||
                    null;
                return el && typeof el.getBoundingClientRect === 'function'
                  ? el.getBoundingClientRect()
                  : { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0, x: 0, y: 0 };
              }

              var targets = [
                typeof Comment !== 'undefined' ? Comment : null,
                typeof Text !== 'undefined' ? Text : null,
                typeof DocumentFragment !== 'undefined' ? DocumentFragment : null,
                typeof Document !== 'undefined' ? Document : null
              ].filter(Boolean);

              function applyPatch() {
                targets.forEach(function (Ctor) {
                  if (Ctor && !Ctor.prototype.getBoundingClientRect) {
                    Ctor.prototype.getBoundingClientRect = function () { return safeRect(this); };
                  }
                });
              }

              // Apply patch only when Meta's Event Setup Tool (iwl.js) is detected in the DOM
              var observer = new MutationObserver(function (mutations) {
                for (var i = 0; i < mutations.length; i++) {
                  var addedNodes = mutations[i].addedNodes;
                  for (var j = 0; j < addedNodes.length; j++) {
                    var node = addedNodes[j];
                    if (node && node.tagName === 'SCRIPT' && /iwl\\.js/.test(node.src || '')) {
                      applyPatch();
                      observer.disconnect();
                      return;
                    }
                  }
                }
              });
              if (document.documentElement) {
                observer.observe(document.documentElement, { childList: true, subtree: true });
              }
            })();
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
      </>)}
      {/* No <noscript> pixel: without JavaScript we can't ask for consent first. */}
    </>
  );
}
