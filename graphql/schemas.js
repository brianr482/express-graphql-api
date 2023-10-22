export const schemas = `#graphql
  # Queries
  type Query {
    posts: [Post]
    post(id: ID): Post
    users: [User]
    user(id: ID): User
  }

  # Object types
  type Post {
    _id: ID!
    author: User!
    body: String!
    location: String!
  }
  type User {
    _id: ID!
    posts: [Post!]
    fullname: String!
    email: String!
    bio: String!
    username: String!
    phone: String!
    address: String!
  }

  # Mutations
  type Mutation {
    createTweet(input: PostInput!): Post
    removeTweet(id: ID!): Boolean

    createUser(input: UserInput!): User
  }
  input PostInput {
    body: String!
    location: String!
  }
  input UserInput {
    fullname: String!
    email: String!
    bio: String!
    username: String!
    phone: String!
    address: String!
  }
`;
