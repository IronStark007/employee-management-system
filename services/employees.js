const pool = require("../db");

const selectAllQuery = (callback) => {
  pool.query("select * from organisation.employees;", (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(res.rows);
    }
  });
};

const selectOneQuery = (username, callback) => {
  pool.query(
    `select * from organisation.employees where username='${username}';`,
    (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(res.rows);
      }
    }
  );
};

const insertValueQuery = (data, callback) => {
  pool.query(
    `insert into organisation.employees (departmentName, teamName, fName, lName, username, isTeamLead, joiningDate, createdAt) values ('${data.departmentName}', '${data.teamName}','${data.fName}','${data.lName}','${data.username}', ${data.isTeamLead}, '${data.joiningDate}', '${data.createdAt}');`,
    (err, res) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        callback(res.rows);
      }
    }
  );
};

const updateValueQuery = (username, data, callback) => {
  pool.query(
    `update organisation.employees set departmentName='${data.departmentName}', teamName='${data.teamName}', fName='${data.fName}', lName='${data.lName}', isTeamLead=${data.isTeamLead}, modifiedAt='${data.modifiedAt}' where username='${username}';`,
    (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(res);
      }
    }
  );
};

const deleteValueQuery = (username, callback) => {
  pool.query(
    `delete from organisation.employees where username='${username}';`,
    (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(res);
      }
    }
  );
};

module.exports = {
  selectAllQuery: selectAllQuery,
  selectOneQuery: selectOneQuery,
  insertValueQuery: insertValueQuery,
  updateValueQuery: updateValueQuery,
  deleteValueQuery: deleteValueQuery,
};
