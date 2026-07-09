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
  title: "Blogs | Southern Marketing",
  description: "Read our latest articles and insights at Southern Marketing.",
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
      return {
        title: data.title || "Untitled",
        category: "MARKETING", // Default category for now
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
      <div className="block md:hidden w-full min-h-screen bg-[#fffff0]">
        <MobileNav />
        <MobileBlogs blogs={fetchedBlogs} />
        <div style={{ zoom: 0.8 }}><Cta /></div>
        <div style={{ zoom: 0.8 }}><MobileFooter /></div>
      </div>

      {/* Desktop Version - Visible only on desktop screens (>= 768px) */}
      <div className="hidden md:block w-full min-h-screen bg-[#fffff0]">
        <DesktopNav />
        <DesktopBlogs blogs={fetchedBlogs} />
        <div style={{ zoom: 0.8 }}><Cta /></div>
        <div style={{ zoom: 0.8 }}><DesktopFooter /></div>
      </div>
    </>
  );
}
