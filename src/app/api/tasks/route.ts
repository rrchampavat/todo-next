import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
export const runtime = "edge";
export const GET = async () => {
  const tasks = await prisma.tasks.findMany();

  return NextResponse.json(tasks);
};
