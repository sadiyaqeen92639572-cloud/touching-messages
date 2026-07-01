import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { getPrisma } from "@/lib/prisma";

export const runtime = "edge";

export async function GET() {
  try {
    const { env } = getRequestContext<CloudflareEnv>();
    const prisma = getPrisma(env.DB);
    const favorites = await prisma.favorite.findMany();
    const mapped = favorites.map(f => ({
      id: f.id,
      messageId: f.messageId,
      customizedText: f.customizedText,
      style: { font: f.font, background: f.background, textColor: f.textColor },
      savedAt: f.savedAt.toISOString(),
      title: f.title,
      relationshipTag: f.relationshipTag,
      occasionTag: f.occasionTag
    }));
    return NextResponse.json(mapped);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load favorites" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { env } = getRequestContext<CloudflareEnv>();
    const prisma = getPrisma(env.DB);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body = await req.json() as any;
    const { messageId, customizedText, style, title, relationshipTag, occasionTag } = body;

    if (!messageId || !customizedText || !style) {
      return NextResponse.json({ error: "Missing required favorite fields" }, { status: 400 });
    }

    const existing = await prisma.favorite.findFirst({ where: { messageId, customizedText } });

    let added;
    if (existing) {
      added = await prisma.favorite.update({
        where: { id: existing.id },
        data: { font: style.font, background: style.background, textColor: style.textColor }
      });
    } else {
      added = await prisma.favorite.create({
        data: {
          messageId,
          customizedText,
          font: style.font,
          background: style.background,
          textColor: style.textColor,
          title: title || "Custom Message",
          relationshipTag: relationshipTag || "Universal",
          occasionTag: occasionTag || "Just Because"
        }
      });
    }

    return NextResponse.json({
      success: true,
      favorite: {
        id: added.id,
        messageId: added.messageId,
        customizedText: added.customizedText,
        style: { font: added.font, background: added.background, textColor: added.textColor },
        savedAt: added.savedAt.toISOString(),
        title: added.title,
        relationshipTag: added.relationshipTag,
        occasionTag: added.occasionTag
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save favorite" }, { status: 500 });
  }
}
