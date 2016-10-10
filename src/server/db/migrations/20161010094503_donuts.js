
exports.up = function(knex, Promise) {
  return knex.schema.createTable('donuts', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('topping').notNullable();
    table.integer('price').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('donuts');
};
