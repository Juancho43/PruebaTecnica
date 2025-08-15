import * as crypto from 'crypto';

export class UserPassword {
  private readonly password: string;
  private regexp: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,50}$/;

  constructor(password: string) {
    if (!password.match(this.regexp)) {
      throw new Error(
        'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number',
      );
    }
    this.password = this.hashPassword(password);
  }
  static fromHashed(hashedPassword: string): UserPassword {
    const instance = Object.create(UserPassword.prototype);
    instance.password = hashedPassword;
    return instance;
  }
  getPassword(): string {
    return this.password;
  }

  isCorrect(password: string) {
    const hashedInput = this.hashPassword(password);
    if (this.password !== hashedInput) {
      throw new Error('Incorrect password');
    }
  }
  private hashPassword(password: string): string {
    return crypto.createHash('sha256').update(password).digest('hex');
  }
}
