export abstract class IdValueObject {
  protected constructor(protected readonly id: string | number) {
    if (!id) {
      throw new Error('ID cannot be empty');
    }
  }

  getValue(): string | number {
    return this.id;
  }
}
