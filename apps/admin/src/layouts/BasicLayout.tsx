import AmisRenderer from '@/components/AmisRenderer';
import { ProLayout, ProLayoutProps } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';

export type BasicLayoutProps = ProLayoutProps;

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const {
    initialState: { menus },
  } = useModel('@@initialState');

  const { children } = props;

  console.log('props', props);

  // use menu.request ?
  const menuDataRender: BasicLayoutProps['menuDataRender'] = () => {
    return menus;
  };

  console.log('menus', menus);
  return (
    <ProLayout {...props} menuDataRender={menuDataRender} location={window.location}>
      {/* {children} */}
      <AmisRenderer schema={JSON.parse(menus[0].children[0].renderParams)} />
    </ProLayout>
  );
};

export default BasicLayout;
