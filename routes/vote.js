const express = require('express');
const router = express.Router();

const knex = require('../db');

router.post('/:id', async (req, res, next) => {
    try {
        // See if restaurant with requested id is in db
        const restaurant = await knex('restaurants').select('*').where({ id: req.params.id });
        if (!restaurant[0]) {
            // if not, pass error along to error middleware
            res.locals.error = {
                ok: false,
                error: 'A restaurant by that ID does not exist' 
            }

            return next();
        }
        
        await knex('votes').insert({ restaurant_id: req.params.id });
        return res.json({
            ok: true,
            data: 'Voted',
        });

    } catch (error) {
        res.locals.error = error;
        return next();
    }
});

// error middleware
router.use('/', async (req, res) => {
    return res.json(res.locals.error);
});

module.exports = router;
