import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_MIN_SCORE = parseFloat(process.env.RECAPTCHA_MIN_SCORE || "0.5");

export async function POST(request: Request) {
  const startTime = Date.now();
  console.log(`[API /api/contact] Received new POST submission at ${new Date().toISOString()}`);

  try {
    const data = await request.json();
    const { recaptchaToken, ...formData } = data;

    if (!RECAPTCHA_SECRET_KEY) {
      console.error("🚨 [API /api/contact] RECAPTCHA_SECRET_KEY environment variable is missing.");
      return NextResponse.json(
        { success: false, error: "Server security configuration error. Please contact administrator." },
        { status: 500 }
      );
    }

    console.log("[API /api/contact] Form payload parsed:", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone ? `***${String(formData.phone).slice(-4)}` : "empty",
      service: formData.service,
      hasRecaptchaToken: !!recaptchaToken,
    });

    // 1. Verify reCAPTCHA token
    if (!recaptchaToken) {
      console.warn("⚠️ [API /api/contact] Missing reCAPTCHA token in submission payload.");
      return NextResponse.json(
        { success: false, error: "reCAPTCHA verification token missing. Please try again." },
        { status: 400 }
      );
    }

    const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${encodeURIComponent(RECAPTCHA_SECRET_KEY)}&response=${encodeURIComponent(recaptchaToken)}`,
    });

    const captchaData = await verifyResponse.json();
    console.log("[API /api/contact] reCAPTCHA verification response:", {
      success: captchaData.success,
      score: captchaData.score,
      action: captchaData.action,
      errors: captchaData["error-codes"],
    });

    // Enforce reCAPTCHA success and minimum score threshold
    const score = typeof captchaData.score === "number" ? captchaData.score : 0;
    if (!captchaData.success || score < RECAPTCHA_MIN_SCORE) {
      console.warn(`🚨 [API /api/contact] Bot submission blocked! Success: ${captchaData.success}, Score: ${score} (Threshold: ${RECAPTCHA_MIN_SCORE})`);
      return NextResponse.json(
        {
          success: false,
          error: "reCAPTCHA verification failed. Bot or suspicious activity detected.",
        },
        { status: 400 }
      );
    }

    // Determine confidence level: >= 0.8 is high-confidence 'verified', 0.5 - 0.79 is 'review'
    const captchaStatus = score >= 0.8 ? "verified" : "review";

    // 2. Prepare document data for Firestore
    const documentData = {
      ...formData,
      captchaScore: score,
      captchaStatus,
      status: formData.status || "New",
      createdAt: serverTimestamp(),
    };

    console.log("[API /api/contact] Writing document to Firestore 'contacts' collection...");
    const docRef = await addDoc(collection(db, "contacts"), documentData);
    const duration = Date.now() - startTime;

    console.log(`✅ [API /api/contact] Document successfully saved to Firestore with ID: ${docRef.id} in ${duration}ms. (Score: ${score}, Status: ${captchaStatus})`);

    return NextResponse.json(
      {
        success: true,
        message: "Contact saved successfully",
        docId: docRef.id,
        score,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("🚨 [API /api/contact] Error saving contact to Firestore:", error);
    return NextResponse.json({ success: false, error: "Failed to save contact", details: error?.message }, { status: 500 });
  }
}

