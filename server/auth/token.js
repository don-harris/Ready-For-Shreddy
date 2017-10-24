const {getUserByName} = require('../db/users')
const {sign} = require('jsonwebtoken')

const secret = process.env.JWT_SECRET

function issue (req, res, next) {
  getUserByName(req.body.username)
    .then(user => {
      const token = sign({
        id: user.id,
        secret,
        options
      })
    })
}

module.exports = {
  issue
}
