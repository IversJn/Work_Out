const router = require("express").Router();
const exercizeRoutes = require("./exercizes");

// Book routes
router.use("/exercizes", exercizeRoutes);

module.exports = router;
 