const express = require('express');

const userRoutes = express.Router();

const dbo = require('../db/conn');

const ObjectId = require('mongodb').ObjectId;

userRoutes.route('/user/add').post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    firebaseUID: req.body.firebaseUID,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    questions: req.body.questions,
  };
  db_connect.collection('users').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

userRoutes.route('/user/update').put(function (req, response) {
  let db_connect = dbo.getDb();
  let myQuery = { firebaseUID: req.body.firebaseUID };
  let newValues = {
    $set: { questions: req.body.questions }
  };
  db_connect.collection('users').updateOne(myQuery, newValues, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = userRoutes;
