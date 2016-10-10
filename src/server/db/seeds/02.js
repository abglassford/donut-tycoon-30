
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donut').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('donut').insert({
          name: 'Chocolate-Covered-Goodness',
          topping: 'Chocolate Icing',
          price: 3}),
        knex('donut').insert({
          name: 'Rainbow-Puke',
          topping: 'Rainbow Sprinkles',
          price: 4}),
        knex('donut').insert({
          name: 'Glazed',
          topping: 'Glaze',
          price: 2})
      ]);
    });
};
