# GraphQL API using Node.js, Express.js, Apollo Server and MongoDB
> Google Cloud Functions for GraphQL API using Node.js, Express.js, Apollo Server and MongoDB 🚀

## Installation
1. Make sure you're using the properly node version for the project which is `18`
> Note: If you're using nvm, there is a `.nvmrc` file for the project so you just need to run `nvm use`. Otherwise, you have to check it on your own.
2. Run `yarn` in order to install all the required dependencies

## How to run
Please, follow these steps to ensure the app successfully runs.
1. Copy the `.env.example` file into the root of the project and name it `.env`. Once you have done this, replace the value for the environment variable `DATABASE_URI` with the URI of your database.
2. Run the following command `yarn start` to run the functions locally.

There are other commands which could be helpful in the development process:
- Run `yarn start:dev` to run the functions locally and watch for file changes (hot reload).

### Database
- Run `yarn db:seed` to run the database seeds and populate your database with initial data.

## Project Structure
### `controllers`
It has all controllers files that the API needs to handle the communication between the resolvers and the database.
### `db`
#### `models`
It contains the instances of each mongo collection that represents the data source for each model object identity on this project.

#### `seeders`
It has the seeders needed to populate the database with the initial mock data for the project.

### `graphql`
All the core GraphQL server logic such as `resolvers`, `schemas`, `contexts` and so on are located here.
