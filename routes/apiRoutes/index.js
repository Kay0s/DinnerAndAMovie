const { now } = require("sequelize/types/lib/utils");

const router = express.Router();

const dinnerRoutes = require("./dinner-routes");
const movieRoutes = require("./movie-routes");

router.use("/dinner", dinnerRoutes);
router.use("/movie", movieRoutes);

module.router = router;
