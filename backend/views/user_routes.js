const express = require('express')
const auth = require('../controllers/user_auth')
const user = require('../controllers/user')

const userRouter = express.Router()

userRouter.post('/register',auth.register)

userRouter.post('/login',auth.login)

userRouter.post('/',user.startNewChat)

userRouter.post('/c/:chat_id')

module.exports = userRouter