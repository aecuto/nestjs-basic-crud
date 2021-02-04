import { Module } from '@nestjs/common';
import { MovieGqlController } from './movie-gql.controller';
import { MovieGqlService } from './movie-gql.service';

@Module({
  imports: [],
  controllers: [MovieGqlController],
  providers: [MovieGqlService],
})
export class MovieGqlModule {}
