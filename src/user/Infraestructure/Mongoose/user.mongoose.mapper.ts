import { UserMongo, UserMongoDocument } from './user.mongoose.schema';
import { User } from '../../Domain/User';
import { UserEmail } from '../../Domain/ValueObject/UserEmail';
import { UserPassword } from '../../Domain/ValueObject/UserPassword';
import { UserToken } from '../../Domain/ValueObject/UserToken';

export class UserMapper {
  static domainToMongo(user: User): Partial<UserMongo> {
    return {
      email: user.getEmail().getEmail(),
      password: user.getPassword().getPassword(),
      token: user.getToken()?.getToken() || null,
    };
  }

  static mongoToDomain(userDoc: UserMongoDocument): User {
    const email = new UserEmail(userDoc.email);
    const password = UserPassword.fromHashed(userDoc.password);
    const user = new User(email, password);

    if (userDoc.token) {
      const token = userDoc.token;
      const userToken = new UserToken();
      userToken.setExistingToken(token);
      user.setToken(userToken);
    }

    return user;
  }
}
