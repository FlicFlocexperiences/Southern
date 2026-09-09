import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic";
export const maxDuration = 120; // 2 minutes max execution duration on Vercel

/**
 * Valid Southern Marketing service internal routes and anchor keywords
 * Used to satisfy Screaming Frog "Pages Without Internal Outlinks" and "Non-Descriptive Anchor Text"
 */
const INTERNAL_SERVICE_ROUTES = [
    {
        url: "/services/website-and-app-development",
        name: "Website and App Development",
        recommendedAnchors: [
            "custom website and app development",
            "responsive web design services",
            "high-performance web development solutions"
        ]
    },
    {
        url: "/services/branding-and-creative-strategy",
        name: "Branding and Creative Strategy",
        recommendedAnchors: [
            "strategic branding and creative direction",
            "comprehensive brand identity design",
            "creative digital brand strategy"
        ]
    },
    {
        url: "/services/social-media-management",
        name: "Social Media Management",
        recommendedAnchors: [
            "targeted social media management",
            "data-driven social media marketing campaigns",
            "omnichannel social media strategy"
        ]
    },
    {
        url: "/services/seo",
        name: "Search Engine Optimization (SEO)",
        recommendedAnchors: [
            "advanced search engine optimization services",
            "organic search engine optimization strategy",
            "technical SEO and conversion optimization"
        ]
    },
    {
        url: "/services/application-development",
        name: "Application Development",
        recommendedAnchors: [
            "scalable application development services",
            "custom cloud application development",
            "enterprise application engineering"
        ]
    },
    {
        url: "/services/photography-and-videography",
        name: "Photography and Videography",
        recommendedAnchors: [
            "commercial photography and videography services",
            "high-definition brand videography",
            "professional digital media production"
        ]
    }
];

export async function POST(request: Request) {
    try {
        const apiKey = process.env.GEMINI_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: 'Gemini API key (GEMINI_KEY) is not configured in .env' },
                { status: 500 }
            );
        }

        const body = await request.json();
        const primaryKeyword = body.primaryKeyword?.trim();

        if (!primaryKeyword) {
            return NextResponse.json({ error: 'Primary Keyword is required' }, { status: 400 });
        }

        // --- TOKEN SAVING TEST MODE ---
        if (primaryKeyword.toLowerCase() === 'test') {
            console.log("[Gemini AI Generator] TEST MODE ACTIVATED - 0 tokens spent.");
            const dummyHtml = Array(8).fill(
                "<h2>Test Section: Verifying Screaming Frog Alignment</h2><p>This is a test paragraph demonstrating zero-token execution. It confirms that heading hierarchy, internal linking to <a href=\"/services/seo\">advanced search engine optimization services</a>, and descriptive anchor text render accurately without consuming API quota.</p><p>The content complies with readability standards, avoids non-descriptive anchors, and maintains proper structural markup.</p>"
            ).join("\n\n");

            return NextResponse.json({
                title: "Proven Digital Growth Strategies for High Growth Brands",
                subtitle: "Actionable roadmap to elevate search visibility and acquire qualified enterprise clients",
                metaTitle: "Digital Growth Strategies for Brands | Southern Edge",
                metaDescription: "Master high-impact digital growth strategies. Explore actionable SEO frameworks, web architecture insights, and conversion tactics to scale your brand.",
                slug: "digital-growth-strategies-for-brands",
                description: dummyHtml,
                suggestedImagePrompt: "A sleek modern digital marketing dashboard with analytics graphs, warm terracotta and charcoal accents, minimalist aesthetic.",
                suggestedImageAlt: "Digital growth analytics dashboard displaying search optimization metrics",
                faqs: [
                    {
                        question: "How do digital marketing services accelerate enterprise growth?",
                        answer: "Tailored digital strategies combine technical SEO, content architecture, and conversion rate optimization to attract qualified prospects and maximize lifetime customer value."
                    }
                ],
                reviews: [
                    {
                        name: "Marcus Vance",
                        rating: 5,
                        review: "Southern Marketing completely transformed our online presence. Our organic inbound leads doubled within ninety days of launching our new digital strategy."
                    }
                ]
            });
        }
        // ------------------------------

        console.log(`[Gemini AI Generator Flow] Starting Screaming-Frog-Compliant Generation for: "${primaryKeyword}" using gemini-3.8-flash...`);

        const systemPrompt = `You are an elite, world-class Technical SEO Director and Conversion Copywriter for Southern Marketing (brand domain: southernedgemarketing.com).
Your mission is to produce a definitive, exceptionally thorough, and authoritative blog article that achieves a 100% PERFECT audit score on the Screaming Frog SEO Spider.

Target Keyword: "${primaryKeyword}"

================================================================================
EXHAUSTIVE SCREAMING FROG SEO AUDIT ISSUE CHECKS & MANDATORY PREVENTION RULES:
================================================================================

1. PAGE TITLE (SERP TITLE) SPECIFICATIONS:
   - Screaming Frog Issue: "Over 60 Characters" (max pixel width 561px) & "Below 30 Characters".
   - PREVENTION RULE: "metaTitle" MUST be strictly between 45 and 58 characters long.
   - Screaming Frog Issue: "Same as H1" (Title matches H1 exactly).
   - PREVENTION RULE: "metaTitle" MUST be DISTINCT from the article H1 "title". Include the primary keyword, a high-converting value proposition, and the branding suffix "| Southern Edge" (e.g., "SEO Strategies for Modern Brands | Southern Edge").

2. H1 HEADING (ARTICLE TITLE) SPECIFICATIONS:
   - Screaming Frog Issue: "H1 Missing", "H1 Multiple", "H1 Over 70 Characters".
   - PREVENTION RULE: Return exactly ONE main H1 "title". Length MUST be strictly between 35 and 65 characters.
   - Screaming Frog Issue: "H1 Multiple" in body copy.
   - PREVENTION RULE: Under NO circumstances should the HTML "description" body contain any <h1> tags. The body MUST start directly with <h2> tags.

3. META DESCRIPTION SPECIFICATIONS:
   - Screaming Frog Issue: "Over 155 Characters" & "Below 70 Characters".
   - PREVENTION RULE: "metaDescription" MUST be strictly between 140 and 154 characters long (never exceed 155 characters).
   - Must naturally contain the primary keyword, a compelling value summary, and an active imperative call-to-action (e.g. "Discover proven...", "Explore our guide...", "Learn how to scale...").

4. URL SLUG SPECIFICATIONS:
   - Screaming Frog Issue: "Over 115 Characters", "Uppercase", "Underscores", "Non-ASCII Characters", "Multiple Slashes".
   - PREVENTION RULE: "slug" MUST be strictly lowercase, 20 to 50 characters, containing only alphanumeric characters and single hyphens (-). Never use underscores (_), uppercase letters, or special characters.

5. HEADING HIERARCHY & SEQUENCE SPECIFICATIONS:
   - Screaming Frog Issue: "H2 Missing", "H2 Duplicate", "H2 Over 70 Characters", "H2 Non-Sequential".
   - PREVENTION RULE:
     * Provide 8 to 10 distinct, descriptive <h2> sections in the "description".
     * Every <h2> heading MUST be under 65 characters and 100% unique (no duplicates).
     * If subsections are needed, use <h3> tags directly under an <h2>. NEVER skip heading levels (no <h4> without <h3>).
     * The final <h2> MUST be titled "Conclusion and Strategic Next Steps" or similar.

6. CONTENT DEPTH, THIN CONTENT & READABILITY:
   - Screaming Frog Issue: "Low Content Pages / Thin Content (< 500-800 words)".
   - PREVENTION RULE: Total word count in "description" MUST be at least 1,500 to 2,000 words. Provide exhaustive, practical, actionable insights.
   - Screaming Frog Issue: "Readability Difficult / Very Difficult".
   - PREVENTION RULE: Keep paragraphs concise (2-4 sentences each). Use clean, scannable structures:
     * Bullet points (<ul><li>) and numbered lists (<ol><li>).
     * Callout highlight boxes (<div class="callout"> or <blockquote>).
     * Include at least ONE comprehensive HTML comparison or data table (<table><thead><tr><th>...</th></tr></thead><tbody><tr><td>...</td></tr></tbody></table>) summarizing key strategies, metrics, or comparisons.

7. INTERNAL LINKING & ANCHOR TEXT SPECIFICATIONS:
   - Screaming Frog Issue: "Pages Without Internal Outlinks" (Orphan/Dead-End pages).
   - Screaming Frog Issue: "Non-Descriptive Anchor Text in Internal Outlinks" (e.g. "click here", "read more", "this page", "link").
   - PREVENTION RULE: You MUST naturally embed 4 to 6 internal links within the HTML body using descriptive, keyword-rich anchor text. Link ONLY to the following approved Southern Marketing service URLs:
     * <a href="/services/website-and-app-development">custom website and app development</a>
     * <a href="/services/branding-and-creative-strategy">strategic branding and creative strategy</a>
     * <a href="/services/social-media-management">targeted social media management</a>
     * <a href="/services/seo">advanced search engine optimization services</a>
     * <a href="/services/application-development">scalable application development solutions</a>
     * <a href="/services/photography-and-videography">commercial photography and videography</a>
   - NEVER use generic anchor text like "click here", "read more", "visit our website", or "this link".

8. IMAGE ACCESSIBILITY & TOPICAL COVER PROMPT SPECIFICATIONS:
   - Screaming Frog Issue: "Missing Alt Text", "Missing Alt Attribute", "Alt Text Over 100 Characters".
   - PREVENTION RULE: Provide a "suggestedImageAlt" that is descriptive, concise, contains context for accessibility, directly relates to the article topic, and is strictly between 40 and 90 characters. 0 em dashes.
   - PREVENTION RULE for "suggestedImagePrompt": The prompt MUST directly, vividly, and concretely depict the EXACT SUBJECT MATTER of this specific article (e.g. if about dental marketing, describe a dentist with patient in a modern clinic; if about real estate, describe architectural luxury homes; if about app development, describe a developer interacting with a sleek mobile interface). NEVER output generic boardroom furniture, abstract rooms, or irrelevant decor. Photorealistic, commercial photography, strictly no text or letters.

9. STRUCTURED DATA & SCHEMA SPECIFICATIONS:
   - Screaming Frog Issue: "Rich Result Validation Errors", "Missing Required Schema Fields".
   - PREVENTION RULE:
     * Generate 8 to 10 in-depth, non-trivial FAQ items (question & answer pairs) designed specifically for Google FAQPage schema.
     * Generate 5 authentic, highly detailed customer review testimonials with client name, rating (5), and informative review text.

10. PUNCTUATION & GRAMMAR CONSTRAINTS:
    - CRITICAL NEGATIVE CONSTRAINT: Under NO circumstances should you include any em dashes (—) anywhere in your output. Always use normal hyphens (-), colons (:), commas, parentheses, or clean sentence structure.
`;

        const payload = {
            contents: [
                {
                    role: 'user',
                    parts: [
                        {
                            text: `${systemPrompt}\n\nGenerate the complete, Screaming-Frog-audit-perfect blog post for primary keyword: "${primaryKeyword}".`
                        }
                    ]
                }
            ],
            generationConfig: {
                responseMimeType: "application/json",
                temperature: 0.7,
                responseSchema: {
                    type: "OBJECT",
                    properties: {
                        title: {
                            type: "STRING",
                            description: "Primary H1 headline, between 35 and 65 characters"
                        },
                        subtitle: {
                            type: "STRING",
                            description: "Engaging subheadline under 120 characters"
                        },
                        metaTitle: {
                            type: "STRING",
                            description: "SERP title tag strictly between 45 and 58 characters, ends with | Southern Edge, distinct from H1"
                        },
                        metaDescription: {
                            type: "STRING",
                            description: "SERP meta description strictly between 140 and 154 characters with call to action"
                        },
                        slug: {
                            type: "STRING",
                            description: "Clean lowercase URL slug with hyphens only, 20-50 characters"
                        },
                        description: {
                            type: "STRING",
                            description: "Exhaustive HTML article body (1500-2000+ words), 8-10 H2s, H3s, table, lists, and internal links"
                        },
                        suggestedImagePrompt: {
                            type: "STRING",
                            description: "Vivid, photorealistic prompt portraying the concrete subject of this blog post, commercial photography, 8k, strictly no text"
                        },
                        suggestedImageAlt: {
                            type: "STRING",
                            description: "Accessible image alt text strictly between 40 and 90 characters"
                        },
                        faqs: {
                            type: "ARRAY",
                            items: {
                                type: "OBJECT",
                                properties: {
                                    question: { type: "STRING" },
                                    answer: { type: "STRING" }
                                },
                                required: ["question", "answer"]
                            }
                        },
                        reviews: {
                            type: "ARRAY",
                            items: {
                                type: "OBJECT",
                                properties: {
                                    name: { type: "STRING" },
                                    rating: { type: "NUMBER" },
                                    review: { type: "STRING" }
                                },
                                required: ["name", "rating", "review"]
                            }
                        }
                    },
                    required: [
                        "title",
                        "subtitle",
                        "metaTitle",
                        "metaDescription",
                        "slug",
                        "description",
                        "suggestedImagePrompt",
                        "suggestedImageAlt",
                        "faqs",
                        "reviews"
                    ]
                }
            }
        };

        const candidateModels = ["gemini-3.8-flash", "gemini-3.7-flash", "gemini-3.5-flash"];
        let lastErrorText = "";
        let rawJsonText: string | null = null;
        let successfulModel = "";

        for (const modelName of candidateModels) {
            console.log(`[Gemini AI Generator Flow] Attempting generation with model: ${modelName}...`);
            const currentEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

            try {
                const geminiResponse = await fetch(currentEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                if (!geminiResponse.ok) {
                    lastErrorText = await geminiResponse.text();
                    console.warn(`[Gemini AI Generator] Model ${modelName} returned status ${geminiResponse.status}:`, lastErrorText);
                    if (geminiResponse.status === 503 || geminiResponse.status === 429) {
                        continue;
                    }
                    return NextResponse.json(
                        { error: `Gemini generation API failed on ${modelName}`, details: lastErrorText },
                        { status: geminiResponse.status }
                    );
                }

                const data = await geminiResponse.json();
                const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;

                if (candidateText) {
                    rawJsonText = candidateText;
                    successfulModel = modelName;
                    break;
                }
            } catch (fetchErr: any) {
                console.warn(`[Gemini AI Generator] Fetch error with model ${modelName}:`, fetchErr.message);
                lastErrorText = fetchErr.message;
            }
        }

        if (!rawJsonText) {
            throw new Error(`All candidate Gemini models failed to return content. Last error: ${lastErrorText}`);
        }

        console.log(`[Gemini AI Generator Flow] Successfully generated article using model: ${successfulModel}`);

        // Post-processing & sanitization to guarantee Screaming Frog compliance
        const sanitizeText = (txt: string) => txt.replace(/—/g, "-").replace(/\u2014/g, "-");
        const parsedData = JSON.parse(sanitizeText(rawJsonText));

        // Enforce Screaming Frog character constraints programmatically as defense-in-depth:
        let metaTitle = (parsedData.metaTitle || "").trim();
        if (metaTitle.length > 60) {
            // Trim to last space before 57 chars and append brand or ellipsis
            metaTitle = metaTitle.substring(0, 57).replace(/\s+\S*$/, "") + " | Southern";
        }
        if (metaTitle.length < 30) {
            metaTitle = `${metaTitle} | Southern Edge Marketing`;
        }

        let metaDescription = (parsedData.metaDescription || "").trim();
        if (metaDescription.length > 155) {
            metaDescription = metaDescription.substring(0, 152).replace(/\s+\S*$/, "") + "...";
        }

        let slug = (parsedData.slug || "")
            .toLowerCase()
            .replace(/[^a-z0-9-]/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "");

        if (!slug || slug.length > 70) {
            slug = slug.substring(0, 60).replace(/-[^-]*$/, "");
        }

        // Clean any stray markdown fences in description if present
        let description = parsedData.description || "";
        if (description.startsWith("```html")) {
            description = description.slice(7).trim();
        } else if (description.startsWith("```")) {
            description = description.slice(3).trim();
        }
        if (description.endsWith("```")) {
            description = description.slice(0, -3).trim();
        }

        // Return clean payload
        const finalResponse = {
            title: parsedData.title,
            subtitle: parsedData.subtitle,
            metaTitle: metaTitle,
            metaDescription: metaDescription,
            slug: slug,
            description: description,
            suggestedImagePrompt: parsedData.suggestedImagePrompt,
            suggestedImageAlt: parsedData.suggestedImageAlt,
            faqs: parsedData.faqs || [],
            reviews: parsedData.reviews || []
        };

        console.log(`[Gemini AI Generator Flow] Success! Generated ${description.split(/\s+/).length} words, Title: "${finalResponse.title}", Meta Title: "${finalResponse.metaTitle}" (${finalResponse.metaTitle.length} chars), Meta Desc: (${finalResponse.metaDescription.length} chars).`);

        return NextResponse.json(finalResponse);

    } catch (error: any) {
        console.error('Critical Error in Gemini Article Generation Route:', error);
        return NextResponse.json(
            { error: 'Internal server error in Gemini generator', details: error.message || String(error) },
            { status: 500 }
        );
    }
}
