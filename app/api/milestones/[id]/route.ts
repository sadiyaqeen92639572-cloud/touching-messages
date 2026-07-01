import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Props {
  params: Promise<{ id: string }>;
}

export async function DELETE(req: NextRequest, { params }: Props) {
  try {
    const { id } = await params;
    await prisma.milestone.delete({
      where: { id }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Milestone not found or failed to remove" }, { status: 404 });
  }
}
