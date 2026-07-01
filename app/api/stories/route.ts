import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { getPrisma } from "@/lib/prisma";

export const runtime = "edge";

export async function GET() {
  try {
    const { env } = getRequestContext<CloudflareEnv>();
    const prisma = getPrisma(env.DB);
    const stories = await prisma.story.findMany();
    return NextResponse.json(stories);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load stories" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { env } = getRequestContext<CloudflareEnv>();
    const prisma = getPrisma(env.DB);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body = await req.json() as any;
    const { title, nickname, theme, coverImage, content } = body;

    if (!title || !nickname || !theme || !coverImage || !content) {
      return NextResponse.json({ error: "Missing required story fields" }, { status: 400 });
    }

    const added = await prisma.story.create({ data: { title, nickname, theme, coverImage, content } });
    return NextResponse.json({ success: true, story: added });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit story" }, { status: 500 });
  }
}
