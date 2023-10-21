export const schemas = `#graphql
  # Queries
  type Query {
    tweets: [Tweet]
    tweet(id: ID): Tweet
    users: [User]
    user(id: ID): User
  }

  # Object types
  type Tweet {
    id: ID!
    author: User!
    body: String!
  }
  type User {
    id: ID!
    tweets: [Tweet!]
    fullname: String!
    email: String!
  }

  # Mutations
  type Mutation {
    createTweet(input: TweetInput!): Tweet
    removeTweet(id: ID!): Boolean

    createUser(input: UserInput!): User
  }
  input TweetInput {
    body: String!
  }
  input UserInput {
    fullname: String!
    email: String!
  }
`;
