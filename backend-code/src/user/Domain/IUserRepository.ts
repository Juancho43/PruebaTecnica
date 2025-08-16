import { User } from './User';

export interface IUserRepository {
  getByEmail(email: string): Promise<User | null>;
  getById(userId: string): Promise<User | null>;
  getByToken(userToken: string): Promise<User | null>;
  save(user: User): Promise<void>;
}
