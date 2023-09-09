import type { RequestConfig } from 'umi';

import { getPermissionMenus } from './services/permission';
import { arrayToTree } from '@packages/shared';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ menus: string }> {
  const res = await getPermissionMenus();

  return { menus: arrayToTree(res) };
}

export const request: RequestConfig = {
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  // other axios options you want
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  requestInterceptors: [],
  responseInterceptors: [],
};
