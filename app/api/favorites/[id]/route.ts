import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Missing favorite ID" }, { status: 400 });
    }

    await prisma.favorite.delete({
      where: { id }
    });
    return NextResponse.json({ success: true, message: "Favorite removed successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to remove favorite or not found" }, { status: 404 });
  }
}
