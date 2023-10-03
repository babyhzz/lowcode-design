import type { RequestConfig } from 'umi';

import { RunTimeLayoutConfig } from '@umijs/max';
import { getPermissionMenuTree } from './services/permission';
import { getToken } from './utils/storage';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ menuTree: any[] }> {
  const res = await getPermissionMenuTree();
  return { menuTree: res.data };
}

export const request: RequestConfig = {
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  // other axios options you want
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  requestInterceptors: [
    (config: any) => {
      console.log(config);
      return {
        ...config,
        headers: { Authorization: `Bearer ${getToken()}` },
      };
    },
  ],
  responseInterceptors: [],
};

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  if (!initialState) {
    return {};
  }

  return {
    menu: {
      params: initialState,
      request: async () => {
        return initialState.menuTree || [];
      },
    },
  };
};
