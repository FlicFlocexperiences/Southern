import { MobileNav } from "@/components/mobile-nav";
import { MobileServicesPage } from "@/components/mobile-services-page";
import { MobileFaq } from "@/components/mobile-faq";
import { MobileFooter } from "@/components/mobile-footer";

import { DesktopNav } from "@/components/desktop-nav";
import { DesktopServicesPage } from "@/components/desktop-services-page";
import { DesktopFaq } from "@/components/desktop-faq";
import { DesktopFooter } from "@/components/desktop-footer";

import { Cta } from "@/components/cta";
import { Testimonials } from "@/components/testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Web, Branding, SEO, Ads & App Development | Southern Edge Marketing",
  description: "Six capabilities, one growth system: website platforms, branding, Shopify development, app development, SEO, performance marketing, and social media management, built to compound.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Mobile Version - Visible only on mobile screens (< 768px) */}
      <div className="block md:hidden w-full min-h-screen bg-[#f2decc]">
        <MobileNav />
        <MobileServicesPage />
        <Testimonials />
        <Cta />
        <MobileFaq />
        <MobileFooter />
      </div>

      {/* Desktop Version - Visible only on desktop screens (>= 768px) */}
      <div className="hidden md:block w-full min-h-screen bg-[#f2decc]">
        <DesktopNav />
        <DesktopServicesPage />
        <div style={{ zoom: 0.8 }}>
          <Testimonials />
          <Cta />
        </div>
        <div style={{ zoom: 0.8 }}>
          <DesktopFaq />
          <DesktopFooter />
        </div>
      </div>
    </>
  );
}
