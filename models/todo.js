const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "name cannot be empthy"
    },
      completed: {
        type: Boolean,
        required: false
    },
    
    created_date: {
        type: Date,
        default: Date.now
    }
    
    
    
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo;