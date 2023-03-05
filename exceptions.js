class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
  }
}

class EmployeeNotFoundError extends AppError {
  constructor(username) {
    super(`Employee with username: ${username} not found`, 404);
  }
}

class DepartmentNotFoundError extends AppError {
  constructor(message) {
    super(message, 404);
  }
}

class TeamNotFoundError extends AppError {
  constructor(message) {
    super(message, 404);
  }
}

class EmployeeAlreadyExistError extends AppError {
  constructor(username) {
    super(`Employee with username: ${username} already exists`, 409);
  }
}

class DepartmentAlreadyExistError extends AppError {
  constructor(name) {
    super(`Department with username: ${name} already exists`, 409);
  }
}

class TeamAlreadyExistError extends AppError {
  constructor(name) {
    super(`Team with username: ${name} already exists`, 409);
  }
}

module.exports = {
  AppError: AppError,
  EmployeeNotFoundError: EmployeeNotFoundError,
  DepartmentNotFoundError: DepartmentNotFoundError,
  TeamNotFoundError: TeamNotFoundError,
  EmployeeAlreadyExistError: EmployeeAlreadyExistError,
  DepartmentAlreadyExistError: DepartmentAlreadyExistError,
  TeamAlreadyExistError: TeamAlreadyExistError,
};
