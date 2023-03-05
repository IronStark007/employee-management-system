const db = require("../services/teams");
const deptDb = require("../services/departments");
const {
  TeamNotFoundError,
  DepartmentNotFoundError,
  TeamAlreadyExistError,
} = require("../exceptions");

const getAllTeams = (req, res, next) => {
  db.selectAllQuery((result) => {
    if (result instanceof Error) {
      next(result);
    } else {
      res.send(result);
    }
  });
};

const getTeamByName = (req, res, next) => {
  db.selectOneQuery(req.params.name, (result) => {
    if (result instanceof Error) {
      next(result);
    } else if (result.length === 0) {
      next(
        new TeamNotFoundError(
          `Team with name: ${req.params.name} does not exist`
        )
      );
    } else {
      res.send(result[0]);
    }
  });
};

const insertTeam = (req, res, next) => {
  deptDb.selectDeptById(req.validateData.departmentId, (dept) => {
    if (dept instanceof Error) {
      res.status(500).send({ error: dept.message });
    } else if (dept.length == 0) {
      next(
        new DepartmentNotFoundError(
          `Department with id: ${req.validateData.departmentId} does not exist`
        )
      );
    } else {
      db.selectOneQuery(req.validateData.name, (result) => {
        if (result instanceof Error) {
          next(result);
        } else if (result.length) {
          next(new TeamAlreadyExistError(req.validateData.name));
        } else {
          db.insertValueQuery(req.validateData, (result) => {
            if (result instanceof Error) {
              next(result);
            } else {
              res.status(201).send({
                message: `Team with name: ${req.validateData.name} created`,
              });
            }
          });
        }
      });
    }
  });
};

const updateTeamByName = (req, res, next) => {
  db.selectOneQuery(req.params.name, (result) => {
    if (result instanceof Error) {
      next(result);
    } else if (result.length == 0) {
      next(
        new TeamNotFoundError(
          `Team with name: ${req.params.name} does not exist`
        )
      );
    } else {
      deptDb.selectDeptById(req.validateData.departmentId, (dept) => {
        if (dept instanceof Error) {
          res.status(500).send({ error: dept.message });
        } else if (dept.length == 0) {
          next(
            new DepartmentNotFoundError(
              `Department with id: ${req.validateData.departmentId} does not exist`
            )
          );
        } else {
          db.updateTeam(req.params.name, req.validateData, (result) => {
            if (result instanceof Error) {
              next(result);
            } else {
              res.send({
                message: `Team with name: ${req.params.name} updated`,
              });
            }
          });
        }
      });
    }
  });
};

const deleteTeamByName = (req, res, next) => {
  db.selectOneQuery(req.params.name, (result) => {
    if (result instanceof Error) {
      next(result);
    } else if (result.length == 0) {
      next(
        new TeamNotFoundError(
          `Team with name: ${req.params.name} does not exist`
        )
      );
    } else {
      db.deleteValueQuery(req.params.name, (result) => {
        if (result instanceof Error) {
          next(result);
        } else {
          res.send({
            message: `Team with name: ${req.params.name} deleted`,
          });
        }
      });
    }
  });
};

module.exports = {
  getAllTeams: getAllTeams,
  getTeamByName: getTeamByName,
  insertTeam: insertTeam,
  updateTeamByName: updateTeamByName,
  deleteTeamByName: deleteTeamByName,
};
