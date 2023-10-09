const mongoose = require('mongoose')

const { Schema } = mongoose;
const User = new Schema({
    firstname: String,
    lastname: String,
    avatar: String,
    following: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    }],
    followers: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    }],
    email: {
        type: String,
        ref: 'account',
        required: true,
        unique: true,
        foreignField: 'email',
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('users', User)