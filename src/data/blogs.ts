export interface FAQ {
  id?: string;
  question: string;
  answer: string;
}

export interface Review {
  id?: string;
  name: string;
  rating: number;
  review: string;
}

export interface Blog {
  slug: string;
  title: string;
  metaTitle?: string;
  excerpt: string;
  content: string; // Markdown content
  publishedAt: string;
  category: string;
  image: string;
  faqs?: FAQ[];
  reviews?: Review[];
  author?: string;
}

export const blogs: Blog[] = [
  {
    slug: "the-importance-of-mobile-first-design-in-2025",
    title: "The Importance of Mobile-First Design in 2025",
    metaTitle: "Importance of Mobile Design in 2025",
    excerpt: "Explore why designing for mobile screens first revolutionized user experience, accessibility, and modern SEO rankings.",
    publishedAt: "Feb 26, 2025",
    category: "DESIGN",
    image: "/photoshoot.jpg",
    content: `<p>In the early days of mobile internet, web developers designed exclusively for large desktop screens. Mobile layouts were merely scaled-down versions that forced users to pinch and zoom. That all changed when the mobile-first design philosophy emerged.</p>

<h2>1. Understanding Mobile-First</h2>
<p>Mobile-first design is a design philosophy that starts by designing for the smallest screen size first, and then scaling up to larger screens. It is about prioritizing essential content and features over visual decoration.</p>

<h2>2. Why It Matters for SEO</h2>
<p>Google uses mobile-first indexing, meaning its web crawler prioritizes indexing the mobile version of websites. A poor mobile layout directly hurts your rankings across all device screens.</p>

<h2>3. Core Design Principles</h2>
<ul>
  <li><strong>Touch-Friendly Targets:</strong> Buttons and links must be large enough to tap easily without accidental clicks.</li>
  <li><strong>Simplified Navigation:</strong> Hamburger menus and sticky bars keep layouts clean and usable.</li>
  <li><strong>Responsive Assets:</strong> Images and videos must scale dynamically based on viewport widths.</li>
</ul>`
  },
  {
    slug: "understanding-color-theory-in-digital-branding",
    title: "Understanding Color Theory in Digital Branding",
    metaTitle: "Color Theory in Digital Branding",
    excerpt: "Learn how color choices affect human psychology, brand recognition, and conversions on digital storefronts.",
    publishedAt: "March 12, 2001",
    category: "BRANDING",
    image: "/casestudies/2.jpg",
    content: `<p>Colors trigger subconscious responses and shape how customers perceive your brand value. Choosing a cohesive digital palette is key to building consumer trust and brand authority.</p>

<h2>1. The Psychology of Color</h2>
<p>Different colors evoke different emotions:</p>
<ul>
  <li><strong>Red &amp; Orange:</strong> Excitement, urgency, passion. Great for CTA buttons.</li>
  <li><strong>Blue:</strong> Trust, security, intelligence. Commonly used by financial systems.</li>
  <li><strong>Green:</strong> Growth, health, environment. Ideal for sustainable products.</li>
</ul>

<h2>2. Accessibility and Contrast</h2>
<p>Contrast is essential for readability. Text must contrast sufficiently with the background (WCAG AA standards) to ensure it is legible for users with visual impairments.</p>

<h2>3. Designing a Palette</h2>
<p>A typical layout uses a 60/30/10 color rule: 60% dominant color (neutral background), 30% secondary color (headers, cards), and 10% accent color (buttons, highlights).</p>`
  },
  {
    slug: "how-ux-writing-shapes-user-behavior",
    title: "How UX Writing Shapes User Behavior",
    excerpt: "Microcopy matters. Discover how the words on buttons, labels, and forms guide user decisions and reduce interface friction.",
    publishedAt: "April 5, 2001",
    category: "STRATEGY",
    image: "/casestudies/5.jpg",
    content: `<p>UX writing is the practice of crafting the copy that guides users through a product interface. Clear, concise, and useful microcopy reduces cognitive load and directs conversions.</p>

<h2>1. Clarity Over Cleverness</h2>
<p>Avoid jargon and ambiguous terms. Buttons should clearly state what action happens next. For example, use &apos;Schedule Demo&apos; instead of &apos;Submit&apos;.</p>

<h2>2. Directing User Focus</h2>
<p>Guide the user sequentially. Use headers, bold typography, and visual cues to guide them from problem statements to call-to-actions.</p>

<h2>3. Error Prevention</h2>
<p>Helpful error messages prevent frustration. Instead of saying &apos;Invalid Input&apos;, explain what is wrong and how the user can correct it.</p>`
  },
  {
    slug: "the-rise-of-minimalist-web-design",
    title: "The Rise of Minimalist Web Design",
    excerpt: "Why less is more. How stripping away unnecessary decorations boosts page speeds and improves visitor focus.",
    publishedAt: "May 18, 2001",
    category: "DESIGN",
    image: "/casestudies/8.jpg",
    content: `<p>Minimalism is not about empty space—it is about the intentional removal of distraction to focus attention on essential visual elements.</p>

<h2>1. Speed and Performance</h2>
<p>Fewer decorative graphics, fonts, and elements mean smaller bundle sizes. Faster loading times lead to better SEO and reduced bounce rates.</p>

<h2>2. High Visual Hierarchy</h2>
<p>Minimalist design uses whitespace, font sizing, and layout spacing to guide user eyes directly to your value proposition and main Call to Action.</p>

<h2>3. Timeless Aesthetic</h2>
<p>By avoiding temporary design trends, minimalist layouts remain modern and premium for years, reducing the frequency of costly redesigns.</p>`
  },
  {
    slug: "essential-typography-rules-for-readability",
    title: "Essential Typography Rules for Readability",
    excerpt: "Explore line heights, letter spacing, and font pairings that make long-form content comfortable to read on screens.",
    publishedAt: "June 22, 2001",
    category: "TYPOGRAPHY",
    image: "/casestudies/11.jpg",
    content: `<p>Typography dictates how users read your content. Poor spacing, sizing, or font choices make long-form content tiring to read, causing users to leave your site.</p>

<h2>1. Font Pairing</h2>
<p>Use a strong, modern Sans-Serif font for headers (such as Onest or Inter) and clean fonts for content copy to ensure readability on screens.</p>

<h2>2. Line Height and Length</h2>
<ul>
  <li><strong>Line Length:</strong> Keep text lines between 45 and 75 characters long. Lines that are too long make it hard for the eyes to track.</li>
  <li><strong>Line Height:</strong> Content text should have a line-height of 1.5 to 1.7 to allow visual breathing room between lines.</li>
</ul>

<h2>3. Hierarchy and Contrast</h2>
<p>Create clear distinctions between h1, h2, h3, and body text using weight and font size variations, helping users scan pages easily.</p>`
  }
];

export const getBlogBySlug = (slug: string): Blog | undefined => {
  return blogs.find(blog => blog.slug === slug);
};
