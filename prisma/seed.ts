// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { PermissionType, SchemaType } from '@packages/shared';

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
      path: '/system',
      redirect: '/system/menu',
    },
  });

  await prisma.permission.createMany({
    data: [
      {
        name: '系统菜单',
        type: PermissionType.PAGE,
        path: '/system/menu',
        parentId: parent.id,
        schemaType: SchemaType.AMIS,
        schemaContent: JSON.stringify({
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
        path: '/system/user',
        parentId: parent.id,
        schemaType: SchemaType.AMIS,
        schemaContent: JSON.stringify({
          title: '增删改查示例',
          remark: 'bla bla bla',
          toolbar: [
            {
              type: 'button',
              actionType: 'dialog',
              label: '新增',
              icon: 'fa fa-plus pull-left',
              primary: true,
              dialog: {
                title: '新增',
                body: {
                  type: 'form',
                  name: 'sample-edit-form',
                  api: 'post:https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample',
                  body: [
                    {
                      type: 'input-text',
                      name: 'engine',
                      label: 'Engine',
                      required: true,
                    },
                    {
                      type: 'divider',
                    },
                    {
                      type: 'input-text',
                      name: 'browser',
                      label: 'Browser',
                      required: true,
                    },
                    {
                      type: 'divider',
                    },
                    {
                      type: 'input-text',
                      name: 'platform',
                      label: 'Platform(s)',
                      required: true,
                    },
                    {
                      type: 'divider',
                    },
                    {
                      type: 'input-text',
                      name: 'version',
                      label: 'Engine version',
                    },
                    {
                      type: 'divider',
                    },
                    {
                      type: 'input-text',
                      name: 'grade',
                      label: 'CSS grade',
                    },
                  ],
                },
              },
            },
          ],
          body: {
            type: 'crud',
            draggable: true,
            api: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample?waitSeconds=1',
            perPage: 15,
            keepItemSelectionOnPageChange: true,
            maxKeepItemSelectionLength: 11,
            labelTpl: '${id} ${engine}',
            orderBy: 'id',
            orderDir: 'asc',
            filter: {
              title: '条件搜索',
              submitText: '',
              body: [
                {
                  type: 'input-text',
                  name: 'keywords',
                  placeholder: '通过关键字搜索',
                  addOn: {
                    label: '搜索',
                    type: 'submit',
                  },
                },
                {
                  type: 'plain',
                  text: '这里的表单项可以配置多个',
                },
              ],
            },
            bulkActions: [
              {
                label: '批量删除',
                actionType: 'ajax',
                api: 'delete:https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/${ids|raw}',
                confirmText: '确定要批量删除?',
              },
              {
                label: '批量修改',
                actionType: 'dialog',
                dialog: {
                  title: '批量编辑',
                  name: 'sample-bulk-edit',
                  body: {
                    type: 'form',
                    api: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/bulkUpdate2',
                    body: [
                      {
                        type: 'hidden',
                        name: 'ids',
                      },
                      {
                        type: 'input-text',
                        name: 'engine',
                        label: 'Engine',
                      },
                    ],
                  },
                },
              },
            ],
            quickSaveApi: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/bulkUpdate',
            quickSaveItemApi: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/$id',
            filterTogglable: true,
            headerToolbar: [
              'filter-toggler',
              'bulkActions',
              {
                type: 'tpl',
                tpl: '定制内容示例：当前有 ${count} 条数据。',
                className: 'v-middle',
              },
              {
                type: 'link',
                href: 'https://www.baidu.com',
                body: '百度一下',
                htmlTarget: '_parent',
                className: 'v-middle',
              },
              {
                type: 'columns-toggler',
                align: 'right',
              },
              {
                type: 'drag-toggler',
                align: 'right',
              },
              {
                type: 'pagination',
                align: 'right',
              },
            ],
            footerToolbar: ['statistics', 'switch-per-page', 'pagination'],
            columns: [
              {
                name: 'id',
                label: 'ID',
                sortable: true,
                type: 'text',
                toggled: true,
                remark: 'Bla bla Bla',
              },
              {
                name: 'engine',
                label: 'Rendering engine',
                sortable: true,
                searchable: true,
                popOver: {
                  body: 'Popover 内容：${platform}',
                  trigger: 'hover',
                },
                popOverEnableOn: 'this.id === 1',
                type: 'text',
                toggled: true,
              },
              {
                name: 'browser',
                label: 'Browser',
                sortable: true,
                type: 'text',
                toggled: false,
              },
              {
                name: 'platform',
                label: 'Platform(s)',
                popOver: {
                  body: 'Popover 内容：${platform}',
                },
                sortable: true,
                type: 'text',
                toggled: true,
              },
              {
                name: 'version',
                label: 'Engine version',
                quickEdit: true,
                type: 'text',
                toggled: true,
                filterable: {
                  options: [
                    {
                      label: '4',
                      value: '4',
                    },
                    {
                      label: '5',
                      value: '5',
                    },
                    {
                      label: '6',
                      value: '6',
                    },
                  ],
                },
                classNameExpr: "<%= data.version < 5 ? 'bg-danger' : '' %>",
              },
              {
                type: 'text',
                name: 'grade',
                label: 'CSS grade',
                quickEdit: {
                  saveImmediately: true,
                  mode: 'inline',
                  type: 'select',
                  options: ['A', 'B', 'C', 'D', 'X'],
                },
              },
              {
                type: 'operation',
                label: '操作',
                width: 100,
                buttons: [
                  {
                    type: 'button',
                    icon: 'fa fa-eye',
                    actionType: 'dialog',
                    tooltip: '查看',
                    dialog: {
                      title: '查看',
                      body: {
                        type: 'form',
                        body: [
                          {
                            type: 'static',
                            name: 'engine',
                            label: 'Engine',
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'static',
                            name: 'browser',
                            label: 'Browser',
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'static',
                            name: 'platform',
                            label: 'Platform(s)',
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'static',
                            name: 'version',
                            label: 'Engine version',
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'static',
                            name: 'grade',
                            label: 'CSS grade',
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'html',
                            html: '<p>添加其他 <span>Html 片段</span> 需要支持变量替换（todo）.</p>',
                          },
                        ],
                      },
                    },
                  },
                  {
                    type: 'button',
                    icon: 'fa fa-pencil',
                    tooltip: '编辑',
                    actionType: 'drawer',
                    drawer: {
                      position: 'left',
                      size: 'lg',
                      title: '编辑',
                      body: {
                        type: 'form',
                        name: 'sample-edit-form',
                        api: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/$id',
                        body: [
                          {
                            type: 'input-text',
                            name: 'engine',
                            label: 'Engine',
                            required: true,
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'input-text',
                            name: 'browser',
                            label: 'Browser',
                            required: true,
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'input-text',
                            name: 'platform',
                            label: 'Platform(s)',
                            required: true,
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'input-text',
                            name: 'version',
                            label: 'Engine version',
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'select',
                            name: 'grade',
                            label: 'CSS grade',
                            options: ['A', 'B', 'C', 'D', 'X'],
                          },
                        ],
                      },
                    },
                  },
                  {
                    type: 'button',
                    icon: 'fa fa-times text-danger',
                    actionType: 'ajax',
                    tooltip: '删除',
                    confirmText: '您确认要删除?',
                    api: 'delete:https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/$id',
                  },
                ],
                toggled: true,
              },
            ],
          },
        }),
      },
      {
        name: '系统角色',
        type: PermissionType.PAGE,
        path: '/system/role',
        parentId: parent.id,
        schemaType: SchemaType.AMIS,
        schemaContent: JSON.stringify({
          title: '增删改查示例',
          remark: 'bla bla bla',
          toolbar: [
            {
              type: 'button',
              actionType: 'dialog',
              label: '新增',
              icon: 'fa fa-plus pull-left',
              primary: true,
              dialog: {
                title: '新增',
                body: {
                  type: 'form',
                  name: 'sample-edit-form',
                  api: 'post:https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample',
                  body: [
                    {
                      type: 'input-text',
                      name: 'engine',
                      label: 'Engine',
                      required: true,
                    },
                    {
                      type: 'divider',
                    },
                    {
                      type: 'input-text',
                      name: 'browser',
                      label: 'Browser',
                      required: true,
                    },
                    {
                      type: 'divider',
                    },
                    {
                      type: 'input-text',
                      name: 'platform',
                      label: 'Platform(s)',
                      required: true,
                    },
                    {
                      type: 'divider',
                    },
                    {
                      type: 'input-text',
                      name: 'version',
                      label: 'Engine version',
                    },
                    {
                      type: 'divider',
                    },
                    {
                      type: 'input-text',
                      name: 'grade',
                      label: 'CSS grade',
                    },
                  ],
                },
              },
            },
          ],
          body: {
            type: 'crud',
            draggable: true,
            api: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample?waitSeconds=1',
            perPage: 15,
            keepItemSelectionOnPageChange: true,
            maxKeepItemSelectionLength: 11,
            labelTpl: '${id} ${engine}',
            orderBy: 'id',
            orderDir: 'asc',
            filter: {
              title: '条件搜索',
              submitText: '',
              body: [
                {
                  type: 'input-text',
                  name: 'keywords',
                  placeholder: '通过关键字搜索',
                  addOn: {
                    label: '搜索',
                    type: 'submit',
                  },
                },
                {
                  type: 'plain',
                  text: '这里的表单项可以配置多个',
                },
              ],
            },
            bulkActions: [
              {
                label: '批量删除',
                actionType: 'ajax',
                api: 'delete:https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/${ids|raw}',
                confirmText: '确定要批量删除?',
              },
              {
                label: '批量修改',
                actionType: 'dialog',
                dialog: {
                  title: '批量编辑',
                  name: 'sample-bulk-edit',
                  body: {
                    type: 'form',
                    api: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/bulkUpdate2',
                    body: [
                      {
                        type: 'hidden',
                        name: 'ids',
                      },
                      {
                        type: 'input-text',
                        name: 'engine',
                        label: 'Engine',
                      },
                    ],
                  },
                },
              },
            ],
            quickSaveApi: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/bulkUpdate',
            quickSaveItemApi: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/$id',
            filterTogglable: true,
            headerToolbar: [
              'filter-toggler',
              'bulkActions',
              {
                type: 'tpl',
                tpl: '定制内容示例：当前有 ${count} 条数据。',
                className: 'v-middle',
              },
              {
                type: 'link',
                href: 'https://www.baidu.com',
                body: '百度一下',
                htmlTarget: '_parent',
                className: 'v-middle',
              },
              {
                type: 'columns-toggler',
                align: 'right',
              },
              {
                type: 'drag-toggler',
                align: 'right',
              },
              {
                type: 'pagination',
                align: 'right',
              },
            ],
            footerToolbar: ['statistics', 'switch-per-page', 'pagination'],
            columns: [
              {
                name: 'id',
                label: 'ID',
                sortable: true,
                type: 'text',
                toggled: true,
                remark: 'Bla bla Bla',
              },
              {
                name: 'engine',
                label: 'Rendering engine',
                sortable: true,
                searchable: true,
                popOver: {
                  body: 'Popover 内容：${platform}',
                  trigger: 'hover',
                },
                popOverEnableOn: 'this.id === 1',
                type: 'text',
                toggled: true,
              },
              {
                name: 'browser',
                label: 'Browser',
                sortable: true,
                type: 'text',
                toggled: false,
              },
              {
                name: 'platform',
                label: 'Platform(s)',
                popOver: {
                  body: 'Popover 内容：${platform}',
                },
                sortable: true,
                type: 'text',
                toggled: true,
              },
              {
                name: 'version',
                label: 'Engine version',
                quickEdit: true,
                type: 'text',
                toggled: true,
                filterable: {
                  options: [
                    {
                      label: '4',
                      value: '4',
                    },
                    {
                      label: '5',
                      value: '5',
                    },
                    {
                      label: '6',
                      value: '6',
                    },
                  ],
                },
                classNameExpr: "<%= data.version < 5 ? 'bg-danger' : '' %>",
              },
              {
                type: 'text',
                name: 'grade',
                label: 'CSS grade',
                quickEdit: {
                  saveImmediately: true,
                  mode: 'inline',
                  type: 'select',
                  options: ['A', 'B', 'C', 'D', 'X'],
                },
              },
              {
                type: 'operation',
                label: '操作',
                width: 100,
                buttons: [
                  {
                    type: 'button',
                    icon: 'fa fa-eye',
                    actionType: 'dialog',
                    tooltip: '查看',
                    dialog: {
                      title: '查看',
                      body: {
                        type: 'form',
                        body: [
                          {
                            type: 'static',
                            name: 'engine',
                            label: 'Engine',
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'static',
                            name: 'browser',
                            label: 'Browser',
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'static',
                            name: 'platform',
                            label: 'Platform(s)',
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'static',
                            name: 'version',
                            label: 'Engine version',
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'static',
                            name: 'grade',
                            label: 'CSS grade',
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'html',
                            html: '<p>添加其他 <span>Html 片段</span> 需要支持变量替换（todo）.</p>',
                          },
                        ],
                      },
                    },
                  },
                  {
                    type: 'button',
                    icon: 'fa fa-pencil',
                    tooltip: '编辑',
                    actionType: 'drawer',
                    drawer: {
                      position: 'left',
                      size: 'lg',
                      title: '编辑',
                      body: {
                        type: 'form',
                        name: 'sample-edit-form',
                        api: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/$id',
                        body: [
                          {
                            type: 'input-text',
                            name: 'engine',
                            label: 'Engine',
                            required: true,
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'input-text',
                            name: 'browser',
                            label: 'Browser',
                            required: true,
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'input-text',
                            name: 'platform',
                            label: 'Platform(s)',
                            required: true,
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'input-text',
                            name: 'version',
                            label: 'Engine version',
                          },
                          {
                            type: 'divider',
                          },
                          {
                            type: 'select',
                            name: 'grade',
                            label: 'CSS grade',
                            options: ['A', 'B', 'C', 'D', 'X'],
                          },
                        ],
                      },
                    },
                  },
                  {
                    type: 'button',
                    icon: 'fa fa-times text-danger',
                    actionType: 'ajax',
                    tooltip: '删除',
                    confirmText: '您确认要删除?',
                    api: 'delete:https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample/$id',
                  },
                ],
                toggled: true,
              },
            ],
          },
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
