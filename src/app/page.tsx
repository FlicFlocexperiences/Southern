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
  alternates: {
    canonical: '/',
  },
};

const homeFaqs = [
  {
    question: "What services does Southern provide?",
    answer: "We are a full-service digital agency offering web development, UI/UX design, branding, SEO, performance marketing, and social media management. We build complete growth systems for our clients."
  },
  {
    question: "Do you work with startups or established brands?",
    answer: "We work with both! Whether you're a startup looking to make a strong market entry or an established brand aiming to scale revenue and improve digital presence, we tailor our strategies to fit your stage."
  },
  {
    question: "How do you approach a new project?",
    answer: "Every project starts with a deep dive into your business goals, target audience, and current market position. We then craft a custom strategy, develop the assets, and continuously optimize for maximum ROI."
  },
  {
    question: "Why choose Southern over other agencies?",
    answer: "We focus on measurable results rather than vanity metrics. Our team combines stunning creative design with data-driven marketing, ensuring that everything we build not only looks great but actively drives revenue."
  }
];

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
        <MobileFaq faqs={homeFaqs} />
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
          <DesktopFaq faqs={homeFaqs} />
          <DesktopMarquee />
          <DesktopFooter />
        </div>
      </div>
    </>
  );
}
