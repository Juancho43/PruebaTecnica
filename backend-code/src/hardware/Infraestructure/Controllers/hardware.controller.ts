import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HardwareService } from '../../Application/hardware.service';
import { CreateHardwareDTO } from '../DTO/CreateHardwareDTO';
import { UpdateHardwareDTO } from '../DTO/UpdateHardwareDTO';
import { HardwareResponseDTO } from '../DTO/HardwareResponseDTO';
import {HardwareResponseCollectionDTO} from "../DTO/HardwareResponseCollectionDTO";

@Controller('hardware')
export class HardwareController {
  constructor(private readonly hardwareService: HardwareService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async getAll() {
    try {
      const data = await this.hardwareService.getAll();
      return {
        message: 'Hardware list retrieved successfully',
        data: HardwareResponseCollectionDTO.generate(data),
      };
    } catch (e) {
      throw new HttpException(`Error: ${e.message}`, HttpStatus.BAD_REQUEST);
    }
  }
  @HttpCode(HttpStatus.OK)
  @Get(':slug')
  async getBySlug(@Param('slug') slug: string) {
    try {
      const data = await this.hardwareService.getBySlug(slug);
      return {
        message: 'Hardware retrieved successfully',
        data: HardwareResponseDTO.generate(data),
      };
    } catch (e) {
      throw new HttpException(`Error: ${e.message}`, HttpStatus.BAD_REQUEST);
    }
  }
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() payload: CreateHardwareDTO) {
    try {
      const data = await this.hardwareService.createHardware(
        payload.name,
        payload.model,
        payload.manufacturer,
      );
      return {
        message: 'Hardware created successfully',
        data: HardwareResponseDTO.generate(data),
      };
    } catch (e) {
      throw new HttpException(`Error: ${e.message}`, HttpStatus.BAD_REQUEST);
    }
  }
  @HttpCode(HttpStatus.OK)
  @Put(':slug')
  async updateBySlug(
    @Param('slug') slug: string,
    @Body() payload: UpdateHardwareDTO,
  ) {
    try {
      const data = await this.hardwareService.updateHardware(
        slug,
        payload.name,
        payload.model,
        payload.manufacturer,
      );
      return {
        message: 'Hardware updated successfully',
        data: HardwareResponseDTO.generate(data),
      };
    } catch (e) {
      throw new HttpException(`Error: ${e.message}`, HttpStatus.BAD_REQUEST);
    }
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':slug')
  async delete(@Param('slug') slug: string) {
    try {
      await this.hardwareService.deleteHardware(slug);
    } catch (e) {
      throw new HttpException(`Error: ${e.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
