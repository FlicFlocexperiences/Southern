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
import { ConsentBanner } from "@/components/consent-banner";

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
        "url": `${SITE_URL}/logo.png`,
        "caption": "Southern Edge Marketing logo"
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
          "streetAddress": "Block G, Sushant Lok 2, Sector 57",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122011",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        }
      ],
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Australia" },
        { "@type": "Country", "name": "Canada" }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.439158,
        "longitude": 77.0909696
      },
      "hasMap": "https://share.google/93z22o6RCevNs5X8T",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+918700901769",
        "email": "info@southernedgemarketing.com",
        "contactType": "sales",
        "availableLanguage": ["English", "Hindi"],
        "url": `${SITE_URL}/contact`
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital marketing and development services",
        "itemListElement": [
          ["SEO and AI search optimization", "/services/seo"],
          ["Meta Ads management", "/services/meta-ads"],
          ["Website development", "/services/web-development"],
          ["Shopify development", "/services/shopify-agency-dubai"],
          ["Mobile app development", "/services/app-development"],
          ["Social media management", "/services/social-media-management"],
          ["Branding", "/services/branding"],
          ["Influencer marketing", "/services/influencer-marketing"]
        ].map(([name, path]) => ({
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": name, "url": `${SITE_URL}${path}` }
        }))
      },
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
        "https://www.facebook.com/southernedgemarketing",
        "https://share.google/93z22o6RCevNs5X8T"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "name": "Southern Edge Marketing",
      "url": SITE_URL,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "inLanguage": "en"
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
        <ConsentBanner />
        <AuthProvider>
          {children}
          <WhatsappWidget />
        </AuthProvider>
      </body>
    </html>
  );
}
