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

const selectTeamById = (id, callback) => {
  pool.query(
    `select * from organisation.teams where id='${id}';`,
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
    `insert into organisation.teams (name, departmentId, teamHead, createdAt) values ('${data.name}', ${data.departmentId}, '${data.teamHead}', '${data.createdAt}');`,
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
    `update organisation.teams set departmentId=${data.departmentId}, teamHead='${data.teamHead}', modifiedAt='${data.modifiedAt}' where name='${name}';`,
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
  selectTeamById: selectTeamById,
  insertValueQuery: insertValueQuery,
  updateTeam: updateTeam,
  deleteValueQuery: deleteValueQuery,
};
