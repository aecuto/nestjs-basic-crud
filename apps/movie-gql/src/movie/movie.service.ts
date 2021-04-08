import { Injectable } from '@nestjs/common';
import { Movie, MovieDocument } from './movie.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MovieCreate } from './dto/movie.create';
import { MovieUpdate } from './dto/movie.update';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find();
  }

  async create(data: MovieCreate): Promise<Movie> {
    return this.movieModel.create(data);
  }

  async update(id: string, data: MovieUpdate): Promise<Movie> {
    return this.movieModel.findByIdAndUpdate(id, data);
  }

  async findOneById(id: string): Promise<Movie> {
    return this.movieModel.findById(id);
  }

  async remove(id: string): Promise<Movie> {
    return this.movieModel.findByIdAndDelete(id);
  }
}
