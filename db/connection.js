const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MYSQL username,
        user: 'root',
        //Your MYSQL password
        password: 'Summer12@',
        database: 'election',
    },
    console.log('Connected to election database.')
);

module.exports = db;

