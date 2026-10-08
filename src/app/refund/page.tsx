import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: '/refund',
  },
  title: "Refund & Cancellation Policy",
  description: "Read the official refund and cancellation policy for digital marketing, web engineering, and branding services at Southern Edge Marketing.",
  openGraph: {
    title: "Refund & Cancellation Policy | Southern Edge",
    description: "Read the official refund and cancellation policy for digital marketing, web engineering, and branding services at Southern Edge Marketing.",
  },
};

export default function Refund() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen flex flex-col">
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>

      <main className="flex-grow pt-32 pb-16 px-5 md:px-20 max-w-5xl mx-auto w-full">
        <span className="text-[#de5e18] text-sm font-semibold tracking-wider uppercase mb-2 block">Legal Framework</span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-6">Refund Policy</h1>
        
        <p className="text-lg text-[#828282] mb-12">
          Review our terms for cancellations, returns, and refunds for our digital marketing and development services. Last revised: May 19, 2026.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">1. General Policy</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            At <span className="font-bold">Southern Edge Marketing</span>, we focus on delivering high-quality digital work. Our offerings include custom software, website design, and marketing campaigns. Because our team commits time and resources right from the project kickoff, all sales are final once you pay your initial deposit or retainer. Any exceptions must be agreed upon in writing in your custom service contract.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">2. Non-Refundable Retainers & Deposits</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            We require an upfront deposit or retainer fee to reserve our design and engineering team. These fees are strictly non-refundable. Once work begins, we dedicate team hours and project tools that cannot be recovered.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">3. Milestone Payments</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            For project work, milestone payments connect to agreed project goals. When you approve a milestone and process payment, that fee is non-refundable. If you cancel a project mid-milestone, you must pay for all hours worked and resources used up to the date of cancellation.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">4. Subscriptions and Retainer Contracts</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            For ongoing monthly services like SEO or Social Media Management, you can cancel your contract with a 30-day written notice. We will continue to provide services and bill you through the end of this 30-day notice window. We do not provide partial or pro-rated refunds for unused days within a month.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">5. Exceptions and Disagreements</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            We value our client relationships. If you are unhappy with our work, please email us right away at info@southernedgemarketing.com. Our team will review your feedback and make reasonable revisions within your original project scope. However, subjective personal preferences do not qualify for a cash refund.
          </p>
        </section>

        <p className="text-sm text-[#828282] mt-16 pt-8 border-t border-black/10">
          © 2026 Southern Edge Marketing. All corporate rights reserved. Registered development partner code: SEM-REFUND-2026-V1.
        </p>
      </main>

      <div className="hidden md:block mt-auto">
        <DesktopFooter />
      </div>
      <div className="md:hidden mt-auto">
        <MobileFooter />
      </div>
    </div>
  );
}
