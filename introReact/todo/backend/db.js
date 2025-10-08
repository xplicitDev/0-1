const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://masoodCohort:1234567890@cluster0.ze2xvhy.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };
