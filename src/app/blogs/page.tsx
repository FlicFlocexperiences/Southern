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
  title: "Digital Marketing & Web Design Blog",
  description: "Read the Southern Edge digital marketing agency blog. Discover actionable SEO strategy tips, web design insights, and business growth tactics today.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert Digital Marketing Blog</h2>
      <p className="mb-8 md:text-lg leading-relaxed max-w-4xl">
        Welcome to the Southern Edge digital marketing blog. Our team shares practical SEO tips, web design insights, and growth advice. We focus on giving you clear steps to stay ahead. Whether you need custom web design tips or local SEO guides, our articles provide real value. Learn how to build a faster website and reach more buyers online.
      </p>

      <h3 className="text-2xl md:text-4xl font-bold mb-6">Actionable SEO Strategy Tips</h3>
      <p className="mb-8 md:text-lg leading-relaxed max-w-4xl">
        A great website needs speed and clarity. Our design guides show you how to build fast and helpful user experiences. We pair this with clear advice on search optimization. You will find straightforward steps to grow organic search traffic and turn visitors into customers.
      </p>

      <h3 className="text-xl md:text-3xl font-bold mb-6">Driving Your Business Growth</h3>
      <p className="md:text-lg leading-relaxed max-w-4xl">
        We share reliable growth tips for ambitious brands. Every post on our blog is written to help your business win. Learn how custom web development and targeted SEO can grow your revenue. Explore our latest guides and start building a stronger digital footprint today.
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
      // Remove all heading tags (H1-H6) and their content completely
      let cleanExcerpt = rawExcerpt.replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi, "");
      // Strip out all other HTML tags
      cleanExcerpt = stripHtml(cleanExcerpt);
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
        title: stripHtml(data.title || "Untitled"),
        category: stripHtml(data.category || "Article"),
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
    <div className="w-full min-h-screen bg-[#f2decc]">
      {/* Navigation */}
      <div className="hidden md:block"><DesktopNav /></div>
      <div className="block md:hidden"><MobileNav /></div>

      {/* Blogs Content */}
      <div className="hidden md:block"><DesktopBlogs blogs={fetchedBlogs} /></div>
      <div className="block md:hidden"><MobileBlogs blogs={fetchedBlogs} /></div>

      {/* Shared SEO Content & CTA */}
      <SeoContent />
      <div className="md:[zoom:0.8]"><Cta /></div>

      {/* Footer */}
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopFooter /></div>
      <div className="block md:hidden"><MobileFooter /></div>
    </div>
  );
}
