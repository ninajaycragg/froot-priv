const express = require('express');
const r = express.Router();

const dbo = require('../db/conn');
const { User, validateUser, validateUserLogin } = require('../models/user');
const ObjectId = require('mongodb').ObjectId;
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { verifyJWT } = require('../../middleware/verifyJWT');

r.route('/results/brands').post(async (req, response) => {
    let db_connect = dbo.getDb();

    // check that the user exists in DB / get info
    let user = await db_connect.collection('users').findOne({ email: req.body.email });
    if (!user) {
        return response.status(409).json({ message: `Account does not exist. ${req.body.email}` });
    }

    let braSize = user.questions;
    console.log('Bra Size:', braSize);

    return response.json({
        bra: braSize
    })
});

export default r;