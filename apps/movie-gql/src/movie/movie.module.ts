import { Module } from '@nestjs/common';
import { MovieResolver } from './movie.resolver';
import { MovieService } from './movie.service';

@Module({
  controllers: [],
  providers: [MovieResolver, MovieService],
})
export class MovieModule {}
