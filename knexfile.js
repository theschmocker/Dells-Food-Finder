// Update with your config settings.

module.exports = {

    client: 'sqlite3',

    connection: {
        filename: __dirname + '/db/db.sqlite3'
    },

    migrations: {
        directory: __dirname + '/db/migrations'
    },

    seeds: {
        directory: __dirname + '/db/seeds',
    },

    useNullAsDefault: true,
}
