import { getPermissionSchema } from '@/services/permission';
import { useRequest } from '@umijs/max';

export default function useSchema(id: string) {
  const { data, loading } = useRequest(() => getPermissionSchema(id), {
    refreshDeps: [id],
  });

  return {
    schema: data,
    loading,
  };
}
