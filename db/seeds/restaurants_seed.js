const getRestaurants = require('../../util/getGPlaces');

exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
    await knex('restaurants').del();
    const restaurants = await getRestaurants();

    if (!restaurants.ok) return Promise.reject(restaurants.error);
    console.log(restaurants.data.map(r => r.id));

    const insertions = restaurants.data.map(r => knex('restaurants').insert(r));

    return Promise.all(insertions);
};
