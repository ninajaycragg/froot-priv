const { any } = require('joi');
const Joi = require('joi');
const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Enter an email address'],
        minlength: 5,
        maxlength: 255,
        unique: [true, 'Email address already in use.'],
        validate: [validator.isEmail, 'Enter a valid email address.']
    },
    password: {
        type: String,
        required: [true, 'Enter a password.'],
        minlength: 5,
        maxlength: 1024
    },
    firstName: {
        type: String,
        required: [true, 'Enter your first name.'],
        minlength: 1,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    questions: {
        type: [String],
        required: false,
        allowUnknown: true
    }
}));

function validateUser(user) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email().messages({
            'string.empty': "Enter an email adress.",
            'string.min': "Email adress must be at least 5 characters long.",
            'any.required': "Enter an email."
        }),
        password: Joi.string().min(5).max(1024).required().messages({
            'string.empty': "Enter a password.",
            'string.min': "Password must be at least 5 characters long.",
            'any.required': "Enter a password."
        }),
        firstName: Joi.string().min(1).max(50).required().messages({
            'string.empty': "Enter your first name.",
            'any.required': "Enter your first name.",
        }),
        lastName: Joi.string().min(1).max(50).required().messages({
            'string.empty': "Enter your last name.",
            'any.required': "Enter your last name.",
        }),
        questions: Joi.array()
    });
    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
