const express = require('express');
const classRouter = express.Router();

const {getClass, getOneClass, getOneClassByName, getOneClassByType,deleteClass} = require("../controllers/class.controller")

classRouter.get("/", getClass);
classRouter.get("/:id", getOneClass)
classRouter.get("/findByName/:name", getOneClassByName)
classRouter.get("/findByType/:Type", getOneClassByType)
classRouter.get("/deleted/:deleteClass", deleteClass)

module.exports = classRouter;