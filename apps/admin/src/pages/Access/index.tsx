import { render as renderAmis } from 'amis';
import 'amis/lib/helper.css';
import 'amis/lib/themes/cxd.css';
import 'amis/sdk/iconfont.css';

const schema = {
  type: 'page',
  body: [
    {
      label: '新增',
      type: 'button',
      actionType: 'dialog',
      level: 'primary',
      className: 'm-b-sm',
      dialog: {
        title: '新增表单',
        body: {
          type: 'form',
          api: 'post:https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/sample',
          body: [
            {
              type: 'input-text',
              name: 'engine',
              label: 'Engine',
            },
            {
              type: 'input-text',
              name: 'browser',
              label: 'Browser',
            },
          ],
        },
      },
    },
    {
      type: 'crud',
      api: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/sample?orderBy=id&orderDir=desc',
      syncLocation: false,
      columns: [
        {
          name: 'id',
          label: 'ID',
        },
        {
          name: 'engine',
          label: 'Rendering engine',
        },
        {
          name: 'browser',
          label: 'Browser',
        },
        {
          name: 'platform',
          label: 'Platform(s)',
        },
        {
          name: 'version',
          label: 'Engine version',
        },
        {
          name: 'grade',
          label: 'CSS grade',
        },
      ],
    },
  ],
};

const AccessPage: React.FC = () => {
  return (
    <div>
      {renderAmis(schema, {
        data: {
          username: 'amis',
        },
      })}
    </div>
  );
};

export default AccessPage;
