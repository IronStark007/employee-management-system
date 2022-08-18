const schema = require('../models/employee')

const responseMiddleware = (req, res, next) => {
    let validate = schema.validate(res.body)
    if (validate.error) {
        res.status(422).send({ "error": validate.error.message })
    } else {
        next()
    }
}
const requestMiddleware = (req, res, next) => {
    let validate = schema.validate(req.body)
    if (validate.error) {
        res.status(422).send({ "error": validate.error.message })
    } else {
        next()
    }
}
module.exports = {
    responseMiddleware: responseMiddleware,
    requestMiddleware: requestMiddleware
}