import { Public } from '@/metas/public';
import { Controller, Post, Request, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Request() req) {
    const user = await this.authService.validateUser(req.body.username, req.body.password);
    if (!user) {
      // throw new HttpException('用户名或密码错误', HttpStatus.UNAUTHORIZED);
      throw new UnauthorizedException('用户名或密码错误');
    }

    return this.authService.login(user);
  }
}
