import { Controller, Get } from '@nestjs/common';
import { MovieGqlService } from './movie-gql.service';

@Controller()
export class MovieGqlController {
  constructor(private readonly movieGqlService: MovieGqlService) {}

  @Get()
  getHello(): string {
    return this.movieGqlService.getHello();
  }
}
