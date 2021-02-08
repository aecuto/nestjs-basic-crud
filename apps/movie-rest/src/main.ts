import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT_REST, process.env.HOST);
  const url = await app.getUrl();
  console.log(`Server running at : ${url}`);
}
bootstrap();
