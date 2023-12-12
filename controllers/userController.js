const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

exports.userLogin = async (req, res) => {
  try {
    // On récupère et on vérifie l'email
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      //Ici on renvoie une error de type serveur 500 pour une question de sécurité
      res.status(500).json({ message: "utilisateur non trouvé" });
      return;
    }
    if (user.email == req.body.email && user.password == req.body.password) {
      const userData = {
        id: user.id,
        email: user.email,
        role: "admin",
      };
      // jwt Permet pleins d'options dont: définir l'algo, quand il expire
      const token = await jwt.sign(userData, process.env.JWT_KEY, {
        expiresIn: "10h",
      });
      // S'il n'y a pas d'error on génère le token
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Une erreur s'est produite lors du traitement" });
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
