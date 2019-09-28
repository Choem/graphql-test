module.exports = {
  type: 'mysql',
  database: 'graphql_test',
  host: 'localhost',
  username: 'root',
  password: 'piraatkat',
  timezone: 'UTC',
  connectTimeout: 2000,
  entities: ['src/entities/**.ts'],
  migrations: ['src/migrations/**.ts'],
  cli: {
    migrationsDir: 'src/migrations'
  }
};