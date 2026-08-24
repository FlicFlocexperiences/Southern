import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Add server timestamp on the server side
    const documentData = {
      ...data,
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, "contacts"), documentData);

    return NextResponse.json(
      { success: true, message: "Contact saved successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error saving contact:", error);
    return NextResponse.json({ success: false, error: "Failed to save contact" }, { status: 500 });
  }
}
