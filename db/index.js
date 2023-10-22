import { MongoClient } from 'mongodb';
import 'dotenv/config';

let connection;

const connect = async () => {
  try {
    const dbClient = new MongoClient(process.env.DATABASE_URI);
    connection = await dbClient.connect();
    console.log('Connection to the DB  successfully established');
  } catch (e) {
    console.error('Error while connecting to the DB', e);
  }  
}

// Establish the connection with the database
await connect();

export default connection.db();