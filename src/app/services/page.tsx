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
  alternates: {
    canonical: '/services',
  },
  title: "Our Services | Web, Branding, SEO, Ads & App Development",
  description: "Six capabilities, one growth system: websites, branding, Shopify, app development, SEO, performance marketing, and social media management.",
  openGraph: {
    title: "Our Services | Web, Branding, SEO, Ads & App Development",
    description: "Six capabilities, one growth system: websites, branding, Shopify, app development, SEO, performance marketing, and social media management.",
  },
};

const servicesFaqs = [
  {
    question: "Do you offer custom web development or template-based solutions?",
    answer: "We specialize in custom web development tailored to your specific business needs. We avoid cookie-cutter templates to ensure your digital presence is unique, scalable, and perfectly aligned with your brand identity."
  },
  {
    question: "Can you handle both design and development for an app?",
    answer: "Yes, we provide end-to-end app development services. Our team includes expert UI/UX designers and skilled developers who work together seamlessly to deliver high-performance, user-centric mobile and web applications."
  },
  {
    question: "What does your performance marketing service include?",
    answer: "Our performance marketing covers a wide range of channels including Google Ads, Facebook & Instagram Ads, and LinkedIn Ads. We focus on data-driven strategies, continuous optimization, and maximizing your Return on Ad Spend (ROAS)."
  },
  {
    question: "How do you measure the success of an SEO campaign?",
    answer: "We track key metrics such as organic traffic growth, keyword rankings, conversion rates, and overall domain authority. You'll receive comprehensive monthly reports detailing our progress and the tangible impact on your business."
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Mobile Version - Visible only on mobile screens (< 768px) */}
      <div className="block md:hidden w-full min-h-screen bg-[#f2decc]">
        <MobileNav />
        <MobileServicesPage />
        <Testimonials />
        <Cta />
        <MobileFaq faqs={servicesFaqs} />
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
          <DesktopFaq faqs={servicesFaqs} />
          <DesktopFooter />
        </div>
      </div>
    </>
  );
}
