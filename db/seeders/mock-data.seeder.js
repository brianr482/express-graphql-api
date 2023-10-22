import { faker } from '@faker-js/faker';
import Users from '../models/user.js';
import Posts from '../models/post.js';

const FAKE_USERS_AMOUNT = 20;
const FAKE_POSTS_AMOUNT = 50;

/**
 * Populate the users db collection with mock users.
 */
const mockUsers = () => {
  const mockUserFn = () => ({
    fullname: faker.person.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    phone: faker.phone.number(),
    username: faker.internet.userName(),
    bio: faker.person.bio(),
  });
  
  const mockUsersToCreate = new Array(FAKE_USERS_AMOUNT).fill(null).map(mockUserFn);

  return Users.insertMany(mockUsersToCreate);
};

/**
 * Populate the posts collection with mock posts.
 */
const mockPosts = async () => {
  const userIds = (await Users.find().project({ '_id': 1 })
    .toArray())
    .map((userIdObj) => userIdObj._id);

  const mockPostFn = () => ({
    body: faker.lorem.paragraph(),
    location: faker.location.city(),
    authorId: faker.helpers.arrayElement(userIds)
  });

  const mockPostsToCreate = new Array(FAKE_POSTS_AMOUNT).fill(null).map(mockPostFn);

  return Posts.insertMany(mockPostsToCreate);
};

// Clear collections beforehand
await Users.deleteMany({});
await Posts.deleteMany({});

// Seed the collections
await mockUsers();
await mockPosts();

console.log('✅  Database successfully seeded.');

process.exit();