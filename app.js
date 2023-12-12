// On importe le module express
const express = require("express");
// Création d'une instance d'Express
const app = express();
// Définition du port sur lequel le serveur écoutera
const port = 3000;

// On se connecte à la base de donnée
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/timer"); // Avec une installation local de mongodb

app.use(express.urlencoded({ extended: true }));
// Permet de comprendre le .json
app.use(express.json());

// Définition de la première route pour la racine de l'application
// app.get("/", (req, res) => {
//   res.send("Hello world"); // Envoie la réponse "Hello world" au client
//   res.status(200); // Définit le code de statut HTTP 200 (OK) - Inutile ici car `send` le fait automatiquement
// });

// UserRoute
const userRoute = require("./routes/userRoute");
app.use("/users", userRoute);

// TimeRoute
const timeRoute = require("./routes/timeRoute");
app.use("/", timeRoute);

// Démarrage du serveur Express et écoute sur le port spécifié
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Affiche un message dans la console lorsque le serveur démarre
});
