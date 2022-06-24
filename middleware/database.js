const { MongoClient } = require('mongodb');
import nextConnect from 'next-connect';

const client = new MongoClient(
  'mongodb+srv://mhwang:organicfroot135@froot1.mykyd.mongodb.net/froot1?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('froot1');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
