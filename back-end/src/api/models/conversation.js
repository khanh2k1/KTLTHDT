const mongoose = require('mongoose')
const { Schema } = mongoose

const conversationSchema = new Schema({
    id: Schema.ObjectId,
    users: [{
        type: Schema.ObjectId,
        ref: 'users',
    }],

    messages: [{
        type: Schema.ObjectId,
        ref: 'messages',
    }],
})

module.exports = mongoose.model('conversations', conversationSchema)

