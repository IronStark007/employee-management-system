const {
  DepartmentNotFoundError,
  DepartmentAlreadyExistError,
} = require("../exceptions");
const db = require("../services/departments");

const getAllDepartments = (req, res, next) => {
  db.selectAllQuery((result) => {
    if (result instanceof Error) {
      next(result);
    } else {
      res.send(result);
    }
  });
};

const getDepartmentByName = (req, res, next) => {
  db.selectOneQuery(req.params.name, (result) => {
    if (result instanceof Error) {
      next(result);
    } else if (result.length === 0) {
      next(new DepartmentNotFoundError(req.params.name));
    } else {
      res.send(result[0]);
    }
  });
};

const insertDepartment = (req, res, next) => {
  db.selectOneQuery(req.validateData.name, (result) => {
    if (result instanceof Error) {
      next(result);
    } else if (result.length) {
      next(new DepartmentAlreadyExistError(req.validateData.name));
    } else {
      db.insertValueQuery(req.validateData, (result) => {
        if (result instanceof Error) {
          next(result);
        } else {
          res.status(201).send({
            message: `Department with name: ${req.validateData.name} created`,
          });
        }
      });
    }
  });
};

const updateDepartmentByName = (req, res, next) => {
  db.selectOneQuery(req.params.name, (result) => {
    if (result instanceof Error) {
      next(result);
    } else if (result.length == 0) {
      next(new DepartmentNotFoundError(req.params.name));
    } else {
      db.updateDeptTeamCount(req.params.name, req.validateData, (result) => {
        if (result instanceof Error) {
          next(result);
        } else {
          res.send({
            message: `Department with name: ${req.params.name} updated`,
          });
        }
      });
    }
  });
};

const deleteDepartmentByName = (req, res, next) => {
  db.selectOneQuery(req.params.name, (result) => {
    if (result instanceof Error) {
      next(result);
    } else if (result.length == 0) {
      next(new DepartmentNotFoundError(req.params.name));
    } else {
      db.deleteValueQuery(req.params.name, (result) => {
        if (result instanceof Error) {
          next(result);
        } else {
          res.send({
            message: `Department with name: ${req.params.name} deleted`,
          });
        }
      });
    }
  });
};

module.exports = {
  getAllDepartments: getAllDepartments,
  getDepartmentByName: getDepartmentByName,
  insertDepartment: insertDepartment,
  updateDepartmentByName: updateDepartmentByName,
  deleteDepartmentByName: deleteDepartmentByName,
};
