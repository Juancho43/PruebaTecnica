import { IUserRepository } from '../../Domain/IUserRepository';
import { User } from '../../Domain/User';
export class MongoDBUserRepository implements IUserRepository {
  save(user: User): void {
    throw new Error('Method not implemented.');
  }
  getByEmail(email: string): User | null {
    throw new Error('Method not implemented.');
  }
  getById(userId: string): User | null {
    throw new Error('Method not implemented.');
  }
  login(email: string, password: string): User | null {
    throw new Error('Method not implemented.');
  }
  logout(userId: string): void {
    throw new Error('Method not implemented.');
  }
}
