import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { getPrisma } from "@/lib/prisma";

export const runtime = "edge";

export async function GET() {
  try {
    const { env } = getRequestContext<CloudflareEnv>();
    const prisma = getPrisma(env.DB);
    const milestones = await prisma.milestone.findMany();
    return NextResponse.json(milestones);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load milestones" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { env } = getRequestContext<CloudflareEnv>();
    const prisma = getPrisma(env.DB);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body = await req.json() as any;
    const { title, date, description } = body;

    if (!title || !date) {
      return NextResponse.json({ error: "Missing required milestone fields" }, { status: 400 });
    }

    const added = await prisma.milestone.create({
      data: { title, date, description: description || "" }
    });
    return NextResponse.json({ success: true, milestone: added });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add milestone" }, { status: 500 });
  }
}
