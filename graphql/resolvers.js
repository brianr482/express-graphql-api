import {
  usersController,
  tweetsController,
} from '../controllers/index.js';

export const resolverFunctions = {
  // Queries
  Query: {
    // Tweets
    tweets: tweetsController.index,
    tweet: (_, { id }) => tweetsController.getById(id),

    // Users
    users: usersController.index,
    user: (_, { id }) => usersController.getById(id),
  },

  // Mutations
  Mutation: {
    createTweet: (_, { input }, context) =>
      tweetsController.create(input, context),
    removeTweet: (_, { id }, context) => tweetsController.remove(id, context),

    createUser: (_, { input }) => usersController.create(input),
  }
};
