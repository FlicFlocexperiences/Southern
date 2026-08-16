import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: '/refund',
  },
  title: "Refund Policy",
  description: "Information regarding refunds and cancellations for our services.",
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
        <h4 className="text-[#de5e18] text-sm font-semibold tracking-wider uppercase mb-2">Legal Framework</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-6">Refund Policy</h1>
        
        <p className="text-lg text-[#828282] mb-12">
          Read the terms and conditions regarding cancellations, returns, and refunds for our digital marketing and development services. Last revised: May 19, 2026.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">1. General Policy</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            At <span className="font-bold">Southern Edge Marketing</span>, we strive to deliver the highest quality of service. Because our products are digital services (software development, design, and marketing campaigns), significant time and resources are committed from the moment a project begins. Therefore, all sales are considered final once the initial deposit or retainer is paid, unless otherwise explicitly stated in your custom service agreement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">2. Non-Refundable Retainers & Deposits</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            To reserve engineering and design bandwidth, we require an upfront deposit or retainer fee. These fees are strictly non-refundable under any circumstances. Once work commences, we allocate resources that cannot be recovered.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">3. Milestone Payments</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            For project-based work, milestone payments are tied to the delivery of specific, agreed-upon objectives. Once a milestone is approved by the client and payment is processed, that payment is non-refundable. If a project is cancelled mid-milestone, the client is responsible for paying for the hours or resources utilized up to the point of cancellation.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">4. Subscriptions and Retainer Contracts</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            For ongoing services (e.g., SEO, Social Media Management), clients may cancel their subscription or retainer contract with a 30-day written notice. You will continue to be billed for services provided during this 30-day notice period. No pro-rated refunds will be issued for partially unused months.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">5. Exceptions and Disagreements</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            We value our client relationships. If you are dissatisfied with our service, we ask that you contact us immediately at info@southernedgemarketing.com so we can address your concerns. We will make reasonable efforts to revise the deliverables within the scope of the original agreement. However, subjective dissatisfaction does not qualify for a refund.
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
