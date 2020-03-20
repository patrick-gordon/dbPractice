const express = require('express');
const Posts = require('./post-model.js');
const router = express.Router();
router.get('/', (req, res) => {
    Posts.getPosts()
        .then((posts) => {
            res.status(200).json(posts)
        })
        .catch((err) => {
            res.status(500).json({error: "Could not get posts."})
        })
})
router.get('/:id', (req, res) => {
    Posts.getPostsById(req.params.id)
        .then((post) => {
            res.status(200).json(post)
        })
        .catch((err) => {
            res.status(500).json({error: "Couldn't get post."})
        })
})
module.exports = router;