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
  title: "Our Services | Web, Branding, SEO & Apps",
  description: "Six capabilities, one growth system: websites, branding, Shopify, app development, SEO, performance marketing, and social media management.",
  openGraph: {
    title: "Our Services | Web, Branding, SEO & Apps | Southern Edge",
    description: "Six capabilities, one growth system: websites, branding, Shopify, app development, SEO, performance marketing, and social media management.",
  },
};

const servicesFaqs = [
  {
    question: "Do you offer custom web development or template-based solutions?",
    answer: "We build custom websites suited to your business goals. We avoid generic templates so your site stays fast, unique, and true to your brand."
  },
  {
    question: "Can you handle both design and development for an app?",
    answer: "Yes, we handle complete app development from concept to launch. Our UI/UX designers and engineers build fast, easy-to-use mobile and web apps."
  },
  {
    question: "What does your performance marketing service include?",
    answer: "Our performance marketing covers Google, Meta (Facebook and Instagram), and LinkedIn Ads. We focus on clean data, continuous testing, and strong return on ad spend."
  },
  {
    question: "How do you measure the success of an SEO campaign?",
    answer: "We track organic traffic, keyword positions, conversion rates, and lead quality. You receive clear monthly reports showing real business progress."
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-[#f2decc]">
      {/* Navigation */}
      <div className="hidden md:block"><DesktopNav /></div>
      <div className="block md:hidden"><MobileNav /></div>

      {/* Services Content */}
      <div className="hidden md:block"><DesktopServicesPage /></div>
      <div className="block md:hidden"><MobileServicesPage /></div>

      {/* Shared Sections */}
      <div className="md:[zoom:0.8]"><Testimonials /></div>
      <div className="md:[zoom:0.8]"><Cta /></div>

      {/* FAQ */}
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopFaq faqs={servicesFaqs} /></div>
      <div className="block md:hidden"><MobileFaq faqs={servicesFaqs} /></div>

      {/* Footer */}
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopFooter /></div>
      <div className="block md:hidden"><MobileFooter /></div>
    </div>
  );
}
