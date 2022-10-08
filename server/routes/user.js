const express = require('express');

const userRoutes = express.Router();

const dbo = require('../db/conn');
const { User, validateUser, validateUserLogin } = require('../models/user');
const ObjectId = require('mongodb').ObjectId;
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { verifyJWT } = require('../../middleware/verifyJWT');

userRoutes.route('/user/add').post(async (req, response) => {
  // Validate account creation fields
  const { error } = validateUser(req.body[0]);
  if (error) {
    return response.status(409).json({ message: error.details[0].message });
  }

  let db_connect = dbo.getDb();

  let userExists = await db_connect.collection('users').findOne({ email: req.body[0].email });

  // Check necessary fields
  if (req.body[1].confirmPassword !== req.body[0].password) {
    return response.status(409).json({ message: 'Confirm password does not match your password.' });
  }
  if (req.body[1].agree === false) {
    return response.status(409).json({ message: 'Please agree to the terms and conditions of Froot.' });
  }
  if (userExists) {
    return response.status(409).json({ message: 'Email already in use!' });
  }

  // Create user
  else {
    const salt = await bcrypt.genSalt(10);
    let suPassHash = await bcrypt.hash(req.body[0].password, salt);
    let newUser = new User({
      email: req.body[0].email,
      password: suPassHash,
      firstName: req.body[0].firstName,
      lastName: req.body[0].lastName,
      questions: req.body[0].questions,
    });

    await db_connect.collection('users').insertOne(newUser, function (err, res) {
      if (err) throw err;
      console.log("User added to database.");
      response.json(res);
    });
  }
});

// Login user
userRoutes.route('/user/loginUser').post(async (req, response) => {
  const { error } = validateUserLogin(req.body);
  if (error) {
    return response.status(409).json({ message: error.details[0].message });
  }

  let db_connect = dbo.getDb();

  let user = await db_connect.collection('users').findOne({ email: req.body.email });
  if (!user) {
    return response.status(409).json({ message: 'Account does not exist.' });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return response.status(409).json({ message: 'Incorrect password.' });
  }

  jwt.sign(
    { email: user.email },
    "secret",
    { expiresIn: 86400 },
    (err, token) => {
      if (err) return response.json({ message: err })
      return response.json({
        message: "Success",
        token: "Bearer " + token
      })
    }
  )
  // const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  // response.json({ token: token });
});

userRoutes.route('/user/auth').get(verifyJWT, (req, res) => {
  res.json({ isLoggedIn: true, email: req.user.email })
})

userRoutes.route('/user/update').put(function (req, response) {
  let db_connect = dbo.getDb();
  let myQuery = { email: req.body.email };
  let newValues = {
    $set: { questions: req.body.questions }
  };
  db_connect.collection('users').updateOne(myQuery, newValues, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = userRoutes;
