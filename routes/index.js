const express = require('express');
const router = express.Router();

const restaurantRoutes = require('./restaurants');
const voteRoutes = require('./vote');

router.use('/restaurants', restaurantRoutes);
router.use('/vote', voteRoutes);

module.exports = router;
