import type { RequestConfig } from 'umi';

import { getPermissionMenus } from './services/permission';
import { arrayToTree } from '@packages/shared';
import { RunTimeLayoutConfig } from '@umijs/max';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ menus: any[] }> {
  const res = await getPermissionMenus();
  return { menus: res.data };
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

export const layout: RunTimeLayoutConfig = ({ initialState }) => {

  if (!initialState) {
    return null;
  }

  return {
    menu: {
      params: initialState,
      request: async () => {
        return arrayToTree(initialState.menus);
      },
    },
  };
};
