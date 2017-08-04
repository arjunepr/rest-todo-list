const uuidv1 = require('uuid/v1');
const arjun_uuid = uuidv1();

exports.seed = function seed( knex, promisedObj ) {

    const tableName = 'users';

    const rows = [

        // You are free to add as many rows as you feel like in this array. Make sure that they're an object containing the following fields:
        {
            name: 'Arjun Pillai',
            username: 'arjunepr',
            password: 'password',
            email: 'revarjunr@gmail.com',
            identity_key: 'f8a003e0-78cb-11e7-98d1-3195933cf855',
        },

    ];

    return knex( tableName )
        // Empty the table (DELETE)
        .del()
        .then(() => knex.insert(rows).into(tableName));
};