/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.raw("CREATE SCHEMA IF NOT EXISTS organisation");
  await knex.raw(
    "CREATE TABLE IF NOT EXISTS organisation.departments (id serial PRIMARY KEY, name VARCHAR (128) UNIQUE NOT NULL, teamCount INT NOT NULL, createdAt DATE NOT NULL, modifiedAt DATE);"
  );
  await knex.raw(
    "CREATE TABLE IF NOT EXISTS organisation.teams (id serial PRIMARY KEY, name VARCHAR (128) UNIQUE NOT NULL, departmentName VARCHAR (128) NOT NULL, createdAt DATE NOT NULL, modifiedAt DATE, CONSTRAINT fk_departmentName FOREIGN KEY(departmentName) REFERENCES organisation.departments(name));"
  );
  await knex.raw(
    "CREATE TABLE IF NOT EXISTS organisation.employees (id serial PRIMARY KEY, departmentName VARCHAR (128) NOT NULL, teamName VARCHAR (128) NOT NULL, fName VARCHAR (128) NOT NULL, lName VARCHAR (128) NOT NULL, username VARCHAR(128) UNIQUE NOT NULL, isTeamLead boolean NOT NULL, joiningDate DATE NOT NULL, createdAt DATE NOT NULL, modifiedAt DATE, CONSTRAINT fk_departmentName FOREIGN KEY(departmentName) REFERENCES organisation.departments(name), CONSTRAINT fk_teamName FOREIGN KEY(teamName) REFERENCES organisation.teams(name));"
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.raw("DROP TABLE organisation.employees");
  await knex.raw("DROP TABLE organisation.teams");
  await knex.raw("DROP TABLE organisation.departments");
  await knex.raw("DROP SCHEMA organisation");
};
