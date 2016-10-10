
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employee', table => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.foreign('favorite_donut').notNullable();
    table.foreign('shop_id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employee');
};
