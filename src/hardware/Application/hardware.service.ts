import { Inject, Injectable } from '@nestjs/common';
import type { IHardwareRepository } from '../Domain/IHarwareRepository';
import { HARDWARE_REPOSITORY_TOKEN } from '../Infraestructure/hardware.tokens';
import { ID_GENERATOR_TOKEN } from '../../shared/IdGeneratorsStrategies/id.token';
import type { IdGenerator } from '../../shared/IdGeneratorsStrategies/IdGenerator';
import { HardwareName } from '../Domain/ValueObject/HardwareName';
import { HardwareModel } from '../Domain/ValueObject/HardwareModel';
import { HardwareManufacturer } from '../Domain/ValueObject/HardwareManufacturer';
import { HardwareId } from '../Domain/ValueObject/HardwareId';
import { Hardware } from '../Domain/Hardware';
import { SlugGenerator } from '../../shared/SlugGenerator';
import { HardwareSlug } from '../Domain/ValueObject/HardwareSlug';

@Injectable()
export class HardwareService {
  constructor(
    @Inject(HARDWARE_REPOSITORY_TOKEN)
    private readonly hardwareRepository: IHardwareRepository,
    @Inject(ID_GENERATOR_TOKEN)
    private idGenerator: IdGenerator,
  ) {}

  async getBySlug(slug: string): Promise<Hardware> {
    const hardware = await this.hardwareRepository.findBySlug(slug);
    if (!hardware) {
      throw new Error('Hardware not found');
    }
    return hardware;
  }

  async getAll(): Promise<Hardware[]> {
    return this.hardwareRepository.findAll();
  }

  async createHardware(
    name: string,
    model: string,
    manufacturer: string,
  ): Promise<Hardware> {
    const id = new HardwareId(this.idGenerator.generateId());
    const hardwareName = new HardwareName(name);
    const hardwareModel = new HardwareModel(model);
    const hardwareManufacturer = new HardwareManufacturer(manufacturer);
    const slug = new HardwareSlug(SlugGenerator.generate(model));
    const hardware = new Hardware(
      id,
      hardwareName,
      slug,
      hardwareModel,
      hardwareManufacturer,
    );
    await this.hardwareRepository.save(hardware);
    return hardware;
  }

  async updateHardware(
    slug: string,
    name: string,
    model: string,
    manufacturer: string,
  ): Promise<Hardware> {
    const hardware = await this.getBySlug(slug);
    const hardwareName = new HardwareName(name);
    const hardwareSlug = new HardwareSlug(SlugGenerator.generate(model));
    const hardwareModel = new HardwareModel(model);
    const hardwareManufacturer = new HardwareManufacturer(manufacturer);
    const updatedHardware = new Hardware(
      hardware.HardwareId,
      hardwareName,
      hardwareSlug,
      hardwareModel,
      hardwareManufacturer,
    );
    await this.hardwareRepository.update(slug, updatedHardware);
    return updatedHardware;
  }

  async deleteHardware(slug: string) {
    await this.hardwareRepository.deleteBySlug(slug);
  }
}
