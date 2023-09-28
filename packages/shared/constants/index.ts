import { PermissionType, SchemaType } from '../types';

type Options<T> = Array<{ value: T; label: string }>;

export const PermissionTypeOptions: Options<PermissionType> = [
  { value: PermissionType.MENU, label: '菜单' },
  { value: PermissionType.PAGE, label: '页面' },
  { value: PermissionType.ACTION, label: '按钮' },
];

export const SchemaTypeOptions: Options<SchemaType> = [{ value: SchemaType.AMIS, label: '百度AMIS' }];
