import { request } from '@umijs/max';

export async function getPermissionMenus() {
  return request('/permission/menus', {
    method: 'GET',
  });
}
