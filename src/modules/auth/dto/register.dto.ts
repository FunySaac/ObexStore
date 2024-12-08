import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsPostalCode,
  IsString,
  MaxDate,
  MinLength
} from 'class-validator';

const currentDate = new Date();
currentDate.setFullYear(new Date().getFullYear() - 18);

/**
 *
 */
export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(3)
  name: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(3)
  lastName: string;

  @IsPostalCode('US')
  postalCode: number;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  @MaxDate(currentDate)
  birthday: Date;

  @Transform(({ value }) => value.trim())
  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(8)
  password: string;
}
