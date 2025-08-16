import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class LoginDTO {
  @IsEmail({}, { message: 'El email debe ser válido' })
  @IsNotEmpty({ message: 'El email es obligatorio' })
  email: string;
  @MaxLength(50, {
    message: 'La contraseña no puede tener más de 50 caracteres',
  })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
