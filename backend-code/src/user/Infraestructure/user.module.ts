import { Module } from '@nestjs/common';
import { UserService } from '../Application/user.service';
import { USER_REPOSITORY_TOKEN } from './user.tokens';
import { MongoDBUserRepository } from './ConcreteRepositories/MongoDBUserRepository';
import { MongooseModule } from '@nestjs/mongoose';
import { UserMongo, UserMongoSchema } from './Mongoose/user.mongoose.schema';
import { UserController } from './Controllers/user.controller';
import { ID_GENERATOR_TOKEN } from '../../shared/IdGeneratorsStrategies/id.token';
import { NumericGeneratorStrategy } from '../../shared/IdGeneratorsStrategies/NumericGeneratorStrategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserMongo.name, schema: UserMongoSchema },
    ]),
  ],
  providers: [
    UserService,
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: MongoDBUserRepository,
    },
    {
      provide: ID_GENERATOR_TOKEN,
      useClass: NumericGeneratorStrategy,
    },
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
