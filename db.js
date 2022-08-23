const { Client } = require('pg')

const client = new Client({
    connectionString: process.env.DATABASE_URL,
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

// Error: connect ECONNREFUSED 127.0.0.1:5432

module.exports = client;