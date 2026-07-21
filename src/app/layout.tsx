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
    default: "Southern Edge Marketing | Digital Marketing Agency in Delhi, India",
    template: "%s | Southern Edge Marketing",
  },
  description: "Southern Edge Marketing turns attention into action — strategy, design, development, and marketing that actually drives business. Trusted by 100+ businesses across India. 5.0 rated.",
  alternates: {
    canonical: "/",
  },
};

import { AuthProvider } from "@/components/AuthProvider";
import { WhatsappWidget } from "@/components/whatsapp-widget";

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "Southern Edge Marketing",
  "url": "https://southernedgemarketing.com",
  "logo": "https://southernedgemarketing.com/layer-MC0.svg",
  "image": "https://southernedgemarketing.com/layer-MC0.svg",
  "telephone": "+919899238237",
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
      className={`${onestSans.variable} ${geistMono.variable} ${playball.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          {children}
          <WhatsappWidget />
        </AuthProvider>
      </body>
    </html>
  );
}
