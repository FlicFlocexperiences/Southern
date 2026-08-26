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
    question: "What services does Southern Edge Marketing provide?",
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
    question: "Why choose Southern Edge Marketing over other agencies?",
    answer: "We focus on measurable results rather than vanity metrics. Our team combines stunning creative design with data-driven marketing, ensuring that everything we build not only looks great but actively drives revenue."
  }
];

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#f2decc]">
      {/* Navigation */}
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      {/* Hero */}
      <div className="block md:hidden"><MobileHero /></div>
      <div className="hidden md:block"><DesktopHero /></div>

      {/* Integrations */}
      <div className="block md:hidden"><MobileIntegrations /></div>
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopIntegrations /></div>

      {/* Stats */}
      <div className="block md:hidden"><MobileStats /></div>
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopStats /></div>

      {/* Comparison */}
      <div className="block md:hidden"><MobileComparison /></div>
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopComparison /></div>

      {/* Case Studies */}
      <div className="block md:hidden"><MobileCaseStudies /></div>
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopCaseStudies /></div>

      {/* Services */}
      <div className="block md:hidden"><MobileServices /></div>
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopServices /></div>

      {/* Shared Responsive Sections */}
      <div className="md:[zoom:0.8]"><WhyUs /></div>
      <div className="md:[zoom:0.8]"><HowWeWork /></div>
      <div className="md:[zoom:0.8]"><Testimonials /></div>
      <div className="md:[zoom:0.8]"><Cta /></div>

      {/* FAQ */}
      <div className="block md:hidden"><MobileFaq faqs={homeFaqs} /></div>
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopFaq faqs={homeFaqs} /></div>

      {/* Marquee (Desktop Only) */}
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopMarquee /></div>

      {/* Footer */}
      <div className="block md:hidden"><MobileFooter /></div>
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopFooter /></div>
    </div>
  );
}
