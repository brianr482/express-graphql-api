import { users, tweets } from './data.js';

/**
 * Represents the User identity
 */
class User {
  constructor (data) {
    Object.assign(this, data);
  }

  /**
   * Get the tweets created by the author
   */
  get tweets () {
    return [...tweets.values()].filter(tweet => tweet.authorId === this.id);
  }
}

export {
  User,
  users
};
