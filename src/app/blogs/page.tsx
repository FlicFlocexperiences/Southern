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
  title: "Blogs | Southern Edge Marketing",
  description: "Read our latest articles and insights at Southern Edge Marketing.",
  openGraph: {
    title: "Blogs | Southern Edge Marketing",
    description: "Read our latest articles and insights at Southern Edge Marketing.",
  },
};

export const dynamic = 'force-dynamic'; // Ensures this page is server-rendered dynamically
export const revalidate = 0; // Disable caching

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
      
      return {
        title: data.title || "Untitled",
        category: data.category || "Article",
        excerpt: cleanExcerpt.trim(),
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
        <div><Cta /></div>
        <div><MobileFooter /></div>
      </div>

      {/* Desktop Version - Visible only on desktop screens (>= 768px) */}
      <div className="hidden md:block w-full min-h-screen bg-[#f2decc]">
        <DesktopNav />
        <DesktopBlogs blogs={fetchedBlogs} />
        <div style={{ zoom: 0.8 }}><Cta /></div>
        <div style={{ zoom: 0.8 }}><DesktopFooter /></div>
      </div>
    </>
  );
}
