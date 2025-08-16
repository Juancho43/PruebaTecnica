export class HardwareName {
  private readonly value: string;

  constructor(value: string) {
    if (!value || value.length < 3 || value.length > 50) {
      throw new Error(
        'Hardware name must be between 3 and 50 characters long.',
      );
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}
