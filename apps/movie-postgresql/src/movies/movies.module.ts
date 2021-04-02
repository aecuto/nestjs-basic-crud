import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesRepository } from '../repositories/movies.repository';
@Module({
  imports: [TypeOrmModule.forFeature([MoviesRepository])],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
