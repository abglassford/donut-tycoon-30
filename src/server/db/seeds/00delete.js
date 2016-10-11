
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    // Inserts seed entries
    knex('shop_donut').del(),
    knex('employees').del(),
    knex('donuts').del(),
    knex('shops').del()
  ]);
};
