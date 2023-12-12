const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// Les posts en général: /posts
router.route("/register").post(userController.userRegister);

// Les id posts: /posts/:id_posts
// router.route("/login").post(userController.userLogin);

module.exports = router;
