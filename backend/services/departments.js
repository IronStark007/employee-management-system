const pool = require("../db");

const selectAllQuery = (callback) => {
  pool.query("select * from organisation.departments;", (err, res) => {
    if (err) {
      console.error("error in select all query " + err);
      callback(err);
    } else {
      console.log("fetching the rows");
      callback(res.rows);
    }
  });
};

const selectOneQuery = (name, callback) => {
  pool.query(
    `select * from organisation.departments where name='${name}';`,
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
    `insert into organisation.departments (name, teamCount, createdAt) values ('${data.name}',${data.teamCount},'${data.createdAt}');`,
    (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(res.rows);
      }
    }
  );
};

const updateDeptTeamCount = (name, data, callback) => {
  pool.query(
    `update organisation.departments set teamCount=${data.teamCount}, modifiedAt='${data.modifiedAt}' where name='${name}';`,
    (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(res);
      }
    }
  );
};

const deleteValueQuery = (name, callback) => {
  pool.query(
    `delete from organisation.departments where name='${name}';`,
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
  updateDeptTeamCount: updateDeptTeamCount,
  deleteValueQuery: deleteValueQuery,
};
