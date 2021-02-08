import {
  Controller,
  Get,
  HttpStatus,
  Res,
  Query,
  Param,
  NotFoundException,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import { ObjectId } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie';
import { PaginationQueryDto } from './dto/pagination-query';
import { UpdateMovieDto } from './dto/update.movie';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  async getList(@Res() res, @Query() paginationQuery: PaginationQueryDto) {
    const movies = await this.movieService.findAll(paginationQuery);
    return res.status(HttpStatus.OK).json(movies);
  }

  @Get('/:id')
  async getOne(@Res() res, @Param('id') movieId: ObjectId) {
    const movie = await this.movieService.findOne(movieId);
    if (!movie) {
      throw new NotFoundException('movie does not exist!');
    }
    return res.status(HttpStatus.OK).json(movie);
  }

  @Post()
  async create(@Res() res, @Body() createMovieDto: CreateMovieDto) {
    try {
      const movie = await this.movieService.create(createMovieDto);
      return res.status(HttpStatus.OK).json({
        message: 'Movie has been created successfully',
        movie,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Movie not created!',
        status: 400,
      });
    }
  }

  @Put('/:id')
  async update(
    @Res() res,
    @Param('id') movieId: ObjectId,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    try {
      const movie = await this.movieService.update(movieId, updateMovieDto);
      return res.status(HttpStatus.OK).json({
        message: 'Movie has been created successfully',
        movie,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Movie not created!',
        status: 400,
      });
    }
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') movieId: ObjectId) {
    const movie = await this.movieService.delete(movieId);

    if (!movie) {
      throw new NotFoundException('Movie does not exist');
    }

    return res.status(HttpStatus.OK).json({
      message: 'Movie has been deleted',
      movie,
    });
  }
}
