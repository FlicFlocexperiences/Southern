import type { Metadata } from "next";
import Script from "next/script";
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
  description: "Southern Edge Marketing turns attention into action, strategy, design, development, and marketing that actually drives business. Trusted by 100+ businesses across India. 5.0 rated.",
  openGraph: {
    title: "Southern Edge Marketing | Digital Marketing Agency in Delhi, India",
    description: "Southern Edge Marketing turns attention into action, strategy, design, development, and marketing that actually drives business. Trusted by 100+ businesses across India. 5.0 rated.",
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
    title: "Southern Edge Marketing",
    description: "Digital Marketing Agency in Delhi, India",
    images: ["/LOGO_Final.svg"],
  },
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
  "logo": "https://southernedgemarketing.com/LOGO_Final.svg",
  "image": "https://southernedgemarketing.com/LOGO_Final.svg",
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
      className={`${onestSans.variable} ${geistMono.variable} ${playball.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2511912949279933');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2511912949279933&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <AuthProvider>
          {children}
          <WhatsappWidget />
        </AuthProvider>
      </body>
    </html>
  );
}
