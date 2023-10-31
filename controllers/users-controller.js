import { ObjectId } from 'mongodb';
import { Users } from '../db/models/index.js';

/**
 * Fetch all the users from database
 * @returns {User[]} List of all users
 */
export const index = () => Users.find().toArray();

/**
 * Get the user associated with the given user id
 * @param {string} id ID of the user to fetch
 * @returns {User|null} User or null if not found
 */
export const getById = (id) => Users.findOne({ _id: id });

/**
 * Determine if a user with the given id exists
 * @param {string} id ID of the user to determine if exists
 * @returns {boolean} true if the user exists, false otherwise
 */
export const exists = async (id) => (await Users.countDocuments({ _id: new ObjectId(id) }, { limit: 1 })) > 0;

/**
 * Create a user
 * @param {object} input Data of the user to be created
 * @returns {User} Created user
 */
export const create = async (input) => {
  const userId = (await Users.insertOne(input)).insertedId;

  return getById(userId);
};

/**
 * Update a user
 * @param {string} id ID of the user to be updated
 * @param {object} input Data of the user to be updated
 * @returns {User} Updated user
 */
export const update = async (id, input) =>
  (await Users.findOneAndUpdate(
    {
      _id: new ObjectId(id),
    },
    { $set: input },
    { returnDocument: 'after' }
  ));

/**
 * Remove a user associated with the given id
 * @param {string} id ID of the user to be removed
 * @returns {boolean} true if the user was removed, otherwise false
 */
export const remove = async (id) =>
  (await Users.deleteOne({ _id: new ObjectId(id) })).deletedCount > 0;
