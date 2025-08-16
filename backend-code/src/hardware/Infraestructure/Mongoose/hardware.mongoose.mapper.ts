import {
  HardwareMongo,
  HardwareMongoDocument,
} from './hardware.mongoose.schema';
import { Hardware } from '../../Domain/Hardware';
import { HardwareName } from '../../Domain/ValueObject/HardwareName';
import { HardwareManufacturer } from '../../Domain/ValueObject/HardwareManufacturer';
import { HardwareSlug } from '../../Domain/ValueObject/HardwareSlug';
import { HardwareModel } from '../../Domain/ValueObject/HardwareModel';
import { HardwareId } from '../../Domain/ValueObject/HardwareId';

export class HardwareMongooseMapper {
  static domainToMongo(hardware: Hardware): Partial<HardwareMongo> {
    return {
      id: hardware.HardwareId.getValue(),
      name: hardware.HardwareName.getValue(),
      slug: hardware.HardwareSlug.getValue(),
      model: hardware.HardwareModel.getValue(),
      manufacturer: hardware.HardwareManufacturer.getValue(),
    };
  }

  static mongoToDomain(hardwareDocument: HardwareMongoDocument): Hardware {
    const id = new HardwareId(hardwareDocument.id);
    const name = new HardwareName(hardwareDocument.name);
    const slug = new HardwareSlug(hardwareDocument.slug);
    const model = new HardwareModel(hardwareDocument.model);
    const manufacturer = new HardwareManufacturer(
      hardwareDocument.manufacturer,
    );
    return new Hardware(id, name, slug, model, manufacturer);
  }
}
