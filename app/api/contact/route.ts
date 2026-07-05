import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // PASTE YOUR GOOGLE SCRIPT URL HERE
    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbxa-hbP_Z4Wh9cIIJvJxo4vYsp_SROcVhqVzSHF3tLyF7UowiFoN--3Xh4UQrhfKLg/exec";

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      // Important: Using text/plain to avoid CORS preflight errors
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Failed to submit to Google Script");
    }

    return NextResponse.json({ message: "Success!" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}