import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(request: Request) {
  const startTime = Date.now();
  console.log(`[API /api/contact] Received new POST submission at ${new Date().toISOString()}`);

  try {
    const data = await request.json();
    console.log("[API /api/contact] Form payload parsed:", {
      name: data.name,
      email: data.email,
      phone: data.phone ? `***${String(data.phone).slice(-4)}` : "empty",
      service: data.service,
    });
    
    // Add server timestamp on the server side
    const documentData = {
      ...data,
      createdAt: serverTimestamp(),
    };

    console.log("[API /api/contact] Writing document to Firestore 'contacts' collection...");
    const docRef = await addDoc(collection(db, "contacts"), documentData);
    const duration = Date.now() - startTime;

    console.log(`✅ [API /api/contact] Document successfully saved to Firestore with ID: ${docRef.id} in ${duration}ms.`);

    return NextResponse.json(
      { success: true, message: "Contact saved successfully", docId: docRef.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("🚨 [API /api/contact] Error saving contact to Firestore:", error);
    return NextResponse.json({ success: false, error: "Failed to save contact", details: error?.message }, { status: 500 });
  }
}
