// We're using the env object from the process modules.
// We'll be using it to access the environment variables in our .env file.
require('dotenv').config();

const { env } = require('process');

const commonConfig = {
  migrations: { tableName: 'db_migrations' },
  seeds: { directory: './seeders' },

  client: 'mysql2',
  connection: {
    host: env.DB_HOST,

    user: env.DB_USER,
    password: env.DB_PASS,

    // I know DB_DATABASE sounds redundant but still...
    database: env.DB_DATABASE,
    charset: env.DB_CHARSET
  }
};

module.exports = {
  development: commonConfig,
  production: commonConfig 
}