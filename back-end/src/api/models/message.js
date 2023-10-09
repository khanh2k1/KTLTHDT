const mongoose = require('mongoose')
const { Schema } = mongoose

const messageSchema = new Schema({
    id: Schema.ObjectId,
    from: {
        type: Schema.ObjectId,
        ref: 'users',
    },
    to: {
        type: Schema.ObjectId,
        ref: 'users',
    },
    content: Schema.String,
}, {
    timestamps: true
})

module.exports = mongoose.model('messages', messageSchema)