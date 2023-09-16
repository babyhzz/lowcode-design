import { request } from '@umijs/max';

export async function getPermissionMenus() {
  return request('/permission/menus', {
    method: 'GET',
  });
}
export async function getPermissionSchema(id: string | null | undefined) {
  return request(`/permission/${id}/schema`, {
    method: 'GET',
  });
}
