import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MovieGqlController } from './movie-gql.controller';
import { MovieGqlService } from './movie-gql.service';
import { MovieModule } from './movie/movie.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: __dirname + 'schema.gql',
    }),
    MovieModule,
  ],
  controllers: [MovieGqlController],
  providers: [MovieGqlService],
})
export class MovieGqlModule {}
