const key_one = '7d7cc580-78cc-11e7-8c3f-25d75d8c84fc';
const key_two = '959b8bb0-78cc-11e7-8c3f-25d75d8c84fc';

exports.seed = function seed( knex, promisedObj ) {

    const tableName = 'todos';

    const rows = [

        {
            by: 'f8a003e0-78cb-11e7-98d1-3195933cf855',
            title: 'Todo_One',
            details: 'Just the first todo. Uh, Lorem Ipsum?',
            identity_key: key_one,
            isPublic: true,
        },

        {
            by: 'f8a003e0-78cb-11e7-98d1-3195933cf855',
            title: 'Todo_Two',
            details: 'Here stands the second todo. Ipsum Lorem.',
            identity_key: key_two,
            isPublic: false,
        },

    ];

    return knex( tableName )
        .del()
        .then( function() {
            return knex.insert( rows ).into( tableName );
        });

};


'f8a003e0-78cb-11e7-98d1-3195933cf855';