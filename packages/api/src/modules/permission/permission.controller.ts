import { PermissionTypeOptions, SchemaTypeOptions } from '@/shared/constants';
import { arrayToTree } from '@/shared/utils';
import { Body, Controller, Delete, Get, Param, Patch, Post, Request } from '@nestjs/common';
import { PermissionItemDto } from './dto/PermissionItem.dto';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PermissionService } from './permission.service';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post('menu-tree')
  create(@Request() req, @Body() createPermissionDto: CreatePermissionDto) {
    createPermissionDto.createdBy = req.user.userId;
    return this.permissionService.create(createPermissionDto);
  }

  @Get()
  findAll() {
    return this.permissionService.findAll();
  }

  @Get('menus')
  async findAllMenus() {
    return (await this.permissionService.findAllMenus()).map((m) => new PermissionItemDto(m));
  }

  @Get('menu-tree')
  async findAllMenusTree() {
    return arrayToTree((await this.permissionService.findAllMenus()).map((m) => new PermissionItemDto(m)));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permissionService.findOne(id);
  }

  @Get(':id/schema')
  findOneSchema(@Param('id') id: string) {
    return this.permissionService.findOneScheme(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
    return this.permissionService.update(id, updatePermissionDto);
  }

  @Patch(':id/schema')
  updateSchema(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
    return this.permissionService.updateSchema(id, updatePermissionDto.schemaContent);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permissionService.remove(id);
  }

  @Get('type/options')
  getTypeOptions() {
    return {
      options: PermissionTypeOptions,
    };
  }

  @Get('schema/options')
  getSchemaTypeOptions() {
    return {
      options: SchemaTypeOptions,
    };
  }
}
