import { request } from '@umijs/max';

export async function getPermissions() {
  return request('/permission', {
    method: 'GET',
  });
}
