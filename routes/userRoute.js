const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const jwtMiddleWare = require("../middlewares/jwtMiddleware");

// Inscription new User
router.route("/register").post(userController.userRegister);

// Connexion User
router.route("/login").post(userController.userLogin);

router
  .route("/:id_user")
  .put(jwtMiddleWare.verifyToken, userController.updateAUser)
  .delete(jwtMiddleWare.verifyToken, userController.deleteAUser);

module.exports = router;
