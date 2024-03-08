//schemas for project
/*
* Todo {
    title: string;
    description: string;
    completed: boolean
}



*/
const mongoose = require("mongoose");
//mongo url
//.env
mongoose.connect(
  "mongodb+srv://Jatin4224:Jatin8890@cluster0.d2cjedy.mongodb.net/"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo: todo,
};
