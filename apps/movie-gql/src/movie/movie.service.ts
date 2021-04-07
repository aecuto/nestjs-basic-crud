import { Injectable } from '@nestjs/common';
import { Movie } from './movie.model';

@Injectable()
export class MovieService {
  async findAll(): Promise<Movie[]> {
    const movie = new Movie();
    movie.id = 1;
    movie.name = 'Avengers';
    movie.price = 12.13;

    return [movie];
  }
}
