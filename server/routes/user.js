const express = require('express');
const userRoutes = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { verifyJWT } = require('../../middleware/verifyJWT');
const { User, validateUser, validateUserLogin } = require('../models/user');
const db = require('../db/conn');

// Create User
userRoutes.post('/user/add', async (req, res) => {
  try {
    const { error } = validateUser(req.body[0]);
    if (error) {
      return res.status(409).json({ message: error.details[0].message });
    }

    const dbConnect = await db.getDb();
    const userExists = await dbConnect
      .collection('users')
      .findOne({ email: req.body[0].email });

    if (req.body[1].confirmPassword !== req.body[0].password) {
      return res
        .status(409)
        .json({ message: 'Confirm password does not match your password.' });
    }

    if (!req.body[1].agree) {
      return res.status(409).json({
        message: 'Please agree to the terms and conditions of Froot.',
      });
    }

    if (userExists) {
      return res.status(409).json({ message: 'Email already in use!' });
    }

    const salt = await bcrypt.genSalt(10);
    const suPassHash = await bcrypt.hash(req.body[0].password, salt);
    const newUser = new User({
      email: req.body[0].email,
      password: suPassHash,
      firstName: req.body[0].firstName,
      lastName: req.body[0].lastName,
      questions: req.body[0].questions,
    });

    await dbConnect.collection('users').insertOne(newUser);
    res.json({ message: 'User added to database.' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while adding the user.' });
  }
});

// Login user
userRoutes.post('/user/login', async (req, res) => {
  try {
    const { error } = validateUserLogin(req.body);
    if (error) {
      return res.status(409).json({ message: error.details[0].message });
    }

    const dbConnect = await db.getDb();
    const user = await dbConnect
      .collection('users')
      .findOne({ email: req.body.email });
    if (!user) {
      return res.status(409).json({ message: 'Account does not exist.' });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(409).json({ message: 'Incorrect password.' });
    }

    jwt.sign(
      { email: user.email },
      'secret',
      { expiresIn: 86400 },
      (err, token) => {
        if (err) {
          console.error(err);
          return res.json({ message: err });
        }
        return res.json({ message: 'Success', token: 'Bearer ' + token });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while logging in.' });
  }
});

userRoutes.get('/user/auth', verifyJWT, (req, res) => {
  res.json({ isLoggedIn: true, email: req.user.email });
});

userRoutes.put('/user/update', async (req, res) => {
  try {
    const myQuery = { email: req.body.email };
    const newValues = { $set: { questions: req.body.questions } };
    const dbConnect = await db.getDb();
    await dbConnect.collection('users').updateOne(myQuery, newValues);
    res.json({ message: 'User updated.' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while updating the user.' });
  }
});

userRoutes.put('/user/editAccount', async (req, res) => {
  try {
    const dbConnect = await db.getDb();
    const user = await dbConnect
      .collection('users')
      .findOne({ email: req.body.origEmail });
    if (!user) {
      return res
        .status(409)
        .json({ message: `Account does not exist. ${req.body.origEmail}` });
    }

    const myQuery = { email: user.email };
    let { email, firstName, lastName, password } = user;
    if (req.body.email) email = req.body.email;
    if (req.body.firstName) firstName = req.body.firstName;
    if (req.body.lastName) lastName = req.body.lastName;

    if (req.body.password && req.body.password.length >= 5) {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(req.body.password, salt);
    }

    const newValues = { $set: { email, firstName, lastName, password } };
    await dbConnect.collection('users').updateOne(myQuery, newValues);
    res.json({ message: 'User account updated.' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while editing the user account.' });
  }
});

userRoutes.post('/user/brands', async (req, res) => {
  try {
    const dbConnect = await db.getDb();
    const user = await dbConnect
      .collection('users')
      .findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(409)
        .json({ message: `Account does not exist. ${req.body.email}` });
    }

    let { band, cup } = parseBraSize(user.questions[0]);
    const brands = await findMatchingBrands(dbConnect, band, cup);

    res.json({ brands });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while finding matching brands.' });
  }
});

function parseBraSize(size) {
  let band = parseInt(size.substr(0, 2));
  let cup = size.substr(2);

  if (cup.length > 1 && cup.charAt(0) != 'A') {
    if (cup.length == 2) {
      cup = cup.charAt(0) - 1;
    } else {
      cup = cup.charAt(0) - 2;
    }
  }

  let cupNum;
  if (cup == 'AAAA') {
    cupNum = -2;
  } else if (cup == 'AAA') {
    cupNum = -1;
  } else if (cup == 'AA') {
    cupNum = 0;
  } else {
    cupNum = cup.charCodeAt(0) - 64;
  }

  return { band, cupNum };
}

async function findMatchingBrands(dbConnect, band, cupNum) {
  const queryBraSize = {
    $and: [
      { band_min: { $lte: band } },
      { band_max: { $gte: band } },
      { cupNum_min: { $lte: cupNum } },
      { cupNum_max: { $gte: cupNum } },
    ],
  };

  const querySisterSize = {
    $and: [
      { band_min: { $lte: band + 1 } },
      { band_max: { $gte: band + 1 } },
      { cupNum_min: { $lte: cupNum - 1 } },
      { cupNum_max: { $gte: cupNum - 1 } },
    ],
  };

  const dbo1 = dbConnect;
  const brandsBraSize = await dbo1
    .collection('brands')
    .find(queryBraSize)
    .toArray();
  const brandsSisterSize = await dbo1
    .collection('brands')
    .find(querySisterSize)
    .toArray();

  return [...brandsBraSize, ...brandsSisterSize];
}
