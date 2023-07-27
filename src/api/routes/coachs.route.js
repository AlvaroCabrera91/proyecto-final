const express = require('express');
const coachsRouter = express.Router();

const {getCoachs, postCoach, putCoach, deleteCoach} = require("../controllers/coachs.constroller")

coachsRouter.get("/", getCoachs);
coachsRouter.post("/", postCoach)
coachsRouter.put("/:id", putCoach)
coachsRouter.delete("/:id", deleteCoach)

module.exports = coachsRouter;