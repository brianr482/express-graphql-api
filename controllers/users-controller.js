const { v4: uuidv4 } = require('uuid');
const { users, User } = require('../models/User');

/**
 * Fetch all the users from datasource
 * @returns {User[]} List of all users
 */
const index = () => users.values();

/**
 * Get an user by filtering by the given user id
 * @param {string} id UUID of the user to fetch
 * @returns {User|null} User or null if not found
 */
const getById = (id) => users.get(id);

/**
 * Create an user
 * @param {object} input Data of the user to be created
 * @returns {Tweet} Created user
 */
const create = (input) => {
  const id = uuidv4();
  const { fullname, email } = input;
  const newUser = new User({ id, fullname, email });
  users.set(id, newUser);
  
  return newUser;
}

module.exports = {
  index,
  getById,
  create
};
