import { UserEmail } from './ValueObject/UserEmail';
import { UserPassword } from './ValueObject/UserPassword';
import { UserToken } from './ValueObject/UserToken';

export class User {
  private email: UserEmail;
  private password: UserPassword;
  private token: UserToken | null = null;
  constructor(email: UserEmail, password: UserPassword) {
    this.email = email;
    this.password = password;
  }
  login(password: string): string {
    this.password.isCorrect(password);
    this.token = new UserToken();

    return this.token.getToken();
  }
  logout(): void {
    this.token = null;
  }
  getToken(): UserToken | null {
    return this.token;
  }
  getEmail(): UserEmail {
    return this.email;
  }
  getPassword(): UserPassword {
    return this.password;
  }
  setEmail(email: UserEmail): void {
    this.email = email;
  }
  setPassword(password: UserPassword): void {
    this.password = password;
  }
}
