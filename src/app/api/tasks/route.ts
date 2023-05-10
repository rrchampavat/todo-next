import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const GET = async () => {
  const tasks = await prisma.tasks.findMany({ orderBy: { id: "asc" } });

  return NextResponse.json(tasks);
};
