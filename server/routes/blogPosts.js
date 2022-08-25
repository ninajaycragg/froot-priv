const express = require('express');

const userRoutes = express.Router();

const dbo = require('../db/conn');

const ObjectId = require('mongodb').ObjectId;

userRoutes.route('/blogPosts/add').post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    title: req.body.title,
    content: req.body.content,
  };
  db_connect.collection('blogPosts').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = userRoutes;
