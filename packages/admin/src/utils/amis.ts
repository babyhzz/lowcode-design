import { RenderOptions } from 'amis';
import { request } from '@umijs/max';

export const fetcher: RenderOptions['fetcher'] = (config) => {
  const { url, method, data } = config;

  console.log('config:', config);
  return request(url, {
    method,
    data,
  });
};
