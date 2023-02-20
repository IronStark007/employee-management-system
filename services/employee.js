const pool = require("../db");

const selectAllQuery = (callback) => {
  pool.query("select * from employee;", (err, res) => {
    if (err) {
      console.error("error in select all query " + err);
      callback(err);
    } else {
      console.log("fetching the rows");
      callback(res.rows);
    }
  });
};

const selectOneQuery = (id, callback) => {
  pool.query(`select * from employee where id='${id}';`, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(res.rows);
    }
  });
};

const insertValueQuery = (data, callback) => {
  pool.query(
    `insert into employee values ('${data.id}','${data.fName}','${data.lName}',${data.salary},'${data.department}','${data.joiningDate}');`,
    (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(res.rows);
      }
    }
  );
};

const updateValueQuery = (id, data, callback) => {
  pool.query(
    `update employee set lName='${data.lName}', salary=${data.salary}, department='${data.department}', joiningDate='${data.joiningDate}' where id='${id}';`,
    (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(res);
      }
    }
  );
};

const deleteValueQuery = (id, callback) => {
  pool.query(`delete from employee where id='${id}';`, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(res);
    }
  });
};

module.exports = {
  selectAllQuery: selectAllQuery,
  selectOneQuery: selectOneQuery,
  insertValueQuery: insertValueQuery,
  updateValueQuery: updateValueQuery,
  deleteValueQuery: deleteValueQuery,
};
