import { Module } from '@nestjs/common';
import { UserService } from '../Application/user.service';
import { USER_REPOSITORY_TOKEN } from './user.tokens';
import { MongoDBUserRepository } from './ConcreteRepositories/MongoDBUserRepository';

@Module({
  providers: [
    UserService,
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: MongoDBUserRepository,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
