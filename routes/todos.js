const router=require('express').Router()
const todoControll=require('../controllers/todoControllers')

//list -> get
router.get('/',todoControll.listTodo)

// create -> post
router.post('/', todoControll.createTodo)

// find single data -> get
router.get('/:_id', todoControll.findTodo)

// Update -> put
router.put('/:_id', todoControll.updateTodo)

// delete -> delete
router.delete('/:_id',todoControll.deleteTodo)





module.exports=router