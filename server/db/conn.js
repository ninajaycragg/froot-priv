
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let mongoClient = null;
let database = null;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}
// Function necessary to connect to MongoDB
export async function connectToDatabase() {
  try {
    if (mongoClient && database) {
      return { mongoClient, database };
    }

    if (!global._mongoClient) {
      mongoClient = await (new MongoClient(uri, options)).connect();
      global._mongoClient = mongoClient;
    } else {
      mongoClient = global._mongoClient;
    }

    database = await mongoClient.db('froot1'); // The database we need
    return { mongoClient, database };
  } catch (e) {
    console.error(e);
  }
}
