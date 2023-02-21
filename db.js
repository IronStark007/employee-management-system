const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.DATABASE_USERNAME,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

setTimeout(() => {
  pool.query(
    "CREATE TABLE IF NOT EXISTS employee (id serial PRIMARY KEY, fName VARCHAR (266) NOT NULL, lName VARCHAR (266) NOT NULL, salary INT NOT NULL, department VARCHAR (266) NOT NULL, joiningDate DATE NOT NULL);",
    (err, res) => {
      if (err) {
        console.error("error creating table", err);
      } else {
        console.log("created table successfully", res);
      }
    }
  );
}, 10000);

module.exports = pool;
