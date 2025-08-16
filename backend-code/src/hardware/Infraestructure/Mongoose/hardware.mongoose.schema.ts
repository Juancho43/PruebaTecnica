import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type HardwareMongoDocument = HardwareMongo & Document;

@Schema({
  collection: 'hardware',
  timestamps: true,
})
export class HardwareMongo {
  @Prop({
    unique: true,
    type: SchemaTypes.Mixed,
  })
  id: number | string;
  @Prop({
    required: true,
    lowercase: true,
  })
  name: string;

  @Prop({
    required: true,
    lowercase: true,
    index: true,
    unique: true,
  })
  slug: string;

  @Prop({
    required: true,
    lowercase: true,
  })
  model: string;

  @Prop({
    required: true,
    lowercase: true,
  })
  manufacturer: string;
}

export const HardwareMongoSchema = SchemaFactory.createForClass(HardwareMongo);
