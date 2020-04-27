const knex = require('knex');

const config = require('../knexfile.js');

module.exports = knex(config[process.env.BUILD_ENV || "development"]);
