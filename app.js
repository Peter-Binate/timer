// On importe le module express
const express = require("express");
// Création d'une instance d'Express
const app = express();
// Définition du port sur lequel le serveur écoutera
const port = 3000;

// On se connecte à la base de donnée
const mongoose = require("mongoose");
