const mongoose = require('mongoose')
const User = require('../models/user.js')
const { Schema } = mongoose;

const account = new Schema({
    email: {
        type: String,
        unique: true,
    },
    refreshToken: {
        type: String,
        allow: true
    },
    password: String,
},
    { timestamps: true }
)

module.exports = mongoose.model('account', account)