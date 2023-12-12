const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const jwtMiddleWare = require("../middlewares/jwtMiddleware");

// Les posts en général: /posts
router.route("/register").post(userController.userRegister);

router
  .route("/:id_user")
  .put(jwtMiddleWare.verifyToken, userController.updateAUser)
  .delete(jwtMiddleWare.verifyToken, userController.deleteAUser);

// Les id posts: /posts/:id_posts
// router.route("/login").post(userController.userLogin);

module.exports = router;
