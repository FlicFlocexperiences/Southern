import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { Metadata } from "next";
import { CookieSettingsLink } from "@/components/cookie-settings-link";

export const metadata: Metadata = {
  alternates: {
    canonical: '/privacy',
  },
  title: "Privacy Policy",
  description: "How Southern Edge Marketing collects, uses and protects personal data under India's DPDP Act 2023: what we collect, why, your rights and how to contact our Grievance Officer.",
  openGraph: {
    title: "Privacy Policy | Southern Edge",
    description: "How Southern Edge Marketing collects, uses and protects personal data under India's DPDP Act 2023: what we collect, why, your rights and how to contact our Grievance Officer.",
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
          How Southern Edge Marketing collects, uses and protects your personal data, in line with India&apos;s Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025. Last updated: 9 November 2026.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">1. Who we are</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            Southern Edge Marketing (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a digital marketing and web development agency with offices in Delhi, India and Dubai, UAE. For the personal data described in this policy, we are the Data Fiduciary: we decide why and how it is processed.
          </p>
          <p className="text-[#555] leading-relaxed mb-4">
            Contact: <a href="mailto:info@southernedgemarketing.com" className="text-[#de5e18] underline">info@southernedgemarketing.com</a> · <a href="tel:+918700901769" className="text-[#de5e18] underline">+91 87009 01769</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">2. What we collect and why</h2>
          <p className="text-[#555] leading-relaxed mb-4">We only collect what we need for the purposes below.</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-[15px] text-[#555] border border-black/10 rounded-lg">
              <thead className="bg-white/60">
                <tr><th className="text-left p-3 font-semibold text-[#0f0f0f] border-b border-black/10">Personal data</th><th className="text-left p-3 font-semibold text-[#0f0f0f] border-b border-black/10">Purpose</th><th className="text-left p-3 font-semibold text-[#0f0f0f] border-b border-black/10">Basis</th></tr>
              </thead>
              <tbody>
                <tr><td className="p-3 align-top border-b border-black/10">Name, phone number, email, service of interest and your message (contact form)</td><td className="p-3 align-top border-b border-black/10">To reply to your enquiry, prepare a quote and follow up about it</td><td className="p-3 align-top border-b border-black/10">Your consent, given on the form</td></tr>
                <tr><td className="p-3 align-top border-b border-black/10">Email or phone number for marketing</td><td className="p-3 align-top border-b border-black/10">To send occasional marketing tips and offers</td><td className="p-3 align-top border-b border-black/10">Separate, optional consent on the form</td></tr>
                <tr><td className="p-3 align-top border-b border-black/10">Details you send by WhatsApp, phone or email</td><td className="p-3 align-top border-b border-black/10">To respond to you and provide the service you asked about</td><td className="p-3 align-top border-b border-black/10">Your consent, given by contacting us</td></tr>
                <tr><td className="p-3 align-top border-b border-black/10">Device and browsing data: pages visited, clicks, approximate location, browser, device, IP address and cookie identifiers</td><td className="p-3 align-top border-b border-black/10">Analytics (Google Analytics, Microsoft Clarity) to understand and improve the site</td><td className="p-3 align-top border-b border-black/10">Your consent through our cookie banner</td></tr>
                <tr><td className="p-3 align-top border-b border-black/10">Device and browsing data, and the fact that you submitted an enquiry</td><td className="p-3 align-top border-b border-black/10">Marketing (Meta Pixel) to measure our ads and show relevant ads on Facebook and Instagram</td><td className="p-3 align-top border-b border-black/10">Your consent through our cookie banner</td></tr>
                <tr><td className="p-3 align-top border-b border-black/10">Device and interaction signals when you submit the form</td><td className="p-3 align-top border-b border-black/10">Security: Google reCAPTCHA checks that submissions are not spam or bots</td><td className="p-3 align-top border-b border-black/10">Necessary to keep the form secure</td></tr>
                <tr><td className="p-3 align-top border-b border-black/10">Client project information shared under a contract</td><td className="p-3 align-top border-b border-black/10">To deliver the project and meet legal, tax and accounting duties</td><td className="p-3 align-top border-b border-black/10">Your consent and our contract with you; legal obligations</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#555] leading-relaxed mb-4">We do not sell, rent or trade your personal data.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">3. Cookies and tracking</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            Analytics and marketing tools load only after you choose &ldquo;Accept all&rdquo; or turn them on under &ldquo;Choose&rdquo; in our cookie banner. If you reject them, the site still works.
            You can change or withdraw your choice at any time: <CookieSettingsLink />. Withdrawing deletes the tracking cookies we can reach and reloads the page without them.
          </p>
          <ul className="list-disc pl-6 text-[#555] leading-relaxed mb-4 space-y-2">
            <li><strong>Essential:</strong> website hosting, security and remembering your cookie choice. Always on.</li>
            <li><strong>Analytics:</strong> Google Analytics and Microsoft Clarity.</li>
            <li><strong>Marketing:</strong> Meta Pixel (Facebook and Instagram).</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">4. Who we share data with</h2>
          <p className="text-[#555] leading-relaxed mb-4">We share personal data only with service providers that process it for us (Data Processors), under their terms and security standards:</p>
          <ul className="list-disc pl-6 text-[#555] leading-relaxed mb-4 space-y-2">
            <li>Google (Firebase / Google Cloud for storing enquiries; Google Analytics; reCAPTCHA)</li>
            <li>Vercel (website hosting)</li>
            <li>Microsoft (Clarity analytics)</li>
            <li>Meta Platforms (Meta Pixel; WhatsApp when you message us)</li>
          </ul>
          <p className="text-[#555] leading-relaxed mb-4">
            We may also disclose data where the law requires it, for example to a court or government authority. Some of these providers store data on servers outside India. We transfer data only to countries not restricted by the Government of India under the DPDP Act.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">5. How long we keep your data</h2>
          <ul className="list-disc pl-6 text-[#555] leading-relaxed mb-4 space-y-2">
            <li><strong>Enquiries</strong> (contact form, WhatsApp, email): up to 24 months after our last contact, then deleted, unless you become a client.</li>
            <li><strong>Marketing consent:</strong> until you withdraw it.</li>
            <li><strong>Client records:</strong> for the length of the project, then as long as tax and accounting laws require.</li>
            <li><strong>Analytics data:</strong> according to each tool&apos;s retention settings.</li>
            <li><strong>Consent records and security logs:</strong> at least one year, as required by the DPDP Rules.</li>
          </ul>
                  </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">6. Your rights</h2>
          <p className="text-[#555] leading-relaxed mb-4">Under the DPDP Act, you have the right to:</p>
          <ul className="list-disc pl-6 text-[#555] leading-relaxed mb-4 space-y-2">
            <li><strong>Access</strong> a summary of the personal data we hold about you, how we process it, and who we have shared it with.</li>
            <li><strong>Correct, complete or update</strong> inaccurate or incomplete data.</li>
            <li><strong>Erase</strong> your data when it is no longer needed or you withdraw consent, unless the law requires us to keep it.</li>
            <li><strong>Withdraw consent</strong> at any time, as easily as you gave it. This does not affect processing already done.</li>
            <li><strong>Nominate</strong> another person to exercise your rights if you die or become incapable.</li>
            <li><strong>Grievance redressal</strong>: raise a complaint with us and get a response.</li>
          </ul>
          <p className="text-[#555] leading-relaxed mb-4">
            To use any right, email <a href="mailto:info@southernedgemarketing.com?subject=Personal%20data%20request" className="text-[#de5e18] underline">info@southernedgemarketing.com</a> with the subject &ldquo;Personal data request&rdquo;. We may ask you to verify your identity. We aim to respond within 30 days, and always within 90 days.
            To withdraw tracking consent instantly, use <CookieSettingsLink />. To stop marketing messages, reply &ldquo;STOP&rdquo; or email us.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">7. Grievance officer and complaints</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            For questions or complaints about your personal data, contact our Grievance Officer: Ameet Nangia, Founder, Southern Edge Marketing, at 
            <a href="mailto:info@southernedgemarketing.com?subject=Privacy%20grievance" className="text-[#de5e18] underline">info@southernedgemarketing.com</a> or <a href="tel:+918700901769" className="text-[#de5e18] underline">+91 87009 01769</a>.
          </p>
          <p className="text-[#555] leading-relaxed mb-4">
            If you are not satisfied with our response, you can complain to the Data Protection Board of India after using our grievance process.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">8. Security and data breaches</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            We protect personal data with reasonable security safeguards, including HTTPS encryption, access controls limited to staff who need the data and spam protection on forms.
            If a personal data breach occurs, we will inform affected individuals and the Data Protection Board of India as required by the DPDP Rules.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">9. Children</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            Our services are meant for businesses and adults. We do not knowingly collect personal data from anyone under 18, and we do not track or target ads at children. If you believe a child has sent us their details, contact us and we will delete them.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">10. Visitors outside India</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            We also serve clients in the UAE and elsewhere. Where other data protection laws apply to you, such as the UAE Personal Data Protection Law, we will honour the rights they give you. Contact us using the details above.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">11. Changes to this policy</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            We may update this policy as our services or the law change. The date at the top shows the latest version. If a change affects how we use data you gave us consent for, we will ask for your consent again where required.
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
