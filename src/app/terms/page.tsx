import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: '/terms',
  },
  title: "Terms & Conditions",
  description: "Read the terms and conditions governing our web development, digital marketing services, and client partnerships at Southern Edge Marketing.",
  openGraph: {
    title: "Terms & Conditions | Southern Edge",
    description: "Read the terms and conditions governing our web development, digital marketing services, and client partnerships at Southern Edge Marketing.",
    url: "https://www.southernedgemarketing.com/terms",
    siteName: "Southern Edge Marketing",
  },
};

export default function Terms() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-6">Terms & Conditions</h1>
        
        <p className="text-lg text-[#828282] mb-12">
          Review the terms, ownership rules, and service policies for working with Southern Edge Marketing. Last revised: May 19, 2026.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">Service Agreement Principles</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            Welcome to <span className="font-bold">Southern Edge Marketing</span>. When you hire our team for Next.js development, e-commerce stores, headless web apps, or UI/UX design, you agree to these terms. These rules explain our work standards, code handoff, payment terms, and client rights.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">1. Agreement to Terms</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            By visiting our site, using our client tools, or hiring <span className="font-bold">Southern Edge Marketing</span> for digital services, you agree to these Terms & Conditions. If you do not agree with any part of this agreement, please stop using our website and services right away.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">2. Intellectual Property Rights</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            Unless stated in your custom service contract, all design files, source code, graphics, and interface assets created by <span className="font-bold">Southern Edge Marketing</span> remain our intellectual property until paid in full. Once you complete all final project payments, full ownership of the completed deliverables (like HTML, CSS, custom Next.js builds, or Shopify setups) transfers directly to you.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">3. Payment Milestones & Fees</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            We structure client projects around clear milestones. Upfront deposits and retainer fees are non-refundable and hold your spot on our development calendar. You must settle subsequent milestone invoices within 14 calendar days. Invoices paid late may incur a 1.5% monthly late fee, and we may pause active site support or hosting until balances are settled.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">4. Limitation of Liability</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            <span className="font-bold">Southern Edge Marketing</span> and its team are not liable for any indirect, special, or consequential damages. This includes lost profits, third-party server outages, or hardware failures related to using our software. In all cases, our total liability is limited to the actual amount you paid us under your service agreement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">5. Dispute Resolution & Governing Law</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            These Terms & Conditions follow the laws of our registered business location. If any dispute arises under this agreement, both parties agree to resolve it through binding arbitration in courts with proper jurisdiction. The prevailing party can recover reasonable legal fees.
          </p>
        </section>

        <p className="text-sm text-[#828282] mt-16 pt-8 border-t border-black/10">
          © 2026 Southern Edge Marketing. All corporate rights reserved. Registered development partner code: SEM-TERMS-2026-V1.
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
