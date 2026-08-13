import { MobileNav } from "@/components/mobile-nav";
import { MobileBlogs } from "@/components/mobile-blogs";
import { MobileFooter } from "@/components/mobile-footer";

import { DesktopNav } from "@/components/desktop-nav";
import { DesktopBlogs } from "@/components/desktop-blogs";
import { DesktopFooter } from "@/components/desktop-footer";

import { Cta } from "@/components/cta";

import { Metadata } from "next";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const metadata: Metadata = {
  alternates: {
    canonical: '/blogs',
  },
  title: "Digital Marketing & Web Design Blog | Southern Edge",
  description: "Read the Southern Edge digital marketing agency blog. Discover actionable SEO strategy tips, web design insights, and business growth tactics today.",
  openGraph: {
    title: "Digital Marketing & Web Design Blog | Southern Edge",
    description: "Read the Southern Edge digital marketing agency blog. Discover actionable SEO strategy tips, web design insights, and business growth tactics today.",
  },
};

export const revalidate = 3600; // Cache for 1 hour
const stripHtml = (html: string) => html ? html.replace(/<[^>]+>/g, '') : '';

function SeoContent() {
  return (
    <section className="px-6 py-12 md:pt-12 md:pb-24 max-w-7xl mx-auto text-[#1a1a1a]">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Expert Digital Marketing Blog</h1>
      <p className="mb-8 md:text-lg leading-relaxed max-w-4xl">
        Welcome to the Southern Edge digital marketing agency blog. Our industry experts share proven SEO strategy tips, modern web design insights, and effective digital marketing tactics. We focus on giving you the knowledge needed to stay competitive. Whether you want custom website design advice or local SEO best practices, our detailed articles provide real value. Learn how to optimize your online presence and reach your target audience more effectively.
      </p>

      <h2 className="text-2xl md:text-4xl font-bold mb-6">Actionable SEO Strategy Tips</h2>
      <p className="mb-8 md:text-lg leading-relaxed max-w-4xl">
        A successful online presence requires more than just good looks. Our web design insights show you how to build fast and engaging sites. We pair this with deep dives into technical search engine optimization. You will find clear guides on how a tailored SEO strategy increases organic traffic. Our team breaks down complex digital marketing concepts into steps you can actually use.
      </p>

      <h3 className="text-xl md:text-3xl font-bold mb-6">Driving Your Business Growth</h3>
      <p className="md:text-lg leading-relaxed max-w-4xl">
        Our goal is to share reliable business growth tips for modern brands. Every post on our digital marketing agency blog is crafted to help you succeed. Discover how professional web design and targeted SEO campaigns can transform your revenue. Dive into our latest resources and start building a stronger digital footprint today.
      </p>
    </section>
  );
}

export default async function BlogsPage() {
  let fetchedBlogs: any[] = [];

  try {
    const blogsQuery = query(collection(db, "blogs"), orderBy("created", "desc"));
    const snapshot = await getDocs(blogsQuery);

    fetchedBlogs = snapshot.docs.map(doc => {
      const data = doc.data();
      const rawExcerpt = data.excerpt || data.description || "";
      // Remove H2 and H3 tags and their content completely
      let cleanExcerpt = rawExcerpt.replace(/<h[23][^>]*>[\s\S]*?<\/h[23]>/gi, "");
      // Strip out all other HTML tags
      cleanExcerpt = cleanExcerpt.replace(/<[^>]+>/g, "");
      // Decode HTML entities
      cleanExcerpt = cleanExcerpt
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
      const trimmedExcerpt = cleanExcerpt.trim();
      const truncatedExcerpt = trimmedExcerpt.length > 200 
        ? trimmedExcerpt.substring(0, 200) + "..." 
        : trimmedExcerpt;

      return {
        title: data.title || "Untitled",
        category: data.category || "Article",
        excerpt: truncatedExcerpt,
        slug: data.slug || doc.id,
        image: data.image || "/photoshoot.jpg", // Default image if missing
        date: data.date || new Date().toISOString().split('T')[0],
      };
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <>
      {/* Mobile Version - Visible only on mobile screens (< 768px) */}
      <div className="block md:hidden w-full min-h-screen bg-[#f2decc]">
        <MobileNav />
        <MobileBlogs blogs={fetchedBlogs} />
        <SeoContent />
        <div><Cta /></div>
        <div><MobileFooter /></div>
      </div>

      {/* Desktop Version - Visible only on desktop screens (>= 768px) */}
      <div className="hidden md:block w-full min-h-screen bg-[#f2decc]">
        <DesktopNav />
        <DesktopBlogs blogs={fetchedBlogs} />
        <SeoContent />
        <div style={{ zoom: 0.8 }}><Cta /></div>
        <div style={{ zoom: 0.8 }}><DesktopFooter /></div>
      </div>
    </>
  );
}
