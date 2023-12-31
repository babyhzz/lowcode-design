export const enum ResponseStatus {
  SUCCESS = 0,
}

export interface Result<T> {
  status: ResponseStatus;
  msg: string;
  data: T;
}

export const enum PermissionType {
  MENU = 1,
  PAGE = 2,
  ACTION = 4,
}

export const enum SchemaType {
  /** 百度 amis 低代码 */
  AMIS = 1,
}
