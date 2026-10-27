import type { Metadata } from "next";
import { Onest, Geist_Mono, Playball } from "next/font/google";
import "./globals.css";

const onestSans = Onest({
  variable: "--font-onest-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playball = Playball({
  variable: "--font-playball",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.southernedgemarketing.com"),
  title: {
    default: "Digital Marketing Agency Delhi | Southern Edge",
    template: "%s | Southern Edge",
  },
  description: "Southern Edge Marketing drives business with strategy, design, development, and marketing. Trusted by 100+ businesses across India. 5.0 rated.",
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
    title: "Digital Marketing Agency Delhi | Southern Edge",
    description: "Southern Edge Marketing drives business with strategy, design, development, and marketing. Trusted by 100+ businesses across India. 5.0 rated.",
    url: "https://www.southernedgemarketing.com",
    siteName: "Southern Edge Marketing",
    images: [
      {
        url: "https://www.southernedgemarketing.com/og-image.jpg",
        secureUrl: "https://www.southernedgemarketing.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Southern Edge Marketing",
        type: "image/jpeg",
      },
      {
        url: "https://www.southernedgemarketing.com/og-image.png",
        secureUrl: "https://www.southernedgemarketing.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Southern Edge Marketing",
        type: "image/png",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  verification: {
    other: {
      "facebook-domain-verification": "g36uoug9vc4tadxt4aemu2cc5jyqza",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency Delhi | Southern Edge",
    description: "Southern Edge Marketing drives business with strategy, design, development, and marketing. Trusted by 100+ businesses across India. 5.0 rated.",
    images: ["https://www.southernedgemarketing.com/og-image.jpg"],
  },
};

import Script from "next/script";
import { AuthProvider } from "@/components/AuthProvider";
import { WhatsappWidget } from "@/components/whatsapp-widget";
import { Analytics } from "@/components/Analytics";

const SITE_URL = "https://www.southernedgemarketing.com";

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      "name": "Southern Edge Marketing",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      },
      "image": `${SITE_URL}/logo.png`,
      "description": "Digital marketing and web development agency in Delhi and Dubai offering SEO, Meta and Google Ads, Shopify and Next.js websites, mobile app development, branding and social media management.",
      "founder": { "@id": `${SITE_URL}/authors/ameet-nangia#person` },
      "telephone": "+918700901769",
      "email": "info@southernedgemarketing.com",
      "priceRange": "$$",
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Delhi",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        }
      ],
      "areaServed": ["IN", "AE"],
      "knowsAbout": [
        "Search engine optimization",
        "Generative engine optimization",
        "Meta Ads",
        "Google Ads",
        "Shopify development",
        "Next.js web development",
        "Mobile app development",
        "Branding",
        "Social media management"
      ],
      "sameAs": [
        "https://www.linkedin.com/company/southernedgemarketing/",
        "https://www.instagram.com/southernedgemarketing/",
        "https://www.facebook.com/southernedgemarketing"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "name": "Southern Edge Marketing",
      "url": SITE_URL,
      "publisher": { "@id": `${SITE_URL}/#organization` }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <html
      lang="en"
      className={`${onestSans.variable} ${geistMono.variable} ${playball.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        {recaptchaSiteKey && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
            strategy="afterInteractive"
          />
        )}
        <Analytics />
        <AuthProvider>
          {children}
          <WhatsappWidget />
        </AuthProvider>
      </body>
    </html>
  );
}
