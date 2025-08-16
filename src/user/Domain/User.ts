import { UserEmail } from './ValueObject/UserEmail';
import { UserPassword } from './ValueObject/UserPassword';
import { UserToken } from './ValueObject/UserToken';
import { UserId } from './ValueObject/UserId';

export class User {
  private _id: UserId;
  private _email: UserEmail;
  private _password: UserPassword;
  private _token: UserToken | null = null;
  constructor(id: UserId, email: UserEmail, password: UserPassword) {
    this._id = id;
    this._email = email;
    this._password = password;
  }
  login(password: string): string {
    this._password.isCorrect(password);
    this._token = new UserToken();

    return this._token.getToken();
  }
  logout(): void {
    this._token = null;
  }

  get id(): UserId {
    return this._id;
  }

  set id(value: UserId) {
    this._id = value;
  }

  get email(): UserEmail {
    return this._email;
  }

  set email(value: UserEmail) {
    this._email = value;
  }

  get password(): UserPassword {
    return this._password;
  }

  set password(value: UserPassword) {
    this._password = value;
  }

  get token(): UserToken | null {
    return this._token;
  }

  set token(value: UserToken | null) {
    this._token = value;
  }
}
