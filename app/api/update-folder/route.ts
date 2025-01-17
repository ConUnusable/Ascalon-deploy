export const runtime = 'nodejs';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.json();

  const newFolder = await prisma.folder.create({
    data: {
      folder: data.folder,
      parentId: data.parentId,
    },
  });

  return new Response(JSON.stringify(data), { status: 201 });
}