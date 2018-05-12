const db = require('../db');


(async () => {
})();

async function all() {
    try {
        const restaurants = await db.select('*').from('restaurants');
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
