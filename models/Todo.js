const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema.Types

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 32,
    },
    user: {
        type: ObjectId,
        ref: 'user'
    }
}, { timestamps: true })


const Todo = mongoose.model('todo', todoSchema)

module.exports = { Todo }