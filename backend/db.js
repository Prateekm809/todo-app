const mongoose = require("mongoose");
const { title } = require("process");
require('dotenv').config();

mongoose.connect(process.env.mongo_uri)
const todoSchema = mongoose.schema({
    title: string,
    description: string,
    completed: boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}