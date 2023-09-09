// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { MenuRenderType, PermissionType } from '@packages/shared';

// initialize Prisma Client
const prisma = new PrismaClient();

// uuid:
// 6ec2a4d7-58d9-4e85-906b-8534cf011a4a

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
        type: PermissionType.PAGE,
        url: '/system/menu',
        parentId: parent.id,
        renderType: MenuRenderType.AMIS,
        renderParams: JSON.stringify({
          type: 'page',
          title: '表单页面',
          body: [
            {
              type: 'form',
              mode: 'horizontal',
              api: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm',
              body: [
                {
                  label: 'Name',
                  type: 'input-text',
                  name: 'name',
                },
                {
                  label: 'Email',
                  type: 'input-email',
                  placeholder: '请输入邮箱地址',
                  name: 'email',
                },
              ],
            },
          ],
        }),
      },
      {
        name: '系统用户',
        type: PermissionType.PAGE,
        url: '/system/user',
        parentId: parent.id,
        renderType: MenuRenderType.AMIS,
        renderParams: JSON.stringify({
          type: 'page',
          title: '表单页面',
          body: [
            {
              type: 'form',
              mode: 'horizontal',
              api: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm',
              body: [
                {
                  label: 'Name',
                  type: 'input-text',
                  name: 'name',
                },
                {
                  label: 'Email',
                  type: 'input-email',
                  placeholder: '请输入邮箱地址',
                  name: 'email',
                },
              ],
            },
          ],
        }),
      },
      {
        name: '系统角色',
        type: PermissionType.PAGE,
        url: '/system/role',
        parentId: parent.id,
        renderType: MenuRenderType.AMIS,
        renderParams: JSON.stringify({
          type: 'page',
          title: '表单页面',
          body: [
            {
              type: 'form',
              mode: 'horizontal',
              api: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm',
              body: [
                {
                  label: 'Name',
                  type: 'input-text',
                  name: 'name',
                },
                {
                  label: 'Email',
                  type: 'input-email',
                  placeholder: '请输入邮箱地址',
                  name: 'email',
                },
              ],
            },
          ],
        }),
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
