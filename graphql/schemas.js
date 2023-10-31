export const schemas = `#graphql
  # Queries
  type Query {
    posts: [Post]
    post(id: ID): Post
    users: [User]
    user(id: ID): User
  }

  # Models
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
    createPost(input: PostInput!): Post
    removePost(id: ID!): Boolean

    createUser(input: UserInput!): User
    updateUser(id: ID!, input: UserUpdateInput!): User
    removeUser(id: ID!): Boolean
  }

  # Inputs
  input PostInput {
    body: String!
    location: String!
    authorId: ID!
  }

  input UserInput {
    fullname: String!
    email: String!
    bio: String!
    username: String!
    phone: String!
    address: String!
  }

  input UserUpdateInput {
    fullname: String
    bio: String
    phone: String
    address: String
  }
`;
