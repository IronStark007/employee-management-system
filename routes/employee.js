const router = express.Router();
const employee = require('../controller/employee')
const middleware = require('../middlewares/employee');


router.get('/',middleware.responseMiddleware, employee.getAllEmployees);
router.get('/:id',middleware.responseMiddleware, employee.getOneEmployee);
router.post('/', middleware.requestMiddleware, employee.createEmployee);
router.put('/', middleware.requestMiddleware, employee.updateEmployee);
router.delete('/:id', employee.deleteEmployee);


module.exports = router;