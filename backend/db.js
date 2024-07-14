const mongoose = require("mongoose");
const { title } = require("process");
require('dotenv').config();

mongoose.connect(process.env.mongo_uri)
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}