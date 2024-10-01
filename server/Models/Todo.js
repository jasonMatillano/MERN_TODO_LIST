const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
    },
    done : {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Todo', TodoSchema)