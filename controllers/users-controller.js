import { v4 as uuidv4 } from 'uuid';
import { users, User } from '../models/User.js';

/**
 * Fetch all the users from datasource
 * @returns {User[]} List of all users
 */
export const index = () => users.values();

/**
 * Get an user by filtering by the given user id
 * @param {string} id UUID of the user to fetch
 * @returns {User|null} User or null if not found
 */
export const getById = (id) => users.get(id);

/**
 * Create an user
 * @param {object} input Data of the user to be created
 * @returns {Tweet} Created user
 */
export const create = (input) => {
  const id = uuidv4();
  const { fullname, email } = input;
  const newUser = new User({ id, fullname, email });
  users.set(id, newUser);
  
  return newUser;
}
