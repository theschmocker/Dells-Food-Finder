const knex = require('../db');


(async () => {
})();

async function all() {
    try {
        const restaurants = await knex('restaurants')
            .select('restaurants.*', knex.raw('COUNT(votes.restaurant_id) AS votes'))
            .leftJoin('votes', 'restaurants.id', 'votes.restaurant_id')
            .groupBy('restaurants.id')
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
