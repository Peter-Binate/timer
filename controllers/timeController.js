const Time = require("../models/timerModel");
const User = require("../models/userModel");

exports.createATimer = async (req, res) => {
  try {
    // Si le timescore existe
    await User.findById(req.params.user_id);

    // On place le commentaire dans le post_id qui lui correspond
    const newTime = new Time({
      ...req.body,
      user_id: req.params.user_id,
    });

    try {
      // On insère les données dans la base de donnée
      const time = await newTime.save();
      res.status(201).json(time);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur (db)." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur (post inexistant)." });
  }
};
