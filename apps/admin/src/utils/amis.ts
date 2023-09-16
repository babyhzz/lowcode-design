import { RenderOptions } from "amis";
import { request } from '@umijs/max';


export const fetcher: RenderOptions['fetcher'] = config => {
  const { url, method } = config;

  return request(url, {
    method
  })
}