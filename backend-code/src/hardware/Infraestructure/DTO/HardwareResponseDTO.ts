import { Hardware } from '../../Domain/Hardware';

export class HardwareResponseDTO {
  static generate(data: Hardware) {
    return {
      id: data.HardwareId.getValue(),
      name: data.HardwareName.getValue(),
      model: data.HardwareModel.getValue(),
      slug: data.HardwareSlug.getValue(),
      manufacturer: data.HardwareManufacturer.getValue(),
    };
  }
}
