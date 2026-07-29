
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
    try {
        const sanitizeText = (txt: string) => txt.replace(/—/g, "-").replace(/\u2014/g, "-");

        const apiKey = process.env.HELLO_DROP_CHOO;
        if (!apiKey) {
            return NextResponse.json({ error: 'OpenAI API configuration secret (HELLO_DROP_CHOO) is not set in .env' }, { status: 500 });
        }

        const openai = new OpenAI({
            apiKey: apiKey,
        });

        const body = await request.json();
        const primaryKeyword = body.primaryKeyword;

        if (!primaryKeyword) {
            return NextResponse.json({ error: 'Primary Keyword is required' }, { status: 400 });
        }
        // --- TOKEN SAVING TEST MODE ---
        if (primaryKeyword.toLowerCase() === 'test') {
            console.log("[AI Generator Flow] TEST MODE ACTIVATED - Costing 0 tokens.");
            const dummyHtml = Array(15).fill(
                "<h2>Test Heading: Verifying Full Width</h2><p>This is a test paragraph to verify that the Tiptap editor is now utilizing the full horizontal space of the container. By applying the !max-w-none utility class, the Tailwind typography plugin will no longer arbitrarily constrain our text to 65 characters per line.</p><p>As you can see, the text should now stretch all the way from the left edge of the editor box to the right edge, filling the entire white space perfectly. You are saving your OpenAI tokens while we verify this CSS fix.</p>"
            ).join("");
            
            return NextResponse.json({
                title: "Test Mode Blog Title",
                subtitle: "This is a dummy subtitle to save your API tokens.",
                metaTitle: "Test Meta Title",
                metaDescription: "Test Meta Description",
                slug: "test-mode-blog",
                description: dummyHtml,
                faqs: [{ question: "Is this a test?", answer: "Yes, saving tokens." }],
                reviews: [{ name: "Test User", rating: 5, review: "Great token saving!" }],
                suggestedImagePrompt: "A cute robot saving money in a piggy bank."
            });
        }
        // ------------------------------
        console.log(`[AI Generator Flow] Step 1: Generating SEO metadata and Article Outline for: [${primaryKeyword}]...`);

        // STEP 1: Generate Title, Subtitle, Meta Title, Meta Description, Slug, and Outline
        const step1Completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: `You are a professional digital marketing SEO and AEO strategist.
Generate an SEO-optimized H1 Title, engaging subtitle, meta title, meta description, URL slug, and a detailed outline of 5 to 7 H2 headings for a concise blog article for Southern Marketing, a digital marketing agency.
Primary Keyword: ${primaryKeyword}

CRITICAL NEGATIVE CONSTRAINT:
Under no circumstances should you include any em dashes (—) anywhere in your response. Always use normal hyphens (-), colons (:), commas, parentheses, or rewrite the sentence to avoid them.

Return ONLY a JSON object with this exact structure:
{
  "title": "H1 Title containing the primary keyword (max 70 chars)",
  "subtitle": "Engaging subtitle (max 120 chars)",
  "metaTitle": "SEO meta title (60-70 chars)",
  "metaDescription": "SEO meta description (150-160 chars)",
  "slug": "url-friendly-slug",
  "outline": [
    "Introduction to Primary Keyword",
    "Understanding the Legal Framework...",
    ... (5 to 7 detailed H2 heading titles)
  ]
}`
                }
            ],
            response_format: { type: "json_object" },
            temperature: 0.7,
        });

        const step1ResultStr = sanitizeText(step1Completion.choices[0].message.content || "{}");
        const step1Result = JSON.parse(step1ResultStr);
        const outline: string[] = step1Result.outline || [];

        console.log(`[AI Generator Flow] Step 1 complete. Title: "${step1Result.title}", Outline items: ${outline.length}`);
        console.log(`[AI Generator Flow] Step 2: Iteratively generating description content (Aiming for 3500+ words HTML)...`);

        // STEP 2: Iteratively generate content for each outline heading
        let finalHtmlBodyChunks = [];

        for (let i = 0; i < outline.length; i++) {
            const heading = outline[i];
            console.log(`[AI Generator Flow] Step 2.${i + 1}: Expanding heading "${heading}"...`);

            const step2SystemPrompt = `
You are a professional digital marketing content writer and SEO expert writing for Southern Marketing.
Target Primary Keyword: ${primaryKeyword}
Article Title: ${step1Result.title}

**CRITICAL WORD COUNT REQUIREMENT**:
You are writing ONLY the content for the specific H2 section titled: "${heading}".
Write exactly 150 to 200 words for this specific section alone. Ensure it is concise, yet informative. Expand with 2-3 short paragraphs.

**Requirements**:
- **Structure**: Output HTML ONLY. Start with an <h2>${heading}</h2> tag, followed by <p>, <h3>, <ul>, <li>, or <table> tags as appropriate.
- **Tone**: Professional, creative, authoritative, human.
- **No Markdown**: Do NOT use markdown headers (like ## or ###) or markdown bold (like **text**). Use HTML tags instead.
- **Internal Linking**: You MUST naturally integrate mentions and links to the following Southern Marketing services within the text where relevant:
  - /services/website-and-app-development
  - /services/branding-and-creative-strategy
  - /services/social-media-management
  - /services/seo
  - /services/application-development
  - /services/photography-and-videography
- **Do NOT** include any main article H1 title. Start directly with the <h2> tag for your section.
- **Do NOT** include any FAQs or Reviews in this content.
- **Do NOT** wrap the response in markdown code blocks like \`\`\`html or \`\`\`. Output RAW HTML only.
- **CRITICAL NEGATIVE CONSTRAINT**:
  Under no circumstances should you include any em dashes (—) anywhere in your entire response. Always use normal hyphens (-), colons, commas, or parentheses if needed instead.
`;

            const sectionContext = `Write the specific HTML section for "${heading}" relating to the primary keyword: ${primaryKeyword}`;

            try {
                const sectionCompletion = await openai.chat.completions.create({
                    model: "gpt-4o",
                    messages: [
                        { role: "system", content: step2SystemPrompt },
                        { role: "user", content: sectionContext },
                    ],
                    temperature: 0.8,
                });

                let rawSection = sanitizeText(sectionCompletion.choices[0].message.content || "");
                let cleanedSection = rawSection.trim();

                // Clean up markdown fences
                if (cleanedSection.startsWith("```html")) {
                    cleanedSection = cleanedSection.slice(7).trim();
                } else if (cleanedSection.startsWith("```")) {
                    cleanedSection = cleanedSection.slice(3).trim();
                }
                if (cleanedSection.endsWith("```")) {
                    cleanedSection = cleanedSection.slice(0, -3).trim();
                }

                finalHtmlBodyChunks.push(cleanedSection);
            } catch (err) {
                console.error(`[AI Generator Flow] Step 2.${i + 1} Error generating section "${heading}":`, err);
                // Continue to the next section even if one fails
            }
        }

        const cleanedDescription = finalHtmlBodyChunks.join("\n\n");
        console.log(`[AI Generator Flow] Step 2 complete. Total description length: ${cleanedDescription.split(/\s+/).length} words.`);
        console.log(`[AI Generator Flow] Step 3: Generating FAQs, reviews, and image prompt in the context of the description...`);

        // STEP 3: Generate FAQs, Reviews, suggestedImagePrompt based on the Title, Subtitle, and Description
        let faqs = [];
        let reviews = [];
        let suggestedImagePrompt = "Professional legal recovery illustration";

        try {
            const step3SystemPrompt = `
You are a digital marketing content strategist and SEO expert.
Analyze the following generated article Title, Subtitle, and HTML Description, and generate:
1. At least 8-10 highly relevant, detailed FAQs (frequently asked questions) that directly relate to the article content.
2. 5 realistic customer review snippets expressing high satisfaction with the marketing/development service.
3. A suggested image prompt describing a clean, professional, modern digital marketing or tech infographic/illustration suitable for this article.

Article Title: ${step1Result.title}
Article Subtitle: ${step1Result.subtitle}

Article Description (Partial/Summary context):
${cleanedDescription.substring(0, 4000)} ... (content truncated for context)

CRITICAL NEGATIVE CONSTRAINT:
Under no circumstances should you include any em dashes (—) anywhere in your response. Always use normal hyphens (-), colons (:), commas, parentheses, or rewrite the sentence to avoid them.

Return ONLY a JSON object with this exact structure:
{
  "faqs": [
    { "question": "Detailed question?", "answer": "Detailed helpful answer." }
  ],
  "reviews": [
    { "name": "Reviewer Full Name", "rating": 5, "review": "Detailed review text..." }
  ],
  "suggestedImagePrompt": "Visual description for the article's featured image"
}`;

            const step3Completion = await openai.chat.completions.create({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: step3SystemPrompt }
                ],
                response_format: { type: "json_object" },
                temperature: 0.8,
            });

            const step3ResultStr = sanitizeText(step3Completion.choices[0].message.content || "{}");
            const step3Result = JSON.parse(step3ResultStr);

            faqs = step3Result.faqs || [];
            reviews = step3Result.reviews || [];
            suggestedImagePrompt = step3Result.suggestedImagePrompt || "Professional legal recovery illustration";

            console.log(`[AI Generator Flow] Step 3 complete. FAQs: ${faqs.length}, Reviews: ${reviews.length}`);
        } catch (step3Error) {
            console.error("[AI Generator Flow] Error in Step 3:", step3Error);
        }

        // Build the final unified JSON object
        const finalResult = {
            title: step1Result.title,
            subtitle: step1Result.subtitle,
            metaTitle: step1Result.metaTitle,
            metaDescription: step1Result.metaDescription,
            slug: step1Result.slug,
            description: cleanedDescription,
            faqs: faqs,
            reviews: reviews,
            suggestedImagePrompt: suggestedImagePrompt
        };

        return NextResponse.json(finalResult);

    } catch (error) {
        console.error('CRITICAL TOP-LEVEL ERROR generating article:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}