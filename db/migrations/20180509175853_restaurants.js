
exports.up = function(knex, Promise) {
    return knex.schema.createTable('restaurants', table => {
        table.string('id').primary();
        table.string('place_id');
        table.string('name');
        table.string('formatted_address');
        table.string('url');
        table.string('website');
        table.json('opening_hours');
    }); 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('restaurants');
};
