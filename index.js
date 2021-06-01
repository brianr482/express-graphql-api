const functions = require('firebase-functions');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const {
  resolvers,
  schemas,
  contextHandler
} = require('./graphql');

// Populate datasources with mock data
require('./scripts/mock-data');

const app = express();

// Create the GraphQL server instance
const apolloServer = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: contextHandler,

  // Graphiql
  introspection: true,
  playground: true
});

// Integrate GraphQL server with Express
apolloServer.applyMiddleware({ app, path: '/', cors: true });

exports.graphql = functions.https.onRequest(app);
