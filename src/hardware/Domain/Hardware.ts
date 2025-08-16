import { HardwareName } from './ValueObject/HardwareName';
import { HardwareModel } from './ValueObject/HardwareModel';
import { HardwareManufacturer } from './ValueObject/HardwareManufacturer';
import { HardwareSlug } from './ValueObject/HardwareSlug';
import { HardwareId } from './ValueObject/HardwareId';
export class Hardware {
  constructor(
    private _HardwareId: HardwareId,
    private _HardwareName: HardwareName,
    private _HardwareSlug: HardwareSlug,
    private _HardwareModel: HardwareModel,
    private _HardwareManufacturer: HardwareManufacturer,
  ) {}

  get HardwareId(): HardwareId {
    return this._HardwareId;
  }

  set HardwareId(value: HardwareId) {
    this._HardwareId = value;
  }
  get HardwareSlug(): HardwareSlug {
    return this._HardwareSlug;
  }

  set HardwareSlug(value: HardwareSlug) {
    this._HardwareSlug = value;
  }

  get HardwareName(): HardwareName {
    return this._HardwareName;
  }

  set HardwareName(value: HardwareName) {
    this._HardwareName = value;
  }

  get HardwareModel(): HardwareModel {
    return this._HardwareModel;
  }

  set HardwareModel(value: HardwareModel) {
    this._HardwareModel = value;
  }

  get HardwareManufacturer(): HardwareManufacturer {
    return this._HardwareManufacturer;
  }

  set HardwareManufacturer(value: HardwareManufacturer) {
    this._HardwareManufacturer = value;
  }
}
