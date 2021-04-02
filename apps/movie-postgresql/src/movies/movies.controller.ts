import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateMovieDto } from '../dto/movie-create';
import { UpdateMovieDto } from '../dto/movie-update';
import { Movies } from '../entities/movies.entity';
import { MoviesService } from './movies.service';

@Controller('/api/v2/movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  async findAll(): Promise<Movies[]> {
    return this.moviesService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Movies> {
    return this.moviesService.findOne(id);
  }

  @Post()
  async create(@Body() values: CreateMovieDto): Promise<Movies> {
    return this.moviesService.create(values);
  }

  @Put('/:id')
  async update(
    @Body() values: UpdateMovieDto,
    @Param('id') id: number,
  ): Promise<Movies> {
    const product = await this.moviesService.update(id, values);
    return product;
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.moviesService.remove(id);
  }
}
