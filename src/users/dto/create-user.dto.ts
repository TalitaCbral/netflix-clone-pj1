import {
  IsString,
  Length,
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateUserDto {
  @IsString({ message: 'Informe um nome válido' })
  @MinLength(2, { message: 'Informe um valor maior que 2' })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Informe um endereço de email válido' })
  @IsString()
  email: string;

  @Length(6, 16)
  @IsString({ message: 'Informe uma senha válida' })
  password: string;

  @Length(6, 16)
  @IsString({ message: 'Informe uma confirmação de senha válida' })
  passwordConfirmation: string;
}
