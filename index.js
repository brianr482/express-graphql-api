import express from 'express';
import cors from 'cors';
import http from 'http';
import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import {
  resolvers,
  schemas,
  contextHandler
} from './graphql/index.js';
import './db/index.js'

const app = express();
const httpServer = http.createServer(app);

// Create the GraphQL server instance
const apolloServer = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context: contextHandler,

  // Sandbox
  introspection: true,
});

await apolloServer.start();

// Integrate GraphQL server with Express
app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(
    apolloServer,
    { context: contextHandler },
  ),
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log('🚀  Running server on http://localhost:4000/graphql');
