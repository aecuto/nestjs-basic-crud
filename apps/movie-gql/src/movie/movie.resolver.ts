import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MovieService } from './movie.service';
import { MovieCreate } from './dto/movie.create';
import { NotFoundException } from '@nestjs/common';
import { Movie } from './movie.schema';
import { MovieType } from './dto/movie.type';
import { MovieUpdate } from './dto/movie.update';

@Resolver(() => MovieType)
export class MovieResolver {
  constructor(private movieService: MovieService) {}

  @Query(() => MovieType)
  async movie(@Args('id') id: string): Promise<Movie> {
    const movie = await this.movieService.findOneById(id);
    if (!movie) {
      throw new NotFoundException(id);
    }
    return movie;
  }

  @Query(() => [MovieType])
  async movies(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Mutation(() => MovieType)
  async create(@Args('data') data: MovieCreate): Promise<Movie> {
    return this.movieService.create(data);
  }

  @Mutation(() => MovieType)
  async update(
    @Args('id') id: string,
    @Args('data') data: MovieUpdate,
  ): Promise<Movie> {
    return this.movieService.update(id, data);
  }

  @Mutation(() => MovieType)
  async remove(@Args('id') id: string) {
    return this.movieService.remove(id);
  }
}
