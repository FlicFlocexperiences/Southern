import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceLayout } from '@/components/ServiceLayout';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: "Social Media Management Company in Surat | Southern Edge Marketing",
  description: "Scale your brand with the premier social media management company in Surat. We grow diamond exporters, D2C textile brands, and GIDC industrial enterprises."
};

const tableOfContents = [
  {
    "id": "b2b-diamond-export-authority",
    "title": "B2B Thought Leadership for Surat’s Diamond Exporters & Diamond Bourse"
  },
  {
    "id": "textile-d2c-social-commerce",
    "title": "Direct-to-Consumer (D2C) Scaling for Surat’s Textile and Fashion Brands"
  },
  {
    "id": "industrial-b2b-social-marketing",
    "title": "Industrial B2B Social Marketing for Sachin & Pandesara GIDC Enterprises"
  },
  {
    "id": "vesu-piplod-real-estate-campaigns",
    "title": "High-Conversion Paid Social Funnels for Vesu & Piplod Real Estate"
  },
  {
    "id": "cinematic-content-surat-culture",
    "title": "Cinematic Video Production Showcasing Surat’s Business Heritage"
  },
  {
    "id": "influencer-collaborations-surat-youth",
    "title": "Strategic Influencer Collaborations with Surat’s Top Creators"
  },
  {
    "id": "online-reputation-management-surat",
    "title": "Enterprise-Grade Online Reputation & Community Management"
  },
  {
    "id": "why-choose-our-surat-social-agency",
    "title": "Why Choose Our Surat Social Media Management Agency"
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

export default function SuratSocialmediamanagementPage() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen pb-16">
      <ServiceHero 
        title={"Strategic Social Media Management in Surat"}
        tagline={"Accelerating digital growth for diamond exporters, D2C fashion brands, and industrial manufacturers across Surat."}
        breadcrumbTitle={"Social Media Management in Surat"}
      />
      
      <ServiceLayout sections={tableOfContents}>
        <h3 id="b2b-diamond-export-authority" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          B2B Thought Leadership for Surat’s Diamond Exporters & Diamond Bourse
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          Establishing a powerful digital presence for Surat&apos;s elite diamond merchants requires a strategic B2B communication strategy rather than generic retail posts. With the rise of the massive <strong className="font-semibold text-[#de5e18] tracking-tight">Surat Diamond Bourse</strong> (SDB) in DREAM City, diamond trading is scaling to direct international markets, bypassing traditional intermediate nodes. We design authoritative <a href="https://business.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">LinkedIn</a> thought leadership campaigns that position diamond manufacturers from Varachha and Katargam as global industry benchmarks for ethical sourcing, sustainability, and technological innovation in laser cutting. Our expert B2B copywriters translate complex industry certifications, GIA/IGI grading standards, and high-volume export capacities into polished, professional graphics and editorial content that build trust with jewelry brand owners in Antwerp, New York, and Tel Aviv. By implementing hyper-targeted corporate ad funnels and automated outreach, we connect your diamond export house directly with high-value trade buyers and procurement executives. Partnering with a premier <strong className="font-semibold text-[#de5e18] tracking-tight">social media management company in Surat</strong> ensures your digital narrative matches the precision and brilliance of your finished gems, securing global enterprise contracts.
        </p>

        <h3 id="textile-d2c-social-commerce" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Direct-to-Consumer (D2C) Scaling for Surat’s Textile and Fashion Brands
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          Surat&apos;s legendary textile hub, stretching from the bustling wholesale markets of Ring Road to the manufacturing units in Sachin GIDC, is undergoing a digital revolution. Traditional wholesale manufacturers are launching proprietary Direct-to-Consumer (D2C) ethnic wear, premium cotton apparel, and designer saree brands to capture higher profit margins. Our specialised <strong className="font-semibold text-[#de5e18] tracking-tight">social media management company in Surat</strong> crafts high-velocity social commerce campaigns that scale these local brands into national market leaders. We script and shoot highly engaging Instagram Reels, Pinterest boards, and <a href="https://www.tiktok.com/business" target="_blank" rel="noopener noreferrer" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">TikTok</a>-style content that capture the vibrancy, embroidery details, and quality of your textiles. Through rigorous A/B testing of social ad creatives, custom landing pages, and lookalike audiences, we drive high-volume online sales while keeping customer acquisition costs (CAC) exceptionally low. By transforming traditional fabric production into an aspirational digital fashion brand, we help Surat&apos;s textile entrepreneurs dominate India&apos;s e-commerce landscape.
        </p>

        <h3 id="industrial-b2b-social-marketing" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Industrial B2B Social Marketing for Sachin & Pandesara GIDC Enterprises
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          The massive industrial clusters of Sachin GIDC, Pandesara GIDC, and the heavy manufacturing corridors of Hazira form the backbone of Surat&apos;s economic power. For these B2B enterprises, social media is not about chasing viral vanity metrics, but about proving supply chain reliability, technological scale, and regulatory compliance to national and international buyers. We design technical, highly informative content calendars that showcase your factory&apos;s automation, ISO certifications, safety standards, and raw material processing capacities. Our production crew visits your industrial facilities to capture high-definition, corporate-grade photography and video walkthroughs of your manufacturing processes. By distributing this professional content across LinkedIn, YouTube, and targeted industrial forums, we build credibility with procurement officers, corporate buyers, and distribution networks. This strategic B2B positioning establishes your manufacturing plant as a trusted industry leader, driving qualified commercial inquiries and streamlining your business-to-business sales pipeline.
        </p>

        <h3 id="vesu-piplod-real-estate-campaigns" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          High-Conversion Paid Social Funnels for Vesu & Piplod Real Estate
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          The premium residential corridors of Vesu, Piplod, and Adajan are witnessing a major boom in luxury high-rises and state-of-the-art commercial complexes. To capture the attention of high-net-worth individuals (HNIs) and local business magnates, real estate developers must move beyond traditional billboards to sophisticated digital lead generation. We build immersive, multi-platform paid social media campaigns featuring cinematic drone videos, virtual 3D walkthroughs, and elegant lifestyle reels. Our targeting strategies focus on affluent demographics, corporate leaders, and diamond merchants who have the capital and intent to invest in luxury properties. By emphasizing key local selling points, such as proximity to the Surat International Airport, premium schools, and the high-end retail hubs of Dumas Road, we build immediate brand desirability. We manage the entire lead lifecycle, ensuring that only verified prospects with validated phone numbers and budgets reach your sales team, maximizing booking conversions and accelerating sales velocity.
        </p>

        <h3 id="cinematic-content-surat-culture" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Cinematic Video Production Showcasing Surat’s Business Heritage
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          Surat&apos;s unique mercantile heritage, famously driven by the relentless entrepreneurial spirit of its citizens, demands localized storytelling that connects on a deep cultural level. The local consumer base responds passionately to brands that celebrate the city&apos;s legendary food culture, distinct Surati dialect, and grand celebrations of festivals like Navratri and Uttarayan. Our in-house creative production team designs custom video campaigns that blend these rich cultural themes with your modern enterprise objectives. We script and shoot highly engaging brand documentaries, behind-the-scenes stories, and interactive reels that highlight the human element of your business. Whether we are filming in the historical lanes of Gopipura or the ultra-modern offices of DREAM City, we ensure every frame is crafted with high-production value. This authentic, culturally resonant approach builds deep brand affinity and trust among local customers, making your company a beloved household name in Surat.
        </p>

        <h3 id="influencer-collaborations-surat-youth" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Strategic Influencer Collaborations with Surat’s Top Creators
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          Surat&apos;s young, aspirational consumer base is highly connected and heavily influenced by local lifestyle, fashion, and culinary creators who set regional trends. Brands looking to capture this demographic cannot rely on corporate statements; they must partner with creators who command high trust and engagement. Our agency curates customized influencer marketing programs, vetting creators from Adajan to Vesu to match your brand&apos;s values and target audience. We handle the entire collaboration process, from contract negotiations and creative direction to campaign tracking and performance analysis. By integrating your D2C fashion line, premium retail store, or luxury cafe naturally into local vlogs and trending reels, we drive immediate buzz. These campaigns generate high-quality organic traffic, boost retail store footfalls, and build long-term brand credibility among the tech-savvy youth of Surat.
        </p>

        <h3 id="online-reputation-management-surat" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Enterprise-Grade Online Reputation & Community Management
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          In Surat&apos;s tightly knit business community, where word-of-mouth is a primary driver of commerce, a brand&apos;s digital reputation can make or break its market share. Healthcare groups, large diamond conglomerates, and educational institutions require continuous social listening to manage public opinion and maintain customer trust. As a premier <strong className="font-semibold text-[#de5e18] tracking-tight">social media management company in Surat</strong>, we provide comprehensive, round-the-clock reputation management and community monitoring. We deploy enterprise-grade tracking software to monitor brand sentiment, comments, and customer reviews across all social channels in real-time. Our professional community managers respond to inquiries and resolve customer grievances with extreme speed and professionalism, defusing negative situations before they escalate. By proactively encouraging positive customer testimonials and building a supportive online community, we protect your brand equity and build lasting public goodwill.
        </p>

        <h3 id="why-choose-our-surat-social-agency" className="text-[22px] md:text-[28px] font-bold text-[#432d1c] mt-8 mb-4 font-sans scroll-mt-28">
          Why Choose Our Surat Social Media Management Agency
        </h3>
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#432d1c]/90 my-5 font-normal font-sans tracking-[0.01em]">
          Partnering with Southern Edge Marketing ensures your Surat-based business receives an elite, highly customized digital strategy that understands your specific industry vertical. We discard generic social media packages in favor of data-backed, conversion-focused campaigns that deliver tangible, bottom-line results for your business. Our local media teams conduct regular on-site shoots to keep your content authentic, while our performance marketers continuously optimize your paid social ad campaigns for maximum ROI. We measure success not by empty vanity metrics like likes, but by qualified B2B leads generated, diamond export inquiries received, and D2C sales closed. For enterprises aiming for complete digital dominance, we seamlessly integrate our social strategies with high-performance <Link href="/services/web-development/surat" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200"><Link href="/services/web-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">web development</Link> in Surat</Link> and scalable <Link href="/services/app-development/surat" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200"><Link href="/services/app-development" className="text-[#de5e18] hover:underline font-semibold transition-colors duration-200">app development</Link> in Surat</Link>. Let us transform your social media channels into a powerful engine of business growth and brand authority.
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
                &quot;Our diamond manufacturing firm needed to establish direct lines of communication with international boutique jewelry chains. Southern Edge Marketing built a comprehensive B2B LinkedIn strategy and created high-fidelity video content detailing our ethical sourcing and automated laser-cutting precision. In six months, we recorded a 38% increase in direct inquiries from European and American retailers, completely transforming our export pipeline.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Kirit Patel" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Kirit Patel</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Varachha Gems International</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[16px] text-black/80 leading-relaxed font-medium italic mb-4">
                &quot;Transitioning our traditional wholesale textile mill on Ring Road into a nationwide D2C saree brand was a huge challenge. Southern Edge Marketing managed our entire Instagram and Facebook advertising, creating visually stunning product Reels that highlighted our fabric&apos;s intricate weaving and embroidery. Our online store sales skyrocketed by 250% within four months, with a steady reduction in customer acquisition costs.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Anjali Shah" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Anjali Shah</p>
                  <p className="text-[12px] text-black/50 uppercase tracking-wide">Surat Silk Fab & D2C Apparel</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full clear-both pt-8 mt-8 border-t border-black/10">
          <FaqAccordion faqs={[
            {
              "question": "How can social media management benefit a wholesale textile manufacturer in Ring Road or Sachin GIDC looking to go D2C?",
              "answer": "We specialize in building direct-to-consumer pipelines for traditional manufacturers. We manage the setup, creative production (reels, styling guides, product shoots), and high-performance Meta ad campaigns. This helps you leverage your low manufacturing cost to build high-margin digital brands, selling directly to customers across India and eliminating wholesale middlemen."
            },
            {
              "question": "Can you help Surat Diamond Bourse members target international jewelry buyers?",
              "answer": "Yes, absolutely. We design global B2B social campaigns, primarily on LinkedIn and Instagram, to highlight your ethical sourcing, certified diamonds (GIA/IGI), and manufacturing capabilities. We use hyper-targeted advertising to place your content directly in front of boutique jewelry owners, retail chain buyers, and luxury designers in key global markets like Antwerp, New York, London, and Dubai."
            },
            {
              "question": "How does your team handle visual content creation and shoots for businesses in Surat?",
              "answer": "We have a local, high-end content creation team in Surat that conducts regular on-site photography and videography shoots. Whether it is a diamond cutting facility in Katargam, a textile mill in Pandesara GIDC, a real estate project site in Vesu, or a retail store in Adajan, we capture premium cinematic video, customer reviews, and product shots to keep your social channels highly engaging and authentic."
            },
            {
              "question": "What platforms do you recommend for high-end real estate projects in Vesu and Piplod?",
              "answer": "For luxury real estate in Surat, we heavily prioritize Meta platforms (Instagram and Facebook) and YouTube. We create cinematic drone walkthroughs, immersive virtual tours, and highlight key localized amenities (connectivity, lifestyle, schools). By targeting high-income demographics, local business owners, and non-resident Gujaratis (NRIs), we generate verified leads to accelerate sales velocity."
            },
            {
              "question": "How do you integrate social media management with existing web or app development projects?",
              "answer": "We ensure a seamless conversion funnel by aligning social media campaigns with high-performance web landing pages and custom apps. If we are developing a B2B ordering portal for your textile firm or a diamond catalog app, we design social media campaigns that drive targeted traffic directly to these conversion-optimized portals, maximizing your digital investment."
            },
            {
              "question": "How do you incorporate local Surati culture and entrepreneurial values into the brand copy?",
              "answer": "We customize the content's voice to reflect Surat's vibrant business culture, mercantile pride, and distinct regional dialect nuances. Incorporating local references, festive highlights (like Navratri garba or Uttarayan kite flying), and local food traditions (Ghari, Locho) helps build strong emotional resonance and community loyalty with the local population."
            },
            {
              "question": "How do you measure the return on investment (ROI) for Surat-based retail and B2B brands?",
              "answer": "We track hard business metrics rather than vanity numbers. For D2C brands, we monitor direct e-commerce sales, return on ad spend (ROAS), and customer acquisition cost (CAC). For B2B exporters and manufacturers, we track qualified lead generation, catalog downloads, direct WhatsApp inquiries, and wholesale trade applications, providing you with transparent monthly performance reports."
            }
          ]} />
        </div>
      </ServiceLayout>
    </div>
  );
}
