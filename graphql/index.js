import { resolverFunctions as resolvers } from './resolvers.js';
import { schemas } from './schemas.js';
import { usersController } from '../controllers/index.js';

const contextHandler = ({ req }) => {
  const userId = req.header('userId') || '';
  const user = usersController.getById(userId);

  return { user };
}

export {
 resolvers,
 schemas,
 contextHandler
};
