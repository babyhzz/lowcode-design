import AmisRenderer from '@/components/AmisRenderer';
import useSchema from '@/hooks/useSchema';
import { treeToArray } from '@/utils/array';
import { useLocation, useModel } from '@umijs/max';

const AmisPage: React.FC = () => {
  const location = useLocation();

  const {
    initialState: { menuTree },
  } = useModel('@@initialState');

  const menus = treeToArray(menuTree);
  const menuItem = menus.find((m: any) => m.path === location.pathname);

  const { schema } = useSchema(menuItem?.id);

  return (
    <div className="h-full">
      <AmisRenderer schema={schema} />
    </div>
  );
};

export default AmisPage;
