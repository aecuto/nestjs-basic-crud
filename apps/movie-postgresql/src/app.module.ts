import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { MoviesModule } from './movies/movies.module';
import ormconfig from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({ ...ormconfig, autoLoadEntities: true }),
    MoviesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
