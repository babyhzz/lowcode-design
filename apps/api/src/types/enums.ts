export const enum PermissionType {
  MENU = 1,
  PAGE = 2,
  ACTION = 4,
}

export const enum SchemaType {
  /** 百度 amis 低代码 */
  AMIS = 1,
}

export const enum ResponseStatus {
  SUCCESS = 0,
}

type Options<T> = Array<{ value: T; label: string }>;

export const PermissionTypeOptions: Options<PermissionType> = [
  { value: PermissionType.MENU, label: '菜单' },
  { value: PermissionType.PAGE, label: '页面' },
  { value: PermissionType.ACTION, label: '按钮' },
];

export const SchemaTypeOptions: Options<SchemaType> = [{ value: SchemaType.AMIS, label: '百度AMIS' }];
