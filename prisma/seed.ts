import { PrismaClient } from '@prisma/client';
import { PermissionType, SchemaType } from '@packages/shared';

const prisma = new PrismaClient();

// uuid:
// 6ec2a4d7-58d9-4e85-906b-8534cf011a4a

function constructAmisPage(path: string, name: string, parentId: string) {
  const json = require(`./amis/${path.slice(1).replace(/\//g, '.')}.json`);

  return {
    name,
    path,
    parentId,
    type: PermissionType.PAGE,
    schemaType: SchemaType.AMIS,
    schemaContent: JSON.stringify(json),
  };
}

async function initSystemPermission() {
  await prisma.permission.deleteMany();

  const parent = await prisma.permission.create({
    data: {
      name: '系统管理',
      type: PermissionType.MENU,
      path: '/system',
      redirect: '/system/menu',
    },
  });

  await prisma.permission.createMany({
    data: [
      constructAmisPage('/system/menu', '系统菜单', parent.id),
      constructAmisPage('/system/user', '系统用户', parent.id),
      constructAmisPage('/system/role', '系统角色', parent.id),
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
