import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateHardwareDTO {
  @IsString({ message: 'El nombre debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MaxLength(50, { message: 'El nombre no puede ser mayor a 50 caracteres' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  public readonly name: string;
  @IsString({ message: 'El modelo debe ser un texto' })
  @IsNotEmpty({ message: 'El modelo es obligatorio' })
  @MaxLength(255, { message: 'El modelo no puede ser mayor a 255 caracteres' })
  @MinLength(3, { message: 'El modelo debe tener al menos 3 caracteres' })
  public readonly model: string;

  @IsNotEmpty({ message: 'El fabricante es obligatorio' })
  @IsString({ message: 'El fabricante debe ser un texto' })
  @MaxLength(255, {
    message: 'El fabricante no puede ser mayor a 255 caracteres',
  })
  @MinLength(3, { message: 'El modelo debe tener al menos 3 caracteres' })
  public readonly manufacturer: string;

  constructor(name: string, model: string, manufacturer: string) {
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
  }
}
