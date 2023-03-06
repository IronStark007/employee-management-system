const Pool = require("pg").Pool;

if (process.env.NODE_ENV == "development") {
  module.exports = new Pool({
    user: process.env.DATABASE_DEV_USERNAME,
    host: process.env.DATABASE_DEV_HOST,
    database: process.env.DATABASE_DEV_NAME,
    password: process.env.DATABASE_DEV_PASSWORD,
    port: process.env.DATABASE_DEV_PORT,
  });
} else {
  module.exports = new Pool({
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    ssl: {
      rejectUnauthorized: false,
    },
  });
}
