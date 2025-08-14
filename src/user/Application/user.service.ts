import { Inject, Injectable } from '@nestjs/common';

import { User } from '../Domain/User';
import { UserEmail } from '../Domain/ValueObject/UserEmail';
import { UserPassword } from '../Domain/ValueObject/UserPassword';
import * as IUserRepository from '../Domain/IUserRepository';
import { USER_REPOSITORY_TOKEN } from '../Infraestructure/user.tokens';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository.IUserRepository,
  ) {}

  register(email: string, password: string): User {
    const userEmail = new UserEmail(email);
    const userPassword = new UserPassword(password);
    const user = new User(userEmail, userPassword);
    this.userRepository.save(user);
    return user;
  }
  login(email: string, password: string): User | null {
    const user = this.getByEmail(email);
    user.login(password);
    this.userRepository.login(email, password);
    return user;
  }
  logout(userId: string): void {
    const user = this.getById(userId);
    user.logout();
    this.userRepository.logout(userId);
  }
  getByEmail(email: string): User {
    const user = this.userRepository.getByEmail(email);
    if (!user) {
      throw new Error(`User with email ${email} not found`);
    }
    return user;
  }
  getById(userId: string): User {
    const user = this.userRepository.getById(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }
    return user;
  }
}
