import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const stories = await prisma.story.findMany();
    return NextResponse.json(stories);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load stories" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, nickname, theme, coverImage, content } = body;

    if (!title || !nickname || !theme || !coverImage || !content) {
      return NextResponse.json({ error: "Missing required story fields" }, { status: 400 });
    }

    const added = await prisma.story.create({
      data: {
        title,
        nickname,
        theme,
        coverImage,
        content
      }
    });

    return NextResponse.json({ success: true, story: added });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit story" }, { status: 500 });
  }
}
