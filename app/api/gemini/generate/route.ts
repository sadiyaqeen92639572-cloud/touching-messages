import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const runtime = "edge";

const apiKey = process.env.GEMINI_API_KEY;

// Lazy initialize the SDK client
let aiClient: GoogleGenAI | null = null;

function getAiClient() {
  if (!aiClient) {
    if (!apiKey) {
      console.warn("GEMINI_API_KEY environment variable is missing on server.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

export async function POST(req: NextRequest) {
  try {
    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API Key is not configured in environment secrets." },
        { status: 500 }
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body = await req.json() as any;
    const { relationship, tone, occasion, length, context } = body;

    const relationshipStr = relationship || "Universal";
    const toneStr = tone || "Romantic";
    const occasionStr = occasion || "Just Because";
    const lengthStr = length || "Paragraph";

    let lengthInstruction = "";
    if (lengthStr === "Short SMS") {
      lengthInstruction = "Make it short, punchy, and modern, under 140 characters. Perfect for a quick text message.";
    } else if (lengthStr === "Paragraph") {
      lengthInstruction = "Write a single beautifully cohesive paragraph of 3-5 sentences that carries emotional depth and visual romantic descriptions.";
    } else {
      lengthInstruction = "Write a full-length personal letter with a warm salutation, 2-3 structured paragraphs filled with deep emotional narrative and vulnerability, and a poetic closing sign-off.";
    }

    const userPrompt = `Write a romantic message ${relationshipStr ? `directed to: ${relationshipStr}` : ""}.
The tone should be: ${toneStr}.
The occasion is: ${occasionStr}.
Length: ${lengthStr}. ${lengthInstruction}
${context ? `Additional user custom context or memory: ${context}` : ""}

Ensure the response contains only the generated message itself. Do not include markdown code blocks, quotes, introductions like "Here is your message:", or explanations. Just output the romantic text directly so it is ready for copy/pasting.`;

    const ai = getAiClient();
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: "You are an award-winning poetic romantic writer and professional counselor who drafts custom heartfelt love notes. You create authentic, deeply moving, emotionally expressive messages that capture vulnerable and original metaphors. Do not use generic AI cliches like 'tapestry of life', 'beacon of light', 'delicate dance', or 'testament of our love'. Avoid dry and generic greetings. Your writing must feel highly organic, sincere, personal, and profoundly touching.",
        temperature: 0.85,
      },
    });

    const text = response.text || "";
    return NextResponse.json({ text: text.trim() });
  } catch (error: any) {
    console.error("Gemini Generation Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to generate message using Gemini AI." },
      { status: 500 }
    );
  }
}
