const route = require('express').Router()
const { isSignin, isAuthenticated } = require('../controllers/auth')
const { getUserById } = require('../controllers/user')
const { getTodos, createTodo, getTodoById, getATodo ,updateTodo } = require('../controllers/todo')

route.param('id', getUserById)
route.param('todoId', getTodoById)

route.get('/todos/:id', isSignin, isAuthenticated, getTodos)
route.get('/todo/:id', isSignin, isAuthenticated, getATodo)
route.post('/todo/create/:id', isSignin, isAuthenticated, createTodo)
route.put('/todo/update/:id', isSignin, isAuthenticated, updateTodo)


module.exports = route