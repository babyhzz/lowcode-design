import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
    },
  ],
  npmClient: 'pnpm',
});

