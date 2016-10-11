
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shops').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shops').insert({shop_name: 'The Donut Hole', city: 'Denver'}),
        knex('shops').insert({shop_name: 'Hoodoo Doonoots', city: 'Atlanta'}),
        knex('shops').insert({shop_name: 'Sweet Circles', city: 'Maryland'})
      ]);
    });
};
