const express = require("express")
const app = express();
const { createTodo } = require("./types")
const { updateTodo } = require("./types")
app.use(express.json);



app.post("/todo", (req,res)=>{
const createBody = req.body;
const parseBody = createTodo.safeParse(createBody);
if (!parseBody.success){
    res.status(411).json({
        msg:"Your sent the wrong inputs",
    })
    return;
}
})

app.get("/todos",(req, res)=>{
    
})

app.put("/completed",(req,res)=>{
    const updateBody = req.body;
    const parseBody = updateTodo.safeParse(updateBody);
    if(!parseBody.success){
        res.status(411).json({
            msg:"Your sent the wrong inputs",
        })
       return;
    }
    return
})