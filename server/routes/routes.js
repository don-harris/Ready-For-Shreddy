const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getResorts()
    .then(result => res.json(result))
})

router.get('/view/:id', (req, res) => {
  var id = req.params.id
  db('Accomodation')
 
})

module.exports = router

// db.getAccoms()