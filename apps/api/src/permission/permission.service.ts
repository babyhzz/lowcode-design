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

  findOne(id: string) {
    return `This action returns a #${id} permission`;
  }

  async findOneScheme(id: string) {
    const result = await this.prisma.permission.findUnique({
      where: { id },
      select: {
        schemaContent: true,
      },
    });
    return result ? JSON.parse(result.schemaContent) : null;
  }

  update(id: string, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} permission`;
  }

  remove(id: string) {
    return `This action removes a #${id} permission`;
  }
}
