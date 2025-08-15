import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserMongoDocument = UserMongo & Document;

@Schema({
  collection: 'users',
  timestamps: true,
})
export class UserMongo {
  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  })
  email: string;

  @Prop({
    required: true,
    minlength: 6,
  })
  password: string;

  @Prop({
    type: String,
    required: false,
    default: null,
  })
  token: string | null;
}

export const UserMongoSchema = SchemaFactory.createForClass(UserMongo);
