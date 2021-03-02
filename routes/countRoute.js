const route = require('express').Router()
const { isSignin, isAuthenticated } = require('../controllers/auth')
const { getUserById } = require('../controllers/user')
const { getCount, createCount } = require('../controllers/count')

route.param('id', getUserById)

route.get('/count/:id', isSignin, isAuthenticated, getCount )
route.post('/count/create/:id', isSignin,isAuthenticated, createCount )

module.exports = route