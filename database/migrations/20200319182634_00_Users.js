
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments();

      users
      .string('name', 128)
      .notNullable()
      .unique()

      users
      .string('email', 128)
      .notNullable()

    
  }).createTable('posts', posts => {
      posts.increments();

      posts
      .string('title', 50)
      .notNullable()

      posts
      .text('content', 128)

      posts
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
        .inTable('users')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users').dropTableIfExists('posts');
};
