import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { PermissionType } from '@packages/shared';

@Injectable()
export class PermissionService {
  constructor(private prisma: PrismaService) {}

  create(createPermissionDto: CreatePermissionDto) {
    return this.prisma.permission.create({ data: createPermissionDto });
  }

  findAll() {
    return this.prisma.permission.findMany();
  }

  findAllMenus() {
    const permissions = this.prisma.permission.findMany({
      where: {
        type: {
          in: [PermissionType.MENU, PermissionType.PAGE],
        },
      },
      select: {
        id: true,
        parentId: true,
        name: true,
        path: true,
        type: true,
        redirect: true,
        schemaType: true,
        createdAt: true,
        createdBy: true,
      },
    });
    return permissions;
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`;
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} permission`;
  }

  remove(id: number) {
    return `This action removes a #${id} permission`;
  }
}
