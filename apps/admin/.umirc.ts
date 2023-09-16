import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: false,
  access: false,
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      name: '首页',
      path: '/home',
      component: './Home',
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
