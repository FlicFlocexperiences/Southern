import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: "Social Media Agency in Chennai | Southern Edge Marketing",
  description: "Dominate the Southern Indian market with elite social media management in Chennai. We build high-ROI campaigns for manufacturing, IT, and retail sectors.",
};

const tableOfContents = [
    {
      "id": "strategic-digital-branding-in-southern-india",
      "title": "Strategic Digital Branding in Southern India"
    },
    {
      "id": "full-service-corporate-social-strategy",
      "title": "Full-Service Corporate Social Strategy"
    },
    {
      "id": "advanced-b2b-lead-generation-on-linkedin",
      "title": "Advanced B2B Lead Generation on LinkedIn"
    },
    {
      "id": "analytics-driven-campaign-optimization",
      "title": "Analytics-Driven Campaign Optimization"
    },
    {
      "id": "why-choose-our-chennai-social-media-agency",
      "title": "Why Choose Our Chennai Social Media Agency"
    },
    {
      "id": "local-influencer-and-partnership-marketing",
      "title": "Local Influencer and Partnership Marketing"
    },
    {
      "id": "corporate-reputation-and-crisis-management",
      "title": "Corporate Reputation and Crisis Management"
    },
    {
      "id": "reviews",
      "title": "Reviews"
    },
    {
      "id": "faq",
      "title": "FAQ"
    }
  ];

export default function ChennaiSocialmediamanagementPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title={"Corporate Social Media Management in Chennai"}
        tagline={"Building powerful digital narratives for Chennai's industrial and tech leaders."}
        breadcrumbTitle={"Social Media Management in Chennai"}
      />
      
      <ServiceLayout sections={tableOfContents}>

            <h3 id="strategic-digital-branding-in-southern-india" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Strategic Digital Branding in Southern India
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Chennai represents a unique marketing challenge.</strong> It is a city that deeply values tradition and substance, yet it is also a rapidly advancing hub for IT and heavy manufacturing. To succeed here, your <Link href="/services" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">digital marketing</Link> must strike a perfect balance between cultural authenticity and modern corporate professionalism. Our specialized social media management in Chennai is designed specifically to navigate this duality. We understand the vast differences between communicating with a tech-savvy millennial audience along the OMR and engaging with established, traditional business owners in George Town. <strong className="font-semibold text-[#de5e18] tracking-tight">By partnering with our agency</strong>, you ensure that your brand's voice is not only heard but deeply respected by your target local demographic. We move far beyond generic content scheduling; we architect comprehensive digital narratives that build massive corporate authority and drive genuine B2B and B2C engagement. Our dedicated Chennai social media experts are committed to transforming your platforms into highly efficient, revenue-generating assets, ensuring your business stands out prominently in the competitive Tamil Nadu market.
            </p>

            <h3 id="full-service-corporate-social-strategy" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Full-Service Corporate Social Strategy
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">A cohesive online presence</strong> requires meticulous planning and flawless, daily execution. We provide end-to-end services for social media management in Chennai, taking the entire operational burden off your internal teams. <strong className="font-semibold text-[#de5e18] tracking-tight">Strategic content creation</strong> is our core focus. We produce highly professional, visually stunning graphics, corporate videography, and authoritative copywriting that perfectly aligns with the sophisticated preferences of the Chennai market. Beyond creating exceptional content, our social media agency in Chennai excels at proactive community management. We actively nurture your online following, responding to corporate inquiries and fostering conversations that build deep, long-lasting brand loyalty. Furthermore, we leverage highly targeted paid social campaigns to amplify your organic reach and drive direct, measurable conversions. For a complete digital overhaul, we highly recommend pairing these services with our enterprise <Link href="/services/web-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">web development</Link> solutions.
            </p>

            <h3 id="advanced-b2b-lead-generation-on-linkedin" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Advanced B2B Lead Generation on <a href="https://business.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">LinkedIn</a>
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">For Chennai's massive manufacturing and IT sectors,</strong> LinkedIn is the most critical digital battleground. Standard consumer marketing tactics fail completely when trying to reach C-suite executives in Oragadam or Sriperumbudur. Our social media management in Chennai includes highly targeted B2B lead generation strategies specifically optimized for LinkedIn. We optimize your corporate profile, publish authoritative thought-leadership content regarding industrial trends, and run precision-targeted InMail and sponsored content campaigns designed to connect you directly with key decision-makers and procurement officers. <strong className="font-semibold text-[#de5e18] tracking-tight">This strategic approach</strong> establishes your brand as an undeniable industry authority and consistently fills your corporate sales pipeline with high-value, highly qualified B2B leads.
            </p>

            <h3 id="analytics-driven-campaign-optimization" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Analytics-Driven Campaign Optimization
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Effective modern marketing relies entirely on hard data.</strong> Our Chennai social media managers utilize advanced, enterprise-grade analytics software to track the precise performance of every single campaign we execute. <strong className="font-semibold text-[#de5e18] tracking-tight">We meticulously monitor KPIs</strong> such as audience growth velocity, engagement rates, click-through rates to your corporate site, and deep-funnel conversion metrics to understand exactly what resonates with your specific target demographic. This rigorous, analytics-driven approach to social media management in Chennai allows us to continuously optimize your overarching content strategy. If a specific format—like detailed infographics on manufacturing processes or corporate culture videos—is driving superior results, we aggressively pivot our resources to maximize that specific ROI. <strong className="font-semibold text-[#de5e18] tracking-tight">Transparent reporting</strong> ensures you are never in the dark. We provide comprehensive monthly performance reports, clearly outlining our strategic actions and exactly how they are contributing to your overarching corporate growth.
            </p>

            <h3 id="why-choose-our-chennai-social-media-agency" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Why Choose Our Chennai Social Media Agency
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Finding a reliable, results-oriented marketing partner</strong> is critical to your brand's long-term digital success. Our social media agency in Chennai distinguishes itself through a deep, uncompromising commitment to cultural relevancy and measurable corporate ROI. <strong className="font-semibold text-[#de5e18] tracking-tight">We act as a direct extension of your business.</strong> Before publishing a single post, we immerse ourselves completely in your industry, learning your unique value proposition, technical specifications, and corporate brand voice inside and out. <strong className="font-semibold text-[#de5e18] tracking-tight">We absolutely refuse to use generic content.</strong> Every visual asset and piece of copy is custom-crafted specifically for the demanding Chennai market. Furthermore, our proactive account managers are constantly monitoring local industrial trends and economic events, allowing your brand to participate natively in relevant, timely corporate conversations. We measure our success entirely by the tangible expansion of your digital footprint and the direct revenue generated from our strategic campaigns.
            </p>

            <h3 id="local-influencer-and-partnership-marketing" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Local Influencer and Partnership Marketing
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">Leveraging established local voices</strong> is an incredibly fast way to build trust, especially for retail and consumer brands in Chennai. Our social media agency in Chennai maintains an extensive network of verified influencers, micro-influencers, and industry thought leaders across Tamil Nadu. We handle the entire influencer marketing lifecycle, from initial outreach and contract negotiation to campaign execution and rigorous ROI tracking. <strong className="font-semibold text-[#de5e18] tracking-tight">By partnering with the right local creators</strong>, we seamlessly integrate your products or services into authentic content that your target audience already consumes and trusts, drastically accelerating your brand awareness in a culturally resonant manner.
            </p>

            <h3 id="corporate-reputation-and-crisis-management" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
              Corporate Reputation and Crisis Management
            </h3>
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
              <strong className="font-semibold text-[#de5e18] tracking-tight">In the highly visible realm of modern social media</strong>, protecting your enterprise's hard-earned reputation is paramount. Our social media management in Chennai includes proactive reputation monitoring and rapid crisis mitigation strategies. We actively listen to online sentiment surrounding your business across all platforms, ensuring positive feedback is highlighted and negative comments or service complaints are addressed immediately and professionally. <strong className="font-semibold text-[#de5e18] tracking-tight"><a href="https://developer.apple.com/swift/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Swift</a>, empathetic customer service</strong> is a key pillar of our community management strategy. Our Chennai social media experts are highly trained to de-escalate sensitive situations publicly, proving to your corporate clients and retail consumers that you value their satisfaction above all else. By entrusting your digital reputation to our specialized team, you safeguard your brand equity in the highly interconnected Indian market.
            </p>

            {/* Client Reviews Section */}
            <div className="w-full bg-white border border-black/10 rounded-2xl p-8 shadow-sm text-left mt-10 mb-6">
              <h3 id="reviews" className="text-[22px] font-bold text-black mb-6 uppercase tracking-wide flex items-center gap-2 scroll-mt-28">
                <svg className="w-6 h-6 text-[#de5e18]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Client Reviews
              </h3>
              <div className="flex flex-col gap-8">
                <div className="border-b border-black/5 pb-6">
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    "Southern Edge Marketing transformed our digital presence completely. The custom web platform reduced patient onboarding time by 40% and significantly elevated our brand authority."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Anand M. Sharma" className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Anand M. Sharma</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">AMA Legal Solutions</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                    "Our <a href="https://www.shopify.com/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">Shopify</a> storefront conversion rates increased by 42% within weeks of launch. Their team understands both high-end design aesthetics and conversion science."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Rohan Kapoor" className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">Rohan Kapoor</p>
                      <p className="text-[12px] text-black/50 uppercase tracking-wide">The Fat Cookie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FaqAccordion faqs={[
              {
                "question": "Which social media platforms are best for Chennai businesses?",
                "answer": "It depends on your sector. For IT, logistics, and manufacturing, LinkedIn is absolutely essential. For retail, real estate, and consumer brands, Facebook and Instagram yield the highest ROI."
              },
              {
                "question": "Can you create content in regional languages like Tamil?",
                "answer": "Yes. Cultural relevancy is key in this market. Our social media agency in Chennai can produce highly authentic, localized content in both English and Tamil to maximize engagement with the local demographic."
              },
              {
                "question": "How do you generate B2B leads for manufacturing companies?",
                "answer": "We utilize highly targeted LinkedIn strategies. Our social media management in Chennai includes optimizing corporate profiles, publishing industrial thought-leadership, and running precision-targeted InMail campaigns to procurement officers."
              },
              {
                "question": "Will you handle negative comments or customer complaints?",
                "answer": "Absolutely. Proactive reputation management is included. We monitor your accounts continuously and respond to all feedback professionally, aiming to quickly de-escalate any negative sentiment and protect your corporate brand."
              },
              {
                "question": "Do you run paid advertising campaigns?",
                "answer": "Yes, paid advertising is a core component of our strategy. Our social media agency in Chennai creates, executes, and continuously optimizes targeted ad campaigns on Meta and LinkedIn to drive immediate corporate leads and sales."
              },
              {
                "question": "How do you measure the success of a campaign?",
                "answer": "We focus on tangible business metrics. While we track follower growth, our primary KPIs are click-through rates, qualified lead generation, and direct sales attributed to our social media management in Chennai."
              },
              {
                "question": "Do we need to provide the content, or do you create it?",
                "answer": "We are a full-service agency. We handle everything from professional photography and graphic design to copywriting and video editing, ensuring your brand always presents a premium image."
              }
            ]} />

      </ServiceLayout>
    </div>
  );
}
