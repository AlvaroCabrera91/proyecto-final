const express = require("express")
const {getComidas,postComidas,putComida,deleteComida} = require("../controllers/comida.controllers")
const {pruebaMiddleware,isAuth,isAdmin} = require("../../middlewares/auth")
const comidaRoutes = express.Router();

comidaRoutes.get("/", getComidas);
comidaRoutes.post("/",isAdmin,postComidas);
comidaRoutes.put("/:id", putComida);
comidaRoutes.delete("/:id", deleteComida);


module.exports= comidaRoutes;