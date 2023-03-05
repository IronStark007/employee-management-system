const validateRequestData = (schema) => {
  return (req, res, next) => {
    let { error, value } = schema.validate(req.body);
    if (error) {
      res.status(422).send({ error: error.message });
    } else {
      req.validateData = value;
      next();
    }
  };
};

module.exports = validateRequestData;
