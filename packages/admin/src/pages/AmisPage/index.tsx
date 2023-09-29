import AmisRenderer from '@/components/AmisRenderer';
import useSchema from '@/hooks/useSchema';
import { treeToArray } from '@/utils/array';
import { Helmet, useLocation, useModel, useRouteData } from '@umijs/max';

const schema = {
  type: 'page',
  title: '菜单管理',
  body: [
    {
      type: 'flex',
      className: 'p-1',
      items: [
        {
          type: 'container',
          body: [
            {
              type: 'crud',
              syncLocation: false,
              api: {
                method: 'get',
                url: '',
              },
              bulkActions: [],
              itemActions: [],
              features: ['create', 'filter'],
              filterColumnCount: 3,
              headerToolbar: [
                {
                  label: '新增',
                  type: 'button',
                  actionType: 'dialog',
                  level: 'primary',
                  dialog: {
                    title: '新增',
                    body: [
                      {
                        type: 'form',
                        api: {
                          method: 'post',
                          url: '',
                        },
                        body: [
                          {
                            type: 'input-text',
                            name: 'engine',
                            label: '渲染引擎',
                            id: 'u:d88bb8a416ec',
                          },
                        ],
                        id: 'u:761f3bb182e2',
                      },
                      {
                        type: 'input-text',
                        label: '文本',
                        name: 'text',
                        id: 'u:e8f1a55141b8',
                        mode: 'horizontal',
                        horizontal: {
                          left: 3,
                          right: 9,
                        },
                      },
                    ],
                    type: 'dialog',
                    id: 'u:133dca2ca8af',
                    showCloseButton: true,
                    closeOnEsc: false,
                    showErrorMsg: true,
                    showLoading: true,
                    withDefaultData: false,
                    dataMapSwitch: false,
                  },
                  id: 'u:53a664e44b67',
                  align: 'right',
                },
                {
                  type: 'bulk-actions',
                },
              ],
              id: 'u:1e307e63b1f2',
              perPageAvailable: [10],
              messages: {},
              defaultParams: {},
              mode: 'table',
              columns: [
                {
                  name: 'id',
                  label: 'ID',
                  type: 'text',
                  id: 'u:8bfc508991d0',
                },
                {
                  name: 'engine',
                  label: '渲染引擎',
                  type: 'text',
                  id: 'u:c94bc3099b7e',
                },
                {
                  type: 'operation',
                  label: '操作',
                  buttons: [
                    {
                      type: 'button-group',
                      buttons: [
                        {
                          type: 'button',
                          label: '按钮1',
                          onEvent: {
                            click: {
                              actions: [],
                            },
                          },
                          id: 'u:11c386a1f108',
                        },
                        {
                          type: 'button',
                          label: '按钮2',
                          onEvent: {
                            click: {
                              actions: [],
                            },
                          },
                          id: 'u:8293c9693898',
                        },
                      ],
                      id: 'u:2a28f8af9849',
                    },
                  ],
                  id: 'u:e379036f3df1',
                },
              ],
              columnsTogglable: 'auto',
            },
          ],
          size: 'xs',
          style: {
            position: 'static',
            display: 'block',
            flex: '1 1 auto',
            flexGrow: 1,
            flexBasis: 'auto',
          },
          wrapperBody: false,
          isFixedHeight: false,
          isFixedWidth: false,
          id: 'u:d8ccc9168549',
        },
      ],
      style: {
        position: 'relative',
      },
      id: 'u:2c86ac1b4041',
    },
  ],
  id: 'u:4098d4c00086',
  aside: [],
  asideResizor: false,
  pullRefresh: {
    disabled: true,
  },
  regions: ['body'],
};

const AmisPage: React.FC = () => {
  const location = useLocation();

  const {
    initialState: { menuTree },
  } = useModel('@@initialState');

  const menus = treeToArray(menuTree);
  const menuItem = menus.find((m: any) => m.path === location.pathname);
  const { schema } = useSchema(menuItem?.id);

  const data = useRouteData();
  console.log('data', data);
  return (
    <div className="h-screen">
      <AmisRenderer schema={schema} />
    </div>
  );
};

export default AmisPage;
