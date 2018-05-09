let knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: __dirname + '/db.sqlite',
    },
    useNullAsDefault: true,
});
//
const sureThing = promise => {
    promise
        .then(data => {
            return {
                ok: true,
                data
            }
        })
        .catch(err => {
            return {
                ok: false
            }
        });
}

(async () => {
    const tableExists = await knex.schema.hasTable('restaurants');
    if (!tableExists) {
        await knex.schema
            .createTable('restaurants', table => {
                table.string('id').primary().unique();
                table.string('name');
                table.string('placeID').unique();
            })
    }

    try {
        const insertable = {name: 'Coffee Bean', id: 'kjdflasd', placeID: 'asdfsdfasdf', open_now: true}

        const insertableKeys = Object.keys(insertable);
        const keyPromises = insertableKeys.map(async key => {
            return {
                hasColumn: await knex.schema.hasColumn('restaurants', key),
                key
            }
        });
        const keys = await Promise.all(keyPromises);
        const filteredKeys = keys.filter(key => key.hasColumn);
        const filteredInsertable = filteredKeys.reduce((obj, item) => {
            obj[item.key] = insertable[item.key];
            return obj;
        }, {});

        await knex('restaurants').insert(filteredInsertable);
    } catch (err) {
        console.error(err);
    }

    knex.destroy();

})();
