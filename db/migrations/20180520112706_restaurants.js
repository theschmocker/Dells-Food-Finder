exports.up = function(knex, Promise) {
    return knex.schema.table('restaurants', table => {
        // add new columns
        table.string('formatted_phone_number');
        table.string('rating');
    }); 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('restaurants');
};
