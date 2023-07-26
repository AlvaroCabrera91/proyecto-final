const express = require('express');
const usersRouter = express.Router();

const {getUsers,register,login} = require("../controllers/users.constroller")

usersRouter.get("/", getUsers);

usersRouter.post("/register", register);
usersRouter.post("/login", login);



module.exports = usersRouter;