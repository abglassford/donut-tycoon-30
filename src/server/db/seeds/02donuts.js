
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donuts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('donuts').insert({
          donut_name: 'Chocolate-Covered-Goodness',
          topping: 'Chocolate Icing',
          price: 3}),
        knex('donuts').insert({
          donut_name: 'Rainbow-Puke',
          topping: 'Rainbow Sprinkles',
          price: 4}),
        knex('donuts').insert({
          donut_name: 'Glazed',
          topping: 'Glaze',
          price: 2})
      ]);
    });
};
