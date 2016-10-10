
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shop_donut').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shop_donut').insert({shop_id: 1, donut_id: 1}),
        knex('shop_donut').insert({shop_id: 2, donut_id: 1}),
        knex('shop_donut').insert({shop_id: 3, donut_id: 1}),
        knex('shop_donut').insert({shop_id: 1, donut_id: 2}),
        knex('shop_donut').insert({shop_id: 2, donut_id: 2}),
        knex('shop_donut').insert({shop_id: 3, donut_id: 2}),
        knex('shop_donut').insert({shop_id: 1, donut_id: 3}),
        knex('shop_donut').insert({shop_id: 2, donut_id: 3}),
        knex('shop_donut').insert({shop_id: 3, donut_id: 3})
      ]);
    });
};
