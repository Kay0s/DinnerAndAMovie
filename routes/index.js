let router = require("express").Router();
router.use("/api/dinner", require("./apiRoutes/dinner-routes"));
router.use("/api/movie", require("./apiRoutes/movie-routes"));
router.use("/", require("./htmlRoutes/html-routes"));
module.exports = router;
