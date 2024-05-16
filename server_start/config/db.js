const { Pool } = require('pg');

//Connect with postgres
const db = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432
});

module.exports = db;