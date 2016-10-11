
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('employees').insert({
          first_name: 'Jimmy',
          last_name: 'Taggert',
          email: 'jtgert@mail.com',
          favorite_donut: knex('donuts').select('id').where('donut_name', 'Chocolate-Covered-Goodness'),
          shop_id: 2}),
        knex('employees').insert({
          first_name: 'Wanda',
          last_name: 'Ratkins',
          email: 'rattykins@mail.com',
          favorite_donut: knex('donuts').select('id').where('donut_name', 'Glazed'),
          shop_id: 1}),
        knex('employees').insert({
          first_name: 'Samwise',
          last_name: 'Gamgee',
          email: 'jstthgrdner@mordor.org',
          favorite_donut: knex('donuts').select('id').where('donut_name', 'Rainbow-Puke'),
          shop_id: 3})
      ]);
    });
};
