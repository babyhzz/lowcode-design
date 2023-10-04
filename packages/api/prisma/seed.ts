import { PrismaClient, User } from '@prisma/client';
import { PermissionType, SchemaType } from '@/shared/types';

const prisma = new PrismaClient();

// uuid:
// 6ec2a4d7-58d9-4e85-906b-8534cf011a4a

function constructAmisPage(path: string, name: string, parentId: string, createdBy: string) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const json = require(`./amis/${path.slice(1).replace(/\//g, '.')}.json`);

  return {
    name,
    path,
    parentId,
    type: PermissionType.PAGE,
    schemaType: SchemaType.AMIS,
    schemaContent: JSON.stringify(json),
    createdBy,
  };
}

async function initSystemPermission(user: User) {
  await prisma.permission.deleteMany();

  const parent = await prisma.permission.create({
    data: {
      name: '系统管理',
      type: PermissionType.MENU,
      path: '/system',
      redirect: '/system/menu',
      createdBy: user.id,
    },
  });

  await prisma.permission.createMany({
    data: [
      constructAmisPage('/system/menu', '系统菜单', parent.id, user.id),
      constructAmisPage('/system/user', '系统用户', parent.id, user.id),
      constructAmisPage('/system/role', '系统角色', parent.id, user.id),
    ],
  });
}

async function initAdminUser() {
  const user = await prisma.user.create({
    data: {
      username: 'admin',
      password: '123',
      name: '管理员',
    },
  });

  return user;
}

async function main() {
  const adminUser = await initAdminUser();
  await initSystemPermission(adminUser);
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
