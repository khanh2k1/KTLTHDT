const mongoose = require('mongoose')

const Post = mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users',
        required: true,
        unique: true,
    },
    description: mongoose.SchemaTypes.String,
    images: [{
        type: mongoose.SchemaTypes.Buffer,
        required: true,
    }],
    comments: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'comments',
    }],
}, {
    timestamps: true
})

module.exports = mongoose.model('posts', Post)