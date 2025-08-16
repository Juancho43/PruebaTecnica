import {
  Body,
  Controller,
  Post,
  Headers,
  HttpStatus,
  HttpCode,
  HttpException,
} from '@nestjs/common';
import { UserService } from '../../Application/user.service';
import { LoginDTO } from '../DTO/LoginDTO';
import { RegisterDTO } from '../DTO/RegisterDTO';

@Controller('user')
export class UserController {
  private userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }
  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  register(@Body() payload: RegisterDTO) {
    try {
      this.userService.register(payload.email, payload.password);
      return { message: 'User registered successfully' };
    } catch (e) {
      throw new HttpException(`Error:${e.message}`, HttpStatus.BAD_REQUEST);
    }
  }
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() payload: LoginDTO) {
    try {
      const user = await this.userService.login(
        payload.email,
        payload.password,
      );
      return {
        message: 'User logged in successfully',
        data: user ? user.token?.getToken() : null,
      };
    } catch (e) {
      throw new HttpException(`Error:${e.message}`, HttpStatus.BAD_REQUEST);
    }
  }
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(@Headers('authorization') authHeader: string) {
    try {
      await this.userService.logout(authHeader?.replace(/^Bearer\s+/i, ''));
      return { message: 'User logged out successfully' };
    } catch (e) {
      throw new HttpException(`Error:${e.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
