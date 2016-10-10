
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shop_donuts', table => {
    table.increments();
    table.foreign('shop_id').notNullable();
    table.foreign('donut_id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shop_donuts');
};
