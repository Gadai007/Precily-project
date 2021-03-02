const mongoose = require('mongoose')

const countSchema = new mongoose.Schema({
    count: {
        type:Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true })

const Count = mongoose.model('count', countSchema)

module.exports = { Count }