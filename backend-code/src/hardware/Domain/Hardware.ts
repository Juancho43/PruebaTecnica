import { HardwareName } from './ValueObject/HardwareName';
import { HardwareModel } from './ValueObject/HardwareModel';
import { HardwareManufacturer } from './ValueObject/HardwareManufacturer';
import { HardwareSlug } from './ValueObject/HardwareSlug';
import { HardwareId } from './ValueObject/HardwareId';
export class Hardware {
  constructor(
    private id: HardwareId,
    private name: HardwareName,
    private slug: HardwareSlug,
    private model: HardwareModel,
    private manufacturer: HardwareManufacturer,
  ) {}

  get HardwareId(): HardwareId {
    return this.id;
  }

  set HardwareId(value: HardwareId) {
    this.id = value;
  }
  get HardwareSlug(): HardwareSlug {
    return this.slug;
  }

  set HardwareSlug(value: HardwareSlug) {
    this.slug = value;
  }

  get HardwareName(): HardwareName {
    return this.name;
  }

  set HardwareName(value: HardwareName) {
    this.name = value;
  }

  get HardwareModel(): HardwareModel {
    return this.model;
  }

  set HardwareModel(value: HardwareModel) {
    this.model = value;
  }

  get HardwareManufacturer(): HardwareManufacturer {
    return this.manufacturer;
  }

  set HardwareManufacturer(value: HardwareManufacturer) {
    this.manufacturer = value;
  }
}
