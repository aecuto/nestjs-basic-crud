import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'moviedb',
  password: 'moviedb',
  database: 'moviedb',
  entities: [__dirname + '/**/*.entity.ts'],
  migrations: [__dirname + '/migrations/**/*.ts'],
  cli: {
    migrationsDir: __dirname + '/migrations',
  },
};

export default config;
