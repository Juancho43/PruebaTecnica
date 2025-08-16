export class HardwareModel {
  private readonly value: string;

  constructor(value: string) {
    if (!value || value.length < 3 || value.length > 255) {
      throw new Error(
        'Hardware model must be between 3 and 255 characters long.',
      );
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}
