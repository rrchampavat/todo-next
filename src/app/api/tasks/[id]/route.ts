import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

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
