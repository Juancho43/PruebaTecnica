export class HardwareSlug {
  private readonly value: string;

  constructor(value: string) {
    if (!value || value.length < 3 || value.length > 255) {
      throw new Error(
        'Hardware slug must be between 3 and 255 characters long.',
      );
    }
    if (!/^[a-z0-9-]+$/.test(value)) {
      throw new Error(
        'Hardware slug must contain only lowercase letters, numbers, and hyphens.',
      );
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}
