# GraphQL API using Node.js, Express.js and Apollo Server
> Google Cloud Functions for GraphQL API using Node.js, Express.js and Apollo Server 🚀

## Installation
1. Make sure you're using the properly node version for the project which is `14`
> Note: If you're using nvm, there is a .nvrmrc file for the project so you just need to run `nvm use`. Otherwise, you have to check it on your own.
2. Run `yarn` in order to install all the required dependencies
3. If you want to deploy it on your own Google Cloud Functions project, updates the `.firebaserc` file with the name of your project.

## How to run
To run the functions locally, run the following command `yarn serve`.
There are other commands which could be helpful in the development process:
- To get the logs of the functions, run `yarn logs`
- To open the firebase function shell, run `yarn shell`

## How to deploy
To deploy the functions on Firebase, run `yarn deploy`.

## Project Structure
### `controllers`
It has all controllers files that the API needs to handle the communication between the resolvers and the models.

### `models`
It contains the models that represent each object identity on this project.

### `graphql`
All the core GraphQL server logic such as `resolvers`, `schemas`, `contexts` and so on are located here.

### `scripts`
All the scripts of the project are located here. As of now, there is only one script (`mock-data`) which handles populating the datasources with mock data.
