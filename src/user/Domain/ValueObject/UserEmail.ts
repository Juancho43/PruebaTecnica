export class UserEmail {
  private readonly email: string;
  private regexp: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  constructor(email: string) {
    if (!email.match(this.regexp)) {
      throw new Error('Invalid email format');
    }
    this.email = email;
  }
  getEmail(): string {
    return this.email;
  }
}
