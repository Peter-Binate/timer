const User = require("../models/userModel");
// const jwt = require("jsonwebtoken");
//require("dotenv").config();

exports.userRegister = async (req, res) => {
  try {
    let newUser = new User(req.body);
    let user = await newUser.save();
    res.status(201).json({ message: `Utilisateur crée: ${user.email}` });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Requete invalide" });
  }
};
