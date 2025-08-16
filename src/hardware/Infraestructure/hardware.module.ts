import { Module } from '@nestjs/common';
import { HARDWARE_REPOSITORY_TOKEN } from './hardware.tokens';
import { MongooseModule } from '@nestjs/mongoose';
import {
  HardwareMongo,
  HardwareMongoSchema,
} from './Mongoose/hardware.mongoose.schema';
import { MongoDBHardwareRepository } from './ConcreteRepositories/MongoDBHardwareRepository';
import { HardwareController } from './Controllers/hardware.controller';
import { HardwareService } from '../Application/hardware.service';
import { ID_GENERATOR_TOKEN } from '../../shared/IdGeneratorsStrategies/id.token';
import { NumericGeneratorStrategy } from '../../shared/IdGeneratorsStrategies/NumericGeneratorStrategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HardwareMongo.name, schema: HardwareMongoSchema },
    ]),
  ],
  providers: [
    HardwareService,
    {
      provide: HARDWARE_REPOSITORY_TOKEN,
      useClass: MongoDBHardwareRepository,
    },
    {
      provide: ID_GENERATOR_TOKEN,
      useClass: NumericGeneratorStrategy,
    },
  ],
  controllers: [HardwareController],
  exports: [HardwareService],
})
export class HardwareModule {}
