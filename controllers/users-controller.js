import { Users } from '../db/models/index.js';

/**
 * Fetch all the users from datasource
 * @returns {User[]} List of all users
 */
export const index = () => Users.find().toArray();

/**
 * Get an user by filtering by the given user id
 * @param {string} id ID of the user to fetch
 * @returns {User|null} User or null if not found
 */
export const getById = (id) => Users.findOne({ _id: id });

/**
 * Create a user
 * @param {object} input Data of the user to be created
 * @returns {User} Created user
 */
export const create = (input) => {
  const id = '';
  const { fullname, email } = input;
  const newUser = new User({ id, fullname, email });
  users.set(id, newUser);
  
  return newUser;
}
