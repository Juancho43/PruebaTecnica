import { IUserRepository } from '../../Domain/IUserRepository';
import { User } from '../../Domain/User';
import { Model } from 'mongoose';
import { UserMapper } from '../Mongoose/user.mongoose.mapper';
import { InjectModel } from '@nestjs/mongoose';
import { UserMongo, UserMongoDocument } from '../Mongoose/user.mongoose.schema';
import { Injectable } from '@nestjs/common';
@Injectable()
export class MongoDBUserRepository implements IUserRepository {
  constructor(
    @InjectModel(UserMongo.name)
    private userModel: Model<UserMongoDocument>,
  ) {}
  async save(user: User) {
    const userData = UserMapper.domainToMongo(user);

    // Si ya existe, actualizar; si no, crear
    const existingUser = await this.userModel
      .findOne({ email: userData.email })
      .exec();

    if (existingUser) {
      Object.assign(existingUser, userData);
      await existingUser.save();
    } else {
      const createdUser = new this.userModel(userData);
      await createdUser.save();
    }
  }

  async getByEmail(email: string): Promise<User | null> {
    const userDoc = await this.userModel.findOne({ email: email }).exec();

    return userDoc ? UserMapper.mongoToDomain(userDoc) : null;
  }
  async getById(userId: string): Promise<User | null> {
    const userDoc = await this.userModel.findById(userId).exec();
    return userDoc ? UserMapper.mongoToDomain(userDoc) : null;
  }
  async getByToken(userToken: string): Promise<User | null> {
    const userDoc = await this.userModel.findOne({ token: userToken }).exec();
    return userDoc ? UserMapper.mongoToDomain(userDoc) : null;
  }
}
