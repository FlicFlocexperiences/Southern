import { cache } from "react";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { Cta } from "@/components/cta";
import { Blog, getBlogBySlug } from "@/data/blogs";
import { BlogContent } from "./BlogContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const stripHtml = (html: string) => html ? html.replace(/<[^>]+>/g, '') : '';

const getLiveBlog = cache(async (slug: string): Promise<Blog | null> => {
  try {
    const q = query(collection(db, "blogs"), where("slug", "==", slug));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const docSnap = snapshot.docs[0];
      const data = docSnap.data();

      // Fetch FAQs and Reviews in parallel
      const [faqsSnapshot, reviewsSnapshot] = await Promise.all([
        getDocs(collection(db, "blogs", docSnap.id, "faqs")),
        getDocs(collection(db, "blogs", docSnap.id, "reviews"))
      ]);

      const faqs = faqsSnapshot.docs.map(faqDoc => faqDoc.data() as any);
      const reviews = reviewsSnapshot.docs.map(reviewDoc => reviewDoc.data() as any);

      return {
        slug: data.slug || docSnap.id,
        title: data.title || "Untitled",
        excerpt: stripHtml(data.subtitle || data.metaDescription || ""),
        content: data.description || "", // Mapping description to content for BlogContent
        publishedAt: data.date || new Date().toISOString().split('T')[0],
        category: "MARKETING",
        image: data.image || "/photoshoot.jpg",
        faqs,
        reviews,
        author: data.author || "Southern Marketing Team"
      };
    }
  } catch (e) {
    console.error("Error fetching blog from Firestore:", e);
  }

  // Fallback to static blogs in src/data/blogs.ts
  const staticBlog = getBlogBySlug(slug);
  if (staticBlog) {
    return staticBlog;
  }

  return null;
});

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getLiveBlog(slug);

  if (!blog) {
    // Don't set noindex here — the page component calls notFound() which
    // returns a proper 404 status that Google already handles correctly.
    // An explicit noindex was causing valid blog pages to be excluded
    // from Google's index when Firestore had transient failures.
    return {};
  }

  const blogImage = blog.image?.startsWith("http")
    ? blog.image
    : blog.image
    ? `https://southernedgemarketing.com${blog.image.startsWith("/") ? "" : "/"}${blog.image}`
    : "https://southernedgemarketing.com/photoshoot.jpg";

  return {
    title: `${blog.title}`,
    description: blog.excerpt,
    alternates: {
      canonical: `/blogs/${slug}`,
    },
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
      title: `${blog.title} | Southern Edge Marketing`,
      description: blog.excerpt,
      url: `https://southernedgemarketing.com/blogs/${slug}`,
      type: "article",
      publishedTime: blog.publishedAt,
      authors: [blog.author || "Southern Marketing Team"],
      images: [
        {
          url: blogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Southern Edge Marketing`,
      description: blog.excerpt,
      images: [blogImage],
    },
  };
}

export default async function BlogSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getLiveBlog(slug);

  if (!blog) {
    notFound();
  }

  const blogImage = blog.image?.startsWith("http")
    ? blog.image
    : blog.image
    ? `https://southernedgemarketing.com${blog.image.startsWith("/") ? "" : "/"}${blog.image}`
    : "https://southernedgemarketing.com/photoshoot.jpg";

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: blogImage,
    datePublished: blog.publishedAt,
    author: {
      "@type": "Person",
      name: blog.author || "Southern Marketing Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Southern Edge Marketing",
      logo: {
        "@type": "ImageObject",
        url: "https://southernedgemarketing.com/LOGO_Final.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://southernedgemarketing.com/blogs/${slug}`,
    },
  };

  return (
    <div className="w-full min-h-screen bg-[#f2decc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      {/* Navigation Headers */}
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      <main className="w-full pt-32 lg:pt-40 pb-24">
        <BlogContent blog={blog} />
      </main>

      {/* CTA and Footers */}
      <div className="md:[zoom:0.8]"><Cta /></div>
      <div className="md:[zoom:0.8]">
        <div className="block md:hidden"><MobileFooter /></div>
        <div className="hidden md:block"><DesktopFooter /></div>
      </div>
    </div>
  );
}
