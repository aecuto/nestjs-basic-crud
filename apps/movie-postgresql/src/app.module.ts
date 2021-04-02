import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'moviedb',
      password: 'moviedb',
      database: 'moviedb',
      entities: [__dirname + './**/*.entity.ts'],
      migrations: ['migration/*.ts'],
      cli: {
        migrationsDir: 'migration',
      },
    }),
    MoviesModule,
  ],
})
export class AppModule {}
