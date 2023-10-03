import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { omit } from 'lodash';
import { PermissionService } from '../permission/permission.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private permissionService: PermissionService,
  ) {}

  async validateUser(username: string, passowrd: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user && user.password === passowrd) {
      return omit(user, 'password');
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      initPath: await this.permissionService.findFirstAvailableMenuPath(),
    };
  }
}
