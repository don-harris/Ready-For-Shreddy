const {generate} = require('../auth/hash')

const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function userExists (username) {
  return getUserByName(username)
    .then((user) => !!user)
}

function createUser (username, password) {
  const hashdPw = generate(password)
  return knex('users')
    .insert({
      username,
      hash: hashdPw
    })
}

function getUserByName (username) {
  return knex('users')
    .where('users.username', username)
    .first()
}

module.exports = {
  createUser,
  userExists,
  getUserByName
}
