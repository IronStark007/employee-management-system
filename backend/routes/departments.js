const router = express.Router();
const department = require("../controller/departments");
const validateRequestData = require("../middleware");
const {
  departmentSchema,
  departmentUpdateSchema,
} = require("../models/departments");

router.get("/", department.getAllDepartments);
router.get("/:name", department.getDepartmentByName);
router.post(
  "/",
  validateRequestData(departmentSchema),
  department.insertDepartment
);
router.put(
  "/:name",
  validateRequestData(departmentUpdateSchema),
  department.updateDepartmentByName
);
router.delete("/:name", department.deleteDepartmentByName);

module.exports = router;
