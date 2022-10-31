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

userRoutes.route('/user/editAccount').put(async function (req, response) {
  let db_connect = dbo.getDb();

  // check that the user exists in DB / get info
  let user = await db_connect.collection('users').findOne({ email: req.body.origEmail });
  if (!user) {
    return response.status(409).json({ message: `Account does not exist. ${req.body.origEmail}` });
  }
  let myQuery = { email: user.email };

  let new_email = user.email, new_firstName = user.firstName, new_lastName = user.lastName, new_password = user.password;

  if (req.body.email !== undefined) {
    new_email = req.body.email;
  }
  if (req.body.firstName !== undefined) {
    new_firstName = req.body.firstName;
  }
  if (req.body.lastName !== undefined) {
    new_lastName = req.body.lastName;
  }

  if (req.body.password !== undefined && req.body.password.length >= 5) {
    const salt = await bcrypt.genSalt(10);
    let suPassHash = await bcrypt.hash(req.body[0].password, salt);
    new_password = suPassHash;
  }

  let newValues = {
    $set: { email: new_email, firstName: new_firstName, lastName: new_lastName, password: new_password }
  };
  console.log(newValues);
  db_connect.collection('users').updateOne(myQuery, newValues, function (err, res) {
    if (err) throw err;
    console.log("updated");
    response.json(res);
  });
});

userRoutes.route('/user/brands').post(async (req, response) => {
  let db_connect = dbo.getDb();

  // check that the user exists in DB / get info
  let user = await db_connect.collection('users').findOne({ email: req.body.email });
  if (!user) {
    console.log('AHHHHHHHHHHH', req.body.email);
    return response.status(409).json({ message: `Account does not exist. ${req.body.email}` });
  }

  let braSize = user.questions[0];
  let band = braSize.substr(0, 2);
  let cup = braSize.substr(2);

  if (cup.length > 1 && cup.charAt(0) != 'A') {
    if (cup.length == 2) {
      cup = cup.charAt(0) - 1;
    }
    else {
      cup = cup.charAt(0) - 2;
    }
  }

  console.log('Bra Size:', braSize);

  return response.json({
    bra: braSize
  })
});

module.exports = userRoutes;
