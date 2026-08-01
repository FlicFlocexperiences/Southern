const fs = require('fs');

let content = fs.readFileSync('src/data/services.ts', 'utf-8');

// 1. Add faqs to interface
content = content.replace(
  '  content: string; // Markdown content\n}',
  '  content: string; // Markdown content\n  faqs?: { question: string; answer: string }[];\n}'
);

// 2. We need to extract the FAQs from web-development and add the 7 new ones.
// The new FAQs:
const newFaqs = [
  { question: "Do you combine SEO services in Delhi with paid ads?", answer: "Yes, we do. While our SEO services in Delhi build your long term organic presence, our targeted PPC services in Delhi provide immediate visibility. Combining both approaches ensures you capture both active buyers right now and future customers over time for maximum return on investment." },
  { question: "Do you work with businesses outside of Delhi and Dubai?", answer: "Absolutely. While we have a strong physical presence in Delhi and Dubai, we operate globally. We have successfully partnered with over 100 businesses across India, the Middle East, and beyond, delivering high-converting digital solutions." },
  { question: "What makes your custom website design different from templates?", answer: "Template websites often suffer from bloat, slow loading times, and generic user experiences. We build our websites from the ground up using modern frameworks like Next.js, ensuring lightning-fast performance, unique brand alignment, and an architecture explicitly designed to maximize your conversion rates." },
  { question: "How do you measure the success of a performance marketing campaign?", answer: "We move past vanity metrics and focus squarely on your bottom line. Success is measured by tracking Cost Per Acquisition (CPA), Return On Ad Spend (ROAS), and overall lead quality. We set up advanced full-funnel tracking to ensure every dollar spent is accounted for." },
  { question: "Do you provide ongoing maintenance and support after a website launch?", answer: "Yes, launching your website is just the beginning. We offer comprehensive ongoing maintenance, security updates, speed optimizations, and continuous Conversion Rate Optimization (CRO) to ensure your digital platform scales smoothly alongside your business." },
  { question: "Can you help migrate our existing e-commerce store to Shopify?", answer: "Certainly. We specialize in seamless, zero-downtime migrations from platforms like WooCommerce, Magento, or custom builds over to Shopify or Shopify Plus. We ensure all your product data, customer accounts, and SEO rankings are carefully preserved during the transition." },
  { question: "How often do you provide performance reports?", answer: "Transparency is core to our process. We provide detailed, easy-to-understand performance reports on a monthly basis. Additionally, for active performance marketing campaigns, you'll have a dedicated point of contact to discuss real-time insights and strategy adjustments." },
  { question: "What is the typical onboarding process for a new client?", answer: "Our onboarding begins with a deep-dive discovery session to understand your business goals, target audience, and current digital footprint. From there, we conduct a comprehensive audit, define a customized strategy, establish clear KPIs, and integrate you into our project management systems." }
];

// Regex to match ### Frequently Asked Questions and everything after it until the end of the template literal string (`)
const faqRegex = /### Frequently Asked Questions\n(.*?)(?=\`\n  \})/gs;

content = content.replace(faqRegex, (match, p1) => {
  return ''; // Just remove the text FAQ section
});

// Now we need to inject the `faqs: [...]` into the web-development object.
// We'll just replace the end of the web-development object string.
const webDevEndRegex = /(slug: "web-development",[\s\S]*?content: \`[\s\S]*?)\`\n  \}/;

content = content.replace(webDevEndRegex, (match, p1) => {
  // Extract the original 2 FAQs from the string we removed?
  // We can just hardcode the original 2 since we know them.
  const originalFaqs = [
    { question: "How long does website development take?", answer: "Most bespoke projects are completed within 4 to 8 weeks depending on the complexity of the features and integrations required." },
    { question: "Do you redesign existing websites?", answer: "Yes. We modernize outdated websites while drastically improving speed, SEO foundation, and overall conversion rates." }
  ];
  
  const allFaqs = [...originalFaqs, ...newFaqs];
  
  return p1 + '\`,\n    faqs: ' + JSON.stringify(allFaqs, null, 6) + '\n  }';
});

// For other services, they might have had FAQs too, but we just removed them. We'll leave them without structured FAQs for now, since the user specifically asked for "add faq here" on the web-development page they screenshotted.
// Wait, actually, removing them from other pages might leave those pages without FAQs. 
// Let's just restore them for other pages or let them be. The user only asked for 7 more FAQs on the web dev page.
// Let's modify the script to ONLY remove the FAQ section from web-development, OR extract all FAQs.
