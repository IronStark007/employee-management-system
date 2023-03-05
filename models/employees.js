const joi = require("joi");

const employeeSchema = joi.object().keys({
  departmentId: joi.number().required(),
  teamId: joi.number().required(),
  fName: joi.string().max(128).required(),
  lName: joi.string().max(128).required(),
  username: joi.string().max(128).required(),
  isTeamLead: joi.boolean().required(),
  joiningDate: joi.date().raw().required(),
  createdAt: joi.date().default(new Date().toJSON().slice(0, 10)),
});

const employeeUpdateSchema = joi.object().keys({
  departmentId: joi.number().required(),
  teamId: joi.number().required(),
  fName: joi.string().max(128).required(),
  lName: joi.string().max(128).required(),
  isTeamLead: joi.boolean().required(),
  modifiedAt: joi.date().default(new Date().toJSON().slice(0, 10)),
});

module.exports = {
  employeeSchema: employeeSchema,
  employeeUpdateSchema: employeeUpdateSchema,
};
