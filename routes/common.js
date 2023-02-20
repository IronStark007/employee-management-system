const router = express.Router();
const common = require("../controller/common");

router.get("/home", common.getHome);
router.get("/health", common.getHealth);

module.exports = router;
