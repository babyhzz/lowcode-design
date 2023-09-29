import { request } from '@umijs/max';

export async function getPermissionMenus() {
  return request('/permission/menus', {
    method: 'GET',
  });
}

export async function getPermissionMenuTree() {
  return request('/permission/menu-tree', {
    method: 'GET',
  });
}

export async function getPermissionSchema(id: string | null | undefined) {
  return request(`/permission/${id}/schema`, {
    method: 'GET',
  });
}

export async function updatePermissionSchema(id: string | null | undefined, schemaContent: string) {
  return request(`/permission/${id}/schema`, {
    method: 'PATCH',
    data: { schemaContent },
  });
}
