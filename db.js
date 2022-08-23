const { Client } = require('pg')

const DATABASE_URL = process.env.DATABASE_URL;
const client = new Client({
    DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    }
})
client.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database!')
    }
})


module.exports = client;