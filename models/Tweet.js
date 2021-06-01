const { users, tweets } = require('./data');

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

module.exports = {
  Tweet,
  tweets
};
