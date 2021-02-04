import { Test, TestingModule } from '@nestjs/testing';
import { MovieGqlController } from './movie-gql.controller';
import { MovieGqlService } from './movie-gql.service';

describe('MovieGqlController', () => {
  let movieGqlController: MovieGqlController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MovieGqlController],
      providers: [MovieGqlService],
    }).compile();

    movieGqlController = app.get<MovieGqlController>(MovieGqlController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(movieGqlController.getHello()).toBe('Hello World!');
    });
  });
});
