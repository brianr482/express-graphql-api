import { Posts } from '../db/models/index.js';

/**
 * Fetch all the posts from database
 * @returns {Post[]} List of all posts
 */
export const index = () => Posts.find().toArray();

/**
 * Fetch all the posts associated with the given id from database
 * @returns {Post[]} List of posts
 */
export const getByAuthorId = (authorId) => Posts.find({ authorId }).toArray();

/**
 * Get a post by filtering by the given id
 * @param {string} id UUID of the post to fetch
 * @returns {Post|null} Tweet or null if not found
 */
export const getById = (id) => Posts.findOne({ _id: id });

/**
 * Create a tweet
 * @param {object} input Data of the post to be created
 * @param {object} context Context of the current operation 
 * @returns {Post} Created post or null if author is not found
 */
export const create = (input, { user }) => {
  if (!user) {
    return null;
  }

  const authorId = user.id;

  const id = '';
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
export const remove = (id) => {
  if (!tweets.has(id)) {
    return false;
  }

  return tweets.delete(id);
};
