const express = require("express");
const {getRestaurantes, postRestaurante} = require("../controllers/restaurante.controllers")

const restaurantesRoutes = express.Router()

restaurantesRoutes.get("/",getRestaurantes)
restaurantesRoutes.post("/",postRestaurante)


module.exports = restaurantesRoutes