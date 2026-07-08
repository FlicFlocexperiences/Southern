import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { Cta } from "@/components/cta";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { BlogContent } from "./BlogContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | Southern Marketing`,
    description: blog.excerpt,
  };
}

export default async function BlogSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

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
