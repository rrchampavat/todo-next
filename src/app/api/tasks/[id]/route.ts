import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export const runtime = "edge";
export const GET = async (
  _request: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) => {
  const task = await prisma.tasks.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(task);
};

export const PUT = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const taskId = searchParams.get("id");

    const body: Task = await req.json();

    await prisma.tasks.update({
      data: body,
      where: { id: Number(taskId) },
    });
    return NextResponse.json("Task updated successfully!");
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
