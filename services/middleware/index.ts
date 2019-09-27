import express from 'express';
import { ApolloServer, PubSub } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import { createConnection, Connection } from "typeorm";

import "reflect-metadata";

// Entities
import { Article } from './src/entities/Article';
import { Person } from './src/entities/Person';
import { PersonResolver } from './src/resolvers/PersonResolver';

export const app = express();

export const httpServer = app.listen(4000, () => {
  console.log('Middleware is listening at port 4000');
});

let dbConnection: Connection;

async function main() {
  // Connect to database
  dbConnection = await connectDb();

  // Run migrations if needed
  const migrations = await dbConnection.runMigrations({
    transaction: true
  });

  // Log migrations if there are new ones
  if (migrations.length) {
    console.info('Applied migrations:\n' + migrations.map(migration => `- ${migration.name}`).join('\n'));
  }

  // Create the graphql schema
  const schema: GraphQLSchema = await buildSchema({
    resolvers: [
      PersonResolver
    ],
    pubSub: new PubSub()
  })

  // Create the graphql server
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
  apolloServer.applyMiddleware({
    app,
    path: '/graphql'
  });

  // Apply subscriptions handlers to the http server 
  apolloServer.installSubscriptionHandlers(httpServer);
}

function connectDb() {
  return createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "test",
    entities: [
      Article,
      Person
    ],
    charset: 'utf8',
    logging: false
  });
}

export function getDbConnection() {
  return dbConnection;
}

main();