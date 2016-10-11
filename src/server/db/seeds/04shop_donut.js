
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shop_donut').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shop_donut').insert({
          shop_id: knex('shops').select('id').where('shop_name', 'The Donut Hole'),
          donut_id: knex('donuts').select('id').where('donut_name', 'Chocolate-Covered-Goodness')}),
        knex('shop_donut').insert({
          shop_id: knex('shops').select('id').where('shop_name', 'Hoodoo Doonoots'),
          donut_id: knex('donuts').select('id').where('donut_name', 'Chocolate-Covered-Goodness')}),
        knex('shop_donut').insert({
          shop_id: knex('shops').select('id').where('shop_name', 'Sweet Circles'),
          donut_id: knex('donuts').select('id').where('donut_name', 'Chocolate-Covered-Goodness')}),
        knex('shop_donut').insert({
          shop_id: knex('shops').select('id').where('shop_name', 'The Donut Hole'),
          donut_id: knex('donuts').select('id').where('donut_name', 'Glazed')}),
        knex('shop_donut').insert({
          shop_id: knex('shops').select('id').where('shop_name', 'Hoodoo Doonoots'),
          donut_id: knex('donuts').select('id').where('donut_name', 'Glazed')}),
        knex('shop_donut').insert({
          shop_id: knex('shops').select('id').where('shop_name', 'Sweet Circles')}),
        knex('shop_donut').insert({
          shop_id: knex('shops').select('id').where('shop_name', 'The Donut Hole'),
          donut_id: knex('donuts').select('id').where('donut_name', 'Rainbow-Puke')}),
        knex('shop_donut').insert({
          shop_id: knex('shops').select('id').where('shop_name', 'Hoodoo Doonoots'),
          donut_id: knex('donuts').select('id').where('donut_name', 'Rainbow-Puke')}),
        knex('shop_donut').insert({
          shop_id: knex('shops').select('id').where('shop_name', 'Sweet Circles')})
      ]);
    });
};
