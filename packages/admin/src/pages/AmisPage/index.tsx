import AmisRenderer from '@/components/AmisRenderer';
import useSchema from '@/hooks/useSchema';
import { treeToArray } from '@/utils/array';
import { Helmet, history, useLocation, useModel, useRouteData } from '@umijs/max';

const AmisPage: React.FC = () => {
  const location = useLocation();

  const {
    initialState: { menuTree },
  } = useModel('@@initialState');

  const menus = treeToArray(menuTree);
  const menuItem = menus.find((m: any) => m.path === location.pathname);
  // if (!menuItem && menus.length) {
  //   // 菜单中不存在，跳转至第一个页面
  //   const path = menus.filter((m: any) => m.type === 2)[0].path;
  //   history.push(path);
  // }

  const { schema } = useSchema(menuItem?.id);

  return (
    <div className="h-screen">
      <AmisRenderer schema={schema} />
    </div>
  );
};

export default AmisPage;
