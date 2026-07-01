import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const milestones = await prisma.milestone.findMany();
    return NextResponse.json(milestones);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load milestones" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, date, description } = body;

    if (!title || !date) {
      return NextResponse.json({ error: "Missing required milestone fields" }, { status: 400 });
    }

    const added = await prisma.milestone.create({
      data: {
        title,
        date,
        description: description || ""
      }
    });

    return NextResponse.json({ success: true, milestone: added });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add milestone" }, { status: 500 });
  }
}
