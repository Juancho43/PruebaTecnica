import {
  Body,
  Controller,
  Post,
  Headers,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { UserService } from '../../Application/user.service';
import { LoginDTO } from '../../Application/DTO/LoginDTO';
import { RegisterDTO } from '../../Application/DTO/RegisterDTO';

@Controller('user')
export class UserController {
  private userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }
  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  register(@Body() payload: RegisterDTO) {
    this.userService.register(payload.email, payload.password);
    return { message: 'User registered successfully' };
  }
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() payload: LoginDTO) {
    const user = await this.userService.login(payload.email, payload.password);
    return {
      message: 'User logged in successfully',
      token: user ? user.token?.getToken() : null,
    };
  }
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(@Headers('authorization') authHeader: string) {
    await this.userService.logout(authHeader?.replace(/^Bearer\s+/i, ''));
    return { message: 'User logged out successfully' };
  }
}
