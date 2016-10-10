
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shop_donut', table => {
    table.increments();
    table.integer('shop_id').references('id').inTable('shop').notNullable();
    table.integer('donut_id').references('id').inTable('donut').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shop_donut');
};
