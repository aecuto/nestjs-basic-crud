import { Resolver, Query } from '@nestjs/graphql';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';

@Resolver(() => Movie)
export class MovieResolver {
  constructor(private movieService: MovieService) {}

  @Query(() => [Movie])
  async movies(): Promise<Movie[]> {
    return this.movieService.findAll();
  }
}
