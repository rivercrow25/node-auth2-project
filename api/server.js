const express = require('express')

const server = express()

const userRouter = require('./users/usersRoute')
const authRouter = require('./auth/authRoute')
const auth = require('../utils/auth')

server.use(express.json())

server.use('/api/users', auth, userRouter)
server.use('/api/', authRouter)

module.exports = server