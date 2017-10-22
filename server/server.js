const express = require('express')

const path = require('path')
const bodyParser = require('body-parser')
const server = express()

const request = require('superagent')
const accoms = require('./routes/accoms')
const resorts = require('./routes/routes')
const auth = require('./routes/auth')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

// const APP_ID = b1d7cd0e
// const APP_KEY = 726b72a42e1b3e722eccc6ef2deecbd1

server.use('/api/v1/snowreport/:id', (req, res) => {
  const id = Number(req.params.id)
  request
    .get(`https://api.weatherunlocked.com/api/resortforecast/${id}?hourly_interval=6&app_id=b1d7cd0e&app_key=726b72a42e1b3e722eccc6ef2deecbd1`)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) {
        // console.log(err)
      } else {
        res.json(response.body)
        // console.log(response.body)
      }
    })
})

server.use('/api/v1/auth', auth)

server.use('/api/v1/accoms', accoms)
server.use('/api/v1/resorts', resorts)

// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'))
// })

module.exports = server
