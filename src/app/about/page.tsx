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
  alternates: {
    canonical: '/about',
  },
  title: "About Us",
  description: "We're more than just digital. Meet the team behind Southern Edge Marketing and see how we build brands that grow, not just campaigns that run.",
  openGraph: {
    title: "About Us | Southern Edge Marketing",
    description: "We're more than just digital. Meet the team behind Southern Edge Marketing and see how we build brands that grow, not just campaigns that run.",
  },
};

const aboutFaqs = [
  {
    question: "What is the story behind Southern?",
    answer: "Southern was founded with a mission to bridge the gap between stunning design and data-driven performance. We started as a small passionate team and have grown into a full-service agency, committed to helping brands achieve measurable growth."
  },
  {
    question: "Where is your team based?",
    answer: "Our core team is based in Delhi NCR, but we operate with a global mindset. We collaborate with talent across different regions and work with clients worldwide, providing high-quality digital solutions without geographical limitations."
  },
  {
    question: "What are your core values as an agency?",
    answer: "Transparency, innovation, and measurable results. We believe in being completely honest with our clients, constantly pushing the boundaries of creativity and technology, and ensuring everything we do directly impacts the bottom line."
  },
  {
    question: "Are you currently hiring new talent?",
    answer: "We are always on the lookout for exceptional talent—designers, developers, and marketers who share our vision. Feel free to send us your portfolio if you think you'd be a great fit for our team."
  }
];

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
        <div className="hidden md:block">
          <DesktopClientLogos />
        </div>
        <div className="md:hidden">
          <MobileClientLogos />
        </div>
        <AboutIntro />
        {/* <DesktopAboutHero /> */}
        <DesktopAboutTeam />
      </main>

      <div className="md:[zoom:0.8]">
        <Cta />
      </div>

      <div className="hidden md:block" style={{ zoom: 0.8 }}>
        <DesktopFaq faqs={aboutFaqs} />
        <DesktopFooter />
      </div>
      <div className="md:hidden">
        <MobileFaq faqs={aboutFaqs} />
        <MobileFooter />
      </div>
    </div>
  );
}
