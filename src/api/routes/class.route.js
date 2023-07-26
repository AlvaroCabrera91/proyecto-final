const express = require('express');
const classRouter = express.Router();

const {getClass} = require("../controllers/class.controller")

classRouter.get("/", getClass);

module.exports = classRouter;