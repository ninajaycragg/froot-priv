const { any } = require('joi');
const Joi = require('joi');
const mongoose = require('mongoose');
const validator = require('validator');

// All of the fields a user should have when creating a new one
const Answers = mongoose.model('Answers', new mongoose.Schema({
    userEmail: {
        type: String,
        validate: [validator.isEmail, 'Enter a valid email address.']
    },
    answers: {
        type: Array
    }
}));



// export functions
exports.Answers = Answers;
