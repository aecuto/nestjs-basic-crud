import { NestFactory } from '@nestjs/core';
import { MovieRestModule } from './movie-rest.module';

async function bootstrap() {
  const app = await NestFactory.create(MovieRestModule);
  await app.listen(process.env.PORT_REST, process.env.HOST);
  const url = await app.getUrl();
  console.log(`Server running at : ${url}`);
}
bootstrap();
