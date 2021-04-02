import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
