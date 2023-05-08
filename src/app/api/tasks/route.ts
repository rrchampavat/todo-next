import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const GET = async () => {
  const tasks = (await prisma.tasks.findMany()).sort((a, b) => a.id - b.id);

  return NextResponse.json(tasks);
};
