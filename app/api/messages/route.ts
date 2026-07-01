import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const messages = await prisma.message.findMany();
    const { searchParams } = new URL(req.url);
    
    if (searchParams.get("motd") === "true") {
      if (messages.length > 0) {
        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
        const index = dayOfYear % messages.length;
        return NextResponse.json(messages[index]);
      }
      return NextResponse.json({ error: "No messages available" }, { status: 404 });
    }

    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load messages" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, id, message } = body;

    if (action === "like" && id) {
      const updated = await prisma.message.update({
        where: { id },
        data: { likes: { increment: 1 } }
      });
      return NextResponse.json({ success: true, message: updated });
    }

    if (action === "add" && message) {
      const added = await prisma.message.create({
        data: {
          title: message.title,
          body: message.body,
          relationshipTag: message.relationshipTag,
          occasionTag: message.occasionTag,
          tone: message.tone,
          keywords: message.keywords || [],
          length: message.length || null,
          slug: message.slug,
        }
      });
      return NextResponse.json({ success: true, message: added });
    }

    return NextResponse.json({ error: "Invalid action parameters" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
