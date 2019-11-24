const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    todoTitle: {
        type : String,
        unique:true
    },
    todoStatus:{
        type: Number
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Todo', TodoSchema);