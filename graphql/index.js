import { resolverFunctions as resolvers } from './resolvers.js';
import { schemas } from './schemas.js';
import { usersController } from '../controllers/index.js';

const contextHandler = async ({ req }) => {
  const authenticatedUserId = req.header('authenticatedUserId') || '';
  const authenticatedUser = authenticatedUserId 
    ? await usersController.getById(authenticatedUserId)
    : null;

  return { authenticatedUser };
}

export {
 resolvers,
 schemas,
 contextHandler
};
