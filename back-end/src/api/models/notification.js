const mongoose = require('mongoose')
const { Schema } = mongoose

const NotificationType = ['like', 'comment', 'follow', 'message']
    
const notificationSchema = new Schema({
    id: Schema.ObjectId,
    from: {
        type: Schema.ObjectId,
        ref: 'users',
    },
    to: {
        type: Schema.ObjectId,
        ref: 'users',
    },
    content: String,
    type: {
        type: String,
        enum: Object.values(NotificationType),
        required: true
    }
}, {
    timeseries: true
})

module.exports = mongoose.model('notifications', notificationSchema)