import { ApiProperty } from '@nestjs/swagger';
import { PermissionType } from '@packages/shared';
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
}
