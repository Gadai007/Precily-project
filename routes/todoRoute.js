const route = require('express').Router()
const { isSignin, isAuthenticated } = require('../controllers/auth')
const { getUserById } = require('../controllers/user')
const { getTodos, createTodo, getTodoById, getATodo, updateTodo } = require('../controllers/todo')

route.param('id', getUserById)
route.param('todoId', getTodoById)

route.get('/todos/:id', isSignin, isAuthenticated, getTodos)
route.get('/todo/:todoId/:id', isSignin, isAuthenticated, getATodo)
route.post('/todo/create/:todoId/:id', isSignin, isAuthenticated, createTodo)
route.put('/todo/update/:todoId/:id', isSignin, isAuthenticated, updateTodo)


module.exports = route