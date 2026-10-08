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

import { cleanInternalNofollow, calibrateMetaDescription, calibrateMetaTitle, simplifyReadabilityText } from "@/lib/seo-utils";

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

      const rawDescription = data.metaDescription || data.excerpt || data.subtitle || "";
      const cleanedExcerpt = stripHtml(rawDescription);

      return {
        slug: data.slug || docSnap.id,
        title: data.title || "Untitled",
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        excerpt: cleanedExcerpt,
        content: cleanInternalNofollow(data.description || ""), // Clean internal nofollow links
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
    return {
      ...staticBlog,
      content: cleanInternalNofollow(staticBlog.content || ""),
    };
  }

  return null;
});

const blogMetaTitleMap: Record<string, string> = {
  "chatgpt-ads-india-guide": "ChatGPT Ads in India: Full Guide",
  "on-page-seo-vs-off-page-seo-guide": "On-Page vs Off-Page SEO: 2026 Guide",
  "best-shopify-agencies-uae": "Best Shopify Agencies in UAE (2026)",
  "understanding-color-theory-in-digital-branding": "Color Theory in Digital Branding",
  "the-importance-of-mobile-first-design-in-2025": "Importance of Mobile Design in 2025",
  "how-ux-writing-shapes-user-behavior": "How UX Writing Shapes Conversion",
  "the-rise-of-minimalist-web-design": "Minimalist Web Design & Speed",
  "essential-typography-rules-for-readability": "Typography Rules for Readability",
  "best-website-developer-in-uk": "Best Website Developer in the UK",
  "shopify-website-vs-custom-coded-website": "Shopify vs Custom Coded Websites",
  "website-maintenance-cost-in-india-monthly": "Website Maintenance Cost in India",
  "how-to-build-a-shopify-website": "How to Build a Shopify Website",
  "top-15-shopify-clothing-stores-in-india": "Top 15 Shopify Clothing Stores in India",
  "best-digital-marketing-company-gurgaon-gurugram": "Digital Marketing Company in Gurgaon",
  "wordpress-vs-shopify-delhi-small-businesses": "WordPress vs Shopify: Delhi Businesses",
};

const blogMetaDescriptionMap: Record<string, string> = {
  "chatgpt-ads-india-guide": "Discover how to leverage ChatGPT Ads for Indian markets. Master AI ad formats, audience targeting, ROI metrics, and conversion tactics to scale in India.",
  "on-page-seo-vs-off-page-seo-guide": "Learn the key differences between on-page and off-page SEO with actionable checklists, ranking factors, and proven strategies to increase search traffic.",
  "best-shopify-agencies-uae": "Discover the top-rated Shopify and Shopify Plus agencies in UAE for 2026. Compare features, pricing, luxury design expertise, and custom app capabilities.",
  "understanding-color-theory-in-digital-branding": "Discover how color choices affect human psychology, brand recognition, and conversions across digital storefronts and web apps. Explore our guide.",
  "the-importance-of-mobile-first-design-in-2025": "Explore why designing for mobile screens first revolutionized user experience, Core Web Vitals speed, and organic search engine rankings in 2026.",
  "how-ux-writing-shapes-user-behavior": "Discover how microcopy on buttons, labels, and forms guides user decisions, eliminates interface friction, and increases website conversion rates.",
  "the-rise-of-minimalist-web-design": "Learn how minimalist web design eliminates visual clutter, boosts Core Web Vitals page speed, and keeps visitors focused on high-value conversions.",
  "essential-typography-rules-for-readability": "Master line heights, letter spacing, and font hierarchies to ensure maximum content readability, lower bounce rates, and improve user engagement.",
  "best-website-developer-in-uk": "Looking for the best website developer in the UK? Discover top custom web design, Next.js engineering, and high-converting e-commerce development.",
  "shopify-website-vs-custom-coded-website": "Shopify vs custom coded website: Compare costs, scalability, performance, SEO flexibility, and maintenance to choose the best option for your brand.",
  "website-maintenance-cost-in-india-monthly": "Explore monthly website maintenance costs in India for 2026. Learn about security updates, server upkeep, CMS patches, and support pricing packages.",
  "how-to-build-a-shopify-website": "Step-by-step guide on how to build a high-converting Shopify website in 2026. Learn theme setup, product catalog optimization, and payment gateways.",
  "top-15-shopify-clothing-stores-in-india": "Explore the top 15 Shopify clothing and fashion stores in India. Discover modern UI/UX design, mobile commerce tactics, and brand growth strategies.",
  "best-digital-marketing-company-gurgaon-gurugram": "Discover the best digital marketing company in Gurgaon (Gurugram). Drive scalable business growth with forensic SEO, paid performance, and web design.",
  "wordpress-vs-shopify-delhi-small-businesses": "WordPress vs Shopify for Delhi small businesses: Compare setup costs, ease of use, e-commerce features, and SEO capabilities to make the best choice.",
};

function getCalibratedBlogMeta(slug: string, blog: Blog) {
  const metaTitleCandidate = blogMetaTitleMap[slug] || blog.metaTitle || blog.title;
  const cleanTitle = calibrateMetaTitle(metaTitleCandidate, blog.title);

  const rawDescCandidate = blogMetaDescriptionMap[slug] || blog.metaDescription || blog.excerpt;
  const cleanDescription = calibrateMetaDescription(rawDescCandidate, blog.title);

  return { cleanTitle, cleanDescription };
}

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

  const { cleanTitle, cleanDescription } = getCalibratedBlogMeta(slug, blog);

  return {
    title: cleanTitle,
    description: cleanDescription,
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
      description: cleanDescription,
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
      description: cleanDescription,
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

  const { cleanDescription } = getCalibratedBlogMeta(slug, blog);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: blog.title,
        description: cleanDescription,
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
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.southernedgemarketing.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogs",
            item: "https://www.southernedgemarketing.com/blogs",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
            item: `https://www.southernedgemarketing.com/blogs/${slug}`,
          },
        ],
      },
      ...(blog.faqs && blog.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: blog.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: simplifyReadabilityText(faq.answer),
                },
              })),
            },
          ]
        : []),
    ],
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
