import { User } from './User';

export interface IUserRepository {
  getByEmail(email: string): User | null;
  getById(userId: string): User | null;
  save(user: User): void;
  login(email: string, password: string): User | null;
  logout(userId: string): void;
}
