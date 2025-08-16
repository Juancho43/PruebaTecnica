import { Hardware } from '../../Domain/Hardware';
import { HardwareResponseDTO } from './HardwareResponseDTO';

export class HardwareResponseCollectionDTO {
  static generate(data: Hardware[]) {
    let response: HardwareResponseDTO[] = [];
    for (const hardware of data) {
      response.push(HardwareResponseDTO.generate(hardware));
    }
    return response;
  }
}
