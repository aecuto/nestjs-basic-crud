import { Module } from '@nestjs/common';
import { MovieRestController } from './movie-rest.controller';
import { MovieRestService } from './movie-rest.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`),
  ],
  controllers: [MovieRestController],
  providers: [MovieRestService],
})
export class MovieRestModule {}
