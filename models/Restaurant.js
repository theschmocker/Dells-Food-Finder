const knex = require('../db');

async function all() {
    try {
        const dbResponse = await knex('restaurants')
            .select('restaurants.*', knex.raw('COUNT(votes.restaurant_id) AS votes'))
            .leftJoin('votes', 'restaurants.id', 'votes.restaurant_id')
            .groupBy('restaurants.id');

        const restaurants = dbResponse.map(r => {
            return {
                ...r,
                // stored as JSON in db. Parse
                opening_hours: JSON.parse(r.opening_hours)
            };
        });

        return {
            ok: true,
            data: restaurants,
        }
    } catch (error) {
        return {
            ok: false,
            error
        }
    }

}

module.exports = {
    all,
}
