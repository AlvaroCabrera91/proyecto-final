const Restaurante = require("../models/restaurante.models");

const getRestaurantes = async (req, res) => {
  try {
    // const allRestaurantes = await Restaurante.find().populate("carta");
    const allRestaurantes = await Restaurante.find().populate("carta", "nombre foto");

    return res.status(200).json(allRestaurantes);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postRestaurante = async ( req,res) => {
     try {
        const newRestaurante = new Restaurante(req.body);
        const createdRestaurante = await newRestaurante.save()
        return res.status(201).json(createdRestaurante) 
     } catch (error) {
        return res.status(500).json(error)
     }
}
module.exports = { getRestaurantes, postRestaurante};
