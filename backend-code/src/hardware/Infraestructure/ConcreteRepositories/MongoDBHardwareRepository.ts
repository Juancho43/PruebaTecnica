import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import {
  HardwareMongo,
  HardwareMongoDocument,
} from '../Mongoose/hardware.mongoose.schema';
import { Injectable } from '@nestjs/common';
import type { IHardwareRepository } from '../../Domain/IHarwareRepository';
import { Hardware } from 'src/hardware/Domain/Hardware';
import { HardwareMongooseMapper } from '../Mongoose/hardware.mongoose.mapper';

@Injectable()
export class MongoDBHardwareRepository implements IHardwareRepository {
  constructor(
    @InjectModel(HardwareMongo.name)
    private hardwareModel: Model<HardwareMongoDocument>,
  ) {}

  async update(slug: string, hardware: Hardware): Promise<void> {
    const docHardware = HardwareMongooseMapper.domainToMongo(hardware);
    await this.hardwareModel
      .updateOne(
        { slug: slug }, // filtro
        { $set: docHardware }, // datos a actualizar
      )
      .exec();
  }

  async findBySlug(slug: string): Promise<Hardware | null> {
    const hardwareDoc = await this.hardwareModel.findOne({ slug: slug }).exec();
    return hardwareDoc
      ? HardwareMongooseMapper.mongoToDomain(hardwareDoc)
      : null;
  }

  async save(hardware: Hardware): Promise<void> {
    const hardwareData = HardwareMongooseMapper.domainToMongo(hardware);

    const createdUser = new this.hardwareModel(hardwareData);
    await createdUser.save();
  }
  async deleteBySlug(slug: string): Promise<void> {
    await this.hardwareModel.deleteOne({ slug }).exec();
  }

  async findAll(): Promise<Hardware[]> {
    const hardwareDocuments = await this.hardwareModel.find().exec();
    return hardwareDocuments.map((hardwareDoc) =>
      HardwareMongooseMapper.mongoToDomain(hardwareDoc),
    );
  }
}
