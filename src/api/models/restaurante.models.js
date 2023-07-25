const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restauranteSchema = new Schema({

  nombre: { type: String, required: true },
  ciudad: { type: String, required: true },
  direccion: { type: String, required: true },
  carta: [{ type: Schema.Types.ObjectId, ref: "comida" }],

});

const Restaurante = mongoose.model("restaurante", restauranteSchema);

module.exports = Restaurante;
