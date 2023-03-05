global.express = require("express");
require("dotenv").config();

const app = express();
const morgan = require("morgan");
const common = require("./routes/common");
const employee = require("./routes/employees");
const department = require("./routes/departments");
const team = require("./routes/teams");
const { AppError } = require("./exceptions");

app.use(express.json());
app.use(morgan("combined"));
app.use(process.env.EMPLOYEE_PREFIX_URL, common);
app.use(`${process.env.EMPLOYEE_PREFIX_URL}/employee`, employee);
app.use(`${process.env.EMPLOYEE_PREFIX_URL}/department`, department);
app.use(`${process.env.EMPLOYEE_PREFIX_URL}/team`, team);

let port = process.env.PORT || 8080;

app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      type: err.constructor.name,
      status: err.status,
      message: err.message,
      traceback: err.stack,
    });
  } else {
    res.status(500).json({
      type: "GenericError",
      status: "error",
      message: err.message,
      traceback: err.stack,
    });
  }
  next();
});

app.listen(port, () => {
  console.log(`Connected to server on port: ${port}`);
});
