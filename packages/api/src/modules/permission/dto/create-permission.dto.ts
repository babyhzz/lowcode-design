import { PermissionType } from '@/shared/types';
import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreatePermissionDto implements Prisma.PermissionCreateInput {
  @ApiProperty({
    required: false,
  })
  parentId?: string;

  @ApiProperty()
  type: PermissionType;

  @ApiProperty()
  name: string;

  @ApiProperty({
    required: false,
  })
  path?: string;

  @ApiProperty({
    required: false,
  })
  description?: string;

  @ApiProperty({
    required: false,
  })
  schemaType?: number;

  @ApiProperty({
    required: false,
  })
  schemaContent?: string;

  createdBy?: string;
}
