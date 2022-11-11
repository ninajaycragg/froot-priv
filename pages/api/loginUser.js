// const express = require('express');
// const { MongoClient } = require('mongodb');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validateUserLogin } = require('../../server/models/user');
import { connectToDatabase } from "../../server/db/conn";

export default async function handler(req, res) {
  const { error } = validateUserLogin(req.body);
  if (error) {
    return response.status(409).json({ message: error.details[0].message });
  }

  const db = await connectToDatabase();
  const db_connect = db.database;

  let user = await db_connect.collection('users').findOne({ email: req.body.email });
  if (!user) {
    return res.status(409).json({ message: 'Account does not exist.' });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(409).json({ message: 'Incorrect password.' });
  }
  jwt.sign(
    { email: user.email },
    "secret",
    { expiresIn: 86400 },
    (err, token) => {
      if (err) return res.json({ message: err })
      return res.json({
        message: "Success",
        token: "Bearer " + token
      })
    }
  )
}
