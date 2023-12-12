const express = require("express");
// On va stocker ici toutes les routes
const router = express.Router();

const timeController = require("../controllers/timeController");

// Les posts en général: /posts
router.route("/:id_user/timer").post(timeController.timeController);

module.exports = router;
