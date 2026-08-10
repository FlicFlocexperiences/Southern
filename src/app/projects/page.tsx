import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { Cta } from "@/components/cta";
import { ProjectsGrid } from "@/components/projects-grid";
import { DesktopFaq } from "@/components/desktop-faq";
import { MobileFaq } from "@/components/mobile-faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: '/projects',
  },
  title: "Projects",
  description: "Explore our latest web development, branding, and design projects.",
  openGraph: {
    title: "Projects",
    description: "Explore our latest web development, branding, and design projects.",
  },
};

const projectsFaqs = [
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary based on scope and complexity. A standard website might take 4-6 weeks, while comprehensive web apps or full branding packages can take 8-12 weeks. We establish clear milestones before starting."
  },
  {
    question: "Can we see examples of your previous work?",
    answer: "Absolutely! The projects displayed on this page are just a selection of our portfolio. If you want to see work specific to your industry, please reach out and we can share more relevant case studies."
  },
  {
    question: "What is your process for collaborating with clients during a project?",
    answer: "We believe in transparent communication. You'll be involved at every major phase—from initial wireframes and design mockups to development and final testing—with regular progress updates and feedback sessions."
  },
  {
    question: "Do you provide ongoing support after a project is launched?",
    answer: "Yes, we offer post-launch support and maintenance packages. Whether you need regular updates, security monitoring, or new feature additions, our team ensures your digital assets continue to perform optimally."
  }
];

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen bg-[#f2decc]">
      {/* Navigation */}
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      {/* Main Content */}
      <main className="w-full">
        <ProjectsGrid />
      </main>

      {/* Footer & CTA */}
      <div className="md:[zoom:0.8]"><Cta /></div>
      <div className="hidden md:block" style={{ zoom: 0.8 }}>
        <DesktopFaq faqs={projectsFaqs} />
        <DesktopFooter />
      </div>
      <div className="md:hidden">
        <MobileFaq faqs={projectsFaqs} />
        <MobileFooter />
      </div>
    </div>
  );
}
