
const Todo=require('../models/Todo')






//list -> get
module.exports.listTodo=async(req,res)=>{
    const todos=await Todo.find()
    if (todos.length===0) {
        return res.json({message:'No todo found'})
    }
    res.send(todos)
}


// create -> post
module.exports.createTodo=(req,res)=>{
    
    const todo = new Todo ({
        task:req.body.task
    })
    todo.save().then(doc=>res.json(doc))
}


// single data -> get
module.exports.findTodo=async(req,res)=>{
       // const{_id}=req.params
       const found= await Todo.findById(req.params._id)
        if (found) {
             res.json(found)
        } else {
            res.json({message:'Notodo found'})
        }
}

// Update -> put
module.exports.updateTodo=async(req,res)=>{
    // const{_id}=req.params....distructed methode()

    // const updateTodo= await Todo.findById(req.params._id)
    // updateTodo.task:req.body.task
    // updateTodo.done:req.body.done
    // await updateTodo.save()

    Todo.findByIdAndUpdate(req.params._id,{
        $set:{
            task:req.body.task,
            done:req.body.done
        }
    },{new:true}).then(doc=>res.json(doc))

}

// delete -> delete
module.exports.deleteTodo=async (req,res)=>{
    const{ _id }= req.params
    const deleted=await Todo.findByIdAndDelete(_id)
    if (deleted) {
        return res.json({
            message:'Todo deleted',
            Todo:deleted,
        })
    }
    res.json({message:'Todo not found or already deleted'})
}