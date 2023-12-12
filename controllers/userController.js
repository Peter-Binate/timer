const User = require("../models/userModel");
// const jwt = require("jsonwebtoken");
//require("dotenv").config();

// On créé le user
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

// Mise à jour des User
exports.updateAUser = async (req, res) => {
  try {
    // On met à jour les champs du post
    const user = await User.findByIdAndUpdate(req.params.id_user, req.body, {
      // empêche de renvoyer l'ancien élément dans postman
      new: true,
    });

    // Enregistrez les modifications
    res.status(200);
    res.json(user);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ message: "Erreur serveur" });
  }
};

//Delete User
exports.deleteAUser = async (req, res) => {
  try {
    // On met à jour les champs du post
    await User.findByIdAndDelete(req.params.id_post);

    // Enregistrez les modifications
    res.status(200);
    res.json({ message: "User supprimé" });
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ message: "Erreur serveur" });
  }
};
