
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employee', table => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.integer('favorite_donut').references('id').inTable('donut').notNullable();
    table.integer('shop_id').references('id').inTable('shops').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employee');
};
