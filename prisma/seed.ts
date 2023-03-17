import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// export async function seedData(prisma: PrismaClient) {
//   try {
//     await prisma.user.createMany({
//       data: [
//         {
//           name: "user01",
//           email: "user01@gmail.com",
//           password: "user001",
//           no_identity: "12431534",
//           photo: "whrfuhfeuwif"
//         },
//       ],
//     })
//   } catch (e) {
//     console.log(process);
//     console.log(e);
//     process.exit(1);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "user01",
          email: "user01@gmail.com",
          password: "user001",
          no_identity: "12431531",
          photo: "whrfuhfeuwif1"
      },
      {
        name: "user02",
          email: "user02@gmail.com",
          password: "user002",
          no_identity: "12431532",
          photo: "whrfuhfeuwif2"
      },
    ],
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });