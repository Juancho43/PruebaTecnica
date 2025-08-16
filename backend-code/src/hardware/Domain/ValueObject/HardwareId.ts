import { IdValueObject } from '../../../shared/IdValueObject';

export class HardwareId extends IdValueObject {
  constructor(private readonly value: string | number) {
    super(value);
  }
  getValue(): string | number {
    return super.getValue();
  }
}
