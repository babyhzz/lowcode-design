// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { PermissionType } from '@packages/shared';

// initialize Prisma Client
const prisma = new PrismaClient();

async function initSystemPermission() {
  // create two dummy articles
  const parent = await prisma.permission.create({
    data: {
      name: '系统管理',
      type: PermissionType.MENU,
      url: '/system',
    },
  });

  await prisma.permission.createMany({
    data: [
      {
        name: '系统菜单',
        type: PermissionType.MENU,
        url: '/system/menu',
        parentId: parent.id,
      },
      {
        name: '系统用户',
        type: PermissionType.MENU,
        url: '/system/user',
        parentId: parent.id,
      },
      {
        name: '系统角色',
        type: PermissionType.MENU,
        url: '/system/role',
        parentId: parent.id,
      },
    ],
  });
}

async function main() {
  await initSystemPermission();
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
