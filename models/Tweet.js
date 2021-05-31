const { users, tweets } = require('./data');

class Tweet {
  constructor (data) {
    Object.assign(this, data);
  }
  get author () {
    return users.get(this.author);
  }
};

module.exports = {
  Tweet,
  tweets
};
