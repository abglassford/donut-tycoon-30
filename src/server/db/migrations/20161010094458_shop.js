
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shop', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('city').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shop');
};
