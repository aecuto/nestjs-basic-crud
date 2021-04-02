import { EntityRepository, Repository } from 'typeorm';
import { Movies } from '../entities/movies.entity';

@EntityRepository(Movies)
export class MoviesRepository extends Repository<Movies> {}
