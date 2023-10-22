import {
  usersController,
  postsController,
} from '../controllers/index.js';

export const resolverFunctions = {
  // Queries
  Query: {
    // Posts
    posts: postsController.index,
    post: (_, { id }) => postsController.getById(id),

    // Users
    users: usersController.index,
    user: (_, { id }) => usersController.getById(id),
  },

  // Object types
  Post: {
    author: (post) => usersController.getById(post.authorId),
  },
  User: {
    posts: (user) => postsController.getByAuthorId(user._id),
  },

  // Mutations
  Mutation: {
    createTweet: (_, { input }, context) =>
      postsController.create(input, context),
    removeTweet: (_, { id }, context) => postsController.remove(id, context),

    createUser: (_, { input }) => usersController.create(input),
  }
};
