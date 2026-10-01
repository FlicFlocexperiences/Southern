/**
 * Intrinsic image dimensions registry for SEO, CLS prevention, and performance.
 * All dimensions reflect the native pixel aspect ratio and sizes of images in /public and dynamic sources.
 */

export interface ImageSize {
  width: number;
  height: number;
}

export const KNOWN_IMAGE_DIMENSIONS: Record<string, ImageSize> = {
  // Integrations
  "/integrations/google.png": { width: 56, height: 56 },
  "/integrations/stripe.png": { width: 85, height: 37 },
  "/integrations/shopify.svg": { width: 100, height: 100 },
  "/integrations/zapier.png": { width: 56, height: 58 },
  "/integrations/openai.png": { width: 59, height: 60 },
  "/integrations/meta.png": { width: 84, height: 84 },
  "/tik-tok_1.svg": { width: 512, height: 512 },
  "/integrations/razorpay.png": { width: 112, height: 25 },
  "/integrations/sheets.png": { width: 65, height: 65 },
  "/integrations/gmail.png": { width: 65, height: 56 },
  "/integrations/google-calendar.png": { width: 60, height: 60 },
  "/integrations/gemini.png": { width: 68, height: 70 },
  "/integrations/snapchat.png": { width: 192, height: 192 },
  "/integrations/payu.png": { width: 180, height: 135 },
  "/integrations/whatsapp.png": { width: 63, height: 66 },
  "/integrations/linkedin.png": { width: 65, height: 65 },
  "/integrations/sparkle.png": { width: 68, height: 70 },
  "/integrations/hubspot.svg": { width: 100, height: 100 },
  "/integrations/zoho.png": { width: 100, height: 39 },
  "/integrations/wati.png": { width: 110, height: 42 },
  "/integrations/salesforce.svg": { width: 100, height: 100 },
  "/integrations/klaviyo.svg": { width: 100, height: 100 },
  "/integrations/cursor.png": { width: 512, height: 512 },
  "/integrations/docker.png": { width: 77, height: 55 },
  "/integrations/figma.png": { width: 256, height: 256 },
  "/integrations/github.png": { width: 70, height: 70 },
  "/integrations/tiktok.png": { width: 32, height: 32 },

  // Client Logos
  "/clientlogo/logo-1.png": { width: 152, height: 152 },
  "/clientlogo/logo-2.png": { width: 170, height: 170 },
  "/clientlogo/logo-3.png": { width: 170, height: 170 },
  "/clientlogo/logo-4.png": { width: 152, height: 152 },
  "/clientlogo/logo-5.png": { width: 222, height: 222 },
  "/clientlogo/logo-6.png": { width: 170, height: 170 },
  "/clientlogo/logo-7.png": { width: 170, height: 170 },
  "/clientlogo/logo-8.png": { width: 170, height: 170 },
  "/clientlogo/logo-9.png": { width: 170, height: 170 },
  "/clientlogo/logo-10.png": { width: 266, height: 170 },
  "/clientlogo/logo-11.png": { width: 248, height: 69 },
  "/clientlogo/logo-12.png": { width: 152, height: 152 },
  "/clientlogo/logo-13.png": { width: 170, height: 170 },
  "/clientlogo/logo-14.png": { width: 170, height: 22 },
  "/clientlogo/logo-15.png": { width: 170, height: 74 },

  // Team Assets
  "/assets/team/ameet.png": { width: 600, height: 400 },
  "/assets/team/ankita.png": { width: 600, height: 639 },
  "/assets/team/bhavya.png": { width: 500, height: 604 },
  "/assets/team/zaib.png": { width: 600, height: 600 },

  // Why Us icons
  "/1 copy.svg": { width: 509, height: 504 },
  "/2.svg": { width: 498, height: 498 },
  "/3.svg": { width: 481, height: 483 },
  "/4.svg": { width: 468, height: 451 },

  // Service SVG icons
  "/74c0af15118c1b2a2c39e1511c12af1dfd68bbda.svg": { width: 52, height: 52 },
  "/7b6d1a31b01642571f2ba8ae197279b79c46ed00.svg": { width: 60, height: 60 },
  "/0d1c43af53df1d13a18cab9909507ae5e5ee1faf.svg": { width: 100, height: 100 },
  "/dbb2cc477667c1535fbdfc2c6aa1ca82913f633a.svg": { width: 50, height: 68 },
  "/6d024c7b5b7156400997ad06258dcf9946364743.svg": { width: 52, height: 58 },
  "/00cd375964412dedc26595d780eebba9baf9a5c4.svg": { width: 58, height: 58 },
  "/fbf3bb63c485c87731f72b92377c293b49debc58.svg": { width: 60, height: 58 },

  // General & CTA Graphics
  "/SemBeige.svg": { width: 1000, height: 1000 },
  "/SEM.svg": { width: 793, height: 793 },
  "/SEM LOGO.svg": { width: 777, height: 777 },
  "/SEMBadge.svg": { width: 600, height: 600 },
  "/SEMBadgeNew.svg": { width: 900, height: 900 },
  "/sem_color.svg": { width: 793, height: 793 },
  "/SEM_LOGO_FOOTER.svg": { width: 806, height: 387 },
  "/LOGO_Final.svg": { width: 44, height: 44 },
  "/Footer_Logo.svg": { width: 220, height: 74 },
  "/bggradi.png": { width: 1200, height: 579 },
  "/assets/vector9.svg": { width: 2256, height: 1611 },
  "/assets/ellipse6.svg": { width: 714, height: 714 },
  "/assets/chatgpt-profile.png": { width: 300, height: 200 },
  "/assets/about-hero-bg.png": { width: 1900, height: 828 },
  "/assets/kid.png": { width: 182, height: 520 },
  "/assets/teen.png": { width: 182, height: 520 },
  "/assets/adult.png": { width: 182, height: 520 },
  "/photoshoot.jpg": { width: 1728, height: 1257 },
  "/website.jpg": { width: 1728, height: 1070 },

  // Key Case Study & Project Images
  "/Sage.jpeg": { width: 1300, height: 971 },
  "/Chev.jpeg": { width: 1300, height: 971 },
  "/Jwel.jpeg": { width: 1300, height: 971 },
  "/LOTD.jpeg": { width: 1300, height: 971 },
  "/LYNX.jpeg": { width: 1300, height: 971 },
  "/Rise.jpeg": { width: 1300, height: 971 },
  "/Sosha.jpeg": { width: 1300, height: 971 },
  "/Shiva.jpeg": { width: 1300, height: 971 },
  "/health.jpeg": { width: 1300, height: 971 },
  "/MR_Pronto.jpeg": { width: 1200, height: 896 },
  "/JSV/5.jpg": { width: 1400, height: 788 },
  "/JSV/5.1.jpg": { width: 1400, height: 788 },
  "/JSV/5,2.jpg": { width: 1920, height: 1080 },
  "/JSV/5.3.jpg": { width: 1400, height: 788 },
  "/JSV/5.4.jpg": { width: 1400, height: 788 },
};

/**
 * Returns intrinsic width and height for any given image source string.
 * Resolves static paths, project SVGs (520x390), case study thumbnails (740x420),
 * infographics (850x474), Unsplash avatars, and provides a dependable fallback.
 */
export function getImageDimensions(src?: string | null): ImageSize {
  if (!src) return { width: 1200, height: 900 };

  // 1. Direct exact lookup
  if (KNOWN_IMAGE_DIMENSIONS[src]) {
    return KNOWN_IMAGE_DIMENSIONS[src];
  }

  // 2. Project SVGs (e.g. /project/AMA.svg, /project/Bunt.svg)
  if (src.startsWith("/project/") && src.endsWith(".svg")) {
    return { width: 520, height: 390 };
  }

  // 3. Casestudies images (e.g. /casestudies/1.jpg)
  if (src.startsWith("/casestudies/")) {
    return { width: 740, height: 420 };
  }

  // 4. Infographics images (e.g. /images/infographics/seo-sydney.jpg)
  if (src.includes("/infographics/")) {
    return { width: 850, height: 474 };
  }

  // 5. Unsplash avatars (w=100 or w=250)
  if (src.includes("images.unsplash.com")) {
    if (src.includes("w=250")) return { width: 250, height: 250 };
    return { width: 100, height: 100 };
  }

  // 6. Subdirectory grid images (Shiva, Sosha, Rise, SAGE_Perfumes)
  if (src.startsWith("/SAGE_Perfumes/")) {
    return { width: 1080, height: 1350 };
  }
  if (src.startsWith("/Rise/Grid 12/") || src.startsWith("/Shiva/Grids/") || src.startsWith("/Sosha/GRID 04/")) {
    return { width: 1080, height: 1440 };
  }

  // 7. QR code API
  if (src.includes("api.qrserver.com")) {
    if (src.includes("120x120")) return { width: 120, height: 120 };
    if (src.includes("180x180")) return { width: 180, height: 180 };
    return { width: 100, height: 100 };
  }

  // 8. Client logo pattern (/clientlogo/logo-X.png)
  const clientLogoMatch = src.match(/\/clientlogo\/logo-(\d+)\.png/);
  if (clientLogoMatch) {
    const key = `/clientlogo/logo-${clientLogoMatch[1]}.png`;
    if (KNOWN_IMAGE_DIMENSIONS[key]) return KNOWN_IMAGE_DIMENSIONS[key];
    return { width: 170, height: 170 };
  }

  // 9. Standard default for blog/project hero/gallery images (e.g., Firebase storage)
  return { width: 1200, height: 900 };
}
