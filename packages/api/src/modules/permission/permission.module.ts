import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { PrismaModule } from '@/modules/prisma/prisma.module';

@Module({
  controllers: [PermissionController],
  providers: [PermissionService],
  imports: [PrismaModule],
  exports: [PermissionService],
})
export class PermissionModule {}
