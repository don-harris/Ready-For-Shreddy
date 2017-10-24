exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id').primary()
    table.string('username')
    table.string('hash')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}

