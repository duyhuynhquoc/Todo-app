const express = require('express')
const router = express.Router()

const Todo = require('../../models/Todo')

// @route   GET /todos
// @desc    Get all todo items
// @access  Public
router.get('/', async (req, res) => {
   try {
      const todos = await Todo.find()
      res.json(todos)
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
   }
})

// @route   POST /todos
// @desc    Create todo item
// @access  Public
router.post('/', async (req, res) => {
   const { todo } = req.body
   console.log(todo)
   try {
      const newTodo = new Todo({
         todo
      })
      await newTodo.save()
      res.json(todo)
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
   }
})

module.exports = router
