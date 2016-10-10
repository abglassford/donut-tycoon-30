
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shops').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shops').insert({name: 'The Donut Hole', city: 'Denver'}),
        knex('shops').insert({name: 'Hoodoo Doonoots', city: 'Atlanta'}),
        knex('shops').insert({name: 'Sweet Circles', city: 'Maryland'})
      ]);
    });
};
