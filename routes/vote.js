const express = require('express');
const router = express.Router();

const knex = require('../db');

router.post('/:id', async (req, res, next) => {
    try {
        // check if the user has voted on a restaurant recently
        if (req.cookies.votedRecently) {
            // if so, send it off to the error handler
            res.locals.error = {
                ok: false,
                error: 'Voted too recently',
            }
            return next();
        }

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

        // set cookie so users can't vote too often (probably naive)
        res.cookie('votedRecently', req.params.id, {
            maxAge: 15 * 60 * 1000,
        });

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
