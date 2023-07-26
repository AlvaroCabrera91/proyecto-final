const express = require("express")
const { getAllTrainers, postTrainer, putTrainer, deleteTrainer } = require("../controller/trainer.contoller")

const trainerRouter = express.Router()
trainerRouter.get("/", getAllTrainers)
trainerRouter.post("/", postTrainer)
trainerRouter.put("/:id", putTrainer)
trainerRouter.delete("/:id", deleteTrainer)

module.exports = trainerRouter