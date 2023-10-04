import { PermissionType } from '@/shared/types';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePermissionDto {
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

  createdBy: string;
}
