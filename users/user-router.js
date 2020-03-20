const express = require('express');

const users = require('./user-model');

const router = express.Router();

router.get('/', (req, res) => {
  users.find()
  .then( users => {
    res.status(200).json({users})
  })
  .catch(error => {
    res.status(500).json({error: "Could not process your request"})
  })
});
​
router.get('/:id', (req, res) => {
  users.findById(id)
  .then( userById => {
    res.status(200).json({userById})
  })
  .catch(error => {
    res.status(500).json({error: "Could not process your request"})
  })
});
​
router.post('/', (req, res) => {
  users.add()
  .then( newUser => {
    res.status(200).json({newUser})
  })
  .catch(error => {
    res.status(500).json({error: "Could not process your request"})
  })
});
​
module.exports= router;