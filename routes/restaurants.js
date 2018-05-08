const express = require('express');
const router = express.Router();
const getRestaurants = require('../util/getGPlaces');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    const restaurants = await getRestaurants();
    if (!restaurants.ok) {
        res.locals.error = restaurants;
        return next();
    }

    return res.json(restaurants);
});

router.use('/', async (req, res) => {
    res.json(res.locals);
});

module.exports = router;
