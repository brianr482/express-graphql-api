const { users, tweets } = require('./data');

class User {
  constructor (data) {
    Object.assign(this, data);
  }

  get tweets () {
    return [...tweets.values()].filter(tweet => tweet.userId === this.id);
  }
}

module.exports = {
  User,
  users
};
