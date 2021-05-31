const { v4: uuidv4 } = require('uuid');
const { users, User } = require('../models/User');

const index = () => users.values();

const getById = (id) => users.get(id);

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
