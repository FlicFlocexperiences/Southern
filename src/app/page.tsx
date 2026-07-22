import { MobileNav } from "@/components/mobile-nav";
import { MobileHero } from "@/components/mobile-hero";
import { MobileIntegrations } from "@/components/mobile-integrations";

import { MobileStats } from "@/components/mobile-stats";
import { MobileComparison } from "@/components/mobile-comparison";
import { MobileCaseStudies } from "@/components/mobile-case-studies";
import { MobileServices } from "@/components/mobile-services";
import { MobileFaq } from "@/components/mobile-faq";
import { MobileFooter } from "@/components/mobile-footer";

import { DesktopNav } from "@/components/desktop-nav";
import { DesktopHero } from "@/components/desktop-hero";
import { DesktopIntegrations } from "@/components/desktop-integrations";
import { DesktopStats } from "@/components/desktop-stats";
import { DesktopComparison } from "@/components/desktop-comparison";
import { DesktopCaseStudies } from "@/components/desktop-case-studies";
import { DesktopServices } from "@/components/desktop-services";
import { DesktopFaq } from "@/components/desktop-faq";
import { DesktopMarquee } from "@/components/desktop-marquee";
import { DesktopFooter } from "@/components/desktop-footer";

import { Cta } from "@/components/cta";
import { Testimonials } from "@/components/testimonials";
import { WhyUs } from "@/components/why-us";
import { HowWeWork } from "@/components/how-we-work";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Southern Edge Marketing | Digital Marketing Agency in Delhi, India",
  description: "Southern Edge Marketing turns attention into action — strategy, design, development, and marketing that actually drives business. Trusted by 100+ businesses across India. 5.0 rated.",
};

export default function Home() {
  return (
    <>
      {/* Mobile Version - Visible only on mobile screens (< 768px) */}
      <div className="block md:hidden w-full min-h-screen bg-[#f2decc]">
        <MobileNav />
        <MobileHero />
        <MobileIntegrations />
        <MobileStats />
        <MobileComparison />
        <MobileCaseStudies />
        <MobileServices />
        <WhyUs />
        <HowWeWork />
        <Testimonials />
        <Cta />
        <MobileFaq />
        <MobileFooter />
      </div>

      {/* Desktop Version - Visible only on desktop screens (>= 768px) */}
      <div className="hidden md:block w-full min-h-screen bg-[#f2decc]">
        <DesktopNav />
        <DesktopHero />
        <div style={{ zoom: 0.8 }}>
          <DesktopIntegrations />
          <DesktopStats />
          <DesktopComparison />
          <DesktopCaseStudies />
          <DesktopServices />
          <WhyUs />
          <HowWeWork />
          <Testimonials />
          <Cta />
          <DesktopFaq />
          <DesktopMarquee />
          <DesktopFooter />
        </div>
      </div>
    </>
  );
}
