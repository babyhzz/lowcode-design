import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
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
      path: 'page-editor',
      component: './AmisEditor'
    },
    {
      name: 'Amis渲染',
      path: '/*',
      component: './AmisPage'
    }
  ],
  npmClient: 'pnpm',
});
