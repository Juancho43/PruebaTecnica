import * as crypto from 'crypto';

export class UserToken {
  private readonly token: string;
  private readonly validityPeriod: number = 3600; // 1 hour in seconds
  constructor(validityPeriod?: number) {
    this.validityPeriod = validityPeriod || this.validityPeriod;
    this.token = this.generateToken();
  }
  getToken(): string {
    return this.token;
  }

  checkValidity(): boolean {
    if (!this.isValid()) {
      throw new Error('Token is invalid or expired');
    }
    return true;
  }

  private generateToken(): string {
    return crypto.randomBytes(32).toString('hex');
  }

  private isValid(): boolean {
    const tokenCreationTime = this.validityPeriod;
    const currentTime = Math.floor(Date.now() / 1000);
    return currentTime - tokenCreationTime < this.validityPeriod;
  }
}
