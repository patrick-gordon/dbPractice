const express = require('express');

const server = express();

// const userRouter = require('../users/user-router');

const postRouter = require('../posts/post-router');

const helmet = require('helmet');

server.use(express.json());

server.use('/api/posts', postRouter)

// server.use('/api/users', userRouter)

server.get('/', (req, res) => {
    res.send('ITS WORKING!!!')
})

module.exports = server;