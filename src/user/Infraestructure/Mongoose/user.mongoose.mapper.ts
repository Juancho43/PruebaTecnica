import { UserMongo, UserMongoDocument } from './user.mongoose.schema';
import { User } from '../../Domain/User';
import { UserEmail } from '../../Domain/ValueObject/UserEmail';
import { UserPassword } from '../../Domain/ValueObject/UserPassword';
import { UserToken } from '../../Domain/ValueObject/UserToken';
import { UserId } from '../../Domain/ValueObject/UserId';

export class UserMapper {
  static domainToMongo(user: User): Partial<UserMongo> {
    return {
      id: user.id.getValue(),
      email: user.email.getEmail(),
      password: user.password.getPassword(),
      token: user.token?.getToken() || null,
    };
  }

  static mongoToDomain(userDoc: UserMongoDocument): User {
    const id = new UserId(userDoc.id);
    const email = new UserEmail(userDoc.email);
    const password = UserPassword.fromHashed(userDoc.password);
    const user = new User(id, email, password);

    if (userDoc.token) {
      const token = userDoc.token;
      const userToken = new UserToken();
      userToken.setExistingToken(token);
      user.token = userToken;
    }

    return user;
  }
}
