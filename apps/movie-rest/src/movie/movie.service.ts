import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Movie, MovieDocument } from 'schemas/movie.schema';
import { CreateMovieDto } from './dto/create-movie';
import { PaginationQueryDto } from './dto/pagination-query';
import { UpdateMovieDto } from './dto/update.movie';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.movieModel.create(createMovieDto);
  }

  async update(
    movieId: ObjectId,
    updateMovieDto: UpdateMovieDto,
  ): Promise<Movie> {
    return this.movieModel.findByIdAndUpdate(movieId, updateMovieDto);
  }

  async delete(movieId: ObjectId): Promise<Movie> {
    return this.movieModel.findByIdAndDelete(movieId);
  }

  async findAll(paginationQuery: PaginationQueryDto): Promise<Movie[]> {
    const { pageSize, page } = paginationQuery;
    return this.movieModel
      .find()
      .limit(pageSize)
      .skip(pageSize * (page - 1));
  }

  async findOne(movieId: ObjectId): Promise<Movie> {
    const movie = await this.movieModel.findById(movieId);

    if (!movie) {
      throw new NotFoundException(`Movie #${movieId} not found`);
    }

    return movie;
  }
}
