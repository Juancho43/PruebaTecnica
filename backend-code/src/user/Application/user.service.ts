import { Inject, Injectable } from '@nestjs/common';
import { User } from '../Domain/User';
import { UserEmail } from '../Domain/ValueObject/UserEmail';
import { UserPassword } from '../Domain/ValueObject/UserPassword';
import { USER_REPOSITORY_TOKEN } from '../Infraestructure/user.tokens';
import type { IUserRepository } from '../Domain/IUserRepository';
import { UserId } from '../Domain/ValueObject/UserId';
import type { IdGenerator } from '../../shared/IdGeneratorsStrategies/IdGenerator';
import { ID_GENERATOR_TOKEN } from '../../shared/IdGeneratorsStrategies/id.token';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository,

    @Inject(ID_GENERATOR_TOKEN)
    private idGenerator: IdGenerator,
  ) {}

  register(email: string, password: string): User {
    const userId = new UserId(this.idGenerator.generateId());
    const userEmail = new UserEmail(email);
    const userPassword = new UserPassword(password);
    const user = new User(userId, userEmail, userPassword);
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
}
