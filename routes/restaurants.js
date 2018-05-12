const express = require('express');
const router = express.Router();

const Restaurant = require('../models/Restaurant');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    // Query db for all the restaurants
    const restaurants = await Restaurant.all();

    // If something went wrong with the query, pass it along to error middleware
    if (!restaurants.ok) {
        res.locals.error = restaurants;
        return next();
    }
    
    return res.json(restaurants);
});

// error middleware
router.use('/', async (req, res) => {
    return res.json(res.locals);
});

module.exports = router;
