import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: '/privacy',
  },
  title: "Privacy Policy",
  description: "Learn how Southern Edge Marketing collects, manages, processes, and protects your enterprise data with rigorous security standards.",
  openGraph: {
    title: "Privacy Policy | Southern Edge",
    description: "Learn how Southern Edge Marketing collects, manages, processes, and protects your enterprise data with rigorous security standards.",
    url: "https://www.southernedgemarketing.com/privacy",
    siteName: "Southern Edge Marketing",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen flex flex-col">
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>

      <main className="flex-grow pt-32 pb-16 px-5 md:px-20 max-w-5xl mx-auto w-full">
        <span className="text-[#de5e18] text-sm font-semibold tracking-wider uppercase mb-2 block">Compliance & Legal</span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-6">Privacy Policy</h1>
        
        <p className="text-lg text-[#828282] mb-12">
          Learn how Southern Edge Marketing collects, uses, and safeguards your data. Last revised: May 19, 2026.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">Our Commitment to Your Privacy</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            At Southern Edge Marketing, trust is central to our client partnerships. We build modern online stores, Next.js applications, and custom business portals with built-in data security. This Privacy Policy explains how we handle your information when you visit our site, use our client tools, or speak with our team.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">1. Information We Collect</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            We collect the information you share directly with us when requesting a quote or contacting our team. This includes your name, work email address, phone number, and company name. We also collect standard site metrics such as your browser type, device, IP address, and pages visited to help us keep our website fast and reliable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">2. How We Use Your Information</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            We use your data only to deliver our digital services and support your business goals. This includes answering your questions, sending project updates, processing payments, and improving our Next.js platforms. We do not sell, rent, or trade your personal information to third parties.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">3. Data Retention & Security</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            We protect your data using industry-standard security practices, including TLS/HTTPS encryption. We keep your records only as long as needed to fulfill your project agreement or meet legal standards. All client design files, project data, and source code are securely stored with restricted access.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">4. Third-Party Integrations</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            We use trusted third-party tools like Google Analytics, Vercel analytics, and secure payment providers to run our platform smoothly. These services process data in line with their own strict privacy standards. If you message us via WhatsApp, your contact details follow WhatsApp's privacy rules.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">5. Contact & Regulatory Rights</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            You have the right to view, update, or delete the personal data we hold about you. To request changes or ask questions about this policy, email us at info@southernedgemarketing.com. Our compliance team will review and respond to your request within 10 business days.
          </p>
        </section>

        <p className="text-sm text-[#828282] mt-16 pt-8 border-t border-black/10">
          © {new Date().getFullYear()} Southern Edge Marketing. All corporate rights reserved.
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
