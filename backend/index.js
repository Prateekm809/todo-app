const express = require("express")
const app = express();
const { createTodo } = require("./types")
const { updateTodo } = require("./types")
const { todo } = require("./db");


app.use(express.json());

app.post("/todo",async (req,res)=>{
const createBody = req.body;
const parseBody = createTodo.safeParse(createBody);
if (!parseBody.success){
    res.status(411).json({
        msg:"Your sent the wrong inputs",
    })
    return;
}
//put this into mongodb
    await todo.create({
        title: createBody.title,
        description: createBody.description,
        completed: false
    })
    res.json({
        msg:"Todo created successfully",
    })
})

app.get("/todos",async (req, res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed",async (req,res)=>{
    const updateBody = req.body;
    const parseBody = updateTodo.safeParse(updateBody);
    if(!parseBody.success){
        res.status(411).json({
            msg:"Your sent the wrong inputs",
        })
       return;
    }
   await todo.updateOne({
    _id: req.body.id
   },{
    completed: true
   })
   res.json({
    msg:"Todo marked a completed",
   })
})

app.listen(4000,()=>{
    console.log("Server is running on port http://localhost:4000");
})