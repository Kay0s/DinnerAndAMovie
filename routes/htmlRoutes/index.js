const router = express.Router();

const htmlRoutes = require("./html-routes");

router.use("/", htmlRoutes);

module.router = router;
