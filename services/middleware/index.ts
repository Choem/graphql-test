import "reflect-metadata";
import express from 'express';
import { ApolloServer, PubSub } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import { createConnection, Connection } from "typeorm";
import { Article } from './src/entities/Article';
import { Person } from './src/entities/Person';
import { PersonResolver } from './src/resolvers/PersonResolver';
import { ArticleResolver } from './src/resolvers/ArticleResolver';

export const app = express();
export const httpServerPort = 4000;
export const httpServer = app.listen(httpServerPort, async () => {
  console.info(`Listening on port ${httpServerPort}`);
  await main();
});

let dbConnection: Connection;

process.on('unhandledRejection', err => {
  throw err;
});

async function main() {
  // Connect to database
  console.info('Connecting to database');
  dbConnection = await connectDb();

  // Run migrations if needed
  console.info('Looking for migrations');
  const migrations = await dbConnection.runMigrations({
    transaction: true
  });

  // Log migrations if there are new ones
  if (migrations.length) {
    console.info('Applied migrations:\n' + migrations.map(migration => `- ${migration.name}`).join('\n'));
  }

  // Create the graphql schema
  console.info('Building GraphQL schema');
  const schema: GraphQLSchema = await buildSchema({
    resolvers: [
      ArticleResolver,
      PersonResolver
    ],
    pubSub: new PubSub()
  })

  // Create the graphql server
  console.info('Creating Apollo server');
  const apolloServer = new ApolloServer({
    schema,
    playground: {
      endpoint: '/middleware/graphql',
      subscriptionEndpoint: '/middleware/graphql/subscriptions'
    },
    subscriptions: {
      path: '/graphql/subscriptions',
      keepAlive: 10000
    },
    formatError: (err) => {
      console.log(err);
      return err;
    }
  });

  // Apply middleware to apollo server
  console.info('Applying middleware to express app')
  apolloServer.applyMiddleware({
    app,
    path: '/graphql'
  });

  // Apply subscriptions handlers to the http server
  console.info('Installing sub handlers to the http servers')
  apolloServer.installSubscriptionHandlers(httpServer);

  console.info('Middleware setup completed');
}

async function connectDb() {
  return createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "piraatkat",
    database: "graphql_test",
    entities: [
      Article,
      Person
    ],
    migrations: ['src/migrations/**.ts'],
    cli: {
      migrationsDir: 'src/migrations'
    },
    charset: 'utf8',
    logging: false
  });
}

export function getDbConnection() {
  return dbConnection;
}
