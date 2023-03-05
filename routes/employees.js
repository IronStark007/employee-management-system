const router = express.Router();
const employee = require("../controller/employees");
const validateRequestData = require("../middleware");
const { employeeSchema, employeeUpdateSchema } = require("../models/employees");

router.get("/", employee.getAllEmployees);
router.get("/:username", employee.getOneEmployeeByName);
router.post("/", validateRequestData(employeeSchema), employee.createEmployee);
router.put(
  "/:username",
  validateRequestData(employeeUpdateSchema),
  employee.updateEmployee
);
router.delete("/:username", employee.deleteEmployee);

module.exports = router;
