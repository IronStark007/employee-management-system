const pool = require("../db");

const selectAllQuery = (callback) => {
  pool.query("select * from organisation.teams;", (err, res) => {
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
    `select * from organisation.teams where name='${name}';`,
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
    `insert into organisation.teams (name, departmentName, createdAt) values ('${data.name}', '${data.departmentName}', '${data.createdAt}');`,
    (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(res.rows);
      }
    }
  );
};

const updateTeam = (name, data, callback) => {
  pool.query(
    `update organisation.teams set departmentName='${data.departmentName}', modifiedAt='${data.modifiedAt}' where name='${name}';`,
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
    `delete from organisation.teams where name='${name}';`,
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
  updateTeam: updateTeam,
  deleteValueQuery: deleteValueQuery,
};
