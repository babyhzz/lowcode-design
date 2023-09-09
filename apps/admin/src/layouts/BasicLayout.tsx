import { ProLayout, ProLayoutProps } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';

export type BasicLayoutProps = ProLayoutProps;

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const {
    initialState: { menus },
  } = useModel('@@initialState');

  const { children } = props;

  // use menu.request ?
  const menuDataRender: BasicLayoutProps['menuDataRender'] = () => {
    return menus;
  };

  return (
    <ProLayout {...props} menuDataRender={menuDataRender}>
      {children}
    </ProLayout>
  );
};

export default BasicLayout;
