import { PartialType } from '@nestjs/mapped-types';

import { CreateMovieDto } from './movie-create';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
