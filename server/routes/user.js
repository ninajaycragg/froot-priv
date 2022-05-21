const express = require('express');

const userRoutes = express.Router();

const dbo = require('../db/conn');

const ObjectId = require('mongodb').ObjectId;

userRoutes.route('/user/add').post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    questions: req.body.questions,
  };
  db_connect.collection('users').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// userRoutes.route('/update/:userId').post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myquery = { userId: req.body.userId };
//   let newvalues = {
//     $set: {
//       q1: req.body.q1,
//     },
//   };
// });

module.exports = userRoutes;
