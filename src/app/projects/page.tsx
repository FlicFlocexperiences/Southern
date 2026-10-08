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
  title: "Our Projects & Portfolio Showcase",
  description: "Explore our latest web development, branding, and design projects at Southern Edge Marketing.",
  openGraph: {
    title: "Our Projects & Portfolio Showcase | Southern Edge",
    description: "Explore our latest web development, branding, and design projects at Southern Edge Marketing.",
  },
};

const projectsFaqs = [
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines depend on features and scope. A standard website takes 4 to 6 weeks. Larger web apps and full branding projects take 8 to 12 weeks. We set clear milestones before starting."
  },
  {
    question: "Can we see examples of your previous work?",
    answer: "Yes! The projects on this page show a preview of our work. If you need examples from your specific vertical, contact us and we will share tailored case studies."
  },
  {
    question: "What is your process for collaborating with clients during a project?",
    answer: "We believe in clear updates. You stay involved at every step—from wireframes and design proofs to coding and launch testing—with regular check-ins."
  },
  {
    question: "Do you provide ongoing support after a project is launched?",
    answer: "Yes, we offer ongoing maintenance packages. We handle software updates, speed checks, and new features so your digital platform keeps running smoothly."
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
