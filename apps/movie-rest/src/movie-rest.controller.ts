import { Controller, Get } from '@nestjs/common';
import { MovieRestService } from './movie-rest.service';

@Controller()
export class MovieRestController {
  constructor(private readonly movieRestService: MovieRestService) {}

  @Get()
  getHello(): string {
    return this.movieRestService.getHello();
  }
}
