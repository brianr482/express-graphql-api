export const schemas = `#graphql
  # Queries
  type Query {
    posts: [Post]
    post(id: ID): Post
    "It returns all the posts associated with the authenticated user"
    myPosts: [Post]!

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

  "This is the user model. A user can have multiple posts."
  type User {
    _id: ID!
    "List of the posts associated with the given user."
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
    """
    This mutation will create a new post and link it with an author.
    It will return the created post.
    """
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
