import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'moviedb',
  password: 'moviedb',
  database: 'moviedb',
  entities: [__dirname + '/**/*.entity.ts'],
  migrations: ['apps/movie-postgresql/migrations/**/*.ts'],
  cli: {
    migrationsDir: 'apps/movie-postgresql/migrations',
  },
};

export default config;
