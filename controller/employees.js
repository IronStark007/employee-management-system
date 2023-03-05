const db = require("../services/employees");
const deptDb = require("../services/departments");
const teamDb = require("../services/teams");
const {
  EmployeeNotFoundError,
  DepartmentNotFoundError,
  TeamNotFoundError,
  EmployeeAlreadyExistError,
} = require("../exceptions");

const getAllEmployees = (req, res, next) => {
  db.selectAllQuery((result) => {
    if (result instanceof Error) {
      next(result);
    } else {
      res.send(result);
    }
  });
};

const getOneEmployeeByName = (req, res, next) => {
  db.selectOneQuery(req.params.username, (result) => {
    if (result instanceof Error) {
      next(result);
    } else if (result.length === 0) {
      next(new EmployeeNotFoundError(req.params.username));
    } else {
      res.send(result[0]);
    }
  });
};

const createEmployee = (req, res, next) => {
  deptDb.selectOneQuery(req.validateData.departmentName, (dept) => {
    if (dept instanceof Error) {
      next(dept);
    } else if (dept.length == 0) {
      next(new DepartmentNotFoundError(req.validateData.departmentName));
    } else {
      teamDb.selectOneQuery(req.validateData.teamName, (team) => {
        if (team instanceof Error) {
          next(team);
        } else if (team.length == 0) {
          next(new TeamNotFoundError(req.validateData.teamName));
        } else {
          db.selectOneQuery(req.validateData.username, (result) => {
            if (result instanceof Error) {
              next(result);
            } else if (result.length === 1) {
              next(new EmployeeAlreadyExistError(req.validateData.username));
            } else {
              db.insertValueQuery(req.validateData, (result) => {
                if (result instanceof Error) {
                  next(result);
                } else {
                  res.status(201).send({
                    message: `Employee with username: ${req.validateData.username} created`,
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};

const updateEmployee = (req, res, next) => {
  db.selectOneQuery(req.params.username, (result) => {
    if (result instanceof Error) {
      next(result);
    } else if (result.length === 0) {
      next(new EmployeeNotFoundError(req.params.username));
    } else {
      deptDb.selectOneQuery(req.validateData.departmentName, (dept) => {
        if (dept instanceof Error) {
          next(dept);
        } else if (dept.length == 0) {
          next(new DepartmentNotFoundError(req.validateData.departmentName));
        } else {
          teamDb.selectOneQuery(req.validateData.teamName, (team) => {
            if (team instanceof Error) {
              next(team);
            } else if (team.length == 0) {
              next(new TeamNotFoundError(req.validateData.teamName));
            } else {
              db.updateValueQuery(
                req.params.username,
                req.validateData,
                (result) => {
                  if (result instanceof Error) {
                    next(result);
                  } else {
                    res.send({
                      message: `Employee with username: ${req.params.username} updated`,
                    });
                  }
                }
              );
            }
          });
        }
      });
    }
  });
};

const deleteEmployee = (req, res, next) => {
  db.selectOneQuery(req.params.username, (result) => {
    if (result instanceof Error) {
      next(result);
    } else if (result.length === 0) {
      next(new EmployeeNotFoundError(req.params.username));
    } else {
      db.deleteValueQuery(req.params.username, (result) => {
        if (result instanceof Error) {
          next(result);
        } else {
          res.send({
            message: `Employee with username: ${req.params.username} deleted`,
          });
        }
      });
    }
  });
};

module.exports = {
  getAllEmployees: getAllEmployees,
  getOneEmployeeByName: getOneEmployeeByName,
  createEmployee: createEmployee,
  updateEmployee: updateEmployee,
  deleteEmployee: deleteEmployee,
};
