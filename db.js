const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});

connection.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Connected to db!");
    }
});

module.exports = connection;