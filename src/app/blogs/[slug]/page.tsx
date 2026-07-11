import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { Cta } from "@/components/cta";
import { Blog } from "@/data/blogs";
import { BlogContent } from "./BlogContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getLiveBlog(slug: string): Promise<Blog | null> {
  try {
    const q = query(collection(db, "blogs"), where("slug", "==", slug));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    const data = doc.data();

    return {
      slug: data.slug || doc.id,
      title: data.title || "Untitled",
      excerpt: data.subtitle || data.metaDescription || "",
      content: data.description || "", // Mapping description to content for BlogContent
      publishedAt: data.date || new Date().toISOString().split('T')[0],
      category: "MARKETING",
      image: data.image || "/photoshoot.jpg",
    };
  } catch (e) {
    console.error("Error fetching blog:", e);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getLiveBlog(slug);
  
  if (!blog) return {};
  return {
    title: `${blog.title} | Southern Marketing`,
    description: blog.excerpt,
  };
}

export default async function BlogSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getLiveBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-[#fffff0]">
      {/* Navigation Headers */}
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      <main className="w-full pt-32 lg:pt-40 px-6 lg:px-[90px] pb-24">
        <BlogContent blog={blog} />
      </main>

      {/* CTA and Footers */}
      <div style={{ zoom: 0.8 }}><Cta /></div>
      <div style={{ zoom: 0.8 }}>
        <div className="block md:hidden"><MobileFooter /></div>
        <div className="hidden md:block"><DesktopFooter /></div>
      </div>
    </div>
  );
}
