const router = require("express").Router();
const exersizeController = require("../../controllers/exersizeController");

// Matches with "/api/books"
router.route("/workout")
 .get(exersizeController.findAll)
//  .post(exersizeController.create);

// Matches with "/api/books/:id"
router
 .route("workout/:id")
 .get(exersizeController.findById)
//  .put(exersizeController.update)
//  .delete(exersizeController.remove);

module.exports = router;