import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    theme: {
      token: {
        colorPrimary: '#2139e2',
        borderRadius: 4,
      },
    },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    logo: null,
    title: '低代码',
  },
  routes: [
    {
      name: '登录',
      path: '/login',
      component: './Login',
      layout: false,
    },
    {
      name: 'Amis编辑器',
      path: '/page-editor',
      component: './AmisEditor',
      layout: false,
    },
    {
      name: 'Amis渲染',
      path: '/*',
      component: './AmisPage',
    },
  ],
  npmClient: 'pnpm',
});
