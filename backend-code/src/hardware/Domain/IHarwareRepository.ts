import { Hardware } from './Hardware';

export interface IHardwareRepository {
  findBySlug(slug: string): Promise<Hardware | null>;
  save(hardware: Hardware): Promise<void>;
  update(slug: string, hardware: Hardware): Promise<void>;
  deleteBySlug(slug: string): Promise<void>;
  findAll(): Promise<Hardware[]>;
}
