const mongoose= require('mongoose');

// mongoose.connect("mongodb+srv://konarsoumitra05_db_user:81396261@cluster0.vzhlqlx.mongodb.net/todos");

const todoSchema= mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo= mongoose.model("todo", todoSchema);
module.exports= {
    todo
}
