import { Test, TestingModule } from '@nestjs/testing';
import { MovieRestController } from './movie-rest.controller';
import { MovieRestService } from './movie-rest.service';

describe('MovieRestController', () => {
  let movieRestController: MovieRestController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MovieRestController],
      providers: [MovieRestService],
    }).compile();

    movieRestController = app.get<MovieRestController>(MovieRestController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(movieRestController.getHello()).toBe('Hello World!');
    });
  });
});
