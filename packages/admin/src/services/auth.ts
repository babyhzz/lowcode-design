import { request } from '@umijs/max';

export async function login(username: string, password: string) {
  return request('/auth/login', {
    method: 'POST',
    data: { username: username, password: password },
  });
}
