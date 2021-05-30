const { gql } = require('apollo-server-express');

const schemas = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

module.exports = schemas;
