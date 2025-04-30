import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { connection } from "next/server";

export default async function Home() {
  // Force SSR
  connection();

  const connectionString = "example";

  const adapter = new PrismaPg({ connectionString });
  const prisma = new PrismaClient({ adapter });

  const posts = await prisma.post.findMany();
  return (
    <div>
      <div>{Date()}</div>
      <div>{JSON.stringify(posts)}</div>
    </div>
  );
}
