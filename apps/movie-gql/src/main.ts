import { NestFactory } from '@nestjs/core';
import { MovieGqlModule } from './movie-gql.module';

async function bootstrap() {
  const app = await NestFactory.create(MovieGqlModule);
  await app.listen(3000);
}
bootstrap();
