import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';
import { users, tweets } from '../models/data.js';
import { Tweet, User } from '../models/index.js';

const FAKE_USERS_AMOUNT = 20;
const FAKE_TWEETS_AMOUNT = 50;

/**
 * Populate the users datasource with mock users.
 */
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

/**
 * Populate the tweets datasource with mock tweets.
 */
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
