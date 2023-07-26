const express = require('express');
const coachsRouter = express.Router();

const {getCoachs} = require("../controllers/coachs.constroller")

coachsRouter.get("/", getCoachs);

module.exports = coachsRouter;