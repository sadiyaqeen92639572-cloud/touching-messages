import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { getPrisma } from "@/lib/prisma";

export const runtime = "edge";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) return NextResponse.json({ error: "Missing story ID" }, { status: 400 });
    const { env } = getRequestContext<CloudflareEnv>();
    const prisma = getPrisma(env.DB);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body = await req.json() as any;
    const { action, status } = body;

    if (action === "like") {
      const updated = await prisma.story.update({ where: { id }, data: { likes: { increment: 1 } } });
      return NextResponse.json({ success: true, story: updated });
    }

    if (action === "status" && status) {
      if (status !== "Approved" && status !== "Rejected") {
        return NextResponse.json({ error: "Invalid status value" }, { status: 400 });
      }
      if (status === "Rejected") {
        await prisma.story.delete({ where: { id } });
      } else {
        await prisma.story.update({ where: { id }, data: { status } });
      }
      return NextResponse.json({ success: true, message: `Story status updated to ${status}` });
    }

    return NextResponse.json({ error: "Invalid PATCH parameters" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update story" }, { status: 500 });
  }
}
