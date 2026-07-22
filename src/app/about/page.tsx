import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { DesktopFaq } from "@/components/desktop-faq";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { MobileFaq } from "@/components/mobile-faq";
import { DesktopAboutHero } from "@/components/desktop-about-hero";
import { DesktopAboutTeam } from "@/components/desktop-about-team";
import { AboutPageHero } from "@/components/about-page-hero";
import { AboutIntro } from "@/components/about-intro";
import { Cta } from "@/components/cta";
import { MobileClientLogos, DesktopClientLogos } from "@/components/client-logos";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Southern Edge Marketing | Our Story & Approach",
  description: "We're more than just digital. Meet the team behind Southern Edge Marketing and see how we build brands that grow, not just campaigns that run.",
};

export default function About() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen flex flex-col">
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>

      <main className="flex-grow">
        <AboutPageHero />
        <AboutIntro />
        {/* <DesktopAboutHero /> */}
        <DesktopAboutTeam />
        <div className="hidden md:block">
          <DesktopClientLogos />
        </div>
        <div className="md:hidden">
          <MobileClientLogos />
        </div>
      </main>

      <div className="md:[zoom:0.8]">
        <Cta />
      </div>

      <div className="hidden md:block" style={{ zoom: 0.8 }}>
        <DesktopFaq />
        <DesktopFooter />
      </div>
      <div className="md:hidden">
        <MobileFaq />
        <MobileFooter />
      </div>
    </div>
  );
}
