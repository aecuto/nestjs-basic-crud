import { InputType, PartialType } from '@nestjs/graphql';
import { MovieCreate } from './movie.create';

@InputType()
export class MovieUpdate extends PartialType(MovieCreate) {}
