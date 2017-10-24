db/users.js

const getUserByName = (username) => knex('users')
  .where('users.username', username)
  .first()

module.exports = {
  getUserByName,
  createUser: (username, password) => {
    const hashdPw = generate(password)
    return knex('users')
      .insert({
        username,
        hash: hashdPw
      })
  },
  userExists: (username) => getUserByName(username).then(user => !!user)
}
