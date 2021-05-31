const { v4: uuidv4 } = require('uuid');
const { tweets, Tweet } = require('../models/Tweet');
const usersController = require('./users-controller');

const index = () => tweets.values();

const getById = (id) => tweets.get(id);

const create = (input, { user }) => {
  if (!user) {
    return null;
  }

  const authorId = user.id;

  const id = uuidv4();
  const { body } = input;
  const newTweet = new Tweet({ id, authorId, body });
  tweets.set(id, newTweet);

  return newTweet;
};

const remove = (id) => {
  if (!tweets.has(id)) {
    return false;
  }

  return tweets.delete(id);
};

module.exports = {
  index,
  getById,
  create,
  remove
};
