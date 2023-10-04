import { PermissionTypeOptions, SchemaTypeOptions } from '@/shared/constants';
import { getOptionLabel } from '@/shared/utils';
import { Permission } from '@prisma/client';
import { Exclude, Expose, Transform } from 'class-transformer';

export class PermissionItemDto implements Permission {
  id: string;
  parentId: string;
  type: number;
  name: string;
  path: string;
  redirect: string;
  schemaType: number;
  schemaContent: string;
  description: string;
  createdAt: Date;

  @Exclude()
  createdBy: string;

  updatedAt: Date;
  updatedBy: string;

  @Transform(({ value }) => value.name)
  createdUser: string;

  constructor(partial: Partial<Permission>) {
    Object.assign(this, partial);
  }

  @Expose()
  get typeName(): string {
    return getOptionLabel(this.type, PermissionTypeOptions);
  }

  @Expose()
  get schemaTypeName(): string {
    return getOptionLabel(this.schemaType, SchemaTypeOptions);
  }
}
