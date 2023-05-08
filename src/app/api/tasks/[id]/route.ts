import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { cache } from "react";

export const GET = cache(
  async (
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
  }
);

export const PUT = async (
  req: Request,
  { params }: { params: { id: number | string } }
) => {
  try {
    const { id } = params;

    const body: Task = await req.json();

    await prisma.tasks.update({
      data: body,
      where: { id: Number(id) },
    });

    return NextResponse.json("Task updated successfully!");
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 400 }
    );
  }
};
