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

const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = (req, res) => {
  const d = new Date();
  res.end(d.toString());
};

// userRoutes.route('/update/:userId').post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myquery = { userId: req.body.userId };
//   let newvalues = {
//     $set: {
//       q1: req.body.q1,
//     },
//   };
// });

module.exports = {
  first: userRoutes,
  second: allowCors(handler),
};
