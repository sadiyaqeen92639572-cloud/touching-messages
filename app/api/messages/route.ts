import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { getPrisma } from "@/lib/prisma";

export const runtime = "edge";

function parseKeywords(raw: string): string[] {
  try { return JSON.parse(raw); } catch { return []; }
}

export async function GET(req: NextRequest) {
  try {
    const { env } = getRequestContext<CloudflareEnv>();
    const prisma = getPrisma(env.DB);
    const rows = await prisma.message.findMany();
    const messages = rows.map(m => ({ ...m, keywords: parseKeywords(m.keywords) }));

    const { searchParams } = new URL(req.url);
    if (searchParams.get("motd") === "true") {
      if (messages.length > 0) {
        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
        return NextResponse.json(messages[dayOfYear % messages.length]);
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
    const { env } = getRequestContext<CloudflareEnv>();
    const prisma = getPrisma(env.DB);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body = await req.json() as any;
    const { action, id, message } = body;

    if (action === "like" && id) {
      const updated = await prisma.message.update({
        where: { id },
        data: { likes: { increment: 1 } }
      });
      return NextResponse.json({ success: true, message: { ...updated, keywords: parseKeywords(updated.keywords) } });
    }

    if (action === "add" && message) {
      const added = await prisma.message.create({
        data: {
          title: message.title,
          body: message.body,
          relationshipTag: message.relationshipTag,
          occasionTag: message.occasionTag,
          tone: message.tone,
          keywords: JSON.stringify(message.keywords || []),
          length: message.length || null,
          slug: message.slug,
        }
      });
      return NextResponse.json({ success: true, message: { ...added, keywords: parseKeywords(added.keywords) } });
    }

    return NextResponse.json({ error: "Invalid action parameters" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
