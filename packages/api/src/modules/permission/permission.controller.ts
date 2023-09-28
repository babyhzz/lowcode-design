import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PermissionTypeOptions, SchemaTypeOptions } from '@/shared/constants';
import { arrayToTree } from '@/shared/utils';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionService.create(createPermissionDto);
  }

  @Get()
  findAll() {
    return this.permissionService.findAll();
  }

  @Get('menus')
  findAllMenus() {
    return this.permissionService.findAllMenus();
  }

  @Get('menus/tree')
  async findAllMenusTree() {
    return arrayToTree(await this.permissionService.findAllMenus());
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
