const mongoose = require('mongoose');

// define model from schema (i.e. table fields)
const { Schema } = mongoose;
const todoSchema = new Schema({
  title: String,
  date: Date,
});
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
