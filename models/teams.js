const joi = require("joi");

const teamSchema = joi.object().keys({
  name: joi.string().max(128).required(),
  departmentId: joi.number().required(),
  teamHead: joi.string().max(128).required(),
  createdAt: joi.date().default(new Date().toJSON().slice(0, 10)),
});

const teamUpdateSchema = joi.object().keys({
  departmentId: joi.number().required(),
  teamHead: joi.string().max(128).required(),
  modifiedAt: joi.date().default(new Date().toJSON().slice(0, 10)),
});

module.exports = {
  teamSchema: teamSchema,
  teamUpdateSchema: teamUpdateSchema,
};
