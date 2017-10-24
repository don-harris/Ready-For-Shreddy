const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())

const db = require('../db/users')

router.post('/register', register)

function register (req, res) {
  const { username, password } = req.body
  db.userExists(username)
    .then(exists => {
      if (exists) {
        return res.status(400).send('lack of imagination. Choose another name, stooge.')
      }
      db.createUser(username, password)
        .then(() => {
          res.status(201).send('welcome to shred school')
        })
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
}

module.exports = router
