
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shop').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shop').insert({name: 'The Donut Hole', city: 'Denver'}),
        knex('shop').insert({name: 'Hoodoo Doonoots', city: 'Atlanta'}),
        knex('shop').insert({name: 'Sweet Circles', city: 'Maryland'})
      ]);
    });
};
