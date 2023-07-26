const express = require('express');
const usersRouter = express.Router();

const {getUsers} = require("../controllers/users.constroller")

usersRouter.get("/", getUsers);

module.exports = usersRouter;