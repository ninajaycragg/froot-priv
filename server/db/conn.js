const { MongoClient } = require('mongodb');
const Db =
  'mongodb+srv://mhwang:organicfroot135@froot1.mykyd.mongodb.net/froot1?retryWrites=true&w=majority';
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db('froot1');
        console.log('Successfully connected to MongoDB.');
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};

// import express from 'express';
// import cron from 'cron';
// import cors from 'cors';
// import { MongoClient, ServerApiVersion } from 'mongodb';

// // MongoDB

// const url =
//   'mongodb+srv://mhwang:organicfroot135@froot1.mykyd.mongodb.net/froot1?retryWrites=true&w=majority';

// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// const dbName = 'froot1';
// var collection = null;

// // Express server
// var counter = 1;
// console.log('Starting Express Server...');
// const app = express();
// app.use(cors());
// const port = process.env.PORT || 5000;

// app.get('/', (req, res) => res.send('Hello World!'));
// app.listen(port, () => {
//   console.log(`Server is running on ${port}.`);
// });

// const main = async () => {
//   console.log('Connecting to MongoDB...');
//   await client.connect();
//   console.log('Connected to MongoDB!');
//   db = client.db(dbName);
//   return 'Done';
// };

// // Create DB
// main()
//   // Execute cron job after MongoClient is connected
//   .then(() => {
//     console.log('Cron job started...');
//     job.start();
//   })
//   .catch(console.error);
