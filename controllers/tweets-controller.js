const { v4: uuidv4 } = require('uuid');
const { tweets, Tweet } = require('../models/Tweet');

/**
 * Fetch all the tweets from datasource
 * @returns {Tweet[]} List of all tweets
 */
const index = () => tweets.values();

/**
 * Get a tweet by filtering by the given tweet id
 * @param {string} id UUID of the tweet to fetch
 * @returns {Tweet|null} Tweet or null if not found
 */
const getById = (id) => tweets.get(id);

/**
 * Create a tweet
 * @param {object} input Data of the tweet to be created
 * @param {object} context Context of the current operation 
 * @returns {Tweet} Created tweet or null if author is not found
 */
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

/**
 * Remove a tweet with the given id
 * @param {string} id UUID of the tweet to be removed
 * @returns {boolean} true if the tweet was removed, otherwise false
 */
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
