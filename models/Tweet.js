import { users, tweets } from './data.js';

/**
 * Represents the Tweet identity
 */
class Tweet {
  constructor (data) {
    Object.assign(this, data);
  }

  /**
   * Get the author of the tweet
   */
  get author () {
    return users.get(this.authorId);
  }
};

export {
  Tweet,
  tweets
};
