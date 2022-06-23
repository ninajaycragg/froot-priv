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
