import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
