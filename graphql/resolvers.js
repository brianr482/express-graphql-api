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

  // Models
  Post: {
    author: (post) => usersController.getById(post.authorId),
  },
  User: {
    posts: (user) => postsController.getByAuthorId(user._id),
  },

  // Mutations
  Mutation: {
    createPost: (_, { input }) => postsController.create(input),
    removePost: (_, { id }) => postsController.remove(id),

    createUser: (_, { input }) => usersController.create(input),
    removeUser: (_, { id }) => usersController.remove(id),
  }
};
