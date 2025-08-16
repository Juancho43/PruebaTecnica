import { Injectable } from '@nestjs/common';
import { IdGenerator } from './IdGenerator';

@Injectable()
export class NumericGeneratorStrategy implements IdGenerator {
  generateId(): number {
    return Date.now();
  }
}
