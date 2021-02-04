import {
  MaxLength,
  IsNotEmpty,
  IsEmail,
  IsString,
  IsNumber,
} from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @MaxLength(30)
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  @IsEmail()
  readonly detail: string;
}
