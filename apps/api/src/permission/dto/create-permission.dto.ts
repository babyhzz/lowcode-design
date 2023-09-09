import { Prisma } from '@prisma/client';

export class CreatePermissionDto implements Prisma.PermissionCreateInput {
  id?: string;
  parentId?: string;
  type: number;
  name: string;
  url?: string;
  description?: string;
  createdAt?: string | Date;
  createdBy?: string;
  updatedAt?: string | Date;
  updatedBy?: string;
  roles?: Prisma.RolePermissionCreateNestedManyWithoutPermissionInput;
}
