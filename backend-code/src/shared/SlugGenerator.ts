export class SlugGenerator {
  static generate(value: string): string {
    return value
      .toLowerCase()
      .trim()
      .replace(/[\s\_]+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }
}
