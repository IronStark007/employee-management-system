const joi = require("joi");

const departmentSchema = joi.object().keys({
  name: joi.string().max(128).required(),
  teamCount: joi.number().required(),
  createdAt: joi.date().default(new Date().toJSON().slice(0, 10)),
});

const departmentUpdateSchema = joi.object().keys({
  teamCount: joi.number().required(),
  modifiedAt: joi.date().default(new Date().toJSON().slice(0, 10)),
});

module.exports = {
  departmentSchema: departmentSchema,
  departmentUpdateSchema: departmentUpdateSchema,
};
