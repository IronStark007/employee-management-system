const joi = require('joi');

var schema = joi.object().keys({
    id: joi.number().required(),
    fName: joi.string().min(3).max(266).required(),
    lName: joi.string().min(3).max(266).required(),
    salary: joi.number().min(10000).max(1000000000).required(),
    department: joi.string().min(2).max(266).required(),
    joiningDate: joi.date().required()
})

module.exports = schema