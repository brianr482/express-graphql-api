import { ObjectId } from 'mongodb';
import { Posts } from '../db/models/index.js';
import * as usersController from './users-controller.js';

/**
 * Fetch all the posts from database
 * @returns {Post[]} List of all posts
 */
export const index = () => Posts.find().toArray();

/**
 * Fetch all the posts associated with the given authorId from database
 * @returns {Post[]} List of posts
 */
export const findByAuthorId = (authorId) =>
  Posts.find({ authorId: new ObjectId(authorId) }).toArray();

/**
 * Fetch all the posts associated with the given id from database
 * @returns {Post[]} List of posts
 */
export const getByAuthorId = (authorId) => Posts.find({ authorId }).toArray();

/**
 * Get the post associated with the given id
 * @param {string} id ID of the post to fetch
 * @returns {Post|null} Post or null if not found
 */
export const getById = (id) => Posts.findOne({ _id: new ObjectId(id) });

/**
 * Create a post
 * @param {object} input Data of the post to be created
 * @param {object} context Context of the current operation 
 * @returns {Post} Created post or null if author is not found
 */
export const create = async ({ authorId, ...input }) => {
  const authorExists = await usersController.exists(authorId);

  if (!authorExists) {
    return null;
  }

  const postId = (await Posts.insertOne({ ...input, authorId: new ObjectId(authorId) }))
    .insertedId;

  return getById(postId);
};

/**
 * Remove a post associated with the given id
 * @param {string} id ID of the post to be removed
 * @returns {boolean} true if the post was removed, otherwise false
 */
export const remove = async (id) =>
  (await Posts.deleteOne({ _id: new ObjectId(id) })).deletedCount > 0;
