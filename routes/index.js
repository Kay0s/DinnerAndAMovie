const router = express.Router();

const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");

router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

module.router = router;
