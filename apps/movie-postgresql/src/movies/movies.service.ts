import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movies } from '../entities/movies.entity';
import { CreateMovieDto } from '../dto/movie-create';
import { UpdateMovieDto } from '../dto/movie-update';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies)
    private moviesRepository: Repository<Movies>,
  ) {}

  async findAll(): Promise<Movies[]> {
    return this.moviesRepository.find();
  }

  async findOne(id: number): Promise<Movies> {
    const product = await this.moviesRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Movie #${id} not found`);
    }
    return product;
  }

  async create(values: CreateMovieDto): Promise<Movies> {
    try {
      const movie = this.moviesRepository.create(values);
      return this.moviesRepository.save(movie);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, values: UpdateMovieDto): Promise<Movies> {
    const product = await this.moviesRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Movie #${id} not found`);
    }

    await this.moviesRepository.update(id, values);

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const product = await this.moviesRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Movie #${id} not found`);
    }
    await this.moviesRepository.delete(id);
  }
}
