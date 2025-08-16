import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HardwareService } from '../../Application/hardware.service';
import { CreateHardwareDTO } from '../DTO/CreateHardwareDTO';
import { UpdateHardwareDTO } from '../DTO/UpdateHardwareDTO';

@Controller('hardware')
export class HardwareController {
  constructor(private readonly hardwareService: HardwareService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async getAll() {
    const data = await this.hardwareService.getAll();
    return {
      message: 'Hardware list retrieved successfully',
      data: data,
    };
  }
  @HttpCode(HttpStatus.OK)
  @Get(':slug')
  async getBySlug(@Param('slug') slug: string) {
    const data = await this.hardwareService.getBySlug(slug);
    return {
      message: 'Hardware retrieved successfully',
      data: data,
    };
  }
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() payload: CreateHardwareDTO) {
    const data = await this.hardwareService.createHardware(
      payload.name,
      payload.model,
      payload.manufacturer,
    );
    return {
      message: 'Hardware created successfully',
      data: data,
    };
  }
  @HttpCode(HttpStatus.OK)
  @Put(':slug')
  async updateBySlug(
    @Param('slug') slug: string,
    @Body() payload: UpdateHardwareDTO,
  ) {
    const data = await this.hardwareService.updateHardware(
      slug,
      payload.name,
      payload.model,
      payload.manufacturer,
    );
    return {
      message: 'Hardware updated successfully',
      data: data,
    };
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':slug')
  async delete(@Param('slug') slug: string) {
    await this.hardwareService.deleteHardware(slug);
  }
}
