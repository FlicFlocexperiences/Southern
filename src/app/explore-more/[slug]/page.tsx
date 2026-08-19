import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { Cta } from "@/components/cta";
import { articles, getArticleBySlug } from "@/data/articles";
import { ArticleContent } from "./ArticleContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    alternates: { canonical: `/explore-more/${slug}` },
    title: `${article.title} | Southern Marketing`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author || "Southern Engineering Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": article.title,
        "description": article.excerpt,
        "author": {
          "@type": "Organization",
          "name": article.author || "Southern Marketing",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Southern Marketing",
        },
        "datePublished": article.publishedAt,
      },
      ...(article.faqs && article.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "mainEntity": article.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="w-full min-h-screen bg-[#f2decc]">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Headers */}
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      <main className="w-full pt-32 lg:pt-40 pb-24">
        <ArticleContent article={article} />
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
