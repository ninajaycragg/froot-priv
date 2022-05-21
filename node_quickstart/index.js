const { MongoClient } = require('mongodb');

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  'mongodb+srv://mhwang:organicfroot135@froot1.mykyd.mongodb.net/froot1?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('froot1');
    const users = database.collection('users');

    // Query for a movie that has the title 'Back to the Future'
    const query = {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@usc.edu',
      age: 25,
    };
    const user = await users.insertOne(query);

    console.log(user);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
