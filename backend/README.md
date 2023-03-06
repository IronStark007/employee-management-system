## Employee Management System

#### Introduction

An API for managing employee in an organization.

### Deployed App

https://employee-system.onrender.com/api/v1/home

### Endpoint Details

There are three routes which are being used in the app.

#### Departments

For maintaing the department of employees.
Endpoint url: https://employee-system.onrender.com/api/v1/department

It has following endpoint:

- GET / - for getting all department information.
- GET /:name - for getting a department having specific `name`.
- POST / - for creating/inserting a new department.
- PUT /:name - for updating an existing department having `name`.
- DELETE /:name - for deleting an department having `name`.

#### Teams

For maintaing the team of employees.
Endpoint url: https://employee-system.onrender.com/api/v1/team

It has following endpoint:

- GET / - for getting all team information.
- GET /:name - for getting a team having specific `name`.
- POST / - for creating/inserting a new team.
- PUT /:name - for updating an existing team having `name`.
- DELETE /:name - for deleting an team having `name`.

#### Employees

For maintaing the employees information.
Endpoint url: https://employee-system.onrender.com/api/v1/employee

It has following endpoint:

- GET / - for getting all employees information.
- GET /:username - for getting a employee having specific `username`.
- POST / - for creating/inserting a new employee.
- PUT /:username - for updating an existing employee having `username`.
- DELETE /:username - for deleting an employee having `username`.

###### Author - [IronStark007](https://github.com/IronStark007)
