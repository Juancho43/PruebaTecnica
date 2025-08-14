import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../../Application/user.service';

@Controller('user')
export class UserController {
  private userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }

  @Post('register')
  register(@Body() payload: { email: string; password: string }) {
    this.userService.register(payload.email, payload.password);
    return { message: 'User registered successfully' };
  }

  @Post('login')
  login(@Body() payload: { email: string; password: string }) {
    const user = this.userService.login(payload.email, payload.password);
    if (user) {
      return { message: 'Login successful', user };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
  @Post('logout')
  logout(@Body() payload: { userId: string }) {
    this.userService.logout(payload.userId);
    return { message: 'User logged out successfully' };
  }
}
