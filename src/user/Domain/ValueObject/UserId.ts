import { IdValueObject } from '../../../shared/IdValueObject';

export class UserId extends IdValueObject {
  constructor(private readonly value: string | number) {
    super(value);
  }

  getValue(): string | number {
    return super.getValue();
  }
}
