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
    "CREATE TABLE IF NOT EXISTS organisation.teams (id serial PRIMARY KEY, name VARCHAR (128) UNIQUE NOT NULL, departmentId INT NOT NULL, teamHead VARCHAR (128) NOT NULL, createdAt DATE NOT NULL, modifiedAt DATE, CONSTRAINT fk_departmentId FOREIGN KEY(departmentId) REFERENCES organisation.departments(id));"
  );
  await knex.raw(
    "CREATE TABLE IF NOT EXISTS organisation.employees (id serial PRIMARY KEY,departmentId INT NOT NULL, teamId INT NOT NULL, fName VARCHAR (128) NOT NULL, lName VARCHAR (128) NOT NULL, username VARCHAR(128) UNIQUE NOT NULL, isTeamLead boolean NOT NULL, joiningDate DATE NOT NULL, createdAt DATE NOT NULL, modifiedAt DATE, CONSTRAINT fk_departmentId FOREIGN KEY(departmentId) REFERENCES organisation.departments(id), CONSTRAINT fk_teamId FOREIGN KEY(teamId) REFERENCES organisation.teams(id));"
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
