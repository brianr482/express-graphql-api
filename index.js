const functions = require('firebase-functions');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const {
  resolvers,
  schemas,
  contextHandler
} = require('./graphql');
require('./scripts/mock-data');

const app = express();

const apolloServer = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: contextHandler,

  // Graphiql
  introspection: true,
  playground: true
});

apolloServer.applyMiddleware({ app, path: '/', cors: true });

exports.graphql = functions.https.onRequest(app);
