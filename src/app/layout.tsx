import type { Metadata } from "next";
import { Onest, Geist_Mono, Playball } from "next/font/google";
import "./globals.css";

const onestSans = Onest({
  variable: "--font-onest-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
  metadataBase: new URL("https://southernedgemarketing.com"),
  title: {
    default: "Digital Marketing Agency Delhi | Southern Edge",
    template: "%s | Southern Edge Marketing",
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
    url: "https://southernedgemarketing.com",
    siteName: "Southern Edge Marketing",
    images: [{
      url: "/LOGO_Final.svg",
      width: 1200,
      height: 630,
    }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency Delhi | Southern Edge",
    description: "Digital Marketing Agency in Delhi, India",
    images: ["/LOGO_Final.svg"],
  },
};

import { AuthProvider } from "@/components/AuthProvider";
import { WhatsappWidget } from "@/components/whatsapp-widget";
import { Analytics } from "@/components/Analytics";

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "name": "Southern Edge Marketing",
  "url": "https://southernedgemarketing.com",
  "logo": "https://southernedgemarketing.com/LOGO_Final.svg",
  "image": "https://southernedgemarketing.com/LOGO_Final.svg",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "100"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${onestSans.variable} ${geistMono.variable} ${playball.variable} antialiased`}
    >
      <head>
        <meta name="facebook-domain-verification" content="g36uoug9vc4tadxt4aemu2cc5jyqza" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Analytics />
        <AuthProvider>
          {children}
          <WhatsappWidget />
        </AuthProvider>
      </body>
    </html>
  );
}
