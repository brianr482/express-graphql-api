const faker = require('faker');
const { v4: uuidv4 } = require('uuid');
const { users, tweets } = require('../models/data');
const { Tweet, User } = require('../models');

const FAKE_USERS_AMOUNT = 20;
const FAKE_TWEETS_AMOUNT = 50;

const mockUsers = () => {
  for (let i = 0; i < FAKE_USERS_AMOUNT; i++) {
    const id = uuidv4();
    const fakeUser = {
      id,
      fullname: faker.name.findName(),
      email: faker.internet.email(),
    };

    users.set(id, new User(fakeUser));
  }
};

const mockTweets = () => {
  const userIds = [...users.keys()];
  for (let i = 0; i < FAKE_TWEETS_AMOUNT; i++) {
    const id = uuidv4();
    const fakeTweet = {
      id,
      body: faker.lorem.paragraph(),
      email: faker.internet.email(),
      authorId: faker.random.arrayElement(userIds)
    };

    tweets.set(id, new Tweet(fakeTweet));
  }
};

mockUsers();
mockTweets();
