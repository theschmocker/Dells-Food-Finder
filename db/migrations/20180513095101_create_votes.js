
exports.up = function(knex, Promise) {
        return knex.schema.createTable('votes', table => {
            table.increments('id').primary();
            table.string('restaurant_id').references('id').inTable('restaurants').onDelete('cascade');
            table.timestamp('created_at').defaultTo(knex.fn.now());
        }); 
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('votes');
};
