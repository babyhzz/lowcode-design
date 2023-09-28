import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { PermissionModule } from './modules/permission/permission.module';

@Module({
  imports: [PrismaModule, UserModule, PermissionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
