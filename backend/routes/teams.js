const router = express.Router();
const team = require("../controller/teams");
const validateRequestData = require("../middleware");
const { teamSchema, teamUpdateSchema } = require("../models/teams");

router.get("/", team.getAllTeams);
router.get("/:name", team.getTeamByName);
router.post("/", validateRequestData(teamSchema), team.insertTeam);
router.put(
  "/:name",
  validateRequestData(teamUpdateSchema),
  team.updateTeamByName
);
router.delete("/:name", team.deleteTeamByName);

module.exports = router;
