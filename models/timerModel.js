// Ici on créer notre base de donnée non-relationnelle
// On importe mongoose
const mongoose = require("mongoose");
// on acccède à toute les méthodes disponibles de mongoose que l'on stocke dans Schema
const Schema = mongoose.Schema;

let commentSchema = new Schema({
  time: {
    type: Number,
    required: true,
  },
  user_id: {
    type: String,
  },
});

module.exports = mongoose.model("Timer", timerSchema);
