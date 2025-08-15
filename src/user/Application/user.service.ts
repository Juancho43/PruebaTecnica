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
    this.userRepository.save(user).catch((error) => {
      throw new Error('User registration failed' + error);
    });
    return user;
  }
  async login(email: string, password: string): Promise<User | null> {
    const user = await this.getByEmail(email);
    user.login(password);
    await this.userRepository.save(user);
    return user;
  }
  async logout(userToken: string): Promise<void> {
    const user = await this.getByToken(userToken);
    user.logout();
    await this.userRepository.save(user);
  }
  async getByEmail(email: string): Promise<User> {
    const user = await this.userRepository.getByEmail(email).catch((error) => {
      throw new Error(`Error fetching user by email: ${error}`);
    });

    if (!user) {
      throw new Error(`User with email ${email} not found`);
    }
    return user;
  }
  async getByToken(userToken: string): Promise<User> {
    const user = await this.userRepository
      .getByToken(userToken)
      .catch((error) => {
        throw new Error(`Error fetching user by ID: ${error}`);
      });
    if (!user) {
      throw new Error(`User with Token ${userToken} not found`);
    }
    return user;
  }
  async getById(userId: string): Promise<User> {
    const user = await this.userRepository.getById(userId).catch((error) => {
      throw new Error(`Error fetching user by ID: ${error}`);
    });
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }
    return user;
  }
}
