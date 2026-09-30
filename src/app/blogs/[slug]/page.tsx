import { cache } from "react";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { Cta } from "@/components/cta";
import { Blog, blogs as staticBlogs, getBlogBySlug } from "@/data/blogs";
import { BlogContent } from "./BlogContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const allBlogSlugs = new Set<string>();
  staticBlogs.forEach((b) => allBlogSlugs.add(b.slug));

  try {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    querySnapshot.forEach((docSnap) => {
      const slug = docSnap.data().slug || docSnap.id;
      if (slug) allBlogSlugs.add(slug);
    });
  } catch (error) {
    console.error("Error fetching blog slugs for static params:", error);
  }

  return Array.from(allBlogSlugs).map((slug) => ({ slug }));
}

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
        excerpt: stripHtml(data.subtitle || data.metaDescription || data.excerpt || ""),
        content: data.description || "", // Mapping description to content for BlogContent
        publishedAt: data.date || new Date().toISOString().split('T')[0],
        category: data.category || "MARKETING",
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

const blogMetaTitleMap: Record<string, string> = {
  "understanding-color-theory-in-digital-branding": "Color Theory in Digital Branding",
  "the-importance-of-mobile-first-design-in-2025": "Importance of Mobile Design in 2025",
  "best-website-developer-in-uk": "Best Website Developer in the UK",
  "shopify-website-vs-custom-coded-website": "Shopify vs Custom Coded Websites",
  "website-maintenance-cost-in-india-monthly": "Website Maintenance Cost in India",
  "how-to-build-a-shopify-website": "How to Build a Shopify Website",
  "top-15-shopify-clothing-stores-in-india": "Top 15 Shopify Clothing Stores in India",
  "best-digital-marketing-company-gurgaon-gurugram": "Digital Marketing Company in Gurgaon",
  "wordpress-vs-shopify-delhi-small-businesses": "WordPress vs Shopify: Delhi Businesses",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getLiveBlog(slug);

  if (!blog) {
    return {};
  }

  const blogImage = blog.image?.startsWith("http")
    ? blog.image
    : blog.image
    ? `https://www.southernedgemarketing.com${blog.image.startsWith("/") ? "" : "/"}${blog.image}`
    : "https://www.southernedgemarketing.com/photoshoot.jpg";

  // Clean title: check metaTitle, slug map, or remove pre-existing agency brand suffix
  const cleanTitle = blog.metaTitle || blogMetaTitleMap[slug] || blog.title.replace(/\s*\|\s*Southern Edge.*$/i, '').trim();

  return {
    title: cleanTitle,
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
      title: cleanTitle,
      description: blog.excerpt,
      url: `https://www.southernedgemarketing.com/blogs/${slug}`,
      type: "article",
      publishedTime: blog.publishedAt,
      authors: [blog.author || "Southern Marketing Team"],
      images: [
        {
          url: blogImage,
          width: 1200,
          height: 630,
          alt: cleanTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
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
    ? `https://www.southernedgemarketing.com${blog.image.startsWith("/") ? "" : "/"}${blog.image}`
    : "https://www.southernedgemarketing.com/photoshoot.jpg";

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
        url: "https://www.southernedgemarketing.com/LOGO_Final.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.southernedgemarketing.com/blogs/${slug}`,
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
