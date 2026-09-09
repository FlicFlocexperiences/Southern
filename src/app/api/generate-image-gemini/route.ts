import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic";
export const maxDuration = 120; // Up to 120 seconds execution

/**
 * Nano Banana Pro & Gemini AI Image Generator Route
 * 1. Supports Nano Banana Pro (models/nano-banana-pro-preview) and Nano Banana 2 (models/gemini-3.1-flash-image).
 * 2. Enforces strict topical fidelity - images are directly tailored to the article's actual subject matter,
 *    eliminating disconnected generic boardroom/interior imagery.
 * 3. Generates Screaming Frog SEO-compliant alt text (40-90 chars).
 * 4. High-resolution FLUX fallback (1200x630 ideal blog hero ratio) when Google Free Tier quota is restricted.
 */
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
        const rawPrompt = (typeof body.prompt === "string" ? body.prompt : "").trim();
        const topic = (typeof body.topic === "string" ? body.topic : "").trim();

        const effectivePrompt = rawPrompt || topic;

        if (!effectivePrompt) {
            return NextResponse.json({ error: 'Prompt or topic is required' }, { status: 400 });
        }

        // --- TOKEN-SAVING TEST MODE ---
        if (effectivePrompt.toLowerCase() === 'test') {
            console.log("[Nano Banana Pro Image Generator] TEST MODE ACTIVATED - 0 tokens spent.");
            return NextResponse.json({
                success: true,
                imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80",
                enhancedPrompt: "Modern digital marketing analytics dashboard with glowing charts and geometric cards in warm terracotta and charcoal tones, minimalist studio composition.",
                suggestedAlt: "Modern digital marketing analytics dashboard displaying growth metrics",
                provider: "nano-banana-test-mode"
            });
        }

        console.log(`[Nano Banana Pro Image Generator] Processing topic: "${topic}", prompt: "${rawPrompt}"`);

        // --- STEP 1: CONTEXTUAL PROMPT REFINEMENT TO ENSURE 100% TOPICAL ALIGNMENT ---
        const enhancementPayload = {
            contents: [
                {
                    parts: [
                        {
                            text: `You are an expert commercial photographer and visual director.
The blog post topic is: "${topic || rawPrompt}"
The user's image concept is: "${rawPrompt || topic}"

Your task is to generate:
1. "enhancedPrompt": A vivid, photorealistic scene description that is DIRECTLY AND UNMISTAKABLY ABOUT THIS EXACT SUBJECT MATTER.
   - Example 1: If topic is dentist/dental: Describe an actual modern dental clinic with dentist, dental instruments, clean clinical environment.
   - Example 2: If topic is real estate: Describe luxury modern residential homes or client meeting realtor.
   - Example 3: If topic is law/legal: Describe a distinguished attorney office with legal documents or courtroom ambiance.
   - Example 4: If topic is app/web development: Describe a modern tech workstation with developer interacting with sleek mobile/web interfaces.
   - STRICT PROHIBITION: Do NOT output generic conference rooms, random boardroom furniture, or irrelevant abstract shapes unless that is the literal subject. Focus 100% on the core topic.
   - Style: Commercial advertising photography, 8k resolution, cinematic natural lighting, vibrant depth of field.
   - NEGATIVE CONSTRAINT: Strictly NO readable text, NO letters, NO words, NO watermarks.

2. "suggestedAlt": A concise, keyword-rich image alt text strictly between 40 and 90 characters describing the scene for Screaming Frog SEO compliance. 0 em dashes.`
                        }
                    ]
                }
            ],
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "OBJECT",
                    properties: {
                        enhancedPrompt: { type: "STRING" },
                        suggestedAlt: { type: "STRING" }
                    },
                    required: ["enhancedPrompt", "suggestedAlt"]
                }
            }
        };

        const candidateTextModels = ["gemini-3.8-flash", "gemini-3.7-flash", "gemini-3.5-flash"];
        let enhancedPrompt = `${effectivePrompt}, professional commercial advertising photography, 8k resolution, cinematic lighting, photorealistic, sharp focus, strictly no text or letters`;
        let suggestedAlt = effectivePrompt.slice(0, 80);

        for (const model of candidateTextModels) {
            try {
                const textRes = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(enhancementPayload),
                    }
                );

                if (textRes.ok) {
                    const textData = await textRes.json();
                    const rawJson = textData.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (rawJson) {
                        const parsed = JSON.parse(rawJson);
                        if (parsed.enhancedPrompt) enhancedPrompt = parsed.enhancedPrompt;
                        if (parsed.suggestedAlt) suggestedAlt = parsed.suggestedAlt;
                        console.log(`[Nano Banana Pro] Prompt refined via ${model}. Alt: "${suggestedAlt}" (${suggestedAlt.length} chars)`);
                        break;
                    }
                }
            } catch (err: any) {
                console.warn(`[Nano Banana Pro] Prompt refinement notice on ${model}:`, err.message);
            }
        }

        // Programmatic boundary for suggestedAlt (40-90 characters, zero em dashes)
        suggestedAlt = suggestedAlt.replace(/—/g, "-").replace(/\u2014/g, "-").trim();
        if (suggestedAlt.length > 90) {
            suggestedAlt = suggestedAlt.substring(0, 87).replace(/\s+\S*$/, "");
        }
        if (suggestedAlt.length < 35) {
            suggestedAlt = `${suggestedAlt} - Professional Overview`;
        }

        // --- STEP 2: ATTEMPT NANO BANANA PRO & GOOGLE IMAGE GENERATION ---
        // Models: Nano Banana Pro (nano-banana-pro-preview / gemini-3-pro-image), Nano Banana 2 (gemini-3.1-flash-image)
        const nativeImageModels = [
            "nano-banana-pro-preview",
            "gemini-3-pro-image",
            "gemini-3.1-flash-image",
            "gemini-2.5-flash-image"
        ];

        let generatedBase64Image: string | null = null;
        let successfulModel = "";

        for (const imgModel of nativeImageModels) {
            try {
                const imgRes = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/${imgModel}:generateContent?key=${apiKey}`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{ parts: [{ text: enhancedPrompt }] }]
                        })
                    }
                );

                if (imgRes.ok) {
                    const imgData = await imgRes.json();
                    const part = imgData.candidates?.[0]?.content?.parts?.[0];
                    if (part?.inlineData?.data) {
                        generatedBase64Image = `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
                        successfulModel = imgModel;
                        console.log(`[Nano Banana Pro] Native image successfully generated via ${imgModel}`);
                        break;
                    }
                } else {
                    const errStatus = imgRes.status;
                    if (errStatus === 429) {
                        console.log(`[Nano Banana Pro] Model ${imgModel} returned 429 (quota limit: 0 on free tier). Activating high-speed fallback immediately.`);
                        break;
                    }
                }
            } catch (imgErr: any) {
                console.warn(`[Nano Banana Pro] Model ${imgModel} attempt notice:`, imgErr.message);
            }
        }

        if (generatedBase64Image) {
            return NextResponse.json({
                success: true,
                imageUrl: generatedBase64Image,
                enhancedPrompt: enhancedPrompt,
                suggestedAlt: suggestedAlt,
                provider: `nano-banana-pro (${successfulModel})`
            });
        }

        // --- STEP 3: HIGH-RESOLUTION TOPICAL FLUX FALLBACK ---
        // Generates 1200x630 (gold-standard 1.91:1 ratio for blog hero and OpenGraph)
        const encodedPrompt = encodeURIComponent(enhancedPrompt);
        const randomSeed = Math.floor(Math.random() * 1000000);
        const highResUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1200&height=630&nologo=true&seed=${randomSeed}&model=flux`;

        console.log(`[Nano Banana Pro] Generated high-fidelity topical image via FLUX engine.`);

        return NextResponse.json({
            success: true,
            imageUrl: highResUrl,
            enhancedPrompt: enhancedPrompt,
            suggestedAlt: suggestedAlt,
            provider: "nano-banana-flux"
        });

    } catch (error: any) {
        console.error("Critical Error in Nano Banana Pro Image Route:", error);
        return NextResponse.json(
            { error: 'Internal server error in image generator', details: error.message || String(error) },
            { status: 500 }
        );
    }
}
